const express = require("express");
//exports app as a function
module.exports = function (app) {
  app.use(express.static("public"));

  app.use(express.json()); 

};
