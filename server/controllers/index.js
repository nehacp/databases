var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results, fields) => {
        if (err) {
          console.log('db message GET error', err);
        } else {
          console.log('db message GET results', results);
          res.status(200);
          let obj = {
            results: results
          };
          res.send(JSON.stringify(obj));
        }
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function(err, result) {
        if (err) {
          console.log('db message insertion error', err);
        } else {
          console.log('db message results', result);
          res.status(200);
          res.send('message inserted');
        }
      });
    


    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {

      models.users.post(req.body.username, function(err, result) {
        if (err) {
          console.log('db username insertion error', err);
        } else {
          console.log('db username results', result);
          res.status(200);
          res.send('username inserted');
        }
      });
    }
  }
};

