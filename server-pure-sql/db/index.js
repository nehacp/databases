var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


let dbConnection = mysql.createConnection({
  // host: 'localhost',
  user: 'root',
  password: 'plantlife',
  database: 'chat'
});

dbConnection.connect(function(err) {
  if (err) {
    console.log('db connection error', err);
  } else {
    console.log('db connected');
  }

});


module.exports = dbConnection;