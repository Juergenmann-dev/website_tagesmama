/**
 * Mobile-Navigation: Tap auf Über uns / Tagespflege / Blog & Gästebuch / Rechtliches
 * klappt das Menü auf und lässt es offen (Accordion), damit Unterkategorien gut nutzbar sind.
 */
(function () {
  var mq = window.matchMedia("(max-width: 640px)");
  var nav = document.querySelector(".site-nav");
  if (!nav) return;

  function onToggleClick(e) {
    if (!mq.matches) return;
    e.preventDefault();
    var dropdown = e.currentTarget.closest(".nav-dropdown");
    if (!dropdown) return;
    var isOpen = dropdown.classList.contains("nav-dropdown--open");
    closeAll();
    if (!isOpen) {
      dropdown.classList.add("nav-dropdown--open");
      e.currentTarget.setAttribute("aria-expanded", "true");
    } else {
      e.currentTarget.setAttribute("aria-expanded", "false");
    }
  }

  function closeAll() {
    nav.querySelectorAll(".nav-dropdown--open").forEach(function (el) {
      el.classList.remove("nav-dropdown--open");
      var t = el.querySelector(".nav-dropdown-toggle");
      if (t) t.setAttribute("aria-expanded", "false");
    });
  }

  nav.querySelectorAll(".nav-dropdown-toggle").forEach(function (toggle) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.addEventListener("click", onToggleClick, false);
  });

  mq.addEventListener("change", function () {
    if (!mq.matches) closeAll();
  });
})();
