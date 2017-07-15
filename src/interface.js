const {Context} = require('./context');
const readline = require('readline');

const handlers = new Map();

class Interface {

  constructor() {

    this.defineBuiltIn();
    this.defineContext();

    this.context.prompt();

  }

  addHandler(command, handler) {

    handlers.set(command, handler);

    return this;

  }

  completer(command) {

    return [
      ['about'].filter(completion => completion.indexOf(command) === 0),
      command
    ];

  }

  handler(command) {

    const handler = handlers.get(command);

    handler && handler(command.split(' ').slice(1));

    this.context.prompt();

  }

  defineContext() {

    const cli = readline.createInterface({
      completer: this.completer,
      input: process.stdin,
      output: process.stdout,
      prompt: 'idb $ '
    });

    cli.on('line', this.handler.bind(this));

    this.context = new Context(cli);

  }

  defineBuiltIn() {

    this.addHandler('about', () => {

      console.log('Welcome to InlineDB Command Line Interface');
      console.log('Version:', require('../package').version);

    });

  }

}

module.exports = {
  Interface
};
