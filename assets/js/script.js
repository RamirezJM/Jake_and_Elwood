
/*/////  menu  /////// */
const menuButton = document.querySelector('.menu-btn')
const navLinks = document.querySelector('.nav-links')

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('active')
  menuButton.setAttribute('aria-expanded', navLinks.classList.contains('active'))

})

/*//////   active page  ///// */

const currentPage = window.location.pathname
const menuLinks = document.querySelectorAll('nav ul li a')

menuLinks.forEach(link => {
  const linkPath = link.getAttribute('href')
  if(currentPage.includes(linkPath)){
    link.classList.add('active-link')
  }
})
