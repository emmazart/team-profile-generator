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

const confirmAddEmployee = () => {
    return {
        name: 'confirmAddEmployee',
        message: 'Would you like to add another team member?',
        type: 'confirm',
        default: true
    }
};

// define init as async function?
async function init() {
    // inquirer prompt managerQuestions
    const getManager = await inquirer.prompt(managerQuestions)
    // resolve initial promise, package, and send to array
    console.log(getManager);

    // START WHILE LOOP?
    
    // ask user if they want to add another employee
    const getConfirm = await inquirer.prompt(confirmAddEmployee())
    // if yes, run questions array
    if (getConfirm) {
        console.log("adding new employee")
        const newEmployee = await inquirer.prompt(questions);
        console.log(newEmployee);
        // package up response?
        // re run confirmation?
    } else {
        // send array to generatehtml?
        console.log("all done");
    }

};
// 


// define init function
// function init() {
//     inquirer // on init, run inquirer prompt
//         .prompt(managerQuestions)
//         .then(function(answer) { // then handle the response
//             const manager = new Manager(answer.name, answer.email, answer.id, answer.office);
//             employeesArray.push(manager);

//             inquirer.prompt(questions)
//             .then(function(answer) {

//                 if (answer.typeofEmployee === 'Engineer'){
//                     const engineer = new Engineer(answer.name, answer.email, answer.id, answer.github);
//                     employeesArray.push(engineer);
//                     console.log(employeesArray);
//                 }

//                 if (answer.typeofEmployee === 'Intern'){
//                     const intern = new Intern(answer.name, answer.email, answer.id, answer.school);
//                     employeesArray.push(intern);
//                 }

//                 // pass employeesArray to generateHTML 
//                 writeToFile(generateHtml(employeesArray)); // send response to html file
//                 // generateHtml(employeesArray);
//             })
    
//         })
// };

// initialize app call
init();