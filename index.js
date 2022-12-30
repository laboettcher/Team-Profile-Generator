// Needed packages and imported files
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const render = require('./src/template.js');

// Get generated html file into the dist folder
const directory = path.resolve(__dirname, 'dist');
const directoryPath = path.join(directory, 'index.html');

// Make arrays for team members and their roles
const teamArray = [];
const idArray = [];

// Main content - make team member cards based on their different roles
function Main() {
  // Manager card content
  function addManager() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is the manager's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter a name.';
          },
        },
        {
          type: 'input',
          name: 'managerId',
          message: "What is the manager's id number?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return 'Please enter a positive number.';
          },
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is the manager's email?",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return 'Please enter a valid email address.';
          },
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: "What is the manager's office number?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return 'Please enter a positive number.';
          },
        },
      ])
      // Push answers to team and id arrays
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamArray.push(manager);
        idArray.push(answers.managerId);
        makeTeam();
      });
  }

  function makeTeam() {
    inquirer
    // Have user choose from list of other team member options
      .prompt([
        {
          type: 'list',
          name: 'memberChoice',
          message: "What is the team member's role?",
          choices: [
            'Engineer',
            'Intern',
            "No more members to add to this team.",
          ],
        },
      ])
      // Add team members based on the user's input
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
          default:
            groupTeam();
        }
      });
  }

  // Engineer card content
  function addEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: "What is the engineer's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter a name.';
          },
        },
        {
          type: 'input',
          name: 'engineerId',
          message: "What is the engineer's id number?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              if (idArray.includes(answer)) {
                return 'This ID is already in use. Please enter a new one.';
              } else {
                return true;
              }
            }
            return 'Please enter a positive number.';
          },
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: "What is the engineer's email?",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return 'Please enter a valid email address.';
          },
        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: "What is the engineer's GitHub username?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter a username.';
          },
        },
      ])
      // Push answers to team and id arrays
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamArray.push(engineer);
        idArray.push(answers.engineerId);
        makeTeam();
      });
  }

  // Intern card content
  function addIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: "What is the intern's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter a name.';
          },
        },
        {
          type: 'input',
          name: 'internId',
          message: "What is the intern's id?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              if (idArray.includes(answer)) {
                return 'This ID is already in use. Please enter a new one.';
              } else {
                return true;
              }
            }
            return 'Please enter a positive number.';
          },
        },
        {
          type: 'input',
          name: 'internEmail',
          message: "What is the intern's email?",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return 'Please enter a valid email address.';
          },
        },
        {
          type: 'input',
          name: 'internSchool',
          message: "What is the intern's school?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter a school name.';
          },
        },
      ])
      // Push answers to the team and id arrays
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamArray.push(intern);
        idArray.push(answers.internId);
        makeTeam();
      });
  }

  // Make a directory path for the generated html file
  function groupTeam() {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }
    fs.writeFileSync(directoryPath, render(teamArray), 'utf-8');
  }

  addManager();
}

// Call main function
Main();
