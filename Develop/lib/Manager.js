// This class will extend Employee; add officeNumber as a new parameter to Manager
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Call parent constructor here
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager;