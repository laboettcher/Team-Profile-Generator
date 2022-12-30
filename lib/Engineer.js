// Import Employee file so Engineer has Employee properties too
const Employee = require('./Employee');

// Instantiate Engineer class (extends employee class) with name, id, email, AND github username
// Include role = engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // name, id, and email are from super class (Employee)
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    };

    // Need to return engineer's github username input
    getGithub() {
        return this.github;
    };
};

// Make file able to import
module.exports = Engineer;