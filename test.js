// const jwt = require("jsonwebtoken");
// let token = jwt.sign({ id: "10032002" }, "huy", { expiresIn: 60 });
// let string =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMDMyMDAyIiwiaWF0IjoxNjMzNTMxODQ4LCJleHAiOjE2MzM1MzE5MDh9.130LNfmAdndNPwUHw7aYxgmmkPSGmUOFxK3UipfpczE";
// let data = jwt.verify(string, "huy");
// console.log(data);
// console.log(token);
// module.exports = jwt;

const bcrypt = require("bcrypt");
var pass = "1";
// var dataBase = "2b$10$JeFwDO/1gzFJVW8e4MGih.24mrggbzJlGXXfHmzFBox/SLYU3sKNS";
bcrypt
  .hash(pass, 10)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
// bcrypt
//   .compare(pass, dataBase)
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
