const chalk = require('chalk');

const error = (...messages) => console.log(chalk.red(...messages));
const info = (...messages) => console.log(chalk.cyan(...messages));
const log = (...messages) => console.log(chalk.green(...messages));

module.exports.error = error;
module.exports.info = info;
module.exports.log = log;
