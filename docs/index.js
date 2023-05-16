/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var runningLineOne = document.querySelector('.M_RunningLine');
var mediaphone = window.matchMedia('(min-width: 768px) and (max-width: 3000px)');

function runningLinesInit() {
  if (mediaphone.matches) {
    runningLineOne.innerHTML = runningLineOne.innerHTML + runningLineOne.innerHTML;
    runningLineTwo.innerHTML = runningLineTwo.innerHTML + runningLineTwo.innerHTML;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  runningLinesInit(), toggleSwitchInit();
}); // function removeFifthCard() {
//   const element = document.getElementsByClassName("Five");
//   element.remove();
// }
//
// removeFifthCard()
//
// function removeFifthCard() {
//   const element = document.getElementById('Five')
//   element.ClassList.remove('Five')
//   document.body.appendChild(element)
// }
//
//

var cardAnswers = [{
  question: "\u041A\u0443\u0434\u0430 \u0437\u0430\u0441\u044B\u043F\u0430\u0442\u044C \u043F\u043E\u0440\u043E\u0448\u043E\u043A\u2028 \u0432 \u0441\u0442\u0438\u0440\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u0435?",
  answer: 'В правый отсек — для предварительной стирки, в левый — для основной стирки, а в средний — кондиционер'
}, {
  question: 'Как перекрыть воду?',
  answer: 'Тут будет ответ'
}, {
  question: 'Как зажечь газовую плиту?',
  answer: 'Тут будет ответ'
}, {
  question: 'Как отпереть сломанный замок?',
  answer: 'Тут будет ответ'
}, {
  question: 'Номера экстренных служб',
  answer: 'Тут будет ответ'
}]; //
// function showCardAnswer(cardAnswers) {
//   const element = document.createElement('div')
//   element.innerText = cardAnswers
//   document.body.appendChild(element)
// }
//
// setTimeout(() => {
//   showCardAnswer(cardAnswers[0])
//   }, 2000)
//
// setTimeout(
//   () => { console.log(cardAnswers[0]) },
//   2000)
//
// document.addEventListener('DOMContentLoaded'), () => {
//   showCardAnswer(cardAnswers[0])
// }
//
// setTimeout(() => {
//   showCardAnswer(cardAnswers[0])
// }, 2000)


var currentSlide = 0;

function initModal() {
  var firstCircle = document.querySelector('.A_Circles.first');
  var secondCircle = document.querySelector('.A_Circles.second');
  var thirdCircle = document.querySelector('.A_Circles.third');
  var fourthCircle = document.querySelector('.A_Circles.fourth');
  firstCircle.addEventListener('click', function () {
    slide('prev');
  });
  secondCircle.addEventListener('click', function () {
    slide('next');
  });
}

function slide(direction) {
  var firstCircle = document.querySelector('.A_Circles.first');
  var secondCircle = document.querySelector('.A_Circles.second');
  var thirdCircle = document.querySelector('.A_Circles.third');
  var fourthCircle = document.querySelector('.A_Circles.fourth');
  var rail = document.querySelector('.rail');
  var railLength = rail.children.length;

  if (direction === 'next' && currentSlide + 1 < railLength) {
    currentSlide++;
  } else if (direction === 'prev' && currentSlide > 0) {
    currentSlide--;
  } else if (direction === 'reset') {
    currentSlide = 0;
  }

  rail.style.transform = 'translateX(-' + 85.36 * currentSlide + 'vw)';
}

document.addEventListener('DOMContentLoaded', function () {
  initModal();
});
/******/ })()
;