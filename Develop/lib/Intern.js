// This class will extend Employee; add school as a new parameter to Intern
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(teamMemObj) {
        // Call parent constructor here
        super (teamMemObj);
        this.school = teamMemObj.school;
    }

    getSchool () {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

// Exports the file
module.exports = Intern;