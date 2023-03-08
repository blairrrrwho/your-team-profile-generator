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