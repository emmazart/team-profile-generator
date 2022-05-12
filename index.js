const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./src/questions');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');








// define init function
function init() {
    inquirer // on init, run inquirer prompt
        .prompt(questions)
        .then(function(answer) { // then handle the response
            console.log(answer); 
        })

};

// initialize app call
init();