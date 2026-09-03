# Mr Coffee — v1.4.4 Installability Diagnostic

This build stops changing the icon and focuses only on determining why Chrome is falling back to a browser-badged shortcut instead of minting a WebAPK.

## Important changes
- Explicit `/mr-coffee/` manifest `id`, `start_url`, and `scope`.
- Explicit absolute icon URLs.
- `prefer_related_applications: false`.
- Cleaned service worker cache list and registration scope.
- Added a PWA install-check panel under **Settings**.
- Captures Chrome's `beforeinstallprompt` event.
- Shows whether the service worker is actively controlling the page.
- Provides its own **INSTALL MR COFFEE** button only if Chrome reports full PWA installability.

## Test
1. Upload these files to the root of the existing `mr-coffee` GitHub repository.
2. Wait for GitHub Pages to redeploy.
3. Remove old Mr Coffee home-screen shortcuts/apps.
4. In Chrome, visit `https://nymsjukebochs.github.io/mr-coffee/`.
5. Tap/interact with the page and keep it open at least 30 seconds.
6. Open **Settings** inside Mr Coffee and read the three PWA install-check rows.
7. If **Install prompt** says `READY — FULL PWA CRITERIA MET`, use the in-app **INSTALL MR COFFEE** button rather than Chrome's generic Add to Home screen flow.

If the prompt becomes READY but Android still creates only a browser-badged shortcut, the web app has passed Chrome's installability criteria and the remaining problem is WebAPK minting/device/browser infrastructure rather than the manifest or artwork.
