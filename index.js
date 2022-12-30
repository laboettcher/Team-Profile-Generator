// Needed packages and imported files
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const render = require('./src/template.js');

// Get generated html file insto dist folder
const directory = path.resolve(__dirname, 'dist');
const directoryPath = path.join(directory, 'index.html');

// Arrays for team members and their roles
const teamArray = [];
const idArray = [];

// Main content - create team member cards based on different roles
function main() {
    function makeTeam() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'role',
                    message: 'What role does this employee have?',
                    choices: ['Engineer', 'Intern', 'Manager', 'No more team members to add.',],
                },
            ])
            .then((userChoice) => {
                switch (userChoice.memberChoice) {
                    case 'Engineer':
                        addEngineer();
                        break;
                    case 'Intern':
                        addIntern();
                        break;
                    case 'Manager':
                        addManager();
                        break;
                    default:
                        groupTeam();
                }
            });
    }

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
              message: "What is the manager's id?",
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
              message: "What is the engineer's id?",
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
                return 'Please enter a school.';
              },
            },
          ])
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

      function groupTeam() {
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory);
        }
        fs.writeFileSync(directoryPath, render(teamArray), 'utf-8');
      }
};

main ();