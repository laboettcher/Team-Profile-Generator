// Import Employee file so Manager has Employee properties too
const Employee = require('./Employee');

// Instantiate Manager class (extends employee class) with name, id, email, AND office number
// Include role = manager
class Manager extends Employee {
    constructor(name,id, email, officeNumber) {
        // name, id, and email are from super class (Employee)
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    };

    // Need to return manager's office number input
    getOfficeNumber(){
        return this.officeNumber;
    };
};

// Make file able to import
module.exports = Manager;