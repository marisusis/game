var path = require('path');

global.APP_ROOT_PATH = __dirname;
console.log(path.resolve('/'));
var httpsrv = require('./src/server/http/server.js');

console.log('STARTING');