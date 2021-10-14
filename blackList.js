const mongoose = require("./mongoCN");

const BlackListScheme = mongoose.Schema(
  {
    token: String,
  },
  { collection: "blackList" }
);

const BlackListModel = mongoose.model("blackList", BlackListScheme);
module.exports = BlackListModel;
