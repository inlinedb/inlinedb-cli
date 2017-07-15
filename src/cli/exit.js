const {Context} = require('../context');

const command = 'exit';

const handler = (params, cli) => {

  if (cli.context.get() === Context.IDB) {

    cli.context.clear();

  } else {

    process.exit(0);

  }

};

module.exports = [
  command,
  handler
];
