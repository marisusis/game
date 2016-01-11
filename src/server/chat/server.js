var server = require('http').createServer();
var io = require('socket.io')(server);
var colors = require('colors');
var log = require('util').log;

io.on('connection',function(socket) {
  console.log('connection');
  socket.on('info',function(msg) {
    log(socket.id + ': ' +msg.white.bold);
  });
});

server.listen(3000);