// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".


// let dbConnection = mysql.createConnection({
//   // host: 'localhost',
//   user: 'root',
//   password: 'plantlife',
//   database: 'chat'
// });

// dbConnection.connect(function(err) {
//   if (err) {
//     console.log('db connection error', err);
//   } else {
//     console.log('db connected');
//   }

// });
//----------------------------------------------------------------------------------------------

/* You'll need to
 *   npm install sequelize
 * before running this example. Documentation is at http://sequelizejs.com/
 */

var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', 'plantlife');
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
// var User = db.define('User', {
//   username: Sequelize.STRING
// });

var Users = db.define('Users', {
  username: {
    type: Sequelize.STRING, unique: true }  
});


var Messages = db.define('Messages', {
  //username: Sequelize.STRING,
  message: Sequelize.TEXT
  //roomname: Sequelize.STRING
});

Users.hasMany(Messages);
Messages.belongsTo(Users);

/* Sequelize comes with built in support for promises
 * making it easy to chain asynchronous operations together */

module.exports = {
  db: db,
  Messages: Messages,
  Users: Users
};