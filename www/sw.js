const CACHE_NAME = "quran-reader-v10";
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

const FONT_CACHE = "quran-fonts-v1";
const API_CACHE = "quran-api-v1";

// Install: cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting()),
  );
});

// Activate: clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter(
              (key) =>
                key !== CACHE_NAME && key !== FONT_CACHE && key !== API_CACHE,
            )
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

// Fetch: network-first for API, cache-first for static assets & fonts
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Google Fonts - cache first, long-lived
  if (
    url.hostname.includes("fonts.googleapis.com") ||
    url.hostname.includes("fonts.gstatic.com")
  ) {
    event.respondWith(
      caches.open(FONT_CACHE).then((cache) =>
        cache.match(event.request).then((cached) => {
          if (cached) return cached;
          return fetch(event.request).then((response) => {
            cache.put(event.request, response.clone());
            return response;
          });
        }),
      ),
    );
    return;
  }

  // CounterAPI - network only, don't cache analytics
  if (url.hostname.includes("counterapi.dev")) {
    event.respondWith(
      fetch(event.request).catch(
        () =>
          new Response("{}", {
            headers: { "Content-Type": "application/json" },
          }),
      ),
    );
    return;
  }

  // Quran API calls - network first, fallback to cache
  if (
    url.hostname.includes("api.alquran.cloud") ||
    url.hostname.includes("cdn.jsdelivr.net")
  ) {
    event.respondWith(
      caches.open(API_CACHE).then((cache) =>
        fetch(event.request)
          .then((response) => {
            cache.put(event.request, response.clone());
            return response;
          })
          .catch(() => cache.match(event.request)),
      ),
    );
    return;
  }

  // Static assets - cache first
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response.ok && url.origin === self.location.origin) {
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(event.request, response.clone()));
          }
          return response;
        })
        .catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("/index.html");
          }
        });
    }),
  );
});
