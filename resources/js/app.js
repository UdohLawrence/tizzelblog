const hamburger = document.getElementById('hamburger')
const mobileNav = document.getElementById('mobile-nav')

const toggleMobileMenu = () => {

  if (mobileNav.classList.contains('hidden')) {
    hamburger.innerHTML = '&times;'
    mobileNav.classList.remove('hidden')
  } else {
    hamburger.innerHTML = '&#9776;'
    mobileNav.classList.add('hidden')
  }
}
