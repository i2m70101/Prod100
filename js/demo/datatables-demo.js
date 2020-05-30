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

function butpress() {
  $("#enterItem").show();
  $("#enterAmount").show();
}

$("#enterAmount").keypress(function (e) {
  var mylist = [$("#enterItem").val(), $("#enterAmount").val()];
  if (e.which == 13) {
    $("#list").prepend("<li>" + mylist + "</li>");
  }
});
