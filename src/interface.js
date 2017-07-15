const readline = require('readline');

const handlers = new Map();

class Interface {

  constructor() {

    this.cli = readline.createInterface({
      completer: this.completer,
      input: process.stdin,
      output: process.stdout,
      prompt: 'idb $ '
    });

    this.cli.on('line', this.handler.bind(this));

    this.preDefine();

    this.cli.prompt();

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

    this.cli.prompt();

  }

  preDefine() {

    this.addHandler('about', () => {

      console.log('Welcome to InlineDB Command Line Interface');
      console.log('Version:', require('../package').version);

    });

  }

}

module.exports = {
  Interface
};
