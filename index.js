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
            message: "Add your contributer's",
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
            message: "What is yout github"
        }
    ])
}




function generate(answers){
    return `
    
## ${answers.name}


## License
license here 
    
##Description
 ${answers.description}
    
## Table of Contents

* [Intsallation](##Installation)
* [Usage](##Usage)
* [Contributing](##Contributing)
* [Tests](##Tests)
* [Questions](##Questions)
    
${answers.installation}
    
    
# Usage
    
${answers.usage}
    
# Contributing
${answers.collab}

# Tests
${answers.test}
# Questions

${answers.email}
${answers.myGit}
    
    `;
}

async function init(){
    try {
        const answers = await promptReadme();

        const generated = generate(answers);
        await writeFileAsynch('README.md', generated);

        console.log('Success')
    } catch(err){
        console.log(err)
    }
}

init();