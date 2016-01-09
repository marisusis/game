var Class = require('./class');
var socket = require('socket.io-client');
var ChatClient = Class.extend({
  socket: '',
  connect: function(d) {
    this.socket = socket(d);
  }
});