document.addEventListener("DOMContentLoaded", () => {
  // ===== Dark Mode Toggle with Persistence =====
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Load saved mode
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    if(darkModeToggle) darkModeToggle.textContent = '☀️';
  } else {
    if(darkModeToggle) darkModeToggle.textContent = '🌙';
  }

  // Toggle dark mode
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

    // Hero Animations
    gsap.utils.toArray(".hero-content").forEach(hero => {
      gsap.from(hero.querySelector("h1"), { opacity: 0, y: 50, duration: 1 });
      gsap.from(hero.querySelector("p"), { opacity: 0, y: 30, duration: 1, delay: 0.3 });
      gsap.from(hero.querySelector(".btn"), { opacity: 0, scale: 0.8, duration: 0.8, delay: 0.6 });
    });

    // Services / Cards Animations
    gsap.utils.toArray(".service-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: card,
        opacity: 0,
        y: 50,
        duration: 1,
        delay: i * 0.2
      });
    });

    // Contact Page Animations
    const contactSections = [".contact-info", ".contact-form", ".map-section iframe", ".cta-section h2", ".cta-section p", ".cta-section .btn"];
    contactSections.forEach(sel => {
      gsap.utils.toArray(sel).forEach(el => {
        gsap.from(el, {
          scrollTrigger: el,
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2
        });
      });
    });

    // About Section Animations
    gsap.utils.toArray(".about-text, .about-img").forEach(el => {
      gsap.from(el, {
        scrollTrigger: el,
        opacity: 0,
        x: el.classList.contains("about-img") ? 50 : -50,
        duration: 1
      });
    });
  }
});
