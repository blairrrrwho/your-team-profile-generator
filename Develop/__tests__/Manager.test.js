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