"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[624],{6544:(e,r,t)=>{function n(e,r,t){let{includePage:n=!0,includeSeparator:o=!1,includeRoot:l}=t,i=[];return r.forEach((e,t)=>{if("separator"===e.type&&o&&i.push({name:e.name}),"folder"===e.type){let n=r.at(t+1);if(n&&e.index===n)return;if(e.root){i=[];return}i.push({name:e.name,url:e.index?.url})}"page"===e.type&&n&&i.push({name:e.name,url:e.url})}),l&&i.unshift({name:e.name,url:"object"==typeof l?l.url:void 0}),i}t.d(r,{Pp:()=>n,oe:()=>function e(r,t){let n;for(let o of r){if("separator"===o.type&&(n=o),"folder"===o.type){if(o.index?.url===t){let e=[];return n&&e.push(n),e.push(o,o.index),e}let r=e(o.children,t);if(r)return r.unshift(o),n&&r.unshift(n),r}if("page"===o.type&&o.url===t){let e=[];return n&&e.push(n),e.push(o),e}}return null}}),t(2969),t(107)},4399:(e,r,t)=>{t.d(r,{T:()=>o});var n=t(107);function o(e,r,t=function e(r,t){return Array.isArray(r)&&Array.isArray(t)?t.length!==r.length||r.some((r,n)=>e(r,t[n])):r!==t}){let[l,i]=(0,n.useState)(e);t(l,e)&&(r(e,l),i(e))}},8991:(e,r,t)=>{t.d(r,{GB:()=>s,Pg:()=>u,x2:()=>c}),t(2969);var n=t(107),o=t(3633),l=t(475),i=(0,n.createContext)(void 0);function a(){let e=(0,n.useContext)(i);if(!e)throw Error("Missing sidebar provider");return e}function s(e){var r,t;let[o,a]=(0,n.useState)(!1);return(0,l.jsx)(i.Provider,{value:[null!==(r=e.open)&&void 0!==r?r:o,null!==(t=e.onOpenChange)&&void 0!==t?t:a],children:e.children})}function c(e){let{as:r,...t}=e,[n,o]=a();return(0,l.jsx)(null!=r?r:"button",{"aria-label":"Toggle Sidebar","data-open":n,onClick:()=>{o(!n)},...t})}function u(e){let{as:r,blockScrollingWidth:t,...i}=e,[s]=a(),[c,u]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(!t)return;let e=window.matchMedia("(min-width: ".concat(t.toString(),"px)")),r=()=>{u(!e.matches)};return r(),e.addEventListener("change",r),()=>{e.removeEventListener("change",r)}},[t]),(0,l.jsx)(o.A,{as:null!=r?r:"aside","data-open":s,enabled:!!(c&&s),...i,children:i.children})}},7095:(e,r,t)=>{t.d(r,{T:()=>n.T});var n=t(4399);t(2969)},8651:(e,r,t)=>{t.d(r,{FK:()=>V,$H:()=>q,Gl:()=>Q});var n=t(475),o=t(107),l=t(4670),i=t(5439),a=t(938),s=t(4598),c=t(5547),u=t(5289),d=t(8013),f=t(5456),p="ScrollArea",[h,v]=(0,a.A)(p),[w,m]=h(p),g=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,type:i="hover",dir:a,scrollHideDelay:c=600,...d}=e,[f,p]=o.useState(null),[h,v]=o.useState(null),[m,g]=o.useState(null),[b,x]=o.useState(null),[S,y]=o.useState(null),[C,E]=o.useState(0),[T,P]=o.useState(0),[R,j]=o.useState(!1),[L,N]=o.useState(!1),_=(0,s.s)(r,e=>p(e)),A=(0,u.jH)(a);return(0,n.jsx)(w,{scope:t,type:i,dir:A,scrollHideDelay:c,scrollArea:f,viewport:h,onViewportChange:v,content:m,onContentChange:g,scrollbarX:b,onScrollbarXChange:x,scrollbarXEnabled:R,onScrollbarXEnabledChange:j,scrollbarY:S,onScrollbarYChange:y,scrollbarYEnabled:L,onScrollbarYEnabledChange:N,onCornerWidthChange:E,onCornerHeightChange:P,children:(0,n.jsx)(l.sG.div,{dir:A,...d,ref:_,style:{position:"relative","--radix-scroll-area-corner-width":C+"px","--radix-scroll-area-corner-height":T+"px",...e.style}})})});g.displayName=p;var b="ScrollAreaViewport",x=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,children:i,nonce:a,...c}=e,u=m(b,t),d=o.useRef(null),f=(0,s.s)(r,d,u.onViewportChange);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),(0,n.jsx)(l.sG.div,{"data-radix-scroll-area-viewport":"",...c,ref:f,style:{overflowX:u.scrollbarXEnabled?"scroll":"hidden",overflowY:u.scrollbarYEnabled?"scroll":"hidden",...e.style},children:(0,n.jsx)("div",{ref:u.onContentChange,style:{minWidth:"100%",display:"table"},children:i})})]})});x.displayName=b;var S="ScrollAreaScrollbar",y=o.forwardRef((e,r)=>{let{forceMount:t,...l}=e,i=m(S,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:s}=i,c="horizontal"===e.orientation;return o.useEffect(()=>(c?a(!0):s(!0),()=>{c?a(!1):s(!1)}),[c,a,s]),"hover"===i.type?(0,n.jsx)(C,{...l,ref:r,forceMount:t}):"scroll"===i.type?(0,n.jsx)(E,{...l,ref:r,forceMount:t}):"auto"===i.type?(0,n.jsx)(T,{...l,ref:r,forceMount:t}):"always"===i.type?(0,n.jsx)(P,{...l,ref:r}):null});y.displayName=S;var C=o.forwardRef((e,r)=>{let{forceMount:t,...l}=e,a=m(S,e.__scopeScrollArea),[s,c]=o.useState(!1);return o.useEffect(()=>{let e=a.scrollArea,r=0;if(e){let t=()=>{window.clearTimeout(r),c(!0)},n=()=>{r=window.setTimeout(()=>c(!1),a.scrollHideDelay)};return e.addEventListener("pointerenter",t),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(r),e.removeEventListener("pointerenter",t),e.removeEventListener("pointerleave",n)}}},[a.scrollArea,a.scrollHideDelay]),(0,n.jsx)(i.C,{present:t||s,children:(0,n.jsx)(T,{"data-state":s?"visible":"hidden",...l,ref:r})})}),E=o.forwardRef((e,r)=>{var t,l;let{forceMount:a,...s}=e,c=m(S,e.__scopeScrollArea),u="horizontal"===e.orientation,d=G(()=>h("SCROLL_END"),100),[p,h]=(t="hidden",l={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},o.useReducer((e,r)=>{let t=l[e][r];return null!=t?t:e},t));return o.useEffect(()=>{if("idle"===p){let e=window.setTimeout(()=>h("HIDE"),c.scrollHideDelay);return()=>window.clearTimeout(e)}},[p,c.scrollHideDelay,h]),o.useEffect(()=>{let e=c.viewport,r=u?"scrollLeft":"scrollTop";if(e){let t=e[r],n=()=>{let n=e[r];t!==n&&(h("SCROLL"),d()),t=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[c.viewport,u,h,d]),(0,n.jsx)(i.C,{present:a||"hidden"!==p,children:(0,n.jsx)(P,{"data-state":"hidden"===p?"hidden":"visible",...s,ref:r,onPointerEnter:(0,f.m)(e.onPointerEnter,()=>h("POINTER_ENTER")),onPointerLeave:(0,f.m)(e.onPointerLeave,()=>h("POINTER_LEAVE"))})})}),T=o.forwardRef((e,r)=>{let t=m(S,e.__scopeScrollArea),{forceMount:l,...a}=e,[s,c]=o.useState(!1),u="horizontal"===e.orientation,d=G(()=>{if(t.viewport){let e=t.viewport.offsetWidth<t.viewport.scrollWidth,r=t.viewport.offsetHeight<t.viewport.scrollHeight;c(u?e:r)}},10);return B(t.viewport,d),B(t.content,d),(0,n.jsx)(i.C,{present:l||s,children:(0,n.jsx)(P,{"data-state":s?"visible":"hidden",...a,ref:r})})}),P=o.forwardRef((e,r)=>{let{orientation:t="vertical",...l}=e,i=m(S,e.__scopeScrollArea),a=o.useRef(null),s=o.useRef(0),[c,u]=o.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=M(c.viewport,c.content),f={...l,sizes:c,onSizesChange:u,hasThumb:!!(d>0&&d<1),onThumbChange:e=>a.current=e,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:e=>s.current=e};function p(e,r){return function(e,r,t){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ltr",o=Y(t),l=r||o/2,i=t.scrollbar.paddingStart+l,a=t.scrollbar.size-t.scrollbar.paddingEnd-(o-l),s=t.content-t.viewport;return X([i,a],"ltr"===n?[0,s]:[-1*s,0])(e)}(e,s.current,c,r)}return"horizontal"===t?(0,n.jsx)(R,{...f,ref:r,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=k(i.viewport.scrollLeft,c,i.dir);a.current.style.transform="translate3d(".concat(e,"px, 0, 0)")}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollLeft=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollLeft=p(e,i.dir))}}):"vertical"===t?(0,n.jsx)(j,{...f,ref:r,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=k(i.viewport.scrollTop,c);a.current.style.transform="translate3d(0, ".concat(e,"px, 0)")}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollTop=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollTop=p(e))}}):null}),R=o.forwardRef((e,r)=>{let{sizes:t,onSizesChange:l,...i}=e,a=m(S,e.__scopeScrollArea),[c,u]=o.useState(),d=o.useRef(null),f=(0,s.s)(r,d,a.onScrollbarXChange);return o.useEffect(()=>{d.current&&u(getComputedStyle(d.current))},[d]),(0,n.jsx)(_,{"data-orientation":"horizontal",...i,ref:f,sizes:t,style:{bottom:0,left:"rtl"===a.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===a.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Y(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.x),onDragScroll:r=>e.onDragScroll(r.x),onWheelScroll:(r,t)=>{if(a.viewport){let n=a.viewport.scrollLeft+r.deltaX;e.onWheelScroll(n),function(e,r){return e>0&&e<r}(n,t)&&r.preventDefault()}},onResize:()=>{d.current&&a.viewport&&c&&l({content:a.viewport.scrollWidth,viewport:a.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:I(c.paddingLeft),paddingEnd:I(c.paddingRight)}})}})}),j=o.forwardRef((e,r)=>{let{sizes:t,onSizesChange:l,...i}=e,a=m(S,e.__scopeScrollArea),[c,u]=o.useState(),d=o.useRef(null),f=(0,s.s)(r,d,a.onScrollbarYChange);return o.useEffect(()=>{d.current&&u(getComputedStyle(d.current))},[d]),(0,n.jsx)(_,{"data-orientation":"vertical",...i,ref:f,sizes:t,style:{top:0,right:"ltr"===a.dir?0:void 0,left:"rtl"===a.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Y(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.y),onDragScroll:r=>e.onDragScroll(r.y),onWheelScroll:(r,t)=>{if(a.viewport){let n=a.viewport.scrollTop+r.deltaY;e.onWheelScroll(n),function(e,r){return e>0&&e<r}(n,t)&&r.preventDefault()}},onResize:()=>{d.current&&a.viewport&&c&&l({content:a.viewport.scrollHeight,viewport:a.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:I(c.paddingTop),paddingEnd:I(c.paddingBottom)}})}})}),[L,N]=h(S),_=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,sizes:i,hasThumb:a,onThumbChange:u,onThumbPointerUp:d,onThumbPointerDown:p,onThumbPositionChange:h,onDragScroll:v,onWheelScroll:w,onResize:g,...b}=e,x=m(S,t),[y,C]=o.useState(null),E=(0,s.s)(r,e=>C(e)),T=o.useRef(null),P=o.useRef(""),R=x.viewport,j=i.content-i.viewport,N=(0,c.c)(w),_=(0,c.c)(h),A=G(g,10);function D(e){T.current&&v({x:e.clientX-T.current.left,y:e.clientY-T.current.top})}return o.useEffect(()=>{let e=e=>{let r=e.target;(null==y?void 0:y.contains(r))&&N(e,j)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[R,y,j,N]),o.useEffect(_,[i,_]),B(y,A),B(x.content,A),(0,n.jsx)(L,{scope:t,scrollbar:y,hasThumb:a,onThumbChange:(0,c.c)(u),onThumbPointerUp:(0,c.c)(d),onThumbPositionChange:_,onThumbPointerDown:(0,c.c)(p),children:(0,n.jsx)(l.sG.div,{...b,ref:E,style:{position:"absolute",...b.style},onPointerDown:(0,f.m)(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),T.current=y.getBoundingClientRect(),P.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",x.viewport&&(x.viewport.style.scrollBehavior="auto"),D(e))}),onPointerMove:(0,f.m)(e.onPointerMove,D),onPointerUp:(0,f.m)(e.onPointerUp,e=>{let r=e.target;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=P.current,x.viewport&&(x.viewport.style.scrollBehavior=""),T.current=null})})})}),A="ScrollAreaThumb",D=o.forwardRef((e,r)=>{let{forceMount:t,...o}=e,l=N(A,e.__scopeScrollArea);return(0,n.jsx)(i.C,{present:t||l.hasThumb,children:(0,n.jsx)(z,{ref:r,...o})})}),z=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,style:i,...a}=e,c=m(A,t),u=N(A,t),{onThumbPositionChange:d}=u,p=(0,s.s)(r,e=>u.onThumbChange(e)),h=o.useRef(void 0),v=G(()=>{h.current&&(h.current(),h.current=void 0)},100);return o.useEffect(()=>{let e=c.viewport;if(e){let r=()=>{if(v(),!h.current){let r=U(e,d);h.current=r,d()}};return d(),e.addEventListener("scroll",r),()=>e.removeEventListener("scroll",r)}},[c.viewport,v,d]),(0,n.jsx)(l.sG.div,{"data-state":u.hasThumb?"visible":"hidden",...a,ref:p,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...i},onPointerDownCapture:(0,f.m)(e.onPointerDownCapture,e=>{let r=e.target.getBoundingClientRect(),t=e.clientX-r.left,n=e.clientY-r.top;u.onThumbPointerDown({x:t,y:n})}),onPointerUp:(0,f.m)(e.onPointerUp,u.onThumbPointerUp)})});D.displayName=A;var H="ScrollAreaCorner",W=o.forwardRef((e,r)=>{let t=m(H,e.__scopeScrollArea),o=!!(t.scrollbarX&&t.scrollbarY);return"scroll"!==t.type&&o?(0,n.jsx)(O,{...e,ref:r}):null});W.displayName=H;var O=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,...i}=e,a=m(H,t),[s,c]=o.useState(0),[u,d]=o.useState(0),f=!!(s&&u);return B(a.scrollbarX,()=>{var e;let r=(null===(e=a.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;a.onCornerHeightChange(r),d(r)}),B(a.scrollbarY,()=>{var e;let r=(null===(e=a.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;a.onCornerWidthChange(r),c(r)}),f?(0,n.jsx)(l.sG.div,{...i,ref:r,style:{width:s,height:u,position:"absolute",right:"ltr"===a.dir?0:void 0,left:"rtl"===a.dir?0:void 0,bottom:0,...e.style}}):null});function I(e){return e?parseInt(e,10):0}function M(e,r){let t=e/r;return isNaN(t)?0:t}function Y(e){let r=M(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-t)*r,18)}function k(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",n=Y(r),o=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,l=r.scrollbar.size-o,i=r.content-r.viewport,a=function(e,[r,t]){return Math.min(t,Math.max(r,e))}(e,"ltr"===t?[0,i]:[-1*i,0]);return X([0,i],[0,l-n])(a)}function X(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];let n=(r[1]-r[0])/(e[1]-e[0]);return r[0]+n*(t-e[0])}}var U=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},t={left:e.scrollLeft,top:e.scrollTop},n=0;return!function o(){let l={left:e.scrollLeft,top:e.scrollTop},i=t.left!==l.left,a=t.top!==l.top;(i||a)&&r(),t=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function G(e,r){let t=(0,c.c)(e),n=o.useRef(0);return o.useEffect(()=>()=>window.clearTimeout(n.current),[]),o.useCallback(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(t,r)},[t,r])}function B(e,r){let t=(0,c.c)(r);(0,d.N)(()=>{let r=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return n.observe(e),()=>{window.cancelAnimationFrame(r),n.unobserve(e)}}},[e,t])}var F=t(3552);let V=o.forwardRef(({className:e,children:r,...t},o)=>(0,n.jsxs)(g,{ref:o,className:(0,F.QP)("overflow-hidden",e),...t,children:[r,(0,n.jsx)(W,{}),(0,n.jsx)(q,{orientation:"vertical"})]}));V.displayName=g.displayName;let Q=o.forwardRef(({className:e,children:r,...t},o)=>(0,n.jsx)(x,{ref:o,className:(0,F.QP)("size-full rounded-[inherit]",e),...t,children:r}));Q.displayName=x.displayName;let q=o.forwardRef(({className:e,orientation:r="vertical",...t},o)=>(0,n.jsx)(y,{ref:o,orientation:r,className:(0,F.QP)("flex select-none data-[state=hidden]:animate-fd-fade-out","vertical"===r&&"h-full w-1.5","horizontal"===r&&"h-1.5 flex-col",e),...t,children:(0,n.jsx)(D,{className:"relative flex-1 rounded-full bg-fd-border"})}));q.displayName=y.displayName},2774:(e,r,t)=>{t.d(r,{StylesProvider:()=>a,v:()=>i});var n=t(475),o=t(107);let l=(0,o.createContext)({tocNav:"xl:hidden",toc:"max-xl:hidden"});function i(){return(0,o.useContext)(l)}function a(e){let{children:r,...t}=e;return(0,n.jsx)(l.Provider,{value:t,children:r})}},2692:(e,r,t)=>{t.d(r,{G:()=>u,c:()=>c});var n=t(475),o=t(107),l=t(6118),i=t(8991),a=t(7095);let s=(0,o.createContext)(void 0);function c(){let e=(0,o.useContext)(s);if(!e)throw Error("Missing root provider");return e}function u({children:e}){let r=(0,o.useRef)(!0),[t,c]=(0,o.useState)(!1),[u,d]=(0,o.useState)(!1),f=(0,l.usePathname)();return(0,a.T)(f,()=>{r.current&&c(!1),r.current=!0}),(0,n.jsx)(s.Provider,{value:(0,o.useMemo)(()=>({open:t,setOpen:c,collapsed:u,setCollapsed:d,closeOnRedirect:r}),[t,u]),children:(0,n.jsx)(i.GB,{open:t,onOpenChange:c,children:e})})}},2500:(e,r,t)=>{t.d(r,{L:()=>u,TreeContextProvider:()=>c,t:()=>d});var n=t(475),o=t(6118),l=t(107),i=t(6544);let a=(0,l.createContext)(null),s=(0,l.createContext)([]);function c(e){var r;let{children:t,tree:c}=e,u=(0,o.usePathname)(),d=(0,l.useMemo)(()=>{var e;return null!==(e=(0,i.oe)(c.children,u))&&void 0!==e?e:[]},[u,c]),f=null!==(r=d.findLast(e=>"folder"===e.type&&e.root))&&void 0!==r?r:c;return(0,n.jsx)(a.Provider,{value:(0,l.useMemo)(()=>({root:f}),[f]),children:(0,n.jsx)(s.Provider,{value:d,children:t})})}function u(){return(0,l.useContext)(s)}function d(){let e=(0,l.useContext)(a);if(!e)throw Error("You must wrap this component under <DocsLayout />");return e}}}]);