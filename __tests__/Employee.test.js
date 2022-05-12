const Employee = require('../lib/Employee');

// test creation of new employee with name and email
test('creates new employee object', () => {
    const employee = new Employee('Anna', 'emma.olson794@gmail.com', 1);

    expect(employee.name).toBe('Anna');
    expect(employee.email).toBe('emma.olson794@gmail.com');
    expect(employee.id).toBe(1)
});

// // test pushing new employee object to the array
// test('new employee object added to employeesArray', () => {
//     const employee = new Employee('Anna', 'emma.olson794@gmail.com', 1);
//     employee.addToArray(employee);

//     // expect(employeesArray).toContain
// });

test('getname function returns employee name', () => {
    const employee = new Employee('Anna', 'emma.olson794@gmail.com', 1);

    expect(employee.getName(employee)).toEqual('Anna');
});

test('getid function returns employee id', () => {
    const employee = new Employee('Anna', 'emma.olson794@gmail.com', 1);

    expect(employee.getId(employee)).toEqual(1);
});

test('getemail function returns employee email', () => {
    const employee = new Employee('Anna', 'emma.olson794@gmail.com', 1);

    expect(employee.getEmail(employee)).toEqual('emma.olson794@gmail.com');
});

test('getrole function returns "employee"', () => {
    const employee = new Employee('Anna', 'emma.olson794@gmail.com', 1);

    expect(employee.getRole(employee)).toEqual('Employee');
});


// // test generating of employee id based on array length
// test('generate new and unique employee id', () => {
//     const employee = new Employee('Anna', 'emma.olson794@gmail.com');
//     employee.generateEmployeeId();
//     let employeeArray = [];

//     if (employeeArray.length === 0) {
//         expect(employee.id).toEqual(1);
//     }
// });
