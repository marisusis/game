var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var app = express();
app.set('port',8000);
var server = http.createServer(app);
server.listen(8000);

app.use('/err',require('./routes/error'));
