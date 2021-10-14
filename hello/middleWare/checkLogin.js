const Usermode1 = require("./mongo");

async function checkLogin(req, res, next) {
  const idUser = req.query.id;
  const user = await Usermode1.findOne({ _id: idUser });
  if (user) {
    next();
  } else {
    res.json({ status: 400, mess: "ko co quyen" });
  }
}
module.exports = { checkLogin };
