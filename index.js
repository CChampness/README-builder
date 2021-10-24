const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown.js");
// This is a command-line application
// what the app is for
// how to use the app
// in bash, node index.js
// how to install
// how to report issues
// how to make contributions
// Based on [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

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
    choices: ['', 'MIT', 'GPL', 'CC-0', 'Unlicense'],
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

inquirer
  .prompt(questions)
  .then((data) => {
    const filename = "generatedREADME.md";
    writeToFile(filename, data);
  });

// Write README file
function writeToFile(fileName, answers) {
  fs.writeFile(fileName, generateMarkdown(answers), (err) =>
    err ? console.log(err) : console.log('Success!'));
}

// Initialize app
function init() {}

init();
