const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/k15");
const BlackListScheme = mongoose.Schema(
  {
    token: String,
  },
  { collection: "blackList" }
);

const BlackListModel = mongoose.model("blackList", BlackListScheme);
module.exports = BlackListModel;
