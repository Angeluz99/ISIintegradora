document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    // Toggle icon between hamburger and X
    if (navLinks.classList.contains("active")) {
      hamburger.innerHTML = "&times;"; // X icon
    } else {
      hamburger.innerHTML = "&#9776;"; // Hamburger icon
    }
  });
});
