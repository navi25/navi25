#!/usr/bin/env node

const opn = require('opn');
const cfonts = require('cfonts');
const inquirer = require('inquirer');

const actions = {
    GitHub() {
        opn('https://github.com/navi25');
    },
    LinkedIn() {
        opn('https://www.linkedin.com/in/navendra/');
    },
    Twitter() {
        opn('https://twitter.com/thedroidboy');
    },
    Medium() {
        opn('https://medium.com/@navendra');
    },
    Close() {
        console.log('Bye');
        process.exit(1);
    },
};

cfonts.say('theDroidBoy - navi', {
    font: 'chrome',
    colors: ['red', 'yellow', 'red'],
});

console.log(`Hey there, I'm Navendra Jha.
An Android Engineer who doesn’t like Android Build System, 
Loves Android Architecture & Kotlin😍, 
Also loves to joke a lot and thinks his jokes are funny 😂
`);


function prompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Explore more about me?',
                choices: [
                    'GitHub',
                    'LinkedIn',
                    'Twitter',
                    'Medium',
                    'Close',
                ],
            },
        ])
        .then((answers) => {
            actions[answers.choice]();
            prompt();
        });
}
prompt();
