// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
    {
        type: 'checkbox',
        message: 'Choose license(s)',
        choices: ['MIT', 'IBM'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Email?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err? console.log(err) : console.log("GR8 SUCCESS"))
}

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions)
    .then((response) => {
        const readMeStuff = generateMarkdown(response);
        writeToFile('README.md', readMeStuff);

    })
}

// Function call to initialize app
init();
 