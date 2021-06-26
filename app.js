const fs = require('fs');

const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err=> {
    if(err) throw new Error(err);

    console.log("Portfolio complete! Check ou index.html to see the output!");
})
