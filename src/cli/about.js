const logger = require('../utils/logger');

const command = 'about';

const handler = () => {

  logger.info('Welcome to InlineDB Command Line Interface');
  logger.info('Version:', require('../../package').version);

};

module.exports = [
  command,
  handler
];
