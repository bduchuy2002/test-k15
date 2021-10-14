const express = require("express");
// const path = require("path");
const app = express();
app.listen(3000);
// const Usermode = require("./mongo");
app.get("/home", function (req, res) {
  res.send("HUYyyy");
});
