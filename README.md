# Mr Coffee — v1.4.5 WebAPK Icon Calibration

This build preserves the v1.4.4 WebAPK/installability fix.

The only intentional change is the icon artwork:
- removes the previous 1.13× aggressive maskable enlargement
- uses the full-bleed user-provided V60 icon at its original 1.00× size
- keeps separate `any` and `maskable` manifest entries

Why: v1.4.4 proved the app is now installing as a real PWA/WebAPK. The home-screen icon and install notification now match, which means Android is finally using the intended icon path. The prior aggressive enlargement was therefore genuinely too large. This build returns to the exact source scale that previously looked correct in the install notification.
