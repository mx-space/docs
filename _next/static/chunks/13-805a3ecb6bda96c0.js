"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[13],{

/***/ 4631:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ isActive)
/* harmony export */ });
// src/utils/shared.ts
function isActive(url, pathname, nested = true) {
  return url === pathname || nested && pathname.startsWith(`${url}/`);
}




/***/ }),

/***/ 8050:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ 8125:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ LanguageToggleText),
/* harmony export */   j: () => (/* binding */ LanguageToggle)
/* harmony export */ });
/* harmony import */ var _chunk_QKOA6KEZ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3950);
/* harmony import */ var _chunk_IVBHRX3O_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var _chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6164);
/* harmony import */ var _chunk_EFMHXXHW_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9145);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7437);





// src/components/layout/language-toggle.tsx

function LanguageToggle(props) {
  const context = (0,_chunk_EFMHXXHW_js__WEBPACK_IMPORTED_MODULE_2__/* .useI18n */ .Q)();
  if (!context.locales) throw new Error("Missing `<I18nProvider />`");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chunk_IVBHRX3O_js__WEBPACK_IMPORTED_MODULE_1__/* .Popover */ .J2, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
      _chunk_IVBHRX3O_js__WEBPACK_IMPORTED_MODULE_1__/* .PopoverTrigger */ .xo,
      {
        "aria-label": context.text.chooseLanguage,
        ...props,
        className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_4__/* .twMerge */ .m6)(
          (0,_chunk_QKOA6KEZ_js__WEBPACK_IMPORTED_MODULE_0__/* .buttonVariants */ .d)({
            color: "ghost",
            className: "gap-1.5 p-1.5"
          }),
          props.className
        ),
        children: props.children
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chunk_IVBHRX3O_js__WEBPACK_IMPORTED_MODULE_1__/* .PopoverContent */ .yk, { className: "flex flex-col overflow-hidden p-0", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", { className: "mb-1 p-2 text-xs font-medium text-fd-muted-foreground", children: context.text.chooseLanguage }),
      context.locales.map((item) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
        "button",
        {
          type: "button",
          className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_4__/* .twMerge */ .m6)(
            "p-2 text-start text-sm",
            item.locale === context.locale ? "bg-fd-primary/10 font-medium text-fd-primary" : "hover:bg-fd-accent hover:text-fd-accent-foreground"
          ),
          onClick: () => {
            context.onChange?.(item.locale);
          },
          children: item.name
        },
        item.locale
      ))
    ] })
  ] });
}
function LanguageToggleText(props) {
  const context = (0,_chunk_EFMHXXHW_js__WEBPACK_IMPORTED_MODULE_2__/* .useI18n */ .Q)();
  const text = context.locales?.find(
    (item) => item.locale === context.locale
  )?.name;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", { ...props, children: text });
}




/***/ }),

/***/ 8704:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tl: () => (/* binding */ ThemeToggle),
/* harmony export */   _R: () => (/* binding */ IconItem),
/* harmony export */   uc: () => (/* binding */ BaseLinkItem),
/* harmony export */   yO: () => (/* binding */ ButtonItem)
/* harmony export */ });
/* harmony import */ var _chunk_CDPVENXR_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4631);
/* harmony import */ var _chunk_QKOA6KEZ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3950);
/* harmony import */ var _chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3592);
/* harmony import */ var _chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6164);
/* harmony import */ var fumadocs_core_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4275);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6463);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2265);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7437);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3525);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9512);





// src/layouts/links.tsx




var BaseLinkItem = (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(({ item, ...props }, ref) => {
  const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
  const activeType = item.active ?? "url";
  const active = activeType !== "none" && (0,_chunk_CDPVENXR_js__WEBPACK_IMPORTED_MODULE_6__/* .isActive */ .z)(item.url, pathname, activeType === "nested-url");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
    fumadocs_core_link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    {
      ref,
      href: item.url,
      external: item.external,
      ...props,
      "data-active": active,
      children: props.children
    }
  );
});
BaseLinkItem.displayName = "BaseLinkItem";
var ButtonItem = (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(({ item, ...props }, ref) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
    fumadocs_core_link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    {
      ref,
      href: item.url,
      external: item.external,
      ...props,
      className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_7__/* .twMerge */ .m6)(
        (0,_chunk_QKOA6KEZ_js__WEBPACK_IMPORTED_MODULE_0__/* .buttonVariants */ .d)({ color: "secondary" }),
        "gap-1.5 [&_svg]:size-4",
        props.className
      ),
      children: [
        item.icon,
        item.text
      ]
    }
  );
});
ButtonItem.displayName = "ButtonItem";
var IconItem = (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(({ item, ...props }, ref) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
    fumadocs_core_link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    {
      ref,
      "aria-label": item.label,
      href: item.url,
      external: item.external,
      ...props,
      className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_7__/* .twMerge */ .m6)(
        (0,_chunk_QKOA6KEZ_js__WEBPACK_IMPORTED_MODULE_0__/* .buttonVariants */ .d)({
          size: "icon",
          color: "ghost"
        }),
        props.className
      ),
      children: item.icon
    }
  );
});
IconItem.displayName = "IconItem";

// src/components/layout/theme-toggle.tsx



var buttonVariants2 = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_9__/* .cva */ .j)("size-6 rounded-full p-1 text-fd-muted-foreground", {
  variants: {
    dark: {
      true: "dark:bg-fd-accent dark:text-fd-accent-foreground",
      false: "bg-fd-accent text-fd-accent-foreground dark:bg-transparent dark:text-fd-muted-foreground"
    }
  }
});
function ThemeToggle({
  className,
  ...props
}) {
  const { setTheme, resolvedTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_8__/* .useTheme */ .F)();
  const onToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
    "button",
    {
      type: "button",
      className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_7__/* .twMerge */ .m6)(
        "inline-flex items-center rounded-full border p-0.5",
        className
      ),
      "data-theme-toggle": "",
      "aria-label": "Toggle Theme",
      onClick: onToggle,
      ...props,
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_1__/* .Sun */ .kO, { className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_7__/* .twMerge */ .m6)(buttonVariants2({ dark: false })) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_1__/* .Moon */ .JF, { className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_7__/* .twMerge */ .m6)(buttonVariants2({ dark: true })) })
      ]
    }
  );
}




/***/ }),

/***/ 4294:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ LargeSearchToggle),
/* harmony export */   _: () => (/* binding */ SearchToggle)
/* harmony export */ });
/* harmony import */ var _chunk_QKOA6KEZ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3950);
/* harmony import */ var _chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3592);
/* harmony import */ var _chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6164);
/* harmony import */ var _chunk_ET4TW6M5_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8050);
/* harmony import */ var _chunk_EFMHXXHW_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9145);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7437);






// src/components/layout/search-toggle.tsx

