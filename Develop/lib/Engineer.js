// This class will extend Employee; add gitHubUsername to Engineer
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHubUsername) {
        // Call parent constructor here
        super (name, id, email);
        this.gitHubUsername = gitHubUsername;
    }

    getGitHub() {
        return this.gitHubUsername;
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;