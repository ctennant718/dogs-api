const path = require("path");
const express = require("express");
const { body, check } = require("express-validator");
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
  .post(
    "/",
    body("name").not().isEmpty().trim().escape(),
    body("breed").not().isEmpty().trim().escape(),
    check("playfulness").matches(/\d/).withMessage("Must be a number!"),
    addDog,
  )
  .put(
    "/:id",
    body("name").not().isEmpty().trim().escape(),
    body("breed").not().isEmpty().trim().escape(),
    check("playfulness").matches(/\d/).withMessage("Must be a number!"),
    updateDog,
  )
  .delete("/:id", removeDog);

module.exports = router;
