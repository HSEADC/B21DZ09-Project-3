let currentSlide = 0

function initModal() {
  const postTeasers = document.getElementsByClassName('postTeaser')
  const sliderButtonLeft = document.querySelector('.sliderButton.left')
  const sliderButtonRight = document.querySelector('.sliderButton.right')

  for (var i = 0; i < postTeasers.length; i++) {
    postTeasers[i].addEventListener('click', toggleModal)
  }


  sliderButtonLeft.addEventListener('click', () => {
    slide('prev')
  })

  sliderButtonRight.addEventListener('click', () => {
    slide('next')
  })
}

function toggleModal() {
  const body = document.body

  if (body.classList.contains('modal')) {
    slide('reset')
  }

  body.classList.toggle('modal')
}


function slide(direction) {
  const sliderButtonLeft = document.querySelector('.sliderButton.left')
  const sliderButtonRight = document.querySelector('.sliderButton.right')
  const rail = document.querySelector('.rail')
  const railLength = rail.children.length

  if (direction === 'next' && currentSlide + 1 < railLength) {
    currentSlide++
  } else if (direction === 'prev' && currentSlide > 0) {
    currentSlide--
  } else if (direction === 'reset') {
    currentSlide = 0
  }

  if (currentSlide === 0) {
    sliderButtonLeft.classList.add('hidden')
    sliderButtonRight.classList.remove('hidden')
  } else if (currentSlide + 1 === railLength) {
    sliderButtonLeft.classList.remove('hidden')
    sliderButtonRight.classList.add('hidden')
  } else {
    sliderButtonLeft.classList.remove('hidden')
    sliderButtonRight.classList.remove('hidden')
  }

  rail.style.transform = 'translateX(-' + 664 * currentSlide + 'px)'
}

document.addEventListener('DOMContentLoaded', () => {
  initModal()
