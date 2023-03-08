const inquirer = require('inquirer')

const questionsEngineer = () => inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of your team\'s engineer?',
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
        message: 'What is your engineer\'s employee ID?',
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
        message: 'What is your engineer\'s email address?',
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
    {
        type: 'confirm',
        name: 'addAnother',
        message: 'Would you like to add another employee?',
    },
]);

// Exports the file
module.exports = questionsEngineer