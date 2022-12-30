// Import Manager file
const Manager = require('../lib/Manager');

// Manager office number input
test('office number setup', () => {
    const testInput = '24';
    const employee = new Manager('Lavinia', 1, 'test@gmail.com', testInput);
    expect(employee.officeNumber).toBe(testInput);
});

// Role = Manager
test('get Role function', () => {
    const testInput = 'Manager';
    const employee = new Manager('Lavinia', 1, 'test@gmail.com', testInput);
    expect(employee.getRole()).toBe(testInput);
});