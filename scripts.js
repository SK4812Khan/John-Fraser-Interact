// =========================
// Fade-in on page load
// =========================
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in-visible");
});

// =========================
// Random tagline each load
// =========================
const taglines = [
  "Service Above Self",
  "Making a Difference One Step at a Time",
  "Inspiring Change in Our Community",
  "Lead. Serve. Empower.",
  "Together We Thrive"
];

const taglineElement = document.querySelector("#home-tagline p");
if (taglineElement) {
  const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
  taglineElement.textContent = randomTagline;
}

// =========================
// Scroll-based fade-in
// =========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// =========================
// Smooth scroll for anchors
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// =========================
// Smooth page fade-out navigation
// =========================
document.querySelectorAll("a[href]").forEach(link => {
  const href = link.getAttribute("href");
  if (href && !href.startsWith("#") && !href.startsWith("mailto:") && !href.startsWith("tel:")) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      document.body.style.transition = "opacity 0.5s ease";
      document.body.style.opacity = "0";
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  }
});
