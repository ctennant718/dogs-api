const express = require("express");
//exports app as a function
module.exports = function (app) {
  app.use(express.static("public"));

  app.use(express.json()); //parses the json

  const dogs = [];

  app.get("/api/v1/dogs", (req, res) => {
    res.status(200).json(dogs);
  });
  
  app.post("/api/v1/dogs", (req, res) => {
    dogs.push(req.body);
    res.sendStatus(201);
  });
};
