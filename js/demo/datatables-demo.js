// Call the dataTables jQuery plugin

$(document).ready(function () {
  $("#dataTable").DataTable();
});

/*let items = [];

function addItem() {
  let Item = {
    name: document.getElementById(inputIt).value,
    amount: document.getElementById(inpAmt).value,
    type: document.getElementById(itemttype).value,
  };

  items.push(Item);
}*/

var data = [
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
];

$("#dataTable").DataTable({
  data: data,
  columns: [{ data: "name" }, { data: "amount" }, { data: "type" }],
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

//Add Row

var rName = document.getElementById(enterItem).value;
var rAmount = document.getElementById(enterAmount).value;
var rType = document.getElementById(enterType).value;

function addData() {
  var table = $("#dataTable").DataTable();
  table.row
    .add({
      name: rName,
      amount: rAmount,
      type: rType,
    })
    .draw();
}
