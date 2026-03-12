# Konzept: Neue Website Monti Pfiffikus Kindertagespflege

Vision und technische Möglichkeiten für eine zeitgemäße, selbst verwaltbare Website.

---

## 1. Deine Vorstellung (Anforderungen)

| Anforderung | Bedeutung |
|-------------|-----------|
| **HTML, jeder Bereich eigene Seite** | Klare Struktur: eine HTML-Datei pro Bereich (Start, Über mich, Galerie, Referenzen/Nachweise, Kosten, Zeiten, Kontakt, Impressum, Datenschutz). Sauber, schnell, suchmaschinenfreundlich. |
| **Für Jung und Alt** | Einfache Sprache, gute Lesbarkeit (Schriftgröße, Kontrast), klare Navigation. Sowohl junge Eltern als auch Großeltern sollen sich zurechtfinden. |
| **Frischer, neuer Look – zeitlos und ansprechend** | Modern wirken, aber nicht modisch-vergänglich. Freundlich, vertrauenserweckend, passend zur Kindertagespflege. |
| **Selbstverwaltung durch die Tagesmutter** | Nach dem Go-Live soll die Tagesmutter (ohne Programmierkenntnisse) selbst: Bilder hinzufügen/löschen, Nachweise (Zertifikate, Referenzen) hochladen, Texte anpassen – **quasi als Admin**. |

---

## 2. Die Herausforderung: „Nur HTML“ vs. „Selbst verwalten“

- **Reines HTML** = statische Dateien. Um etwas zu ändern (z.B. neues Bild in der Galerie), müsste jemand die HTML-Datei bearbeiten oder eine neue Version hochladen. Das ist für eine Tagesmutter ohne Technik-Kenntnisse nicht praktikabel.
- **Selbst verwalten** = Login, Oberfläche (Admin-Bereich), Speicherung von Bildern und Dokumenten, Anzeige auf der öffentlichen Seite. Dafür braucht es entweder ein **CMS** (Content-Management-System) oder ein **kleines Backend** (Serverlogik + Datenbank/Dateien).

**Kurz:** Eine „Website in HTML mit eigenem Bereich pro Seite“, die die Tagesmutter **selbst** pflegen kann, ist möglich – aber sie wird technisch immer „HTML vorne, Verwaltung hinten“ sein. Das Ergebnis für Besucher kann trotzdem wie eine schlanke, zeitlose HTML-Seite aussehen.

---

## 2a. Gewählte Technik: GitHub Pages + Firebase (wie Bautagebuch)

**Hosting & Domain**

- **GitHub Pages** hostet die statischen HTML-Seiten (eine Datei pro Bereich). Kostenlos, stabil, gut für Suchmaschinen.
- **Eigene Domain** (z.B. `monti-pfiffikus.com`) kann mit GitHub Pages verbunden werden (CNAME-Eintrag beim Domain-Anbieter, Domain in den Repo-Einstellungen eintragen).

**Backend für Dokumente & Fotos**

- **Firebase** übernimmt das Backend – wie beim Bautagebuch:
  - **Firebase Storage:** Speicherung von Bildern und Dokumenten (PDFs für Nachweise, Fotos für Galerie).
  - **Firestore** (oder Realtime Database): Metadaten zu den Uploads – z.B. welcher Bereich/Kategorie, Reihenfolge, Beschreibung. So lässt sich steuern, wo ein Bild oder Dokument angezeigt wird.

**Struktur wie im Bautagebuch**

- **Öffentliche HTML-Seiten:** Enthalten feste **Foto-/Dokument-Abschnitte** (z.B. Galerie mit Bereichen „Spielräume“, „Garten“, „Ernährung“; Referenzen mit „Zertifikate“, „Weiterbildung“). Die Inhalte werden per JavaScript aus Firebase geladen und in diese Abschnitte eingebunden.
- **Admin-Bereich (z.B. Reiter „Foto-Upload“ / „Upload“):** Eine geschützte Seite (z.B. `/admin.html` oder `/upload.html`), auf der die Tagesmutter sich anmeldet (Firebase Auth) und:
  - Bilder oder PDFs hochlädt,
  - auswählt, **wo** der Inhalt erscheinen soll (Dropdown: z.B. Galerie → Spielräume, Galerie → Garten, Nachweise → Zertifikate, Nachweise → Referenzen usw.),
  - optional: Reihenfolge anpasst oder Einträge löscht.
