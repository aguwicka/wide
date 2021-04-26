(function($) {
    $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("tab__active")
                .siblings()
                .removeClass("tab__active")
                .closest("div.tabs")
                .find(".tabs__content")
                .removeClass("tab__active")
                .eq($(this).index())
                .addClass("tab__active");
        });
    });
})(jQuery);

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false
});
