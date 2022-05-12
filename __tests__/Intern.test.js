const Intern = require('../lib/Intern');

test('creates new intern object', () => {
    const intern = new Intern('Anna', 'emma.olson794@gmail.com', 'UofM');

    expect(intern.name).toBe('Anna');
    expect(intern.email).toBe('emma.olson794@gmail.com');
    expect(intern.school).toBe('UofM');
});