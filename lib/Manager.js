const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, office){

        // call parent constructor
        super(name, email);

        this.office = office;
    }
}

module.exports = Manager;