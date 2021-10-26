const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown.js");
// This is a command-line application to create a README file.
// Collect user input for the available sections of the REAEDME file
// To use the app in bash, thye node index.js
// To install the app, first npm install the inquirer package
// The README file that is created will be in mardown format and is based on
//  the Professional README Guide at (https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What title will you give this application?',
  },
  {
    type: 'input',
    message: 'Describe this application:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Path or URL to snapshot for this application:',
    name: 'snapshot',
  },
  {
    type: 'input',
    message: 'Procedure to install this application:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'How to use this application:',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'What license will you give this application?',
    name: 'license',
    choices: ['<none>', 'MIT', 'GPL', 'Apache', 'BSD'],
  },
  {
    type: 'input',
    message: 'How to contribute to this application:',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Tests that have been run for this application:',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'You may credit any collaborators:',
    name: 'credits',
  },
  {
    type: 'input',
    message: 'Email for questions or to report issues:',
    name: 'email',
  },
  {
    type: 'input',
    message: 'GitHub profile:',
    name: 'github',
  },
];

// Write README file
function writeToFile(fileName, answers) {
  fs.writeFile(fileName, generateMarkdown(answers), (err) =>
    err ? console.log(err) : console.log('Success!'));
}

// Initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((data) => {
    const filename = "README.md";
    writeToFile(filename, data);
  });
}

init();
