(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{76:(e,t,n)=>{Promise.resolve().then(n.bind(n,4142)),Promise.resolve().then(n.bind(n,3495)),Promise.resolve().then(n.t.bind(n,3627,23))},3495:(e,t,n)=>{"use strict";n.d(t,{default:()=>i});var r=n(475),l=n(107);let a=(0,n(9967).A)("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);var o=n(3552);let s=[{name:"默认",value:""},{name:"无衬线",value:"font-sans"},{name:"衬线",value:"font-serif"},{name:"等宽",value:"font-mono"}];function i(){let[e,t]=(0,l.useState)(!1),[n,i]=(0,l.useState)(""),u=e=>{i(e),document.body.className=e};return(0,r.jsxs)("div",{className:"fixed bottom-6 right-6 z-50 flex items-center justify-center",children:[(0,r.jsx)("div",{className:(0,o.QP)("absolute bottom-16 right-0 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm","rounded-2xl p-3 shadow-lg transition-all duration-300 origin-bottom-right",e?"scale-100 opacity-100":"scale-75 opacity-0 pointer-events-none"),children:(0,r.jsx)("div",{className:"flex flex-col gap-3",children:s.map((t,l)=>(0,r.jsx)("button",{onClick:()=>u(t.value),className:(0,o.QP)("w-10 h-10 rounded-xl flex items-center justify-center transition-all","bg-white dark:bg-zinc-800 shadow hover:shadow-md","hover:scale-105 active:scale-95",t.value,n===t.value&&"ring-2 ring-blue-500"),style:{transform:"translateY(".concat(e?0:20,"px)"),opacity:e?1:0,transitionDelay:"".concat(50*l,"ms")},children:(0,r.jsx)("span",{className:"text-lg select-none",children:"T"})},t.value))})}),(0,r.jsx)("button",{onClick:()=>t(!e),className:(0,o.QP)("w-12 h-12 rounded-xl shadow-lg","bg-white dark:bg-zinc-800","flex items-center justify-center","hover:shadow-xl transition-all","hover:scale-105 active:scale-95","focus:outline-none focus:ring-2 focus:ring-blue-500",e&&"bg-blue-50 dark:bg-blue-950"),children:(0,r.jsx)(a,{className:"h-5 w-5"})})]})}},4142:(e,t,n)=>{"use strict";n.d(t,{Provider:()=>m});var r=n(475),l=n(7475),a=n(7836),o=n.n(a),s=n(5289),i=n(2692),u=n(5448);n(3616),n(2500),n(2774);let d=o()(()=>Promise.all([n.e(103),n.e(380),n.e(405),n.e(769)]).then(n.bind(n,2769)),{loadableGenerated:{webpack:()=>[require.resolveWeak("./components/dialog/search-default")]},ssr:!1});function c(e){let{children:t,dir:n,theme:{enabled:a=!0,...o}={},search:c}=e,f=t;return(null==c?void 0:c.enabled)!==!1&&(f=(0,r.jsx)(u.Y,{SearchDialog:d,...c,children:f})),a&&(f=(0,r.jsx)(l.N,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,...o,children:f})),(0,r.jsx)(s.FX,{dir:null!=n?n:"ltr",children:(0,r.jsx)(i.G,{children:f})})}let f=o()(()=>Promise.all([n.e(103),n.e(380),n.e(405),n.e(402)]).then(n.bind(n,1402)),{loadableGenerated:{webpack:()=>[1402]}});function m(e){let{children:t}=e;return(0,r.jsx)(c,{search:{SearchDialog:f},children:t})}},7836:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(7342)._(n(4268));function l(e,t){var n;let l={};"function"==typeof e&&(l.loader=e);let a={...l,...t};return(0,r.default)({...a,modules:null==(n=a.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6939:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return l}});let r=n(3007);function l(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},4268:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=n(475),l=n(107),a=n(6939),o=n(3046);function s(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},u=function(e){let t={...i,...e},n=(0,l.lazy)(()=>t.loader().then(s)),u=t.loading;function d(e){let s=u?(0,r.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,i=!t.ssr||!!t.loading,d=i?l.Suspense:l.Fragment,c=t.ssr?(0,r.jsxs)(r.Fragment,{children:["undefined"==typeof window?(0,r.jsx)(o.PreloadChunks,{moduleIds:t.modules}):null,(0,r.jsx)(n,{...e})]}):(0,r.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(n,{...e})});return(0,r.jsx)(d,{...i?{fallback:s}:{},children:c})}return d.displayName="LoadableComponent",d}},3046:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return s}});let r=n(475),l=n(5642),a=n(2381),o=n(724);function s(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=a.workAsyncStorage.getStore();if(void 0===n)return null;let s=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files;s.push(...t)}}return 0===s.length?null:(0,r.jsx)(r.Fragment,{children:s.map(e=>{let t=n.assetPrefix+"/_next/"+(0,o.encodeURIPath)(e);return e.endsWith(".css")?(0,r.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,l.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},3627:()=>{},6544:(e,t,n)=>{"use strict";function r(e,t,n){let{includePage:r=!0,includeSeparator:l=!1,includeRoot:a}=n,o=[];return t.forEach((e,n)=>{if("separator"===e.type&&l&&o.push({name:e.name}),"folder"===e.type){let r=t.at(n+1);if(r&&e.index===r)return;if(e.root){o=[];return}o.push({name:e.name,url:e.index?.url})}"page"===e.type&&r&&o.push({name:e.name,url:e.url})}),a&&o.unshift({name:e.name,url:"object"==typeof a?a.url:void 0}),o}n.d(t,{Pp:()=>r,oe:()=>function e(t,n){let r;for(let l of t){if("separator"===l.type&&(r=l),"folder"===l.type){if(l.index?.url===n){let e=[];return r&&e.push(r),e.push(l,l.index),e}let t=e(l.children,n);if(t)return t.unshift(l),r&&t.unshift(r),t}if("page"===l.type&&l.url===n){let e=[];return r&&e.push(r),e.push(l),e}}return null}}),n(2969),n(107)},4399:(e,t,n)=>{"use strict";n.d(t,{T:()=>l});var r=n(107);function l(e,t,n=function e(t,n){return Array.isArray(t)&&Array.isArray(n)?n.length!==t.length||t.some((t,r)=>e(t,n[r])):t!==n}){let[a,o]=(0,r.useState)(e);n(a,e)&&(t(e,a),o(e))}},8991:(e,t,n)=>{"use strict";n.d(t,{GB:()=>i,Pg:()=>d,x2:()=>u}),n(2969);var r=n(107),l=n(3633),a=n(475),o=(0,r.createContext)(void 0);function s(){let e=(0,r.useContext)(o);if(!e)throw Error("Missing sidebar provider");return e}function i(e){var t,n;let[l,s]=(0,r.useState)(!1);return(0,a.jsx)(o.Provider,{value:[null!==(t=e.open)&&void 0!==t?t:l,null!==(n=e.onOpenChange)&&void 0!==n?n:s],children:e.children})}function u(e){let{as:t,...n}=e,[r,l]=s();return(0,a.jsx)(null!=t?t:"button",{"aria-label":"Toggle Sidebar","data-open":r,onClick:()=>{l(!r)},...n})}function d(e){let{as:t,blockScrollingWidth:n,...o}=e,[i]=s(),[u,d]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!n)return;let e=window.matchMedia("(min-width: ".concat(n.toString(),"px)")),t=()=>{d(!e.matches)};return t(),e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}},[n]),(0,a.jsx)(l.A,{as:null!=t?t:"aside","data-open":i,enabled:!!(u&&i),...o,children:o.children})}},7095:(e,t,n)=>{"use strict";n.d(t,{T:()=>r.T});var r=n(4399);n(2969)},2774:(e,t,n)=>{"use strict";n.d(t,{StylesProvider:()=>s,v:()=>o});var r=n(475),l=n(107);let a=(0,l.createContext)({tocNav:"xl:hidden",toc:"max-xl:hidden"});function o(){return(0,l.useContext)(a)}function s(e){let{children:t,...n}=e;return(0,r.jsx)(a.Provider,{value:n,children:t})}},5448:(e,t,n)=>{"use strict";n.d(t,{$:()=>o,SearchOnly:()=>u,Y:()=>i});var r=n(475),l=n(107);let a=(0,l.createContext)({enabled:!1,hotKey:[],setOpenSearch:()=>void 0});function o(){return(0,l.useContext)(a)}function s(){let[e,t]=(0,l.useState)("⌘");return(0,l.useEffect)(()=>{window.navigator.userAgent.includes("Windows")&&t("Ctrl")},[]),e}function i(e){let{SearchDialog:t,children:n,preload:o=!0,options:i,hotKey:u=[{key:e=>e.metaKey||e.ctrlKey,display:(0,r.jsx)(s,{})},{key:"k",display:"K"}],links:d}=e,[c,f]=(0,l.useState)(!o&&void 0);return(0,l.useEffect)(()=>{let e=e=>{u.every(t=>"string"==typeof t.key?e.key===t.key:t.key(e))&&(f(!0),e.preventDefault())};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[u]),(0,r.jsxs)(a.Provider,{value:(0,l.useMemo)(()=>({enabled:!0,hotKey:u,setOpenSearch:f}),[u]),children:[void 0!==c&&(0,r.jsx)(t,{open:c,onOpenChange:f,links:d,...i}),n]})}function u(e){let{children:t}=e;if(o().enabled)return t}},2692:(e,t,n)=>{"use strict";n.d(t,{G:()=>d,c:()=>u});var r=n(475),l=n(107),a=n(6118),o=n(8991),s=n(7095);let i=(0,l.createContext)(void 0);function u(){let e=(0,l.useContext)(i);if(!e)throw Error("Missing root provider");return e}function d({children:e}){let t=(0,l.useRef)(!0),[n,u]=(0,l.useState)(!1),[d,c]=(0,l.useState)(!1),f=(0,a.usePathname)();return(0,s.T)(f,()=>{t.current&&u(!1),t.current=!0}),(0,r.jsx)(i.Provider,{value:(0,l.useMemo)(()=>({open:n,setOpen:u,collapsed:d,setCollapsed:c,closeOnRedirect:t}),[n,d]),children:(0,r.jsx)(o.GB,{open:n,onOpenChange:u,children:e})})}},2500:(e,t,n)=>{"use strict";n.d(t,{L:()=>d,TreeContextProvider:()=>u,t:()=>c});var r=n(475),l=n(6118),a=n(107),o=n(6544);let s=(0,a.createContext)(null),i=(0,a.createContext)([]);function u(e){var t;let{children:n,tree:u}=e,d=(0,l.usePathname)(),c=(0,a.useMemo)(()=>{var e;return null!==(e=(0,o.oe)(u.children,d))&&void 0!==e?e:[]},[d,u]),f=null!==(t=c.findLast(e=>"folder"===e.type&&e.root))&&void 0!==t?t:u;return(0,r.jsx)(s.Provider,{value:(0,a.useMemo)(()=>({root:f}),[f]),children:(0,r.jsx)(i.Provider,{value:c,children:n})})}function d(){return(0,a.useContext)(i)}function c(){let e=(0,a.useContext)(s);if(!e)throw Error("You must wrap this component under <DocsLayout />");return e}},7475:(e,t,n)=>{"use strict";n.d(t,{D:()=>d,N:()=>c});var r=n(107),l=(e,t,n,r,l,a,o,s)=>{let i=document.documentElement,u=["light","dark"];function d(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&a?l.map(e=>a[e]||e):l;n?(i.classList.remove(...r),i.classList.add(t)):i.setAttribute(e,t)}),s&&u.includes(t)&&(i.style.colorScheme=t)}if(r)d(r);else try{let e=localStorage.getItem(t)||n,r=o&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;d(r)}catch(e){}},a=["light","dark"],o="(prefers-color-scheme: dark)",s="undefined"==typeof window,i=r.createContext(void 0),u={setTheme:e=>{},themes:[]},d=()=>{var e;return null!=(e=r.useContext(i))?e:u},c=e=>r.useContext(i)?r.createElement(r.Fragment,null,e.children):r.createElement(m,{...e}),f=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:l=!0,enableColorScheme:s=!0,storageKey:u="theme",themes:d=f,defaultTheme:c=l?"system":"light",attribute:m="data-theme",value:b,children:g,nonce:x,scriptProps:w}=e,[j,k]=r.useState(()=>p(u,c)),[C,P]=r.useState(()=>p(u)),S=b?Object.values(b):d,E=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&l&&(t=v());let r=b?b[t]:t,o=n?y(x):null,i=document.documentElement,u=e=>{"class"===e?(i.classList.remove(...S),r&&i.classList.add(r)):e.startsWith("data-")&&(r?i.setAttribute(e,r):i.removeAttribute(e))};if(Array.isArray(m)?m.forEach(u):u(m),s){let e=a.includes(c)?c:null,n=a.includes(t)?t:e;i.style.colorScheme=n}null==o||o()},[x]),T=r.useCallback(e=>{let t="function"==typeof e?e(j):e;k(t);try{localStorage.setItem(u,t)}catch(e){}},[j]),O=r.useCallback(e=>{P(v(e)),"system"===j&&l&&!t&&E("system")},[j,t]);r.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(O),O(e),()=>e.removeListener(O)},[O]),r.useEffect(()=>{let e=e=>{e.key===u&&(e.newValue?k(e.newValue):T(c))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),r.useEffect(()=>{E(null!=t?t:j)},[t,j]);let _=r.useMemo(()=>({theme:j,setTheme:T,forcedTheme:t,resolvedTheme:"system"===j?C:j,themes:l?[...d,"system"]:d,systemTheme:l?C:void 0}),[j,T,t,C,l,d]);return r.createElement(i.Provider,{value:_},r.createElement(h,{forcedTheme:t,storageKey:u,attribute:m,enableSystem:l,enableColorScheme:s,defaultTheme:c,value:b,themes:d,nonce:x,scriptProps:w}),g)},h=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:a,enableSystem:o,enableColorScheme:s,defaultTheme:i,value:u,themes:d,nonce:c,scriptProps:f}=e,m=JSON.stringify([a,n,i,t,d,u,o,s]).slice(1,-1);return r.createElement("script",{...f,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?c:"",dangerouslySetInnerHTML:{__html:"(".concat(l.toString(),")(").concat(m,")")}})}),p=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},y=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},v=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")}},e=>{var t=t=>e(e.s=t);e.O(0,[338,150,129,191,35,358],()=>t(76)),_N_E=e.O()}]);