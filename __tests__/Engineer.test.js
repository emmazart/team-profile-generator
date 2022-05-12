const Engineer = require('../lib/Engineer');

test('creats new engineer object', () => {
    const engineer = new Engineer('Anna', 'emma.olson794@gmail.com', 1, 'emmazart');

    expect(engineer.name).toBe('Anna');
    expect(engineer.email).toBe('emma.olson794@gmail.com');
    expect(engineer.id).toBe(1);
    expect(engineer.github).toBe('emmazart');
});

test('getGithub() returns github username', () => {
    const engineer = new Engineer('Anna', 'emma.olson794@gmail.com', 1, 'emmazart');

    expect(engineer.getGithub()).toBe('emmazart');
});

test('getrole returns engineer', () => {
    const engineer = new Engineer('Anna', 'emma.olson794@gmail.com', 1, 'emmazart');

    expect(engineer.getRole()).toBe('Engineer');
});