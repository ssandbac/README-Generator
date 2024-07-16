// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');
const fileName = process.argv[2];
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title for your ReadMe?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines for this project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the test instructions for this project?',
        name: 'testing',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for this project',
        choices: ['GPL V3', 'MIT License', 'Mozilla Public License', 'Apache License'],
    },];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
