let slides = document.querySelectorAll('.slides img');
let index = 0;
let interval = 80000; // 80 seconds per image (80,000 ms) → 3 images ≈ 240s (4 minutes)

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
  index = (index + 1) % slides.length;
}

// Show first slide
showSlide();

// Change slides every 80 seconds
setInterval(showSlide, interval);
