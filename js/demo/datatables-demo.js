// Call the dataTables jQuery plugin
$(document).ready(function () {
  $("#dataTable").DataTable();
});

/*let items = [];

function addItem() {
  let Item = {
    name: document.getElementById(inputIt).value,
    amount: document.getElementById(inpAmt).value,
    date: document.getElementById(inpDate).value,
    type: document.getElementById(itemttype).value,
  };

  items.push(Item);
}*/

$("#enterItem").hide();
$("#enterAmount").hide();

function butpress() {
  $("#enterItem").show();
  $("#enterAmount").show();
  $("#pressme").text = "change now";
}

$("#enterAmount").keypress(function (e) {
  var mylist = [$("#enterItem").val(), $("#enterAmount").val()];
  if (e.which == 13) {
    $("#list").prepend("<li>" + mylist + "</li>");
  }
});
