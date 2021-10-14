const mongoose = require("mongoose");
const mongo = require("./mongo");
mongoose.connect("mongodb://localhost/k15");

const ClassSchema = mongoose.Schema(
  {
    className: String,
    thumbnail: String,
    teacher: String,

    studentList: [{ student: { type: String, ref: "users" } }],
  },
  { collection: "class" }
);
const ClassModel = mongoose.model("class", ClassSchema);
module.exports = ClassModel;
