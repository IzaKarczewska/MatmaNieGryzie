$(document).ready(function () {
  $("#second-menu").mouseover(function () {
    $("li ul").stop().slideDown(500);
  });
  $("#second-menu").mouseout(function () {
    $("li ul").stop().slideUp();
  });

  $("#burger").click(function () {
    $("#categories").slideToggle(600, "swing");
  });
});
