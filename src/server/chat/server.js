var server = require('http').createServer();
var io = require('socket.io')(server);


server.listen(3000);