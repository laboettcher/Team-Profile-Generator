// Import Engineer file
const Engineer = require('../lib/Engineer');

// Github username input
test('github setup', () => {
    const testInput = 'laboettcher';
    const employee = new Engineer('Lavinia', 1, 'test@gmail.com', testInput);
    expect(employee.github).toBe(testInput);
});

// Role = Engineer
test('getRole function', () => {
    const testInput = 'Engineer';
    const employee = new Engineer('Lavinia', 1, 'test@gmail.com', testInput);
    expect(employee.getRole()).toBe(testInput);
});

// Get github username for Engineer
test('get github', () => {
    const testInput = 'laboettcher';
    const employee = new Engineer('Lavinia', 1, 'test@gmail.com', testInput);
    expect(employee.getGithub()).toBe(testInput);
});