- **Kategorien/Bereiche** sind dabei frei definierbar (z.B. wie beim Bautagebuch: „Gebäude 1“, „Handwerker“, „persönliche Fortschritte“ → hier: „Galerie – Spielräume“, „Galerie – Garten“, „Nachweise – Qualifikation“ usw.). Die HTML-Seiten haben pro Bereich einen Container; Firebase liefert die zugehörigen Dateien und Metadaten.

**Vorteile dieser Lösung**

- Kein eigener Server, keine Datenbank-Administration. Firebase und GitHub Pages sind gut skalierbar und günstig (Firebase Free Tier reicht für kleine Sites meist aus).
- Tagesmutter arbeitet nur in der Upload-Oberfläche, muss kein HTML anfassen.
- Klarer, zeitloser HTML-Look; Galerie und Nachweise wirken integriert, weil sie aus derselben Quelle (Firebase) befüllt werden.

**Kosten sparen & dauerhaft selbst verwalten**

- **Kosteneinsparung:** GitHub Pages ist kostenlos; Firebase Free Tier deckt für eine solche Klein-Site in der Regel alle nötigen Speicher- und Lesezugriffe ab. Keine monatlichen Hosting- oder CMS-Gebühren, keine teuren WordPress-Pakete oder Website-Builder-Abos.
- **Selbstverwaltung:** Es kommen laufend neue Inhalte dazu – neue Fotos (Aktivitäten, Räume, Kinder), neue Zertifikate, Abschlüsse, Fortbildungen. Mit der Admin-Oberfläche kann die Tagesmutter das alles selbst einpflegen, ohne dich oder einen Dienstleister zu beauftragen. Einmal einrichten, dann dauerhaft unabhängig und ohne laufende Redaktionskosten.

**Einfach wie Kochen oder den Kühlschrank füllen**

- Die Bedienung soll **so simpel** sein wie Alltägliches: Kühlschrank auffüllen, etwas kochen – keine Technik-Hürden, keine Handbücher.
- Konkret: Wenige, große Schritte. z.B. **Einloggen** → **„Wo soll es hin?“** (eine Auswahl: Galerie–Garten, Nachweise–Zertifikate, …) → **Datei aussuchen** → **Hochladen**. Fertig. Keine Ordnerstruktur, keine Einstellungen, kein Kleingedrucktes. Wenn sie es in unter einer Minute ohne Nachdenken schafft, ist das Ziel erreicht.

---

## 3. Mögliche Lösungsansätze (Referenz – gewählt ist 2a)

### Option A: Statisches HTML + Admin-Tool („Headless“-Idee)

- **Vorne:** Klassische HTML-Seiten, pro Bereich eine Datei, frischer zeitloser Look.
- **Hinten:** Kleines Admin-Panel (eigene Anwendung oder gehosteter Dienst), in dem die Tagesmutter Bilder und Dokumente hochlädt. Ein **Build-Schritt** oder ein **einfacher Server** liest diese Uploads und baut daraus die HTML-Seiten (oder ersetzt nur Galerie/Referenzen-Bereiche).
- **Vorteil:** Optik und Struktur bleiben „clean HTML“, keine große Plattform.
- **Nachteil:** Build/Deploy muss eingerichtet werden (z.B. per Klick „Seite aktualisieren“ im Admin oder automatisch bei Upload). Etwas technische Einrichtung nötig.

### Option B: Kleines CMS mit HTML-ähnlichem Frontend

