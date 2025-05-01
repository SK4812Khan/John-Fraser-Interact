// JavaScript for smooth scrolling
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("nav ul li a");

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    });
  });
});
