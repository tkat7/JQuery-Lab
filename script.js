var table = 0;
$(".available").click(function () {
table = this.innerHTML;
var id = '#T' + table;
if($(id).attr('class') === 'available'){
$("h5").html("Table Number: " + table);
$(".form").show();
}
});

$(".close").click(function () {
  $(".form").hide();
});

$(".submit").click(function () {
event.preventDefault();
  var id = "#T" + table;
  $(".form").hide();
  $(id).removeClass('available').addClass('reserved');
})
