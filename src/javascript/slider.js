import './index.css'

let currentSlide = 0

function initModal() {
  const firstCircle = document.querySelector('.A_Circles.first')
  const secondCircle = document.querySelector('.A_Circles.second')
  const firstCircle = document.querySelector('.A_Circles.first')
  const thirdCircle = document.querySelector('.A_Circles.third')
  const fourthCircle = document.querySelector('.A_Circles.fourth')

  firstCircle.addEventListener('click', () => {
    slide('prev')
  })

  secondCircle.addEventListener('click', () => {
    slide('next')
  })
}

function slide(direction) {
  const firstCircle = document.querySelector('.A_Circles.first')
  const secondCircle = document.querySelector('.A_Circles.second')
  const thirdCircle = document.querySelector('.A_Circles.third')
  const fourthCircle = document.querySelector('.A_Circles.fourth')
  const rail = document.querySelector('.rail')
  const railLength = rail.children.length

  if (direction === 'next' && currentSlide + 1 < railLength) {
    currentSlide++
  } else if (direction === 'prev' && currentSlide > 0) {
    currentSlide--
  } else if (direction === 'reset') {
    currentSlide = 0
  }

  rail.style.transform = 'translateX(-' + 85.36 * currentSlide + 'vw)'
}

document.addEventListener('DOMContentLoaded', () => {
  initModal()
})
