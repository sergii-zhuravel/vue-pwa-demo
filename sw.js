importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06aecc730d713b397b16.js",
    "revision": "a8ab40ef0797110262c8f119385aeba0"
  },
  {
    "url": "/_nuxt/153b7f240c676a5235fc.js",
    "revision": "373d73ac1b5c88f66c6fc45336a1612c"
  },
  {
    "url": "/_nuxt/246a92383838d8a668e0.js",
    "revision": "23c5b60a617c9d1dd358d5ba1bd3641e"
  },
  {
    "url": "/_nuxt/51190a4fd8d2eaf43f8b.js",
    "revision": "db7b9fbd6f8cca726368e5cbaf0a8c31"
  },
  {
    "url": "/_nuxt/7aa5fead48631fc5f307.js",
    "revision": "a1fffa33de34a6248a457a9383a35f79"
  },
  {
    "url": "/_nuxt/8c07da849f31ca374686.js",
    "revision": "a80c4667230252dfce9040c1926c1754"
  },
  {
    "url": "/_nuxt/99086f8ba4eadb436d24.js",
    "revision": "0daf376f01129774f1aaa58b966c6fe8"
  }
], {
  "cacheId": "nuxt_demo_app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
