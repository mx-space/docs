(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[905],{138:(e,t,r)=>{"use strict";r.d(t,{k5:()=>d});var n=r(4385),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),l=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var n,o,a;n=e,o=t,a=r[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(o))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e){return t=>n.createElement(u,i({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function u(e){var t=t=>{var r,{attr:o,size:a,title:s}=e,d=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,l),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,d,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(o)}},1121:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},1530:(e,t,r)=>{"use strict";r.d(t,{x:()=>o});var n=r(4385);function o(e){let[t,r]=(0,n.useState)(!1),o=(0,n.useRef)(null),a=(0,n.useRef)(e);a.current=e;let l=(0,n.useCallback)(()=>{o.current&&window.clearTimeout(o.current),o.current=window.setTimeout(()=>{r(!1)},1500),a.current(),r(!0)},[]);return(0,n.useEffect)(()=>()=>{o.current&&window.clearTimeout(o.current)},[]),[t,l]}},1776:(e,t,r)=>{"use strict";r.d(t,{Files:()=>f,Folder:()=>p});var n=r(3797),o=r(3833),a=r(2377);let l=(0,a.A)("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]),i=(0,a.A)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);var s=r(4385),c=r(1642),d=r(2882);let u=(0,o.F)("flex flex-row items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-fd-accent hover:text-fd-accent-foreground [&_svg]:size-4");function f(e){let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,c.QP)("not-prose rounded-md border bg-fd-card p-2",t),...r,children:r.children})}function p(e){let{name:t,defaultOpen:r=!1,...o}=e,[a,f]=(0,s.useState)(r);return(0,n.jsxs)(d.Nt,{open:a,onOpenChange:f,...o,children:[(0,n.jsxs)(d.R6,{className:(0,c.QP)(u({className:"w-full"})),children:[a?(0,n.jsx)(l,{}):(0,n.jsx)(i,{}),t]}),(0,n.jsx)(d.Ke,{children:(0,n.jsx)("div",{className:"ms-2 flex flex-col border-l ps-2",children:o.children})})]})}},2859:(e,t,r)=>{"use strict";var n=r(7232);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,l){if(l!==n){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},2882:(e,t,r)=>{"use strict";r.d(t,{Ke:()=>c,Nt:()=>i,R6:()=>s});var n=r(3797),o=r(9442),a=r(4385),l=r(1642);let i=o.bL,s=o.R6,c=(0,a.forwardRef)((e,t)=>{let{children:r,...i}=e,[s,c]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{c(!0)},[]),(0,n.jsx)(o.Ke,{ref:t,...i,className:(0,l.QP)("overflow-hidden",s&&"data-[state=closed]:animate-fd-collapsible-up data-[state=open]:animate-fd-collapsible-down",i.className),children:r})});c.displayName=o.Ke.displayName},2963:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var n=r(6050),o=r(4385),a=r(3797),l=(0,o.forwardRef)(({href:e="#",external:t=!(e.startsWith("/")||e.startsWith("#")||e.startsWith(".")),prefetch:r,replace:o,...l},i)=>t?(0,a.jsx)("a",{ref:i,href:e,rel:"noreferrer noopener",target:"_blank",...l,children:l.children}):(0,a.jsx)(n,{ref:i,href:e,prefetch:r,replace:o,...l}));l.displayName="Link",r(6579)},3787:(e,t,r)=>{"use strict";var n=r(1121),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,a,l,i,s,c,d,u,f=!1;t||(t={}),l=t.debug||!1;try{if(s=n(),c=document.createRange(),d=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){l&&console.warn("unable to use e.clipboardData"),l&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=o[t.format]||o.default;window.clipboardData.setData(n,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(u),c.selectNodeContents(u),d.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");f=!0}catch(n){l&&console.error("unable to copy using execCommand: ",n),l&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(n){l&&console.error("unable to copy using clipboardData: ",n),l&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",i=r.replace(/#{\s*key\s*}/g,a),window.prompt(i,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(c):d.removeAllRanges()),u&&document.body.removeChild(u),s()}return f}},3819:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(2377).A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},4041:(e,t,r)=>{e.exports=r(2859)()},4727:(e,t,r)=>{"use strict";r.d(t,{N:()=>s});var n=r(4385),o=r(1250),a=r(7588),l=r(8181),i=r(3797);function s(e){let t=e+"CollectionProvider",[r,s]=(0,o.A)(t),[c,d]=r(t,{collectionRef:{current:null},itemMap:new Map}),u=e=>{let{scope:t,children:r}=e,o=n.useRef(null),a=n.useRef(new Map).current;return(0,i.jsx)(c,{scope:t,itemMap:a,collectionRef:o,children:r})};u.displayName=t;let f=e+"CollectionSlot",p=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,o=d(f,r),s=(0,a.s)(t,o.collectionRef);return(0,i.jsx)(l.DX,{ref:s,children:n})});p.displayName=f;let m=e+"CollectionItemSlot",v="data-radix-collection-item",h=n.forwardRef((e,t)=>{let{scope:r,children:o,...s}=e,c=n.useRef(null),u=(0,a.s)(t,c),f=d(m,r);return n.useEffect(()=>(f.itemMap.set(c,{ref:c,...s}),()=>void f.itemMap.delete(c))),(0,i.jsx)(l.DX,{[v]:"",ref:u,children:o})});return h.displayName=m,[{Provider:u,Slot:p,ItemSlot:h},function(t){let r=d(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(v,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},s]}},6086:(e,t,r)=>{"use strict";r.d(t,{default:()=>o.a});var n=r(7653),o=r.n(n)},6974:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(4385),o=r(4041),a=r.n(o);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i=(0,n.forwardRef)(function(e,t){var r=e.color,o=e.size,a=void 0===o?24:o,i=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["color","size"]);return n.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),n.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))});i.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},i.displayName="GitHub";let s=i},7141:(e,t,r)=>{"use strict";r.d(t,{C:()=>l,Z:()=>i});var n=r(3797),o=r(2963),a=r(1642);function l(e){return(0,n.jsx)("div",{...e,className:(0,a.QP)("grid grid-cols-2 gap-4 @container",e.className),children:e.children})}function i({icon:e,title:t,description:r,...l}){let i=l.href?o.A:"div";return(0,n.jsxs)(i,{...l,"data-card":!0,className:(0,a.QP)("block rounded-lg border bg-fd-card p-4 text-fd-card-foreground shadow-md transition-colors @max-lg:col-span-full",l.href&&"hover:bg-fd-accent/80",l.className),children:[e?(0,n.jsx)("div",{className:"not-prose mb-2 w-fit rounded-md border bg-fd-muted p-1.5 text-fd-muted-foreground [&_svg]:size-4",children:e}):null,(0,n.jsx)("h3",{className:"not-prose mb-1 text-sm font-medium",children:t}),r?(0,n.jsx)("p",{className:"my-0 text-sm text-fd-muted-foreground",children:r}):null,l.children?(0,n.jsx)("div",{className:"text-sm text-fd-muted-foreground prose-no-margin",children:l.children}):null]})}},7193:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Accordion:()=>Z,Accordions:()=>X});var n=r(3797),o=r(4385),a=r(1250),l=r(4727),i=r(7588),s=r(4557),c=r(655),d=r(6553),u=r(9442),f=r(1887),p=r(8891),m="Accordion",v=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[h,g,b]=(0,l.N)(m),[y,x]=(0,a.A)(m,[b,u.z3]),w=(0,u.z3)(),j=o.forwardRef((e,t)=>{let{type:r,...o}=e;return(0,n.jsx)(h.Provider,{scope:e.__scopeAccordion,children:"multiple"===r?(0,n.jsx)(k,{...o,ref:t}):(0,n.jsx)(A,{...o,ref:t})})});j.displayName=m;var[C,N]=y(m),[O,R]=y(m,{collapsible:!1}),A=o.forwardRef((e,t)=>{let{value:r,defaultValue:a,onValueChange:l=()=>{},collapsible:i=!1,...s}=e,[d,u]=(0,c.i)({prop:r,defaultProp:a,onChange:l});return(0,n.jsx)(C,{scope:e.__scopeAccordion,value:d?[d]:[],onItemOpen:u,onItemClose:o.useCallback(()=>i&&u(""),[i,u]),children:(0,n.jsx)(O,{scope:e.__scopeAccordion,collapsible:i,children:(0,n.jsx)(S,{...s,ref:t})})})}),k=o.forwardRef((e,t)=>{let{value:r,defaultValue:a,onValueChange:l=()=>{},...i}=e,[s=[],d]=(0,c.i)({prop:r,defaultProp:a,onChange:l}),u=o.useCallback(e=>d(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...t,e]}),[d]),f=o.useCallback(e=>d(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(t=>t!==e)}),[d]);return(0,n.jsx)(C,{scope:e.__scopeAccordion,value:s,onItemOpen:u,onItemClose:f,children:(0,n.jsx)(O,{scope:e.__scopeAccordion,collapsible:!0,children:(0,n.jsx)(S,{...i,ref:t})})})}),[P,E]=y(m),S=o.forwardRef((e,t)=>{let{__scopeAccordion:r,disabled:a,dir:l,orientation:c="vertical",...u}=e,f=o.useRef(null),m=(0,i.s)(f,t),b=g(r),y="ltr"===(0,p.jH)(l),x=(0,s.m)(e.onKeyDown,e=>{var t;if(!v.includes(e.key))return;let r=e.target,n=b().filter(e=>{var t;return!(null===(t=e.ref.current)||void 0===t?void 0:t.disabled)}),o=n.findIndex(e=>e.ref.current===r),a=n.length;if(-1===o)return;e.preventDefault();let l=o,i=a-1,s=()=>{(l=o+1)>i&&(l=0)},d=()=>{(l=o-1)<0&&(l=i)};switch(e.key){case"Home":l=0;break;case"End":l=i;break;case"ArrowRight":"horizontal"===c&&(y?s():d());break;case"ArrowDown":"vertical"===c&&s();break;case"ArrowLeft":"horizontal"===c&&(y?d():s());break;case"ArrowUp":"vertical"===c&&d()}null===(t=n[l%a].ref.current)||void 0===t||t.focus()});return(0,n.jsx)(P,{scope:r,disabled:a,direction:l,orientation:c,children:(0,n.jsx)(h.Slot,{scope:r,children:(0,n.jsx)(d.sG.div,{...u,"data-orientation":c,ref:m,onKeyDown:a?void 0:x})})})}),D="AccordionItem",[_,I]=y(D),T=o.forwardRef((e,t)=>{let{__scopeAccordion:r,value:o,...a}=e,l=E(D,r),i=N(D,r),s=w(r),c=(0,f.B)(),d=o&&i.value.includes(o)||!1,p=l.disabled||e.disabled;return(0,n.jsx)(_,{scope:r,open:d,disabled:p,triggerId:c,children:(0,n.jsx)(u.bL,{"data-orientation":l.orientation,"data-state":Q(d),...s,...a,ref:t,disabled:p,open:d,onOpenChange:e=>{e?i.onItemOpen(o):i.onItemClose(o)}})})});T.displayName=D;var z="AccordionHeader",L=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...o}=e,a=E(m,r),l=I(z,r);return(0,n.jsx)(d.sG.h3,{"data-orientation":a.orientation,"data-state":Q(l.open),"data-disabled":l.disabled?"":void 0,...o,ref:t})});L.displayName=z;var M="AccordionTrigger",U=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...o}=e,a=E(m,r),l=I(M,r),i=R(M,r),s=w(r);return(0,n.jsx)(h.ItemSlot,{scope:r,children:(0,n.jsx)(u.l9,{"aria-disabled":l.open&&!i.collapsible||void 0,"data-orientation":a.orientation,id:l.triggerId,...s,...o,ref:t})})});U.displayName=M;var H="AccordionContent",F=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...o}=e,a=E(m,r),l=I(H,r),i=w(r);return(0,n.jsx)(u.UC,{role:"region","aria-labelledby":l.triggerId,"data-orientation":a.orientation,...i,...o,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function Q(e){return e?"open":"closed"}F.displayName=H;var W=r(3819),G=r(7383);let K=(0,r(2377).A)("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);var q=r(1642),V=r(1530),B=r(6142);let X=(0,o.forwardRef)((e,t)=>{let{type:r="single",className:a,defaultValue:l,...i}=e,[s,c]=(0,o.useState)("single"===r?null!=l?l:"":null!=l?l:[]);return(0,o.useEffect)(()=>{let e=window.location.hash.substring(1);e.length>0&&c(t=>"string"==typeof t?e:[e,...t])},[]),(0,n.jsx)(j,{type:r,ref:t,value:s,onValueChange:c,collapsible:"single"===r||void 0,className:(0,q.QP)("divide-y divide-fd-border overflow-hidden rounded-lg border bg-fd-card",a),...i})});X.displayName="Accordions";let Z=(0,o.forwardRef)((e,t)=>{let{title:r,className:o,id:a,children:l,...i}=e;return(0,n.jsxs)(T,{ref:t,value:null!=a?a:r,className:(0,q.QP)("group/accordion relative scroll-m-20",o),...i,children:[(0,n.jsxs)(L,{id:a,className:"not-prose flex flex-row items-center text-fd-card-foreground font-medium has-focus-visible:bg-fd-accent",children:[(0,n.jsxs)(U,{className:"flex flex-1 items-center gap-2 px-4 py-2.5 text-start focus-visible:outline-none",children:[(0,n.jsx)(W.A,{className:"-ms-1 size-4 shrink-0 text-fd-muted-foreground transition-transform duration-200 group-data-[state=open]/accordion:rotate-90"}),r]}),a?(0,n.jsx)(Y,{id:a}):null]}),(0,n.jsx)(F,{className:"overflow-hidden data-[state=closed]:animate-fd-accordion-up data-[state=open]:animate-fd-accordion-down",children:(0,n.jsx)("div",{className:"px-4 py-2 prose-no-margin",children:l})})]})});function Y(e){let{id:t}=e,[r,o]=(0,V.x)(()=>{let e=new URL(window.location.href);e.hash=t,navigator.clipboard.writeText(e.toString())});return(0,n.jsx)("button",{type:"button","aria-label":"Copy Link",className:(0,q.QP)((0,B.r)({color:"ghost",className:"text-fd-muted-foreground me-2"})),onClick:o,children:r?(0,n.jsx)(G.A,{className:"size-3.5"}):(0,n.jsx)(K,{className:"size-3.5"})})}Z.displayName="Accordion"},7232:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7383:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(2377).A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},7653:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return i}});let n=r(4975),o=r(6443),a=r(6271),l=n._(r(1425));function i(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=a.Image},9442:(e,t,r)=>{"use strict";r.d(t,{Ke:()=>j,R6:()=>x,UC:()=>A,bL:()=>O,l9:()=>R,z3:()=>v});var n=r(4385),o=r(4557),a=r(1250),l=r(655),i=r(7777),s=r(7588),c=r(6553),d=r(8721),u=r(1887),f=r(3797),p="Collapsible",[m,v]=(0,a.A)(p),[h,g]=m(p),b=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,open:o,defaultOpen:a,disabled:i,onOpenChange:s,...d}=e,[p=!1,m]=(0,l.i)({prop:o,defaultProp:a,onChange:s});return(0,f.jsx)(h,{scope:r,disabled:i,contentId:(0,u.B)(),open:p,onOpenToggle:n.useCallback(()=>m(e=>!e),[m]),children:(0,f.jsx)(c.sG.div,{"data-state":N(p),"data-disabled":i?"":void 0,...d,ref:t})})});b.displayName=p;var y="CollapsibleTrigger",x=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,...n}=e,a=g(y,r);return(0,f.jsx)(c.sG.button,{type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":N(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled,...n,ref:t,onClick:(0,o.m)(e.onClick,a.onOpenToggle)})});x.displayName=y;var w="CollapsibleContent",j=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,o=g(w,e.__scopeCollapsible);return(0,f.jsx)(d.C,{present:r||o.open,children:e=>{let{present:r}=e;return(0,f.jsx)(C,{...n,ref:t,present:r})}})});j.displayName=w;var C=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,present:o,children:a,...l}=e,d=g(w,r),[u,p]=n.useState(o),m=n.useRef(null),v=(0,s.s)(t,m),h=n.useRef(0),b=h.current,y=n.useRef(0),x=y.current,j=d.open||u,C=n.useRef(j),O=n.useRef(void 0);return n.useEffect(()=>{let e=requestAnimationFrame(()=>C.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,i.N)(()=>{let e=m.current;if(e){O.current=O.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();h.current=t.height,y.current=t.width,C.current||(e.style.transitionDuration=O.current.transitionDuration,e.style.animationName=O.current.animationName),p(o)}},[d.open,o]),(0,f.jsx)(c.sG.div,{"data-state":N(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!j,...l,ref:v,style:{"--radix-collapsible-content-height":b?"".concat(b,"px"):void 0,"--radix-collapsible-content-width":x?"".concat(x,"px"):void 0,...e.style},children:j&&a})});function N(e){return e?"open":"closed"}var O=b,R=x,A=j}}]);