// let userid = window.localStorage.getItem("userInfo");
// const jwt = require("jsonwebtoken");
// const jwt = require("../test");
let userid = getCookie("user");
// console.log(userid);
// let token = jwt.verify(userid, "thai").id;
// console.log(token);
console.log(userid);
// if (userid == "") {
//   window.location.href = "/login";
// }
$.ajax({
  url: "/link1/g/" + userid,
  type: "GET",
})
  .then(function (data) {
    if (data.status !== 200) {
      // window.location.href = "/login";
    } else {
    }
  })
  .catch(function (err) {
    console.log(err);
  });
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

async function logout() {
  try {
    const res = await $.ajax({
      type: "POST",
      url: "/link1/logout",
    });
    if (res.status === 200) {
      delete_cookie("user");
      window.location.href = "/login";
    }
  } catch (err) {
    console.log(err);
  }
}
function delete_cookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
