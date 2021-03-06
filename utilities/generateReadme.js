// generateReadme function populating the README.md
function generateReadme(input) {
    return `
<h1 align="center">${input.title}</h1>
  
![badge](https://img.shields.io/badge/license-${input.license}-orange)<br />

## Description
${input.describe}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Deployed](#deployed)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
- [Contact](#contact)

## Installation
${input.installInstructions}

## Usage
${input.usage}

## Screenshot
![Homepage Screenshot](${input.screenshot})


## Deployed
${input.deployed} 

## License
![badge](https://img.shields.io/badge/license-${input.license}-orange)
<br />
This application is covered by the ${input.license} license. 

## Contributing
${input.contributing}

## Testing
${input.tests}

## Questions
Report any discovered issues here: ${input.questions}<br />
<br />

## Contact
Find me on GitHub: [${input.username}](https://github.com/${input.username})<br />
<br />
Call me @: ${input.phone}
<br />
Email me with any questions: ${input.email}<br /><br />

This ReadMe Generator Was Made by [ADL Software Solutions](https://github.com/alovatt83/ReadMe-Generator)
    `;
  }
  
  module.exports = generateReadme;