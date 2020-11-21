jQuery(function ($) {
  $(".MenuBtn").click(function(){
    $(".list").slideToggle();
  });
  $(".submit-btn").click(function(){
    $("form").css("display","none");
    $("table").css("display","block")
  });

});

