class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id= id;
        this.email = email;
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
        return "Employee"
    }
}

module.exports = Employee;


//          Employee {
//                  name: "blair",
//                  id: 4,
//                  email: "blair@gmail.com"
//          }

// Employee is the parent and the other three extend as the children of Employee
// So Manager, for example, takes from the Employee class, and so on