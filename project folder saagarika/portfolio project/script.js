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

// THEME TOGGLE - persist selection in localStorage as 'theme' = 'dark'|'light'
const themebtn = document.querySelector(".theme-toggle");
if (themebtn) {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
        document.body.classList.add("dark-theme");
        themebtn.textContent = "🌑";
        themebtn.setAttribute("aria-pressed", "true");
    } else {
        themebtn.textContent = "☀️";
        themebtn.setAttribute("aria-pressed", "false");
    }

    themebtn.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-theme");
        themebtn.textContent = isDark ? "🌑" : "☀️";
        localStorage.setItem("theme", isDark ? "dark" : "light");
        themebtn.setAttribute("aria-pressed", isDark ? "true" : "false");
    });
}
