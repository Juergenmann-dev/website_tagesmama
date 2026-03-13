/**
 * Admin-Authentifizierung
 * Vorbereitet für Firebase Authentication.
 *
 * Aktuell: Einfache Platzhalter-Logik (sessionStorage).
 * Später: Firebase SDK einbinden und die unten markierten Stellen
 * durch firebase.auth() ersetzen.
 *
 * Firebase-Anbindung (Schritte):
 * 1. Firebase-Projekt anlegen, Auth aktivieren (E-Mail/Passwort).
 * 2. firebase-app.js und firebase-auth.js von CDN oder npm einbinden.
 * 3. firebase.auth().signInWithEmailAndPassword() in handleLoginSubmit.
 * 4. firebase.auth().onAuthStateChanged() für isLoggedIn / getCurrentUser / Logout.
 * 5. Optional: Auth-Persistenz und Redirect nach Login prüfen.
 */

(function(global) {
  'use strict';

  var STORAGE_KEY = 'monti_admin_session';
  var SESSION_USER_KEY = 'monti_admin_user';

  /**
   * Prüft, ob ein Benutzer angemeldet ist.
   * Später: return firebase.auth().currentUser != null;
   */
  function isLoggedIn() {
    try {
      return !!sessionStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return false;
    }
  }

  /**
   * Gibt den aktuellen Benutzer zurück (für Anzeige).
   * Später: return firebase.auth().currentUser;
   */
  function getCurrentUser() {
    try {
      var raw = sessionStorage.getItem(SESSION_USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  /**
   * Login-Handler für das Formular.
   * Später: E-Mail/Passwort an Firebase senden, bei Erfolg Redirect zu admin.html.
   */
  function handleLoginSubmit(ev) {
    ev.preventDefault();

    var form = ev.target;
    var emailInput = form.querySelector('#admin-email') || form.querySelector('[name="email"]');
    var passwordInput = form.querySelector('#admin-password') || form.querySelector('[name="password"]');
    var messageEl = form.querySelector('#admin-login-message');

    var email = emailInput ? emailInput.value.trim() : '';
    var password = passwordInput ? passwordInput.value : '';

    if (!email || !password) {
      showMessage(messageEl, 'Bitte E-Mail und Passwort eingeben.', true);
      return;
    }

    // --- Platzhalter: Immer erfolgreich (nur zum Testen). Ersetzen durch Firebase. ---
    setSession(email);
    showMessage(messageEl, 'Anmeldung erfolgreich. Weiterleitung …', false);
    setTimeout(function() {
      var redirect = getRedirectUrl();
      window.location.href = redirect || 'admin.html';
    }, 500);
    return;

    // --- Beispiel für Firebase (auskommentiert): ---
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(function(userCredential) {
    //     setSession(userCredential.user.email);
    //     window.location.href = getRedirectUrl() || 'admin.html';
    //   })
    //   .catch(function(error) {
    //     var msg = error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password'
    //       ? 'E-Mail oder Passwort falsch.'
    //       : 'Anmeldung fehlgeschlagen. Bitte später erneut versuchen.';
    //     showMessage(messageEl, msg, true);
    //   });
  }

  function setSession(email) {
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
      sessionStorage.setItem(SESSION_USER_KEY, JSON.stringify({ email: email }));
    } catch (e) {}
  }

  function getRedirectUrl() {
    try {
      var params = new URLSearchParams(window.location.search);
      return params.get('redirect') || '';
    } catch (e) {
      return '';
    }
  }

  /**
   * Abmelden. Später: firebase.auth().signOut();
   */
  function logout() {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem(SESSION_USER_KEY);
    } catch (e) {}
  }

  function showMessage(el, text, isError) {
    if (!el) return;
    el.textContent = text;
    el.hidden = false;
    el.setAttribute('class', 'admin-login-message ' + (isError ? 'admin-login-message--error' : 'admin-login-message--success'));
  }

  global.adminAuth = {
    isLoggedIn: isLoggedIn,
    getCurrentUser: getCurrentUser,
    handleLoginSubmit: handleLoginSubmit,
    logout: logout
  };
})(typeof window !== 'undefined' ? window : this);
