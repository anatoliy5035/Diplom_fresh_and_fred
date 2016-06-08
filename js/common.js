

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

$(".js-list").click(
    function() {
        var clickedEl = ($(this).index());
        $(".tab-arrow-bottom").removeClass("active");
        $(".tab-arrow-bottom").eq(clickedEl).addClass("active");

        $(".black-and-beef").removeClass("active");
        $(".black-and-beef").eq(clickedEl).addClass("active");
    }
)

