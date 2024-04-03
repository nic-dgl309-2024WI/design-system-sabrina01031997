document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.c-top-navbar__hamburger');
    const nav = document.querySelector('.c-top-navbar__nav');
    const close = document.createElement('div');

    // Set up the close (X) button
    close.textContent = '×';
    close.classList.add('c-top-navbar__close');
    close.addEventListener('click', () => nav.classList.remove('active'));

    hamburger.addEventListener('click', () => {
        nav.classList.add('active');
        nav.prepend(close);
    });
});
