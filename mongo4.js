const mongoose = require("./mongoCN");
const router5 = require("./router5");

const UserSchema = mongoose.Schema(
  {
    user: String,
    password: String,
    address: String,
    role: String,
  },
  { collection: "express" }
);
const Usermode1 = mongoose.model("express", UserSchema);
module.exports = Usermode1;
