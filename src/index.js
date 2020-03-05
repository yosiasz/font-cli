// index.js

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('FontCli', { horizontalLayout: 'full' })
  )
);

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  console.log(args)
}