// === FORM ANIMATION ===
const form = document.getElementById('kemitraanForm');
const success = document.getElementById('form-success');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // animasi keluar form
  form.classList.add('fade-out');

  setTimeout(() => {
    form.style.display = 'none';
    success.classList.add('visible');
  }, 800);
});
