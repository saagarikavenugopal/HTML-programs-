//FOOTER YEAR UPDATION
const footerYear = document.querySelector(".footer-year");
if(footerYear){
    footerYear.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        // set aria-expanded to true/false for accessibility
        menuToggle.setAttribute("aria-expanded", isOpen);
    });
}
