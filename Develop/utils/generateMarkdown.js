// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    return ` [![License](https://img.shields.io/badge/License-${license})](https://opensource.org/licenses/${license})`;
  }else if(!license){
    return '';
  }
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license) {
    return `https://opensource.org/licenses/${license}`;
  }else if(!license){
    return '';
  }
    
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `This project is licensed under the [${license} license]`;
  }else if(!license){
    return '';
  }
    
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { 

  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.projectTitle}

  ${licenseBadge}

  ## Description
  ${data.projectDesc}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.projectIns}

  ## Usage
  ${data.projectUsage}

  ## Contribution Guidelines
  ${data.projectContr}

  ## Tests
  ${data.test}

  ## License
  ${licenseSection}

  ## Questions?
  If you have any questions, please feel free to contact me on [GitHub](https://github.com/${data.github}) or via email at ${data.email}
`;
}

module.exports = generateMarkdown;
