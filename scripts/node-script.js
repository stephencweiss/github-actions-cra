#!/usr/bin/env node

console.log('I am a simple script!')

// read the package.json
// parse the version
// update the version
// save the package.json

const fs = require('fs');

const rawPackage = fs.readFileSync('../package.json')
const parsedPackage = JSON.parse(rawPackage)
console.log({parsedPackage})