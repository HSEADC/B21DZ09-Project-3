/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var width = window.innerWidth;

function bannerAnimation() {
  if (width > 1241) {
    fadeBanner();
  } else {
    swipeBanner();
  }
}

;

function fadeBanner() {
  new Swiper('.swiperBanner', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    speed: 1000,
    effect: 'fade',
    spaceBetween: 20,
    autoplay: {
      delay: 1600,
      disableOnInteraction: false
    }
  });
}

function swipeBanner() {
  new Swiper('.swiperBanner', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
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
        spaceBetween: 14
      },
      981: {
        slidesPerView: 2.5,
        spaceBetween: 18
      },
      1241: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    speed: 1000
  });
}

; // Скролл фильтров

var lastTag = document.getElementById('lasttag');
var firstTag = document.getElementById('firsttag');

function filtersScrollToRight() {
  lastTag.scrollIntoView({
    behavior: "auto",
    block: "nearest",
    inline: "nearest"
  });
}

function filtersScrollToLeft() {
  firstTag.scrollIntoView({
    behavior: "auto",
    block: "nearest",
    inline: "nearest"
  });
}

document.getElementById('RightButton').addEventListener("click", filtersScrollToRight);
document.getElementById('LeftButton').addEventListener("click", filtersScrollToLeft); // Фильтр

function getMCardDataTags() {
  var mCards = document.getElementsByClassName('M_Card');
  var tags = [];

  for (var i = 0; i < mCards.length; i++) {
    var mCard = mCards[i];
    var mCardTags = mCard.dataset.tags.split(','); // mCardTags.forEach((item) => {
    //   tags.push(item)
    // })

    tags.push.apply(tags, _toConsumableArray(mCardTags));
  }

  console.log(tags);
}

window.addEventListener('resize', function (event) {
  bannerAnimation();
  swiperAdditional();
});
window.addEventListener('DOMContentLoaded', function (event) {
  bannerAnimation();
  swiperAdditional();
  getMCardDataTags();
});
/******/ })()
;