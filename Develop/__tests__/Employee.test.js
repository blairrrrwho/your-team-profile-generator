// Employee test needs to check for name, id, and email

const Employee = require('../lib/Employee');

test('is employee', () => {
  const employee = new Employee({name: 'blair', id: 31628, email: "blair10324@gmail.com"});

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});