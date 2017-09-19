var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', callback);
    }, // a function which produces all the messages
    post: function (message, callback) {
      //let query = 'INSERT INTO messages ('"message"') VALUES (' + message.message + ')'
      db.query('INSERT INTO messages (message) VALUES ("' + message.message + '")', callback);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username, callback) {
      db.query('INSERT INTO usernames (name) VALUES ("' + username + '")', callback);

    }
  }
};

