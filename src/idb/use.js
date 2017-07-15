const {Context} = require('../context');
const InlineDB = require('inlinedb');
const {dbExists} = require('../utils/file');

const command = 'use';
const context = Context.ROOT;

const handler = (params, cli) => {

  const [idbName] = params;

  try {

    if (idbName && !dbExists(idbName)) {

      console.log(`Database '${idbName}' does not exist. It will created on first commit.`);

    }

    const idb = new InlineDB(idbName);

    cli.context.set(Context.IDB, {idbName});

  } catch (error) {

    console.error(error.message);

  }

};

module.exports = [
  command,
  handler,
  context
];
