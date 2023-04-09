//this file creates the app for the server

const express = require("express");

const app = express();
//bring in middleware
require("./middleware")(app);
//bring in database
require("./db");
//bring in routes
require("./routes")(app);

module.exports = app;
