[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Your Team Profile Generator

## Description
This project is used for generating an HTML file that holds professional teams with their employer's information which is displayed as a cards. The acceptable user input allows you to identify the employee's postion, id number, email, as well as the office number for managers, the GitHub username linked to his/her profile for engineers, and the attending school for interns.  
This application does those things by using node.js, along with inquirer and jest, to generate an HTML based on the informated taken in by the user. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [License](#license)
- [Contribution](#how-to-contribute)
- [Tests](#tests)
- [Contact Information](#contact-information)

## Installation

This application does have dependencies: inquirer and jest.  
1. Make sure you have Node.js installed on your computer. Next, we will install the above mentioned packages using npm (node package manager). 
2. First, using the CLI, run npm init to install a package.json and personalize your application. 
3. To install inquirer, run the command: npm i inquirer@8.2.4 -- this applicaiton does require that specific version of inquirer. 
4. To install jest, use the command: npm i jest. 
5. If you want to use a gitignore to keep unnecessary data out of your GitHub repo, make sure your gitignore includes: node_modules; package-lock.json; .vscode; .DS_Store/; .history  
6. Next, use the FullDemo.gif to run the application and generate your HTML file. -- The main takeaway here is to ensure you cd into the Develop folder using the command: cd Develop. If you try to run tests or the application through the root folder, it won't run properly. 
7. To run tests --> command: npm run test
8. To fire the application and genrate your team's HTML file, command: node index
  
Following these steps, you should be able to run the app smoothly and successfully!

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:

## Demo
<a href="https://vimeo.com/806066026">Link to Full Demo</a>

![FullDemoGif](./Develop/assets/images/FullDemo.gif)

## Screenshots
Terminal Demo:  
![Terminal Demo Screenshot](./Develop/assets/images/terminalScreenshot.png)  
  
HTML Generation Sample:  
![HTML Generation Sample](./Develop/assets/images/htmlScreenshot.png)  

## Technologies
JavaScript, Node.js, Inquirer, Jest, HTML, CSS

## License
[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
This project is licensed under the MIT license. For more information about this license and what it entails visit: https://opensource.org/licenses/MIT

## How to Contribute

Please email me if you'd like to contribute so we can discuss!

## Tests

The following test conditions are active:  
Class Tests for Employee, Manager, Engineer, and Intern.

## Contact Information
  If you liked this project and want to see more, feel free to check out my 
  other repos [here](https://github.com/blairrrrwho).
  <br>
  For any questions or inquiries, you can reach me at blair10324@gmail.com for further information.