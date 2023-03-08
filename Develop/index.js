// Set required npm's
const inquirer = require('inquirer');
const fs = require('fs');
// const fs = require("fs");
// const path = require("path");

// Import lib.js files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questionsManager = require('./lib/questions.Manager');
const questionsEngineer = require('./lib/questions.Engineer');
const questionsIntern = require('./lib/questions.Intern');

// Array of team member's when team is complete
const genereatedTeamArray = [];


// New team member question prompt
const newEmployeePrompt = [
    {
        type: 'list',
        message: 'What\'s the role of the employee you want to add to your team?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern', 'My team is complete!']
    }]

const addEmployee = () => {
    inquirer.prompt(newEmployeePrompt)
        .then((answer) => {
            if ('My team is complete!') {
                console.log(genereatedTeamArray);
                // console.log(------generate html function----------);
            } else if (answer.role === 'Manager') {
                inquirer.prompt(questionsManager)
                    .then((answers) => {
                        const answersManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                        genereatedTeamArray.push(answersManager);
                        console.log(answersManager);
                        console.log(genereatedTeamArray[0]);
                        addEmployee();
                    })
            } else if (answer.role === 'Engineer') {
                inquirer.prompt(questionsEngineer)
                    .then((answers) => {
                        const answersEngineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHubUsername);
                        genereatedTeamArray.push(answersEngineer);
                        console.log(answersEngineer);
                        console.log(genereatedTeamArray[1]);
                        addEmployee();
                    })
            } else if (answer.role === 'Intern') {
                inquirer.prompt(questionsIntern)
                    .then((answers) => {
                        const answersIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
                        genereatedTeamArray.push(answersIntern);
                        console.log(answersIntern);
                        console.log(genereatedTeamArray[2]);
                        addEmployee();
                    })
            }
        })
}


// Add function to generate html and write to file
function generateMyTeam() {
};


// Initialize the application
const init = async () => {
    await inquirer.prompt(questionsManager)
        .then((answers) => {
            const answersManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            genereatedTeamArray.push(answersManager);
            console.log(answersManager);
            console.log(genereatedTeamArray[0]);
            addEmployee();
        })
};

init()

