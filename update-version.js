const fs = require('fs');
const packageJsonPath = './package.json';
const appHtmlPath = './dev-app/app.html';
const file = require(packageJsonPath);
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(`Current: ${file.version}`);
rl.question('New version: ', version => {
    file.version = version;
    rl.close();
});

rl.on('close', () => {
    // Update app.html
    html = fs.readFileSync(appHtmlPath, 'utf8');
    newHtml = html.replace(/title="v[\d\.]+"/, `title="v${file.version}"`);
    fs.writeFileSync(appHtmlPath, newHtml);

    fs.writeFileSync(packageJsonPath, JSON.stringify(file, null, 2) + '\n');
    process.exit(0);
});
