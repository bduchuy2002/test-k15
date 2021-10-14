async function creatClass() {
  const form = $("form");
  console.log(form[0]);
  const formData = new FormData(form[0]);
  const res = await $.ajax({
    url: "/link1/post2",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
  });
  console.log(12, res);
}
