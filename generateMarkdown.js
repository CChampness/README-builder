// Return a license badge for the requested license
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    case "GPL":
      return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
      break;
    case "Apache":
      return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
      break;
    case "BSD":
      return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
      break;
  }
}

// Return the license link
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
    case "Apache":
      return `Details: https://opensource.org/licenses/Apache-2.0
      `;
      break;
    case "BSD":
      return `Details: https://opensource.org/licenses/BSD-3-Clause
      `;
      break;
  }
}

// Returns the license section of README
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
    return `This application is provided under the MIT Open Source license
    `;
    break;
  case "GPL":
    return `This application is provided under the GNU GPL 3.0 license
    `;
    break;
  case "Apache":
    return `This application is provided under the Apache 2.0 license
    `;
    break;
  case "BSD":
    return `This application is provided under the BSD 3-Clause license
    `;
    break;
  }
}

// Generate markdown for README
function generateMarkdown(ans) {
  // If the user dpesn't provide a title, just put "Untitled"
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

  // Create the Table of Contents
  // Only include sections that the user provided input for
  // Most sections are optional
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
  // Write out the sections of the README.
  // The user might not have provided input for all sections,
  // in which case, skip over any that the user doesn't provide.
  if (`${ans.license}` && (`${ans.license}` !== "<none>")) {
    mdString += `## License
  ${renderLicenseSection(ans.license)}
  ${renderLicenseLink(ans.license)}
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
    Please feel free to contact us or to report issues
    email: ${ans.email}
    GitHub profile: ${ans.github}
  `;
  }
  return mdString;
}

// Make the functions n this file available to any
// functions that need to call them.
module.exports = generateMarkdown;
