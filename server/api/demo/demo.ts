'use strict';

exports = module.exports = function(app) {
  const json = require('./demo.json');

  app.get('/api/sed/', (req, res) => {
    res.jsonp(json)
  });
};
