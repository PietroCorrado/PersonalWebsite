$(window).scroll(function() {
var scroll = $(window).scrollTop();

if (scroll >= 280) {
    $(".rocket-img").addClass("fixedPos");
}
else{

    $(".rocket-img").removeClass("fixedPos");
}
 });
