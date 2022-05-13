const generateHtml = function(data) {
    console.log(data);

    let employeeCards = `
    <div>
        <h2>${data[0].name}</h2>
        <h3>Manager</h3>
        <p>${data[0].id}</p>
        <p>${data[0].email}</p>
        <p>${data[0].officeNumber}</p>
    </div>
    `;

    for (i = 1; i < data.length; i++) {
      if (data[i].officeNumber){
          employeeCards += ` \n
          <div>
            <h2>${data[0].name}</h2>
            <h3>Manager</h3>
            <p>${data[0].id}</p>
            <p>${data[0].email}</p>
            <p>${data[0].officeNumber}</p>
          </div>
          `
      };  
    };

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

            ${employeeCards};

        </main>

    </body>
    </html>
        
    `;
};

module.exports = generateHtml;