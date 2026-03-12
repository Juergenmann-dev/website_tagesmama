# Website-Prüfung: monti-pfiffikus.com

Kurzüberblick zu **Sprachen**, **Übersichtlichkeit/Bedienung** und **technischer Qualität** (ohne direkten Bezug zu Kaily).

---

## Kurzfassung für die Inhaberin

Die Website wirkt in Aufbau und Struktur veraltet und unübersichtlich: unklare Navigation, fehlende oder versteckte Kontaktseite, Mehrsprachigkeit undurchsichtig, lange Texte ohne klare Gliederung. In der Browser-Konsole erscheinen viele Meldungen (überwiegend von Erweiterungen; von der Seite selbst u.a. jQuery Migrate). **Unabhängig davon, wer die Seite einst gebaut hat:** Eine grundlegende Überarbeitung (klare Struktur, eigene Kontaktseite mit Formular, verständliche Menüführung, saubere Trennung der Sprachen) wäre sinnvoll. Dieses Dokument listet die gefundenen Punkte und konkrete Empfehlungen – es kann als Grundlage für eine spätere Überarbeitung oder ein Redesign dienen, ohne dass der ursprüngliche Ersteller bekannt sein muss.

---

## 1. Mehrsprachigkeit

**Problem:** Wenn die Seite in mehreren Sprachen angeboten wird, ohne dass klar ist, in welcher Sprache man sich befindet oder wie man wechselt, wirkt das unübersichtlich.

**Empfehlungen:**
- **Sprachwahl eindeutig platzieren:** z.B. oben rechts oder in der Navigation sichtbar („DE | EN“ oder „Deutsch / English“).
- **Pro Sprache eine klare URL** nutzen, z.B.  
  `monti-pfiffikus.com/` = Deutsch,  
  `monti-pfiffikus.com/en/` = Englisch.  
  So ist für Nutzer und Suchmaschinen klar, welche Version sie sehen.
- **Kein Sprach-Mix auf einer Seite:** Jede Seite nur in einer Sprache. Keine Mischung aus deutschen und englischen Absätzen ohne Kennzeichnung.
- **Startseite:** Beim ersten Besuch entweder eine Sprache voreinstellen (z.B. Deutsch) oder einen kurzen Sprachwahl-Hinweis zeigen („Sprache wählen“), dann konsistent in dieser Sprache weiterführen.

---

## 2. Übersichtlichkeit und Bedienung

**Typische Probleme bei unübersichtlichen Seiten:**
- Zu viele Menüpunkte auf einmal.
- Unklare Reihenfolge (wichtige Infos schwer zu finden).
- Lange Texte ohne Zwischenüberschriften.
- Impressum/Datenschutz/Kontakt schwer auffindbar.

**Empfehlungen:**

- **Navigation straffen:**  
  Wenige, klare Punkte, z.B.:  
  **Start** | **Über mich** | **Betreuung & Kosten** | **Kontakt** | **Impressum** | **Datenschutz**
- **Wichtiges sofort sichtbar:**  
  Auf der Startseite: kurzer Willkommenstext, „Freie Plätze“, Öffnungszeiten und ein klarer Button/Link „Kontakt / Anfrage“.
- **Inhalte gliedern:**  
  Lange Texte mit festen **Überschriften** (z.B. „Kosten“, „Betreuungszeiten“, „Alter der Kinder“) und optional kurzen Absätzen oder Aufzählungen.
- **Rechtliches immer erreichbar:**  
  Impressum und Datenschutz in **jedem** Menü (z.B. Footer auf jeder Seite) verlinken, einheitlich benennen („Impressum“, „Datenschutzerklärung“).
- **Ein Ziel pro Seite:**  
  Pro Unterseite ein klares Thema (z.B. eine Seite nur „Kosten“, eine nur „Kontakt“), damit Nutzer nicht zwischen vielen Infos suchen müssen.

---

## 3. Kontaktformular

**Auf der Startseite steht:** „dann füllt gerne das Kontaktformular aus“.

