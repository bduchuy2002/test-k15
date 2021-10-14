async function checkRole1(req, res, next) {
  const jwt = require("jsonwebtoken");
  const UserJobmodel = require("./mongoUserJob");
  console.log(1000);
  const id2 = jwt.verify(req.cookies.user, "huy").id;
  const user = await UserJobmodel.findOne({ _id: id2 });
  //   console.log(6, user2);
  if (user.role === "admin") {
    next();
  } else {
    res.json({ status: 400, mess: "ko co quyen" });
  }
}

module.exports = { checkRole1 };
