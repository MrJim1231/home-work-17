$(document).ready(function () {
  $(".header__nav-btn").click(function () {
    $(this).toggleClass("active");
    $(".header__nav-list").stop(true, true).slideToggle(500);
  });
});