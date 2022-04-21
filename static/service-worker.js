const timestamp = {
  toString: () => {
    throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
  }
};
const build = [
  "/_app/start-72113912.js",
  "/_app/pages/__layout.svelte-c9440b3d.js",
  "/_app/assets/pages/__layout.svelte-e10a50ff.css",
  "/_app/pages/__error.svelte-ecc032e8.js",
  "/_app/assets/pages/__error.svelte-f4d462d2.css",
  "/_app/pages/_slug_.svelte-c8e30ff0.js",
  "/_app/assets/pages/_slug_.svelte-00228b88.css",
  "/_app/pages/blog.svelte-28e52652.js",
  "/_app/assets/pages/blog.svelte-24ce6b02.css",
  "/_app/pages/feedback.svelte-8627d0bd.js",
  "/_app/assets/pages/feedback.svelte-3883cfeb.css",
  "/_app/pages/index.svelte-6a4c2071.js",
  "/_app/pages/journal.svx-1f258753.js",
  "/_app/pages/privacy.svelte-f4fb1b42.js",
  "/_app/assets/pages/privacy.svelte-08527ab4.css",
  "/_app/pages/rights.svelte-258eb1e2.js",
  "/_app/assets/pages/rights.svelte-9eefd7aa.css",
  "/_app/chunks/index-b4b4d9a3.js",
  "/_app/chunks/index-8674afa1.js",
  "/_app/chunks/siteConfig-6f06debc.js"
];
const name = `cache-${timestamp}`;
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(name).then((cache) => cache.addAll(build)));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (!key.includes(String(timestamp)))
        caches.delete(key);
    }
  }));
});
self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET" || request.headers.has("range"))
    return;
  const url = new URL(request.url);
  const cached = caches.match(request);
  if (url.origin === location.origin && build.includes(url.pathname)) {
    event.respondWith(cached);
  } else if (url.protocol === "https:" || location.hostname === "localhost") {
    const promise = fetch(request);
    promise.then((response) => {
      if (response.ok && response.type === "basic") {
        const clone = response.clone();
        caches.open(name).then((cache) => {
          cache.put(request, clone);
        });
      }
    });
    event.respondWith(promise.catch(() => cached || promise));
  }
});
