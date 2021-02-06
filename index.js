// Declaring the dependencies and variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme.js")
const fileOutput = util.promisify(fs.writeFile);

//Prompt the user questions to populate the README.md
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
            name: "purpose",
            message: "Enter project usage: "
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
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
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
            message: "Report issues here (enter link): "
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username: "
        },
        {
            type: "input",
            name: "phone",
            message: "Please enter your phone number: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
} 

// Async function using util.promisify 
  async function init() {
    try {
        // Ask user questions and generate responses
        const input = await userInput();
        const generateContent = generateReadme(input);
        // Write new README.md to dist directory
        await fileOutput('./generatedReadMe/README.md', generateContent);
     
    }   catch(err) {
        
    }
  }
  
  init();  