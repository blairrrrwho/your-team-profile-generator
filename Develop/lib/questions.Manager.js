const inquirer = require('inquirer')

const questionsManager = [
    {
        type: 'input',
        message: 'What is the name of your team\'s manager?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your manager\'s employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your manager\'s email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your manager\'s office number?',
        name: 'officeNumber',
    },
];

// Exports the file
module.exports = questionsManager