$(document).scroll(function() {
    checkOffset();
});

function checkOffset() {
    if($('.rocket-img').offset().top + 105 >= $('.background-collage').offset().top)
        $('.rocket-img').css('display', 'none');
    if($('.rocket-img').offset().top + 105 < $('.background-collage').offset().top)
        $('.rocket-img').css('display', 'block');
}
