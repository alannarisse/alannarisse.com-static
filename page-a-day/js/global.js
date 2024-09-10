'use strict'

function navInject() {
  $('body').prepend(
    `
  <nav class="nav">
      <div class="icon">
        <div class="hamburger"></div>
      </div>
      <div class="menu-mobile">
        <a href="/page-a-day">Page-a-Day</a>
        <a href="/page-a-day/about.html">About</a>
        <a href="/page-a-day/contact.html">Contact</a>
        <a href="/">My Regular Website</a>
      </div>
    </nav>
  `
  )
}
function toggleIcon() {
  $('.icon').on('click', function () {
    $('.icon').toggleClass('active')
    $('.menu-mobile').slideToggle(300)
  })
}

function closeMobileMenu() {
  $('.menu-mobile').on('click', 'a', function () {
    $('.icon').trigger('click')
  })
}
function init() {
  $(navInject)
  $(toggleIcon)
  $(closeMobileMenu)
}
//when the page loads call toggleIcon;
init()
