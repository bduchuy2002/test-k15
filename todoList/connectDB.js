const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/k15-todo");
module.exports = mongoose;
