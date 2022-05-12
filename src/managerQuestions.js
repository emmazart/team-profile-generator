const managerQuestions = [
    
        {
            name: 'confirmManager',
            message: 'Would you like to add a team manager?',
            type: 'confirm',
            default: true
        },
        {
            name: 'name',
            message: "Please input your Manager's first name: (Required)",
            type: 'input',
            when: ({ confirmManager }) => {
                if (confirmManager) {
                    return true;
                } else {
                    return false;
                }
            },
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
            when: ({ confirmManager }) => {
                if (confirmManager) {
                    return true;
                } else {
                    return false;
                }
            },
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
            message: "What is the manager's email address? (Required)",
            type: 'input',
            when: ({ confirmManager }) => {
                if (confirmManager) {
                    return true;
                } else {
                    return false;
                }
            },
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
            name: 'office',
            message: "What is the manager's office number?",
            type: 'input',
            when: ({ confirmManager }) => {
                if (confirmManager) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    
]

module.exports = managerQuestions;