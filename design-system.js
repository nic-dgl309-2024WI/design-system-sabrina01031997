function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var hamburgerIcon = document.getElementById("hamburger").querySelector(".fa");

    // Toggle the 'open' class on the sidebar
    sidebar.classList.toggle("open");

    // Toggle the hamburger icon class between 'fa-bars' and 'fa-times'
    if (hamburgerIcon.classList.contains("fa-bars")) {
        hamburgerIcon.classList.replace("fa-bars", "fa-times");
    } else {
        hamburgerIcon.classList.replace("fa-times", "fa-bars");
    }
}
