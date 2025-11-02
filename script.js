// === FUNGSI ANIMASI SCROLL ===

// observer untuk memantau setiap section
const sections = document.querySelectorAll(".dashboard-section");

const observerOptions = {
  threshold: 0.3, // aktif saat 30% section terlihat
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});
