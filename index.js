const inquirer = require("inquirer");
const fs = require("fs");
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "Apache") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "Boost") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    }
}
function returnLicense(license) {
    if (license === "MIT") {
        return "[MIT](https://choosealicense.com/licenses/mit/)";
    } else if (license === "Apache") {
        return "[Apache](https://choosealicense.com/licenses/apache-2.0/)";
    } else if (license === "Boost") {
        return "[Boost](https://choosealicense.com/licenses/bsl-1.0/)";
    }
}
inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "desc",
            message: "What is the description of your project?"
        },
        {
            type: "input",
            name: "install",
            message: "What are the installation instructions?"
        },
        {
            type: "input",
            name: "usage",
            message: "What will this project be used for?"
        },
        {
            type: "input",
            name: "contributors",
            message: "Who contributed to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "What tests would you like to run for this program?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your Github username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "list",
            name: "license",
            choices: ["MIT", "Apache", "Boost"]
        }
    ])
    .then((data) => {
        const readMeStr =
            `# ${data.title}
            
## Badges
${renderLicenseBadge(data.license)}
## Description
${data.desc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.install}

## Usage
${data.usage}

## Credits
${data.contributors}

## License
${returnLicense(data.license)}
---

## Tests
${data.tests}
## Questions
[Email](mailto:${data.email})
[Github](https://www.github.com/${data.github})
`
        fs.writeFile("README.md", readMeStr, (err) =>
            err ? console.log(err) : console.log('Success!'));
    })
