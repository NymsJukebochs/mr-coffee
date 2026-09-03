const CACHE = 'mr-coffee-v1.4.6';
const ROOT = '/mr-coffee/';
const CORE = [
  ROOT,
  ROOT + 'index.html',
  ROOT + 'manifest.webmanifest',
  ROOT + 'icon-192.png',
  ROOT + 'icon-512.png',
  ROOT + 'icon-maskable-192.png',
  ROOT + 'icon-maskable-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(ROOT, copy));
          return response;
        })
        .catch(() => caches.match(ROOT))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
