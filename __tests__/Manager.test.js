const Manager = require('../lib/Manager');

test('creates new manager object', () => {
    const manager = new Manager('Anna', 'emma.olson794@gmail.com', 1, 2);

    expect(manager.name).toBe('Anna');
    expect(manager.email).toBe('emma.olson794@gmail.com');
    expect(manager.id).toBe(1);
    expect(manager.officeNumber).toBe(2);
});

test('getrole returns manager', () => {
    const manager = new Manager('Anna', 'emma.olson794@gmail.com', 1, 2);

    expect(manager.getRole()).toBe('Manager');
});