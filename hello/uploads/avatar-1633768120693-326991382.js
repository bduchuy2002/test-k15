const express = require("express");
const path = require("path");
const app = express();
app.use("/publics", express.static(path.join(__dirname, "./publics")));
let homeLink = path.join(__dirname, "./homee.html");
// console.log(express);

app.get("/home", function (req, res) {
  console.log(req.query);
  //   res.download("./noidung.txt");
  //   res.sendFile(homeLink);
  //   res.download("./homee.html");
  //   console.log(req.query);
  //   console.log("params:", req.params);
  //   console.log("query:", req.query);
});
// app.get("/css", function (req, res) {
//   res.sendFile(path.join(__dirname, "./homee.css"));
// });
app.listen(3000);
