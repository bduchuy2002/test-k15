const Usermode1 = require("./mongo");
const jwt = require("jsonwebtoken");
async function checkRole(req, res, next) {
  const id2 = jwt.verify(req.cookies.user, "thai").id;
  const user2 = await Usermode1.findOne({ _id: id2 });
  if (user2.role === "admin") {
    next();
  } else {
    res.json({ status: 400, mess: "ko co quyen" });
  }
}

module.exports = checkRole;
