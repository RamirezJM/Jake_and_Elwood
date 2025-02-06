const menuButton = document.querySelector('.menu-btn')
const navLinks = document.querySelector('.nav-links')

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('active')
  menuButton.setAttribute('aria-expanded', navMenu.classList.contains('active'))

})