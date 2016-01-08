var nconf = require('nconf');

nconf.argv()
  .env()
  .file({ file: __dirname + '/config.json' });

nconf.defaults({
  port: 3000
});

module.exports = nconf;