import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, URL } from "node:url";
import { spawnSync } from "node:child_process";
import console from "node:console";
import process from "node:process";

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const formatExtensions = new Set([
  ".cjs",
  ".css",
  ".html",
  ".js",
  ".json",
  ".jsx",
  ".md",
  ".mjs",
  ".ts",
  ".tsx",
]);
const lintExtensions = new Set([".cjs", ".js", ".jsx", ".mjs", ".ts", ".tsx"]);

function readHookInput() {
  return JSON.parse(readFileSync(0, "utf8"));
}

function normalizedToolName(event) {
  return String(event.toolName ?? event.tool_name ?? "")
    .replace(/[^a-z]/gi, "")
    .toLowerCase();
}

function collectFilePaths(value, paths = [], parentKey = "") {
  if (typeof value === "string") {
    if (
      /^(file|file_path|filepath|path|uri|target|filename|file_name|files)$/i.test(
        parentKey,
      ) &&
      value.length < 4096 &&
      !/[\r\n]/.test(value)
    ) {
      paths.push(value);
    }
    return paths;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      collectFilePaths(item, paths, parentKey);
    }
    return paths;
  }

  if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      collectFilePaths(item, paths, key);
    }
  }

  return paths;
}

function resolveWorkspaceFiles(event) {
  const args = event.toolArgs ?? event.tool_args ?? event.tool_input ?? {};
  const uniquePaths = new Set();

  for (const candidate of collectFilePaths(args)) {
    let absolutePath;
    try {
      absolutePath = candidate.startsWith("file:")
        ? fileURLToPath(new URL(candidate))
        : path.resolve(repositoryRoot, candidate);
    } catch {
      continue;
    }

    const relativePath = path.relative(repositoryRoot, absolutePath);
    if (
      relativePath === "" ||
      relativePath === ".." ||
      relativePath.startsWith(`..${path.sep}`) ||
      path.isAbsolute(relativePath) ||
      !existsSync(absolutePath)
    ) {
      continue;
    }

    uniquePaths.add(absolutePath);
  }

  return [...uniquePaths];
}

function denyNoisyRead(event) {
  const toolName = normalizedToolName(event);
  if (
    ![
      "read",
      "readfile",
      "readfilecontents",
      "getfilecontents",
      "view",
    ].includes(toolName)
  ) {
    return;
  }

  const noisyPath = resolveWorkspaceFiles(event).find((file) => {
    const relativePath = path.relative(repositoryRoot, file);
    return (
      relativePath
        .split(path.sep)
        .some((part) => part === "node_modules" || part === "dist") ||
      path.basename(file) === "package-lock.json" ||
      path.basename(file).endsWith(".tsbuildinfo")
    );
  });

  if (noisyPath) {
    const reason =
      "Generated and dependency files are excluded; inspect source files instead.";
    process.stdout.write(
      `${JSON.stringify({
        permissionDecision: "deny",
        permissionDecisionReason: reason,
        hookSpecificOutput: {
          hookEventName: "PreToolUse",
          permissionDecision: "deny",
          permissionDecisionReason: reason,
        },
      })}\n`,
    );
  }
}

function runLocalCli(packageName, cliPath, args) {
  const executable = path.join(
    repositoryRoot,
    "node_modules",
    packageName,
    cliPath,
  );
  if (!existsSync(executable)) {
    throw new Error(
      `Cannot find ${packageName}; install repository dependencies first.`,
    );
  }

  const result = spawnSync(process.execPath, [executable, ...args], {
    cwd: repositoryRoot,
    stdio: "inherit",
  });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(
      `${packageName} exited with status ${result.status ?? "unknown"}.`,
    );
  }
}

function formatEditedFiles(event) {
  const toolName = normalizedToolName(event);
  if (!/(edit|write|create|applypatch|replace)/.test(toolName)) {
    return;
  }

  const files = resolveWorkspaceFiles(event);
  const formatFiles = files.filter((file) =>
    formatExtensions.has(path.extname(file).toLowerCase()),
  );
  if (formatFiles.length === 0) {
    return;
  }

  runLocalCli("prettier", "bin/prettier.cjs", ["--write", ...formatFiles]);

  const lintFiles = formatFiles.filter((file) =>
    lintExtensions.has(path.extname(file).toLowerCase()),
  );
  if (lintFiles.length > 0) {
    runLocalCli("eslint", "bin/eslint.js", ["--fix", ...lintFiles]);
  }
}

try {
  const event = readHookInput();
  const hook = process.argv[2];

  if (hook === "pre") {
    denyNoisyRead(event);
  } else if (hook === "post") {
    formatEditedFiles(event);
  } else {
    throw new Error("Expected hook mode 'pre' or 'post'.");
  }
} catch (error) {
  console.error(
    `Agent hook failed: ${error instanceof Error ? error.message : String(error)}`,
  );
  process.exitCode = 1;
}
