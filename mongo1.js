const mongoose = require("./mongoCN");
const mongo = require("./mongo");

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
