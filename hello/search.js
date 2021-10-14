// async function search() {
//   try {
//     const username = $("#user").val();
//     const put = await $.ajax({
//       url: "/link1/f?user=" + username,
//       type: "GET",
//     });
//     console.log(put);
//     const putput = String(put);
//     console.log(putput);
//     for (i = 0; i < put.length; i++) {
//       const add = `
//         <div>
//         {user : ${put[i].user}  <br>
//            password : ${put[i].password} <br>
//            _id:${put[i]._id}
//         }
//         </div>
//         `;
//       $(".list").append(add);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function searches() {
//   try {
//     const userID = $("#userID").val();
//     const getID = await $.ajax({
//       url: "/link1/g/" + userID,
//       type: "GET",
//     });
//     console.log(getID);
//     for (i = 0; i < getID.length; i++) {
//       const add = `
//         <div>
//         {user : ${getID[i].user}  <br>
//            password : ${getID[i].password} <br>
//            _id:${getID[i]._id}
//         }
//         </div>
//         `;
//       $(".list").append(add);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
// 614c9d6c057c79aac149cb2f

async function updatePass() {
  try {
    const user = $("#user").val();
    const password = $("#password").val();
    const userID = $("#userID").val();
    const newpassword = $("#newpassword").val();
    console.log(user, password, userID, newpassword);
    const update = await $.ajax({
      url:
        "/link1/put1/" +
        userID +
        "?user=" +
        user +
        "&password=" +
        password +
        "&newPass=" +
        newpassword,
      type: "PUT",
    });
    console.log(update);
  } catch (err) {
    console.log(err);
  }
}

async function clickk() {
  try {
    const number = $("#number").val();
    console.log(number);
    const limit = await $.ajax({
      url: "/link1/g2/" + number,
      type: "GET",
    });
    console.log(limit);
  } catch (err) {
    console.log(err);
  }
}
