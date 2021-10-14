const mongoose = require("mongoose");
const mongo = require("./mongo");
mongoose.connect("mongodb://localhost/k15");

const ClassSchema = mongoose.Schema(
  {
    className: String,
    teacher: {
      type: String,
      ref: "users",
    },
    studentList: [{ student: { type: String, ref: "users" }, append: Number }],
  },
  { collection: "class" }
);
const ClassModel = mongoose.model("class", ClassSchema);

ClassModel.find()

  .populate("studentList.student")
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });

// 1-1
// 1- nhieu
// nhiều - nhiều
