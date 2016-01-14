var path = require('path');
var log = require('util').log;
var colors = require('colors');

global.APP_ROOT_PATH = __dirname;

var httpsrv = require('./server/http/server.js');

log('Starting servers...'.blue.bold);