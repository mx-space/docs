(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411],{460:(e,t,r)=>{"use strict";var n=r(2848),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,o,i,l,s,c,d,u,p=!1;t||(t={}),i=t.debug||!1;try{if(s=n(),c=document.createRange(),d=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=a[t.format]||a.default;window.clipboardData.setData(n,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(u),c.selectNodeContents(u),d.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");p=!0}catch(n){i&&console.error("unable to copy using execCommand: ",n),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(n){i&&console.error("unable to copy using clipboardData: ",n),i&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",o=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",l=r.replace(/#{\s*key\s*}/g,o),window.prompt(l,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(c):d.removeAllRanges()),u&&document.body.removeChild(u),s()}return p}},4754:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(9967).A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},5682:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(9967).A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},8177:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(9967).A)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]])},4629:(e,t,r)=>{"use strict";r.d(t,{default:()=>a.a});var n=r(6954),a=r.n(n)},6954:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return l}});let n=r(7342),a=r(9090),o=r(5354),i=n._(r(4354));function l(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=o.Image},546:(e,t,r)=>{"use strict";var n=r(7213);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,i){if(i!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r,r}},3318:(e,t,r)=>{e.exports=r(546)()},7213:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3195:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(107),a=r(3318),o=r.n(a);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=(0,n.forwardRef)(function(e,t){var r=e.color,a=e.size,o=void 0===a?24:a,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["color","size"]);return n.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))});l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="GitHub";let s=l},2848:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},7739:(e,t,r)=>{"use strict";r.d(t,{Ke:()=>j,R6:()=>y,UC:()=>R,bL:()=>N,l9:()=>k,z3:()=>h});var n=r(107),a=r(5456),o=r(938),i=r(1255),l=r(8013),s=r(4598),c=r(4670),d=r(5439),u=r(2763),p=r(475),f="Collapsible",[m,h]=(0,o.A)(f),[g,v]=m(f),b=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,open:a,defaultOpen:o,disabled:l,onOpenChange:s,...d}=e,[f=!1,m]=(0,i.i)({prop:a,defaultProp:o,onChange:s});return(0,p.jsx)(g,{scope:r,disabled:l,contentId:(0,u.B)(),open:f,onOpenToggle:n.useCallback(()=>m(e=>!e),[m]),children:(0,p.jsx)(c.sG.div,{"data-state":A(f),"data-disabled":l?"":void 0,...d,ref:t})})});b.displayName=f;var x="CollapsibleTrigger",y=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,...n}=e,o=v(x,r);return(0,p.jsx)(c.sG.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":A(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...n,ref:t,onClick:(0,a.m)(e.onClick,o.onOpenToggle)})});y.displayName=x;var w="CollapsibleContent",j=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,a=v(w,e.__scopeCollapsible);return(0,p.jsx)(d.C,{present:r||a.open,children:e=>{let{present:r}=e;return(0,p.jsx)(C,{...n,ref:t,present:r})}})});j.displayName=w;var C=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,present:a,children:o,...i}=e,d=v(w,r),[u,f]=n.useState(a),m=n.useRef(null),h=(0,s.s)(t,m),g=n.useRef(0),b=g.current,x=n.useRef(0),y=x.current,j=d.open||u,C=n.useRef(j),N=n.useRef(void 0);return n.useEffect(()=>{let e=requestAnimationFrame(()=>C.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,l.N)(()=>{let e=m.current;if(e){N.current=N.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();g.current=t.height,x.current=t.width,C.current||(e.style.transitionDuration=N.current.transitionDuration,e.style.animationName=N.current.animationName),f(a)}},[d.open,a]),(0,p.jsx)(c.sG.div,{"data-state":A(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!j,...i,ref:h,style:{"--radix-collapsible-content-height":b?"".concat(b,"px"):void 0,"--radix-collapsible-content-width":y?"".concat(y,"px"):void 0,...e.style},children:j&&o})});function A(e){return e?"open":"closed"}var N=b,k=y,R=j},5877:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Accordion:()=>X,Accordions:()=>Z});var n=r(475),a=r(107),o=r(938),i=r(9178),l=r(4598),s=r(5456),c=r(1255),d=r(4670),u=r(7739),p=r(2763),f=r(5289),m="Accordion",h=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[g,v,b]=(0,i.N)(m),[x,y]=(0,o.A)(m,[b,u.z3]),w=(0,u.z3)(),j=a.forwardRef((e,t)=>{let{type:r,...a}=e;return(0,n.jsx)(g.Provider,{scope:e.__scopeAccordion,children:"multiple"===r?(0,n.jsx)(O,{...a,ref:t}):(0,n.jsx)(R,{...a,ref:t})})});j.displayName=m;var[C,A]=x(m),[N,k]=x(m,{collapsible:!1}),R=a.forwardRef((e,t)=>{let{value:r,defaultValue:o,onValueChange:i=()=>{},collapsible:l=!1,...s}=e,[d,u]=(0,c.i)({prop:r,defaultProp:o,onChange:i});return(0,n.jsx)(C,{scope:e.__scopeAccordion,value:d?[d]:[],onItemOpen:u,onItemClose:a.useCallback(()=>l&&u(""),[l,u]),children:(0,n.jsx)(N,{scope:e.__scopeAccordion,collapsible:l,children:(0,n.jsx)(P,{...s,ref:t})})})}),O=a.forwardRef((e,t)=>{let{value:r,defaultValue:o,onValueChange:i=()=>{},...l}=e,[s=[],d]=(0,c.i)({prop:r,defaultProp:o,onChange:i}),u=a.useCallback(e=>d(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...t,e]}),[d]),p=a.useCallback(e=>d(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(t=>t!==e)}),[d]);return(0,n.jsx)(C,{scope:e.__scopeAccordion,value:s,onItemOpen:u,onItemClose:p,children:(0,n.jsx)(N,{scope:e.__scopeAccordion,collapsible:!0,children:(0,n.jsx)(P,{...l,ref:t})})})}),[_,D]=x(m),P=a.forwardRef((e,t)=>{let{__scopeAccordion:r,disabled:o,dir:i,orientation:c="vertical",...u}=e,p=a.useRef(null),m=(0,l.s)(p,t),b=v(r),x="ltr"===(0,f.jH)(i),y=(0,s.m)(e.onKeyDown,e=>{var t;if(!h.includes(e.key))return;let r=e.target,n=b().filter(e=>{var t;return!(null===(t=e.ref.current)||void 0===t?void 0:t.disabled)}),a=n.findIndex(e=>e.ref.current===r),o=n.length;if(-1===a)return;e.preventDefault();let i=a,l=o-1,s=()=>{(i=a+1)>l&&(i=0)},d=()=>{(i=a-1)<0&&(i=l)};switch(e.key){case"Home":i=0;break;case"End":i=l;break;case"ArrowRight":"horizontal"===c&&(x?s():d());break;case"ArrowDown":"vertical"===c&&s();break;case"ArrowLeft":"horizontal"===c&&(x?d():s());break;case"ArrowUp":"vertical"===c&&d()}null===(t=n[i%o].ref.current)||void 0===t||t.focus()});return(0,n.jsx)(_,{scope:r,disabled:o,direction:i,orientation:c,children:(0,n.jsx)(g.Slot,{scope:r,children:(0,n.jsx)(d.sG.div,{...u,"data-orientation":c,ref:m,onKeyDown:o?void 0:y})})})}),E="AccordionItem",[I,T]=x(E),S=a.forwardRef((e,t)=>{let{__scopeAccordion:r,value:a,...o}=e,i=D(E,r),l=A(E,r),s=w(r),c=(0,p.B)(),d=a&&l.value.includes(a)||!1,f=i.disabled||e.disabled;return(0,n.jsx)(I,{scope:r,open:d,disabled:f,triggerId:c,children:(0,n.jsx)(u.bL,{"data-orientation":i.orientation,"data-state":G(d),...s,...o,ref:t,disabled:f,open:d,onOpenChange:e=>{e?l.onItemOpen(a):l.onItemClose(a)}})})});S.displayName=E;var z="AccordionHeader",L=a.forwardRef((e,t)=>{let{__scopeAccordion:r,...a}=e,o=D(m,r),i=T(z,r);return(0,n.jsx)(d.sG.h3,{"data-orientation":o.orientation,"data-state":G(i.open),"data-disabled":i.disabled?"":void 0,...a,ref:t})});L.displayName=z;var U="AccordionTrigger",H=a.forwardRef((e,t)=>{let{__scopeAccordion:r,...a}=e,o=D(m,r),i=T(U,r),l=k(U,r),s=w(r);return(0,n.jsx)(g.ItemSlot,{scope:r,children:(0,n.jsx)(u.l9,{"aria-disabled":i.open&&!l.collapsible||void 0,"data-orientation":o.orientation,id:i.triggerId,...s,...a,ref:t})})});H.displayName=U;var M="AccordionContent",F=a.forwardRef((e,t)=>{let{__scopeAccordion:r,...a}=e,o=D(m,r),i=T(M,r),l=w(r);return(0,n.jsx)(u.UC,{role:"region","aria-labelledby":i.triggerId,"data-orientation":o.orientation,...l,...a,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function G(e){return e?"open":"closed"}F.displayName=M;var Q=r(5682),K=r(4754);let V=(0,r(9967).A)("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);var q=r(3552),B=r(7670),W=r(7695);let Z=(0,a.forwardRef)((e,t)=>{let{type:r="single",className:o,defaultValue:i,...l}=e,[s,c]=(0,a.useState)("single"===r?null!=i?i:"":null!=i?i:[]);return(0,a.useEffect)(()=>{let e=window.location.hash.substring(1);e.length>0&&c(t=>"string"==typeof t?e:[e,...t])},[]),(0,n.jsx)(j,{type:r,ref:t,value:s,onValueChange:c,collapsible:"single"===r||void 0,className:(0,q.QP)("divide-y divide-fd-border overflow-hidden rounded-lg border bg-fd-card",o),...l})});Z.displayName="Accordions";let X=(0,a.forwardRef)((e,t)=>{let{title:r,className:a,id:o,children:i,...l}=e;return(0,n.jsxs)(S,{ref:t,value:null!=o?o:r,className:(0,q.QP)("group/accordion relative scroll-m-20",a),...l,children:[(0,n.jsxs)(L,{id:o,className:"not-prose flex flex-row items-center font-medium text-fd-foreground",children:[(0,n.jsxs)(H,{className:"flex flex-1 items-center gap-2 p-4 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring",children:[(0,n.jsx)(Q.A,{className:"-ms-1 size-4 shrink-0 text-fd-muted-foreground transition-transform duration-200 group-data-[state=open]/accordion:rotate-90"}),r]}),o?(0,n.jsx)(Y,{id:o}):null]}),(0,n.jsx)(F,{className:"overflow-hidden data-[state=closed]:animate-fd-accordion-up data-[state=open]:animate-fd-accordion-down",children:(0,n.jsx)("div",{className:"p-4 pt-0 prose-no-margin",children:i})})]})});function Y(e){let{id:t}=e,[r,a]=(0,B.x)(()=>{let e=new URL(window.location.href);e.hash=t,navigator.clipboard.writeText(e.toString())});return(0,n.jsx)("button",{type:"button","aria-label":"Copy Link",className:(0,q.QP)((0,W.r)({color:"ghost",className:"text-fd-muted-foreground me-2"})),onClick:a,children:r?(0,n.jsx)(K.A,{className:"size-3.5"}):(0,n.jsx)(V,{className:"size-3.5"})})}X.displayName="Accordion"},8638:(e,t,r)=>{"use strict";r.d(t,{C:()=>i,Z:()=>l});var n=r(475),a=r(1807),o=r(3552);function i(e){return(0,n.jsx)("div",{...e,className:(0,o.QP)("grid grid-cols-1 gap-4 sm:grid-cols-2",e.className),children:e.children})}function l({icon:e,title:t,description:r,...i}){let l=i.href?a.A:"div";return(0,n.jsxs)(l,{...i,"data-card":!0,className:(0,o.QP)("block rounded-lg border bg-fd-card p-4 text-fd-card-foreground shadow-md transition-colors",i.href&&"hover:bg-fd-accent/80",i.className),children:[e?(0,n.jsx)("div",{className:"not-prose mb-2 w-fit rounded-md border bg-fd-muted p-1.5 text-fd-muted-foreground [&_svg]:size-4",children:e}):null,(0,n.jsx)("h3",{className:"not-prose mb-1 text-sm font-medium",children:t}),r?(0,n.jsx)("p",{className:"my-0 text-sm text-fd-muted-foreground",children:r}):null,i.children?(0,n.jsx)("div",{className:"text-sm text-fd-muted-foreground prose-no-margin",children:i.children}):null]})}},7999:(e,t,r)=>{"use strict";r.d(t,{Files:()=>p,Folder:()=>f});var n=r(475),a=r(7609),o=r(9967);let i=(0,o.A)("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]),l=(0,o.A)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);var s=r(107),c=r(3552),d=r(9125);let u=(0,a.F)("flex flex-row items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-fd-accent hover:text-fd-accent-foreground [&_svg]:size-4");function p(e){let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,c.QP)("not-prose rounded-md border bg-fd-card p-2",t),...r,children:r.children})}function f(e){let{name:t,defaultOpen:r=!1,...a}=e,[o,p]=(0,s.useState)(r);return(0,n.jsxs)(d.Nt,{open:o,onOpenChange:p,...a,children:[(0,n.jsxs)(d.R6,{className:(0,c.QP)(u({className:"w-full"})),children:[o?(0,n.jsx)(i,{}):(0,n.jsx)(l,{}),t]}),(0,n.jsx)(d.Ke,{children:(0,n.jsx)("div",{className:"ms-2 flex flex-col border-l ps-2",children:a.children})})]})}},9125:(e,t,r)=>{"use strict";r.d(t,{Ke:()=>c,Nt:()=>l,R6:()=>s});var n=r(475),a=r(7739),o=r(107),i=r(3552);let l=a.bL,s=a.R6,c=(0,o.forwardRef)(({children:e,...t},r)=>(0,n.jsx)(a.Ke,{ref:r,...t,className:(0,i.QP)("overflow-hidden [--radix-collapsible-content-height:0px] data-[state=closed]:animate-fd-collapsible-up data-[state=open]:animate-fd-collapsible-down",t.className),children:e}));c.displayName=a.Ke.displayName},7670:(e,t,r)=>{"use strict";r.d(t,{x:()=>a});var n=r(107);function a(e){let[t,r]=(0,n.useState)(!1),a=(0,n.useRef)(null),o=(0,n.useRef)(e);o.current=e;let i=(0,n.useCallback)(()=>{a.current&&window.clearTimeout(a.current),a.current=window.setTimeout(()=>{r(!1)},1500),o.current(),r(!0)},[]);return(0,n.useEffect)(()=>()=>{a.current&&window.clearTimeout(a.current)},[]),[t,i]}}}]);