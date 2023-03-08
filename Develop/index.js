// Set dependencies for index.js
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, 'outputPath')
const outputPath = path.join(OUTPUT_DIR, 'myTeam.html');
const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const questionsManager = require('./lib/questions.Manager');
const questionsEngineer = require('./lib/questions.Engineer');
const questionsIntern = require('./lib/questions.Intern');
const generateTeamPage = require('./src/generateTeamPage')

// Array of team member's when team is complete
// Global variables
const genereatedTeamArray = [];


// Welcome prompt before question prompts
const welcomePrompt = async () => {
    welcome = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'welcome',
            message: 'Welcome to Your Team Profile Generator! Whenever you are ready to input your team members\'s information, select yes to continue,',
        }
    ])
    if (welcome) {
        teamMemObj = await questionsManager();
        const manager = new Manager(teamMemObj);
        genereatedTeamArray.push(manager);
        if (teamMemObj.addAnother) {
            return prompts();
        } else {
            finishedTeam();
        };
    }
}

// Add new team member prompt
const newEmployeePrompt = [
    {
        type: 'list',
        message: 'Which employee role would you like to add to your team?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern', 'My team is complete!']
    }
];

//placeholder function to test current function outputs. 
// const finishedTeam = () => generateTeamPage(genereatedTeamArray);

// Functions to display the specific questions for each role
const prompts = async () => {
    let teamMemObj = {};
    const employee = await inquirer.prompt(newEmployeePrompt);

    switch (employee.newEmployeePrompt) {
        case 'Engineer':
            teamMemObj = await questionsEngineer();
            const engineer = new Engineer(teamMemObj);
            genereatedTeamArray.push(engineer);
            if (teamMemObj.addAnother) {
                return prompts();
            } else {
                finishedTeam();
            }
            break;

        case 'Intern':
            teamMemObj = await questionsIntern();
            const intern = new Intern(teamMemObj);
            genereatedTeamArray.push(intern);
            if (teamMemObj.addAnother) {
                return prompts();
            } else {
                finishedTeam();
            }
            break;
        default:
            console.log('you have reached the default switch statement. thant should not happen. Please try again!');
    }
}

// const init = () => {
//     await inquirer.prompt(questionsManager)
//         .then((answers) => {
//             const answersManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
//             genereatedTeamArray.push(answersManager);
//             console.log(answersManager);
//             addEmployee();
//         })
// };

// Function to display questions for each type of employee
// const addEmployee = () => {
//     inquirer.prompt(newEmployeePrompt)
//         .then((answer) => {
//             if ('My team is complete!') {
//                 finishedTeam();
//                 console.log(genereatedTeamArray);
//                 console.log("My team is complete!");
//             } else if (answer.role === 'Engineer') {
//                 inquirer.prompt(questionsEngineer)
//                     .then((answers) => {
//                         const answersEngineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHubUsername);
//                         genereatedTeamArray.push(answersEngineer);
//                         console.log(answersEngineer);
//                         init();
//                     })
//             } else if (answer.role === 'Intern') {
//                 inquirer.prompt(questionsIntern)
//                     .then((answers) => {
//                         const answersIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
//                         genereatedTeamArray.push(answersIntern);
//                         console.log(answersIntern);
//                         addEmployee();
//                     })
//             }
//         })
// }


// Add function to generate html and write to file
const finishedTeam = () => {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateTeamPage(genereatedTeamArray), "utf-8");
}

// Starts application
welcomePrompt();