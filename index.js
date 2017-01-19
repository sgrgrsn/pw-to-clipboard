var clipboard = require('copy-paste');
var generator = require('generate-password');

var password = generator.generate({
	length: 16,
	numbers: true,
	symbols: true,
	excludeSimilarCharacters: true
});

clipboard.copy(password, function () {
  // Show an output message in green font color - reset the color it in the end
  console.log('\x1b[32m', 'Copied your password to clipboard 🔑', '\x1b[0m');

  // Show the password in inversed colors
  console.log(' \x1b[7m', password, '\x1b[0m');
});
