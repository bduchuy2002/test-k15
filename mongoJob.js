const mongoose = require("./mongoCN");
const router5 = require("./router5");

const jobSchema = mongoose.Schema(
  {
    title: String,
    status: String,
    description: String,
    deadline: Date,
    usedid: String,
  },
  { collection: "job" }
);

const Jobmodel = mongoose.model("job", jobSchema);

module.exports = Jobmodel;
