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
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "describe",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installInstructions",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "purpose",
            message: "What is this project usage for?"
        },
        {
            type: "input",
            name: "screenshot",
            message: "Enter link to homepage screenshot."
        },
        {
            type: "input",
            name: "deployed",
            message: "Enter deployed application link."
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
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
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
        const answer = await userInput();
        const generateContent = generateReadme(answer);
        // Write new README.md to dist directory
        await fileOutput('./generatedReadMe/README.md', generateContent);
     
    }   catch(err) {
        
    }
  }
  
  init();  