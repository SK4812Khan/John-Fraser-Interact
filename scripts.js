ts.js‎
+6
-18
Lines changed: 6 additions & 18 deletions
Original file line number	Diff line number	Diff line change
@@ -1,13 +1,11 @@
// scripts.js
// ===== Smooth Welcome Animation on Page Load =====
// Smooth Welcome Animation on Page Load
document.body.style.opacity = "0";
window.addEventListener("load", () => {
  document.body.style.transition = "opacity 1s ease-in";
  document.body.style.opacity = "1";
});

// ===== Random Tagline on Each Refresh =====
// Random Tagline on Each Refresh
const taglines = [
  "Service Above Self 🎗🌍",
  "Making a Difference One Step at a Time ✨",
@@ -22,7 +20,7 @@ if (taglineElement) {
  taglineElement.textContent = randomTagline;
}

// ===== Animate text on scroll (fade-in effect) =====
// Animate text on scroll (fade-in effect)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
@@ -38,7 +36,7 @@ document.querySelectorAll(".section-content, .teampic, .bottom-image-row, .conta
  observer.observe(el);
});

// ===== Smooth scroll for anchor links =====
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
@@ -49,18 +47,7 @@ document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  });
});

// ===== Subtle floating animation on images =====
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("mouseover", () => {
    img.style.transition = "transform 0.3s ease";
    img.style.transform = "scale(1.05)";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});
// ===== Smooth Page Fade-Out Transition on Navigation =====
// Smooth Page Fade-Out Transition on Navigation
document.querySelectorAll("a[href]").forEach(link => {
  const href = link.getAttribute("href");
  if (href && !href.startsWith("#") && !href.startsWith("mailto:") && !href.startsWith("tel:")) {
@@ -76,3 +63,4 @@ document.querySelectorAll("a[href]").forEach(link => {
});


