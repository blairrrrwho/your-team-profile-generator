// Intern test needs to add test for school on top of normal employee test
const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");
const Intern =  require("../lib/Intern");

test('creates intern class', () => {
  const intern = new Intern({name: 'blair', id: 31628, email: 'blair10324@gmail.com', school: 'Georgia Tech'});

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
})



// const Intern = require ('../lib/Intern');
// const newIntern = new Intern ('blair', '31628', 'blair10324@gmail.com', 'Georgia Tech' );

// test ('test to see if we can get the constructor values for the Intern object', () => {
//     expect(newIntern.name).toBe('blair');
//     expect(newIntern.id).toBe('31628');
//     expect(newIntern.email).toBe('blair10324@gmail.com');
//     expect(newIntern.school).toBe('Georgia Tech');
// });

// test ('test to retrieve the name from the getName() method', () => {
//     expect(newIntern.getName()).toBe('blair');
// })

// test ('test to retrieve the id from the getId() method', () => {
//     expect(newIntern.getId()).toBe('31628');
// })

// test ('test to retrieve the email from the getEmail() method', () => {
//     expect(newIntern.getEmail()).toBe('blair10324@gmail.com');
// })

// test ('test to retrieve the school from the getSchool() method', () => {
//     expect(newIntern.getSchool()).toBe('Georgia Tech');
// })

// test ('test to retrieve the role from the getRole() method', () => {
//     expect(newIntern.getRole()).toBe('Intern');
// });