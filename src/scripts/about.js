const about__list = document.querySelector('.about__list');

const firstAboutItem = document.querySelector('.about__item');
firstAboutItem.classList.add('faq__item--active');

$(".about__item").click(handler => {
    $(".about__item").removeClass("about__item--active");
    $(handler.currentTarget).addClass("about__item--active");
    // console.log(handler);
});

function containsClassJQ(className, obj) {
    if (obj.addClass(className))
        obj.removeClass(className);
    else {
        clearClass(className);
        obj.addClass(className);
    }
}

if (isOnlyMobile) {
    $('.about__item').addClass('about__item--active');
    $('.about__list').addClass(['owl-carousel','owl-theme']);
    $('.owl-carousel').owlCarousel({
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
    });
}