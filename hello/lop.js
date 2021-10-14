let address = "HP";

async function render() {
  try {
    const userLop = await $.ajax({
      type: "GET",
      url: "/link1/get?address=" + address,
    });
    console.log(userLop);
    let prev = `
      <button class="prev" style="background-color:;" onclick="prev()">prev</button>
      `;
    let next = `
      <button class="next" style="background-color: ;" onclick="changePage(2)">next</button>
      `;
    $(".next").append(next);
    $(".prev").append(prev);

    for (let i = 1; i <= Math.ceil(userLop.length / 3); i++) {
      let button = `
      <button class="huy${i}"" style="background-color: blueviolet;" onclick="changeLop(${i})">${i}</button>
      `;
      $(".listButton").append(button);
    }
  } catch (err) {
    console.log(err);
  }
}
async function changeLop(page) {
  try {
    const listAddress = await $.ajax({
      type: "GET",
      url: "/link1/lop/" + page + "?address=" + address,
    });

    $(".list").html("");
    console.log(listAddress.data2);
    for (i = 0; i < listAddress.data2.length; i++) {
      const classList1 = `
        <div>
        ${listAddress.data2[i].user}
        </div>
        `;
      $(".list").append(classList1);
    }
    $(".prev").attr("onclick", `changeLop(${page - 1})`);
    $(".next").attr("onclick", `changeLop(${page + 1})`);
    $(".listButton").children().attr("style", "backgroud-color:white");
    $(`.huy${page}`).attr("style", "background-color: black");
  } catch (err) {
    console.log(err);
  }
}

function changeAddress() {
  address = $("#address").val();
  console.log(address);
  $(".listButton").html("");
  $(".prev").html("");
  $(".next").html("");
  render();
}

render();
