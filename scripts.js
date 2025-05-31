// scripts.js

// Animate text on scroll (fade-in effect)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-visible");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".section-content, .teampic, .bottom-image-row, .contact-image-row").forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Subtle floating animation on logos and images
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("mouseover", () => {
    img.style.transition = "transform 0.3s ease";
    img.style.transform = "scale(1.05)";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});
