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