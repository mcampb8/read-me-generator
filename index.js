const inquirer = require("inquirer");
const fs = require("fs");
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
])