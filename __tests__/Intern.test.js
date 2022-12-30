// Import Intern file 
const Intern = require('../lib/Intern');

// Intern school input
test('school setup', () => {
    const testInput = 'University of Wisconsin-Madison';
    const employee = new Intern('Lavinia', 1, 'test@gmail.com', testInput);
    expect(employee.school).toBe(testInput);
});

// Role = Intern
test('getRole function', () => {
    const testInput = 'Intern';
    const employee = new Intern('Lavinia', 1, 'test@gmail.com', testInput);
    expect(employee.getRole()).toBe(testInput);
});

// Get Intern's school input
test('get school', () => {
    const testInput = 'University of Wisconsin-Madison';
    const employee = new Intern('Lavinia', 1, 'test@gmail.com', testInput);
    expect(employee.getSchool()).toBe(testInput);
});