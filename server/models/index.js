var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // if (!db.Messages) {
      //   callback([]);
      // }

      db.Messages.findAll()
      .then((result) => callback(null, result))
      .catch((err) => callback(err));
    },

    post: function (message, callback) {
      db.Messages.sync().then(() => db.Messages.create(message))
      .then((result) => {
        callback(null, result);
      })
      .catch((err) => {
        callback(err);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username, callback) {
      db.db.query('INSERT INTO usernames (name) VALUES ("' + username + '")', callback);

    }
  }
};
