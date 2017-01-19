var clipboard = require('copy-paste');
var generator = require('generate-password');

var password = generator.generate({
	length: 16,
	numbers: true,
	symbols: true,
	excludeSimilarCharacters: true
});

clipboard.copy(password, function () {
  console.log('Copied your password to clipboard 🔑');
  console.log(password);
});
