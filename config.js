var inquirer = require('inquirer');
var fs = require('fs');

runSetup();

function runSetup() {
  var questions = [
    
  ];

  inquirer.prompt(questions).then(function (config) {
    writeToFile(config);
  });
}

function writeConfig(config) {

}