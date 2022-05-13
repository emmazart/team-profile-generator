const inquirer = require('inquirer');
const fs = require('fs');
const managerQuestions = require('./src/managerQuestions');
const questions = require('./src/questions');
const generateHtml = require('./utils/generateHtml');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const employeesArray = [];


// create a function to write an html file
function writeToFile(data) {
    // write to index file in dist directory
    fs.writeFile('./dist/index.html', data, err => {
        if (err) throw err;
        console.log("Check the /dist folder for your complete Team Profile!");
    });
};

// prompt for confirming if user wants another employee
const confirmAddEmployee = {
        name: 'confirmAddEmployee',
        message: 'Would you like to add another team member?',
        type: 'confirm',
        default: true
};

// define function for adding more employees
function addEmployee() {

    // prompt user to select if they want another employee or not
    inquirer.prompt(confirmAddEmployee)
    .then((choice) => {
        switch (choice.confirmAddEmployee) {
            // if yes, run employee prompt questions
            case true:
                inquirer.prompt(questions)
                .then((answer) => {
                    console.log(answer);

                    // depending on the type of employee selected, create new employee objects
                    if (answer.typeofEmployee === 'Engineer'){
                        const engineer = new Engineer(answer.name, answer.email, answer.id, answer.github);
                        employeesArray.push(engineer);
                    }

                    if (answer.typeofEmployee === 'Intern'){
                        const intern = new Intern(answer.name, answer.email, answer.id, answer.school);
                        employeesArray.push(intern);
                    }

                    if (answer.typeofEmployee === 'Manager'){
                        const manager = new Manager(answer.name, answer.email, answer.id, answer.office);
                        employeesArray.push(manager);
                    }

                    // callback function for addEmployee to rerun the confirm prompt
                    addEmployee();
                })
                break;
            // if no, send full employeesArray to generateHtml function
            case false:
                writeToFile(generateHtml(employeesArray)); // send response to html file
                break;
        }
    })
};

// define init function
function init() {
    // inquirer prompt managerQuestions
    inquirer.prompt(managerQuestions)
    // create new manager object using answer data
    .then((answer) => {
        const manager = new Manager(answer.name, answer.email, answer.id, answer.office);
        employeesArray.push(manager); // add new manager to employeesArray
        addEmployee(); // call function to handle adding additional employees
    })

};

// initialize app call
init();