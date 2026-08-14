/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll("section");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================
   BACK TO TOP
========================= */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================
   ACTIVE NAVBAR LINK
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        formMessage.textContent =
            "Message submitted successfully! ✨";

        formMessage.style.color = "#a855f7";

        contactForm.reset();

    });

}
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// Close menu after clicking a link
const navItems = document.querySelectorAll("#navLinks a");

navItems.forEach(item => {
    item.addEventListener("click", function () {
        document.getElementById("navLinks").classList.remove("active");
    });
});
