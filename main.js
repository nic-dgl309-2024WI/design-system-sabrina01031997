document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.c-top-navbar__hamburger');
    const nav = document.querySelector('.c-top-navbar__nav');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Close menu when a link is clicked in mobile view
    document.querySelectorAll('.c-top-navbar__nav-item').forEach(link => {
        link.addEventListener('click', () => {
            if(nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });
});
