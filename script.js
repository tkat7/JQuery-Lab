var table = 0;
$(".available").click(function () {
table = this.innerHTML;
var id = '#T' + table;
if($(id).attr('class') === 'available'){
$("h5").html("Table Number: " + table);
$(".form").fadeIn();
}
});

$(".close").click(function () {
  clearForm();
  $(".form").fadeOut();
});

mouse(1);
mouse(2);
mouse(3);
mouse(4);
mouse(5);
mouse(6);
mouse(7);
mouse(8);
mouse(9);
function mouse(circle) {
  $("#T" + circle).mouseover(function () {
if($("#T" + circle).attr("class") == "reserved"){
    $("#B" + circle).show();
  }
});
$("#T" + circle).mouseout(function () {
if($("#T" + circle).attr("class") == "reserved"){
  $("#B" + circle).hide();
}
});

}


$(".submit").click(function () {
event.preventDefault();

  var tableId = "#T" + table;
  var boxId = "#B" + table;
  var name = $("#name").val();
  var num = $("#number").val() | 1;
  $(boxId).html("Name: " + name + " <br> Party size: " + num);
  console.log($(boxId).text());
  clearForm();
  $(".form").hide();
  $(tableId).removeClass('available').addClass('reserved');
})

function clearForm() {
  $("#name").val("");
  $("#phone").val("");
  $("#number").val("");
}
