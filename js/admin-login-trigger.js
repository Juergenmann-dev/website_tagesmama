/**
 * Dreimal auf "Monti" in der Überschrift klicken → Admin-Login öffnen.
 */
(function () {
  var TRIGGER_CLASS = 'admin-login-trigger';
  var CLICK_COUNT = 3;
  var RESET_MS = 1500;

  var count = 0;
  var resetTimer = null;

  function openAdminLogin() {
    window.location.href = 'admin-login.html';
  }

  function scheduleReset() {
    if (resetTimer) clearTimeout(resetTimer);
    resetTimer = setTimeout(function () {
      count = 0;
      resetTimer = null;
    }, RESET_MS);
  }

  function handleClick(ev) {
    var el = ev.target;
    if (!el.classList.contains(TRIGGER_CLASS)) return;
    ev.preventDefault();
    ev.stopPropagation();
    count++;
    scheduleReset();
    if (count >= CLICK_COUNT) {
      count = 0;
      if (resetTimer) clearTimeout(resetTimer);
      openAdminLogin();
    }
  }

  document.addEventListener('click', handleClick, true);
})();
