const contexts = new WeakMap();

class Context {

  static get ROOT() { return 'ROOT'; }

  static get DB() { return 'DB'; }

  constructor(cli) {

    this.cli = cli;
    this.prompt = cli.prompt.bind(cli);

    this.clear();

  }

  clear() {

    this.set(Context.ROOT);

  }

  get() {

    return contexts.get(this);

  }

  set(context, options) {

    let path = '/';

    contexts.set(this, context);

    if(context === Context.DB) {

      path = `/${options.dbName}`;

    }

    this.cli.setPrompt(`idb [${path}] $ `);

  }

}

module.exports = {
  Context
};
