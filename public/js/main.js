// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// // Add subtle parallax effect to grid background
// window.addEventListener("scroll", () => {
//   const scrolled = window.pageYOffset;
//   const grid = document.querySelector(".grid-bg");
//   grid.style.transform = `translateY(${scrolled * 0.3}px)`;
// });
