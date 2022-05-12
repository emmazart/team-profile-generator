const generateHtml = function(data) {
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
            <h2>${data.name}</h2>
            <h3>${data.typeofEmployee}</h3>
            <p>${data.id}</p>
            <p>${data.email}</p>
            <p>${data.github}</p>
        </main>

    </body>
    </html>
        
    `;
};

module.exports = generateHtml;