**Prüfung:**  
- `monti-pfiffikus.com/kontakt/` → **404 (Seite nicht gefunden)**  
- `monti-pfiffikus.com/contact/` → **404 (Seite nicht gefunden)**

**Fazit:** Ein Kontaktformular wird angekündigt, aber eine eigene Kontaktseite unter den üblichen Adressen ist nicht auffindbar. Entweder liegt das Formular woanders (z.B. auf der Startseite weiter unten, oder unter einer anderen URL), oder die Kontaktseite fehlt bzw. ist verwaist.

**Empfehlung:**
- Eine **eigene Seite „Kontakt“** anlegen mit der URL `/kontakt/` (oder `/contact/`).
- Dort das **Kontaktformular** platzieren und in der **Navigation** einen klaren Menüpunkt **„Kontakt“** einbauen, der direkt zu dieser Seite führt.
- So erfüllt die Seite das, was der Text verspricht („Kontaktformular ausfüllen“), und die Bedienung wird übersichtlicher.

---

## 4. Kleine Korrekturen (aus vorheriger Prüfung)

- **Schreibweise:** „Erfahren – Kompetent- Zuverlässig“ → einheitlich: **„Erfahren – Kompetent – Zuverlässig“** (Gedankenstriche mit Leerzeichen).
- **Link-Text:** „Datenschutz Erklärung“ → **„Datenschutzerklärung“** (ein Wort, üblich und suchmaschinenfreundlich).
- **Weitere Tippfehler (live auf der Startseite):**
  - „ganztagsmit fachlicher Aufsicht“ → **„ganztags mit fachlicher Aufsicht“** (Leerzeichen fehlt).
  - „Dann Sind Sie“ → **„Dann sind Sie“** (Großschreibung mid-sentence korrigieren).

---

## 4a. Weitere Befunde von der Live-Website (Ergänzung)

**Struktur & Technik**

- **Blog statt reine Seiten:** Die Startseite zeigt die Inhalte als **Blog-Posts** („Hallo und Herzlich Willkommen“, „Kosten“, „Fachliche Aufsicht“, „Aktuelles“, „Betreuungszeiten“ etc. mit Datum Mai 2024). Das erklärt teilweise die unübersichtliche Darstellung – wichtige Infos sind als Beiträge eingepflegt, nicht als klare Unterseiten.
- **Menü:** Sichtbar sind **Home | Datenschutz Erklärung | Galerie | Impressum | Referenzen | Über Mich** – ein Menüpunkt **„Kontakt“** fehlt komplett (passend zur 404 unter `/kontakt/`).
- **Theme:** Im Footer steht „Theme Kiddie Care by Sensational Theme“ – bestätigt WordPress-Nutzung.

**Sidebar / Widgets**

- **Besucherzähler:** Angezeigt wird „BESUCHER 012347“ – wirkt wie ein Platzhalter oder veralteter Zähler; für eine kleine Kindertagespflege nicht zwingend nötig.
- **„1.502 Spam von Akismet blockiert“:** Diese Meldung steht in der Sidebar und ist für Besucher irrelevant bzw. wirkt unprofessionell. Entweder Widget entfernen oder nur in der Backend-Ansicht anzeigen.
- **Recent Posts, Recent Comments, Archives (Mai 2024), Categories (Veronika Tews), Kalender:** Typische WordPress-Sidebar-Widgets – für eine schlanke Info-Seite können sie ablenken; Reduktion auf das Nötige (z. B. nur „Kontakt“ / „Anfrage“) wäre übersichtlicher.

**Positiv**

- **„Skip to content“:** Link ist vorhanden – gut für Barrierefreiheit (Tastatur/Screenreader).

**Impressum (Bestätigung)**

- Inhalt wie in Abschnitt 7.1 beschrieben: Name, Adresse, Kontakt laufen ohne Zeilenumbrüche ineinander („Veronika TewsFuhrenweg 2b38518 Gifhorn“ etc.). Empfehlung: Zeilenumbrüche wie in 7.3 beschrieben umsetzen.

