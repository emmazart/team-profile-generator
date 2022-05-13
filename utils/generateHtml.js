const generateHtml = function(data) {
    console.log(data);


    const generateManager = manager => {
        return `
        <div>
            <h2>${manager.getName()}</h2>
            <h3>Manager</h3>
            <p>${manager.getId()}</p>
            <p>${manager.getEmail()}</p>
            <p>${manager.officeNumber}</p>
        </div>
        `
    }

    const generateEngineer = engineer => {
        return `
        <div>
            <h2>${engineer.getName()}</h2>
            <h3>Manager</h3>
            <p>${engineer.getId()}</p>
            <p>${engineer.getEmail()}</p>
            <p>${engineer.github}</p>
        </div>
        `
    }

    const generateIntern = intern => {
        return `
        <div>
            <h2>${intern.getName()}</h2>
            <h3>Manager</h3>
            <p>${intern.getId()}</p>
            <p>${intern.getEmail()}</p>
            <p>${intern.school}</p>
        </div>
        `
    }

    const HTML = [];
    html.push(data.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)));
    html.push(data.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)));
    html.push(data.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)));
    html.join("");

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <main>

            ${HTML}

        </main>

    </body>
    </html>
        
    `;
};

module.exports = generateHtml;