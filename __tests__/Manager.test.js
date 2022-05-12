const Manager = require('../lib/Manager');

// test creation of new employee with name and email
test('creates new manager object', () => {
    const manager = new Manager('Anna', 'emma.olson794@gmail.com', 1);

    expect(manager.name).toBe('Anna');
    expect(manager.email).toBe('emma.olson794@gmail.com');
    expect(manager.office).toEqual(expect.any(Number));

    console.log(manager);
});
