/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


function removeFifthCard() {
  var element = document.getElementsByClassName("Five");
  element.remove();
}

removeFifthCard(); //
// function removeFifthCard() {
//   const element = document.getElementById('Five')
//   element.ClassList.remove('Five')
//   document.body.appendChild(element)
// }
//

var cardAnswers = [{
  question: "\u041A\u0443\u0434\u0430 \u0437\u0430\u0441\u044B\u043F\u0430\u0442\u044C \u043F\u043E\u0440\u043E\u0448\u043E\u043A\u2028 \u0432 \u0441\u0442\u0438\u0440\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u0435?",
  answer: "В правый отсек — для предварительной стирки, в левый — для основной стирки, а в средний — кондиционер"
}, {
  question: "Как перекрыть воду?",
  answer: "Тут будет ответ"
}, {
  question: "Как зажечь газовую плиту?",
  answer: "Тут будет ответ"
}, {
  question: "Как отпереть сломанный замок?",
  answer: "Тут будет ответ"
}, {
  question: "Номера экстренных служб",
  answer: "Тут будет ответ"
}];

function showCardAnswer(cardAnswers) {
  var element = document.createElement('div');
  element.innerText = cardAnswers;
  document.body.appendChild(element);
} // setTimeout(() => {
//   showCardAnswer(cardAnswers[0])
//   }, 2000)
// setTimeout(
//   () => { console.log(cardAnswers[0]) },
//   2000)


document.addEventListener('DOMContentLoaded'), function () {
  showCardAnswer(cardAnswers[0]);
}; // setTimeout(() => {
//   showCardAnswer(cardAnswers[0])
// }, 2000)
/******/ })()
;