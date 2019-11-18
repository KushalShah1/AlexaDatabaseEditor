var mysql = require('mysql');

var connection = mysql.createConnection({
  
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});