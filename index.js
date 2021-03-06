const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsynch = util.promisify(fs.writeFile);

 function promptReadme() {
    return  inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your project?"
        },
        {
            type: "checkbox",
            name: 'License',
            message:'Do you have a license badge?',
            choices:[
                'MIT',
                'GNU',
                'no'
            ],
            
        },
        {
            type: 'input',
            name: 'url',
            message: 'YOur Licence badge?'
        },
        {
            type:"input",
            message: "Add your project decription",
            name: "description"
        },
        {
            type: "input",
            message: "Add project installation instructions",
            name: "installation",
            
        },
        {
            type: "input",
            message: "How to use the your application",
            name: "usage"
        },
        {
            type: "input",
            message: "Add your contributers",
            name: "collab"
        },
        {
            type: "input",
            message: "Add test example",
            name: "test"
    
        },
        {
            type: "input",
            name: "email",
            message: "Add your email"
        },
        {
            type: "input",
            name: "myGit",
            message: "What is your github?"
        }
    ])
}




function generate(answers){
    return `
    
# ${answers.name}

${answers.url}


## License
This uses ${answers.License} License
    
## Description
 ${answers.description}
    
## Table of Contents

* [Intsallation](##Installation)
* [Usage](##Usage)
* [Contributing](##Contributing)
* [Tests](##Tests)
* [Questions](##Questions)

## Installation

${answers.installation}
    
    
## Usage
    
${answers.usage}
    
## Contributing
${answers.collab}

## Tests
${answers.test}
## Questions

* ${answers.email}
* ${answers.myGit}
    
    `;
}

async function init(){
    try {
        const answers = await promptReadme();

        const generated = generate(answers);
        await writeFileAsynch('readME.md', generated);

        console.log('Success')
    } catch(err){
        console.log(err)
    }
}

init();