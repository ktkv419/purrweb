;(() => {
  if (window.innerWidth > 900) {
    const cookiesBtn = document.querySelector('.cookies__btn')
    const cookiesBar = document.querySelector('.cookies')

    const aboutSection = document.querySelector('section.about')
    const aboutText = aboutSection.querySelector('.about__text')
    const aboutPhone = aboutSection.querySelector('.phone')

    const closeCookies = () => {
      cookiesBar.classList.remove('active')
    }

    const openCookies = () => {
      cookiesBar.classList.add('active')
    }

    window.addEventListener('load', openCookies)
    cookiesBtn.addEventListener('click', closeCookies)

    const aboutAnimation = () => {
      if (
        aboutSection.getBoundingClientRect().height / 2 >
        aboutSection.getBoundingClientRect().top
      ) {
        window.removeEventListener('scroll', aboutAnimation)
        aboutText.classList.add('animated')
        aboutPhone.classList.add('animated')
      }
    }
    window.addEventListener('scroll', aboutAnimation)
  }

  const formInputs = [...document.querySelectorAll('.form__input')]
  const submitBtn = document.querySelector('.form__submit')

  submitBtn.addEventListener('click', (e) => {
    formInputs.forEach((input) => input.classList.add('submitted'))
  })
})()
