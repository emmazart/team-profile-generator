const inquirer = require('inquirer');
const fs = require('fs');
const managerQuestions = require('./src/managerQuestions');
const questions = require('./src/questions');
const generateHtml = require('./utils/generateHtml');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');



// create a function to write an html file
function writeToFile(data) {
    // write to index file in dist directory
    fs.writeFile('./dist/index.html', data, err => {
        if (err) throw err;
        console.log("Check the /dist folder for your complete Team Profile!");
    });
};



// define init function
function init() {
    inquirer // on init, run inquirer prompt
        .prompt(managerQuestions)
        .then(function(answer) { // then handle the response
            const manager = new Manager(answer.name, answer.email, answer.id, answer.office);
            console.log(manager);

            inquirer.prompt(questions)
            .then(function(answer) {

                if (answer.typeofEmployee === 'Engineer'){
                    const engineer = new Engineer(answer.name, answer.email, answer.id, answer.github);
                    console.log(engineer);
                }

                if (answer.typeofEmployee === 'Intern'){
                    const intern = new Intern(answer.name, answer.email, answer.id, answer.school);
                    console.log(intern);
                }

                // writeToFile(generateHtml(answer)); // send response to html file
            })
    
        })
};

// initialize app call
init();