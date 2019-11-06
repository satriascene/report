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
    "revision": "c1345d4e31489150633fd948d1c05840"
  },
  {
    "url": "index.html",
    "revision": "946dd99c8e6fedd5c07f92f1c2b05d11"
  },
  {
    "url": "manifest.json",
    "revision": "d9d975cebe2ec20b6c652e1e4c12ccf0"
  },
  {
    "url": "precache-manifest.5e28b1ec881a98bcedc71aad8708b24c.js",
    "revision": "5e28b1ec881a98bcedc71aad8708b24c"
  },
  {
    "url": "robots.txt",
    "revision": "3ad0652bd17ff826a31fa29366021cfd"
  },
  {
    "url": "service-worker.js",
    "revision": "d2c838f6ece25bec9811e31882025b3e"
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
    "url": "static/js/runtime-main.95d3b8a1.js",
    "revision": "35ceb62fa4023ed2ae26a1deac682e7b"
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