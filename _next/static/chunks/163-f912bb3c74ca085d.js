"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{5456:(e,t,n)=>{n.d(t,{m:()=>r});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},1536:(e,t,n)=>{n.d(t,{s:()=>u,t:()=>i});var r=n(107);function o(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function i(...e){return t=>{let n=!1,r=e.map(e=>{let r=o(e,t);return n||"function"!=typeof r||(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof n?n():o(e[t],null)}}}}function u(...e){return r.useCallback(i(...e),e)}},5604:(e,t,n)=>{n.d(t,{A:()=>u,q:()=>i});var r=n(107),o=n(475);function i(e,t){let n=r.createContext(t),i=e=>{let{children:t,...i}=e,u=r.useMemo(()=>i,Object.values(i));return(0,o.jsx)(n.Provider,{value:u,children:t})};return i.displayName=e+"Provider",[i,function(o){let i=r.useContext(n);if(i)return i;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function u(e,t=[]){let n=[],i=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return i.scopeName=e,[function(t,i){let u=r.createContext(i),l=n.length;n=[...n,i];let a=t=>{let{scope:n,children:i,...a}=t,s=n?.[e]?.[l]||u,c=r.useMemo(()=>a,Object.values(a));return(0,o.jsx)(s.Provider,{value:c,children:i})};return a.displayName=t+"Provider",[a,function(n,o){let a=o?.[e]?.[l]||u,s=r.useContext(a);if(s)return s;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(i,...t)]}},6137:(e,t,n)=>{n.d(t,{B:()=>a});var r,o=n(107),i=n(3155),u=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),l=0;function a(e){let[t,n]=o.useState(u());return(0,i.N)(()=>{e||n(e=>e??String(l++))},[e]),e||(t?`radix-${t}`:"")}},8485:(e,t,n)=>{n.d(t,{C:()=>u});var r=n(107),o=n(1536),i=n(3155),u=e=>{let{present:t,children:n}=e,u=function(e){var t,n;let[o,u]=r.useState(),a=r.useRef({}),s=r.useRef(e),c=r.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=l(a.current);c.current="mounted"===d?e:"none"},[d]),(0,i.N)(()=>{let t=a.current,n=s.current;if(n!==e){let r=c.current,o=l(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==o?f("ANIMATION_OUT"):f("UNMOUNT"),s.current=e}},[e,f]),(0,i.N)(()=>{if(o){var e;let t;let n=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=l(a.current).includes(e.animationName);if(e.target===o&&r&&(f("ANIMATION_END"),!s.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},i=e=>{e.target===o&&(c.current=l(a.current))};return o.addEventListener("animationstart",i),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{n.clearTimeout(t),o.removeEventListener("animationstart",i),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(a.current=getComputedStyle(e)),u(e)},[])}}(t),a="function"==typeof n?n({present:u.isPresent}):r.Children.only(n),s=(0,o.s)(u.ref,function(e){var t,n;let r=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?e.ref:(o=(r=null===(n=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(a));return"function"==typeof n||u.isPresent?r.cloneElement(a,{ref:s}):null};function l(e){return(null==e?void 0:e.animationName)||"none"}u.displayName="Presence"},1431:(e,t,n)=>{n.d(t,{hO:()=>a,sG:()=>l});var r=n(107),o=n(5642),i=n(7334),u=n(475),l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...o}=e,l=r?i.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,u.jsx)(l,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function a(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},7334:(e,t,n)=>{n.d(t,{DX:()=>u});var r=n(107),o=n(1536),i=n(475),u=r.forwardRef((e,t)=>{let{children:n,...o}=e,u=r.Children.toArray(n),a=u.find(s);if(a){let e=a.props.children,n=u.map(t=>t!==a?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,i.jsx)(l,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,i.jsx)(l,{...o,ref:t,children:n})});u.displayName="Slot";var l=r.forwardRef((e,t)=>{let{children:n,...i}=e;if(r.isValidElement(n)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n);return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(i,n.props),ref:t?(0,o.t)(t,e):e})}return r.Children.count(n)>1?r.Children.only(null):null});l.displayName="SlotClone";var a=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function s(e){return r.isValidElement(e)&&e.type===a}},8085:(e,t,n)=>{n.d(t,{c:()=>o});var r=n(107);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},7725:(e,t,n)=>{n.d(t,{i:()=>i});var r=n(107),o=n(8085);function i({prop:e,defaultProp:t,onChange:n=()=>{}}){let[i,u]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[i]=n,u=r.useRef(i),l=(0,o.c)(t);return r.useEffect(()=>{u.current!==i&&(l(i),u.current=i)},[i,u,l]),n}({defaultProp:t,onChange:n}),l=void 0!==e,a=l?e:i,s=(0,o.c)(n);return[a,r.useCallback(t=>{if(l){let n="function"==typeof t?t(e):t;n!==e&&s(n)}else u(t)},[l,e,u,s])]}},3155:(e,t,n)=>{n.d(t,{N:()=>o});var r=n(107),o=globalThis?.document?r.useLayoutEffect:()=>{}},7609:(e,t,n)=>{n.d(t,{F:()=>i});let r=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,o=function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var i=t.length;for(n=0;n<i;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(r&&(r+=" "),r+=t);return r},i=(e,t)=>n=>{var i;if((null==t?void 0:t.variants)==null)return o(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:u,defaultVariants:l}=t,a=Object.keys(u).map(e=>{let t=null==n?void 0:n[e],o=null==l?void 0:l[e];if(null===t)return null;let i=r(t)||r(o);return u[e][i]}),s=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return o(e,a,null==t?void 0:null===(i=t.compoundVariants)||void 0===i?void 0:i.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...l,...s}[t]):({...l,...s})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}},2673:(e,t,n)=>{n.d(t,{r:()=>r});let r=(0,n(7609).F)("inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50",{variants:{color:{outline:"border hover:bg-fd-accent hover:text-fd-accent-foreground",ghost:"hover:bg-fd-accent hover:text-fd-accent-foreground",secondary:"border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"},size:{sm:"gap-1 p-0.5 text-xs",icon:"p-1.5 [&_svg]:size-5"}}})}}]);