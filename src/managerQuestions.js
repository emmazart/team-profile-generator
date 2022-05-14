const managerQuestions = [
    
        {
            name: 'name',
            message: "Please input your Manager's first name: (Required)",
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
            message: "What is the manager's email address? (Required)",
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
            name: 'office',
            message: "What is the manager's office number?",
            type: 'input',
        }
    
]

module.exports = managerQuestions;