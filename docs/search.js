/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// Поиск
function clearSearchInput() {
  var inputBlock = document.querySelector('.A_Input');
  inputBlock.addEventListener("focus", function () {
    inputBlock.value = " ";
  });
  inputBlock.addEventListener("blur", function () {
    inputBlock.value = "Поиск...";
  });
}

function initSearch() {
  var searchFormElement = document.querySelector('.M_SearchForm');
  var searchInputElement = searchFormElement.querySelector('.A_SearchInput');
  var searchButtonElement = searchFormElement.querySelector('.A_SearchButton');
  searchInputElement.addEventListener('input', function (e) {
    var requestText = e.target.value;
    console.log(requestText);
  });
}

window.addEventListener('DOMContentLoaded', function (event) {
  clearSearchInput();
  initSearch();
});
/******/ })()
;