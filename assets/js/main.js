// Mobile nav toggle
var t = document.getElementById('menuToggle'), n = document.getElementById('nav');
if (t && n) {
  t.addEventListener('click', function () {
    var open = n.classList.toggle('open');
    t.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  n.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { n.classList.remove('open'); t.setAttribute('aria-expanded', 'false'); }
  });
}

// Inject accent bar into mission cards (visual flourish)
document.querySelectorAll('.mission').forEach(function (m) {
  var bar = document.createElement('span');
  bar.className = 'accentbar';
  m.appendChild(bar);
});

// Scroll reveal with stagger, respects reduced-motion
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var sel = ['.section .head', '.aud-card', '.stat', '.compris-grid .item',
    '.forfait', '.steps .step', '.alt-card', '.cross-card', '.features li',
    '.values-row .v', '.gallery a', '.media-feature', '.split-grid > *',
    '.contact-card', '.lead-form', '.mission'];
  var els = [];
  sel.forEach(function (s) { document.querySelectorAll(s).forEach(function (e) { els.push(e); }); });
  if (reduce || !('IntersectionObserver' in window)) return;

  els.forEach(function (e) { e.classList.add('reveal'); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target;
      var sibs = Array.prototype.slice.call(el.parentNode.children).filter(function (c) { return c.classList.contains('reveal'); });
      var i = sibs.indexOf(el);
      el.style.transitionDelay = Math.min(i, 6) * 70 + 'ms';
      el.classList.add('in');
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (e) { io.observe(e); });
})();
