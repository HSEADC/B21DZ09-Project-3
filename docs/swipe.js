/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// Скролл фильтров
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
document.getElementById('LeftButton').addEventListener("click", filtersScrollToLeft);
/******/ })()
;