const contexts = new WeakMap();

class Context {

  static get ALL() { return 'ALL'; }

  static get IDB() { return 'IDB'; }

  static get ROOT() { return 'ROOT'; }

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

    if (context === Context.IDB) {

      path = `/${options.idbName}/`;

    }

    this.cli.setPrompt(`idb [${path}] $ `);

  }

}

module.exports = {
  Context
};
