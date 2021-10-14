async function login() {
  const username = $("#username").val();
  const password = $("#password").val();
  console.log(username, password);
  const data = await $.ajax({
    url: "/link1/login1",
    type: "POST",
    data: { username, password },
  });
  console.log(data);
  if (data.status === 200) {
    setCookie("user", data.token);
    setCookie("username", data.data10.username);
    window.location.href = "./listDo";
  }
}
async function creatAcc() {
  const username = $("#user").val();
  const password = $("#pass").val();

  const data1 = await $.ajax({
    type: "POST",
    url: "/link1/creatacc",
    data: { username, password },
  });
  console.log(data1);
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
