"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[867],{

/***/ 912:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "BailoutToCSR", ({
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
}));
const _bailouttocsr = __webpack_require__(5592);
function BailoutToCSR(param) {
    let { reason, children } = param;
    if (typeof window === 'undefined') {
        throw new _bailouttocsr.BailoutToCSRError(reason);
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map


/***/ }),

/***/ 5025:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "PreloadChunks", ({
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
}));
const _jsxruntime = __webpack_require__(7437);
const _reactdom = __webpack_require__(4887);
const _workasyncstorageexternal = __webpack_require__(8011);
const _encodeuripath = __webpack_require__(5759);
function PreloadChunks(param) {
    let { moduleIds } = param;
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = workStore.assetPrefix + "/_next/" + (0, _encodeuripath.encodeURIPath)(chunk);
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style"
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low'
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map


/***/ }),

/***/ 5772:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bi: () => (/* binding */ getBreadcrumbItemsFromPath),
/* harmony export */   gx: () => (/* binding */ searchPath)
/* harmony export */ });
/* unused harmony exports getBreadcrumbItems, useBreadcrumb */
/* harmony import */ var _chunk_MLKGABMK_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7067);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);


// src/breadcrumb.tsx

function useBreadcrumb(url, tree, options) {
  return useMemo(
    () => getBreadcrumbItems(url, tree, options),
    [tree, url, options]
  );
}
function getBreadcrumbItems(url, tree, options = {}) {
  return getBreadcrumbItemsFromPath(
    tree,
    searchPath(tree.children, url) ?? [],
    options
  );
}
function getBreadcrumbItemsFromPath(tree, path, options) {
  const { includePage = true, includeSeparator = false, includeRoot } = options;
  let items = [];
  path.forEach((item, i) => {
    if (item.type === "separator" && includeSeparator) {
      items.push({
        name: item.name
      });
    }
    if (item.type === "folder") {
      const next = path.at(i + 1);
      if (next && item.index === next) return;
      if (item.root) {
        items = [];
        return;
      }
      items.push({
        name: item.name,
        url: item.index?.url
      });
    }
    if (item.type === "page" && includePage) {
      items.push({
        name: item.name,
        url: item.url
      });
    }
  });
  if (includeRoot) {
    items.unshift({
      name: tree.name,
      url: typeof includeRoot === "object" ? includeRoot.url : void 0
    });
  }
  return items;
}
function searchPath(nodes, url) {
  let separator;
  for (const node of nodes) {
    if (node.type === "separator") separator = node;
    if (node.type === "folder") {
      if (node.index?.url === url) {
        const items2 = [];
        if (separator) items2.push(separator);
        items2.push(node, node.index);
        return items2;
      }
      const items = searchPath(node.children, url);
      if (items) {
        items.unshift(node);
        if (separator) items.unshift(separator);
        return items;
      }
    }
    if (node.type === "page" && node.url === url) {
      const items = [];
      if (separator) items.push(separator);
      items.push(node);
      return items;
    }
  }
  return null;
}



/***/ }),

/***/ 7655:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ useOnChange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
// src/utils/use-on-change.ts

function isDifferent(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return b.length !== a.length || a.some((v, i) => isDifferent(v, b[i]));
  }
  return a !== b;
}
function useOnChange(value, onChange, isUpdated = isDifferent) {
  const [prev, setPrev] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  if (isUpdated(prev, value)) {
    onChange(value, prev);
    setPrev(value);
  }
}




/***/ }),

/***/ 2042:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hn: () => (/* binding */ SidebarProvider),
/* harmony export */   vP: () => (/* binding */ SidebarTrigger),
/* harmony export */   wb: () => (/* binding */ SidebarList)
/* harmony export */ });
/* harmony import */ var _chunk_MLKGABMK_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7067);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var react_remove_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9418);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7437);
/* __next_internal_client_entry_do_not_use__ SidebarList,SidebarProvider,SidebarTrigger auto */ 
// src/sidebar.tsx



var SidebarContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0);
function useSidebarContext() {
    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SidebarContext);
    if (!ctx) throw new Error("Missing sidebar provider");
    return ctx;
}
function SidebarProvider(props) {
    const [openInner, setOpenInner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    var _props_open, _props_onOpenChange;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SidebarContext.Provider, {
        value: [
            (_props_open = props.open) !== null && _props_open !== void 0 ? _props_open : openInner,
            (_props_onOpenChange = props.onOpenChange) !== null && _props_onOpenChange !== void 0 ? _props_onOpenChange : setOpenInner
        ],
        children: props.children
    });
}
function SidebarTrigger(param) {
    let { as, ...props } = param;
    const [open, setOpen] = useSidebarContext();
    const As = as !== null && as !== void 0 ? as : "button";
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(As, {
        "aria-label": "Toggle Sidebar",
        "data-open": open,
        onClick: ()=>{
            setOpen(!open);
        },
        ...props
    });
}
function SidebarList(param) {
    let { as, blockScrollingWidth, ...props } = param;
    const [open] = useSidebarContext();
    const [isBlocking, setIsBlocking] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!blockScrollingWidth) return;
        const mediaQueryList = window.matchMedia("(min-width: ".concat(blockScrollingWidth.toString(), "px)"));
        const handleChange = ()=>{
            setIsBlocking(!mediaQueryList.matches);
        };
        handleChange();
        mediaQueryList.addEventListener("change", handleChange);
        return ()=>{
            mediaQueryList.removeEventListener("change", handleChange);
        };
    }, [
        blockScrollingWidth
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_remove_scroll__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        as: as !== null && as !== void 0 ? as : "aside",
        "data-open": open,
        enabled: Boolean(isBlocking && open),
        ...props,
        children: props.children
    });
}



/***/ }),

/***/ 3547:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* reexport safe */ _chunk_EMWGTXSW_js__WEBPACK_IMPORTED_MODULE_0__.p)
/* harmony export */ });
/* harmony import */ var _chunk_EMWGTXSW_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7655);
/* harmony import */ var _chunk_MLKGABMK_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7067);





/***/ }),

/***/ 7753:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useSidebar),
/* harmony export */   H: () => (/* binding */ SidebarProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6463);
/* harmony import */ var fumadocs_core_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2042);
/* harmony import */ var fumadocs_core_utils_use_on_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3547);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7437);
// src/contexts/sidebar.tsx





var SidebarContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);
function useSidebar() {
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SidebarContext);
  if (!ctx) throw new Error("Missing root provider");
  return ctx;
}
function SidebarProvider({
  children
}) {
  const closeOnRedirect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();
  (0,fumadocs_core_utils_use_on_change__WEBPACK_IMPORTED_MODULE_3__/* .useOnChange */ .p)(pathname, () => {
    if (closeOnRedirect.current) {
      setOpen(false);
    }
    closeOnRedirect.current = true;
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
    SidebarContext.Provider,
    {
      value: (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
        () => ({
          open,
          setOpen,
          collapsed,
          setCollapsed,
          closeOnRedirect
        }),
        [open, collapsed]
      ),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(fumadocs_core_sidebar__WEBPACK_IMPORTED_MODULE_2__/* .SidebarProvider */ .Hn, { open, onOpenChange: setOpen, children })
    }
  );
}




/***/ }),

/***/ 9744:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  xr: () => (/* binding */ chunk_2FLZOPQN_ScrollArea),
  Bl: () => (/* binding */ ScrollBar),
  fK: () => (/* binding */ ScrollViewport)
});

// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/bundle-mjs.mjs
var bundle_mjs = __webpack_require__(6164);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var dist = __webpack_require__(5171);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-presence/dist/index.mjs
var react_presence_dist = __webpack_require__(1383);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-context/dist/index.mjs
var react_context_dist = __webpack_require__(8324);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(1584);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var react_use_callback_ref_dist = __webpack_require__(5137);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-direction/dist/index.mjs
var react_direction_dist = __webpack_require__(7513);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var react_use_layout_effect_dist = __webpack_require__(1336);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/number/dist/index.mjs
// packages/core/number/src/number.ts
function clamp(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}

//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/@radix-ui/primitive/dist/index.mjs
var primitive_dist = __webpack_require__(8149);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-scroll-area/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Corner,Root,ScrollArea,ScrollAreaCorner,ScrollAreaScrollbar,ScrollAreaThumb,ScrollAreaViewport,Scrollbar,Thumb,Viewport,createScrollAreaScope auto */ // packages/react/scroll-area/src/ScrollArea.tsx










// packages/react/scroll-area/src/useStateMachine.ts

