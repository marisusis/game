#!/usr/bin/env node

var program = require('commander');
var config = require('./nconf.js');
var log = require('util').log;
var FS = require("q-io/fs");
var q = require("q");

program.version('0.0.1');

var mysql = {
  properties: {
    host: {
      type: "string",
      description: 'MYSQL Host'
    },
    port: {
      type: "string",
      description: 'MYSQL Port'
    },
    database: {
      type: "string",
      description: 'MYSQL Database'
    },
  }
}

program
  .command('configure')
  .description('Configure the game')
  .action(function() {
    var prompt = require('prompt');

    prompt.start();
    prompt.message = 'Game'.cyan;
    console.log('MYSQL Server'.red.bold);
    prompt.get(mysql,function(err,res) {
      console.log(res);
      return res;
    });
  });

program.parse(process.argv);