document.addEventListener("DOMContentLoaded", () => {
  // ===== Dark Mode Toggle with Persistence =====
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    if(darkModeToggle) darkModeToggle.textContent = '☀️';
  } else {
    if(darkModeToggle) darkModeToggle.textContent = '🌙';
  }

  if(darkModeToggle){
    darkModeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      if (body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = '☀️';
        localStorage.setItem("darkMode", "enabled");
      } else {
        darkModeToggle.textContent = '🌙';
        localStorage.setItem("darkMode", "disabled");
      }
    });
  }

  // ===== Hamburger Menu =====
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav-menu");
  if(hamburger && navMenu){
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("open");
    });
  }

  // ===== GSAP Animations =====
  if(typeof gsap !== 'undefined'){
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section
    gsap.from(".hero-content h1", { opacity: 0, y: 50, duration: 1 });
    gsap.from(".hero-content p", { opacity: 0, y: 30, duration: 1, delay: 0.3 });

    // Founder Card Animation
    gsap.from(".founder-card", {
      scrollTrigger: ".founder-card",
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power2.out"
    });

    // Contact Form Animation
    gsap.from(".contact-form", {
      scrollTrigger: ".contact-form",
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power2.out"
    });

    // CTA Section Animation
    gsap.from(".cta-section h2", {
      scrollTrigger: ".cta-section",
      opacity: 0,
      y: 40,
      duration: 1
    });
    gsap.from(".cta-section p", {
      scrollTrigger: ".cta-section",
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.2
    });
    gsap.from(".cta-section .btn", {
      scrollTrigger: ".cta-section",
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      delay: 0.4
    });
  }
});
