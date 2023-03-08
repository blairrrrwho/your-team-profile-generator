// This class will extend Employee; add gitHubUsername as a new parameter to Engineer
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(teamMemObj) {
        // Call parent constructor here
        super (teamMemObj);
        this.gitHubUsername = teamMemObj.gitHubUsername;
    }

    getGitHub() {
        return this.gitHubUsername;
    }

    getRole() {
        return "Engineer";
    }
}

// Exports the file
module.exports = Engineer;