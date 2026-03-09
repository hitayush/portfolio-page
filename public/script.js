// ==========================================
// Projects Data
// ==========================================
const projectsData = [
    {
        title: "AI Chat Application",
        description: "A real-time chat application utilizing natural language processing and WebSockets for seamless communication.",
        tech: ["Python", "JavaScript", "WebSocket", "NLP"],
        github: "#",
        demo: "#"
    },
    {
        title: "E-Commerce REST API",
        description: "A robust back-end service providing secure endpoints for product management, user authentication, and order processing.",
        tech: ["Node.js", "Express", "MongoDB", "JWT"],
        github: "#",
        demo: "#"
    },
    {
        title: "Task Management Dashboard",
        description: "A productivity tool featuring kanban boards, drag-and-drop functionality, and team collaboration features.",
        tech: ["React.js", "CSS3", "Firebase"],
        github: "#",
        demo: "#"
    },
    {
        title: "Portfolio Website",
        description: "A responsive, modern full-stack developer portfolio built from scratch with custom styling and a custom Node.js server.",
        tech: ["HTML5", "CSS3", "Vanilla JS", "Node.js"],
        github: "#",
        demo: "#"
    }
];

// ==========================================
// DOM Elements Setup & Event Listeners
// ==========================================
document.addEventListener("DOMContentLoaded", () => {

    // Navbar scroll effect & active link update
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        // Navbar styling on scroll
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Active link highlighting
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Mobile Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-links");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }

    // Populate Projects dynamically
    const projectsContainer = document.getElementById("projects-container");

    if (projectsContainer) {
        projectsData.forEach(project => {
            const card = document.createElement("div");
            card.className = "project-card glass-card";

            // Build tech badges
            const techBadges = project.tech.map(t => `<span class="tech-badge">${t}</span>`).join("");

            card.innerHTML = `
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tech">
                    ${techBadges}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="project-link" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                    <a href="${project.demo}" class="project-link" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
                </div>
            `;

            projectsContainer.appendChild(card);
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");
    const submitBtn = document.getElementById("submit-btn");

    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Basic Client-Side Validation
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                showStatus("Please fill in all fields.", "error");
                return;
            }

            // Change button state
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;

            try {
                // Send data to backend endpoint
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name, email, message })
                });

                const data = await response.json();

                if (response.ok && data.success) {
                    showStatus(data.message || "Message sent successfully!", "success");
                    contactForm.reset();
                } else {
                    showStatus(data.message || "Failed to send message. Please try again.", "error");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                showStatus("Network error. Please try again later.", "error");
            } finally {
                // Reset button state
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }

    // Helper function to show status messages
    function showStatus(message, type) {
        formStatus.innerText = message;
        formStatus.className = "form-status";
        formStatus.classList.add(type === "success" ? "status-success" : "status-error");

        // Clear message after 5 seconds
        setTimeout(() => {
            formStatus.innerText = "";
            formStatus.className = "form-status";
        }, 5000);
    }
});
