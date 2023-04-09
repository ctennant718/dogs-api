//here is where all our CRUD functions go
//they are middleware functions that respond to the routes and save to the database

//bring in the model (schema)
const Dog = require("../models/dog.model");

//CRUD methods
exports.getDogs = async (req, res) => {
  let query = {};
  if (req.params.id) {
    query._id = req.params.id;
  }
  try {
    const dogs = await Dog.find(query);
    res.status(200).json(dogs);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addDog = async (req, res) => {
  //get data from req.body
  const dogData = req.body;
  console.log("dogData", dogData);
  try {
    //use the model as a constructor
    const newDog = new Dog(dogData);
    //call the save method and await the result
    const result = await newDog.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateDog = async (req, res) => {
  try {
    //arguments passed are object to id record and one that shows the updates made
    const result = await Dog.updateOne({ _id: req.params.id }, req.body);
    if (result.n === 0) return res.sendStatus(404);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.removeDog = async (req, res) => {
  try {
    const result = await Dog.deleteOne({ _id: req.params.id });
    if (result.n === 0) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err);
  }
};
