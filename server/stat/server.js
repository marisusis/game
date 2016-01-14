var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
// var config = require(path.resolve('../../../nconf.js'));

app.set('port','9000');

app.get('/',function(req,res,next) {
  res.send('stat');
});

server.listen(9000);
