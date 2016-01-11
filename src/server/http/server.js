var http = require('http');
var express = require('express');
var app = express();
var colors = require('colors');
var path = require('path');
var log = require('util').log;

app.get('/*', function (req, res) {
  res.sendFile(path.resolve('/dest/'+req.path));
});

app.listen(3000, function () {
  log('Server started!'.green.bold);
});