function SearchToggle(props) {
  const { setOpenSearch } = (0,_chunk_ET4TW6M5_js__WEBPACK_IMPORTED_MODULE_2__/* .useSearchContext */ .A)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
    "button",
    {
      type: "button",
      className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_5__/* .twMerge */ .m6)(
        (0,_chunk_QKOA6KEZ_js__WEBPACK_IMPORTED_MODULE_0__/* .buttonVariants */ .d)({
          size: "icon",
          color: "ghost",
          className: props.className
        })
      ),
      "data-search": "",
      "aria-label": "Open Search",
      onClick: () => {
        setOpenSearch(true);
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_1__/* .Search */ .ol, {})
    }
  );
}
function LargeSearchToggle(props) {
  const { hotKey, setOpenSearch } = (0,_chunk_ET4TW6M5_js__WEBPACK_IMPORTED_MODULE_2__/* .useSearchContext */ .A)();
  const { text } = (0,_chunk_EFMHXXHW_js__WEBPACK_IMPORTED_MODULE_3__/* .useI18n */ .Q)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
    "button",
    {
      type: "button",
      "data-search-full": "",
      ...props,
      className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_5__/* .twMerge */ .m6)(
        "inline-flex items-center gap-2 rounded-full border bg-fd-secondary/50 p-1.5 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground",
        props.className
      ),
      onClick: () => {
        setOpenSearch(true);
      },
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_1__/* .Search */ .ol, { className: "ms-1 size-4" }),
        text.search,
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", { className: "ms-auto inline-flex gap-0.5", children: hotKey.map((k, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("kbd", { className: "rounded-md border bg-fd-background px-1.5", children: k.display }, i)) })
      ]
    }
  );
}




/***/ }),

/***/ 6013:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Nav: () => (/* binding */ Nav),
  NavProvider: () => (/* reexport */ chunk_MCX7E6ZW/* NavProvider */.N7)
});

// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-PZTQPB4U.js
var chunk_PZTQPB4U = __webpack_require__(8704);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-V6RONFCQ.js
var chunk_V6RONFCQ = __webpack_require__(4294);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-KZTWSBYY.js
var chunk_KZTWSBYY = __webpack_require__(8125);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-QKOA6KEZ.js
var chunk_QKOA6KEZ = __webpack_require__(3950);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-MCX7E6ZW.js
var chunk_MCX7E6ZW = __webpack_require__(9471);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-IVBHRX3O.js + 10 modules
var chunk_IVBHRX3O = __webpack_require__(7076);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-5QPVK7QM.js
var chunk_5QPVK7QM = __webpack_require__(3592);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/bundle-mjs.mjs
var bundle_mjs = __webpack_require__(6164);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-ET4TW6M5.js
var chunk_ET4TW6M5 = __webpack_require__(8050);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-EFMHXXHW.js
var chunk_EFMHXXHW = __webpack_require__(9145);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-MLKGABMK.js
var chunk_MLKGABMK = __webpack_require__(894);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs + 1 modules
var dist = __webpack_require__(3525);
// EXTERNAL MODULE: ./node_modules/fumadocs-core/dist/link.js + 1 modules
var dist_link = __webpack_require__(4275);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react-dom/index.js
var react_dom = __webpack_require__(4887);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-context/dist/index.mjs
var react_context_dist = __webpack_require__(8324);
// EXTERNAL MODULE: ./node_modules/@radix-ui/primitive/dist/index.mjs
var primitive_dist = __webpack_require__(8149);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var react_primitive_dist = __webpack_require__(5171);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var react_use_controllable_state_dist = __webpack_require__(1715);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(1584);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-direction/dist/index.mjs
var react_direction_dist = __webpack_require__(7513);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-presence/dist/index.mjs
var react_presence_dist = __webpack_require__(1383);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-id/dist/index.mjs
var react_id_dist = __webpack_require__(3201);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-collection/dist/index.mjs + 1 modules
var react_collection_dist = __webpack_require__(6402);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs + 1 modules
var react_dismissable_layer_dist = __webpack_require__(2358);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-previous/dist/index.mjs
// packages/react/use-previous/src/usePrevious.tsx

function usePrevious(value) {
  const ref = react.useRef({ value, previous: value });
  return react.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}

//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var react_use_layout_effect_dist = __webpack_require__(1336);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var react_use_callback_ref_dist = __webpack_require__(5137);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
// packages/react/visually-hidden/src/VisuallyHidden.tsx



var NAME = "VisuallyHidden";
var VisuallyHidden = react.forwardRef(
  (props, forwardedRef) => {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      react_primitive_dist/* Primitive */.WV.span,
      {
        ...props,
        ref: forwardedRef,
        style: {
          // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...props.style
        }
      }
    );
  }
);
VisuallyHidden.displayName = NAME;
var Root = VisuallyHidden;

//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Content,Indicator,Item,Link,List,NavigationMenu,NavigationMenuContent,NavigationMenuIndicator,NavigationMenuItem,NavigationMenuLink,NavigationMenuList,NavigationMenuSub,NavigationMenuTrigger,NavigationMenuViewport,Root,Sub,Trigger,Viewport,createNavigationMenuScope auto */ // packages/react/navigation-menu/src/NavigationMenu.tsx

















