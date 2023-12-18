document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');
  
    burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  
    // Close the menu when a menu item is clicked
    const menuItems = document.querySelectorAll('.navbar-item');
    menuItems.forEach(function (item) {
      item.addEventListener('click', function () {
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
      });
    });
  
    // Show/hide the menu based on screen width
    function toggleMenu() {
      if (window.innerWidth < 1280) {
        burger.classList.remove('is-hidden-desktop');
        menu.classList.add('is-hidden-desktop');
      } else {
        burger.classList.add('is-hidden-desktop');
        menu.classList.remove('is-hidden-desktop');
      }
    }
  
    toggleMenu(); // Initial call
    window.addEventListener('resize', toggleMenu);
  });
  