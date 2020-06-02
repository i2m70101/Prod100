// Call the dataTables jQuery plugin

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

//Add Row

function addData() {
  var table = $("#example").DataTable();
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
  ["Tiger Nixon", "2011/04/25", "$320,800"],
  ["Ashton Cox", "2009/01/12", "$86,000"],
  ["Cedric Kelly", "2012/03/29", "$433,060"],
];
// JS Table below
$(document).ready(function () {
  $("#example").DataTable({
    data: dataSet,
    columns: [{ title: "Name" }, { title: "Start date" }, { title: "Salary" }],
  });
});

localStorage.setItem("datas", JSON.stringify(dataSet));
