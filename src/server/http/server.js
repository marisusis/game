var http = require('http');
var express = require('express');
var app = express();
var colors = require('colors');
var path = require('path');
var log = require('util').log;

app.use('/',require('./routes.js'));

app.listen(3000, function () {
  log('Server started!'.green.bold);
});