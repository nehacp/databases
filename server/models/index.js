var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // if (!db.Messages) {
      //   callback([]);
      // }

      // db.Messages.findAll()
      // .then((result) => callback(null, result))
      // .catch((err) => callback(err));

      
      // db.Messages.findAll({
      //   where: 'users.id = messages.userid',
      //   include: [{ model: db.Users, where: {id: db.Sequelize.col('messages.userid')} }]
      db.db.query('select users.username, messages.message from users, messages where messages.userid = users.id;', 
        {type: db.Sequelize.QueryTypes.SELECT}) 
        .then((results) => {
        // console.log('received get request results', results);
        // results.forEach(message => {
        //   message.username;
        //   db.Users.findOne({where: {id: message.dataValues.UserId }})
        //   .then(function (result) {
        //     message.dataValues.username = result.dataValues.username;
          // }).catch((err) => console.log('Received Error when getting one user!', err));
        // });
          console.log('Message after adding user', results);
          callback(null, results);
        })
      .catch((err) => callback(err));

    },

    post: function (message, callback) {
      // let userId;
      db.Messages.sync()
      .then(() => db.Users.findOne({
        where: {'username': message.username}
      }))
      .then((result) => message.UserId = result.dataValues.id)
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
