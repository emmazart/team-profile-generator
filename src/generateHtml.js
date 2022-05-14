// defining generateHtml & passing in employeesArray as data
const generateHtml = function(data) {
    const HTML = [];

    // function creates html for manager employee role
    const generateManager = manager => {
        return `
        <div class="col-4">
        <div class="card m-2 shadow" style="max-width: 20rem; min-height: 22rem">
                <div class="card-header bg-primary">
                    <h2 class="card-title text-white">${manager.getName()}</h2>
                    <h3 class="card-subtitle text-white"><i class="bi bi-clipboard-check-fill"></i> Manager</h3>
                </div>
                <div class="card-body bg-light border border-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
        </div>
        `
    }

    // function creates html for engineer employee role
    const generateEngineer = engineer => {
        return `
        <div class="col-4">
        <div class="card m-2 shadow" style="max-width: 20rem; min-height: 22rem">
                <div class="card-header bg-primary">
                    <h2 class="card-title text-white">${engineer.getName()}</h2>
                    <h3 class="card-subtitle text-white"><i class="bi bi-eyeglasses"></i> Engineer</h3>
                </div>
                <div class="card-body bg-light border border-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}<a/></li>
                </ul>
            </div>
        </div>
        </div>
        `
    }

    // function creates html for intern employee role
    const generateIntern = intern => {
        return `
        <div class="col-4">
        <div class="card m-2 shadow" style="max-width: 20rem; min-height: 22rem">
                <div class="card-header bg-primary">
                    <h2 class="card-title text-white">${intern.getName()}</h2>
                    <h3 class="card-subtitle text-white"><i class="bi bi-mortarboard-fill"></i> Intern</h3>
                </div>
                <div class="card-body bg-light border border-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
        </div>
        `
    }

    // sort data by employee role & map each instance through the appropraite generate function, push each block of returned html to the HTML array
    function joinHTML(HTML) {
        HTML.push(data.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)));
        HTML.push(data.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)));
        HTML.push(data.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)));

        return HTML.join(''); // join HTML array to remove commas & return it for use below
    }

    // main return for the generateHtml function & what gets passed to write file in index.js
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header class="text-center p-3 bg-danger text-white">
            <h1>My Team</h1>
        </header>

        <main class="row p-2 justify-content-center">

            ${joinHTML(HTML)}

        </main>

    </body>
    </html>
        
    `;
};

module.exports = generateHtml;