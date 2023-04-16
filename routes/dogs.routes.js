const path = require("path");
const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

const {
  getDogs,
  addDog,
  updateDog,
  removeDog,
} = require("../controllers/dog.controller");

const MIN_NAME_LEN = 1;
const MAX_NAME_LEN = 20;

const MIN_BREED_LEN = 1;
const MAX_BREED_LEN = 50;

const MIN_PLAYFULNESS = 0;
const MAX_PLAYFULNESS = 10;

router
  .get("/:id?", getDogs)
  .post(
    "/",
    body("name")
      .not()
      .isEmpty()
      .withMessage("Value for 'name' is required.")
      .trim()
      .escape()
      .isString()
      .withMessage("Name must be a string.")
      .isLength({ min: MIN_NAME_LEN, max: MAX_NAME_LEN })
      .withMessage(
        `Value for 'name' must be between ${MIN_NAME_LEN} and ${MAX_NAME_LEN} characters long.`,
      ),
    body("breed")
      .not()
      .isEmpty()
      .withMessage("Value for 'breed' is required.")
      .trim()
      .escape()
      .isString()
      .withMessage("Breed must be a string.")
      .isLength(
        `Value for 'breed' must be between ${MIN_BREED_LEN} and ${MAX_BREED_LEN} characters long.`,
      ),
    body("playfulness")
      .not()
      .isEmpty()
      .withMessage("A value for playfulness is required.")
      .isInt({ min: MIN_PLAYFULNESS, max: MAX_PLAYFULNESS })
      .withMessage(
        `Value for 'playfulness' must be positive integer between ${MIN_PLAYFULNESS} and ${MAX_PLAYFULNESS}.`,
      ),
    addDog,
  )
  .put(
    "/:id",
    body("name")
      .optional()
      .trim()
      .escape()
      .isString()
      .withMessage("Name must be a string.")
      .isLength({ min: MIN_NAME_LEN, max: MAX_NAME_LEN })
      .withMessage(
        `Value for 'name' must be between ${MIN_NAME_LEN} and ${MAX_NAME_LEN} characters long.`,
      ),
    body("breed")
      .optional()
      .withMessage("Value for 'breed' is required.")
      .trim()
      .escape()
      .isString()
      .withMessage("Breed must be a string.")
      .isLength(
        `Value for 'breed' must be between ${MIN_BREED_LEN} and ${MAX_BREED_LEN} characters long.`,
      ),
    body("playfulness")
      .optional()
      .withMessage("A value for playfulness is required.")
      .isInt({ min: MIN_PLAYFULNESS, max: MAX_PLAYFULNESS })
      .withMessage(
        `Value for 'playfulness' must be positive integer between ${MIN_PLAYFULNESS} and ${MAX_PLAYFULNESS}.`,
      ),
    updateDog,
  )
  .delete("/:id", removeDog);

module.exports = router;