---

## 5. Checkliste für die Redaktion

- [ ] Sprachwahl (DE/EN o.ä.) sichtbar und verständlich?
- [ ] Jede Seite nur in einer Sprache?
- [ ] Menü mit max. 6–7 Punkten, klare Bezeichnungen?
- [ ] Impressum & Datenschutz im Footer auf jeder Seite?
- [ ] **Kontaktseite mit Formular unter `/kontakt/` erreichbar und im Menü verlinkt?**
- [ ] Kontakt / Anfrage von der Startseite aus mit einem Klick erreichbar?
- [ ] Lange Texte mit Überschriften und Absätzen gegliedert?
- [ ] Sidebar: Spam-/Akismet-Hinweis für Besucher ausgeblendet oder entfernt?
- [ ] Besucherzähler nur anzeigen, wenn gewünscht und aktuell; sonst entfernen?

---

## 6. Browser-Konsole: Was von der Seite kommt, was von Erweiterungen

Wenn du die Entwicklertools (F12) → Konsole auf monti-pfiffikus.com öffnest, siehst du viele Meldungen. **Fast alle stammen von Browser-Erweiterungen**, nicht von der Website:

| Meldung | Ursache |
|--------|---------|
| `chrome-extension://...` / `background_worker.js` | Eine Chrome-Erweiterung (z.B. Passwort-Manager, Werbeblocker, Formular-Helfer). |
| `The spoc connection is not registered` | Erweiterung (z.B. Google-eigene Dienste). |
| `Receiving end does not exist` / `message channel closed` | Erweiterung verliert die Verbindung zur Seite (z.B. bei Zurück-Button / Back-Forward-Cache). |
| `inlineForm.html?abine...doNotRemove` | Von einer Erweiterung eingebundenes Skript (z.B. Formular-Autofill). |
| `Could not establish connection. Receiving end does not exist` | Erweiterung kann keine Verbindung zum Tab aufbauen. |

**Einziger Eintrag von der Website selbst:**

- **`jquery-migrate.min.js?ver=3.4.1: JQMIGRATE: Migrate is installed, version 3.4.1`**  
  Das ist eine **reine Info-Meldung**: Die Seite lädt das Plugin „jQuery Migrate“ (für Kompatibilität mit älterem jQuery-Code). **Kein Fehler**, nichts, was du an der Seite reparieren musst.

**Fazit:** Die Konsole sieht nach „viel Mist“ aus, aber für die Website monti-pfiffikus.com gibt es **keinen Handlungsbedarf** aus diesen Meldungen. Um die Seite selbst zu prüfen, am besten im **Inkognito-Modus** (oder mit deaktivierten Erweiterungen) testen – dann bleibt die Konsole deutlich ruhiger und echte Seitenfehler wären sichtbar.

---

## 7. Layout und Struktur pro Seitenansicht – Bestand & Vorschläge

Erfassung der geprüften Seiten (Inhalt/Struktur wie abrufbar). Daraus: **was übernehmen**, **was unbedingt verbessern**.

### 7.1 Erfasste Seiten und aktueller Aufbau

