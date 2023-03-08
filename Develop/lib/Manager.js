// This class will extend Employee; add officeNumber as a new parameter to Manager
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(teamMemObj) {
        // Call parent constructor here
        super(teamMemObj);
        this.officeNumber = teamMemObj.officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager"
    }
}

// Exports the file
module.exports = Manager;