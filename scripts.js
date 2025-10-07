// Smooth Welcome Animation on Page Load
window.addEventListener("load", () => {
  // Fade in the entire body
  document.body.classList.add("fade-in-visible");

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
    taglineElement.textContent = taglines[Math.floor(Math.random() * taglines.length)];
  }
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
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.style.transition = "opacity 0.5s ease";
      document.body.style.opacity = "0";
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  }
});


