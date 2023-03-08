const inquirer = require('inquirer')

const questionsIntern = () => inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of your team\'s intern?',
        name: 'name',
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log('Please enter the employee\'s name!');
                return false;
            }
        },
    },
    {
        type: 'input',
        message: 'What is your intern\'s employee ID?',
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
        message: 'What is your intern\'s email address?',
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
        message: 'What school is your intern currently attending?',
        name: 'school',
    },
    {
        type: 'confirm',
        name: 'addAnother',
        message: 'Would you like to add another employee?',
    },
]);

// Exports the file
module.exports = questionsIntern