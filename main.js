// Mobile menu, smooth anchor scroll, simple toggle groups. No dependencies.
(function(){
  var t=document.querySelector('.menu-toggle'),n=document.querySelector('.site-nav');
  if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o);document.body.classList.toggle('menu-open',o);});
    n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');t.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');});});}
  document.querySelectorAll('[data-group]').forEach(function(g){g.querySelectorAll('button').forEach(function(b){b.addEventListener('click',function(){g.querySelectorAll('button').forEach(function(x){x.classList.remove('on');x.setAttribute('aria-pressed','false')});b.classList.add('on');b.setAttribute('aria-pressed','true');});});});
  document.querySelectorAll('form[data-demo]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.demo-msg');if(m)m.textContent='This is a sample design — this form is not connected yet.';});});
})();
