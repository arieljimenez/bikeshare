"use strict"
const express = require("express");

const server = express();
// register all the defined routes
require('./routes')(server);

// get env variables
const { ENV, API_PORT = 3000 } = process.env;


server.listen(API_PORT, async function () {
  console.log('=============================');
  console.log(`= API running on port ${API_PORT}! =`)
  console.log('=============================');
});

process.on("unhandledRejection", err => {
  console.log('Server Error 🤷🏻‍♂️ ❌:', err);
  // don't stop if we are on PROD ENV
  if (ENV !== 'production') {
    process.exit(1);
  }
});
