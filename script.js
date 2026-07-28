// ===============================
// DARK MODE TOGGLE
// ===============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀";
    } else {
        themeBtn.textContent = "🌙";
    }

});


// ===============================
// CONTACT FORM VALIDATION
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message.length < 10) {
        alert("Message should contain at least 10 characters.");
        return;
    }

    document.getElementById("successMsg").innerHTML =
        "✅ Your message has been sent successfully!";

    contactForm.reset();

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach((section) => {

        const windowHeight = window.innerHeight;
        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 120) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();


// ===============================
// ACTIVE NAVIGATION LINK
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// SMOOTH SCROLL
// ===============================

navLinks.forEach((link) => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ===============================
// HERO IMAGE HOVER EFFECT
// ===============================

const heroImage = document.querySelector(".hero-image img");

heroImage.addEventListener("mouseenter", () => {

    heroImage.style.transform = "scale(1.05) rotate(2deg)";
    heroImage.style.transition = "0.4s";

});

heroImage.addEventListener("mouseleave", () => {

    heroImage.style.transform = "scale(1) rotate(0deg)";

});


// ===============================
// PROJECT CARD HOVER EFFECT
// ===============================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 20px 40px rgba(34,197,94,0.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "";

    });

});


// ===============================
// FOOTER YEAR
// ===============================

const footer = document.querySelector("footer");

footer.innerHTML =
`© ${new Date().getFullYear()} Sarvika E | Full Stack Portfolio`;