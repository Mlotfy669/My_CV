$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 150) {
      $(".side_bar").css("height", "650");
      $(".side_bar").css("margin-top", "320px");
      $(".side_bar").css("transition", "all 0.3s");
      $(".my_cs").css("padding-top", "30px");
      $(".side_bar_data").css("margin-top", "30px");
      $(".side_bar_data").css("transition", "margin-top 0.3s");
    } else {
      $(".side_bar").css("height", "522");
      $(".side_bar").css("margin-top", "0px");
      $(".side_bar_data").css("margin-top", "-80px");
      $(".my_cs").css("padding-top", "155px");
      $(".my_cs").css("transition", "padding-top 0.3s");
    }
  });
  // close menu
  $(".close_menu").click(function () {
    $(".menu_list").hide(300);
    $(".close_menu").css("display", "none");
    $(".open_menu").css("display", "block");
  });
  // open menu
  $(".open_menu").click(function () {
    $(".menu_list").css("display", "flex");
    $(".open_menu").css("display", "none");
    $(".close_menu").css("display", "block");
  });
});
