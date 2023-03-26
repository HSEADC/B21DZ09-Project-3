import './index.css'

const runningLineOne = document.querySelector('.M_RunningLine')
const mediaphone = window.matchMedia(
  '(min-width: 768px) and (max-width: 3000px)'
)

function runningLinesInit() {
  if (mediaphone.matches) {
    runningLineOne.innerHTML =
      runningLineOne.innerHTML + runningLineOne.innerHTML
    runningLineTwo.innerHTML =
      runningLineTwo.innerHTML + runningLineTwo.innerHTML
  }
}

document.addEventListener('DOMContentLoaded', () => {
  runningLinesInit(), toggleSwitchInit()
})

// function removeFifthCard() {
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
const cardAnswers = [
  {
    question: "Куда засыпать порошок  в стиральной машине?",
    answer: "В правый отсек — для предварительной стирки, в левый — для основной стирки, а в средний — кондиционер"
  },
  {
    question: "Как перекрыть воду?",
    answer: "Тут будет ответ"
  },
  {
    question: "Как зажечь газовую плиту?",
    answer: "Тут будет ответ"
  },
  {
    question: "Как отпереть сломанный замок?",
    answer: "Тут будет ответ"
  },
  {
    question: "Номера экстренных служб",
    answer: "Тут будет ответ"
  }
]
//
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
