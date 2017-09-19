var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results, fields) => {
        if (err) {
          console.log('GET request error', err);
        } else {
          let responseBody = {};
          responseBody.results = results;
          res.status(200);
          res.send(JSON.stringify(responseBody));
        }
      });

    },
    post: function (req, res) {
      models.messages.post(req.body, function(err, result) {
        if (err) {
          console.log('POST request error', err);
        } else {
          res.status(200);
          res.send(result.dataValues);
        }
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {

      models.users.post(req.body, function(err, result) {
        if (err) {
          console.log('db username insertion error', err);
        } else {
          // console.log('db username results', result);
          res.status(200);
          res.send('username inserted');
        }
      });
    }
  }
};

