

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}



// ACTIVE NAVIGATION LINK


const currentPage = window.location.pathname.split("/").pop();

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {

        link.classList.add("active");

    }

});



// CONTACT FORM VALIDATION


const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const message = document.getElementById("message").value.trim();


        if (name === "" || email === "" || message === "") {

            alert("Please fill in all fields.");

            return;

        }


        alert("Thank you! Your message has been submitted.");

        contactForm.reset();

    });

}

// FAQ ACCORDION


const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const answer = question.nextElementSibling;

        answer.classList.toggle("active");

    });

});
// ===============================
// TYPING ANIMATION
// ===============================

const typingText = document.getElementById("typingText");

if (typingText) {

    const text = "We Build Modern Digital Solutions";

    let index = 0;

    function typeText() {

        if (index < text.length) {

            typingText.textContent += text.charAt(index);

            index++;

            setTimeout(typeText, 100);

        }

    }

    typeText();

}

// SCROLL TO TOP


const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }

    });

    scrollTopBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}