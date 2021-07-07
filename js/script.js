// Made by breadA#3012
// for the whole form

function deleteData(firstName) {
  let data = localStorage.getItem("data"); // JSON String = "{ 'name': 'Hello' }"
  data = JSON.parse(data); // Converts JSON String into JS object

  // data.filter => pass a function
  const updatedData = data.filter((v) => v.firstName !== firstName);

  // Set data back to storage
  localStorage.setItem("data", JSON.stringify(updatedData));
  // Rerender table
  rerenderTable();
}

function editFirstName(firstName) {
  let data = localStorage.getItem("data"); // JSON String = "{ 'name': 'Hello' }"
  data = JSON.parse(data); // Converts JSON String into JS object

  // data.filter => pass a function
  const existingRecord = data.find((v) => v.firstName == firstName);
  if (existingRecord) {
    existingRecord.firstName = document.getElementById("inputUpdate").value;
  }

  // Set data back to storage
  localStorage.setItem("data", JSON.stringify(data));
  // Rerender table
  rerenderTable();
}

function editClass(className) {
  let data = localStorage.getItem("data"); // JSON String = "{ 'name': 'Hello' }"
  data = JSON.parse(data); // Converts JSON String into JS object

  // data.filter => pass a function
  const existingRecord = data.find((v) => v.className == className);
  if (existingRecord) {
    existingRecord.className = document.getElementById("classNameUpdate").value;
  }

  // Set data back to storage
  localStorage.setItem("data", JSON.stringify(data));
  // Rerender table
  rerenderTable();
}

function insert() {
  let n = document.getElementById("name").value;
  let c = document.getElementById("class").value;
  let data = setData(n, c);

  let htmlTable = document.getElementById("result");
  let new_table =
    "<thead>  <tr>  <td><center>Name</center></td> <td><center>Class</center></td> <td><center>Action</center></td></tr></thead>";
  data.forEach((e) => {
    new_table = new_table +
      "<tbody id='myTable'> <tr><td>" +
      e.firstName +
      "</td><td>" +
      e.className +
      "</td><td>" +
      "<button class= 'btn btn-outline-danger btn-sm ' onclick='deleteData(\"" +
      e.firstName +
      "\")'> Delete </button>" +
      "<button onclick='editFirstName(\"" +
      e.firstName +
      "\");' class= 'btn btn-outline-info btn-sm ' style='margin:7px; padding=10px;'> Save FirstName </button>" +
      "<button onclick='editClass(\"" +
      e.className +
      "\");' class= 'btn btn-outline-info btn-sm ' style='margin:7px; padding=10px;'> Save ClassName </button>" +
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

  if (data.find((v) => v.firstName == n)) {
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
        ' <br><center><a download="SFAT Table Save.png" href="' +
        img +
        '" class="btn btn-dark">Click me to download</a> </center>';
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

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

function areyousure() {
  alert("All cells deleted.");
}
