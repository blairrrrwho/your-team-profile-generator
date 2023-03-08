const inquirer = require('inquirer')

const questionsManager = [
    {
        type: 'input',
        message: 'What is the name of your team\'s manager? (Required)',
        name: 'name',
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log('Please enter the employee\'s name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is your manager\'s employee ID? (Required)',
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
        message: 'What is your manager\'s email address? (Required)',
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
        message: 'What is your manager\'s office number?',
        name: 'officeNumber',
    },
];

// Exports the file
module.exports = questionsManager