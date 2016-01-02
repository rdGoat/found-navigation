$(document).ready(function () {
  $(".icon").click(function () {
    $(".icon").toggleClass("icon-animate");
    $(".mobilenav").fadeToggle(500);
    $(".top-menu").toggleClass("top-animate");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
  });
});
