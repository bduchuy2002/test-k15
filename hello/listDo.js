async function render() {
  const res = await $.ajax({
    type: "GET",
    url: "/link1/listDo",
  });

  const user = await $.ajax({
    type: "GET",
    url: "link1/listDo1/" + username,
  });
  console.log(user.data._id);
  if (res.status === 200) {
    for (i = 0; i < res.data11.length; i++) {
      const div = `
        <div>
            <div>${res.data11[i].title}</div>
            <div>${res.data11[i].description}</div>
             <div>${res.data11[i].deadline}</div>
      </div>
        `;
      if (res.data11[i].usedid === user.data._id) {
        $(`.${res.data11[i].status}-list`).append(div);
      }
    }
    console.log(res);
  }
}
render();
// function changeId() {
//   const id = $("#listDo").val();
//   console.log(id);
// }
async function logout() {
  const data = await $.ajax({
    type: "POST",
    url: "/link1/logout",
  });
  console.log(data);
  if (data.status === 200) {
    delete_cookie("user");
    delete_cookie("username");
    window.location.href = "./login1";
  }
}
function delete_cookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
async function create() {
  try {
    const title = $("#title").val();
    const status = $("#status").val();
    const deadline = $("#deadline").val();
    const description = $("#description").val();
    const userid = $("#userid").val();
    const res = await $.ajax({
      url: "/link1/postJob",
      type: "POST",
      data: { title, status, deadline, description, userid },
    });
    $(".todo-list").html("");
    $(".doing-list").html("");
    $(".done-list").html("");
    render();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
let username = getCookie("username");
console.log(username);
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
