var inquirer = require('inquirer');
var fs = require('fs');

var boolChoices = ['Yes', 'No'];

runSetup();

function runSetup() {
  var questions = [
    {
      name: 'length',
      default: 16,
      message: 'How many characters would you like in your passwords?',
      validate: function (value) {
        // Check if the given value is a number
        if (!isNaN(value)) {
          return true;
        }

        // Return an error message
        return 'Not a number 🙁  Please enter a valid number ☝️';
      },
      filter: function (value) {
        // Parse the value to an integer (inquirer is using strings as default)
        return parseInt(value);
      }
    },
    {
      type: 'list',
      name: 'numbers',
      message: 'Would you like numbers in your passwords?',
      choices: boolChoices,
      default: 0,
      filter: filterBool
    },
    {
      type: 'list',
      name: 'symbols',
      message: 'Would you like symbols in your passwords?',
      choices: boolChoices,
      default: 0,
      filter: filterBool
    },
    {
      type: 'list',
      name: 'uppercase',
      message: 'Would you like uppercase letters in your passwords?',
      choices: boolChoices,
      default: 0,
      filter: filterBool
    },
    {
      type: 'list',
      name: 'excludeSimilarCharacters',
      message: 'Would you like to exclude similar characters in your passwords? (eg. ilLI)',
      choices: boolChoices,
      default: 0,
      filter: filterBool
    },
    {
      name: 'exclude',
      message: 'If you want to exclude special characters from your passwords, then type them here:'
    },
    {
      type: 'list',
      name: 'strict',
      message: 'Would you like to include at least one character from each character type in your passwords?',
      choices: boolChoices,
      default: 0,
      filter: filterBool
    },
    {
      type: 'list',
      name: 'showPassword',
      message: 'Would you like to see the generated passwords in the console output',
      choices: boolChoices,
      default: 1,
      filter: filterBool
    }
  ];

  // Ask the questions, and write the config
  inquirer.prompt(questions).then(function (config) {
    writeConfig(config);
  });
}

/**
 * Used to filter bool answers
 * Checks if the answer is matching 'Yes' from the boolChoices array
 * @param value
 * @returns {boolean}
 */
function filterBool(value) {
  return value === boolChoices[0];
}

/**
 * Writes the config to config.json which is used in index.js
 * @param config
 */
function writeConfig(config) {
  fs.writeFile("./config.json", JSON.stringify(config), 'utf8', function () {
    console.log("Config written, have fun!");
  });
}