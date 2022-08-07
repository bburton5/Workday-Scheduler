var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var timeBlocks;
for (var i = 0; i < 10; i++) {
  var tableBody = document.getElementById("tableBody");
  var tableRowAdd = document.createElement("tr");
  var tableDataCellArray = ["td", "td", "td"];
  for (var x = 0; x < 3; x++) {
    var tableDataCellAdd = document.createElement("td");
    tableRowAdd.appendChild(tableDataCellAdd);
  }

  tableBody.appendChild(tableRowAdd);
}
