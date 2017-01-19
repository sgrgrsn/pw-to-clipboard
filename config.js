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
      message: 'Would you like to exclude similar characters in your passwords? (eg. iIl|1)',
      choices: boolChoices,
      default: 0,
      filter: filterBool
    },
    {
      type: 'list',
      name: 'excludeSimilarCharacters',
      message: 'Would you like to exclude similar characters in your passwords? (eg. iIl|1)',
      choices: boolChoices,
      default: 0,
      filter: filterBool
    },
    {
      name: 'exclude',
      message: 'If you want to exclude special characters, then type them now:'
    }
  ];

  inquirer.prompt(questions).then(function (config) {
    writeConfig(config);
  });
}

function writeConfig(config) {
  console.log(JSON.stringify(config));
}

function filterBool(value) {
  return value === boolChoices[0];
}