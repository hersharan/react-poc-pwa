/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("/workbox-v4.3.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/workbox-v4.3.0"});

importScripts(
  "/precache-manifest.fb0aad881296b91fcdfa2c64c8f51a50.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});

workbox.routing.registerRoute(/.(?:png|jpg|jpeg|svg|gif|css|js|mp4)/, new workbox.strategies.NetworkFirst({ "cacheName":"app-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 50, maxAgeSeconds: 31536000, purgeOnQuotaError: false }), new workbox.backgroundSync.Plugin("app", { maxRetentionTime: 3600 }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
