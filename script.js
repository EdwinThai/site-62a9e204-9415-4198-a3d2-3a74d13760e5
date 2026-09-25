(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Mobile nav */
  var mobileToggle = document.getElementById('mobileToggle');
  var mobileNav = document.getElementById('mobileNav');
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('is-open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Hero parallax (scroll-only -- mouse-follow removed, operator decision 2026-09-25) */
  var heroBg = document.getElementById('heroBg');
  if (heroBg && !reduceMotion) {
    var ticking = false;

    function updateTransform() {
      var scrollY = window.scrollY || window.pageYOffset;
      var translateY = scrollY * 0.35;
      heroBg.style.transform = 'translate3d(0,' + translateY + 'px,0) scale(1.08)';
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateTransform);
        ticking = true;
      }
    }, { passive: true });
  }

  /* Footer year */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
