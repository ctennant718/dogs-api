// here is where the schema will go

const mongoose = require("mongoose"); //load in Mongoose
const { Schema } = mongoose;

const DogSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  playfulness: {
    type: Number,
    required: true
  }
});

//creates a model that will take in the client and do CRUD operations
const Dog = mongoose.model("Dog", DogSchema);

module.exports = Dog;
