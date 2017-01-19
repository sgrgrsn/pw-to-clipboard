#!/usr/bin/env node

var clipboard = require('copy-paste');
var generator = require('generate-password');

var config = require('./config.json');

var password = generator.generate({
	length: config['length'],
	numbers: config['numbers'],
	symbols: config['symbols'],
	excludeSimilarCharacters: config['excludeSimilarCharacters']
});

clipboard.copy(password, function () {
  // Show an output message in green font color - reset the color it in the end
  console.log('\x1b[32m', 'Copied your password to clipboard 🔑', '\x1b[0m');

  if (config['showPassword']) {
    // Show the password in inversed colors
    console.log(' \x1b[7m', password, '\x1b[0m');
  }
});
