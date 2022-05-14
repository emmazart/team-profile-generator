const Employee = require('../lib/Employee');

test('creates new employee object', () => {
    const employee = new Employee('Anna', 'emma.olson794@gmail.com', 1);

    expect(employee.name).toBe('Anna');
    expect(employee.email).toBe('emma.olson794@gmail.com');
    expect(employee.id).toBe(1)
});

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