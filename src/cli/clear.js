const command = 'clear';

const handler = () => process.stdout.write('\u001B[2J\u001B[0;0f');

module.exports = [
  command,
  handler
];