var NAVIGATION_MENU_NAME = "NavigationMenu";
var [Collection, useCollection, createCollectionScope] = (0,react_collection_dist/* createCollection */.B)(NAVIGATION_MENU_NAME);
var [FocusGroupCollection, useFocusGroupCollection, createFocusGroupCollectionScope] = (0,react_collection_dist/* createCollection */.B)(NAVIGATION_MENU_NAME);
var [createNavigationMenuContext, createNavigationMenuScope] = (0,react_context_dist/* createContextScope */.b)(NAVIGATION_MENU_NAME, [
    createCollectionScope,
    createFocusGroupCollectionScope
]);
var [NavigationMenuProviderImpl, useNavigationMenuContext] = createNavigationMenuContext(NAVIGATION_MENU_NAME);
var [ViewportContentProvider, useViewportContentContext] = createNavigationMenuContext(NAVIGATION_MENU_NAME);
var NavigationMenu = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, value: valueProp, onValueChange, defaultValue, delayDuration = 200, skipDelayDuration = 300, orientation = "horizontal", dir, ...NavigationMenuProps } = props;
    const [navigationMenu, setNavigationMenu] = react.useState(null);
    const composedRef = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>setNavigationMenu(node));
    const direction = (0,react_direction_dist/* useDirection */.gm)(dir);
    const openTimerRef = react.useRef(0);
    const closeTimerRef = react.useRef(0);
    const skipDelayTimerRef = react.useRef(0);
    const [isOpenDelayed, setIsOpenDelayed] = react.useState(true);
    const [value = "", setValue] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: valueProp,
        onChange: (value2)=>{
            const isOpen = value2 !== "";
            const hasSkipDelayDuration = skipDelayDuration > 0;
            if (isOpen) {
                window.clearTimeout(skipDelayTimerRef.current);
                if (hasSkipDelayDuration) setIsOpenDelayed(false);
            } else {
                window.clearTimeout(skipDelayTimerRef.current);
                skipDelayTimerRef.current = window.setTimeout(()=>setIsOpenDelayed(true), skipDelayDuration);
            }
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(value2);
        },
        defaultProp: defaultValue
    });
    const startCloseTimer = react.useCallback(()=>{
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = window.setTimeout(()=>setValue(""), 150);
    }, [
        setValue
    ]);
    const handleOpen = react.useCallback((itemValue)=>{
        window.clearTimeout(closeTimerRef.current);
        setValue(itemValue);
    }, [
        setValue
    ]);
    const handleDelayedOpen = react.useCallback((itemValue)=>{
        const isOpenItem = value === itemValue;
        if (isOpenItem) {
            window.clearTimeout(closeTimerRef.current);
        } else {
            openTimerRef.current = window.setTimeout(()=>{
                window.clearTimeout(closeTimerRef.current);
                setValue(itemValue);
            }, delayDuration);
        }
    }, [
        value,
        setValue,
        delayDuration
    ]);
    react.useEffect(()=>{
        return ()=>{
            window.clearTimeout(openTimerRef.current);
            window.clearTimeout(closeTimerRef.current);
            window.clearTimeout(skipDelayTimerRef.current);
        };
    }, []);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(NavigationMenuProvider, {
        scope: __scopeNavigationMenu,
        isRootMenu: true,
        value,
        dir: direction,
        orientation,
        rootNavigationMenu: navigationMenu,
        onTriggerEnter: (itemValue)=>{
            window.clearTimeout(openTimerRef.current);
            if (isOpenDelayed) handleDelayedOpen(itemValue);
            else handleOpen(itemValue);
        },
        onTriggerLeave: ()=>{
            window.clearTimeout(openTimerRef.current);
            startCloseTimer();
        },
        onContentEnter: ()=>window.clearTimeout(closeTimerRef.current),
        onContentLeave: startCloseTimer,
        onItemSelect: (itemValue)=>{
            setValue((prevValue)=>prevValue === itemValue ? "" : itemValue);
        },
        onItemDismiss: ()=>setValue(""),
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.nav, {
            "aria-label": "Main",
            "data-orientation": orientation,
            dir: direction,
            ...NavigationMenuProps,
            ref: composedRef
        })
    });
});
NavigationMenu.displayName = NAVIGATION_MENU_NAME;
var SUB_NAME = "NavigationMenuSub";
var NavigationMenuSub = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", ...subProps } = props;
    const context = useNavigationMenuContext(SUB_NAME, __scopeNavigationMenu);
    const [value = "", setValue] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: valueProp,
        onChange: onValueChange,
        defaultProp: defaultValue
    });
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(NavigationMenuProvider, {
        scope: __scopeNavigationMenu,
        isRootMenu: false,
        value,
        dir: context.dir,
        orientation,
        rootNavigationMenu: context.rootNavigationMenu,
        onTriggerEnter: (itemValue)=>setValue(itemValue),
        onItemSelect: (itemValue)=>setValue(itemValue),
        onItemDismiss: ()=>setValue(""),
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.div, {
            "data-orientation": orientation,
            ...subProps,
            ref: forwardedRef
        })
    });
});
NavigationMenuSub.displayName = SUB_NAME;
var NavigationMenuProvider = (props)=>{
    const { scope, isRootMenu, rootNavigationMenu, dir, orientation, children, value, onItemSelect, onItemDismiss, onTriggerEnter, onTriggerLeave, onContentEnter, onContentLeave } = props;
    const [viewport, setViewport] = react.useState(null);
    const [viewportContent, setViewportContent] = react.useState(/* @__PURE__ */ new Map());
    const [indicatorTrack, setIndicatorTrack] = react.useState(null);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(NavigationMenuProviderImpl, {
        scope,
        isRootMenu,
        rootNavigationMenu,
        value,
        previousValue: usePrevious(value),
        baseId: (0,react_id_dist/* useId */.M)(),
        dir,
        orientation,
        viewport,
        onViewportChange: setViewport,
        indicatorTrack,
        onIndicatorTrackChange: setIndicatorTrack,
        onTriggerEnter: (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onTriggerEnter),
        onTriggerLeave: (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onTriggerLeave),
        onContentEnter: (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onContentEnter),
        onContentLeave: (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onContentLeave),
        onItemSelect: (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onItemSelect),
        onItemDismiss: (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onItemDismiss),
        onViewportContentChange: react.useCallback((contentValue, contentData)=>{
            setViewportContent((prevContent)=>{
                prevContent.set(contentValue, contentData);
                return new Map(prevContent);
            });
        }, []),
        onViewportContentRemove: react.useCallback((contentValue)=>{
            setViewportContent((prevContent)=>{
                if (!prevContent.has(contentValue)) return prevContent;
                prevContent.delete(contentValue);
                return new Map(prevContent);
            });
        }, []),
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Collection.Provider, {
            scope,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ViewportContentProvider, {
                scope,
                items: viewportContent,
                children
            })
        })
    });
};
var LIST_NAME = "NavigationMenuList";
var NavigationMenuList = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, ...listProps } = props;
    const context = useNavigationMenuContext(LIST_NAME, __scopeNavigationMenu);
    const list = /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.ul, {
        "data-orientation": context.orientation,
        ...listProps,
        ref: forwardedRef
    });
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.div, {
        style: {
            position: "relative"
        },
        ref: context.onIndicatorTrackChange,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Collection.Slot, {
            scope: __scopeNavigationMenu,
            children: context.isRootMenu ? /* @__PURE__ */ (0,jsx_runtime.jsx)(FocusGroup, {
                asChild: true,
                children: list
            }) : list
        })
    });
});
NavigationMenuList.displayName = LIST_NAME;
var ITEM_NAME = "NavigationMenuItem";
var [NavigationMenuItemContextProvider, useNavigationMenuItemContext] = createNavigationMenuContext(ITEM_NAME);
var NavigationMenuItem = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, value: valueProp, ...itemProps } = props;
    const autoValue = (0,react_id_dist/* useId */.M)();
    const value = valueProp || autoValue || "LEGACY_REACT_AUTO_VALUE";
    const contentRef = react.useRef(null);
    const triggerRef = react.useRef(null);
    const focusProxyRef = react.useRef(null);
    const restoreContentTabOrderRef = react.useRef(()=>{});
    const wasEscapeCloseRef = react.useRef(false);
    const handleContentEntry = react.useCallback(function() {
        let side = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "start";
        if (contentRef.current) {
            restoreContentTabOrderRef.current();
            const candidates = getTabbableCandidates(contentRef.current);
            if (candidates.length) focusFirst(side === "start" ? candidates : candidates.reverse());
        }
    }, []);
    const handleContentExit = react.useCallback(()=>{
        if (contentRef.current) {
            const candidates = getTabbableCandidates(contentRef.current);
            if (candidates.length) restoreContentTabOrderRef.current = removeFromTabOrder(candidates);
        }
    }, []);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(NavigationMenuItemContextProvider, {
        scope: __scopeNavigationMenu,
        value,
        triggerRef,
        contentRef,
        focusProxyRef,
        wasEscapeCloseRef,
        onEntryKeyDown: handleContentEntry,
        onFocusProxyEnter: handleContentEntry,
        onRootContentClose: handleContentExit,
        onContentFocusOutside: handleContentExit,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.li, {
            ...itemProps,
            ref: forwardedRef
        })
    });
});
NavigationMenuItem.displayName = ITEM_NAME;
var TRIGGER_NAME = "NavigationMenuTrigger";
var NavigationMenuTrigger = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, disabled, ...triggerProps } = props;
    const context = useNavigationMenuContext(TRIGGER_NAME, props.__scopeNavigationMenu);
    const itemContext = useNavigationMenuItemContext(TRIGGER_NAME, props.__scopeNavigationMenu);
    const ref = react.useRef(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(ref, itemContext.triggerRef, forwardedRef);
    const triggerId = makeTriggerId(context.baseId, itemContext.value);
    const contentId = makeContentId(context.baseId, itemContext.value);
    const hasPointerMoveOpenedRef = react.useRef(false);
    const wasClickCloseRef = react.useRef(false);
    const open = itemContext.value === context.value;
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Collection.ItemSlot, {
                scope: __scopeNavigationMenu,
                value: itemContext.value,
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(FocusGroupItem, {
                    asChild: true,
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.button, {
                        id: triggerId,
                        disabled,
                        "data-disabled": disabled ? "" : void 0,
                        "data-state": getOpenState(open),
                        "aria-expanded": open,
                        "aria-controls": contentId,
                        ...triggerProps,
                        ref: composedRefs,
                        onPointerEnter: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerEnter, ()=>{
                            wasClickCloseRef.current = false;
                            itemContext.wasEscapeCloseRef.current = false;
                        }),
                        onPointerMove: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerMove, whenMouse(()=>{
                            if (disabled || wasClickCloseRef.current || itemContext.wasEscapeCloseRef.current || hasPointerMoveOpenedRef.current) return;
                            context.onTriggerEnter(itemContext.value);
                            hasPointerMoveOpenedRef.current = true;
                        })),
                        onPointerLeave: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerLeave, whenMouse(()=>{
                            if (disabled) return;
                            context.onTriggerLeave();
                            hasPointerMoveOpenedRef.current = false;
                        })),
                        onClick: (0,primitive_dist/* composeEventHandlers */.M)(props.onClick, ()=>{
                            context.onItemSelect(itemContext.value);
                            wasClickCloseRef.current = open;
                        }),
                        onKeyDown: (0,primitive_dist/* composeEventHandlers */.M)(props.onKeyDown, (event)=>{
                            const verticalEntryKey = context.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
                            const entryKey = {
                                horizontal: "ArrowDown",
                                vertical: verticalEntryKey
                            }[context.orientation];
                            if (open && event.key === entryKey) {
                                itemContext.onEntryKeyDown();
                                event.preventDefault();
                            }
                        })
                    })
                })
            }),
            open && /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(Root, {
                        "aria-hidden": true,
                        tabIndex: 0,
                        ref: itemContext.focusProxyRef,
                        onFocus: (event)=>{
                            const content = itemContext.contentRef.current;
                            const prevFocusedElement = event.relatedTarget;
                            const wasTriggerFocused = prevFocusedElement === ref.current;
                            const wasFocusFromContent = content === null || content === void 0 ? void 0 : content.contains(prevFocusedElement);
                            if (wasTriggerFocused || !wasFocusFromContent) {
                                itemContext.onFocusProxyEnter(wasTriggerFocused ? "start" : "end");
                            }
                        }
                    }),
                    context.viewport && /* @__PURE__ */ (0,jsx_runtime.jsx)("span", {
                        "aria-owns": contentId
                    })
                ]
            })
        ]
    });
});
NavigationMenuTrigger.displayName = TRIGGER_NAME;
var LINK_NAME = "NavigationMenuLink";
var LINK_SELECT = "navigationMenu.linkSelect";
var NavigationMenuLink = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, active, onSelect, ...linkProps } = props;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(FocusGroupItem, {
        asChild: true,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.a, {
            "data-active": active ? "" : void 0,
            "aria-current": active ? "page" : void 0,
            ...linkProps,
            ref: forwardedRef,
            onClick: (0,primitive_dist/* composeEventHandlers */.M)(props.onClick, (event)=>{
                const target = event.target;
                const linkSelectEvent = new CustomEvent(LINK_SELECT, {
                    bubbles: true,
                    cancelable: true
                });
                target.addEventListener(LINK_SELECT, (event2)=>onSelect === null || onSelect === void 0 ? void 0 : onSelect(event2), {
                    once: true
                });
                (0,react_primitive_dist/* dispatchDiscreteCustomEvent */.jH)(target, linkSelectEvent);
                if (!linkSelectEvent.defaultPrevented && !event.metaKey) {
                    const rootContentDismissEvent = new CustomEvent(ROOT_CONTENT_DISMISS, {
                        bubbles: true,
                        cancelable: true
                    });
                    (0,react_primitive_dist/* dispatchDiscreteCustomEvent */.jH)(target, rootContentDismissEvent);
                }
            }, {
                checkForDefaultPrevented: false
            })
        })
    });
});
NavigationMenuLink.displayName = LINK_NAME;
var INDICATOR_NAME = "NavigationMenuIndicator";
var NavigationMenuIndicator = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { forceMount, ...indicatorProps } = props;
    const context = useNavigationMenuContext(INDICATOR_NAME, props.__scopeNavigationMenu);
    const isVisible = Boolean(context.value);
    return context.indicatorTrack ? /*#__PURE__*/ react_dom.createPortal(/* @__PURE__ */ (0,jsx_runtime.jsx)(react_presence_dist/* Presence */.z, {
        present: forceMount || isVisible,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(NavigationMenuIndicatorImpl, {
            ...indicatorProps,
            ref: forwardedRef
        })
    }), context.indicatorTrack) : null;
});
NavigationMenuIndicator.displayName = INDICATOR_NAME;
var NavigationMenuIndicatorImpl = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, ...indicatorProps } = props;
    const context = useNavigationMenuContext(INDICATOR_NAME, __scopeNavigationMenu);
    const getItems = useCollection(__scopeNavigationMenu);
    const [activeTrigger, setActiveTrigger] = react.useState(null);
    const [position, setPosition] = react.useState(null);
    const isHorizontal = context.orientation === "horizontal";
    const isVisible = Boolean(context.value);
    react.useEffect(()=>{
        var _items_find;
        const items = getItems();
        const triggerNode = (_items_find = items.find((item)=>item.value === context.value)) === null || _items_find === void 0 ? void 0 : _items_find.ref.current;
        if (triggerNode) setActiveTrigger(triggerNode);
    }, [
        getItems,
        context.value
    ]);
    const handlePositionChange = ()=>{
        if (activeTrigger) {
            setPosition({
                size: isHorizontal ? activeTrigger.offsetWidth : activeTrigger.offsetHeight,
                offset: isHorizontal ? activeTrigger.offsetLeft : activeTrigger.offsetTop
            });
        }
    };
    useResizeObserver(activeTrigger, handlePositionChange);
    useResizeObserver(context.indicatorTrack, handlePositionChange);
    return position ? /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.div, {
        "aria-hidden": true,
        "data-state": isVisible ? "visible" : "hidden",
        "data-orientation": context.orientation,
        ...indicatorProps,
        ref: forwardedRef,
        style: {
            position: "absolute",
            ...isHorizontal ? {
                left: 0,
                width: position.size + "px",
                transform: "translateX(".concat(position.offset, "px)")
            } : {
                top: 0,
                height: position.size + "px",
                transform: "translateY(".concat(position.offset, "px)")
            },
            ...indicatorProps.style
        }
    }) : null;
});
var CONTENT_NAME = "NavigationMenuContent";
var NavigationMenuContent = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { forceMount, ...contentProps } = props;
    const context = useNavigationMenuContext(CONTENT_NAME, props.__scopeNavigationMenu);
    const itemContext = useNavigationMenuItemContext(CONTENT_NAME, props.__scopeNavigationMenu);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(itemContext.contentRef, forwardedRef);
    const open = itemContext.value === context.value;
    const commonProps = {
        value: itemContext.value,
        triggerRef: itemContext.triggerRef,
        focusProxyRef: itemContext.focusProxyRef,
        wasEscapeCloseRef: itemContext.wasEscapeCloseRef,
        onContentFocusOutside: itemContext.onContentFocusOutside,
        onRootContentClose: itemContext.onRootContentClose,
        ...contentProps
    };
    return !context.viewport ? /* @__PURE__ */ (0,jsx_runtime.jsx)(react_presence_dist/* Presence */.z, {
        present: forceMount || open,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(NavigationMenuContentImpl, {
            "data-state": getOpenState(open),
            ...commonProps,
            ref: composedRefs,
            onPointerEnter: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerEnter, context.onContentEnter),
            onPointerLeave: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerLeave, whenMouse(context.onContentLeave)),
            style: {
                // Prevent interaction when animating out
                pointerEvents: !open && context.isRootMenu ? "none" : void 0,
                ...commonProps.style
            }
        })
    }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(ViewportContentMounter, {
        forceMount,
        ...commonProps,
        ref: composedRefs
    });
});
NavigationMenuContent.displayName = CONTENT_NAME;
var ViewportContentMounter = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const context = useNavigationMenuContext(CONTENT_NAME, props.__scopeNavigationMenu);
    const { onViewportContentChange, onViewportContentRemove } = context;
    (0,react_use_layout_effect_dist/* useLayoutEffect */.b)(()=>{
        onViewportContentChange(props.value, {
            ref: forwardedRef,
            ...props
        });
    }, [
        props,
        forwardedRef,
        onViewportContentChange
    ]);
    (0,react_use_layout_effect_dist/* useLayoutEffect */.b)(()=>{
        return ()=>onViewportContentRemove(props.value);
    }, [
        props.value,
        onViewportContentRemove
    ]);
    return null;
});
var ROOT_CONTENT_DISMISS = "navigationMenu.rootContentDismiss";
var NavigationMenuContentImpl = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, value, triggerRef, focusProxyRef, wasEscapeCloseRef, onRootContentClose, onContentFocusOutside, ...contentProps } = props;
    const context = useNavigationMenuContext(CONTENT_NAME, __scopeNavigationMenu);
    const ref = react.useRef(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(ref, forwardedRef);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const getItems = useCollection(__scopeNavigationMenu);
    const prevMotionAttributeRef = react.useRef(null);
    const { onItemDismiss } = context;
    react.useEffect(()=>{
        const content = ref.current;
        if (context.isRootMenu && content) {
            const handleClose = ()=>{
                var _triggerRef_current;
                onItemDismiss();
                onRootContentClose();
                if (content.contains(document.activeElement)) (_triggerRef_current = triggerRef.current) === null || _triggerRef_current === void 0 ? void 0 : _triggerRef_current.focus();
            };
            content.addEventListener(ROOT_CONTENT_DISMISS, handleClose);
            return ()=>content.removeEventListener(ROOT_CONTENT_DISMISS, handleClose);
        }
    }, [
        context.isRootMenu,
        props.value,
        triggerRef,
        onItemDismiss,
        onRootContentClose
    ]);
    const motionAttribute = react.useMemo(()=>{
        const items = getItems();
        const values = items.map((item)=>item.value);
        if (context.dir === "rtl") values.reverse();
        const index = values.indexOf(context.value);
        const prevIndex = values.indexOf(context.previousValue);
        const isSelected = value === context.value;
        const wasSelected = prevIndex === values.indexOf(value);
        if (!isSelected && !wasSelected) return prevMotionAttributeRef.current;
        const attribute = (()=>{
            if (index !== prevIndex) {
                if (isSelected && prevIndex !== -1) return index > prevIndex ? "from-end" : "from-start";
                if (wasSelected && index !== -1) return index > prevIndex ? "to-start" : "to-end";
            }
            return null;
        })();
        prevMotionAttributeRef.current = attribute;
        return attribute;
    }, [
        context.previousValue,
        context.value,
        context.dir,
        getItems,
        value
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(FocusGroup, {
        asChild: true,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_dismissable_layer_dist/* DismissableLayer */.XB, {
            id: contentId,
            "aria-labelledby": triggerId,
            "data-motion": motionAttribute,
            "data-orientation": context.orientation,
            ...contentProps,
            ref: composedRefs,
            disableOutsidePointerEvents: false,
            onDismiss: ()=>{
                var _ref_current;
                const rootContentDismissEvent = new Event(ROOT_CONTENT_DISMISS, {
                    bubbles: true,
                    cancelable: true
                });
                (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.dispatchEvent(rootContentDismissEvent);
            },
            onFocusOutside: (0,primitive_dist/* composeEventHandlers */.M)(props.onFocusOutside, (event)=>{
                var _context_rootNavigationMenu;
                onContentFocusOutside();
                const target = event.target;
                if ((_context_rootNavigationMenu = context.rootNavigationMenu) === null || _context_rootNavigationMenu === void 0 ? void 0 : _context_rootNavigationMenu.contains(target)) event.preventDefault();
            }),
            onPointerDownOutside: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerDownOutside, (event)=>{
                var _context_viewport;
                const target = event.target;
                const isTrigger = getItems().some((item)=>{
                    var _item_ref_current;
                    return (_item_ref_current = item.ref.current) === null || _item_ref_current === void 0 ? void 0 : _item_ref_current.contains(target);
                });
                const isRootViewport = context.isRootMenu && ((_context_viewport = context.viewport) === null || _context_viewport === void 0 ? void 0 : _context_viewport.contains(target));
                if (isTrigger || isRootViewport || !context.isRootMenu) event.preventDefault();
            }),
            onKeyDown: (0,primitive_dist/* composeEventHandlers */.M)(props.onKeyDown, (event)=>{
                const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
                const isTabKey = event.key === "Tab" && !isMetaKey;
                if (isTabKey) {
                    const candidates = getTabbableCandidates(event.currentTarget);
                    const focusedElement = document.activeElement;
                    const index = candidates.findIndex((candidate)=>candidate === focusedElement);
                    const isMovingBackwards = event.shiftKey;
                    const nextCandidates = isMovingBackwards ? candidates.slice(0, index).reverse() : candidates.slice(index + 1, candidates.length);
                    if (focusFirst(nextCandidates)) {
                        event.preventDefault();
                    } else {
                        var _focusProxyRef_current;
                        (_focusProxyRef_current = focusProxyRef.current) === null || _focusProxyRef_current === void 0 ? void 0 : _focusProxyRef_current.focus();
                    }
                }
            }),
            onEscapeKeyDown: (0,primitive_dist/* composeEventHandlers */.M)(props.onEscapeKeyDown, (event)=>{
                wasEscapeCloseRef.current = true;
            })
        })
    });
});
var VIEWPORT_NAME = "NavigationMenuViewport";
var NavigationMenuViewport = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { forceMount, ...viewportProps } = props;
    const context = useNavigationMenuContext(VIEWPORT_NAME, props.__scopeNavigationMenu);
    const open = Boolean(context.value);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_presence_dist/* Presence */.z, {
        present: forceMount || open,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(NavigationMenuViewportImpl, {
            ...viewportProps,
            ref: forwardedRef
        })
    });
});
NavigationMenuViewport.displayName = VIEWPORT_NAME;
var NavigationMenuViewportImpl = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, children, ...viewportImplProps } = props;
    const context = useNavigationMenuContext(VIEWPORT_NAME, __scopeNavigationMenu);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, context.onViewportChange);
    const viewportContentContext = useViewportContentContext(CONTENT_NAME, props.__scopeNavigationMenu);
    const [size, setSize] = react.useState(null);
    const [content, setContent] = react.useState(null);
    const viewportWidth = size ? (size === null || size === void 0 ? void 0 : size.width) + "px" : void 0;
    const viewportHeight = size ? (size === null || size === void 0 ? void 0 : size.height) + "px" : void 0;
    const open = Boolean(context.value);
    const activeContentValue = open ? context.value : context.previousValue;
    const handleSizeChange = ()=>{
        if (content) setSize({
            width: content.offsetWidth,
            height: content.offsetHeight
        });
    };
    useResizeObserver(content, handleSizeChange);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.div, {
        "data-state": getOpenState(open),
        "data-orientation": context.orientation,
        ...viewportImplProps,
        ref: composedRefs,
        style: {
            // Prevent interaction when animating out
            pointerEvents: !open && context.isRootMenu ? "none" : void 0,
            ["--radix-navigation-menu-viewport-width"]: viewportWidth,
            ["--radix-navigation-menu-viewport-height"]: viewportHeight,
            ...viewportImplProps.style
        },
        onPointerEnter: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerEnter, context.onContentEnter),
        onPointerLeave: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerLeave, whenMouse(context.onContentLeave)),
        children: Array.from(viewportContentContext.items).map((param)=>{
            let [value, { ref, forceMount, ...props2 }] = param;
            const isActive = activeContentValue === value;
            return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_presence_dist/* Presence */.z, {
                present: forceMount || isActive,
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(NavigationMenuContentImpl, {
                    ...props2,
                    ref: (0,react_compose_refs_dist/* composeRefs */.F)(ref, (node)=>{
                        if (isActive && node) setContent(node);
                    })
                })
            }, value);
        })
    });
});
var FOCUS_GROUP_NAME = "FocusGroup";
var FocusGroup = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, ...groupProps } = props;
    const context = useNavigationMenuContext(FOCUS_GROUP_NAME, __scopeNavigationMenu);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(FocusGroupCollection.Provider, {
        scope: __scopeNavigationMenu,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(FocusGroupCollection.Slot, {
            scope: __scopeNavigationMenu,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.div, {
                dir: context.dir,
                ...groupProps,
                ref: forwardedRef
            })
        })
    });
});
var ARROW_KEYS = [
    "ArrowRight",
    "ArrowLeft",
    "ArrowUp",
    "ArrowDown"
];
var FOCUS_GROUP_ITEM_NAME = "FocusGroupItem";
var FocusGroupItem = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, ...groupProps } = props;
    const getItems = useFocusGroupCollection(__scopeNavigationMenu);
    const context = useNavigationMenuContext(FOCUS_GROUP_ITEM_NAME, __scopeNavigationMenu);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(FocusGroupCollection.ItemSlot, {
        scope: __scopeNavigationMenu,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.button, {
            ...groupProps,
            ref: forwardedRef,
            onKeyDown: (0,primitive_dist/* composeEventHandlers */.M)(props.onKeyDown, (event)=>{
                const isFocusNavigationKey = [
                    "Home",
                    "End",
                    ...ARROW_KEYS
                ].includes(event.key);
                if (isFocusNavigationKey) {
                    let candidateNodes = getItems().map((item)=>item.ref.current);
                    const prevItemKey = context.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
                    const prevKeys = [
                        prevItemKey,
                        "ArrowUp",
                        "End"
                    ];
                    if (prevKeys.includes(event.key)) candidateNodes.reverse();
                    if (ARROW_KEYS.includes(event.key)) {
                        const currentIndex = candidateNodes.indexOf(event.currentTarget);
                        candidateNodes = candidateNodes.slice(currentIndex + 1);
                    }
                    setTimeout(()=>focusFirst(candidateNodes));
                    event.preventDefault();
                }
            })
        })
    });
});
function getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode);
    return nodes;
}
function focusFirst(candidates) {
    const previouslyFocusedElement = document.activeElement;
    return candidates.some((candidate)=>{
        if (candidate === previouslyFocusedElement) return true;
        candidate.focus();
        return document.activeElement !== previouslyFocusedElement;
    });
}
function removeFromTabOrder(candidates) {
    candidates.forEach((candidate)=>{
        candidate.dataset.tabindex = candidate.getAttribute("tabindex") || "";
        candidate.setAttribute("tabindex", "-1");
    });
    return ()=>{
        candidates.forEach((candidate)=>{
            const prevTabIndex = candidate.dataset.tabindex;
            candidate.setAttribute("tabindex", prevTabIndex);
        });
    };
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
function getOpenState(open) {
    return open ? "open" : "closed";
}
function makeTriggerId(baseId, value) {
    return "".concat(baseId, "-trigger-").concat(value);
}
function makeContentId(baseId, value) {
    return "".concat(baseId, "-content-").concat(value);
}
function whenMouse(handler) {
    return (event)=>event.pointerType === "mouse" ? handler(event) : void 0;
}
var Root2 = NavigationMenu;
var Sub = (/* unused pure expression or super */ null && (NavigationMenuSub));
var List = NavigationMenuList;
var Item = NavigationMenuItem;
var Trigger = NavigationMenuTrigger;
var Link = NavigationMenuLink;
var Indicator = (/* unused pure expression or super */ null && (NavigationMenuIndicator));
var Content = NavigationMenuContent;
var Viewport = NavigationMenuViewport;
 //# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/fumadocs-ui/dist/layouts/home.client.js
/* __next_internal_client_entry_do_not_use__ Nav,NavProvider auto */ 











// src/layouts/home.client.tsx

// src/layouts/nav-item.tsx



// src/components/ui/navigation-menu.tsx



var home_client_NavigationMenu = Root2;
var home_client_NavigationMenuList = List;
var home_client_NavigationMenuItem = Item;
var home_client_NavigationMenuTrigger = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, children, ...props } = param;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Trigger, {
        ref,
        className: (0,bundle_mjs/* twMerge */.m6)("data-[state=open]:bg-fd-accent/50", className),
        ...props,
        children
    });
});
home_client_NavigationMenuTrigger.displayName = Trigger.displayName;
var home_client_NavigationMenuContent = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Content, {
        ref,
        className: (0,bundle_mjs/* twMerge */.m6)("absolute inset-x-0 top-0 data-[motion=from-end]:animate-fd-enterFromRight data-[motion=from-start]:animate-fd-enterFromLeft data-[motion=to-end]:animate-fd-exitToRight data-[motion=to-start]:animate-fd-exitToLeft", className),
        ...props
    });
});
home_client_NavigationMenuContent.displayName = Content.displayName;
var home_client_NavigationMenuLink = Link;
var home_client_NavigationMenuViewport = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
        ref,
        className: "flex w-full justify-center",
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Viewport, {
            ...props,
            className: (0,bundle_mjs/* twMerge */.m6)("relative h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden text-fd-popover-foreground transition-[width,height] duration-300 data-[state=closed]:animate-fd-nav-menu-out data-[state=open]:animate-fd-nav-menu-in", className)
        })
    });
});
home_client_NavigationMenuViewport.displayName = Viewport.displayName;
// src/layouts/nav-item.tsx

