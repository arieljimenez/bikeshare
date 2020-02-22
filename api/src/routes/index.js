const { json } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Citibikenyc = require('./Citibikenyc');

module.exports = function (server) {
  // PLUGINS
  server.use(cors());
  server.use(json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  // ROUTES
  server.use('/api/v1/citibikenyc', Citibikenyc);
}
