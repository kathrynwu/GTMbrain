#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const modulesRoot = path.join(repoRoot, "modules");

const allowedStatuses = new Set(["planned", "first-release"]);
const allowedSurfaces = new Set(["Template", "Playbook", "Connector", "Skill"]);

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exitCode = 1;
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    fail(`could not parse JSON ${filePath}: ${error.message}`);
    return null;
  }
}

function expectString(value, label, filePath) {
  if (typeof value !== "string" || value.trim() === "") {
    fail(`${filePath} missing non-empty string for ${label}`);
    return false;
  }
  return true;
}

if (!fs.existsSync(modulesRoot)) {
  fail(`missing modules directory: ${modulesRoot}`);
  process.exit(process.exitCode || 1);
}

const moduleDirs = fs
  .readdirSync(modulesRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

if (moduleDirs.length === 0) {
  fail("no modules found");
}

const seenSlugs = new Set();

for (const dirName of moduleDirs) {
  const dirPath = path.join(modulesRoot, dirName);
  const moduleJsonPath = path.join(dirPath, "module.json");
  const readmePath = path.join(dirPath, "README.md");

  if (!fs.existsSync(moduleJsonPath)) {
    fail(`missing ${moduleJsonPath}`);
    continue;
  }

  if (!fs.existsSync(readmePath)) {
    fail(`missing ${readmePath}`);
  }

  const moduleJson = readJson(moduleJsonPath);
  if (!moduleJson) {
    continue;
  }

  expectString(moduleJson.name, "name", moduleJsonPath);
  expectString(moduleJson.slug, "slug", moduleJsonPath);
  expectString(moduleJson.job, "job", moduleJsonPath);
  expectString(moduleJson.primary_action, "primary_action", moduleJsonPath);

  if (moduleJson.slug && moduleJson.slug !== dirName) {
    fail(`${moduleJsonPath} slug "${moduleJson.slug}" does not match directory "${dirName}"`);
  }

  if (moduleJson.slug) {
    if (seenSlugs.has(moduleJson.slug)) {
      fail(`duplicate module slug "${moduleJson.slug}"`);
    }
    seenSlugs.add(moduleJson.slug);
  }

  if (!allowedStatuses.has(moduleJson.status)) {
    fail(`${moduleJsonPath} has invalid status "${moduleJson.status}"`);
  }

  if (!Array.isArray(moduleJson.audience) || moduleJson.audience.length === 0) {
    fail(`${moduleJsonPath} audience must be a non-empty array`);
  }

  if (!Array.isArray(moduleJson.surfaces) || moduleJson.surfaces.length === 0) {
    fail(`${moduleJsonPath} surfaces must be a non-empty array`);
  } else {
    for (const surface of moduleJson.surfaces) {
      if (!allowedSurfaces.has(surface)) {
        fail(`${moduleJsonPath} has invalid surface "${surface}"`);
      }
    }
  }

  if (moduleJson.status === "first-release") {
    if (!Array.isArray(moduleJson.required_paths) || moduleJson.required_paths.length === 0) {
      fail(`${moduleJsonPath} first-release modules must define required_paths`);
    }
  }

  if (Array.isArray(moduleJson.required_paths)) {
    for (const relativePath of moduleJson.required_paths) {
      if (typeof relativePath !== "string" || relativePath.trim() === "") {
        fail(`${moduleJsonPath} has invalid required path entry`);
        continue;
      }
      if (path.isAbsolute(relativePath) || relativePath.includes("..")) {
        fail(`${moduleJsonPath} has unsafe required path "${relativePath}"`);
        continue;
      }
      const absolutePath = path.join(dirPath, relativePath);
      if (!fs.existsSync(absolutePath)) {
        fail(`${moduleJsonPath} references missing path ${relativePath}`);
      }
    }
  }

  if (moduleJson.status === "planned") {
    const requiredPaths = moduleJson.required_paths || [];
    if (requiredPaths.length > 0) {
      fail(`${moduleJsonPath} planned modules should not declare required_paths yet`);
    }
  }
}

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log(`Validated ${moduleDirs.length} modules.`);
