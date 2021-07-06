// Made by breadA#3012
// for the whole form

function deleteData(firstName) {
  let data = localStorage.getItem("data");
  data = JSON.parse(data);
  const updatedData = data.filter((v) => v.firstName !== firstName);
  localStorage.setItem("data", JSON.stringify(updatedData));
  rerenderTable();
}

function insert() {
  let n = document.getElementById("name").value;
  let c = document.getElementById("class").value;
  let data = setData(n, c);

  let htmlTable = document.getElementById("result");
  let new_table =
    "<thead>  <tr>  <td>Name</td> <td>Class</td> <td>Action</td></tr></thead>";
  data.forEach((e) => {
    new_table =
      new_table +
      "<tbody id='myTable'> <tr><td>" +
      e.firstName +
      "</td><td>" +
      e.className +
      "</td><td>" +
      "<button class= 'btn btn-outline-danger btn-sm ' onclick='deleteData(\"" +
      e.firstName +
      "\")'> Delete </button>" +
      "</td></tr></tbody>";
  });

  htmlTable.innerHTML = new_table;

  const targetDiv = document.getElementById("div");
  const btn = document.getElementById("toggle");

  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
}
//
function rerenderTable() {
  clearfield(); 
  insert();
}

// This function sets data into localStorage and re-renders the table
function setData(n, c) {
  let data = localStorage.getItem("data");

  if (!data) {
    data = [];
  } else {
    data = JSON.parse(data);
  }
  
  if(data.find(v => v.firstName == n)) {
    const errorBox = document.getElementById("errorbox");

    if (errorBox.style.display !== "none") {
      errorBox.style.display = "none";
    } else {
      errorBox.style.display = "block";
    }
    return null;
  } else {
    console.log("data", data);
    if (n && c) {
      data.push({ firstName: n, className: c });
    }
    localStorage.setItem("data", JSON.stringify(data));
    return data;
  }
}

function clearfield() {
  document.getElementById("name").value = "";
  document.getElementById("class").value = "";
}
// change
function save() {
  html2canvas(document.getElementById("result"), {
    onrendered: function (canvas) {
      var img = canvas.toDataURL("image/png");
      const imageDiv = document.getElementById("img-display");
      imageDiv.innerHTML =
        '<a download="SFAT Table Save.png" href="' + img + '">test</a>';
    },
  });
}
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