- **Beispiel:** **WordPress** mit einem schlanken, zeitlosen Theme (oder maßgeschneidert), das wie eine ruhige HTML-Site wirkt – große Schrift, viel Weißraum, klare Bereiche. Oder ein **einfaches CMS** wie z.B. **Cockpit CMS**, **Directus** (als Headless-CMS) oder **Kirby**.
- **Tagesmutter:** Loggt sich ein, hat Menüpunkte wie „Galerie“, „Nachweise“, „Texte“. Kann Bilder hochladen/löschen, PDFs für Referenzen hochladen, Texte ändern. Kein HTML anfassen.
- **Vorteil:** Bewährt, gut dokumentiert, Hosting (z.B. Strato) unterstützt WordPress oft direkt. Viele Themes und Plugins für Galerien, Formulare, Datenschutz.
- **Nachteil:** WordPress kann „überladen“ wirken; mit disziplinierter Nutzung (wenig Plugins, schlichtes Theme) aber gut beherrschbar. Bei anderen CMS: evtl. weniger bekannt, Hosting prüfen.

### Option C: Statische Seite + externer Medienspeicher + Admin nur für Medien

- **Vorne:** Reine HTML-Seiten (z.B. von dir gebaut), zeitlos und ansprechend.
- **Galerie / Nachweise:** Zeigen Inhalte von einem **externen Dienst** an, den die Tagesmutter bedient:
  - z.B. **Google Fotos** oder **Dropbox** (Album-Link einbinden),
  - oder ein **Formular-/Medien-Service** (z.B. **Cloudinary** mit Admin-UI, **Netlify CMS** mit GitHub).
- **Vorteil:** Kein eigenes Backend, Hosting bleibt simpel (nur HTML + evtl. ein bisschen JavaScript).
- **Nachteil:** Galerie/Nachweise laufen über Drittanbieter; Look und Ablauf sind weniger „eine einzige Website“. Für Nachweise (PDFs) müsste man klare Links oder eine einfache Liste pflegen (z.B. per Link in einer HTML-Datei, die sie selten anpasst, oder über ein kleines Tool).

---

## 4. Empfehlung für „HTML-Feeling“ + Selbstverwaltung

- **Wenn die Tagesmutter wirklich alles selbst machen soll** (Bilder, Nachweise, evtl. Texte) **ohne dass du dauernd eingreifst:**  
  **Option B (kleines CMS)** ist am realistischsten. Konkret: **WordPress** mit einem **schlichten, zeitlosen Theme** (oder Custom-Theme), das wie eine ruhige HTML-Seite aufgebaut ist – klare Bereiche, eine Seite pro Thema, großer Text, wenig Schnickschnack. Mit Plugins: Kontaktformular, Galerie, optional Mediensammlung für Nachweise. Sie loggt sich ein, arbeitet nur in der Oberfläche.

- **Wenn du bereit bist, nach jedem Update der Galerie/Nachweise einmal einen „Deploy“ auszulösen** (z.B. Klick in einem Tool, oder du machst es gelegentlich):  
  **Option A** (statisches HTML + Admin-Tool/Build) liefert den „reinen“ HTML-Look und volle Kontrolle über Design und Struktur. Die Tagesmutter nutzt dann nur ein einfaches Admin-UI zum Hochladen; du (oder ein Automatismus) baut daraus die neue Version der Seite.

- **Wenn es vor allem um wenige Bilder und wenige Nachweise geht** und die Tagesmutter nur selten etwas ändert:  
  **Option C** (HTML + externe Dienste für Galerie/Dateien) kann reichen – mit klarer Anleitung, wo sie was hochlädt und wie die Links in die HTML-Seite eingetragen werden (oder du trägst sie nach gelegentlicher Absprache ein).

---

## 5. Konkret: „Frischer, zeitloser Look“ und „für Jung und Alt“

Unabhängig von der Technik (HTML von Hand, CMS, Generator):

- **Typografie:** Große, gut lesbare Schrift (z.B. 18–20 px für Fließtext auf Desktop), ausreichend Zeilenabstand. Schriftart: freundlich und seriös (z.B. Open Sans, Source Sans, Lato oder eine ruhige Serif für Überschriften).
- **Farben:** Wenige, klare Farben; hoher Kontrast (WCAG-orientiert), damit es für Ältere gut lesbar ist. Z.B. dunkles Grau oder Dunkelblau auf Hellgrau/Weiß, ein dezentes Akzent (z.B. ein warmes Grün oder Orange) für Buttons und Hervorhebungen.
- **Struktur:** Eine klare Überschrift pro Bereich, kurze Absätze, viel Weißraum. Keine überladenen Sidebars; Navigation oben oder als klarer Block.
- **Mobile:** Darstellung muss auf Smartphone gut funktionieren (große Klickflächen, lesbare Schrift ohne Zoomen).
- **Inhalt:** Kurze, einfache Sätze; Fachbegriffe (z.B. „Kindertagespflege“, „Tagesmutter“) sind okay, aber keine unnötigen Anglizismen oder komplizierten Formulierungen.

