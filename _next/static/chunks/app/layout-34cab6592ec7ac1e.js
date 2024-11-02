(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[185],{

/***/ 630:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6561));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3247, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2678, 23));


/***/ }),

/***/ 6561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Provider: () => (/* binding */ Provider)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-ET4TW6M5.js
var chunk_ET4TW6M5 = __webpack_require__(8050);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-YL3MZH7N.js
var chunk_YL3MZH7N = __webpack_require__(5763);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-27HFSL7N.js
var chunk_27HFSL7N = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-EFMHXXHW.js
var chunk_EFMHXXHW = __webpack_require__(9145);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-MLKGABMK.js
var chunk_MLKGABMK = __webpack_require__(894);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.mjs
var dist = __webpack_require__(9512);
// EXTERNAL MODULE: ./node_modules/next/dist/shared/lib/app-dynamic.js
var app_dynamic = __webpack_require__(551);
var app_dynamic_default = /*#__PURE__*/__webpack_require__.n(app_dynamic);
;// CONCATENATED MODULE: ./node_modules/next/dist/api/app-dynamic.js



//# sourceMappingURL=app-dynamic.js.map
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-direction/dist/index.mjs
var react_direction_dist = __webpack_require__(7513);
;// CONCATENATED MODULE: ./node_modules/fumadocs-ui/dist/provider.js
/* __next_internal_client_entry_do_not_use__ RootProvider,useI18n,useSearchContext,useSidebar,useTreeContext auto */ 




// src/provider.tsx




var DefaultSearchDialog = app_dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(49), __webpack_require__.e(569), __webpack_require__.e(235)]).then(__webpack_require__.bind(__webpack_require__, 235)), {
    loadableGenerated: {
        webpack: ()=>[
                require.resolveWeak("./components/dialog/search-default.js")
            ]
    },
    ssr: false
});
function RootProvider(param) {
    let { children, dir, theme: { enabled = true, ...theme } = {}, search } = param;
    let body = children;
    if ((search === null || search === void 0 ? void 0 : search.enabled) !== false) body = /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_ET4TW6M5/* SearchProvider */.X, {
        SearchDialog: DefaultSearchDialog,
        ...search,
        children: body
    });
    if (enabled) body = /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* ThemeProvider */.f, {
        attribute: "class",
        defaultTheme: "system",
        enableSystem: true,
        disableTransitionOnChange: true,
        ...theme,
        children: body
    });
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_direction_dist/* DirectionProvider */._9, {
        dir: dir !== null && dir !== void 0 ? dir : "ltr",
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_27HFSL7N/* SidebarProvider */.H, {
            children: body
        })
    });
}


;// CONCATENATED MODULE: ./app/components/provider.tsx
/* __next_internal_client_entry_do_not_use__ Provider auto */ 


const SearchDialog = app_dynamic_default()(()=>__webpack_require__.e(/* import() */ 194).then(__webpack_require__.bind(__webpack_require__, 9194)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(9194)
            ]
    },
    ssr: false
});
function Provider(param) {
    let { children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RootProvider, {
        search: {
            SearchDialog
        },
        children: children
    });
}


/***/ }),

/***/ 551:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return dynamic;
    }
}));
const _interop_require_default = __webpack_require__(9920);
const _loadable = /*#__PURE__*/ _interop_require_default._(__webpack_require__(148));
function dynamic(dynamicOptions, options) {
    var _mergedOptions_loadableGenerated;
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: (_mergedOptions_loadableGenerated = mergedOptions.loadableGenerated) == null ? void 0 : _mergedOptions_loadableGenerated.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map


/***/ }),

/***/ 912:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
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

/***/ 148:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _jsxruntime = __webpack_require__(7437);
const _react = __webpack_require__(2265);
const _dynamicbailouttocsr = __webpack_require__(912);
const _preloadchunks = __webpack_require__(5025);
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map


/***/ }),

/***/ 5025:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
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

/***/ 2678:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3247:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"style":{"fontFamily":"'Inter', 'Inter Fallback'","fontStyle":"normal"},"className":"__className_d65c78"};

/***/ }),

/***/ 5772:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* reexport safe */ _chunk_EMWGTXSW_js__WEBPACK_IMPORTED_MODULE_0__.p)
/* harmony export */ });
/* harmony import */ var _chunk_EMWGTXSW_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7655);
/* harmony import */ var _chunk_MLKGABMK_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7067);





/***/ }),

/***/ 7753:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 8050:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useSearchContext),
/* harmony export */   X: () => (/* binding */ SearchProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7437);
// src/contexts/search.tsx


var SearchContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  enabled: false,
  hotKey: [],
  setOpenSearch: () => void 0
});
function useSearchContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SearchContext);
}
function SearchProvider({
  SearchDialog,
  children,
  preload = true,
  options,
  hotKey = [
    {
      key: (e) => e.metaKey || e.ctrlKey,
      display: "\u2318"
    },
    {
      key: "k",
      display: "K"
    }
  ],
  links
}) {
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(preload ? false : void 0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handler = (e) => {
      if (hotKey.every(
        (v) => typeof v.key === "string" ? e.key === v.key : v.key(e)
      )) {
        setIsOpen(true);
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [hotKey]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
    SearchContext.Provider,
    {
      value: (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
        () => ({ enabled: true, hotKey, setOpenSearch: setIsOpen }),
        [hotKey]
      ),
      children: [
        isOpen !== void 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          SearchDialog,
          {
            open: isOpen,
            onOpenChange: setIsOpen,
            links,
            ...options
          }
        ),
        children
      ]
    }
  );
}




/***/ }),

/***/ 5763:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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




/***/ }),

