const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('nav-menu')
const userMenuBtn = document.getElementById("user-menu-button")
const userDropdown = document.getElementById("user-dropdown")

const toggleMobileMenu = () => {

  if (navMenu.classList.contains('hidden')) {
    hamburger.innerHTML = '&times;'
    navMenu.classList.remove('hidden')
    navMenu.classList.add('flex')
  } else {
    hamburger.innerHTML = '&#9776;'
    navMenu.classList.remove('flex')
    navMenu.classList.add('hidden')
  }
}

const toggleUserMenuDropdown = () => {
  if (userDropdown.classList.contains('hidden')) {
    userDropdown.classList.remove('hidden')
  } else {
    userDropdown.classList.add('hidden')
  }
}

