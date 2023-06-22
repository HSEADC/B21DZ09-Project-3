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
      delay: 1600,
      disableOnInteraction: false
    },
  });
}

function swipeBanner() {
  new Swiper('.swiperBanner', {
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

// Скролл фильтров

const lastTag = document.getElementById('lasttag')
const firstTag = document.getElementById('firsttag')

function filtersScrollToRight() {
  lastTag.scrollIntoView({
    behavior: "auto",
    block: "nearest",
    inline: "nearest"}
  );
}

function filtersScrollToLeft() {
  firstTag.scrollIntoView({
    behavior: "auto",
    block: "nearest",
    inline: "nearest"}
  );
}

document.getElementById('RightButton').addEventListener("click", filtersScrollToRight);
document.getElementById('LeftButton').addEventListener("click", filtersScrollToLeft);

// Фильтр

function getMCardDataTags() {
    const mCards = document.getElementsByClassName('M_Card')
    const tags = []

    for (let i = 0; i < mCards.length; i++) {
      const mCard = mCards[i];
      const mCardTags = mCard.dataset.tags.split(',')
      // mCardTags.forEach((item) => {
      //   tags.push(item)
      // })
      tags.push(...mCardTags)
    }

  console.log(tags)
}

window.addEventListener('resize', (event) => {
  bannerAnimation();
  swiperAdditional();
});

window.addEventListener('DOMContentLoaded', (event) => {
  bannerAnimation();
  swiperAdditional();
  getMCardDataTags();
});
