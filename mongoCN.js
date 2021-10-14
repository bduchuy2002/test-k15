const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://huy:Huy123456@cluster0.tgdll.mongodb.net/k15?retryWrites=true&w=majority"
);
module.exports = mongoose;
