// opens and closes the menu when clicking on the icon
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

// when clicking on a menu link, hide the menu
const links = document.querySelectorAll('nav ul li a')
for(const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

// adicionar sombra ao header quando der scroll na página
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
})