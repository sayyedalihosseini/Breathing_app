# Breathe — Sleep & Focus

A minimal breathing web app. It installs to the home screen and works offline.

- **Sleep**: 4-7-8 technique (inhale 4 s, hold 7 s, exhale 8 s)
- **Calm**: coherent breathing (inhale 5 s, exhale 5 s, 6 breaths per minute)
- **Sigh**: physiological sigh (inhale 2 s, top-up inhale 1 s, long exhale 6 s) for quick stress relief
- **Focus**: box breathing (4-4-4-4)

## Use

- Tap the shape to start or pause. After a pause it continues from the same point.
- To switch modes, swipe left/right, use the arrow keys, do a two-finger trackpad swipe, or use the top bar. Each mode keeps its own cycles and level until you reload.
- The button at top right cycles the cues: **Chime** (soft bell at each phase change), **Breath tone** (a soft hum that rises as you inhale and falls as you exhale), **Vibrate only**, **Silent**. Vibration also plays with the chime and breath tone. On iPhone the silent switch mutes the sound, and vibration only works on Android.
- The screen stays on while you breathe, and the phone can lock again when you pause.
- **Sleep** stops by itself after the last level (8 cycles, ~2.5 min), then the screen fades to black and the phone can lock. Tap to wake it.

## Levels

| Mode  | Level 1 | Level 2 | Level 3 |
|-------|---------|---------|---------|
| Sleep | 4 cycles · Screen Off | 6 · Silence the Brain | 8 · Knockout (auto-stop) |
| Calm  | 6 cycles (1 min) · Settle | 18 (3 min) · Steady | 30 (5 min) · Still Water |
| Sigh  | 2 cycles · Release | 4 · Unclench | 6 · Reset |
| Focus | 5 cycles · Coffee Bypass | 10 · Lock In | 15 · God Mode |

## Files

- `index.html`: the whole app (HTML, CSS, JS in one file)
- `sw.js`: service worker for offline use
- `manifest.webmanifest`, `icons/`: install metadata
- `breathe.html`: old address, now only redirects to `index.html`

## Updating

After you change any file, **bump `VERSION` in `sw.js`** (e.g. `breathe-v3`). That way all cached files get refreshed together. The update shows on the next launch after the phone was online once.
