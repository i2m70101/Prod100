// Call the dataTables jQuery plugin

$(document).ready(function () {
  $("#dataTable").DataTable();
});

$("#enterItem").hide();
$("#enterAmount").hide();
$("#enterType").hide();
$("#addRec").hide();

function butpress() {
  $("#enterItem").show();
  $("#enterAmount").show();
  $("#enterType").show();
  $("#pressme").hide();
  $("#addRec").show();
}
var data = [];

$("#dataTable").DataTable({
  data: data,
  columns: [{ data: "name" }, { data: "amount" }, { data: "type" }],
});
//Add Row

function addData() {
  var table = $("#dataTable").DataTable();
  var a = $("#enterItem").val();
  var b = $("#enterAmount").val();
  var c = $("#enterType").val();
  table.row
    .add({
      name: a,
      amount: b,
      type: c,
    })
    .draw();

  $("#enterItem").val("");
  $("#enterAmount").val("");
}

var dataSet = [
  [
    "Tiger Nixon",
    "System Architect",
    "Edinburgh",
    "5421",
    "2011/04/25",
    "$320,800",
  ],
  ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
  [
    "Ashton Cox",
    "Junior Technical Author",
    "San Francisco",
    "1562",
    "2009/01/12",
    "$86,000",
  ],
  [
    "Cedric Kelly",
    "Senior Javascript Developer",
    "Edinburgh",
    "6224",
    "2012/03/29",
    "$433,060",
  ],
];
// JS Table below
$(document).ready(function () {
  $("#example").DataTable({
    data: dataSet,
    columns: [
      { title: "Name" },
      { title: "Position" },
      { title: "Office" },
      { title: "Extn." },
      { title: "Start date" },
      { title: "Salary" },
    ],
  });
});
