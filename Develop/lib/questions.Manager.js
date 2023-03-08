const inquirer = require('inquirer');

const questionsManager = () => inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of your team\'s manager?',
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
        message: 'What is your manager\'s employee ID?',
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
        message: 'What is your manager\'s email address?',
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
]);

// Exports the file
module.exports = questionsManager