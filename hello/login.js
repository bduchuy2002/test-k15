async function login() {
  try {
    const user = $("#user").val();
    const password = $("#password").val();
    console.log(user, password);
    const data = await $.ajax({
      url: "/link1/login",
      type: "POST",
      data: { user, password },
    });
    console.log(data);
    // console.log(data.status);
    // console.log(data.data5[0]._id);
    // window.localStorage.setItem("userInfo", data.data5[0]._id);
    if (data.status === 200) {
      setCookie("user", data.token);
      window.location.href = "./profile";
    }
  } catch (err) {
    console.log(err);
  }
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
