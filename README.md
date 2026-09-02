# Mr Coffee
Current build: **v1.3.3 — Styled Maskable Icon**

## GitHub Pages setup
1. Create a new repository named `mr-coffee`.
2. Upload every file in this package to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose **main** and **/(root)**, then Save.
6. Open the HTTPS Pages address GitHub gives you on Android.
7. In Chrome or Brave choose **Install app** / **Add to Home screen**.

This build is installable, works offline after first load, shows its version, and uses a network-first update path for the main page so frequent testing is less likely to get stuck on an old cached build.


This build replaces the placeholder app icon with the detailed red V60 icon artwork.


v1.3.2 adds separate standard and maskable icon assets for Android/PWA installation.


v1.3.3 redesigns the Android maskable icon to fill the circular launcher mask more boldly, closer to the user's mockup.


v1.3.4 removes maskable/adaptive icon assets entirely and uses only transparent standard icons, to test whether Android preserves the V60 silhouette and handle without a background tile.
