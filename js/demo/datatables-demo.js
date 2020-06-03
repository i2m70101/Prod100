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

var dataSet = localStorage.getItem("datas")
  ? JSON.parse(localStorage.getItem("datas"))
  : [];
/*
localStorage.setItem("datas", JSON.stringify(dataSet));
  [
["Expense", "Broadband", "28"],
  ["Income", "IM Sal", "2500"],
  ["Income", "Saf Sal", "2000"],
];*/
// JS Table below
$(document).ready(function () {
  $("#example").DataTable({
    data: dataSet,
    columns: [{ title: "Type" }, { title: "Name" }, { title: "Amount" }],
  });
});

//Add Row to Local Storage
function addData() {
  var a = $("#enterType").val();
  var b = $("#enterItem").val();
  var c = $("#enterAmount").val();
  var newArray = [[a, b, c]];

  dataSet.push(newArray);

  localStorage.setItem("datas", JSON.stringify(dataSet));
  $("#enterItem").val("");
  $("#enterAmount").val("");

  //var dataSet1 = [JSON.parse(localStorage.getItem("datas"))];
  //document.getElementById(newparsedata).value = dataSet1;
}
