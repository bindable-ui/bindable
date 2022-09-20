#! /usr/bin/env node
/* eslint-disable no-console */
const path = require('path');
const chalk = require('chalk');
const fs = require('fs');
const childProcess = require('child_process');
const opn = require('opn');

const args = process.argv.slice(2);

const showUsage = () => {
    console.log(chalk.yellow('Usage:'));
    console.log(chalk.yellow('--------------------------------------------------------------'));
    console.log(chalk.yellow('[**/*.test.js]                # test file with coverage report'));
    console.log(chalk.yellow('--nowatch                     # turn off watcher'));
    console.log(chalk.yellow('open                          # opens the coverage report'));
    console.log(chalk.yellow('--help                        # display this message'));
    console.log(chalk.yellow('--------------------------------------------------------------'));
};

let command = 'node_modules/jest/bin/jest.js --watch';
let openCoverageReport = false;
if (args.length === 0) {
    showUsage();
    return;
}
args.forEach(entry => {
    if (entry === '-h' || entry === '--help') {
        showUsage();
    } else if (entry === '--nowatch') {
        command = command.replace('--watch', '');
    } else if (entry === 'open') {
        openCoverageReport = true;
        command = command.replace('--watch', '');
    } else {
        if (!fs.existsSync(entry)) {
            console.log(chalk.red(`Error!! Test file: ${entry} doesn't exist.`));
            process.exit();
            return;
        }
        command += ` ${entry}`;

        const {dir, name, ext} = path.parse(entry);
        const filename = name.replace('.test', '') + ext;
        const searchPath = `${dir}/${filename}`;
        const exists = fs.existsSync(searchPath);
        if (!exists) {
            console.log(chalk.red(`Error!! Original file: ${searchPath} doesn't exist.`));
        } else {
            command += ` --coverage --collectCoverageFrom=${searchPath}`;
        }
    }
});

command += ' --color always';
try {
    console.log(command);
    childProcess.execSync(command, {stdio: 'inherit'});
    if (openCoverageReport) {
        opn('./test/coverage-jest/index.html', {wait: false});
    }
} catch (e) {} // eslint-disable-line no-empty
