$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      1024: {
        slidesPerView: 1,
        spaceBetween: 40,
        slidesPerGroup: 1,
      },
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  windowHeight = window.innerHeight * 0.35;
  topOffset = $(window).scrollTop();
  offset = ($(window).scrollTop() / $(document).height()) * 100 * -1;
  $(".button-collapse").sidenav({
    closeOnClick: true,
  });
  $('.sidenav').sidenav();
  $('.scrollspy').scrollSpy({
    scrollOffset: 64
  });
  updateNavBar()
  $(window).scroll(function ($event) {
    updateNavBar()
  });
});

function updateNavBar() {
  var windowHeight = window.innerHeight * 0.35;
  var topOffset = $(window).scrollTop();
  var offset = ($(window).scrollTop() / $(document).height()) * 100 * -1;
  if (windowHeight > topOffset) {
    $('nav').removeClass('not-on-home')
    $('nav .brand-logo').removeClass('not-on-home')
  } else {
    $('nav').addClass('not-on-home')
    $('nav .brand-logo').addClass('not-on-home')
  }
}
