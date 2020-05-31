// Typewriter effect

const typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 100,
  backSpeed: 80,
  smartBackspace: true,
  loop: true,
  backDelay: 2000,
  startDelay: 200
});

// Hamburger menu effect

var menu = document.getElementById('nav-Styles');
var closeIcon = document.getElementById("toggle");


menu.addEventListener('click', handleMenuClick);

function handleMenuClick(event) {
  if (event.target instanceof HTMLAnchorElement) {
      closeIcon.checked = false;
  }
}