const { query } = require("express");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "./hello/uploads"));
  },
  filename: function (req, file, cb) {
    const exp = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + exp);
  },
});

const upload = multer({ storage: storage });
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router5 = express.Router();
const mongoose = require("./mongoCN");
const { checkLogin } = require("./check");
const { checkRole1 } = require("./checkRole1");

const checkRole = require("./checkRole");

const Usermode1 = require("./mongo4");
const BlackListModel = require("./blackList");
const UserJobmodel = require("./mongoUserJob");

// const UserSchema = mongoose.Schema(
//   {
//     user: String,
//     password: String,
//     address: String,
//     role: String,
//   },
//   { collection: "express" }
// );
// const Usermode1 = mongoose.model("express", UserSchema);
const ClassModel = require("./mongo1");
const Jobmodel = require("./mongoJob");

router5.put("/put1/:id", function (req, res) {
  Usermode1.updateOne(
    { _id: req.params.id, password: req.query.password, user: req.query.user },
    { password: req.query.newPass }
  )
    .then(function (data) {
      if (data.matchedCount !== 0) {
        res.json("doi mat khau thanh cong");
      } else {
        res.json("trung mat khau pass");
      }
    })
    .catch(function (err) {
      console.log(err);
    });
});
// router5.delete(
//   "/:id",
//   checkLogin,
//   checkRole,
// async function (req, res, next) {
//   const id2 = jwt.verify(req.cookies.user, "thai").id;
//   console.log(34, id2);
//   const user2 = await Usermode1.findOne({ _id: id2 });
//   if (user2.role === "admin") {
//     next();
//   } else {
//     res.json({ status: 400, mess: "ko co quyen" });
//   }
// },
//   function (req, res) {
//     Usermode1.deleteOne({ _id: req.params.id })
//       .then(function (data) {
//         res.json(data);
//       })
//       .catch(function (err) {
//         console.log(err);
//       });
//   }
// );
router5.post("/post", function (req, res) {
  console.log(req.body);

  Usermode1.findOne({ user: req.body.user })
    .then(async function (data) {
      if (data) {
        res.json("user da su dung");
      } else {
        const hashPass = await bcrypt.hash(req.body.password, 10);
        console.log(hashPass);
        return Usermode1.create({
          user: req.body.user,
          password: hashPass,
        });
      }
    })
    .then(function (user) {
      res.json(user);
    })
    .catch(function (err) {
      console.log(err);
    });
});
router5.post("/creatacc", async function (req, res) {
  try {
    const data = await UserJobmodel.findOne({
      username: req.body.username,
    });
    console.log(109, data);
    if (data) {
      res.json({ mess: "tai khoan da duoc su dung" });
    } else {
      const Hashpass = await bcrypt.hash(req.body.password, 10);
      const dataUser = UserJobmodel.create({
        username: req.body.username,
        password: Hashpass,
      });
      res.json(dataUser);
    }
  } catch (error) {
    res.json({ mess: "co loi sever", status: 500 });
  }
});
// router5.get("/get", checkLogin, checkRole, function (req, res) {
//   Usermode1.find({ address: req.query.address })
//     .then(function (data) {
//       res.json(data);
//     })
//     .catch(function (err) {
//       res.json(err);
//     });
// });

router5.get("/get1", function (req, res) {
  Usermode1.find()

    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});
router5.get("/get1", function (req, res) {
  Usermode1.find()

    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});
router5.post("/k", function (req, res) {
  Usermode1.findOne({
    user: req.query.user,
  })

    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});
router5.post("/a", function (req, res) {
  Usermode1.findOne({ user: req.query.user })
    .then(function (data) {
      if (data) {
        if (data.role === "teacher") {
          return classModal.create({ className: "k20" });
        } else {
          res.json("ko co quyen dang nhap");
        }
      }
    })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});
router5.put("/m", function (req, res) {
  Usermode1.findOne({ user: req.query.user })
    .then(function (data) {
      if (data) {
        if (data.role === "teacher") {
          return classModal.updateMany(
            { className: "K15" },
            {
              $push: {
                studentList: [
                  {
                    student: req.query.student,
                  },
                ],
              },
            }
          );
        } else {
          res.json("ko co quyen dang nhap");
        }
      }
    })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});