function useStateMachine(initialState, machine) {
    return react.useReducer((state, event)=>{
        const nextState = machine[state][event];
        return nextState !== null && nextState !== void 0 ? nextState : state;
    }, initialState);
}
// packages/react/scroll-area/src/ScrollArea.tsx

var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext, createScrollAreaScope] = (0,react_context_dist/* createContextScope */.b)(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeScrollArea, type = "hover", dir, scrollHideDelay = 600, ...scrollAreaProps } = props;
    const [scrollArea, setScrollArea] = react.useState(null);
    const [viewport, setViewport] = react.useState(null);
    const [content, setContent] = react.useState(null);
    const [scrollbarX, setScrollbarX] = react.useState(null);
    const [scrollbarY, setScrollbarY] = react.useState(null);
    const [cornerWidth, setCornerWidth] = react.useState(0);
    const [cornerHeight, setCornerHeight] = react.useState(0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = react.useState(false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = react.useState(false);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>setScrollArea(node));
    const direction = (0,react_direction_dist/* useDirection */.gm)(dir);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaProvider, {
        scope: __scopeScrollArea,
        type,
        dir: direction,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* Primitive */.WV.div, {
            dir: direction,
            ...scrollAreaProps,
            ref: composedRefs,
            style: {
                position: "relative",
                // Pass corner sizes as CSS vars to reduce re-renders of context consumers
                ["--radix-scroll-area-corner-width"]: cornerWidth + "px",
                ["--radix-scroll-area-corner-height"]: cornerHeight + "px",
                ...props.style
            }
        })
    });
});
ScrollArea.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME = "ScrollAreaViewport";
var ScrollAreaViewport = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeScrollArea, children, asChild, nonce, ...viewportProps } = props;
    const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
    const ref = react.useRef(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref, context.onViewportChange);
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)("style", {
                dangerouslySetInnerHTML: {
                    __html: "\n[data-radix-scroll-area-viewport] {\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  -webkit-overflow-scrolling: touch;\n}\n[data-radix-scroll-area-viewport]::-webkit-scrollbar {\n  display: none;\n}\n:where([data-radix-scroll-area-viewport]) {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n:where([data-radix-scroll-area-content]) {\n  flex-grow: 1;\n}\n"
                },
                nonce
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* Primitive */.WV.div, {
                "data-radix-scroll-area-viewport": "",
                ...viewportProps,
                asChild,
                ref: composedRefs,
                style: {
                    /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */ overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
                    overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
                    ...props.style
                },
                children: getSubtree({
                    asChild,
                    children
                }, (children2)=>/* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                        "data-radix-scroll-area-content": "",
                        ref: context.onContentChange,
                        style: {
                            minWidth: context.scrollbarXEnabled ? "fit-content" : void 0
                        },
                        children: children2
                    }))
            })
        ]
    });
});
ScrollAreaViewport.displayName = VIEWPORT_NAME;
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    react.useEffect(()=>{
        isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
        return ()=>{
            isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
        };
    }, [
        isHorizontal,
        onScrollbarXEnabledChange,
        onScrollbarYEnabledChange
    ]);
    return context.type === "hover" ? /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaScrollbarHover, {
        ...scrollbarProps,
        ref: forwardedRef,
        forceMount
    }) : context.type === "scroll" ? /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaScrollbarScroll, {
        ...scrollbarProps,
        ref: forwardedRef,
        forceMount
    }) : context.type === "auto" ? /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaScrollbarAuto, {
        ...scrollbarProps,
        ref: forwardedRef,
        forceMount
    }) : context.type === "always" ? /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
        ...scrollbarProps,
        ref: forwardedRef
    }) : null;
});
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [visible, setVisible] = react.useState(false);
    react.useEffect(()=>{
        const scrollArea = context.scrollArea;
        let hideTimer = 0;
        if (scrollArea) {
            const handlePointerEnter = ()=>{
                window.clearTimeout(hideTimer);
                setVisible(true);
            };
            const handlePointerLeave = ()=>{
                hideTimer = window.setTimeout(()=>setVisible(false), context.scrollHideDelay);
            };
            scrollArea.addEventListener("pointerenter", handlePointerEnter);
            scrollArea.addEventListener("pointerleave", handlePointerLeave);
            return ()=>{
                window.clearTimeout(hideTimer);
                scrollArea.removeEventListener("pointerenter", handlePointerEnter);
                scrollArea.removeEventListener("pointerleave", handlePointerLeave);
            };
        }
    }, [
        context.scrollArea,
        context.scrollHideDelay
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_presence_dist/* Presence */.z, {
        present: forceMount || visible,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaScrollbarAuto, {
            "data-state": visible ? "visible" : "hidden",
            ...scrollbarProps,
            ref: forwardedRef
        })
    });
});
var ScrollAreaScrollbarScroll = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const isHorizontal = props.orientation === "horizontal";
    const debounceScrollEnd = useDebounceCallback(()=>send("SCROLL_END"), 100);
    const [state, send] = useStateMachine("hidden", {
        hidden: {
            SCROLL: "scrolling"
        },
        scrolling: {
            SCROLL_END: "idle",
            POINTER_ENTER: "interacting"
        },
        interacting: {
            SCROLL: "interacting",
            POINTER_LEAVE: "idle"
        },
        idle: {
            HIDE: "hidden",
            SCROLL: "scrolling",
            POINTER_ENTER: "interacting"
        }
    });
    react.useEffect(()=>{
        if (state === "idle") {
            const hideTimer = window.setTimeout(()=>send("HIDE"), context.scrollHideDelay);
            return ()=>window.clearTimeout(hideTimer);
        }
    }, [
        state,
        context.scrollHideDelay,
        send
    ]);
    react.useEffect(()=>{
        const viewport = context.viewport;
        const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
        if (viewport) {
            let prevScrollPos = viewport[scrollDirection];
            const handleScroll = ()=>{
                const scrollPos = viewport[scrollDirection];
                const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
                if (hasScrollInDirectionChanged) {
                    send("SCROLL");
                    debounceScrollEnd();
                }
                prevScrollPos = scrollPos;
            };
            viewport.addEventListener("scroll", handleScroll);
            return ()=>viewport.removeEventListener("scroll", handleScroll);
        }
    }, [
        context.viewport,
        isHorizontal,
        send,
        debounceScrollEnd
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_presence_dist/* Presence */.z, {
        present: forceMount || state !== "hidden",
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
            "data-state": state === "hidden" ? "hidden" : "visible",
            ...scrollbarProps,
            ref: forwardedRef,
            onPointerEnter: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerEnter, ()=>send("POINTER_ENTER")),
            onPointerLeave: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerLeave, ()=>send("POINTER_LEAVE"))
        })
    });
});
var ScrollAreaScrollbarAuto = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { forceMount, ...scrollbarProps } = props;
    const [visible, setVisible] = react.useState(false);
    const isHorizontal = props.orientation === "horizontal";
    const handleResize = useDebounceCallback(()=>{
        if (context.viewport) {
            const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
            const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
            setVisible(isHorizontal ? isOverflowX : isOverflowY);
        }
    }, 10);
    useResizeObserver(context.viewport, handleResize);
    useResizeObserver(context.content, handleResize);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_presence_dist/* Presence */.z, {
        present: forceMount || visible,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
            "data-state": visible ? "visible" : "hidden",
            ...scrollbarProps,
            ref: forwardedRef
        })
    });
});
var ScrollAreaScrollbarVisible = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { orientation = "vertical", ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const thumbRef = react.useRef(null);
    const pointerOffsetRef = react.useRef(0);
    const [sizes, setSizes] = react.useState({
        content: 0,
        viewport: 0,
        scrollbar: {
            size: 0,
            paddingStart: 0,
            paddingEnd: 0
        }
    });
    const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
    const commonProps = {
        ...scrollbarProps,
        sizes,
        onSizesChange: setSizes,
        hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
        onThumbChange: (thumb)=>thumbRef.current = thumb,
        onThumbPointerUp: ()=>pointerOffsetRef.current = 0,
        onThumbPointerDown: (pointerPos)=>pointerOffsetRef.current = pointerPos
    };
    function getScrollPosition(pointerPos, dir) {
        return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
    }
    if (orientation === "horizontal") {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaScrollbarX, {
            ...commonProps,
            ref: forwardedRef,
            onThumbPositionChange: ()=>{
                if (context.viewport && thumbRef.current) {
                    const scrollPos = context.viewport.scrollLeft;
                    const offset = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
                    thumbRef.current.style.transform = "translate3d(".concat(offset, "px, 0, 0)");
                }
            },
            onWheelScroll: (scrollPos)=>{
                if (context.viewport) context.viewport.scrollLeft = scrollPos;
            },
            onDragScroll: (pointerPos)=>{
                if (context.viewport) {
                    context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
                }
            }
        });
    }
    if (orientation === "vertical") {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaScrollbarY, {
            ...commonProps,
            ref: forwardedRef,
            onThumbPositionChange: ()=>{
                if (context.viewport && thumbRef.current) {
                    const scrollPos = context.viewport.scrollTop;
                    const offset = getThumbOffsetFromScroll(scrollPos, sizes);
                    thumbRef.current.style.transform = "translate3d(0, ".concat(offset, "px, 0)");
                }
            },
            onWheelScroll: (scrollPos)=>{
                if (context.viewport) context.viewport.scrollTop = scrollPos;
            },
            onDragScroll: (pointerPos)=>{
                if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
            }
        });
    }
    return null;
});
var ScrollAreaScrollbarX = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { sizes, onSizesChange, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = react.useState();
    const ref = react.useRef(null);
    const composeRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref, context.onScrollbarXChange);
    react.useEffect(()=>{
        if (ref.current) setComputedStyle(getComputedStyle(ref.current));
    }, [
        ref
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaScrollbarImpl, {
        "data-orientation": "horizontal",
        ...scrollbarProps,
        ref: composeRefs,
        sizes,
        style: {
            bottom: 0,
            left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
            right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
            ["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px",
            ...props.style
        },
        onThumbPointerDown: (pointerPos)=>props.onThumbPointerDown(pointerPos.x),
        onDragScroll: (pointerPos)=>props.onDragScroll(pointerPos.x),
        onWheelScroll: (event, maxScrollPos)=>{
            if (context.viewport) {
                const scrollPos = context.viewport.scrollLeft + event.deltaX;
                props.onWheelScroll(scrollPos);
                if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
                    event.preventDefault();
                }
            }
        },
        onResize: ()=>{
            if (ref.current && context.viewport && computedStyle) {
                onSizesChange({
                    content: context.viewport.scrollWidth,
                    viewport: context.viewport.offsetWidth,
                    scrollbar: {
                        size: ref.current.clientWidth,
                        paddingStart: toInt(computedStyle.paddingLeft),
                        paddingEnd: toInt(computedStyle.paddingRight)
                    }
                });
            }
        }
    });
});
var ScrollAreaScrollbarY = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { sizes, onSizesChange, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = react.useState();
    const ref = react.useRef(null);
    const composeRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref, context.onScrollbarYChange);
    react.useEffect(()=>{
        if (ref.current) setComputedStyle(getComputedStyle(ref.current));
    }, [
        ref
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaScrollbarImpl, {
        "data-orientation": "vertical",
        ...scrollbarProps,
        ref: composeRefs,
        sizes,
        style: {
            top: 0,
            right: context.dir === "ltr" ? 0 : void 0,
            left: context.dir === "rtl" ? 0 : void 0,
            bottom: "var(--radix-scroll-area-corner-height)",
            ["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px",
            ...props.style
        },
        onThumbPointerDown: (pointerPos)=>props.onThumbPointerDown(pointerPos.y),
        onDragScroll: (pointerPos)=>props.onDragScroll(pointerPos.y),
        onWheelScroll: (event, maxScrollPos)=>{
            if (context.viewport) {
                const scrollPos = context.viewport.scrollTop + event.deltaY;
                props.onWheelScroll(scrollPos);
                if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
                    event.preventDefault();
                }
            }
        },
        onResize: ()=>{
            if (ref.current && context.viewport && computedStyle) {
                onSizesChange({
                    content: context.viewport.scrollHeight,
                    viewport: context.viewport.offsetHeight,
                    scrollbar: {
                        size: ref.current.clientHeight,
                        paddingStart: toInt(computedStyle.paddingTop),
                        paddingEnd: toInt(computedStyle.paddingBottom)
                    }
                });
            }
        }
    });
});
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeScrollArea, sizes, hasThumb, onThumbChange, onThumbPointerUp, onThumbPointerDown, onThumbPositionChange, onDragScroll, onWheelScroll, onResize, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
    const [scrollbar, setScrollbar] = react.useState(null);
    const composeRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>setScrollbar(node));
    const rectRef = react.useRef(null);
    const prevWebkitUserSelectRef = react.useRef("");
    const viewport = context.viewport;
    const maxScrollPos = sizes.content - sizes.viewport;
    const handleWheelScroll = (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onWheelScroll);
    const handleThumbPositionChange = (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onThumbPositionChange);
    const handleResize = useDebounceCallback(onResize, 10);
    function handleDragScroll(event) {
        if (rectRef.current) {
            const x = event.clientX - rectRef.current.left;
            const y = event.clientY - rectRef.current.top;
            onDragScroll({
                x,
                y
            });
        }
    }
    react.useEffect(()=>{
        const handleWheel = (event)=>{
            const element = event.target;
            const isScrollbarWheel = scrollbar === null || scrollbar === void 0 ? void 0 : scrollbar.contains(element);
            if (isScrollbarWheel) handleWheelScroll(event, maxScrollPos);
        };
        document.addEventListener("wheel", handleWheel, {
            passive: false
        });
        return ()=>document.removeEventListener("wheel", handleWheel, {
                passive: false
            });
    }, [
        viewport,
        scrollbar,
        maxScrollPos,
        handleWheelScroll
    ]);
    react.useEffect(handleThumbPositionChange, [
        sizes,
        handleThumbPositionChange
    ]);
    useResizeObserver(scrollbar, handleResize);
    useResizeObserver(context.content, handleResize);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollbarProvider, {
        scope: __scopeScrollArea,
        scrollbar,
        hasThumb,
        onThumbChange: (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onThumbChange),
        onThumbPointerUp: (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onThumbPointerUp),
        onThumbPositionChange: handleThumbPositionChange,
        onThumbPointerDown: (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onThumbPointerDown),
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* Primitive */.WV.div, {
            ...scrollbarProps,
            ref: composeRefs,
            style: {
                position: "absolute",
                ...scrollbarProps.style
            },
            onPointerDown: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerDown, (event)=>{
                const mainPointer = 0;
                if (event.button === mainPointer) {
                    const element = event.target;
                    element.setPointerCapture(event.pointerId);
                    rectRef.current = scrollbar.getBoundingClientRect();
                    prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
                    document.body.style.webkitUserSelect = "none";
                    if (context.viewport) context.viewport.style.scrollBehavior = "auto";
                    handleDragScroll(event);
                }
            }),
            onPointerMove: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerMove, handleDragScroll),
            onPointerUp: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerUp, (event)=>{
                const element = event.target;
                if (element.hasPointerCapture(event.pointerId)) {
                    element.releasePointerCapture(event.pointerId);
                }
                document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
                if (context.viewport) context.viewport.style.scrollBehavior = "";
                rectRef.current = null;
            })
        })
    });
});
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_presence_dist/* Presence */.z, {
        present: forceMount || scrollbarContext.hasThumb,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaThumbImpl, {
            ref: forwardedRef,
            ...thumbProps
        })
    });
});
var ScrollAreaThumbImpl = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeScrollArea, style, ...thumbProps } = props;
    const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
    const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>scrollbarContext.onThumbChange(node));
    const removeUnlinkedScrollListenerRef = react.useRef();
    const debounceScrollEnd = useDebounceCallback(()=>{
        if (removeUnlinkedScrollListenerRef.current) {
            removeUnlinkedScrollListenerRef.current();
            removeUnlinkedScrollListenerRef.current = void 0;
        }
    }, 100);
    react.useEffect(()=>{
        const viewport = scrollAreaContext.viewport;
        if (viewport) {
            const handleScroll = ()=>{
                debounceScrollEnd();
                if (!removeUnlinkedScrollListenerRef.current) {
                    const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
                    removeUnlinkedScrollListenerRef.current = listener;
                    onThumbPositionChange();
                }
            };
            onThumbPositionChange();
            viewport.addEventListener("scroll", handleScroll);
            return ()=>viewport.removeEventListener("scroll", handleScroll);
        }
    }, [
        scrollAreaContext.viewport,
        debounceScrollEnd,
        onThumbPositionChange
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* Primitive */.WV.div, {
        "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
        ...thumbProps,
        ref: composedRef,
        style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...style
        },
        onPointerDownCapture: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerDownCapture, (event)=>{
            const thumb = event.target;
            const thumbRect = thumb.getBoundingClientRect();
            const x = event.clientX - thumbRect.left;
            const y = event.clientY - thumbRect.top;
            scrollbarContext.onThumbPointerDown({
                x,
                y
            });
        }),
        onPointerUp: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerUp, scrollbarContext.onThumbPointerUp)
    });
});
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner";
var ScrollAreaCorner = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
    const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
    const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
    return hasCorner ? /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaCornerImpl, {
        ...props,
        ref: forwardedRef
    }) : null;
});
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeScrollArea, ...cornerProps } = props;
    const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
    const [width, setWidth] = react.useState(0);
    const [height, setHeight] = react.useState(0);
    const hasSize = Boolean(width && height);
    useResizeObserver(context.scrollbarX, ()=>{
        var _context_scrollbarX;
        const height2 = ((_context_scrollbarX = context.scrollbarX) === null || _context_scrollbarX === void 0 ? void 0 : _context_scrollbarX.offsetHeight) || 0;
        context.onCornerHeightChange(height2);
        setHeight(height2);
    });
    useResizeObserver(context.scrollbarY, ()=>{
        var _context_scrollbarY;
        const width2 = ((_context_scrollbarY = context.scrollbarY) === null || _context_scrollbarY === void 0 ? void 0 : _context_scrollbarY.offsetWidth) || 0;
        context.onCornerWidthChange(width2);
        setWidth(width2);
    });
    return hasSize ? /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* Primitive */.WV.div, {
        ...cornerProps,
        ref: forwardedRef,
        style: {
            width,
            height,
            position: "absolute",
            right: context.dir === "ltr" ? 0 : void 0,
            left: context.dir === "rtl" ? 0 : void 0,
            bottom: 0,
            ...props.style
        }
    }) : null;
});
function toInt(value) {
    return value ? parseInt(value, 10) : 0;
}
function getThumbRatio(viewportSize, contentSize) {
    const ratio = viewportSize / contentSize;
    return isNaN(ratio) ? 0 : ratio;
}
function getThumbSize(sizes) {
    const ratio = getThumbRatio(sizes.viewport, sizes.content);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
    return Math.max(thumbSize, 18);
}
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes) {
    let dir = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "ltr";
    const thumbSizePx = getThumbSize(sizes);
    const thumbCenter = thumbSizePx / 2;
    const offset = pointerOffset || thumbCenter;
    const thumbOffsetFromEnd = thumbSizePx - offset;
    const minPointerPos = sizes.scrollbar.paddingStart + offset;
    const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
    const maxScrollPos = sizes.content - sizes.viewport;
    const scrollRange = dir === "ltr" ? [
        0,
        maxScrollPos
    ] : [
        maxScrollPos * -1,
        0
    ];
    const interpolate = linearScale([
        minPointerPos,
        maxPointerPos
    ], scrollRange);
    return interpolate(pointerPos);
}
function getThumbOffsetFromScroll(scrollPos, sizes) {
    let dir = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "ltr";
    const thumbSizePx = getThumbSize(sizes);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const scrollbar = sizes.scrollbar.size - scrollbarPadding;
    const maxScrollPos = sizes.content - sizes.viewport;
    const maxThumbPos = scrollbar - thumbSizePx;
    const scrollClampRange = dir === "ltr" ? [
        0,
        maxScrollPos
    ] : [
        maxScrollPos * -1,
        0
    ];
    const scrollWithoutMomentum = clamp(scrollPos, scrollClampRange);
    const interpolate = linearScale([
        0,
        maxScrollPos
    ], [
        0,
        maxThumbPos
    ]);
    return interpolate(scrollWithoutMomentum);
}
function linearScale(input, output) {
    return (value)=>{
        if (input[0] === input[1] || output[0] === output[1]) return output[0];
        const ratio = (output[1] - output[0]) / (input[1] - input[0]);
        return output[0] + ratio * (value - input[0]);
    };
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
    return scrollPos > 0 && scrollPos < maxScrollPos;
}
var addUnlinkedScrollListener = function(node) {
    let handler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ()=>{};
    let prevPosition = {
        left: node.scrollLeft,
        top: node.scrollTop
    };
    let rAF = 0;
    (function loop() {
        const position = {
            left: node.scrollLeft,
            top: node.scrollTop
        };
        const isHorizontalScroll = prevPosition.left !== position.left;
        const isVerticalScroll = prevPosition.top !== position.top;
        if (isHorizontalScroll || isVerticalScroll) handler();
        prevPosition = position;
        rAF = window.requestAnimationFrame(loop);
    })();
    return ()=>window.cancelAnimationFrame(rAF);
};
function useDebounceCallback(callback, delay) {
    const handleCallback = (0,react_use_callback_ref_dist/* useCallbackRef */.W)(callback);
    const debounceTimerRef = react.useRef(0);
    react.useEffect(()=>()=>window.clearTimeout(debounceTimerRef.current), []);
    return react.useCallback(()=>{
        window.clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = window.setTimeout(handleCallback, delay);
    }, [
        handleCallback,
        delay
    ]);
}
function useResizeObserver(element, onResize) {
    const handleResize = (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onResize);
    (0,react_use_layout_effect_dist/* useLayoutEffect */.b)(()=>{
        let rAF = 0;
        if (element) {
            const resizeObserver = new ResizeObserver(()=>{
                cancelAnimationFrame(rAF);
                rAF = window.requestAnimationFrame(handleResize);
            });
            resizeObserver.observe(element);
            return ()=>{
                window.cancelAnimationFrame(rAF);
                resizeObserver.unobserve(element);
            };
        }
    }, [
        element,
        handleResize
    ]);
}
function getSubtree(options, content) {
    const { asChild, children } = options;
    if (!asChild) return typeof content === "function" ? content(children) : content;
    const firstChild = react.Children.only(children);
    return /*#__PURE__*/ react.cloneElement(firstChild, {
        children: typeof content === "function" ? content(firstChild.props.children) : content
    });
}
var Root = ScrollArea;
var Viewport = ScrollAreaViewport;
var Scrollbar = ScrollAreaScrollbar;
var Thumb = (/* unused pure expression or super */ null && (ScrollAreaThumb));
var Corner = ScrollAreaCorner;
 //# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/fumadocs-ui/dist/chunk-2FLZOPQN.js