/***/ 9512:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ j),
/* harmony export */   f: () => (/* binding */ z)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* __next_internal_client_entry_do_not_use__ ThemeProvider,useTheme auto */ 
var P = [
    "light",
    "dark"
], E = "(prefers-color-scheme: dark)", Q = typeof window == "undefined", L = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0), D = {
    setTheme: (e)=>{},
    themes: []
}, j = ()=>{
    var e;
    return (e = react__WEBPACK_IMPORTED_MODULE_0__.useContext(L)) != null ? e : D;
}, z = (e)=>react__WEBPACK_IMPORTED_MODULE_0__.useContext(L) ? e.children : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(O, {
        ...e
    }), N = [
    "light",
    "dark"
], O = (param)=>{
    let { forcedTheme: e, disableTransitionOnChange: a = !1, enableSystem: n = !0, enableColorScheme: g = !0, storageKey: m = "theme", themes: c = N, defaultTheme: o = n ? "system" : "light", attribute: y = "data-theme", value: h, children: k, nonce: w } = param;
    let [i, d] = react__WEBPACK_IMPORTED_MODULE_0__.useState(()=>M(m, o)), [S, l] = react__WEBPACK_IMPORTED_MODULE_0__.useState(()=>M(m)), u = h ? Object.values(h) : c, R = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((s)=>{
        let r = s;
        if (!r) return;
        s === "system" && n && (r = T());
        let v = h ? h[r] : r, C = a ? _() : null, x = document.documentElement;
        if (y === "class" ? (x.classList.remove(...u), v && x.classList.add(v)) : v ? x.setAttribute(y, v) : x.removeAttribute(y), g) {
            let I = P.includes(o) ? o : null, A = P.includes(r) ? r : I;
            x.style.colorScheme = A;
        }
        C == null || C();
    }, []), f = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((s)=>{
        let r = typeof s == "function" ? s(s) : s;
        d(r);
        try {
            localStorage.setItem(m, r);
        } catch (v) {}
    }, [
        e
    ]), p = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((s)=>{
        let r = T(s);
        l(r), i === "system" && n && !e && R("system");
    }, [
        i,
        e
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        let s = window.matchMedia(E);
        return s.addListener(p), p(s), ()=>s.removeListener(p);
    }, [
        p
    ]), react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        let s = (r)=>{
            if (r.key !== m) return;
            let v = r.newValue || o;
            f(v);
        };
        return window.addEventListener("storage", s), ()=>window.removeEventListener("storage", s);
    }, [
        f
    ]), react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        R(e != null ? e : i);
    }, [
        e,
        i
    ]);
    let $ = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({
            theme: i,
            setTheme: f,
            forcedTheme: e,
            resolvedTheme: i === "system" ? S : i,
            themes: n ? [
                ...c,
                "system"
            ] : c,
            systemTheme: n ? S : void 0
        }), [
        i,
        f,
        e,
        S,
        n,
        c
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(L.Provider, {
        value: $
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(U, {
        forcedTheme: e,
        disableTransitionOnChange: a,
        enableSystem: n,
        enableColorScheme: g,
        storageKey: m,
        themes: c,
        defaultTheme: o,
        attribute: y,
        value: h,
        children: k,
        attrs: u,
        nonce: w
    }), k);
}, U = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.memo((param)=>{
    let { forcedTheme: e, storageKey: a, attribute: n, enableSystem: g, enableColorScheme: m, defaultTheme: c, value: o, attrs: y, nonce: h } = param;
    let k = c === "system", w = n === "class" ? "var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(y.map((u)=>"'".concat(u, "'")).join(","), ")"), ";") : "var d=document.documentElement,n='".concat(n, "',s='setAttribute';"), i = m ? (P.includes(c) ? c : null) ? "if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c, "'") : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", d = function(l) {
        let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        let f = o ? o[l] : l, p = u ? l + "|| ''" : "'".concat(f, "'"), $ = "";
        return m && R && !u && P.includes(l) && ($ += "d.style.colorScheme = '".concat(l, "';")), n === "class" ? u || f ? $ += "c.add(".concat(p, ")") : $ += "null" : f && ($ += "d[s](n,".concat(p, ")")), $;
    }, S = e ? "!function(){".concat(w).concat(d(e), "}()") : g ? "!function(){try{".concat(w, "var e=localStorage.getItem('").concat(a, "');if('system'===e||(!e&&").concat(k, ")){var t='").concat(E, "',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(d("dark"), "}else{").concat(d("light"), "}}else if(e){").concat(o ? "var x=".concat(JSON.stringify(o), ";") : "").concat(d(o ? "x[e]" : "e", !0), "}").concat(k ? "" : "else{" + d(c, !1, !1) + "}").concat(i, "}catch(e){}}()") : "!function(){try{".concat(w, "var e=localStorage.getItem('").concat(a, "');if(e){").concat(o ? "var x=".concat(JSON.stringify(o), ";") : "").concat(d(o ? "x[e]" : "e", !0), "}else{").concat(d(c, !1, !1), ";}").concat(i, "}catch(t){}}();");
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("script", {
        nonce: h,
        dangerouslySetInnerHTML: {
            __html: S
        }
    });
}), M = (e, a)=>{
    if (Q) return;
    let n;
    try {
        n = localStorage.getItem(e) || void 0;
    } catch (g) {}
    return n || a;
}, _ = ()=>{
    let e = document.createElement("style");
    return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e), ()=>{
        window.getComputedStyle(document.body), setTimeout(()=>{
            document.head.removeChild(e);
        }, 1);
    };
}, T = (e)=>(e || (e = window.matchMedia(E)), e.matches ? "dark" : "light");



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [663,811,130,215,744], () => (__webpack_exec__(630)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);