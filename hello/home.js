// $.ajax({
//   url: "http://localhost:10000/rrr/f",
//   type: "GET",
// })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
let view = 5;
async function createAcc() {
  try {
    const username = $("#user").val();
    const password = $("#pass").val();
    console.log(username, password);
    const respone = await $.ajax({
      url: "/link1/post",
      type: "POST",
      data: {
        user: username,
        password: password,
      },
      Headers: {
        test: 123,
      },
    });
    console.log(respone);
  } catch (err) {
    console.log(err);
  }
}
let totalPage;

async function render() {
  try {
    const listUser = await $.ajax({
      url: "http://localhost:10000/link1/get1",
      type: "GET",
    });
    console.log(listUser);
    let prev = `
      <button class="prev" style="background-color: blueviolet;" onclick="prev()">prev</button>
      `;
    $(".prev").append(prev);
    console.log(40, Math.ceil(listUser.length / view));
    for (let i = 1; i <= Math.ceil(listUser.length / view); i++) {
      let button = `
      <button class="huy${i}"" style="background-color: blueviolet;" onclick="changePage(${i})">${i}</button>
      `;
      $(".listButton").append(button);
    }
    let next = `
      <button class="next" style="background-color: blueviolet;" onclick="changePage(2)">next</button>
      `;
    $(".next").append(next);
    for (i = 0; i < view; i++) {
      const classList = `
        <div>
        ${listUser[i].user}
        </div>
        `;
      $(".list").append(classList);
    }
  } catch (err) {
    console.log(err);
  }
}
render();
async function changePage(page) {
  try {
    // console.log($(".5"));
    // console.log(page);
    const userList1 = await $.ajax({
      type: "GET",
      url: "/link1/page/" + page + "?view=" + view,
    });
    console.log(userList1);
    $(".list").html("");

    for (i = 0; i < view * 1; i++) {
      const classList1 = `
        <div>
        ${userList1.data1[i].user}
        </div>
        `;
      $(".list").append(classList1);
    }
    // console.log(userList1);

    $(".next").attr("onclick", `changePage(${page + 1})`);
    $(".prev").attr("onclick", `changePage(${page - 1})`);
    $(".listButton").children().attr("style", "background:white");
    $(`.huy${page}`).attr("style", "background:black");
  } catch (err) {
    console.log(err);
  }
}
function changeView() {
  view = $("#view").val();
  $(".listButton").html("");
  $(".prev").html("");
  $(".next").html("");
  $(".list").html("");
  render();

  console.log(view);
}

// async function changePass() {
//   try {
//     const username = $("#user").val();
//     const password = $("#pass").val();
//     const newPass = $("#newpass").val();
//     console.log(username, password, newPass);
//     const put = await $.ajax({
//       url:
//         "/rrr/h" +
//         "/614c9d6c057c79aac149cb2f" +
//         "?user=" +
//         username +
//         "&password=" +
//         password +
//         "&newPass=" +
//         newPass,
//       type: "PUT",
//     });
//     console.log(put);
//   } catch (err) {
//     console.log(err);
//   }
// }
