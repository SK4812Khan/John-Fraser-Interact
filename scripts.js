// scripts.js

// Animate elements on scroll (fade-in effect)
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

// Subtle hover scale animation on all images
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("mouseover", () => {
    img.style.transition = "transform 0.3s ease";
    img.style.transform = "scale(1.05)";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});

// Fade-in on page load
document.body.style.opacity = "0";
window.addEventListener("load", () => {
  document.body.style.transition = "opacity 0.4s ease";
  document.body.style.opacity = "1";
});

// Fade-out on navbar link click
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    const href = this.getAttribute("href");

    // Ignore anchor links or external URLs
    if (href && !href.startsWith("#") && !href.startsWith("http")) {
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = href;
      }, 400); // match CSS transition time
    }
  });
});
