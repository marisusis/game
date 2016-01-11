var mysql = require('mysql');
var colors = require('colors');
var log = require('util').log;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "6277"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