| Seite | URL | Aktueller Aufbau (Kurz) |
|-------|-----|-------------------------|
| **Start** | `/` | Langer Fließtext: Willkommen, Kosten, Jugendamt, Zeiten, Alter, Vertretung, „Liebe Eltern“ – alles hintereinander, kaum optische Trennung. Keine klaren Zwischenüberschriften. |
| **Über mich** | `/ueber-mich/` | Eine lange persönliche Geschichte, durchgehender Text. Keine Abschnitte wie „Wer ich bin“, „Qualifikation“, „Standort“. |
| **Impressum** | `/impressum/` | Titel, dann Anbieter/Kontakt/Verantwortlich in einem Block – wirkt wie eine Zeile (Name, Adresse, Telefon, E-Mail ohne Zeilenumbrüche lesbar). |
| **Galerie** | `/galerie/` | **Struktur am klarsten:** mehrere Bereiche mit Überschriften (z. B. „Sicherheit und Gestaltung“, „Garderobe und Sanitärbereich“, „Spielräume und Essecke“, „Garten und Freifläche“, „Gesunde Ernährung“, „Soziales Miteinander“, „Was wir alles so machen“). Slider pro Bereich. |
| **Referenzen** | `/referenzen/` | Zwei klare Bereiche: „Referenzen“, „Qualifizierung und Weiterbildung“. Gut als Idee. |
| **Kosten** | `/kosten/` | Kurz: drei Absätze (Betreuungsentgelt, Zusatzkosten, Steuerhinweis). Inhalt gut, aber optisch schlicht. |
| **Betreuungszeiten** | `/betreuungszeiten/` | Kurze Infos zu Zeiten, Kinderzahl/Alter, integrative Tagespflege. Labels und Werte laufen optisch ineinander (z. B. „Montag bis Freitag“ direkt vor „7.30“). |
| **Kontakt** | `/kontakt/` | **404** – Seite fehlt. |
| **Datenschutz** | `/datenschutz/` | **404** – Seite fehlt (oder anderer Pfad). |

**Gemeinsames Muster:** Seitentitel einheitlich als „[Thema] – Monti Pfiffikus Kindertagespflege“. Inhaltlich gibt es sinnvolle Themen-Trennung (eigene Seiten für Kosten, Zeiten, Über mich, Galerie, Referenzen), aber **Lesbarkeit und Struktur** sind oft schwach (fehlende Abstände, fehlende Überschriften, kein einheitliches Layout).

---

### 7.2 Was man übernehmen / beibehalten sollte

- **Einheitlicher Seitentitel:** „[Seitentitel] – Monti Pfiffikus Kindertagespflege“ – beibehalten.
- **Galerie-Struktur:** Klare **Überschriften pro Bereich** (Sicherheit, Garderobe, Spielräume, Garten, Ernährung, Miteinander, Aktivitäten) – dieses Prinzip (ein Thema = eine sichtbare Überschrift) auch auf anderen Seiten nutzen.
- **Referenzen-Struktur:** Zwei klare Blöcke (Referenzen / Qualifizierung) – Aufteilung in **erkennbare Abschnitte** beibehalten.
- **Kurz und thematisch:** Seiten wie **Kosten** und **Betreuungszeiten** sind inhaltlich knapp und thematisch getrennt – gut so; nur Darstellung (Abstände, evtl. kleine Zwischenüberschriften) verbessern.
- **Eigene Seiten pro Thema:** Nicht alles auf der Startseite – die Idee „eine Seite = ein Thema“ (Über mich, Kosten, Zeiten, Galerie, Referenzen) beibehalten.

---

### 7.3 Was unbedingt verbessert werden sollte

**Alle Seiten – einheitliches Grundlayout**

- **Header:** Auf jeder Seite gleich: Logo/Name „Monti Pfiffikus“ + **Navigation** (Start, Über mich, Galerie, Referenzen, Kosten, Betreuungszeiten, Kontakt, Impressum, Datenschutz).
- **Footer:** Auf jeder Seite gleich: z. B. Impressum | Datenschutzerklärung | Kontakt, evtl. kurzer Hinweis „Kindertagespflege Gifhorn“.
- **Inhalt:** Ein zentraler Bereich mit **begrenzter Breite** (z. B. max. 800 px) und ausreichend **Zeilenabstand**, damit Texte nicht „wandartig“ wirken.

**Startseite**

- Statt einer Textwüste: **klare Blöcke mit Überschriften**, z. B. „Willkommen“, „Freie Plätze & Zeiten“, „Kosten (Kurzüberblick)“, „So erreichen Sie mich“.
- **Ein klarer Button/Link „Zum Kontaktformular“** bzw. „Anfrage senden“ oben oder nach dem Willkommenstext.

**Impressum**

