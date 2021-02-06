// Assign constant values
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utilities/generateReadme.js")
const fileOutput = util.promisify(fs.writeFile);

//Request user input to export to GenerateReadme.JS
function userInput(){
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title? ",
        },
        {
            type: "input",
            name: "describe",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installInstructions",
            message: "Enter installation instructions: ",
        },
        {
            type: "input",
            name: "usage",
            message: "Enter projects primary usage: "
        },
        {
            type: "input",
            name: "screenshot",
            message: "Enter link to homepage screenshot: "
        },
        {
            type: "input",
            name: "deployed",
            message: "Enter deployed application link: "
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "GNU",
                "MIT",
                "Mozilla",
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "How to contribute further: "
        },
        {
            type: "input",
            name: "tests",
            message: "Enter testing information: "
        },
        {
            type: "input",
            name: "questions",
            message: "Report issues here (enter hyperlink or e-mail): "
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username: "
        },
        {
            type: "input",
            name: "phone",
            message: "Please enter your phone number [Format (555) 555-5555]: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
} 

// Async function to enable await keyword
    async function init() {
    try {
        // Request user input for ReadMe generation.
    const input = await userInput();
    const generateContent = generateReadme(input);
        // File output to utilities folder.
    await fileOutput('./generatedReadMe/README.md', generateContent);
     
}   catch(err) {
        
    }
  }
  
  init();  