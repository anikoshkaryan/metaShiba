$(document).on("click", ".hamburger-menu", function(){
    $(".mobile_version").animate({right: "0"}, 0.8);
    $("body").addClass("hidden_body");
    $(this).addClass("open");
});


$(document).on("click", ".mobile_close", function(){
    $(".mobile_version").animate({right: '-1925px'}, 0.8);
    $("body").removeClass("hidden_body");
    $(".hamburger-menu").removeClass("open");
    $(this).addClass("open");
});