- **Struktur mit Zeilenumbrüchen:**  
  Zeile 1: Anbieter („Kindertagespflege Monti Pfiffikus“)  
  Zeile 2: Name (Veronika Tews)  
  Zeile 3: Adresse (Fuhrenweg 2b, 38518 Gifhorn)  
  Zeile 4: Kontakt (Telefon, E-Mail)  
  Zeile 5: „Verantwortlich für den Inhalt:“ + Name + Adresse  
  So wirkt es rechtssicher und lesbar.

**Über mich**

- Langen Text in **Abschnitte mit Überschriften** gliedern, z. B. „Mein Weg zur Tagesmutter“, „Qualifikation & Erfahrung“, „Standort Gifhorn-Kästorf“. Pro Abschnitt wenige Absätze.

**Kosten & Betreuungszeiten**

- **Labels und Werte trennen:** z. B. „Öffnungszeiten:“ in einer Zeile, „Montag bis Freitag, 7.30 – 16.30 Uhr“ in der nächsten; „Anzahl und Alter der Kinder:“ dann der passende Satz. Keine Wörter ohne Leerzeichen/Umbrüche aneinanderkleben.

**Fehlende Seiten anlegen**

- **Kontakt:** Seite `/kontakt/` mit **Kontaktformular** und ggf. Telefon/E-Mail. In Navigation und Footer verlinken.
- **Datenschutz:** Seite `/datenschutz/` (oder `/datenschutzerklaerung/`) mit der Datenschutzerklärung. In Footer und ggf. Navigation verlinken.

**Barrierefreiheit & Technik**

- Überschriften **hierarchisch** nutzen (z. B. eine H1 pro Seite, dann H2 für Hauptblöcke, H3 für Unterpunkte) – wie in der Galerie bereits angedeutet.
- Buttons/Links **klar benennen** („Zum Kontaktformular“, „Impressum“, „Datenschutzerklärung“), keine vagen Bezeichnungen.

---

### 7.4 Kurz-Checkliste Layout/Struktur

- [ ] Auf jeder Seite: gleicher Header (Logo + Nav) und gleicher Footer (Impressum, Datenschutz, Kontakt)?
- [ ] Startseite: Blöcke mit Überschriften + ein sichtbarer „Kontakt / Anfrage“-Link?
- [ ] Impressum: Zeilenumbrüche zwischen Name, Adresse, Kontakt, Verantwortlich?
- [ ] Über mich: Abschnitte mit Überschriften (z. B. Mein Weg, Qualifikation, Standort)?
- [ ] Kosten/Betreuungszeiten: Labels und Werte klar getrennt (Zeilen/Abstände)?
- [ ] Galerie/Referenzen: Überschriften-Struktur beibehalten?
- [ ] Seiten „Kontakt“ und „Datenschutz“ existieren und sind von überall erreichbar?

---

---

## 8. Umsetzung: HTML, WordPress oder Strato?

Die gewünschten Verbesserungen (einheitlicher Header/Footer, Kontaktseite, klare Struktur) lassen sich auf verschiedene Arten umsetzen. Kurzüberblick:

---

### Option A: Mehrere HTML-Dateien (statisch)

- **Idee:** Pro Seite eine eigene Datei: `index.html`, `ueber-mich.html`, `impressum.html`, `kontakt.html`, `datenschutz.html`, `galerie.html`, `referenzen.html`, `kosten.html`, `betreuungszeiten.html`.
- **Vorteile:** Keine Datenbank, kein CMS, schnell und stabil, gut für Suchmaschinen. Header/Footer per Copy-Paste oder mit einem kleinen Build-Schritt (z. B. mit einem einfachen Template-Tool) einheitlich halten.
- **Nachteile:** Änderungen am Menü oder Footer musst du in **jeder** Datei anpassen, sofern du kein Tool nutzt. Kontaktformular braucht entweder ein externes Formular-Service (z. B. Formspree, Netlify Forms) oder ein kleines Backend (z. B. PHP auf dem Server).
- **Gut geeignet für:** Kleine, überschaubare Sites mit wenigen Seiten, wenn jemand HTML anfassen kann oder ein einfaches Tool genutzt wird.

