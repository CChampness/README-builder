// Return a license badge based for the requested license
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    case "GPL":
      return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
      break;
    case "CC-0":
      return `![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`;
      break;
    case "Unlicense":
      return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `Details: https://opensource.org/licenses/MIT
      `;
      break;
    case "GPL":
      return `Details: https://www.gnu.org/licenses/gpl-3.0
      `;
      break;
    case "CC-0":
      return `Need link
      `;
      break;
    case "Unlicense":
      return `Details: http://unlicense.org/
      `;
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return "Explanation of the license will go here";
}

// Generate markdown for README
function generateMarkdown(ans) {
  let mdString = (`${ans.title}` ? `# ${ans.title}\n` : `# Untitled\n`);
  if (`${ans.license}` && (`${ans.license}` !== "<none>")) {
    mdString += `
  ${renderLicenseBadge(ans.license)}
  `;
  }

  mdString += `## Description
  `;

  if (`${ans.description}`) {
    mdString += `${ans.description}
  `;
  } else {
    mdString += `Description is TBD
  `;
  }

  if ((`${ans.license}` && (`${ans.license}` !== "<none>")) ||
      `${ans.snapshot}` ||
      `${ans.installation}` ||
      `${ans.usage}` ||
      `${ans.contributing}` ||
      `${ans.tests}` ||
      `${ans.credits}` ||
      `${ans.email}` ||
      `${ans.github}`) {
    mdString += `## Table of Contents
  `;
  }
  if (`${ans.snapshot}`) {
    mdString += `- [Snapshot](#snapshot)
  `;
  }
  if (`${ans.installation}`) {
    mdString += `- [Installing](#installing)
  `;
  }
  if (`${ans.usage}`) {
    mdString += `- [Usage](#usage)
  `;
  }
  if (`${ans.license}` && (`${ans.license}` !== "<none>")) {
    mdString += `- [License](#license)
  `;
  }
  if (`${ans.contributing}`) {
    mdString += `- [Contributing](#contributing)
  `;
  }
  if (`${ans.tests}`) {
    mdString += `- [Tests](#tests)
  `;
  }
  if (`${ans.credits}`) {
    mdString += `- [Collaborators](#collaborators)
  `;
  }
  if (`${ans.email}` || `${ans.github}`) {
    mdString += `- [Questions?](#questions)
  `;
  }
  //////////////////////////////////////////////////////////////
  if (`${ans.license}` && (`${ans.license}` !== "<none>")) {
    mdString += `## License
  ${renderLicenseLink(ans.license)}
  ${renderLicenseSection(ans.license)}
  `;
  }
  if (`${ans.snapshot}`) {
    mdString += `## Snapshot
  ![](${ans.snapshot})
  `;
  }
  if (`${ans.installation}`) {
    mdString += `## Installing
    ${ans.installation}
  `;
  }
  if (`${ans.usage}`) {
    mdString += `## Usage
    ${ans.usage}
  `;
  }
  if (`${ans.contributing}`) {
    mdString += `## Contributing
    ${ans.contributing}
  `;
  }
  if (`${ans.tests}`) {
    mdString += `## Tests
    ${ans.tests}
  `;
  }
  if (`${ans.credits}`) {
    mdString += `## Collaborators 
    ${ans.credits}
  `;
  }
  if (`${ans.email}` || `${ans.github}`) {
    mdString += `## Questions
    ${ans.email}
    ${ans.github}
  `;
  }
  return mdString;
}

module.exports = generateMarkdown;
