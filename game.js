#!/usr/bin/env node

var program = require('commander');
var config = require('./nconf.js');
var log = require('util').log;
var qfs = require("q-io/fs");
var q = require("q");
var _ = require('underscore');
var colors = require('colors');

program.version('0.0.1');

var setupWizard = function() {
  var prompt = require('prompt');

  prompt.message = "Game".green;

  var mysql = {
    properties: {
      mysql_host: {
        type: "string",
        description: 'MYSQL Host',
        'default': 'localhost'
      },
      mysql_port: {
        type: "string",
        description: 'MYSQL Port',
        'default': 3306
      },
      mysql_database: {
        type: "string",
        description: 'MYSQL Database',
        'default': 'game'
      },
    }
  }
  
  var gamesrv = {
    properties: {
      game_port: {
        type: "number",
        description: 'Port',
        'default': 8000
      }
    }
  }
  var statsrv = {
    properties: {
      stat_port: {
        type: "number",
        description: 'Port',
        'default': 9000
      }
    }
  }
  
  console.log('Please provide answers to the following questions to generate your config.json.');

  prompt.start();

  var pGet = q.denodeify(prompt.get);

  var steps = [function(res) {
    console.log('I: Setup MYSQL'.red.bold);
    return pGet(mysql).then(function(results) {
      // todo: validate assetDir? check port is open?
      return _.extend(res, results);
    });
  },
  function(res) {
    console.log('II: Setup Game Server'.yellow.bold);
    return pGet(gamesrv).then(function(results) {
      // todo: validate assetDir? check port is open?
      return _.extend(res, results);
    });
  },
  function(res) {
    console.log('III: Setup Stat Server'.cyan.bold);
    return pGet(statsrv).then(function(results) {
      // todo: validate assetDir? check port is open?
      return _.extend(res, results);
    });
  }];

  var finalResult = {};
  var result = q.resolve(finalResult);
  steps.forEach(function (f) {
    result = result.then(f);
  });
  return result;
};

program
  .command('configure')
  .description('Configuration wizard.')
  .action(function() {
    setupWizard().then(function(responses) {
      //console.log('setup complete: ', responses);
      qfs.write('./config.json', JSON.stringify(responses, true, 4))
        .then(function() {
          console.log('config saved...'.green.bold);
        }, function(err) {
          console.log('error saving config!', err);
        })
        .done();

      // TODO: do DB installation as well (run mysql child process to insert script?)
    });
  });
  
program
  .command('build')
  .description('Build game files.')
  .action(function() {
    console.log('Building...'.cyan.bold);
  });
  
program
  .command('start')
  .description('Start the game!')
  .action(function() {
    console.log('starting the server...');
    // todo: validate config?
    var main = require(__dirname + '/main.js');
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}