var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

// begin running database
//db.connect();
// db.db.drop().then((result) => console.log('Deleted all tables', result))
// .catch((err) => console.log('Failed to delete table', err));

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use('/classes', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}


     // db.Messages.findAll().then((results) => {
      //   console.log('received get request results', results);
      //   results.forEach(message => {
      //     db.Users.findOne({where: {id: message.dataValues.UserId }})
      //     .then(function (result) {
      //       message.dataValues.username = result.dataValues.username;
      //     }).catch((err) => console.log('Received Error when getting one user!', err));
      //   });
      // })
      // .then(function () {
      //   callback(null, results);
      // })
      // .catch((err) => callback(err));