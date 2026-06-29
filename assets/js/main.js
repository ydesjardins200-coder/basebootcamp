// Mobile nav
  var t = document.getElementById('menuToggle'), n = document.getElementById('nav');
  t.addEventListener('click', function(){
    var open = n.classList.toggle('open');
    t.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  n.addEventListener('click', function(e){
    if(e.target.tagName === 'A'){ n.classList.remove('open'); t.setAttribute('aria-expanded','false'); }
  });
