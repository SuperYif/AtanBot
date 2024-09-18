self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/ifBot./',
        '/ifBot./index.html',
        '/ifBot./manifest.json',
        '/ifBot./icon-192x192.png',
        '/ifBot./icon-512x512.png'
        // 添加其他需要缓存的资源
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});