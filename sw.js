importScripts('/vue-pwa-demo/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/vue-pwa-demo/_nuxt/027bb6d760781ae7d0ad.js",
    "revision": "0211ab77ada731006a43dc6c30143d15"
  },
  {
    "url": "/vue-pwa-demo/_nuxt/37f65d08349d7df40e73.js",
    "revision": "7de152d7aa46a96112ae1f20329cefae"
  },
  {
    "url": "/vue-pwa-demo/_nuxt/60f3ba7563799348a711.js",
    "revision": "e686c3d8170cb2c7e76371f5216bb1f4"
  },
  {
    "url": "/vue-pwa-demo/_nuxt/849ee62b29b8fb211780.js",
    "revision": "24364af12b715a5dad47cb51fbf7cfe4"
  },
  {
    "url": "/vue-pwa-demo/_nuxt/9386fc12649cb50737ee.js",
    "revision": "e0a2bb2095162395736d52fea6e25a7d"
  },
  {
    "url": "/vue-pwa-demo/_nuxt/e706f1ef1a785b7d276b.js",
    "revision": "c4343dd9fdc642cb1120524210b29591"
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
