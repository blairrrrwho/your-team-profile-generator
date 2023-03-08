const Manager = require ('../lib/Manager');
const newManager = new Manager ('blair', '31628', 'blair10324@gmail.com', '27' );

test ('test to see if we can get the constructor values for the Manager object', () => {
    expect(newManager.name).toBe('blair');
    expect(newManager.id).toBe('31628');
    expect(newManager.email).toBe('blair10324@gmail.com');
    expect(newManager.officeNumber).toBe('27');
});

test ('test to retrieve the name from the getName() method', () => {
    expect(newManager.getName()).toBe('blair');
})

test ('test to retrieve the id from the getId() method', () => {
    expect(newManager.getId()).toBe('31628');
})

test ('test to retrieve the email from the getEmail() method', () => {
    expect(newManager.getEmail()).toBe('blair10324@gmail.com');
})

test ('test to retrieve the officeNumber from the getOfficeNumber() method', () => {
    expect(newManager.getOfficeNumber()).toBe('27');
})

test ('test to retrieve the role from the getRole() method', () => {
    expect(newManager.getRole()).toBe('Manager');
});