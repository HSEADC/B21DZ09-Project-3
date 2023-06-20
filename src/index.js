import './index.css'
import './page.css'

const width = window.innerWidth;

function bannerAnimation() {
  if (width > 1241) {
    fadeBanner();
  } else {
    swipeBanner();
  }
};

function fadeBanner() {
  new Swiper('.swiperBanner', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 1000,
    effect: 'fade',
    spaceBetween: 20,
    autoplay: {
      delay: 1400,
      disableOnInteraction: false
    },
  });
}

function swipeBanner() {
  new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 500,
    effect: 'slide',
    spaceBetween: 20
  });
}

function swiperAdditional() {
  new Swiper('.swiperAdditional', {
    watchOverflow: true,
    slidesPerView: 1,
    breakpoints: {
      200: {
        slidesPerView: 1.5,
        spaceBetween: 14,
      },
      981: {
        slidesPerView: 2.5,
        spaceBetween: 18,
      },
      1241: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    speed: 1000
  });
};

window.addEventListener('resize', (event) => {
  bannerAnimation(),
  swiperAdditional();
});

window.addEventListener('DOMContentLoaded', (event) => {
  bannerAnimation(),
  swiperAdditional();
});
