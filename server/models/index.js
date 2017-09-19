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
      // let userId;
      db.Users.sync().then(() => db.Users.findOne({
        where: {'username': message.username}
      })).then((result) => message.UserId = result.dataValues.id)
      .then(() => db.Messages.create(message))
      .then((result) => callback(null, result))
      .catch((err) => callback(err));
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (user, callback) {
      db.Users.sync().then(() => db.Users.create(user))
      .then((result) => {
        callback(null, result);
      })
      .catch((err) => {
        callback(err);
      });
    }
  }
};
