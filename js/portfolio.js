$(document).ready(function () {
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() >= 150) {
  //     $(".side_bar").css("height", "650");
  //     $(".side_bar").css("margin-top", "320px");
  //     $(".side_bar").css("transition", "all 0.3s");
  //     $(".my_cs").css("padding-top", "30px");
  //     $(".side_bar_data").css("margin-top", "30px");
  //     $(".side_bar_data").css("transition", "margin-top 0.3s");
  //   } else {
  //     $(".side_bar").css("height", "522");
  //     $(".side_bar").css("margin-top", "0px");
  //     $(".side_bar_data").css("margin-top", "-80px");
  //     $(".my_cs").css("padding-top", "155px");
  //     $(".my_cs").css("transition", "padding-top 0.3s");
  //   }
  // });
  // close menu
  $(".all_btn").click(function () {
    $(".template").show(300);
    $(".life").show(300);
    $(".dashboard").show(300);
    $(".all_btn").addClass("active");
    $(".template_btn").removeClass("active");
    $(".design_btn").removeClass("active");
    $(".life_btn").removeClass("active");
  });
  $(".template_btn").click(function () {
    $(".template").show(300);
    $(".life").css("display" , "none");
    $(".dashboard").css("display", "none");
    $(".template_btn").addClass("active");
    $(".all_btn").removeClass("active");
    $(".design_btn").removeClass("active");
    $(".life_btn").removeClass("active");
  });
  $(".design_btn").click(function () {
    $(".dashboard").show(300);
    $(".template").css("display" , "none");
    $(".life").css("display", "none");
    $(".design_btn").addClass("active");
    $(".template_btn").removeClass("active");
    $(".all_btn").removeClass("active");
    $(".life_btn").removeClass("active");
  });
  $(".life_btn").click(function () {
    $(".template").css("display" , "none");
    $(".dashboard").css("display" , "none");
    $(".life").show(300);
    $(".design_btn").removeClass("active");
    $(".template_btn").removeClass("active");
    $(".all_btn").removeClass("active");
    $(".life_btn").addClass("active");
  });
});
