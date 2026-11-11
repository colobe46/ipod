// Guarda la página en el iPhone: abre al instante y funciona sin internet.
// Si hay conexión, descarga la versión nueva en segundo plano para la próxima vez.
const CACHE = 'ipod-v9';
const ARCHIVOS = ['./', 'index.html', 'manifest.json', 'icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => e.waitUntil(
  caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim())
));

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.open(CACHE).then(c =>
    c.match(e.request, { ignoreSearch: true }).then(guardada => {
      const red = fetch(e.request)
        .then(r => { if (r.ok) c.put(e.request, r.clone()); return r; })
        .catch(() => guardada);
      return guardada || red;
    })
  ));
});
