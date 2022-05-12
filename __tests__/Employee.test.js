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
    let employeeArray = [];

    if (employeeArray.length === 0) {
        expect(employee.id).toEqual(1);
    }
});

// // test generating of employee id based on array length
// test('generate new and unique employee id if array = 1', () => {
//     const employee = new Employee('Anna', 'emma.olson794@gmail.com');
//     employee.generateEmployeeId();
//     let employeeArray = ['firstemployee'];

//     if (employeeArray.length === 1) {
//         expect(employee.id).toEqual(2);
//     }
// });

// // test generating of employee id based on array length
// test('generate new and unique employee id if array = 2', () => {
//     const employee = new Employee('Anna', 'emma.olson794@gmail.com');
//     employee.generateEmployeeId();
//     let employeeArray = ['firstemployee', 'secondemployee'];

//     if (employeeArray.length === 2) {
//         expect(employee.id).toEqual(3);
//     }
// });


// test pushing new employee object to the array
test('new employee object added to employeesArray', () => {
    const employee = new Employee('Anna', 'emma.olson794@gmail.com');
    employee.addToArray(employee);
})