// Engineer test needs to check for the addition of gitHubUsername on top of the regular employee test
const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");
const Engineer =  require("../lib/Engineer");

test('creates engineer class', () => {
  const engineer = new Engineer({name: "blair", id: 31628, email: 'blair10324@gmail.com', gitHubUsername: "blairrrrwho"});

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.gitHubUsername).toEqual(expect.any(String));
})


// const Engineer = require ('../lib/Engineer');
// const newEngineer = new Engineer ('blair', '31628', 'blair10324@gmail.com', 'blairrrrwho' );

// test ('test to see if we can get the constructor values for the Engineer object', () => {
//     expect(newEngineer.name).toBe('blair');
//     expect(newEngineer.id).toBe('31628');
//     expect(newEngineer.email).toBe('blair10324@gmail.com');
//     expect(newEngineer.gitHubUsername).toBe('blairrrrwho');
// });

// test ('test to retrieve the name from the getName() method', () => {
//     expect(newEngineer.getName()).toBe('blair');
// })

// test ('test to retrieve the id from the getId() method', () => {
//     expect(newEngineer.getId()).toBe('31628');
// })

// test ('test to retrieve the email from the getEmail() method', () => {
//     expect(newEngineer.getEmail()).toBe('blair10324@gmail.com');
// })

// test ('test to retrieve the gitHubUsername from the getGitHub() method', () => {
//     expect(newEngineer.getGitHub()).toBe('blairrrrwho');
// })

// test ('test to retrieve the role from the getRole() method', () => {
//     expect(newEngineer.getRole()).toBe('Engineer');
// });