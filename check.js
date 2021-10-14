const jwt = require("jsonwebtoken");

async function checkLogin(req, res, next) {
  const BlackListModel = require("./blackList");
  const Usermode1 = require("./mongo4");
  try {
    const token = req.cookies.user;
    // console.log(idUser);

    if (token) {
      const checkToken = await BlackListModel.findOne({ token: token });
      if (!checkToken) {
        let idUser = jwt.verify(token, "thai").id;

        // console.log(token);

        const user = await Usermode1.findOne({ _id: idUser });
        // console.log(user);
        if (user) {
          next();
        } else {
          res.json({ status: 400, mess: "ko co quyen" });
        }
      } else {
        res.json({ status: 400, mess: "token ko hop le" });
      }
      // let idUser = jwt.verify(token, "thai").id;
      // // console.log(token);

      // const user = await Usermode1.findOne({ _id: idUser });
      // // console.log(user);
      // if (user) {
      //   next();
      // } else {
      //   res.json({ status: 400, mess: "ko co quyen" });
      // }
    } else {
      res.json({ status: 400, mess: "ko co quyen" });
    }
  } catch (err) {
    res.json({ status: 500, mess: "loi server" });
  }
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
module.exports = { checkLogin };
