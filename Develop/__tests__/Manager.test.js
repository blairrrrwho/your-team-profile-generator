// Manager test needs to test for office number on top of normal employee test
const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");
const Manager =  require("../lib/Manager");

test('creates manager class', () => {
  const manager = new Manager({name: 'blair', id: 31628, email: 'blair10324@gmail.com', officeNumber: 27});

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
})



// const Manager = require ('../lib/Manager');
// const newManager = new Manager ('blair', '31628', 'blair10324@gmail.com', '27' );

// test ('test to see if we can get the constructor values for the Manager object', () => {
//     expect(newManager.name).toBe('blair');
//     expect(newManager.id).toBe('31628');
//     expect(newManager.email).toBe('blair10324@gmail.com');
//     expect(newManager.officeNumber).toBe('27');
// });

// test ('test to retrieve the name from the getName() method', () => {
//     expect(newManager.getName()).toBe('blair');
// })

// test ('test to retrieve the id from the getId() method', () => {
//     expect(newManager.getId()).toBe('31628');
// })

// test ('test to retrieve the email from the getEmail() method', () => {
//     expect(newManager.getEmail()).toBe('blair10324@gmail.com');
// })

// test ('test to retrieve the officeNumber from the getOfficeNumber() method', () => {
//     expect(newManager.getOfficeNumber()).toBe('27');
// })

// test ('test to retrieve the role from the getRole() method', () => {
//     expect(newManager.getRole()).toBe('Manager');
// });