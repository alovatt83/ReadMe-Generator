// generateReadme function populating the README.md
function generateReadme(answer) {
    return `
<h1 align="center">${answer.title} 👋</h1>
  
![badge](https://img.shields.io/badge/license-${answer.license}-brightgreen)<br />

## Description
🔍 ${answer.describe}

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
${answer.installInstructions}

## Usage
${answer.purpose}

## Screenshot
![Homepage Screenshot](${answer.screenshot})


## Deployed Link
${answer.deployed} 

## License
![badge](https://img.shields.io/badge/license-${answer.license}-brightgreen)
<br />
This application is covered by the ${answer.license} license. 

## Contributing
${answer.contributing}

## Tests
✏️ ${answer.tests}

## Questions
${answer.questions}<br />
<br />
Find me on GitHub: [${answer.username}](https://github.com/${answer.username})<br />
<br />
Email me with any questions: ${answer.email}<br /><br />

This README was generated with ❤️ by [README-generator](https://github.com/alovat83/readme-generator)
    `;
  }
  
  module.exports = generateReadme;