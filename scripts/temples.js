document.addEventListener("DOMContentLoaded", function() {
  // Footer year and last modified
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

  // Hamburger menu
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  let menuOpen = false;

  hamburger.addEventListener("click", function() {
    menuOpen = !menuOpen;
    navMenu.classList.toggle("show");
    hamburger.innerHTML = menuOpen ? "&#10005;" : "&#9776;";
  });

  // Hide menu when resizing to large view
  window.addEventListener("resize", function() {
    if (window.innerWidth >= 700) {
      navMenu.classList.add("show");
      hamburger.style.display = "none";
    } else {
      navMenu.classList.remove("show");
      hamburger.style.display = "block";
      hamburger.innerHTML = "&#9776;";
      menuOpen = false;
    }
  });

  // Initial state
  if (window.innerWidth >= 700) {
    navMenu.classList.add("show");
    hamburger.style.display = "none";
  }
});