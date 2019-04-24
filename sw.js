importScripts('/vue-pwa-demo/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/vue-pwa-demo/_nuxt/0bcf40b35aa7457b5cad.js",
    "revision": "e87a84dde885964ca1b4c727edb5abbe"
  },
  {
    "url": "/vue-pwa-demo/_nuxt/0cd03e9a71cc436a37aa.js",
    "revision": "71d2f9bac747ee55d1dd8474e0e6e5e4"
  },
  {
    "url": "/vue-pwa-demo/_nuxt/25850eaa3bb6f24ea0ce.js",
    "revision": "ee2fce4d7af856001707e6c92d6d4c5b"
  },
  {
    "url": "/vue-pwa-demo/_nuxt/82c0579cf036ca1c0d2e.js",
    "revision": "654e0f0df07153c947eb56720477aef4"
  },
  {
    "url": "/vue-pwa-demo/_nuxt/950261bc5d4b48878924.js",
    "revision": "c67301f281c22b00509217a7dd3dd6c4"
  },
  {
    "url": "/vue-pwa-demo/_nuxt/d2ab45777f41e1f902ea.js",
    "revision": "7caa0502e0ed239767c8dc5040bdef74"
  }
], {
  "cacheId": "nuxt_demo_app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/vue-pwa-demo/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/vue-pwa-demo/.*'), workbox.strategies.networkFirst({}), 'GET')
