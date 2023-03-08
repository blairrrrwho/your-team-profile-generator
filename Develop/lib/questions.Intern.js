const inquirer = require('inquirer')

const questionsIntern = [
    {
        type: 'input',
        message: 'What is the name of your team\'s intern?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your intern\'s employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your intern\'s email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Where did your intern go to school?',
        name: 'school',
    },
];

// Exports the file
module.exports = questionsIntern