Das kann in **reinem HTML+CSS** umgesetzt werden und dann entweder als statische Dateien (Option A/C) oder als Theme-Vorlage in einem CMS (Option B) genutzt werden.

---

## 6. Galerie: Übernahme von der aktuellen Website (sauber umgesetzt)

Die [aktuelle Galerie](https://monti-pfiffikus.com/galerie/) ist gut strukturiert und kann als Vorlage dienen. **Was übernehmen, was sauber neu machen:**

**Struktur (beibehalten)**

- Eine **Überschrift „Galerie“**, darunter **ein Abschnitt pro Thema** mit eigener Überschrift (H2/H3).
- **Pro Bereich ein Slider** (oder eine klare Bildergalerie) – Bilder laufen untereinander in festen Kategorien, nicht alles in einem Rutsch. So finden Besucher schnell „Garten“, „Spielräume“ oder „Ernährung“.
- **Keine Beispiel-Slider:** Der aktuelle „Beispiel – 5 Slider untereinander“-Block kann entfallen; nur die inhaltlichen Kategorien bleiben.

**Kategorien (1:1 von der Live-Galerie übernehmen)**

| Kategorie (wie auf der Website) | Verwendung |
|--------------------------------|------------|
| Sicherheit und Gestaltung | Räume, Einrichtung, Sicherheit |
| Garderobe und Sanitärbereich | Garderobe, Sanitär |
| Spielräume und Essecke | Spielbereiche, Essecke |
| Garten und Freifläche | Außenbereich |
| Gesunde Ernährung aus dem Naschgarten | Essen, Naschgarten, Mahlzeiten |
| Soziales Miteinander | Kinder zusammen, Aktivitäten |
| Was wir alles so machen | Sonstige Aktivitäten |

**Technisch sauber umsetzen**

- Im neuen HTML: **feste Container** pro Kategorie (z.B. `<section id="galerie-garten">` mit Überschrift „Garten und Freifläche“). Kein WordPress, keine Slider-Plugins – **JavaScript lädt die Bilder aus Firebase** (Storage + Metadaten aus Firestore) und baut pro Kategorie einen einfachen Slider oder eine Bildergalerie ein. So bleibt das Design unter deiner Kontrolle, zeitlos und schnell.
- Slider-Optik: ruhig, großflächig, gut auf Mobilgeräten bedienbar (z.B. Wischen oder klare Pfeile). Keine überladenen Animationen.

---

## 6b. Galerie vs. Referenzen: klare Trennung (aktuell fehlt sie)

**Aktueller Stand:** Auf der bestehenden Website sind Galerie und Referenzen im Aufbau praktisch identisch (beide Slider/Bildbereiche) – für Besucher gibt es keinen erkennbaren Unterschied. Entweder war die Idee nicht durchdacht oder es fehlte die Lust/ das Handwerk für eine saubere Trennung.

**In der neuen Website trennen wir bewusst:**

| Bereich | Zweck | Darstellung |
|--------|--------|-------------|
| **Galerie** | **Fotos** vom Alltag: Räume, Aktivitäten, Kinder, Garten, Essen, Miteinander. Emotional, bildstark. | Slider/Bildergalerie pro Kategorie (wie in Abschnitt 6). Fotos aus Firebase, Kategorien wie „Garten und Freifläche“, „Spielräume und Essecke“ usw. |
| **Referenzen** | **Nachweise & Qualifikation:** Zertifikate, Abschlüsse, Weiterbildungen, offizielle Dokumente. Vertrauen, Seriosität. | Kein zweiter Foto-Slider. Stattdessen: **strukturierte Blöcke** mit Überschriften (z.B. „Qualifikation“, „Weiterbildung“), darunter **Dokumente** – z.B. PDF-Downloads oder Vorschaubilder von Zertifikaten mit Titel/Beschreibung. Liste oder Karten, klar lesbar, evtl. mit kleinem Thumbnail pro Eintrag. |

- **Galerie** = „So sieht es bei uns aus“ (Bilder).
- **Referenzen** = „Das bringe ich mit“ (Dokumente, Qualifikationen).

Technisch: Beide nutzen Firebase (Storage für Dateien, Firestore für Metadaten), aber die **Referenzen-Seite** rendert keine Slider wie die Galerie, sondern z.B. Karten oder eine Liste mit Titel, optional Kurztext, Link/Button „PDF ansehen“ oder Vorschaubild. So hat jede Seite einen eigenen, nachvollziehbaren Zweck.

---

## 6a. Kategorien für Upload (Admin-Dropdown)

Damit die Tagesmutter beim Upload auswählt, **wo** etwas erscheint. Die Auswahl trennt klar: Galerie = Fotos; Referenzen = Nachweise/Dokumente.

| Kategorie (Upload-Ziel) | Anzeige auf | Typ |
|-------------------------|-------------|-----|
| Sicherheit und Gestaltung | Galerie | Fotos |
| Garderobe und Sanitärbereich | Galerie | Fotos |
| Spielräume und Essecke | Galerie | Fotos |
| Garten und Freifläche | Galerie | Fotos |
| Gesunde Ernährung aus dem Naschgarten | Galerie | Fotos |
| Soziales Miteinander | Galerie | Fotos |
| Was wir alles so machen | Galerie | Fotos |
| Nachweise – Zertifikate / Qualifikation | Referenzen | Dokumente (PDF/Bild) |
| Nachweise – Weiterbildung | Referenzen | Dokumente (PDF/Bild) |

Beim Upload: Galerie-Kategorien für Fotos, Nachweise-Kategorien für Zertifikate/Weiterbildung (PDF oder Foto des Dokuments). Die Referenzen-Seite zeigt diese Einträge als Dokumenten-Liste/-Karten, nicht als weiteren Slider.

---

## 7. Nächste Schritte (mit GitHub Pages + Firebase)

1. **Repo & GitHub Pages:** Neues Repository (oder bestehendes) für die HTML-Seiten; GitHub Pages aktivieren; optional Domain (z.B. monti-pfiffikus.com) per CNAME verbinden.
2. **Firebase-Projekt:** Firebase anlegen (Storage + Firestore), Regeln für Lese-/Schreibrechte setzen (öffentlich lesbar für Galerie/Nachweise, Schreiben nur nach Auth). Firebase SDK in die Seiten einbinden (nur wo nötig: Galerie, Referenzen, Admin).
3. **HTML-Struktur:** Eine HTML-Datei pro Bereich (index, ueber-mich, galerie, referenzen, kosten, betreuungszeiten, kontakt, impressum, datenschutz). Galerie und Referenzen enthalten leere Container pro Kategorie; JavaScript lädt die Medien + Metadaten aus Firebase und rendert sie in die Abschnitte.
4. **Admin-Seite:** Geschützte Seite (z.B. `admin.html` oder `upload.html`) mit Firebase Auth (Login für Tagesmutter), Formular: Datei auswählen + Kategorie-Dropdown (wie in Abschnitt 6) + optional Beschreibung. Upload → Firebase Storage; Metadaten (Pfad, Kategorie, Reihenfolge) → Firestore. Optional: Liste der bestehenden Einträge mit „Löschen“ / Reihenfolge ändern.
5. **Design:** Einheitliches Layout (Header, Navigation, Footer), zeitlos und für Jung und Alt (große Schrift, Kontrast), mobil tauglich.
6. **Anleitung:** Kurze Bedienungsanleitung für die Tagesmutter (Login, Upload, Kategorie wählen, ggf. Löschen).

---

*Dieses Konzept ergänzt die [Website-Prüfung](monti-pfiffikus-website-pruefung.md) und kann als Grundlage für die Planung der neuen Website und Gespräche mit der Tagesmutter oder einem Dienstleister dienen.*
