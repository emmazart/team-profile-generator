const Engineer = require('../lib/Engineer');

test('creats new engineer object', () => {
    const engineer = new Engineer('Anna', 'emma.olson794@gmail.com', 'emmazart');

    expect(engineer.name).toBe('Anna');
    expect(engineer.email).toBe('emma.olson794@gmail.com');
    expect(engineer.github).toBe('emmazart');
});