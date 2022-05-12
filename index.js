const Employee = require('./lib/Employee');

var employeesArray = [];

const employee1 = new Employee('Anna', 'emma.olson794@gmail.com');
employee1.generateEmployeeId(employeesArray);
employee1.addToArray(employee1);

console.log(employeesArray);