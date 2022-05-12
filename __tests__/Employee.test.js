const Employee = require('../lib/Employee');

// test creation of new employee with name and email
test('creates new employee object', () => {
    const employee = new Employee('Anna', 'emma.olson794@gmail.com');

    expect(employee.name).toBe('Anna');
    expect(employee.email).toBe('emma.olson794@gmail.com');

    console.log(employee);
});

// test generating of employee id based on array length
test('generate new and unique employee id', () => {
    const employee = new Employee('Anna', 'emma.olson794@gmail.com');
    employee.generateEmployeeId();
    expect(employee.id).toEqual(expect.any(Number));
    console.log(employee);
});

// test pushing new employee object to the array
test('new employee object added to employeesArray', () => {
    const employee = new Employee('Anna', 'emma.olson794@gmail.com');
    employee.addToArray(employee);
})