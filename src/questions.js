// Create an array of questions for user input
const questionsArr = [
    {
        name: 'name',
        message: "Please input your employee's name:",
        type: 'input'
    },
    {
        name: 'email', 
        message: "What is the employee's email address?",
        type: 'input'
    },
    {
        name: 'typeofEmployee',
        message: 'Please select the type of employee: (Required)',
        type: 'rawlist', 
        choices: ['Basic', 'Engineer', 'Manager', 'Intern'],
        default: 0,
    }, 
    {
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
    }
];

module.exports = questionsArr;