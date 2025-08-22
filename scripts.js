// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Load saved mode
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = '☀️';
  } else {
    darkModeToggle.textContent = '🌙';
  }

  // Toggle on click
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
});
