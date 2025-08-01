const CACHE_NAME = "streamlist-cache-v1";
const urlsToCache = ["/", "/index.html", "/manifest.json"];

// Install SW and cache files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Activate and remove old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cache =>
          cache !== CACHE_NAME ? caches.delete(cache) : null
        )
      )
    )
  );
});

// Fetch from cache first, then network
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
