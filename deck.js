(function () {
  // commits per hour of day, race-the-city git log (author time)
  var hours = [13,20,20,33,25,11,15,2,0,0,8,17,19,30,22,32,33,17,15,17,5,18,36,27];
  var max = Math.max.apply(null, hours);
  var chart = document.getElementById('hours-chart');
  var axis = document.getElementById('hours-axis');
  hours.forEach(function (v, h) {
    var b = document.createElement('div');
    b.className = 'b' + (h < 7 ? ' night' : '');
    b.style.height = (v / max * 100) + '%';
    b.title = h + ':00 — ' + v;
    b.innerHTML = '<span>' + v + '</span>';
    chart.appendChild(b);
    var a = document.createElement('div');
    a.textContent = h % 3 === 0 ? String(h).padStart(2, '0') : '';
    axis.appendChild(a);
  });

  var slides = Array.prototype.slice.call(document.querySelectorAll('section.slide'));
  var stage = document.getElementById('stage');
  var lang = document.getElementById('lang');  // link to the same slide in the other language
  var cur = 0;
  var notesOn = false;
  try { notesOn = localStorage.getItem('deck-notes') === '1'; } catch (e) {}

  function fit() {
    var s = Math.min(window.innerWidth / 1600, window.innerHeight / 900);
    stage.style.transform = 'translate(-50%, -50%) scale(' + s + ')';
  }
  function show(i) {
    cur = Math.max(0, Math.min(slides.length - 1, i));
    slides.forEach(function (s, k) { s.classList.toggle('active', k === cur); });
    document.getElementById('progress').style.width = ((cur + 1) / slides.length * 100) + '%';
    document.getElementById('counter').textContent = (cur + 1) + ' / ' + slides.length;
    var n = slides[cur].querySelector('.notes');
    document.getElementById('notes-title').textContent = (cur + 1) + '. ' + (slides[cur].dataset.title || '');
    document.getElementById('notes-body').textContent = n ? n.textContent : '';
    document.getElementById('notes-panel').classList.toggle('on', notesOn);
    if (location.hash !== '#' + (cur + 1)) history.replaceState(null, '', '#' + (cur + 1));
    if (lang) lang.href = lang.getAttribute('data-href') + '#' + (cur + 1);
  }
  function fromHash() { var n = parseInt(location.hash.slice(1), 10); return isNaN(n) ? 0 : n - 1; }
  function toggleNotes() {
    notesOn = !notesOn;
    try { localStorage.setItem('deck-notes', notesOn ? '1' : '0'); } catch (e) {}
    show(cur);
  }
  function fullscreen() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
    else document.exitFullscreen && document.exitFullscreen();
  }

  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key;
    if (k === 'ArrowRight' || k === 'PageDown' || k === ' ' || k === 'Enter') { e.preventDefault(); show(cur + 1); }
    else if (k === 'ArrowLeft' || k === 'PageUp' || k === 'Backspace') { e.preventDefault(); show(cur - 1); }
    else if (k === 'Home') show(0);
    else if (k === 'End') show(slides.length - 1);
    else if (k === 'n' || k === 'N' || k === 'т' || k === 'Т') toggleNotes();
    else if (k === 'f' || k === 'F' || k === 'а' || k === 'А') fullscreen();
    else if ((k === 'l' || k === 'L' || k === 'д' || k === 'Д') && lang) location.href = lang.href;
  });
  // swipe: horizontal one-finger gesture; ignored while pinch-zoomed so the user can pan
  var t0 = null;
  document.addEventListener('touchstart', function (e) {
    t0 = e.touches.length === 1 ? { x: e.touches[0].clientX, y: e.touches[0].clientY, t: Date.now() } : null;
  }, { passive: true });
  document.addEventListener('touchmove', function (e) { if (e.touches.length > 1) t0 = null; }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (!t0) return;
    var dx = e.changedTouches[0].clientX - t0.x, dy = e.changedTouches[0].clientY - t0.y;
    var zoomed = window.visualViewport && window.visualViewport.scale > 1.05;
    var quick = Date.now() - t0.t < 800;
    t0 = null;
    if (zoomed || !quick) return;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) show(cur + (dx < 0 ? 1 : -1));
  }, { passive: true });
  document.getElementById('prev').onclick = function () { show(cur - 1); };
  document.getElementById('next').onclick = function () { show(cur + 1); };
  document.getElementById('notes-btn').onclick = toggleNotes;
  document.getElementById('fs-btn').onclick = fullscreen;
  window.addEventListener('resize', fit);
  window.addEventListener('hashchange', function () { show(fromHash()); });
  fit();
  show(fromHash());
})();
