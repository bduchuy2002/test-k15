const mongoose = require("./mongoCN");
const router5 = require("./router5");
console.log(process.env.DBuser);
console.log(process.env.DBpass);
console.log(process.env.DBName);

const UserJobSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    role: String,
  },
  { collection: "userjob" }
);

const UserJobmodel = mongoose.model("userjob", UserJobSchema);

module.exports = UserJobmodel;
