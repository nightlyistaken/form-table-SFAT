// Made by breadA#3012
// for the whole form
function insert() {
  let n = document.getElementById("name").value;
  let c = document.getElementById("class").value;
  let data = setData(n, c);

  let htmlTable = document.getElementById("result");
  let new_table = "<thead>  <tr>  <td>Name</td> <td>Class</td></tr></thead>";
  data.forEach((e) => {
    new_table = new_table + "<tr><td>" + e.firstName + "</td><td>" +
      e.className + "</td></tr>";
  });

  htmlTable.innerHTML = new_table;

  // const targetDiv = document.getElementById("div");
  // const btn = document.getElementById("toggle");

  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
}

function alertmsg() {
  alert("Please reload the page to apply changes.");
}
// to understand lol
function setData(n, c) {
  let data = localStorage.getItem("data");
  if (!data) {
    data = [];
  } else {
    data = JSON.parse(data);
  }
  console.log("data", data);
  if (n && c) {
    data.push({ firstName: n, className: c });
  }
  localStorage.setItem("data", JSON.stringify(data));
  return data;
}
