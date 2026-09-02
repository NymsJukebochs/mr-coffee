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


v1.3.5 reduces the V60 icon size within the transparent square so Android launchers can display the full dripper more comfortably inside their icon mask.


v1.3.6 makes the transparent icon larger and centers it by the visible artwork's weighted center instead of the total bounding box.


v1.3.7 increases the transparent icon scale while keeping weighted-center placement, for a larger V60 within launcher-imposed circular backgrounds.


v1.3.8 enlarges the transparent icon again and centers it specifically on the dripper hole / main red circle rather than on the whole artwork.


v1.3.9 removes the handle from the icon art and centers a larger main dripper circle inside the launcher-imposed white circle.


v1.4.0 updates the app icon to use the new centered red dripper artwork.


v1.4.1 updates the app icon to use the user-provided white-backed V60 composition.
