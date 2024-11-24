document.addEventListener('DOMContentLoaded', event => {
  gsap.registerPlugin(ScrollTrigger)
  const usps = document.querySelectorAll('.usp')

  usps.forEach((usp, index) => {
    gsap.from(usp, {
      scrollTrigger: {
        trigger: usp,
        start: 'top 110%', // Animace se spustí, když prvek bude 80% výšky obrazovky
        once: true, // Animace se spustí jen jednou, jakmile prvek vstoupí do zorného pole
        markers: false // Zobrazí nebo skryje pomocné značky pro ladění
      },
      x: 200,
      y: 200,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      delay: index * 0.2
    })
  })

  const h1 = document.querySelector('.animate-text')

  // Původní obsah H1
  const originalText = h1.innerHTML
  const strongRegex = /<strong>(.*?)<\/strong>/g

  const newHTML = originalText
    .replace(strongRegex, '@@@STRONG@@@')
    .split('@@@STRONG@@@')
    .map((part, index) => {
      const letters = part
        .split('')
        .map(letter => `<span class="letter">${letter}</span>`)
        .join('')
      const strongMatch = strongRegex.exec(originalText)
      const strongText = strongMatch
        ? strongMatch[1]
            .split('')
            .map(letter => `<strong class="letter">${letter}</strong>`)
            .join('')
        : ''
      return letters + strongText
    })
    .join('')

  h1.innerHTML = newHTML

  gsap.from('.letter', {
    opacity: 0,
    y: 50,
    duration: 0.5,
    ease: 'power3.out',
    stagger: 0.025
  })
  gsap.fromTo(
    '.certificate',
    { opacity: 0 }, // Počáteční stav
    {
      opacity: 1, // Konečný stav
      duration: 5, // Délka animace v sekundách
      ease: 'power2.out' // Plynulý přechod
    }
  )

  const navBeforePosition = () => {
    const hamburger = document.querySelector('.hamburger')
    if (hamburger) {
      const hamburgerWidth = hamburger.offsetWidth

      // Najděte existující <span> element
      const navBeforeSpan = document.querySelector('.nav-before-span')
      if (navBeforeSpan) {
        navBeforeSpan.style.right = `${hamburgerWidth - 9}px`
      }
    }
  }

  navBeforePosition()
})

function on (eventType, selector, callback) {
  document.addEventListener(eventType, function (e) {
    let targetElement = e.target
    while (targetElement && targetElement !== document) {
      if (targetElement.matches(selector)) {
        e.preventDefault()
        callback.call(targetElement, e)
        break
      }
      targetElement = targetElement.parentElement
    }
  })
}
on('click', '.hamburger', function (e) {
  e.preventDefault()
  this.classList.toggle('active')
  const nav = document.querySelector('nav')
  nav.classList.toggle('active')
  const html = document.querySelector('html')
  html.classList.toggle('overflow-hidden')
  const bgNav = document.querySelector('.header .bg')
  bgNav.classList.toggle('active')
})

function removeActiveClasses () {
  const hamburger = document.querySelector('.hamburger')
  const nav = document.querySelector('nav')
  const html = document.querySelector('html')
  const bgNav = document.querySelector('.header .bg')
  hamburger.classList.remove('active')
  nav.classList.remove('active')
  html.classList.remove('overflow-hidden')
  bgNav.classList.remove('active')
}

on('click', '.header .bg', function (e) {
  removeActiveClasses()
})

// on('click', '.header nav .close', function (e) {
//   removeActiveClasses()
// })
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    removeActiveClasses()
  }
})
