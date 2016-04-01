'use strict'

// fade in
const fadeIn = (el) => {
  el.style.opacity = 0
  el.style.display = 'block'

  const fade = () => {
    let val = parseFloat(el.style.opacity)
    if (!((val += 0.1) > 1)) {
      el.style.opacity = val
      setTimeout(fade, 100)
    }
  }
  fade()
}

// fade out
const fadeOut = (el) => {
  el.style.opacity = 1

  const fade = () => {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = 'none'
    } else {
      setTimeout(fade, 100)
    }
  }
  fade()
}

// add fade in and out to navbar
window.addEventListener('load', () => {
  document.addEventListener('click', (e) => {
    if (e === document.getElementById('fixedbar') || e === document.getElementById('navigation')) {
      e.preventDefault()
    }
  })

  document.addEventListener('scroll', () => {
    const scrolly = window.scrollY
    if (scrolly >= 215) {
      fadeIn(document.getElementById('fixedbar'))
    } else if (scrolly <= 210) {
      fadeOut(document.getElementById('fixedbar'))
    }
  })
})
