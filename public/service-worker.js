!function(){"use strict";const e=1608786049934,t=`cache${e}`,s=["/client/client.4febabe9.js","/client/inject_styles.5607aec6.js","/client/index.023c721a.js","/client/Sidebar.0bbf849d.js","/client/PostItem.f9f7d5fe.js","/client/Skills.41f31d38.js","/client/index.f4a78bc1.js","/client/default.7d421bce.js","/client/index.95d28a73.js","/client/index.f57e8b91.js","/client/svelte-sapper-tailwind-mdsvex-blog.d7052e66.js","/client/blog.dea5820c.js","/client/index.53d5042f.js","/client/line.dde9928b.js","/client/index.7cb147f4.js","/client/blogs-to-follow.560b65ac.js"].concat(["/service-worker-index.html","/apple-touch-icon-180.png","/css/global.css","/css/prism-nord.css","/favicon.png","/global.old.css","/img/posts/12-15-20/12-15-20_Screenshot01.png","/img/posts/12-15-20/12-15-20_Screenshot02.png","/img/posts/12-15-20/12-15-20_Screenshot03.png","/img/posts/12-15-20/12-15-20_Screenshot04.png","/img/posts/12-15-20/12-15-20_Screenshot05.png","/img/posts/12-15-20/Screenshot_2020-12-18 Force M4A Vote 🌹 on Twitter-01.png","/img/posts/12-15-20/Screenshot_2020-12-18 Force M4A Vote 🌹 on Twitter.png","/logo-192.png","/logo-512.png","/manifest.json","/screenshot-1.png","/svg/fluent_coffee.svg"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open(`offline${e}`).then((async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}})))))}))}();
