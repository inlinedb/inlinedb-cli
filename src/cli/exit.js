const {Context} = require('../context');

const command = 'exit';

const handler = () => {

  if (this.context.get() === Context.IDB) {

    this.context.clear();

  } else {

    this.context.cli.close();

    process.exit(0);

  }

};

module.exports = [
  command,
  handler
];
