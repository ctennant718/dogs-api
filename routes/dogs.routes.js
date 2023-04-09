const path = require("path");
const express = require("express");
//get hold of Router from express
const router = express.Router();

const {
  getDogs,
  addDog,
  updateDog,
  removeDog,
} = require("../controllers/dog.controller");


router
  .get("/:id?", getDogs)
  .post("/", addDog)
  .put("/:id", updateDog)
  .delete("/:id", removeDog);

module.exports = router;