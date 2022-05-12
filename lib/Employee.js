// const employeesArray = [
//     {
//         name: 'astro',
//         email: 'allwalksdogtraining@gmail.com'
//     }
// ];

let employeesArray = [];

class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    generateEmployeeId() {
        let index = employeesArray.length + 1; // since we don't want an employee id of <1
        this.id = index;
    };

    addToArray(employee) {
        return employeesArray.push(employee);
    };
    
};

module.exports = Employee;