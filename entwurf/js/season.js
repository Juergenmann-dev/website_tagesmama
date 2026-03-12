/**
 * Erkennt die aktuelle Jahreszeit und setzt data-season auf <body>.
 * Dezember–Februar: Winter | März–Mai: Frühling | Juni–August: Sommer | September–November: Herbst
 */
(function () {
  var month = new Date().getMonth() + 1; // 1–12
  var season =
    month === 12 || month <= 2 ? 'winter' :
    month >= 3 && month <= 5 ? 'spring' :
    month >= 6 && month <= 8 ? 'summer' : 'autumn';
  document.body.setAttribute('data-season', season);
})();
