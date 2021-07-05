function insert() {
  let n = document.getElementById("name").value;
  let c = document.getElementById("class").value;

  let prev_table = document.getElementById("result").innerHTML;
  let new_table = prev_table + "<tr><td>" + n + "</td><td>" + c + "</td></tr>";
  document.getElementById("result").innerHTML = new_table;
}
