const mongoose = require("mongoose");

const { DB_URL = "mongodb://127.0.0.1:27017/test" } = process.env;

async function main() {
  try {
    await mongoose.connect(DB_URL);
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().catch((err) => console.log(err));
