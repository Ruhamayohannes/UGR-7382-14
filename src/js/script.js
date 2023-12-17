document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-menu');
    var navigation = document.querySelector('.site-navigation');
    var navLinks = document.querySelectorAll('.site-navigation a'); // Select all navigation links

    // Toggle navigation on hamburger menu click
    hamburger.addEventListener('click', function() {
        navigation.classList.toggle('open');
    });

    // Close navigation when a link is clicked
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navigation.classList.remove('open');
        });
    });
});
