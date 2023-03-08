const inquirer = require('inquirer')

const questionsEngineer = [
    {
        type: 'input',
        message: 'What is the name of your team\'s engineer?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your engineer\'s employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your engineer\'s email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your engineer\'s GitHub username?',
        name: 'gitHubUsername',
    },
];

// Exports the file
module.exports = questionsEngineer