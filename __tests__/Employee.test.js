// Import Employee file
const Employee = require('../lib/Employee');

// Instantiate an employee object to use
test('creates employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

// Employee name input
test('Set Employee Name', () => {
    const name = 'Lavinia';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

// Employee ID input
test('Set ID', () => {
    const testId = 100;
    const employee = new Employee('Lavinia', testId);
    expect(employee.id).toBe(testId);
});

// Employee email input
test('Set Email', () => {
    const testEmail = 'test@gmail.com';
    const employee = new Employee('Lavinia', 1, testEmail);
    expect(employee.email).toBe(testEmail);
});

// Get the employee's name
test('get name from getName', () => {
    const testName = 'Lavinia';
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});

// Get employee's ID
test('get ID from getId', () => {
    const testId = '100';
    const employee = new Employee('Lavinia', testId);
    expect(employee.getId()).toBe(testId);
});

// Get employee's email
test('get email from getEmail', () => {
    const testEmail = 'test@gmail.com';
    const employee = new Employee('Lavinia', 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});

// Get employee's role (engineer, intern, or manager)
test('getRole function', () => {
    const testRole = 'Employee';
    const employee = new Employee('Lavinia', 1, 'test@gmail.com');
    expect(employee.getRole()).toBe(testRole);
});