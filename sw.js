if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const d=e=>i(e,r),l={module:{uri:r},exports:o,require:d};s[r]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(t(...e),o)))}}define(["./workbox-958fa2bd"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.671451f7.js",revision:null},{url:"index.html",revision:"6287801b625868128e1bfafe6b1d17d2"},{url:"registerSW.js",revision:"48f41930ac4d3067476d5661cfab1ab8"},{url:"manifest.webmanifest",revision:"c1c925adaf1c3d116d1a038322c7e90d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