---

### Option B: WordPress (bei Strato oder woanders)

- **Idee:** WordPress installieren (Strato bietet das oft im Paket: „WordPress mit einem Klick“). Theme wählen, Seiten anlegen: Start, Über mich, Galerie, Referenzen, Kosten, Betreuungszeiten, **Kontakt** (mit Formular-Plugin), **Impressum**, **Datenschutz**. Menü und Footer kommen aus dem Theme – einheitlicher Header/Footer auf allen Seiten.
- **Vorteile:** Einmal Theme und Menü einrichten, dann nur noch **Inhalt** pro Seite pflegen. Kontaktformular z. B. mit „Contact Form 7“ oder „WPForms“. Kein manuelles Anpassen jeder HTML-Datei.
- **Nachteile:** Updates (WordPress, Themes, Plugins) sollten regelmäßig gemacht werden. Etwas Einarbeitung, wenn WordPress bisher nicht genutzt wurde.
- **Gut geeignet für:** Wenn die Seite später von der Inhaberin oder jemand ohne HTML-Kenntnisse gepflegt werden soll, oder wenn schon WordPress im Einsatz ist (die aktuelle Seite wirkt teilweise wie WordPress).

---

### Option C: Strato Website-Builder (falls im Paket)

- **Idee:** Strato hat oft einen **Website-Builder** (Drag & Drop). Dort ein Template wählen, Seiten anlegen (Start, Über mich, Kontakt, Impressum, Datenschutz, …), einheitliche Kopfzeile und Fußzeile einrichten, Kontaktformular-Baustein einfügen.
- **Vorteile:** Kein eigener Code, alles über Oberfläche. Hosting und Domain meist schon dabei.
- **Nachteile:** Weniger flexibel als WordPress oder eigene HTML-Seiten. Abhängigkeit vom Anbieter.

---

### Empfehlung für Monti Pfiffikus

- **Wenn die Seite schon bei Strato liegt und wenig gepflegt wird:** **WordPress** (Option B) ist meist der beste Kompromiss: einheitliches Layout (Header/Footer) durch das Theme, klare Seitenstruktur, Kontaktformular per Plugin, Impressum und Datenschutz als normale Seiten. Strato unterstützt WordPress oft direkt im Kundenbereich.
- **Wenn jemand nur wenige, statische Seiten will und kein CMS:** **Mehrere HTML-Dateien** (Option A) mit einem gemeinsamen Header/Footer (z. B. per Include oder kleinem Generator) – Kontaktformular über einen Formular-Dienst (z. B. Formspree) einbinden.
- **Strato Website-Builder** (Option C) nur nutzen, wenn bereits damit gearbeitet wird oder explizit kein WordPress gewünscht ist.

**Konkret für die Umsetzung der Prüfpunkte:**

- **Kontaktseite mit Formular:** In WordPress: Seite „Kontakt“ anlegen + Contact Form 7 (oder anderes Plugin). Bei reinem HTML: `kontakt.html` + Formular z. B. mit `action="https://formspree.io/f/..."` oder Strato-/Provider-Formular.
- **Datenschutz-Seite:** In WordPress: Seite „Datenschutzerklärung“ anlegen (WordPress bringt oft eine Vorlage mit). Bei HTML: `datenschutz.html` mit Text der Datenschutzerklärung.
- **Einheitlicher Header/Footer:** In WordPress über Theme und Menü. Bei HTML: gleicher Code in jeder Datei oder per PHP-Include/SSI, falls der Strato-Server das unterstützt (bei rein statischem Hosting: gleichen Block in jede HTML-Datei kopieren).

---

*Stand: Prüfung basierend auf Impressum, Startseite und weiteren Unterseiten. Vollständige Prüfung aller Ansichten und Sprachen vor Ort empfohlen.*
