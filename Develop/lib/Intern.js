// This class will extend Employee; add school to Intern
const Intern = require('./Employee');

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