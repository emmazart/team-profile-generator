const inquirer = require('inquirer');
const fs = require('fs');
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
        console.log("index.html file has been written!");
    });
};



// define init function
function init() {
    inquirer // on init, run inquirer prompt
        .prompt(questions)
        .then(function(answer) { // then handle the response
            console.log(answer); 
            // writeToFile(generateHtml(answer)); // send response to html file
        });

};

// initialize app call
init();