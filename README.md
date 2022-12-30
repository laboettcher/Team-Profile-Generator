# Team Profile Generator
![Github license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

Your challenge is to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

## Tabe of Contents

* [UserStory](#user-story)

* [AcceptanceCriteria](#acceptance-criteria)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Tests](#tests)

* [WalkThroughVideo](#walk-through-video)

* [References](#references)

## User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation

```
npm install
```

## Usage

Install and run node.js in your terminal (node index.js).

## License 
 MIT 

## Tests

```
npm run test
```

## Walk Through Video

* [Drive Link]()

## References

* [Stack Overflow](https://stackoverflow.com/questions/37975500/npm-install-doesnt-create-dist-folder)

* [Stack Overflow](https://stackoverflow.com/questions/51216276/running-node-index-js-does-nothing)

* [Inquirer](https://www.npmjs.com/package//inquirer)

* [Tabnine](https://www.tabnine.com/code/javascript/functions/fs/writeFileAsync)

* [Tabnine](https://www.tabnine.com/code/javascript/functions/toBe)

* [Blog](https://bobbyhadz.com/blog/npm-missing-script-test)

* [Jest](https://jestjs.io/docs/expect#tobevalue)
