// This class will extend Employee; add school as a new parameter to Intern
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Call parent constructor here
        super (name, id, email);
        this.school = school;
    }

    getSchool () {
        return this.school;
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern;