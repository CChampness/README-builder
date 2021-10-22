const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require("./generateMarkDown");

// This is a command-line application
// what the app is for
// how to use the app
// in bash, node index.js
// how to install
// how to report issues
// how to make contributions
// [Inquirer package](https://www.npmjs.com/package/inquirer)
// Based on [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
//////////////////////
// License badge
// 
// Title
// Table of Contents
// License (explanation)
// Description
// Installation
// Usage
// Contributing
// Tests
// Questions 
// --link to github profile
// --email

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What title will you give this application?',
  },
//   {
//     type: 'list',
//     message: 'What license will you give this application?',
//     name: 'license',
//     choices: ['MIT', 'GPL', 'CC-O', 'UnLicense'],
//   },
//   {
//     type: 'input',
//     message: 'Describe this application:',
//     name: 'description',
//   },
//   {
//     type: 'input',
//     message: 'Procedure to install this application:',
//     name: 'installation',
//   },
//   {
//     type: 'input',
//     message: 'How to use this application:',
//     name: 'usage',
//   },
//   {
//     type: 'input',
//     message: 'How to contribute to this application (github):',
//     name: 'contributing',
//   },
//   {
//     type: 'input',
//     message: 'Tests that have been run for this application:',
//     name: 'tests',
//   },
//   {
//     type: 'input',
//     message: 'Questions?',
//     name: 'questions',
//   },
];

inquirer
  .prompt(questions)
  .then((data) => {
    const filename = "generatedREADME.md";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

  // Write README file
function writeToFile(fileName, data) {}

// Initialize app
function init() {}

init();
