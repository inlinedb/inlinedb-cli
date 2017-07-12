const readline = require('readline');

const completer = command => [
  ['about'].filter(completion => completion.indexOf(command) === 0),
  command
];

const cli = readline.createInterface({
  completer,
  input: process.stdin,
  output: process.stdout,
  prompt: 'idb $ '
});

cli.on('line', command => {

  if (command === 'about') {

    console.log('Welcome to InlineDB Command Line Interface');
    console.log('Version:', require('./package').version);

  }

  cli.prompt();

});

cli.prompt();
