// Set required npm's
const inquirer = require('inquirer');
const fs = require('fs');

// Import lib.js files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questionsManager = require('./lib/questions.Manager');
const questionsEngineer = require('./lib/questions.Engineer');
const questionsIntern = require('./lib/questions.Intern');
const { log } = require('console');

// Array of team member's when team is complete
const myTeamGenerated = []

// Initialize the application


// New team member question
const addNewEmployeeQuestion = [
    {
        type: 'list',
        message: 'What\'s the role of the employee you want to add to your team?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern', 'My team is complete!']
    }
]

const addNewEmployee = () => {
    inquirer.prompt(addNewEmployeeQuestion)
        .then((answer) => {
            if ('My team is complete!') {
                console.log(myTeamGenerated);
                // console.log(------generate html function----------);
            } else if (answer.role === 'Manager') {
                inquirer.prompt(questionsManager)
                    .then((answers) => {
                        const answersManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                        myTeamGenerated.push(answersManager);
                        console.log(answersManager);
                        console.log(myTeamGenerated[0]);
                        addNewEmployee();
                    })
            } else if (answer.role === 'Engineer') {
                inquirer.prompt(questionsEngineer)
                    .then((answers) => {
                        const answersEngineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHubUsername);
                        myTeamGenerated.push(answersEngineer);
                        console.log(answersEngineer);
                        console.log(myTeamGenerated[1]);
                        addNewEmployee();
                    })
            } else if (answer.role === 'Intern') {
                inquirer.prompt(questionsIntern)
                    .then((answers) => {
                        const answersIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
                        myTeamGenerated.push(answersIntern);
                        console.log(answersIntern);
                        console.log(myTeamGenerated[2]);
                        addNewEmployee();
                    })
            }
        })
}

// Add function to generate html and write to file
function generateFinishedTeam () {

}

init ()

