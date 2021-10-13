$(document).on("click", ".MouseCursor img", function() {
    var src = $(this).attr("src");

    $('html').css({'cursor':'url('+src+'), auto'});
});

$(document).on("click", ".menuBtn", function() {
    $('.MouseCursor').slideToggle('fast');
});