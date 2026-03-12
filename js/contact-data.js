/**
 * Kontaktdaten – zur Laufzeit aus Base64 geladen, nicht als Klartext im HTML.
 * Schützt nur vor einfachen Scrapern; keine echte Verschlüsselung.
 */
(function () {
  var b64 = "eyJuYW1lIjoiVmVyb25pa2EgVGV3cyIsInN0cmVldCI6IkZ1aHJlbndlZyAyYiIsInppcCI6IjM4NTE4IiwiY2l0eSI6IkdpZmhvcm4iLCJwaG9uZSI6IjAxNzYvNDQ0ODE5MjUiLCJlbWFpbCI6Im1vbnRpLXBmaWZmaWt1c0B3ZWIuZGUifQ==";
  var raw;
  try {
    raw = atob(b64);
  } catch (e) {
    return;
  }
  var data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    return;
  }

  function telHref(phone) {
    var digits = (phone || "").replace(/\D/g, "");
    if (digits.indexOf("49") === 0) return "tel:+49" + digits.slice(2);
    if (digits.indexOf("0") === 0) return "tel:+49" + digits.slice(1);
    return "tel:" + digits;
  }

  var nodes = document.querySelectorAll("[data-contact]");
  for (var i = 0; i < nodes.length; i++) {
    var el = nodes[i];
    var key = el.getAttribute("data-contact");
    var value = data[key];
    if (value === undefined) continue;
    if (el.tagName === "A") {
      if (key === "email") {
        el.href = "mailto:" + value;
        el.textContent = value;
      } else if (key === "phone") {
        el.href = telHref(value);
        el.textContent = value;
      } else {
        el.textContent = value;
      }
    } else {
      el.textContent = value;
    }
  }

  var addressBlocks = document.querySelectorAll("[data-contact-address]");
  for (var j = 0; j < addressBlocks.length; j++) {
    var block = addressBlocks[j];
    block.innerHTML = data.name + "<br>" + data.street + "<br>" + data.zip + " " + data.city;
  }

  var contactLineBlocks = document.querySelectorAll("[data-contact-line]");
  for (var k = 0; k < contactLineBlocks.length; k++) {
    var line = contactLineBlocks[k];
    line.innerHTML = data.name + " &middot; <a href=\"" + telHref(data.phone) + "\">" + data.phone + "</a> &middot; <a href=\"mailto:" + data.email + "\">" + data.email + "</a>";
  }

  var contactKontaktBlocks = document.querySelectorAll("[data-contact-kontakt]");
  for (var m = 0; m < contactKontaktBlocks.length; m++) {
    contactKontaktBlocks[m].innerHTML = "<a href=\"" + telHref(data.phone) + "\">" + data.phone + "</a> &middot; <a href=\"mailto:" + data.email + "\">" + data.email + "</a>";
  }
})();
