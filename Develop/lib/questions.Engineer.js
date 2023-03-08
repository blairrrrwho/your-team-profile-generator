const inquirer = require('inquirer')

const questionsEngineer = [
    {
        type: 'input',
        message: 'What is the name of your team\'s engineer? (Required)',
        name: 'name',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the employee\'s name!');
                return false;
            }
        },
    },
    {
        type: 'input',
        message: 'What is your engineer\'s employee ID? (Required)',
        name: 'id',
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log('Please enter the employee\'s ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is your engineer\'s email address? (Required)',
        name: 'email',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter the employee\'s email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is your engineer\'s GitHub username?',
        name: 'gitHubUsername',
    },
];

// Exports the file
module.exports = questionsEngineer