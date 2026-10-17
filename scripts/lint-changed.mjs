import { spawnSync } from "node:child_process";
import console from "node:console";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);

function gitOutput(args) {
  const result = spawnSync("git", args, {
    cwd: repositoryRoot,
    encoding: "utf8",
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(result.stderr.trim() || `git ${args[0]} failed`);
  }

  return result.stdout.split("\0").filter(Boolean);
}

try {
  const changedFiles = new Set([
    ...gitOutput(["diff", "--name-only", "--diff-filter=ACMR", "-z", "HEAD"]),
    ...gitOutput(["ls-files", "--others", "--exclude-standard", "-z"]),
  ]);
  const eslintFiles = [...changedFiles]
    .filter((file) => /\.(?:[cm]?js|jsx|tsx?)$/i.test(file))
    .map((file) => path.resolve(repositoryRoot, file))
    .filter(existsSync);

  if (eslintFiles.length === 0) {
    console.log("No changed JavaScript/TypeScript files to lint.");
    process.exit(0);
  }

  const eslintCli = path.join(
    repositoryRoot,
    "node_modules",
    "eslint",
    "bin",
    "eslint.js",
  );
  const result = spawnSync(
    process.execPath,
    [eslintCli, "--cache", ...eslintFiles],
    { cwd: repositoryRoot, stdio: "inherit" },
  );

  if (result.error) {
    throw result.error;
  }

  process.exitCode = result.status ?? 1;
} catch (error) {
  console.error(
    `lint:changed failed: ${error instanceof Error ? error.message : String(error)}`,
  );
  process.exitCode = 1;
}
