// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => observer.observe(el));

// ── STAGGER CHILDREN ──
document.querySelectorAll('.goals-grid .goal-card, .events-grid .event-card, .schools-grid .school-chip').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.06}s`;
});

// ── NAV BLUR ON SCROLL ──
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.background = 'rgba(255,255,255,0.92)';
  } else {
    nav.style.background = 'rgba(255,255,255,0.82)';
  }
});

// ── STAT OBSERVER ──
const statNums = document.querySelectorAll('.stat-num');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transition = 'opacity 0.6s ease';
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
statNums.forEach(el => statObserver.observe(el));