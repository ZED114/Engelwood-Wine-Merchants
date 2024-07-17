// script.js

document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("active");
  });

document
  .getElementById("mobile-search-icon")
  .addEventListener("click", function () {
    document.getElementById("mobile-search").classList.toggle("active");
  });
