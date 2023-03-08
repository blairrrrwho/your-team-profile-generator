class Employee {
    constructor(teamMemObj) {
        this.name = teamMemObj.name;
        this.id = teamMemObj.id;
        this.email = teamMemObj.email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee";
    }
}

// Exports the file
module.exports = Employee;


//          Employee {
//                  name: "blair",
//                  id: 4,
//                  email: "blair@gmail.com"
//          }

// Employee is the parent and the other three extend as the children of Employee
// So Manager, for example, takes from the Employee class, and so on