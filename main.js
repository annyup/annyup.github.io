// Hamburger menu effect

var menu = document.getElementById('nav-Styles');
    var closeIcon = document.getElementById("toggle");

    menu.addEventListener('click', handleMenuClick);

    function handleMenuClick(event) {
      if (event.target instanceof HTMLAnchorElement) {
        closeIcon.checked = false;
      }
    }
