const path = require("path");

const mongoose = require("./mongoCN");

const express = require("express");
var cookieParser = require("cookie-parser");
const { checkLogin } = require("./check");
const { checkLogin1 } = require("./checkLogin1");
// const UserRouter = require("./router1");
// const UserRouter2 = require("./router2");
// const UserRouter3 = require("./router3");
// const UserRouter4 = require("./router4");
const UserRouter5 = require("./router5");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
require("dotenv").config();
// app.use("/user", UserRouter);
// app.use("/userss", UserRouter2);
// app.use("/ff", UserRouter3);
// app.use("/down", UserRouter4);
app.use("/link1", UserRouter5);
app.use("/publics", express.static(path.join(__dirname, "./hello")));
const UserJobmodel = require("./mongoUserJob");
let homeLink1 = path.join(__dirname, "./home.html");
let homeLink2 = path.join(__dirname, "./lop.html");
let homeLink3 = path.join(__dirname, "./login.html");
let homeLink4 = path.join(__dirname, "./profile.html");
let homeLink5 = path.join(__dirname, "./login1.html");
let homeLink6 = path.join(__dirname, "./hello/views/class.html");
let homeLink7 = path.join(__dirname, "./listDo.html");
let searchLink = path.join(__dirname, "./search.html");
let userParams = path.join(__dirname, "./userParams.html");
let updatePass = path.join(__dirname, "./updatePass.html");
let limit = path.join(__dirname, "./limit.html");
app.get("/home1", function (req, res) {
  //   res.download("./noidung.txt");
  // res.sendFile(homeLink);
  //   res.download("./homee.html");
  //   console.log(req.query);
  //   console.log("params:", req.params);
  //   console.log("query:", req.query);
  res.sendFile(homeLink1);
});
app.get("/ejs", async function (req, res) {
  try {
    const list = await UserJobmodel.find();
    console.log(list);
    list.map(function (ele, index) {
      ele.username;
    });

    let data = { username: "thai", fullname: "Thai Hoang" };
    res.render("page/index", { username: data.username, list });
  } catch (error) {
    res.json({ status: 500, mess: "sever error" });
  }
});

app.get("/login", function (req, res) {
  //   res.download("./noidung.txt");
  // res.sendFile(homeLink);
  //   res.download("./homee.html");
  //   console.log(req.query);
  //   console.log("params:", req.params);
  //   console.log("query:", req.query);
  res.sendFile(homeLink3);
});
app.get("/listDo", checkLogin1, function (req, res) {
  //   res.download("./noidung.txt");
  // res.sendFile(homeLink);
  //   res.download("./homee.html");
  //   console.log(req.query);
  //   console.log("params:", req.params);
  //   console.log("query:", req.query);
  res.sendFile(homeLink7);
});
app.get("/login1", function (req, res) {
  //   res.download("./noidung.txt");
  // res.sendFile(homeLink);
  //   res.download("./homee.html");
  //   console.log(req.query);
  //   console.log("params:", req.params);
  //   console.log("query:", req.query);
  res.sendFile(homeLink5);
});
app.get("/profile", checkLogin, function (req, res) {
  //   res.download("./noidung.txt");
  // res.sendFile(homeLink);
  //   res.download("./homee.html");
  //   console.log(req.query);
  //   console.log("params:", req.params);
  //   console.log("query:", req.query);
  res.sendFile(homeLink4);
});
app.get("/class", function (req, res) {
  res.sendFile(homeLink6);
});
// app.get("/sreachhh", function (req, res) {
//   console.log(req.query.user);
//   // res.send("Bui DUc Huy123");
//   Usermode1.find({ user: req.query.user })
//     .then(function (data) {
//       res.json(data);
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// });
app.listen(process.env.PORT || 10000);
