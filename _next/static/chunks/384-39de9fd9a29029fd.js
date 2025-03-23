"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[384],{2963:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(6050),a=n(4385),o=n(3797),i=(0,a.forwardRef)(({href:e="#",external:t=!(e.startsWith("/")||e.startsWith("#")||e.startsWith(".")),prefetch:n,replace:a,...i},l)=>t?(0,o.jsx)("a",{ref:l,href:e,rel:"noreferrer noopener",target:"_blank",...i,children:i.children}):(0,o.jsx)(r,{ref:l,href:e,prefetch:n,replace:a,...i}));i.displayName="Link",n(6579)},4727:(e,t,n)=>{n.d(t,{N:()=>s});var r=n(4385),a=n(1250),o=n(7588),i=n(8181),l=n(3797);function s(e){let t=e+"CollectionProvider",[n,s]=(0,a.A)(t),[u,d]=n(t,{collectionRef:{current:null},itemMap:new Map}),c=e=>{let{scope:t,children:n}=e,a=r.useRef(null),o=r.useRef(new Map).current;return(0,l.jsx)(u,{scope:t,itemMap:o,collectionRef:a,children:n})};c.displayName=t;let f=e+"CollectionSlot",v=r.forwardRef((e,t)=>{let{scope:n,children:r}=e,a=d(f,n),s=(0,o.s)(t,a.collectionRef);return(0,l.jsx)(i.DX,{ref:s,children:r})});v.displayName=f;let m=e+"CollectionItemSlot",p="data-radix-collection-item",h=r.forwardRef((e,t)=>{let{scope:n,children:a,...s}=e,u=r.useRef(null),c=(0,o.s)(t,u),f=d(m,n);return r.useEffect(()=>(f.itemMap.set(u,{ref:u,...s}),()=>void f.itemMap.delete(u))),(0,l.jsx)(i.DX,{[p]:"",ref:c,children:a})});return h.displayName=m,[{Provider:c,Slot:v,ItemSlot:h},function(t){let n=d(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(p,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},s]}},5920:(e,t,n)=>{n.d(t,{Navbar:()=>v,NavbarLink:()=>w,NavbarMenu:()=>m,NavbarMenuContent:()=>p,NavbarMenuLink:()=>g,NavbarMenuTrigger:()=>h});var r=n(3797),a=n(4385),o=n(3833),i=n(2963),l=n(1642),s=n(8815),u=n(6304),d=n(4521),c=n(6142);let f=(0,o.F)("inline-flex items-center gap-1 p-2 text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground data-[active=true]:text-fd-primary [&_svg]:size-4");function v(e){let[t,n]=(0,a.useState)(""),{isTransparent:o}=(0,d.h)();return(0,r.jsx)(u.KS,{value:t,onValueChange:n,asChild:!0,children:(0,r.jsxs)("header",{id:"nd-nav",...e,className:(0,l.QP)("fixed left-1/2 top-(--fd-banner-height) z-40 box-content w-full max-w-fd-container -translate-x-1/2 border-b border-fd-foreground/10 transition-colors lg:mt-2 lg:w-[calc(100%-1rem)] lg:rounded-2xl lg:border",t.length>0?"shadow-lg":"shadow-sm",(!o||t.length>0)&&"bg-fd-background/80 backdrop-blur-lg",e.className),children:[(0,r.jsx)(u.SK,{className:"flex h-14 w-full flex-row items-center px-4 lg:h-12",asChild:!0,children:(0,r.jsx)("nav",{children:e.children})}),(0,r.jsx)(u.QW,{})]})})}let m=u.JD;function p(e){return(0,r.jsx)(u.hA,{...e,className:(0,l.QP)("grid grid-cols-1 gap-3 px-4 pb-4 md:grid-cols-2 lg:grid-cols-3",e.className),children:e.children})}function h(e){return(0,r.jsx)(u.wd,{...e,className:(0,l.QP)(f(),"rounded-md",e.className),children:e.children})}function g(e){return(0,r.jsx)(u.Ws,{asChild:!0,children:(0,r.jsx)(i.A,{...e,className:(0,l.QP)("flex flex-col gap-2 rounded-lg border bg-fd-card p-3 transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground",e.className),children:e.children})})}let x=(0,o.F)("",{variants:{variant:{main:f(),button:(0,c.r)({color:"secondary",className:"gap-1.5 [&_svg]:size-4"}),icon:(0,c.r)({color:"ghost",size:"icon"})}},defaultVariants:{variant:"main"}});function w(e){let{item:t,variant:n,...a}=e;return(0,r.jsx)(u.JD,{children:(0,r.jsx)(u.Ws,{asChild:!0,children:(0,r.jsx)(s.BaseLinkItem,{...a,item:t,className:(0,l.QP)(x({variant:n}),a.className),children:a.children})})})}},6304:(e,t,n)=>{n.d(t,{KS:()=>ef,hA:()=>eh,JD:()=>em,Ws:()=>eg,SK:()=>ev,wd:()=>ep,QW:()=>ex});var r=n(3797),a=n(4385),o=n(4372),i=n(1250),l=n(4557),s=n(6553),u=n(655),d=n(7588),c=n(8891),f=n(8721),v=n(1887),m=n(4727),p=n(8996),h=n(7777),g=n(1579),x=a.forwardRef((e,t)=>(0,r.jsx)(s.sG.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));x.displayName="VisuallyHidden";var w="NavigationMenu",[N,b,R]=(0,m.N)(w),[y,j,C]=(0,m.N)(w),[E,M]=(0,i.A)(w,[R,C]),[P,T]=E(w),[k,L]=E(w),A=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,onValueChange:i,defaultValue:l,delayDuration:f=200,skipDelayDuration:v=300,orientation:m="horizontal",dir:p,...h}=e,[g,x]=a.useState(null),w=(0,d.s)(t,e=>x(e)),N=(0,c.jH)(p),b=a.useRef(0),R=a.useRef(0),y=a.useRef(0),[j,C]=a.useState(!0),[E="",M]=(0,u.i)({prop:o,onChange:e=>{let t=v>0;""!==e?(window.clearTimeout(y.current),t&&C(!1)):(window.clearTimeout(y.current),y.current=window.setTimeout(()=>C(!0),v)),null==i||i(e)},defaultProp:l}),P=a.useCallback(()=>{window.clearTimeout(R.current),R.current=window.setTimeout(()=>M(""),150)},[M]),T=a.useCallback(e=>{window.clearTimeout(R.current),M(e)},[M]),k=a.useCallback(e=>{E===e?window.clearTimeout(R.current):b.current=window.setTimeout(()=>{window.clearTimeout(R.current),M(e)},f)},[E,M,f]);return a.useEffect(()=>()=>{window.clearTimeout(b.current),window.clearTimeout(R.current),window.clearTimeout(y.current)},[]),(0,r.jsx)(S,{scope:n,isRootMenu:!0,value:E,dir:N,orientation:m,rootNavigationMenu:g,onTriggerEnter:e=>{window.clearTimeout(b.current),j?k(e):T(e)},onTriggerLeave:()=>{window.clearTimeout(b.current),P()},onContentEnter:()=>window.clearTimeout(R.current),onContentLeave:P,onItemSelect:e=>{M(t=>t===e?"":e)},onItemDismiss:()=>M(""),children:(0,r.jsx)(s.sG.nav,{"aria-label":"Main","data-orientation":m,dir:N,...h,ref:w})})});A.displayName=w;var I="NavigationMenuSub";a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:a,onValueChange:o,defaultValue:i,orientation:l="horizontal",...d}=e,c=T(I,n),[f="",v]=(0,u.i)({prop:a,onChange:o,defaultProp:i});return(0,r.jsx)(S,{scope:n,isRootMenu:!1,value:f,dir:c.dir,orientation:l,rootNavigationMenu:c.rootNavigationMenu,onTriggerEnter:e=>v(e),onItemSelect:e=>v(e),onItemDismiss:()=>v(""),children:(0,r.jsx)(s.sG.div,{"data-orientation":l,...d,ref:t})})}).displayName=I;var S=e=>{let{scope:t,isRootMenu:n,rootNavigationMenu:o,dir:i,orientation:l,children:s,value:u,onItemSelect:d,onItemDismiss:c,onTriggerEnter:f,onTriggerLeave:m,onContentEnter:p,onContentLeave:h}=e,[x,w]=a.useState(null),[b,R]=a.useState(new Map),[y,j]=a.useState(null);return(0,r.jsx)(P,{scope:t,isRootMenu:n,rootNavigationMenu:o,value:u,previousValue:function(e){let t=a.useRef({value:e,previous:e});return a.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(u),baseId:(0,v.B)(),dir:i,orientation:l,viewport:x,onViewportChange:w,indicatorTrack:y,onIndicatorTrackChange:j,onTriggerEnter:(0,g.c)(f),onTriggerLeave:(0,g.c)(m),onContentEnter:(0,g.c)(p),onContentLeave:(0,g.c)(h),onItemSelect:(0,g.c)(d),onItemDismiss:(0,g.c)(c),onViewportContentChange:a.useCallback((e,t)=>{R(n=>(n.set(e,t),new Map(n)))},[]),onViewportContentRemove:a.useCallback(e=>{R(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[]),children:(0,r.jsx)(N.Provider,{scope:t,children:(0,r.jsx)(k,{scope:t,items:b,children:s})})})},_="NavigationMenuList",D=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...a}=e,o=T(_,n),i=(0,r.jsx)(s.sG.ul,{"data-orientation":o.orientation,...a,ref:t});return(0,r.jsx)(s.sG.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange,children:(0,r.jsx)(N.Slot,{scope:n,children:o.isRootMenu?(0,r.jsx)(et,{asChild:!0,children:i}):i})})});D.displayName=_;var F="NavigationMenuItem",[K,O]=E(F),z=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,...i}=e,l=(0,v.B)(),u=a.useRef(null),d=a.useRef(null),c=a.useRef(null),f=a.useRef(()=>{}),m=a.useRef(!1),p=a.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start";if(u.current){f.current();let t=ea(u.current);t.length&&eo("start"===e?t:t.reverse())}},[]),h=a.useCallback(()=>{if(u.current){let e=ea(u.current);e.length&&(f.current=function(e){return e.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})}}(e))}},[]);return(0,r.jsx)(K,{scope:n,value:o||l||"LEGACY_REACT_AUTO_VALUE",triggerRef:d,contentRef:u,focusProxyRef:c,wasEscapeCloseRef:m,onEntryKeyDown:p,onFocusProxyEnter:p,onRootContentClose:h,onContentFocusOutside:h,children:(0,r.jsx)(s.sG.li,{...i,ref:t})})});z.displayName=F;var Q="NavigationMenuTrigger",W=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,disabled:o,...i}=e,u=T(Q,e.__scopeNavigationMenu),c=O(Q,e.__scopeNavigationMenu),f=a.useRef(null),v=(0,d.s)(f,c.triggerRef,t),m=es(u.baseId,c.value),p=eu(u.baseId,c.value),h=a.useRef(!1),g=a.useRef(!1),w=c.value===u.value;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N.ItemSlot,{scope:n,value:c.value,children:(0,r.jsx)(er,{asChild:!0,children:(0,r.jsx)(s.sG.button,{id:m,disabled:o,"data-disabled":o?"":void 0,"data-state":el(w),"aria-expanded":w,"aria-controls":p,...i,ref:v,onPointerEnter:(0,l.m)(e.onPointerEnter,()=>{g.current=!1,c.wasEscapeCloseRef.current=!1}),onPointerMove:(0,l.m)(e.onPointerMove,ed(()=>{o||g.current||c.wasEscapeCloseRef.current||h.current||(u.onTriggerEnter(c.value),h.current=!0)})),onPointerLeave:(0,l.m)(e.onPointerLeave,ed(()=>{o||(u.onTriggerLeave(),h.current=!1)})),onClick:(0,l.m)(e.onClick,()=>{u.onItemSelect(c.value),g.current=w}),onKeyDown:(0,l.m)(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===u.dir?"ArrowLeft":"ArrowRight"}[u.orientation];w&&e.key===t&&(c.onEntryKeyDown(),e.preventDefault())})})})}),w&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{"aria-hidden":!0,tabIndex:0,ref:c.focusProxyRef,onFocus:e=>{let t=c.contentRef.current,n=e.relatedTarget,r=n===f.current,a=null==t?void 0:t.contains(n);(r||!a)&&c.onFocusProxyEnter(r?"start":"end")}}),u.viewport&&(0,r.jsx)("span",{"aria-owns":p})]})]})});W.displayName=Q;var G="navigationMenu.linkSelect",V=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,active:a,onSelect:o,...i}=e;return(0,r.jsx)(er,{asChild:!0,children:(0,r.jsx)(s.sG.a,{"data-active":a?"":void 0,"aria-current":a?"page":void 0,...i,ref:t,onClick:(0,l.m)(e.onClick,e=>{let t=e.target,n=new CustomEvent(G,{bubbles:!0,cancelable:!0});if(t.addEventListener(G,e=>null==o?void 0:o(e),{once:!0}),(0,s.hO)(t,n),!n.defaultPrevented&&!e.metaKey){let e=new CustomEvent(X,{bubbles:!0,cancelable:!0});(0,s.hO)(t,e)}},{checkForDefaultPrevented:!1})})})});V.displayName="NavigationMenuLink";var H="NavigationMenuIndicator";a.forwardRef((e,t)=>{let{forceMount:n,...a}=e,i=T(H,e.__scopeNavigationMenu),l=!!i.value;return i.indicatorTrack?o.createPortal((0,r.jsx)(f.C,{present:n||l,children:(0,r.jsx)(U,{...a,ref:t})}),i.indicatorTrack):null}).displayName=H;var U=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...o}=e,i=T(H,n),l=b(n),[u,d]=a.useState(null),[c,f]=a.useState(null),v="horizontal"===i.orientation,m=!!i.value;a.useEffect(()=>{var e;let t=null===(e=l().find(e=>e.value===i.value))||void 0===e?void 0:e.ref.current;t&&d(t)},[l,i.value]);let p=()=>{u&&f({size:v?u.offsetWidth:u.offsetHeight,offset:v?u.offsetLeft:u.offsetTop})};return ei(u,p),ei(i.indicatorTrack,p),c?(0,r.jsx)(s.sG.div,{"aria-hidden":!0,"data-state":m?"visible":"hidden","data-orientation":i.orientation,...o,ref:t,style:{position:"absolute",...v?{left:0,width:c.size+"px",transform:"translateX(".concat(c.offset,"px)")}:{top:0,height:c.size+"px",transform:"translateY(".concat(c.offset,"px)")},...o.style}}):null}),B="NavigationMenuContent",J=a.forwardRef((e,t)=>{let{forceMount:n,...a}=e,o=T(B,e.__scopeNavigationMenu),i=O(B,e.__scopeNavigationMenu),s=(0,d.s)(i.contentRef,t),u=i.value===o.value,c={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...a};return o.viewport?(0,r.jsx)(q,{forceMount:n,...c,ref:s}):(0,r.jsx)(f.C,{present:n||u,children:(0,r.jsx)(Y,{"data-state":el(u),...c,ref:s,onPointerEnter:(0,l.m)(e.onPointerEnter,o.onContentEnter),onPointerLeave:(0,l.m)(e.onPointerLeave,ed(o.onContentLeave)),style:{pointerEvents:!u&&o.isRootMenu?"none":void 0,...c.style}})})});J.displayName=B;var q=a.forwardRef((e,t)=>{let{onViewportContentChange:n,onViewportContentRemove:r}=T(B,e.__scopeNavigationMenu);return(0,h.N)(()=>{n(e.value,{ref:t,...e})},[e,t,n]),(0,h.N)(()=>()=>r(e.value),[e.value,r]),null}),X="navigationMenu.rootContentDismiss",Y=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,triggerRef:i,focusProxyRef:s,wasEscapeCloseRef:u,onRootContentClose:c,onContentFocusOutside:f,...v}=e,m=T(B,n),h=a.useRef(null),g=(0,d.s)(h,t),x=es(m.baseId,o),w=eu(m.baseId,o),N=b(n),R=a.useRef(null),{onItemDismiss:y}=m;a.useEffect(()=>{let e=h.current;if(m.isRootMenu&&e){let t=()=>{var t;y(),c(),e.contains(document.activeElement)&&(null===(t=i.current)||void 0===t||t.focus())};return e.addEventListener(X,t),()=>e.removeEventListener(X,t)}},[m.isRootMenu,e.value,i,y,c]);let j=a.useMemo(()=>{let e=N().map(e=>e.value);"rtl"===m.dir&&e.reverse();let t=e.indexOf(m.value),n=e.indexOf(m.previousValue),r=o===m.value,a=n===e.indexOf(o);if(!r&&!a)return R.current;let i=(()=>{if(t!==n){if(r&&-1!==n)return t>n?"from-end":"from-start";if(a&&-1!==t)return t>n?"to-start":"to-end"}return null})();return R.current=i,i},[m.previousValue,m.value,m.dir,N,o]);return(0,r.jsx)(et,{asChild:!0,children:(0,r.jsx)(p.qW,{id:w,"aria-labelledby":x,"data-motion":j,"data-orientation":m.orientation,...v,ref:g,disableOutsidePointerEvents:!1,onDismiss:()=>{var e;let t=new Event(X,{bubbles:!0,cancelable:!0});null===(e=h.current)||void 0===e||e.dispatchEvent(t)},onFocusOutside:(0,l.m)(e.onFocusOutside,e=>{var t;f();let n=e.target;(null===(t=m.rootNavigationMenu)||void 0===t?void 0:t.contains(n))&&e.preventDefault()}),onPointerDownOutside:(0,l.m)(e.onPointerDownOutside,e=>{var t;let n=e.target,r=N().some(e=>{var t;return null===(t=e.ref.current)||void 0===t?void 0:t.contains(n)}),a=m.isRootMenu&&(null===(t=m.viewport)||void 0===t?void 0:t.contains(n));(r||a||!m.isRootMenu)&&e.preventDefault()}),onKeyDown:(0,l.m)(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=ea(e.currentTarget),r=document.activeElement,a=t.findIndex(e=>e===r);if(eo(e.shiftKey?t.slice(0,a).reverse():t.slice(a+1,t.length)))e.preventDefault();else{var n;null===(n=s.current)||void 0===n||n.focus()}}}),onEscapeKeyDown:(0,l.m)(e.onEscapeKeyDown,e=>{u.current=!0})})})}),Z="NavigationMenuViewport",$=a.forwardRef((e,t)=>{let{forceMount:n,...a}=e,o=!!T(Z,e.__scopeNavigationMenu).value;return(0,r.jsx)(f.C,{present:n||o,children:(0,r.jsx)(ee,{...a,ref:t})})});$.displayName=Z;var ee=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,children:o,...i}=e,u=T(Z,n),c=(0,d.s)(t,u.onViewportChange),v=L(B,e.__scopeNavigationMenu),[m,p]=a.useState(null),[h,g]=a.useState(null),x=m?(null==m?void 0:m.width)+"px":void 0,w=m?(null==m?void 0:m.height)+"px":void 0,N=!!u.value,b=N?u.value:u.previousValue;return ei(h,()=>{h&&p({width:h.offsetWidth,height:h.offsetHeight})}),(0,r.jsx)(s.sG.div,{"data-state":el(N),"data-orientation":u.orientation,...i,ref:c,style:{pointerEvents:!N&&u.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":x,"--radix-navigation-menu-viewport-height":w,...i.style},onPointerEnter:(0,l.m)(e.onPointerEnter,u.onContentEnter),onPointerLeave:(0,l.m)(e.onPointerLeave,ed(u.onContentLeave)),children:Array.from(v.items).map(e=>{let[t,{ref:n,forceMount:a,...o}]=e,i=b===t;return(0,r.jsx)(f.C,{present:a||i,children:(0,r.jsx)(Y,{...o,ref:(0,d.t)(n,e=>{i&&e&&g(e)})})},t)})})}),et=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...a}=e,o=T("FocusGroup",n);return(0,r.jsx)(y.Provider,{scope:n,children:(0,r.jsx)(y.Slot,{scope:n,children:(0,r.jsx)(s.sG.div,{dir:o.dir,...a,ref:t})})})}),en=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],er=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...a}=e,o=j(n),i=T("FocusGroupItem",n);return(0,r.jsx)(y.ItemSlot,{scope:n,children:(0,r.jsx)(s.sG.button,{...a,ref:t,onKeyDown:(0,l.m)(e.onKeyDown,e=>{if(["Home","End",...en].includes(e.key)){let t=o().map(e=>e.ref.current);if(["rtl"===i.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),en.includes(e.key)){let n=t.indexOf(e.currentTarget);t=t.slice(n+1)}setTimeout(()=>eo(t)),e.preventDefault()}})})})});function ea(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function eo(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function ei(e,t){let n=(0,g.c)(t);(0,h.N)(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}function el(e){return e?"open":"closed"}function es(e,t){return"".concat(e,"-trigger-").concat(t)}function eu(e,t){return"".concat(e,"-content-").concat(t)}function ed(e){return t=>"mouse"===t.pointerType?e(t):void 0}var ec=n(1642);let ef=A,ev=D,em=a.forwardRef((e,t)=>{let{className:n,children:a,...o}=e;return(0,r.jsx)(z,{ref:t,className:(0,ec.QP)("list-none",n),...o,children:a})});em.displayName=z.displayName;let ep=a.forwardRef((e,t)=>{let{className:n,children:a,...o}=e;return(0,r.jsx)(W,{ref:t,className:(0,ec.QP)("data-[state=open]:bg-fd-accent/50",n),...o,children:a})});ep.displayName=W.displayName;let eh=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(J,{ref:t,className:(0,ec.QP)("absolute inset-x-0 top-0 data-[motion=from-end]:animate-fd-enterFromRight data-[motion=from-start]:animate-fd-enterFromLeft data-[motion=to-end]:animate-fd-exitToRight data-[motion=to-start]:animate-fd-exitToLeft",n),...a})});eh.displayName=J.displayName;let eg=V,ex=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:"flex w-full justify-center",children:(0,r.jsx)($,{...a,className:(0,ec.QP)("relative h-(--radix-navigation-menu-viewport-height) w-full origin-[top_center] overflow-hidden text-fd-popover-foreground transition-[width,height] duration-300 data-[state=closed]:animate-fd-nav-menu-out data-[state=open]:animate-fd-nav-menu-in",n)})})});ex.displayName=$.displayName},8633:(e,t,n)=>{n.d(t,{Menu:()=>f,MenuContent:()=>m,MenuLinkItem:()=>c,MenuTrigger:()=>v});var r=n(3797),a=n(8815),o=n(1642),i=n(6304),l=n(2963),s=n(3833),u=n(6142);let d=(0,s.F)("",{variants:{variant:{main:"inline-flex items-center gap-2 py-1.5 transition-colors hover:text-fd-popover-foreground/50 data-[active=true]:font-medium data-[active=true]:text-fd-primary [&_svg]:size-4",icon:(0,u.r)({size:"icon",color:"ghost"}),button:(0,u.r)({color:"secondary",className:"gap-1.5 [&_svg]:size-4"})}},defaultVariants:{variant:"main"}});function c(e){let{item:t,...n}=e;if("custom"===t.type)return(0,r.jsx)("div",{className:(0,o.QP)("grid",n.className),children:t.children});if("menu"===t.type){let e=(0,r.jsxs)(r.Fragment,{children:[t.icon,t.text]});return(0,r.jsxs)("div",{className:(0,o.QP)("mb-4 flex flex-col",n.className),children:[(0,r.jsx)("p",{className:"mb-1 text-sm text-fd-muted-foreground",children:t.url?(0,r.jsx)(i.Ws,{asChild:!0,children:(0,r.jsx)(l.A,{href:t.url,children:e})}):e}),t.items.map((e,t)=>(0,r.jsx)(c,{item:e},t))]})}return(0,r.jsx)(i.Ws,{asChild:!0,children:(0,r.jsxs)(a.BaseLinkItem,{item:t,className:(0,o.QP)(d({variant:t.type}),n.className),"aria-label":"icon"===t.type?t.label:void 0,children:[t.icon,"icon"===t.type?void 0:t.text]})})}let f=i.JD;function v(e){let{enableHover:t=!1,...n}=e;return(0,r.jsx)(i.wd,{...n,onPointerMove:t?void 0:e=>e.preventDefault(),className:(0,o.QP)((0,u.r)({size:"icon",color:"ghost"}),n.className),children:n.children})}function m(e){return(0,r.jsx)(i.hA,{...e,className:(0,o.QP)("flex flex-col p-4",e.className),children:e.children})}}}]);