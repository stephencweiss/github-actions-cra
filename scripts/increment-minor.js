#!/usr/bin/env node
const {incrementVersion} = require('./increment-version');

function incMinorVersion(version) {
  const [major, minor, patch] = version.split(".");
  const newMinor = String(Number(minor) + 1);
  return [major, newMinor, patch].join(".");
}
incrementVersion(incMinorVersion, true);
