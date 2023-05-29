'use strict';

const section = $('section');
const mainContent = $('.wrapper-content');
let inScroll = false;
section.first().addClass('active');

$('.nav__link').on('click', function (e) {
  e.preventDefault();
  scrollTo($(this).attr('data-to'));
});

function scrollTo(className) {
  clearClass('paginator-item--active');
  performTransition(section.filter(className).index());
  if (!section.first().hasClass('active')) {
    $('.header').addClass('dn');
  }
  else {
    $('.header').removeClass('dn');
  }
}

const performTransition = sectionInd => {
  if (!inScroll) {
    inScroll = true;
    const sectionHeight = $('.wrapper-content').height() / section.length;
    const position = (sectionHeight * 100 / $('.wrapper-content').height()) * -sectionInd;
    mainContent.css({
      'transform': `translateY(${position}%)`,
    });
    section.eq(sectionInd).addClass('active').siblings().removeClass('active');
    setTimeout(e => {
      inScroll = false;
    }, 650);
  }
};

const scrollDirection = dir => {
  const activeSection = section.filter('.active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();
  if (dir === 'next' && nextSection.length) {
    scrollTo(`.${nextSection[0].classList[0]}`);
  }
  if (dir === 'prev' && prevSection.length) {
    scrollTo(`.${prevSection[0].classList[0]}`);
  }
};

const wheeldelta = {
  x: 0,
  y: 0
};
let wheeling;
$(window).on('mousewheel', function (e) {
  clearTimeout(wheeling);
  wheeling = setTimeout(function() {
    const deltaY = e.originalEvent.deltaY;
    if (deltaY > 0 && !inScroll) {
      scrollDirection('next');
    } else if (deltaY < 0 && !inScroll) {
      scrollDirection('prev');
    }
    wheeling = undefined;

    // reset wheeldelta
    wheeldelta.x = 0;
    wheeldelta.y = 0;
  }, 18);

  wheeldelta.x += e.deltaFactor * e.deltaX;
  wheeldelta.y += e.deltaFactor * e.deltaY;
});

// $(window).on('mousewheel', e => {
//   const deltaY = e.originalEvent.deltaY;
//   if (deltaY > 0 && !inScroll) {
//     scrollDirection('next');
//   } else if (deltaY < 0 && !inScroll) {
//     scrollDirection('prev');
//   }
// });

$(".wrapper").on("touchmove", e => e.preventDefault());

$(window).on('keydown', e => {
  const next = 40;
  const prev = 38;
  const tagName = e.target.tagName.toLowerCase();

  if (tagName !== 'input' && tagName !== 'textarea') {

    if (e.keyCode == next && !inScroll) {
      scrollDirection('next');
    } else if (e.keyCode == prev && !inScroll) {
      scrollDirection('prev');
    }
  }
})

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile() || md.tablet();
const isOnlyMobile = md.mobile();

$('.about__item').on('click', e => {
  e.stopPropagation();
  if (!isMobile) {
    $(e.currentTarget).toggleClass('about__item--active')
  }
})

if (isOnlyMobile) {
  $('.about__item').addClass('about__item--active');
  $('.about__list').addClass(['owl-carousel','owl-theme']);
  $('.owl-carousel').owlCarousel({
    items: 1,
    dots: false,
  });
}

if (isMobile) {
  $(".wrapper-content").swipe({
    swipe: function (event, direction) {
      if (direction == 'up')
        scrollDirection('next');
      else if (direction == 'down')
        scrollDirection('prev');
    }
  });
}

function clearClass(className) {
  for (let i of document.querySelectorAll(`.${className}`))
    i.classList.remove(className);
}
