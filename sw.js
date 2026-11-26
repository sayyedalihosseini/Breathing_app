// Breathe — offline support
// Bump VERSION whenever you change any file, so phones pick up the new cache.
const VERSION = 'breathe-v3';

const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/apple-touch-icon-180.png',
  './icons/apple-touch-icon-167.png',
  './icons/apple-touch-icon-152.png',
  './icons/apple-touch-icon-120.png',
  './icons/favicon-32.png',
  './icons/favicon-64.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(VERSION)
      .then(cache => cache.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Stale-while-revalidate: answer from the cache instantly (works offline),
// then refresh the cache in the background so the next launch has updates.
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // Every page in the app (incl. the old breathe.html start URL) is the one index.html
  const isPage = req.mode === 'navigate';
  const key = isPage ? './index.html' : req;

  event.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const cached = await cache.match(key, { ignoreSearch: true });
    const network = fetch(isPage ? './index.html' : req)
      .then(res => {
        if (res && res.ok) cache.put(key, res.clone());
        return res;
      })
      .catch(() => null);

    if (cached) {
      event.waitUntil(network);
      return cached;
    }
    return (await network) || new Response('Offline', { status: 503, statusText: 'Offline' });
  })());
});