// src/components/ui/scroll-area.tsx



var chunk_2FLZOPQN_ScrollArea = react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(
  Root,
  {
    ref,
    className: (0,bundle_mjs/* twMerge */.m6)("overflow-hidden", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Corner, {}),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollBar, { orientation: "vertical" })
    ]
  }
));
chunk_2FLZOPQN_ScrollArea.displayName = Root.displayName;
var ScrollViewport = react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
  Viewport,
  {
    ref,
    className: (0,bundle_mjs/* twMerge */.m6)("size-full rounded-[inherit]", className),
    ...props,
    children
  }
));
ScrollViewport.displayName = Viewport.displayName;
var ScrollBar = react.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
  Scrollbar,
  {
    ref,
    orientation,
    className: (0,bundle_mjs/* twMerge */.m6)(
      "flex select-none data-[state=hidden]:animate-fd-fade-out",
      orientation === "vertical" && "h-full w-1.5",
      orientation === "horizontal" && "h-1.5 flex-col",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-fd-border" })
  }
));
ScrollBar.displayName = Scrollbar.displayName;




/***/ }),

/***/ 5763:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ TreeContextProvider),
/* harmony export */   W: () => (/* binding */ useTreeContext)
/* harmony export */ });
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6463);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var fumadocs_core_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5772);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7437);
// src/contexts/tree.tsx




var TreeContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0);
function scanNavigationList(tree, list) {
  tree.forEach((node) => {
    if (node.type === "folder") {
      if (node.index) {
        list.push(node.index);
      }
      scanNavigationList(node.children, list);
      return;
    }
    if (node.type === "page" && !node.external) {
      list.push(node);
    }
  });
}
function TreeContextProvider({
  children,
  tree
}) {
  const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.usePathname)();
  const cache = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const path = (0,fumadocs_core_breadcrumb__WEBPACK_IMPORTED_MODULE_2__/* .searchPath */ .gx)(tree.children, pathname) ?? [];
    const root = path.findLast(
      (item) => item.type === "folder" && item.root
    ) ?? tree;
    return {
      path,
      root,
      getNeighbours() {
        cache.current ??= /* @__PURE__ */ new WeakMap();
        let result = cache.current.get(root);
        if (!result) {
          result = [];
          scanNavigationList(root.children, result);
          cache.current.set(root, result);
        }
        const idx = result.findIndex((item) => item.url === pathname);
        if (idx === -1) return [void 0, void 0];
        return [result[idx - 1], result[idx + 1]];
      }
    };
  }, [pathname, tree]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(TreeContext.Provider, { value, children });
}
function useTreeContext() {
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TreeContext);
  if (!ctx)
    throw new Error("You must wrap this component under <DocsLayout />");
  return ctx;
}




/***/ })

}]);