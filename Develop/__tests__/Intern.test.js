const Intern = require ('../lib/Intern');
const newIntern = new Intern ('blair', '31628', 'blair10324@gmail.com', 'Georgia Tech' );

test ('test to see if we can get the constructor values for the Intern object', () => {
    expect(newIntern.name).toBe('blair');
    expect(newIntern.id).toBe('31628');
    expect(newIntern.email).toBe('blair10324@gmail.com');
    expect(newIntern.school).toBe('Georgia Tech');
});

test ('test to retrieve the name from the getName() method', () => {
    expect(newIntern.getName()).toBe('blair');
})

test ('test to retrieve the id from the getId() method', () => {
    expect(newIntern.getId()).toBe('31628');
})

test ('test to retrieve the email from the getEmail() method', () => {
    expect(newIntern.getEmail()).toBe('blair10324@gmail.com');
})

test ('test to retrieve the school from the getSchool() method', () => {
    expect(newIntern.getSchool()).toBe('Georgia Tech');
})

test ('test to retrieve the role from the getRole() method', () => {
    expect(newIntern.getRole()).toBe('Intern');
});