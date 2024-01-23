const cacheName = "vid-player-v0"
const assetsToCache = [
  "/",
  "/index.html",
  "/js/materialize.min.js",
  "/css/materialize.min.css",
  "/manifest.json",
  "/images/icons",
  "/images/favicon.ico",
  "/videos/v1.mp4",
  "/videos/v2.mp4",
  "/videos/v3.mp4",
  "/videos/v4.mp4",
]

// install event
self.addEventListener("install", event => {
  console.log(`service worker has been installed`)

  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log(`caching shell assets`)
      cache.addAll(assetsToCache)
    })
  )
})

// activate event
self.addEventListener("activate", event => {
  console.log(`service worker has been activated`)
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cacheName).map(key => caches.delete(key))
      )
    })
  )
})

// fetch event
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})
