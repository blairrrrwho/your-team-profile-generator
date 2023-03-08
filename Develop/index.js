// Set dependencies for index.js
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, 'outputPath')
const outputPath = path.join(OUTPUT_DIR, 'myTeam.html');

// Import lib.js files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questionsManager = require('./lib/questions.Manager');
const questionsEngineer = require('./lib/questions.Engineer');
const questionsIntern = require('./lib/questions.Intern');
const generateTeamPage = require('./src/generateTeamPage')

// Array of team member's when team is complete
// Global variables
const genereatedTeamArray = [];


// New team member question prompt
const newEmployeePrompt = [
    {
        type: 'list',
        message: 'What\'s the role of the employee you want to add to your team?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern', 'My team is complete!']
    }]

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

const addEmployee = () => {
    inquirer.prompt(newEmployeePrompt)
        .then((answer) => {
            if ('My team is complete!') {
                finishedTeam();
                console.log(genereatedTeamArray);
                console.log("My team is complete!");
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
const finishedTeam = () => {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateTeamPage(genereatedTeamArray), "utf-8");
}

// Starts application
init()