router5.get("/c", async function (req, res) {
  try {
    const classList = await classModal.find();
    res.json(classList);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

router5.post("/p", async function (req, res) {
  try {
    const usermodel = await Usermode1.findOne({ user: req.query.user });
    if (usermodel) {
      if (usermodel.role === "teacher") {
        const newclass = await ClassModel.create({ className: "k100" });
        res.json(newclass);
      }
    } else {
      res.json("ko co quyen dang nhap");
    }
  } catch (errer) {
    console.log(errer);
  }
});
// router5.delete("/delete10", checkRole1, async function (req, res) {
//   try {
//     const data = await UserJobmodel.deleteOne({ username: req.query.username });
//     res.json(data);
//   } catch (error) {
//     console.log(error);
//   }
// });
router5.get("/g/:id", function (req, res) {
  Usermode1.find({ _id: req.params.id })

    .then(function (data) {
      if (data) {
        res.json({ status: 200, mess: "da dang nhap" });
      } else {
        res.json({ status: 400, mess: "ko hop le" });
      }
    })
    .catch(function (err) {
      res.json(err);
    });
});
router5.get("/page/:page", async function (req, res) {
  try {
    const y = Number(req.params.page);

    const data1 = await Usermode1.find()
      .skip((y - 1) * req.query.view)
      .limit(req.query.view * 1);
    res.json({ data1, status: 200, mess: "thanhcong" });
  } catch (err) {
    res.json({ err, status: 500, mess: "loi server" });
  }
});
router5.get("/lop/:page", async function (req, res) {
  console.log(req.query.address);
  console.log(req.params.page);
  try {
    const data2 = await Usermode1.find({ address: req.query.address })
      .skip((req.params.page - 1) * 3)
      .limit(3);
    res.json({ data2, status: 200, mess: "thanh cong" });
  } catch (err) {
    res.json({ err, status: 500, mess: "loi server" });
  }
});
router5.post("/login", async function (req, res) {
  console.log(207, req.body);
  try {
    const data5 = await Usermode1.find({
      user: req.body.user,
    });

    if (data5) {
      console.log(data5[0].password);
      const checkPass = await bcrypt.compare(
        req.body.password,
        data5[0].password
      );
      if (checkPass) {
        const id1 = data5[0]._id;
        console.log(253, id1);
        let token = jwt.sign({ id: id1 }, "thai", { expiresIn: 100000 });
        res.json({ token, status: 200 });
      } else {
        res.json({ mess: "sai password", status: 400 });
      }
    } else {
      res.json({ mess: "sai username,password", status: 400 });
    }
  } catch (err) {
    console.log(err);
  }
});
router5.post("/logout", async function (req, res) {
  try {
    let token = req.cookies.user;
    await BlackListModel.create({ token: token });
    res.json({ status: 200, mess: "log out oke" });
  } catch (err) {
    res.json({ status: 500, mess: "loi sever" });
  }
});

router5.post(
  "/post2",
  upload.single("avatar"),
  async function (req, res, next) {
    try {
      console.log(281, req.file);
      console.log(282, req.body);
      const index = req.file.path.indexOf("uploads");
      const link =
        "/publics/" + req.file.path.slice(index, req.file.path.length);
      console.log(297, link);
      const newClass = await ClassModel.create({
        className: req.body.className,
        thumbnail: link,
      });
      res.json({ status: 200, mess: "tao thanh cong", newClass });
      // req.file is the `avatar` file
      // req.body will hold the text fields, if there were any
      res.json(req.file);
    } catch (err) {
      res.json({ status: 500, mess: "loi server" });
    }
  }
);

router5.post("/login1", async function (req, res) {
  console.log(318, req.body.username);
  try {
    const data10 = await UserJobmodel.findOne({
      username: req.body.username,
    });

    if (data10) {
      const checkPass1 = await bcrypt.compare(
        req.body.password,
        data10.password
      );
      if (checkPass1) {
        let token = jwt.sign({ id: data10._id }, "huy");
        res.json({ token, status: 200, mess: "succesfull", data10 });
      } else {
        res.json({ status: 400, mess: "da xay ra loi khong phat hien duoc" });
      }
    } else {
      res.json({ status: 400, mess: "da xay ra loi khong phat hien duoc" });
    }
  } catch (err) {
    console.log(285, err);
    res.json({ status: 500, mess: "loi sever" });
  }
});
router5.get("/listDo", async function (req, res) {
  try {
    const data11 = await Jobmodel.find();
    res.json({ status: 200, data11, mess: "thanh cong" });
  } catch (error) {
    console.log(error);
  }
});
router5.get("/listDo1/:username", async function (req, res) {
  try {
    const data = await UserJobmodel.findOne({ username: req.params.username });
    res.json({ status: 200, data, mess: "thanh cong" });
  } catch (error) {
    console.log(error);
  }
});
router5.post("/postJob", async function (req, res) {
  try {
    await Jobmodel.create({
      title: req.body.title,
      description: req.body.description,
      deadline: req.body.deadline,
      status: req.body.status,
      usedid: req.body.userid,
    });
    res.json({ mess: "tao thanh cong", status: 200 });
  } catch (error) {
    res.json({ error, status: 500 });
  }
});
module.exports = router5;

router5.post("/g2/:number", async function (req, res) {
  const x = Number(req.params.number);
  console.log(x);
  const User = await Usermode1.find().limit(x);
  res.json(User);
});

// tao tai khoan
// kiem tra username da duoc su dung hay chua
// neu user da ton tai thi thong bao user da ton tai
// user chua dc dung thi cho tao tk
