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

//HardCoded Data for Table

/*
  {
    name: "Broadband",
    amount: "28",
    type: "Expense",
  },

  {
    name: "IM sal",
    amount: "2500",
    type: "Income",
  },
  */
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
}
