document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".dropdown-header");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const dropdownContent = this.nextElementSibling;
      if (window.innerWidth < 1024) {
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      }
    });
  });
});
