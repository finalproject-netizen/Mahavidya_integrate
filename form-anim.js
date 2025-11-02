// === KIRIM FORM VIA EMAILJS ===
const form = document.getElementById('kemitraanForm');
const success = document.getElementById('form-success');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  emailjs.sendForm('service_mahavidya', 'template_kemitraan', form)
    .then(() => {
      form.classList.add('fade-out');
      setTimeout(() => {
        form.style.display = 'none';
        success.classList.add('visible');
      }, 800);
    })
    .catch((error) => {
      alert('❌ Gagal mengirim. Coba lagi nanti.');
      console.error('EmailJS Error:', error);
    });
});
