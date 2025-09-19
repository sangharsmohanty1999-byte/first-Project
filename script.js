/* Navigation for all pages */
function nextPage(url) { window.location.href = url; }

/* Confetti (runs once on pages that set data-confetti="true" on <body>) */
(function confettiOnce() {
  if (document.body.getAttribute('data-confetti') !== 'true') return;
  const N = 70; // number of pieces
  for (let i = 0; i < N; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = `hsl(${Math.floor(Math.random()*360)}, 90%, 55%)`;
    const dur = 2 + Math.random() * 3;
    const delay = Math.random() * 0.8;
    c.style.animationDuration = dur + 's';
    c.style.animationDelay = delay + 's';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), (dur + delay) * 1000 + 500);
  }
})();

/* 3D Carousel layout (only runs on slideshow.html) */
(function initCarousel(){
  const carousel = document.getElementById('carousel');
  if (!carousel) return;

  const imgs = Array.from(carousel.querySelectorAll('img'));
  if (!imgs.length) return;

  function layout() {
    const count = imgs.length;
    const angleStep = 360 / count;
    // Radius relative to viewport for good depth; tweak factor if needed
    const radius = Math.min(window.innerWidth, window.innerHeight) * 0.35;

    imgs.forEach((img, i) => {
      const angle = i * angleStep; // degrees
      img.style.transform = `translate(-30%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`;
    });
  }

  layout();
  window.addEventListener('resize', layout, { passive: true });
})();
