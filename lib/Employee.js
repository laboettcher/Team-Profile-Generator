// Instantiate employee class with name, id, and email properties
// Include role = employee
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    };

    // Need to return employee's name input
    getName() {
        return this.name;
    };

    // Need to return employee's id number input
    getId() {
        return this.id;
    };

    // Need to return employee's email address input
    getEmail() {
        return this.email;
    };

    // Need to return employee's role (employee)
    getRole() {
        return this.role;
    };
};

// Make file able to import
module.exports = Employee;