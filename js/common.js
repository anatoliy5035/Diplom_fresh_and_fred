$('.js-mapa-stop-scroll').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
});

$( ".js-mapa-stop-scroll" ).mouseleave(function() {
    $('.maps iframe').css("pointer-events", "none");
});