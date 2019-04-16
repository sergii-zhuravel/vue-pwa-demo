importScripts('/vue-pwa-demo/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/vue-pwa-demo/_nuxt/06aecc730d713b397b16.js",
    "revision": "a8ab40ef0797110262c8f119385aeba0"
  },
  {
    "url": "/vue-pwa-demo/_nuxt/153b7f240c676a5235fc.js",
    "revision": "373d73ac1b5c88f66c6fc45336a1612c"
  },
  {
    "url": "/vue-pwa-demo/_nuxt/246a92383838d8a668e0.js",
    "revision": "23c5b60a617c9d1dd358d5ba1bd3641e"
  },
  {
    "url": "/vue-pwa-demo/_nuxt/7ca5581e0b5c804fda7a.js",
    "revision": "6e00d2cdc33b1e6eb9c5fcbdea373039"
  },
  {
    "url": "/vue-pwa-demo/_nuxt/7cfa1cd6425efd9bab65.js",
    "revision": "465280e93f41a7646ec185b41d88e954"
  },
  {
    "url": "/vue-pwa-demo/_nuxt/8c07da849f31ca374686.js",
    "revision": "a80c4667230252dfce9040c1926c1754"
  },
  {
    "url": "/vue-pwa-demo/_nuxt/99086f8ba4eadb436d24.js",
    "revision": "0daf376f01129774f1aaa58b966c6fe8"
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
