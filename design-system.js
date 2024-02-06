function toggleSidebar() {
    var sidebar = document.querySelector(".sidebar");
    var mobileNav = document.querySelector(".mobile-navbar");
    var hamburger = document.getElementById("hamburger");

    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
        mobileNav.style.display = "none";
        hamburger.classList.remove("fa-times");
        hamburger.classList.add("fa-bars");
    } else {
        sidebar.style.left = "0";
        mobileNav.style.display = "block";
        hamburger.classList.remove("fa-bars");
        hamburger.classList.add("fa-times");
    }
}