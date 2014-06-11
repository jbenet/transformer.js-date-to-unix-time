#!/usr/bin/env node
var transformerTest = require('transformer-test');
var conv = require('./');

// run stock conversion tests, and try expected input/output pairs
var test = transformerTest.conversion(conv, [
  [new Date("2014-05-07T01:10:45.000Z"), 1399425045]
])
