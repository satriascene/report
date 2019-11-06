importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.core.setCacheNameDetails({
    prefix: 'my-app',
    suffix: 'v1',
    precache: 'custom-precache-name',
    runtime: 'custom-runtime-name'
  });
  workbox.precaching.precacheAndRoute([
  {
    "url": "asset-manifest.json",
    "revision": "5b15ceb3fb5b5538900b3741aff78c4d"
  },
  {
    "url": "index.html",
    "revision": "c7414a52afa90bca326b442b93f63289"
  },
  {
    "url": "manifest.json",
    "revision": "d9d975cebe2ec20b6c652e1e4c12ccf0"
  },
  {
    "url": "precache-manifest.bc4ba14902c37ad25bc38d4d86e830c4.js",
    "revision": "bc4ba14902c37ad25bc38d4d86e830c4"
  },
  {
    "url": "robots.txt",
    "revision": "3ad0652bd17ff826a31fa29366021cfd"
  },
  {
    "url": "service-worker.js",
    "revision": "446f5613d1ca0a040d4132a279aa1252"
  },
  {
    "url": "static/css/main.b100e6da.chunk.css",
    "revision": "0938604a93b9b3347aeae5f50e89fd79"
  },
  {
    "url": "static/js/2.56c2a4d0.chunk.js",
    "revision": "14696a566f999f1238e72a0a2b35e1e3"
  },
  {
    "url": "static/js/main.59c92be2.chunk.js",
    "revision": "708fc056deb8cc79bd30c9bb2a2aab10"
  },
  {
    "url": "static/js/runtime-main.c23a45d6.js",
    "revision": "53339a82a4a306bc52f30d83b4dd911a"
  }
]);
  workbox.routing.registerRoute(
    /(.*)articles(.*)\.(?:png|gif|jpg)/,
    workbox.strategies.cacheFirst({
      cacheName: 'images-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        })
      ]
    })
  );
  workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif|ico)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'my-image-cache',
    })
  );

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}