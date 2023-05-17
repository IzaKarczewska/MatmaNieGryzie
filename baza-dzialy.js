$(document).ready(function () {
   $(".clickon").click(function () {
      $(this).next().slideToggle(800, "swing");
      if ($("#dol").attr("name") == "chevron-down") {
         $(".clickon ion-icon").attr("name", "chevron-up");
      }
      if ($("#dol").attr("name") == "chevron-up") {
         $(".clickon ion-icon").attr("name", "chevron-down");
      }
   });
});
