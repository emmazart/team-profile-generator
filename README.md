# Team Profile Generator

## Purpose
This Team Profile Generator has been developed to allow developers & project managers to dynamically create a webpage that displays all relevant employee info via the command line. Users may clone and locally store the code, install the necessary dependencies, and run the application with the command node index in their command line. The application will prompt the user for input about each employee, create a new object to contain each employee's data, and generate an index.html file using that data. 

### User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

### This application has been developed to:
1. Prompt & receive user input via the command line interface.
2. Store each new employee's data as an object, following Object Oriented Programming model.
3. Generate a new index.html for distribution, using the stored employee data.

## Application Details
This is a command line application. There is no live deployment & users must follow the installation instructions to use the application.

The user-generated index.html file will be written to ./dist/index.html.

To invoke the application, navigate to the root in your command line and run node index.js.

### Installation & Testing
To utilize this application, clone the repository to your local machine & run the command npm install in your command line interface to install the necessary dependencies.

All test files are located in the tests directory. Use npm run test to run all test suites. All test suites pass.

### Code Summary
This command line application utilizes node.js, as well as the npm inquirer and jest packages. Inquirer is used to prompt & receive user input via the command line. Jest is used to test the creation of various employee objects and their methods.  

In index.js, init() calls inquirer.prompt on managerQuestions, which creates the first new Manager object. When that is resolved, it calls addEmployee(). This starts by asking the user to confirm whether or not they would like to add another employee. Then a switch statement deals with the true & false cases of the confirm prompt.

If true, the application prompts the user through a more general questions array, creating new objects with the response depending on the type of employee selected. Then there is a callback function to addEmployee() to run the confirm prompt again. This loops until the user selects "No" to the confirm.

After the creation of a new employee object of any kind, that object is pushed to employeesArray. 

If false, employeesArray is passed to a generateHtml function, the result of which is passed to writeToFile().

writeToFile() handles the returned html code block and performs fs.writeFile() to the predetermined location.

### Technologies Used
- Javascript
- Node.js
- Bootstrap (via CDN)

Project dependencies: Inquirer & Jest


### File Structure

Demonstration of the Repository File Structure:
[Directory File Structure](./assets/images/file-structure-screenshot.png)

## Deployed Application

![(Link to Walkthrough Video on Google Drive)](https://drive.google.com/file/d/1b224PR06GINjzeBfeDvPsogDqC-prhZU/view)

The index.html file generated in the demo video can be viewed ![(here in the dist folder.)](https://github.com/emmazart/team-profile-generator/blob/main/dist/index.html)