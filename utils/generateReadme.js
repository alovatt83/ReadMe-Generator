// generateReadme function populating the README.md
function generateReadme(input) {
    return `
<h1 align="center">${input.title}</h1>
  
![badge](https://img.shields.io/badge/license-${input.license}-white)<br />

## Description
${input.describe}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Deployed Link](#deployed)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${input.installInstructions}

## Usage
${input.purpose}

## Screenshot
![Homepage Screenshot](${input.screenshot})


## Deployed
${input.deployed} 

## License
![badge](https://img.shields.io/badge/license-${input.license}-white)
<br />
This application is covered by the ${input.license} license. 

## Contributing
${input.contributing}

## Tests
${input.tests}

## Questions
${input.questions}<br />
<br />
Find me on GitHub: [${input.username}](https://github.com/${input.username})<br />
<br />
Call me @: ${input.phone}
<br />
Email me with any questions: ${input.email}<br /><br />

This ReadDMe Generator Was Made by [ADL Software Solutions](https://github.com/alovat83/readme-generator)
    `;
  }
  
  module.exports = generateReadme;