var navItemVariants = (0,dist/* cva */.j)("inline-flex items-center gap-1 p-2 text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground data-[active=true]:text-fd-primary [&_svg]:size-4");
function NavItem(param) {
    let { item, ...props } = param;
    if (item.type === "custom") return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
        ...props,
        children: item.children
    });
    if (item.type === "menu") {
        return /* @__PURE__ */ (0,jsx_runtime.jsxs)(home_client_NavigationMenuItem, {
            ...props,
            children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)(home_client_NavigationMenuTrigger, {
                    className: (0,bundle_mjs/* twMerge */.m6)(navItemVariants(), "rounded-md"),
                    children: item.url ? /* @__PURE__ */ (0,jsx_runtime.jsx)(dist_link/* default */.Z, {
                        href: item.url,
                        children: item.text
                    }) : item.text
                }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(home_client_NavigationMenuContent, {
                    className: "grid grid-cols-1 gap-3 px-4 pb-4 md:grid-cols-2 lg:grid-cols-3",
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(MenuItemContent, {
                        item
                    })
                })
            ]
        });
    }
    if (item.type === "button") {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(home_client_NavigationMenuItem, {
            ...props,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(home_client_NavigationMenuLink, {
                asChild: true,
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_PZTQPB4U/* ButtonItem */.yO, {
                    item
                })
            })
        });
    }
    if (item.type === "icon") {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(home_client_NavigationMenuItem, {
            ...props,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(home_client_NavigationMenuLink, {
                asChild: true,
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_PZTQPB4U/* IconItem */._R, {
                    item
                })
            })
        });
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(home_client_NavigationMenuItem, {
        ...props,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(home_client_NavigationMenuLink, {
            asChild: true,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_PZTQPB4U/* BaseLinkItem */.uc, {
                item,
                className: (0,bundle_mjs/* twMerge */.m6)(navItemVariants()),
                children: item.text
            })
        })
    });
}
function MenuItemContent(param) {
    let { item } = param;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: item.items.map((child, i)=>{
            if (child.type === "custom") return /* @__PURE__ */ (0,jsx_runtime.jsx)(react.Fragment, {
                children: child.children
            }, i);
            var _child_menu;
            const { banner, footer, ...menuProps } = (_child_menu = child.menu) !== null && _child_menu !== void 0 ? _child_menu : {};
            return /* @__PURE__ */ (0,jsx_runtime.jsx)(home_client_NavigationMenuLink, {
                asChild: true,
                children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(dist_link/* default */.Z, {
                    external: child.external,
                    href: child.url,
                    ...menuProps,
                    className: (0,bundle_mjs/* twMerge */.m6)("flex flex-col gap-2 rounded-lg border bg-fd-card p-3 transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground", menuProps.className),
                    children: [
                        banner !== null && banner !== void 0 ? banner : child.icon ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                            className: "w-fit rounded-md border bg-fd-muted p-1 [&_svg]:size-4",
                            children: child.icon
                        }) : null,
                        /* @__PURE__ */ (0,jsx_runtime.jsx)("p", {
                            className: "-mb-1 text-sm font-medium",
                            children: child.text
                        }),
                        child.description ? /* @__PURE__ */ (0,jsx_runtime.jsx)("p", {
                            className: "text-[13px] text-fd-muted-foreground",
                            children: child.description
                        }) : null,
                        footer
                    ]
                })
            }, i);
        })
    });
}
function MenuItem(param) {
    let { item, ...rest } = param;
    if (item.type === "button") {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(home_client_NavigationMenuLink, {
            asChild: true,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_PZTQPB4U/* ButtonItem */.yO, {
                item,
                ...rest
            })
        });
    }
    if (item.type === "custom") return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
        ...rest,
        className: (0,bundle_mjs/* twMerge */.m6)("grid", rest.className),
        children: item.children
    });
    if (item.type === "menu") {
        return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
            ...rest,
            className: (0,bundle_mjs/* twMerge */.m6)("mb-4 flex flex-col", rest.className),
            children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)("p", {
                    className: "mb-1 text-sm text-fd-muted-foreground",
                    children: item.url ? /* @__PURE__ */ (0,jsx_runtime.jsx)(home_client_NavigationMenuLink, {
                        asChild: true,
                        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(dist_link/* default */.Z, {
                            href: item.url,
                            children: [
                                item.icon,
                                item.text
                            ]
                        })
                    }) : /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            item.icon,
                            item.text
                        ]
                    })
                }),
                item.items.map((child, i)=>/* @__PURE__ */ (0,jsx_runtime.jsx)(MenuItem, {
                        item: child
                    }, i))
            ]
        });
    }
    if (item.type === "icon") {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(home_client_NavigationMenuLink, {
            asChild: true,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_PZTQPB4U/* IconItem */._R, {
                item
            })
        });
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(home_client_NavigationMenuLink, {
        asChild: true,
        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(chunk_PZTQPB4U/* BaseLinkItem */.uc, {
            item,
            ...rest,
            className: (0,bundle_mjs/* twMerge */.m6)("inline-flex items-center gap-2 py-1.5 transition-colors hover:text-fd-popover-foreground/50 data-[active=true]:font-medium data-[active=true]:text-fd-primary [&_svg]:size-4", rest.className),
            children: [
                item.icon,
                item.text
            ]
        })
    });
}
// src/layouts/home.client.tsx

