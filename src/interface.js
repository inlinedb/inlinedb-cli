const {Completer} = require('./completer');
const {Context} = require('./context');
const logger = require('./utils/logger');
const readline = require('readline');

const handlers = new Map();
const env = new Map();

class Interface {

  set env(params) {

    env.set(...params);

  }

  constructor() {

    this.defineBuiltIn();
    this.defineContext();

    this.context.prompt();

  }

  addHandler(command, handler, context) {

    Completer.add(command, context);
    handlers.set(command, handler);

    return this;

  }

  completer(command) {

    return [
      Completer.complete(command, this.context.get()),
      command
    ];

  }

  defineBuiltIn() {

    this.addHandler('about', () => {

      logger.log('Welcome to InlineDB Command Line Interface');
      logger.log('Version:', require('../package').version);

    });

    this.addHandler('exit', () => {

      if (this.context.get() === Context.IDB) {

        this.context.clear();

      } else {

        this.context.cli.close();

        process.exit(0);

      }

    });

  }

  defineContext() {

    const cli = readline.createInterface({
      completer: this.completer.bind(this),
      input: process.stdin,
      output: process.stdout,
      prompt: 'idb $ '
    });

    cli.on('line', this.handler.bind(this));

    this.context = new Context(cli);

  }

  handler(commandText) {

    const [command, ...params] = commandText.split(' ');
    const handler = handlers.get(command);

    if (handler) {

      handler(params, this, env);

    } else {

      logger.error(`Unknown command: ${command}`);

    }

    this.context.prompt();

  }

}

module.exports = {
  Interface
};
