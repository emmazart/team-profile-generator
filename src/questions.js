// Create an array of questions for user input
const questionsArr = [
    // adding additional team members
    {
        name: 'typeofEmployee',
        message: 'Please select the type of employee: (Required)',
        type: 'rawlist', 
        choices: ['Engineer','Intern', 'Manager'],
        default: 0
    }, 

    // first three questions run for all employees
    {
        name: 'name',
        message: "Please input your employee's first name: (Required)",
        type: 'input',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a name!")
                return false;
            }
        }
    },
    {
        name: 'id',
        message: 'Enter an employee ID: (Required)',
        type: 'input',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter a valid ID.")
                return false;
            }
        }
    },
    {
        name: 'email', 
        message: "What is the employee's email address? (Required)",
        type: 'input',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter a valid email address!")
                return false;
            }
        }
    },
    {
        // this question runs only when the engineer employee type is selected
        name: 'github',
        message: "What is the employee's github username?",
        type: 'input', 
        when: ({ typeofEmployee }) => {
            if (typeofEmployee === 'Engineer') {
                return true;
            } else {
                return false;
            }
        }
    }, 
    {
        // this question runs only when the intern employee type is selected
        name: 'school',
        message: "What is the intern's school?",
        type: 'input', 
        when: ({ typeofEmployee }) => {
            if (typeofEmployee === 'Intern') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        // this question runs only when the manager employee type is selected
        name: 'office',
        message: "What is the manager's office number?",
        type: 'input', 
        when: ({ typeofEmployee }) => {
            if (typeofEmployee === 'Manager') {
                return true;
            } else {
                return false;
            }
        }
    }
];

module.exports = questionsArr;