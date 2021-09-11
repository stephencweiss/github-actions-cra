#!/usr/bin/env node
const { incrementVersion } = require("./increment-version");

function incPatchVersion(version) {
  const [major, minor, patch] = version.split(".");
  const newPatch = String(Number(patch) + 1);
  return [major, minor, newPatch].join(".");
}
incrementVersion(incPatchVersion);
