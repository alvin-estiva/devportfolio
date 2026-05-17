const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Lightweight Parallax Background
const parallaxShapes = document.querySelectorAll(".parallax-shape");

let latestScrollY = 0;
let ticking = false;

function moveParallax() {
  parallaxShapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.08;
    const yMove = latestScrollY * speed;

    shape.style.transform = `translateY(${yMove}px)`;
  });

  ticking = false;
}

window.addEventListener("scroll", () => {
  latestScrollY = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(moveParallax);
    ticking = true;
  }
});