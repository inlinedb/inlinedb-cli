const logger = require('../utils/logger');

const command = 'about';

const handler = () => {

  logger.log('Welcome to InlineDB Command Line Interface');
  logger.log('Version:', require('../../package').version);

};

module.exports = [
  command,
  handler
];
