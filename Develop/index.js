// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project called?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'projectDesc',
    },
    {
        type: 'input',
        message: 'Installation instructions?',
        name: 'projectIns',
    },
    {
        type: 'input',
        message: 'Usage information?',
        name: 'projectUsage',
    },
    {
        type: 'input',
        message: 'Contribution guidelines?',
        name: 'projectContr',
    },
    {
        type: 'input',
        message: 'Test Instructions?',
        name: 'test',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
 