const Intern = require('../lib/Intern');

test('creates new intern object', () => {
    const intern = new Intern('Anna', 'emma.olson794@gmail.com', 1, 'UofM');

    expect(intern.name).toBe('Anna');
    expect(intern.email).toBe('emma.olson794@gmail.com');
    expect(intern.school).toBe('UofM');
});

test('getSchool returns intern school name', () => {
    const intern = new Intern('Anna', 'emma.olson794@gmail.com', 1, 'UofM');

    expect(intern.getSchool()).toBe('UofM');
});

test('getRole returns intern', () => {
    const intern = new Intern('Anna', 'emma.olson794@gmail.com', 1, 'UofM');

    expect(intern.getRole()).toBe('Intern');
});