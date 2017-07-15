const {Context} = require('./context');

const commands = new Map();

commands.set(Context.ALL, []);
commands.set(Context.IDB, []);
commands.set(Context.ROOT, []);

class Completer {

  static add(command, context = Context.ALL) {

    commands.get(context).push(command);

  }

  static complete(partialCommand, context) {

    return commands.get(Context.ALL)
      .concat(commands.get(context))
      .filter(command => command.indexOf(partialCommand) === 0)
      .sort();

  }

}

module.exports = {
  Completer
};
