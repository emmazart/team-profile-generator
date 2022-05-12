const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, id, office){

        // call parent constructor
        super(name, email, id);

        this.officeNumber = office;
    }

    getRole() {
        return "Manager";
    };

}

module.exports = Manager;