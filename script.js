// Animasi muncul per section
const sections = document.querySelectorAll(".dashboard-section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
sections.forEach(section => observer.observe(section));

// === Animasi popup kemitraan ===
const popup = document.getElementById("kemitraanPopup");
const openBtn = document.getElementById("openKemitraanPopup");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => popup.classList.add("show"));
closeBtn.addEventListener("click", () => popup.classList.remove("show"));
window.addEventListener("click", (e) => {
  if (e.target === popup) popup.classList.remove("show");
});
