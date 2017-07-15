const chalk = require('chalk');

const error = message => console.log(chalk.red(message));
const log = message => console.log(chalk.cyan(message));

module.exports.error = error;
module.exports.log = log;
