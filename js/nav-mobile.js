/**
 * Mobile-Navigation: Menü-Button klappt Navigation ein/aus; Dropdowns als Accordion.
 */
(function () {
  var mq = window.matchMedia("(max-width: 640px)");
  var nav = document.querySelector(".site-nav");
  var header = document.querySelector(".site-header");
  var menuToggle = document.querySelector(".nav-menu-toggle");
  if (!nav) return;

  if (menuToggle && header) {
    menuToggle.addEventListener("click", function () {
      if (!mq.matches) return;
      var open = header.classList.toggle("nav-open");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      menuToggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    });
  }

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
