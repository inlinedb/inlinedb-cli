const {Context} = require('../context');
const InlineDB = require('inlinedb');
const {dbExists} = require('../utils/file');
const logger = require('../utils/logger');

const command = 'use';
const context = Context.ROOT;

const handler = (params, cli) => {

  const [idbName] = params;

  try {

    if (idbName && !dbExists(idbName)) {

      logger.info(`Database '${idbName}' does not exist. It will created.`);

    }

    const idb = new InlineDB(idbName);

    cli.context.set(Context.IDB, {idbName});
    cli.env = ['idb', idb];
    cli.env = ['idbName', idbName];

  } catch (error) {

    logger.error(error.message);

  }

};

module.exports = [
  command,
  handler,
  context
];
