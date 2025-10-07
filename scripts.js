// Immediately fade in the body
document.body.classList.add("fade-in-visible");
document.body.style.opacity = "1"; // Ensure text is visible

// Random Tagline on Each Refresh
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

// Fade-in animation for all visible content
document.querySelectorAll(".top-header, nav, #home-tagline, footer").forEach(el => {
  el.classList.add("fade-in");
  setTimeout(() => {
    el.classList.add("fade-in-visible");
  }, 50);
});

// Animate text on scroll (fade-in effect)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-visible");
    }
  });
}, { threshold: 0.1 });

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

// Smooth Page Fade-Out Transition on Navigation
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



