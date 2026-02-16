let pageName = window.location.pathname.split("/").pop();
let navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    if (link.getAttribute("href") === pageName) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
    console.log(link.getAttribute("href"), pageName);

});