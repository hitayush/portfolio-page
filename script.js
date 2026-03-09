/**
 * Portfolio JavaScript
 * Handles navigation, scroll animations, and form validation
 */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. Navigation & Mobile Menu Setup
    // ==========================================
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-links");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section, header");

    // Toggle Mobile Menu
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
            // Prevent scrolling on body when menu is open
            document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "";
        });

        // Close menu when clicking any nav link
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
                document.body.style.overflow = "";
            });
        });
    }

    // ==========================================
    // 2. Scroll Events (Navbar & Active Links)
    // ==========================================
    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        // Navbar blur and shrink effect
        if (currentScroll > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Active link highlighting
        let currentSectionId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Adding a small offset threshold for earlier detection
            if (currentScroll >= (sectionTop - 200)) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });

    // ==========================================
    // 3. Scroll Reveal Animations (Intersection Observer)
    // ==========================================
    const fadeElements = document.querySelectorAll(".fade-in");

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });

    // ==========================================
    // 4. Contact Form Validation (Client-Side)
    // ==========================================
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Basic Check
            if (!name || !email || !message) {
                showFormStatus("Please fill out all fields before submitting.", "error");
                return;
            }

            // Simple Email Regex check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormStatus("Please enter a valid email address.", "error");
                return;
            }

            // Simulate form processing (since there is no backend required now)
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;

            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;

            setTimeout(() => {
                showFormStatus("Thank you! Your message has been successfully sent.", "success");
                contactForm.reset();

                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    function showFormStatus(msg, type) {
        formStatus.innerText = msg;
        formStatus.className = "form-status show " + type;

        // Hide message after 5 seconds
        setTimeout(() => {
            formStatus.classList.remove("show");
        }, 5000);
    }

    // ==========================================
    // 5. Back to Top Button
    // ==========================================
    const backToTopBtn = document.getElementById("backToTop");

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
