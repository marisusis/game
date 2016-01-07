#!/usr/bin/node

var program = require('commander');
var nconf = require('nconf');
var util = require('util');
var pkg = require('config.json')('package.json');

program
  .version(pkg.version);