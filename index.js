const inquirer = require('inquirer');
const fs = require('fs');
const managerQuestions = require('./src/managerQuestions');
const questions = require('./src/questions');
const generateHtml = require('./src/generateHtml');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// each new employee will get pushed to this empty array
const employeesArray = [];


// create a function to write an html file
function writeToFile(data) {
    // write to index file in dist directory
    fs.writeFile('./dist/index.html', data, err => {
        if (err) throw err;
        console.log("Check the /dist folder for your complete Team Profile!");
    });
};

// prompt for confirming if user wants to add another employee and continue the loop
const confirmAddEmployee = {
        name: 'confirmAddEmployee',
        message: 'Would you like to add another team member? (If you are finished building your team, enter "N".)',
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

                    // depending on the type of employee selected, create new employee objects & push to employeesArray
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
                writeToFile(generateHtml(employeesArray)); // pass employeesArray to generateHtml, and send the returned data to writeToFile
                break;
        }
    })
};

// define init function
function init() {
    // inquirer prompt managerQuestions (has user enter a required manager)
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