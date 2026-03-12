/**
 * Besucherzähler: Jeder Besucher wird nur 1× gezählt, egal wie viele Seiten er/sie aufruft.
 * Entwurf: localStorage (pro Browser 1×). Später durch Firebase ersetzen (globaler Zähler, 1× pro Besucher).
 */
(function () {
  var el = document.getElementById('guest-count');
  if (!el) return;

  var keyCount = 'monti_pfiffikus_guest_count';
  var keyCounted = 'monti_pfiffikus_visitor_counted';

  if (!localStorage.getItem(keyCounted)) {
    var count = parseInt(localStorage.getItem(keyCount) || '0', 10);
    count += 1;
    localStorage.setItem(keyCount, String(count));
    localStorage.setItem(keyCounted, '1');
  }

  var count = parseInt(localStorage.getItem(keyCount) || '0', 10);
  el.textContent = count.toLocaleString('de-DE');
})();
