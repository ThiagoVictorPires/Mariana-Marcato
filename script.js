// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── FADE-IN ON SCROLL ──
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
fadeEls.forEach(el => observer.observe(el));

// ── FAQ ACCORDION ──
function toggleFaq(el) {
  const item = el.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ── COOKIE BANNER ──
function closeCookie() {
  document.getElementById('cookieBanner').style.display = 'none';
}

// ── FORM SUBMIT ──
const WHATSAPP_NUMBER = '5534984397438';

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('formNome').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const telefone = document.getElementById('formTelefone').value.trim();
    const mensagem = document.getElementById('formMensagem').value.trim();
    const errorEl = document.getElementById('formError');

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!nome || !email || !telefone || !mensagem) {
      errorEl.textContent = 'Preencha todos os campos antes de enviar.';
      return;
    }
    if (!emailValido) {
      errorEl.textContent = 'Informe um email válido.';
      return;
    }
    errorEl.textContent = '';

    const texto =
      `Olá Mari, meu nome é ${nome}.\n` +
      `Email: ${email}\n` +
      `Telefone: ${telefone}\n\n` +
      `Mensagem: ${mensagem}`;

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
    contactForm.reset();
  });
}
