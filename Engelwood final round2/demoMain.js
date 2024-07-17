// the functionality for the slider container

let currentIndex = 0;

function slideLeft() {
  const slider = document.querySelector(".slider");
  const totalSlides = document.querySelectorAll(".slide").length;
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1;
  }
  updateSlider();
}

function slideRight() {
  const slider = document.querySelector(".slider");
  const totalSlides = document.querySelectorAll(".slide").length;
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
}

function updateSlider() {
  const slider = document.querySelector(".slider");
  const slideWidth = document.querySelector(".slide").clientWidth;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
