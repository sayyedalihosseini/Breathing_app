# Breathe — Sleep & Focus

A minimal breathing web app. It installs to the home screen and works offline.

- **Sleep**: 4-7-8 technique (inhale 4 s, hold 7 s, exhale 8 s)
- **Focus**: box breathing (4-4-4-4)

## Use

- Tap the shape to start or pause. After a pause it continues from the same point.
- To switch modes, swipe left/right, use the arrow keys, do a two-finger trackpad swipe, or use the top bar. Each mode keeps its own cycles and level until you reload.
- The speaker button (top right) turns the sound chime and vibration on or off at every phase change, so you can breathe with your eyes closed. On iPhone the silent switch mutes the sound, and vibration only works on Android.

## Levels

| Mode  | Level 1 | Level 2 | Level 3 |
|-------|---------|---------|---------|
| Sleep | 4 cycles · Screen Off | 6 · Silence the Brain | 8 · Knockout |
| Focus | 5 cycles · Coffee Bypass | 10 · Lock In | 15 · God Mode |

## Files

- `index.html`: the whole app (HTML, CSS, JS in one file)
- `sw.js`: service worker for offline use
- `manifest.webmanifest`, `icons/`: install metadata
- `breathe.html`: old address, now only redirects to `index.html`

## Updating

After you change any file, **bump `VERSION` in `sw.js`** (e.g. `breathe-v3`). That way all cached files get refreshed together. The update shows on the next launch after the phone was online once.
