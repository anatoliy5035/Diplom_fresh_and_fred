

$('.js-mapa-stop-scroll').click(function () {
    $('.js-mapa-stop-scroll iframe').css("pointer-events", "auto");
});

$( ".js-mapa-stop-scroll" ).mouseleave(function() {
    $('.js-mapa-stop-scroll iframe').css("pointer-events", "none");
});

$(".js-toggle-class-menu").click(function(){
    $(this).toggleClass("active");
    $(".mobi-menu").toggleClass("active");
})

