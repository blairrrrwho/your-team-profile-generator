// Set required npm's
const inquirer = require('inquirer');
const fs = require ('fs');

// Import lib.js files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questionsManager = require('./lib/questions.Manager');
const questionsEngineer = require('./lib/questions.Engineer');
const questionsIntern = require('./lib/questions.Intern');


// New team member question
const newEmployeeQuestion = [
    {
      type: 'list',
      message: 'What\'s the role of the employee you want to add to your team?',
      name: 'role',
      choices: ['Manager', 'Engineer', 'Intern', 'My team is complete!']
    }
  ]

// Answers array??

// App initialization

