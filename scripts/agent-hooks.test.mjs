import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import test from "node:test";

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const hookScript = path.join(repositoryRoot, "scripts", "agent-hooks.mjs");

function runHook(mode, event) {
  return spawnSync(process.execPath, [hookScript, mode], {
    cwd: repositoryRoot,
    encoding: "utf8",
    input: JSON.stringify(event),
  });
}

test("pre hook denies reads from generated and dependency files", () => {
  const fixtureRoot = mkdtempSync(
    path.join(repositoryRoot, ".agent-hooks-test-"),
  );

  try {
    const generatedFile = path.join(fixtureRoot, "dist", "generated.js");
    mkdirSync(path.dirname(generatedFile));
    writeFileSync(generatedFile, "");

    const result = runHook("pre", {
      toolName: "read_file",
      toolArgs: { file_path: generatedFile },
    });

    assert.equal(result.status, 0, result.stderr);
    assert.equal(JSON.parse(result.stdout).permissionDecision, "deny");
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("pre hook allows reads from source files", () => {
  const result = runHook("pre", {
    toolName: "read_file",
    toolArgs: { file_path: path.join(repositoryRoot, "AGENTS.md") },
  });

  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.stdout, "");
});

test("post hook formats edited files", () => {
  const fixtureRoot = mkdtempSync(
    path.join(repositoryRoot, ".agent-hooks-test-"),
  );
  const jsonFile = path.join(fixtureRoot, "example.json");

  try {
    writeFileSync(jsonFile, '{"foo":"bar"}');

    const result = runHook("post", {
      toolName: "edit",
      toolArgs: { filePath: jsonFile },
    });

    assert.equal(result.status, 0, result.stderr);
    assert.equal(readFileSync(jsonFile, "utf8"), '{ "foo": "bar" }\n');
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});
