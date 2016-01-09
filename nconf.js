var nconf = require('nconf');

nconf.argv()
  .env()
  .file({ file: __dirname + '/config.json' });

nconf.defaults({
    "mysql_host": "localhost",
    "mysql_port": "3306",
    "mysql_database": "game",
    "game_port": 8000
});

module.exports = nconf;