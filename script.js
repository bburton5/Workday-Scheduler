// prints todays date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// creates rows of the schedule
for (var i = 0; i < 10; i++) {
  var tableBody = document.getElementById("tableBody");
  var tableRow = document.createElement("tr");
  tableRow.classList.add("row" + [i]);
  for (var x = 0; x < 3; x++) {
    var tableDataCell = document.createElement("td");
    tableRow.appendChild(tableDataCell);
    tableDataCell.classList.add("td" + [x]);
  }

  tableBody.appendChild(tableRow);
}

//adds the floppydisk symbol to the save button
var saveButton = document.getElementsByClassName("td2");
for (var y = 0; y < saveButton.length; y++) {
  saveButton[y].textContent = "💾";
}

//adds times for the day in the first column
for (var z = 0; z < 10; z++) {
  var firstColumn = document.getElementsByClassName("td0");
  var times = [
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ];
  firstColumn[z].textContent = times[z];
}

//adds a textarea where person will input their event
var eventColumn = document.getElementsByClassName("td1");
$(document).click(function (event) {
  var clickedElement = event.target;
  if (clickedElement.classList.contains("td1")) {
    var textDiv = document.createElement("input");
    clickedElement.appendChild(textDiv);
    textDiv.classList.add("form-control");
  } else {
    return;
  }
});

var saveEvent = document.getElementsByClassName("td2");
var inputText = document.getElementsByClassName("form-control");

$(document).click(function (event) {
  var clickedSaveButton = event.target;
  var allEvents = JSON.parse(localStorage.getItem("allEvents")) || [];
  if (clickedSaveButton.classList.contains("td2")) {
    for (var a = 0; a < inputText.length; a++) {
      var newEvent = inputText[a].value;
      var addedEvents = {
        events: newEvent,
      };
      allEvents.push(addedEvents);
    }
    console.log(allEvents);
  }
});
