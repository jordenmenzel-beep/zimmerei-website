# Website Zimmerei (statisch, ohne Build-Schritt)

Dateien: `index.html`, `leistungen.html`, `kontakt.html`, `impressum.html`, `datenschutz.html`, `assets/`.

## Vor dem Livegang
1. Alle `[Platzhalter]` ersetzen (Firmenname, Ort, Adresse, Zeiten, Texte).
2. In `assets/main.js` oben `CONFIG` ausfüllen: `phone`, `email` und `endpoint` (URL eines Formular-Dienstes, z. B. Formspree). Ohne `endpoint` sendet das Formular nichts und zeigt das offen an.
3. Beispielbilder (`.ph`) durch echte Fotos ersetzen, mit `alt`-Texten.
4. Impressum und Datenschutz rechtlich prüfen lassen und an die genutzten Dienste anpassen.
5. Strukturierte Daten (LocalBusiness) erst ergänzen, wenn die Firmendaten verifiziert sind.

## Auf GitHub
```
git init && git add . && git commit -m "Zimmerei-Website"
git branch -M main
git remote add origin https://github.com/<NAME>/<REPO>.git
git push -u origin main
```
Veröffentlichen: Repository, Settings, Pages, Branch `main`, Ordner `/ (root)`.
