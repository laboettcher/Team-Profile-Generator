// Import Employee file so Intern has Employee properties too
const Employee= require('./Employee');

// Instantiate Intern class (extends employee class) with name, id, email, AND school
// Include role = intern
class Intern extends Employee {
    constructor(name, id, email, school) {
        // name, id, and email are from super class (Employee)
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    };

    // Need to return intern's school input
    getSchool(){
        return this.school;
    };
};

// Make file able to import
module.exports = Intern;