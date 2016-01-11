var mysql = require('mysql');
var colors = require('colors');
var log = require('util').log;
var config = require('../../nconf.js');

var con = mysql.createConnection({
  host: config.mysql_host,
  user: config.mysql_user,
  password: config.mysql_password,
  database: config.mysql_database
});

con.connect(function(err){
  if(err){
    log('Error connecting to Db');
    return;
  }
  log('Connection established'.green.bold);
});

con.query('SELECT * FROM employees',function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});

con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
  log('Connection ended.'.green.bold);
});

