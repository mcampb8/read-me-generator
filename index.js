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

## Description
${data.desc}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

These are the steps to Install my Project:
${data.install}

## Usage

These are the instructions for how to use this product:
${data.usage}

To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    md
    ![alt text](assets/images/screenshot.png)
    

## Credits

I collaborated with: 
${data.contributors}

## License
${returnLicense(data.license)}
---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges
${renderLicenseBadge(data.license)}

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.
## Questions
[Email](mailto:${data.email})
[Github](https://www.github.com/${data.github})
`
        fs.writeFile("README-1.md", readMeStr, (err) =>
            err ? console.log(err) : console.log('Success!'));
    })
