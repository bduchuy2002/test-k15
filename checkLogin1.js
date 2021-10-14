const jwt = require("jsonwebtoken");

async function checkLogin1(req, res, next) {
  const BlackListModel = require("./blackList");
  const UserJobmodel = require("./mongoUserJob");
  try {
    const token = req.cookies.user;
    if (token) {
      const checkToken = await BlackListModel.findOne({ token: token });

      if (!checkToken) {
        const idUser = jwt.verify(token, "huy").id;

        const data = await UserJobmodel.find({ _id: idUser });
        if (data) {
          next();
        } else {
          res.json({ status: 400, mess: "phat hien loi" });
        }
      } else {
        res.json({ status: 400, mess: "phat hien loi" });
      }
    } else {
      res.json({ status: 400, mess: "phat hien loi" });
    }
  } catch (error) {
    res.json({ error, status: 500, mess: "sever error" });
  }
}

module.exports = { checkLogin1 };
