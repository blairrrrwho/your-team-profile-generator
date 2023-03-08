const Employee = require ('../lib/Employee');
const newEmployee = new Employee ('blair', '31628', 'blair10324@gmail.com' );

test ('test to see if we can get the constructor values for the Employee object', () => {
    expect(newEmployee.name).toBe('blair');
    expect(newEmployee.id).toBe('31628');
    expect(newEmployee.email).toBe('blair10324@gmail.com');
});

test ('test to retrieve the name from the getName() method', () => {
    expect(newEmployee.getName()).toBe('blair');
})

test ('test to retrieve the id from the getId() method', () => {
    expect(newEmployee.getId()).toBe('31628');
})

test ('test to retrieve the email from the getEmail() method', () => {
    expect(newEmployee.getEmail()).toBe('blair10324');
})

test ('test to retrieve the role from the getRole() method', () => {
    expect(newEmployee.getRole()).toBe('Employee');
});



// getName() {
//     return this.name;
// }

// getId() {
//     return this.id
// }

// getEmail() {
//     return this.email
// }

// getRole() {
//     return "Employee"
// }
