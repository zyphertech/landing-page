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
    // autoplay: {
    //   delay: 8000,
    //   disableOnInteraction: false,
    // },
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIHNsaWRlc1Blckdyb3VwOiAyLFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcblxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgMTAyNDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcclxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAvLyBhdXRvcGxheToge1xyXG4gICAgLy8gICBkZWxheTogODAwMCxcclxuICAgIC8vICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgLy8gfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxuICB9KTtcclxuICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjM1O1xyXG4gIHRvcE9mZnNldCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICBvZmZzZXQgPSAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpIC8gJChkb2N1bWVudCkuaGVpZ2h0KCkpICogMTAwICogLTE7XHJcbiAgJChcIi5idXR0b24tY29sbGFwc2VcIikuc2lkZW5hdih7XHJcbiAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgfSk7XHJcbiAgJCgnLnNpZGVuYXYnKS5zaWRlbmF2KCk7XHJcbiAgJCgnLnNjcm9sbHNweScpLnNjcm9sbFNweSh7XHJcbiAgICBzY3JvbGxPZmZzZXQ6IDY0XHJcbiAgfSk7XHJcbiAgdXBkYXRlTmF2QmFyKClcclxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgkZXZlbnQpIHtcclxuICAgIHVwZGF0ZU5hdkJhcigpXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlTmF2QmFyKCkge1xyXG4gIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjM1O1xyXG4gIHZhciB0b3BPZmZzZXQgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgdmFyIG9mZnNldCA9ICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgLyAkKGRvY3VtZW50KS5oZWlnaHQoKSkgKiAxMDAgKiAtMTtcclxuICBpZiAod2luZG93SGVpZ2h0ID4gdG9wT2Zmc2V0KSB7XHJcbiAgICAkKCduYXYnKS5yZW1vdmVDbGFzcygnbm90LW9uLWhvbWUnKVxyXG4gICAgJCgnbmF2IC5icmFuZC1sb2dvJykucmVtb3ZlQ2xhc3MoJ25vdC1vbi1ob21lJylcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnbmF2JykuYWRkQ2xhc3MoJ25vdC1vbi1ob21lJylcclxuICAgICQoJ25hdiAuYnJhbmQtbG9nbycpLmFkZENsYXNzKCdub3Qtb24taG9tZScpXHJcbiAgfVxyXG59XHJcbiJdLCJmaWxlIjoic2NyaXB0cy5qcyJ9
