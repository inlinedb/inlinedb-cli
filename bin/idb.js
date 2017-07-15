#!/usr/bin/env node

const {Interface} = require('../src/interface');
const use = require('../src/idb/use');

new Interface()
  .addHandler(...use);