function Nav(param) {
    let { items, enableSearch = true, ...props } = param;
    const search = (0,chunk_ET4TW6M5/* useSearchContext */.A)();
    const [navItems, menuItems] = (0,react.useMemo)(()=>[
            items.filter((item)=>{
                var _item_on;
                return [
                    "nav",
                    "all"
                ].includes((_item_on = item.on) !== null && _item_on !== void 0 ? _item_on : "all");
            }),
            items.filter((item)=>{
                var _item_on;
                return [
                    "menu",
                    "all"
                ].includes((_item_on = item.on) !== null && _item_on !== void 0 ? _item_on : "all");
            })
        ], [
        items
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                "aria-hidden": "true",
                className: "fixed inset-x-0 top-[var(--fd-banner-height)] z-40 h-6 bg-fd-background",
                style: {
                    maskImage: "linear-gradient(to bottom,white,transparent)"
                }
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsxs)(Header, {
                children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_MCX7E6ZW/* Title */.Dx, {
                        title: props.title,
                        url: props.url
                    }),
                    props.children,
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(home_client_NavigationMenuList, {
                        className: "flex flex-row items-center gap-2 max-sm:hidden",
                        children: navItems.filter((item)=>!isSecondary(item)).map((item, i)=>/* @__PURE__ */ (0,jsx_runtime.jsx)(NavItem, {
                                item,
                                className: "text-sm"
                            }, i))
                    }),
                    /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-1 flex-row items-center justify-end lg:gap-1.5",
                        children: [
                            enableSearch && search.enabled ? /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_V6RONFCQ/* SearchToggle */._, {
                                        className: "lg:hidden"
                                    }),
                                    /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_V6RONFCQ/* LargeSearchToggle */.E, {
                                        className: "w-full max-w-[240px] max-lg:hidden"
                                    })
                                ]
                            }) : null,
                            !props.disableThemeSwitch ? /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_PZTQPB4U/* ThemeToggle */.Tl, {
                                className: "max-lg:hidden"
                            }) : null,
                            props.i18n ? /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_KZTWSBYY/* LanguageToggle */.j, {
                                className: "-me-1.5 max-lg:hidden",
                                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_5QPVK7QM/* Languages */.lI, {
                                    className: "size-5"
                                })
                            }) : null,
                            navItems.filter(isSecondary).map((item, i)=>/* @__PURE__ */ (0,jsx_runtime.jsx)(NavItem, {
                                    item,
                                    className: "-me-1.5 list-none max-lg:hidden"
                                }, i)),
                            /* @__PURE__ */ (0,jsx_runtime.jsxs)(home_client_NavigationMenuItem, {
                                className: "list-none lg:hidden",
                                children: [
                                    /* @__PURE__ */ (0,jsx_runtime.jsx)(home_client_NavigationMenuTrigger, {
                                        className: (0,bundle_mjs/* twMerge */.m6)((0,chunk_QKOA6KEZ/* buttonVariants */.d)({
                                            size: "icon",
                                            color: "ghost"
                                        }), "group -me-2"),
                                        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_5QPVK7QM/* ChevronDown */._M, {
                                            className: "size-3 transition-transform duration-300 group-data-[state=open]:rotate-180"
                                        })
                                    }),
                                    /* @__PURE__ */ (0,jsx_runtime.jsxs)(home_client_NavigationMenuContent, {
                                        className: "flex flex-col p-4 sm:flex-row sm:items-center sm:justify-end",
                                        children: [
                                            menuItems.filter((item)=>!isSecondary(item)).map((item, i)=>/* @__PURE__ */ (0,jsx_runtime.jsx)(MenuItem, {
                                                    item,
                                                    className: "sm:hidden"
                                                }, i)),
                                            /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
                                                className: "-ms-1.5 flex flex-row items-center gap-1.5 max-sm:mt-2",
                                                children: [
                                                    props.i18n ? /* @__PURE__ */ (0,jsx_runtime.jsxs)(chunk_KZTWSBYY/* LanguageToggle */.j, {
                                                        className: "me-auto",
                                                        children: [
                                                            /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_5QPVK7QM/* Languages */.lI, {
                                                                className: "size-5"
                                                            }),
                                                            /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_KZTWSBYY/* LanguageToggleText */.L, {}),
                                                            /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_5QPVK7QM/* ChevronDown */._M, {
                                                                className: "size-3 text-fd-muted-foreground"
                                                            })
                                                        ]
                                                    }) : null,
                                                    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                                                        className: "flex flex-row items-center empty:hidden",
                                                        children: menuItems.filter(isSecondary).map((item, i)=>/* @__PURE__ */ (0,jsx_runtime.jsx)(MenuItem, {
                                                                item
                                                            }, i))
                                                    }),
                                                    !props.disableThemeSwitch ? /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_PZTQPB4U/* ThemeToggle */.Tl, {
                                                        className: (0,bundle_mjs/* twMerge */.m6)(!props.i18n && "ms-auto")
                                                    }) : null
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function Header(param) {
    let { children } = param;
    const [value, setValue] = (0,react.useState)("");
    const { isTransparent } = (0,react.useContext)(chunk_MCX7E6ZW/* NavContext */.Ly);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(home_client_NavigationMenu, {
        value,
        onValueChange: setValue,
        asChild: true,
        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("header", {
            id: "nd-nav",
            className: (0,bundle_mjs/* twMerge */.m6)("fixed left-1/2 top-[var(--fd-banner-height)] z-40 mt-1 w-[calc(100%-1rem)] max-w-fd-container -translate-x-1/2 rounded-2xl border border-fd-foreground/10 transition-colors", value.length > 0 ? "shadow-lg" : "shadow-sm", (!isTransparent || value.length > 0) && "bg-fd-background/80 backdrop-blur-lg"),
            children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)("nav", {
                    className: "flex h-12 w-full flex-row items-center gap-6 px-4",
                    children
                }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(home_client_NavigationMenuViewport, {})
            ]
        })
    });
}
function isSecondary(item) {
    return "secondary" in item && item.secondary === true || item.type === "icon";
}



/***/ }),

/***/ 9512:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

}]);