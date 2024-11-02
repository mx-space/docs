"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[235],{

/***/ 235:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DefaultSearchDialog)
});

// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/bundle-mjs.mjs
var bundle_mjs = __webpack_require__(6164);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs + 1 modules
var dist = __webpack_require__(3525);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
;// CONCATENATED MODULE: ./node_modules/fumadocs-ui/dist/chunk-DGKCMOIC.js


// src/components/dialog/tag-list.tsx


var itemVariants = (0,dist/* cva */.j)(
  "rounded-md border px-2 py-0.5 text-xs font-medium text-fd-muted-foreground transition-colors",
  {
    variants: {
      active: {
        true: "bg-fd-accent text-fd-accent-foreground"
      }
    }
  }
);
function TagsList({
  tag,
  onTagChange,
  items,
  allowClear,
  ...props
}) {
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    "div",
    {
      ...props,
      className: (0,bundle_mjs/* twMerge */.m6)("flex flex-row items-center gap-1", props.className),
      children: [
        items.map((item) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "button",
          {
            type: "button",
            className: (0,bundle_mjs/* twMerge */.m6)(itemVariants({ active: tag === item.value })),
            onClick: () => {
              if (tag === item.value && allowClear) {
                onTagChange(void 0);
              } else {
                onTagChange(item.value);
              }
            },
            tabIndex: -1,
            children: item.name
          },
          item.value
        )),
        props.children
      ]
    }
  );
}



// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-QKOA6KEZ.js
var chunk_QKOA6KEZ = __webpack_require__(3950);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-5QPVK7QM.js
var chunk_5QPVK7QM = __webpack_require__(3592);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-ET4TW6M5.js
var chunk_ET4TW6M5 = __webpack_require__(8050);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-27HFSL7N.js
var chunk_27HFSL7N = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-EFMHXXHW.js
var chunk_EFMHXXHW = __webpack_require__(9145);
// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(6463);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/@radix-ui/primitive/dist/index.mjs
var primitive_dist = __webpack_require__(8149);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(1584);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-context/dist/index.mjs
var react_context_dist = __webpack_require__(8324);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-id/dist/index.mjs
var react_id_dist = __webpack_require__(3201);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var react_use_controllable_state_dist = __webpack_require__(1715);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs + 1 modules
var react_dismissable_layer_dist = __webpack_require__(2358);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var react_focus_scope_dist = __webpack_require__(467);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-portal/dist/index.mjs
var react_portal_dist = __webpack_require__(6935);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-presence/dist/index.mjs
var react_presence_dist = __webpack_require__(1383);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var react_primitive_dist = __webpack_require__(5171);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var react_focus_guards_dist = __webpack_require__(589);
// EXTERNAL MODULE: ./node_modules/react-remove-scroll/dist/es2015/Combination.js + 21 modules
var Combination = __webpack_require__(9418);
// EXTERNAL MODULE: ./node_modules/aria-hidden/dist/es2015/index.js
var es2015 = __webpack_require__(8369);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs
var react_slot_dist = __webpack_require__(1538);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-dialog/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Close,Content,Description,Dialog,DialogClose,DialogContent,DialogDescription,DialogOverlay,DialogPortal,DialogTitle,DialogTrigger,Overlay,Portal,Root,Title,Trigger,WarningProvider,createDialogScope auto */ // packages/react/dialog/src/Dialog.tsx
















var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = (0,react_context_dist/* createContextScope */.b)(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props)=>{
    const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
    const triggerRef = react.useRef(null);
    const contentRef = react.useRef(null);
    const [open = false, setOpen] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(DialogProvider, {
        scope: __scopeDialog,
        triggerRef,
        contentRef,
        contentId: (0,react_id_dist/* useId */.M)(),
        titleId: (0,react_id_dist/* useId */.M)(),
        descriptionId: (0,react_id_dist/* useId */.M)(),
        open,
        onOpenChange: setOpen,
        onOpenToggle: react.useCallback(()=>setOpen((prevOpen)=>!prevOpen), [
            setOpen
        ]),
        modal,
        children
    });
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: (0,primitive_dist/* composeEventHandlers */.M)(props.onClick, context.onOpenToggle)
    });
});
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
    forceMount: void 0
});
var DialogPortal = (props)=>{
    const { __scopeDialog, forceMount, children, container } = props;
    const context = useDialogContext(PORTAL_NAME, __scopeDialog);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(PortalProvider, {
        scope: __scopeDialog,
        forceMount,
        children: react.Children.map(children, (child)=>/* @__PURE__ */ (0,jsx_runtime.jsx)(react_presence_dist/* Presence */.z, {
                present: forceMount || context.open,
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_portal_dist/* Portal */.h, {
                    asChild: true,
                    container,
                    children: child
                })
            }))
    });
};
DialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ (0,jsx_runtime.jsx)(react_presence_dist/* Presence */.z, {
        present: forceMount || context.open,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(DialogOverlayImpl, {
            ...overlayProps,
            ref: forwardedRef
        })
    }) : null;
});
DialogOverlay.displayName = OVERLAY_NAME;
var DialogOverlayImpl = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return(// Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Combination/* default */.Z, {
        as: react_slot_dist/* Slot */.g7,
        allowPinchZoom: true,
        shards: [
            context.contentRef
        ],
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.div, {
            "data-state": getState(context.open),
            ...overlayProps,
            ref: forwardedRef,
            style: {
                pointerEvents: "auto",
                ...overlayProps.style
            }
        })
    }));
});
var CONTENT_NAME = "DialogContent";
var DialogContent = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_presence_dist/* Presence */.z, {
        present: forceMount || context.open,
        children: context.modal ? /* @__PURE__ */ (0,jsx_runtime.jsx)(DialogContentModal, {
            ...contentProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(DialogContentNonModal, {
            ...contentProps,
            ref: forwardedRef
        })
    });
});
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = react.useRef(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, context.contentRef, contentRef);
    react.useEffect(()=>{
        const content = contentRef.current;
        if (content) return (0,es2015/* hideOthers */.Ry)(content);
    }, []);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(DialogContentImpl, {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: (0,primitive_dist/* composeEventHandlers */.M)(props.onCloseAutoFocus, (event)=>{
            var _context_triggerRef_current;
            event.preventDefault();
            (_context_triggerRef_current = context.triggerRef.current) === null || _context_triggerRef_current === void 0 ? void 0 : _context_triggerRef_current.focus();
        }),
        onPointerDownOutside: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: (0,primitive_dist/* composeEventHandlers */.M)(props.onFocusOutside, (event)=>event.preventDefault())
    });
});
var DialogContentNonModal = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = react.useRef(false);
    const hasPointerDownOutsideRef = react.useRef(false);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(DialogContentImpl, {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            var _props_onCloseAutoFocus;
            (_props_onCloseAutoFocus = props.onCloseAutoFocus) === null || _props_onCloseAutoFocus === void 0 ? void 0 : _props_onCloseAutoFocus.call(props, event);
            if (!event.defaultPrevented) {
                var _context_triggerRef_current;
                if (!hasInteractedOutsideRef.current) (_context_triggerRef_current = context.triggerRef.current) === null || _context_triggerRef_current === void 0 ? void 0 : _context_triggerRef_current.focus();
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            var _props_onInteractOutside, _context_triggerRef_current;
            (_props_onInteractOutside = props.onInteractOutside) === null || _props_onInteractOutside === void 0 ? void 0 : _props_onInteractOutside.call(props, event);
            if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === "pointerdown") {
                    hasPointerDownOutsideRef.current = true;
                }
            }
            const target = event.target;
            const targetIsTrigger = (_context_triggerRef_current = context.triggerRef.current) === null || _context_triggerRef_current === void 0 ? void 0 : _context_triggerRef_current.contains(target);
            if (targetIsTrigger) event.preventDefault();
            if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
                event.preventDefault();
            }
        }
    });
});
var DialogContentImpl = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = react.useRef(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, contentRef);
    (0,react_focus_guards_dist/* useFocusGuards */.EW)();
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(react_focus_scope_dist/* FocusScope */.M, {
                asChild: true,
                loop: true,
                trapped: trapFocus,
                onMountAutoFocus: onOpenAutoFocus,
                onUnmountAutoFocus: onCloseAutoFocus,
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_dismissable_layer_dist/* DismissableLayer */.XB, {
                    role: "dialog",
                    id: context.contentId,
                    "aria-describedby": context.descriptionId,
                    "aria-labelledby": context.titleId,
                    "data-state": getState(context.open),
                    ...contentProps,
                    ref: composedRefs,
                    onDismiss: ()=>context.onOpenChange(false)
                })
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(TitleWarning, {
                        titleId: context.titleId
                    }),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(DescriptionWarning, {
                        contentRef,
                        descriptionId: context.descriptionId
                    })
                ]
            })
        ]
    });
});
var TITLE_NAME = "DialogTitle";
var DialogTitle = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.h2, {
        id: context.titleId,
        ...titleProps,
        ref: forwardedRef
    });
});
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.p, {
        id: context.descriptionId,
        ...descriptionProps,
        ref: forwardedRef
    });
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.button, {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: (0,primitive_dist/* composeEventHandlers */.M)(props.onClick, ()=>context.onOpenChange(false))
    });
});
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
    return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = (0,react_context_dist/* createContext */.k)(TITLE_WARNING_NAME, {
    contentName: CONTENT_NAME,
    titleName: TITLE_NAME,
    docsSlug: "dialog"
});
var TitleWarning = (param)=>{
    let { titleId } = param;
    const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
    const MESSAGE = "`".concat(titleWarningContext.contentName, "` requires a `").concat(titleWarningContext.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(titleWarningContext.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(titleWarningContext.docsSlug);
    react.useEffect(()=>{
        if (titleId) {
            const hasTitle = document.getElementById(titleId);
            if (!hasTitle) console.error(MESSAGE);
        }
    }, [
        MESSAGE,
        titleId
    ]);
    return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = (param)=>{
    let { contentRef, descriptionId } = param;
    const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
    const MESSAGE = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(descriptionWarningContext.contentName, "}.");
    react.useEffect(()=>{
        var _contentRef_current;
        const describedById = (_contentRef_current = contentRef.current) === null || _contentRef_current === void 0 ? void 0 : _contentRef_current.getAttribute("aria-describedby");
        if (descriptionId && describedById) {
            const hasDescription = document.getElementById(descriptionId);
            if (!hasDescription) console.warn(MESSAGE);
        }
    }, [
        MESSAGE,
        contentRef,
        descriptionId
    ]);
    return null;
};
var Root = (/* unused pure expression or super */ null && (Dialog));
var Trigger = (/* unused pure expression or super */ null && (DialogTrigger));
var Portal = (/* unused pure expression or super */ null && (DialogPortal));
var Overlay = (/* unused pure expression or super */ null && (DialogOverlay));
var Content = (/* unused pure expression or super */ null && (DialogContent));
var Title = (/* unused pure expression or super */ null && (DialogTitle));
var Description = (/* unused pure expression or super */ null && (DialogDescription));
var Close = (/* unused pure expression or super */ null && (DialogClose));
 //# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/fumadocs-ui/dist/chunk-45REPLUI.js







// src/components/dialog/search.tsx




function SearchDialog({
  open,
  onOpenChange,
  footer,
  links = [],
  ...props
}) {
  const { text } = (0,chunk_EFMHXXHW/* useI18n */.Q)();
  const defaultItems = (0,react.useMemo)(
    () => links.map(([name, link]) => ({
      type: "page",
      id: name,
      content: name,
      url: link
    })),
    [links]
  );
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Dialog, { open, onOpenChange, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-fd-background/50 backdrop-blur-sm data-[state=closed]:animate-fd-fade-out data-[state=open]:animate-fd-fade-in" }),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(
      DialogContent,
      {
        "aria-describedby": text.search,
        className: "fixed left-1/2 top-[10vh] z-50 w-[98vw] max-w-screen-sm origin-left -translate-x-1/2 rounded-lg border bg-fd-popover text-fd-popover-foreground shadow-lg data-[state=closed]:animate-fd-dialog-out data-[state=open]:animate-fd-dialog-in",
        children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)(DialogTitle, { className: "hidden", children: text.search }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(
            SearchInput,
            {
              search: props.search,
              onSearchChange: props.onSearchChange,
              isLoading: props.isLoading
            }
          ),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(
            SearchList,
            {
              items: props.results === "empty" ? defaultItems : props.results,
              hideResults: props.results === "empty" && defaultItems.length === 0
            }
          ),
          footer ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "mt-auto flex flex-col border-t p-3", children: footer }) : null
        ]
      }
    )
  ] });
}
var icons = {
  text: /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_5QPVK7QM/* Text */.xv, { className: "size-4 text-fd-muted-foreground" }),
  heading: /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_5QPVK7QM/* Hash */.kb, { className: "size-4 text-fd-muted-foreground" }),
  page: /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_5QPVK7QM/* FileText */.ac, { className: "size-4 text-fd-muted-foreground" })
};
function SearchInput({ search, onSearchChange, isLoading }) {
  const { text } = (0,chunk_EFMHXXHW/* useI18n */.Q)();
  const { setOpenSearch } = (0,chunk_ET4TW6M5/* useSearchContext */.A)();
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "flex flex-row items-center gap-2 px-3", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(LoadingIndicator, { isLoading: isLoading ?? false }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      "input",
      {
        value: search,
        onChange: (e) => {
          onSearchChange(e.target.value);
        },
        placeholder: text.search,
        className: "w-0 flex-1 bg-transparent py-3 text-base placeholder:text-fd-muted-foreground focus-visible:outline-none"
      }
    ),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      "button",
      {
        type: "button",
        "aria-label": "Close Search",
        onClick: () => {
          setOpenSearch(false);
        },
        className: (0,bundle_mjs/* twMerge */.m6)(
          (0,chunk_QKOA6KEZ/* buttonVariants */.d)({
            color: "outline",
            className: "text-xs p-1.5"
          })
        ),
        children: "Esc"
      }
    )
  ] });
}
function SearchList({ items, hideResults = false }) {
  const [active, setActive] = (0,react.useState)();
  const { text } = (0,chunk_EFMHXXHW/* useI18n */.Q)();
  const router = (0,navigation.useRouter)();
  const sidebar = (0,chunk_27HFSL7N/* useSidebar */.A)();
  const { setOpenSearch } = (0,chunk_ET4TW6M5/* useSearchContext */.A)();
  if (items.length > 0 && (!active || items.every((item) => item.id !== active))) {
    setActive(items[0].id);
  }
  const listenerRef = (0,react.useRef)();
  listenerRef.current = (e) => {
    if (e.key === "ArrowDown" || e.key == "ArrowUp") {
      setActive((cur) => {
        const idx = items.findIndex((item) => item.id === cur);
        if (idx === -1) return items.at(0)?.id;
        return items.at(
          (e.key === "ArrowDown" ? idx + 1 : idx - 1) % items.length
        )?.id;
      });
      e.preventDefault();
    }
    if (e.key === "Enter") {
      const selected = items.find((item) => item.id === active);
      if (selected) onOpen(selected.url);
      e.preventDefault();
    }
  };
  (0,react.useEffect)(() => {
    const listener = (e) => {
      listenerRef.current?.(e);
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
  const onOpen = (url) => {
    router.push(url);
    setOpenSearch(false);
    sidebar.setOpen(false);
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    "div",
    {
      className: (0,bundle_mjs/* twMerge */.m6)(
        "flex max-h-[460px] flex-col overflow-y-auto border-t p-2",
        hideResults && "hidden"
      ),
      children: [
        items.length === 0 ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "py-12 text-center text-sm", children: text.searchNoResult }) : null,
        items.map((item) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(
          CommandItem,
          {
            value: item.id,
            active,
            onActiveChange: setActive,
            onClick: () => {
              onOpen(item.url);
            },
            children: [
              item.type !== "page" ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
                "div",
                {
                  role: "none",
                  className: "ms-2 h-full min-h-10 w-px bg-fd-border"
                }
              ) : null,
              icons[item.type],
              /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "w-0 flex-1 truncate", children: item.content })
            ]
          },
          item.id
        ))
      ]
    }
  );
}
function LoadingIndicator({ isLoading }) {
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "relative size-4", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      chunk_5QPVK7QM/* LoaderCircle */.Go,
      {
        className: (0,bundle_mjs/* twMerge */.m6)(
          "absolute size-full animate-spin text-fd-primary transition-opacity",
          !isLoading && "opacity-0"
        )
      }
    ),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      chunk_5QPVK7QM/* Search */.ol,
      {
        className: (0,bundle_mjs/* twMerge */.m6)(
          "absolute size-full text-fd-muted-foreground transition-opacity",
          isLoading && "opacity-0"
        )
      }
    )
  ] });
}
function CommandItem({
  active,
  onActiveChange,
  value,
  ...props
}) {
  const ref = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    const element = ref.current;
    if (active === value && element) {
      element.scrollIntoView({
        block: "nearest"
      });
    }
  }, [active, value]);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "button",
    {
      ref,
      type: "button",
      "aria-selected": active === value,
      onPointerMove: () => onActiveChange(value),
      ...props,
      className: (0,bundle_mjs/* twMerge */.m6)(
        "flex min-h-10 select-none flex-row items-center gap-2.5 rounded-lg px-2 text-start text-sm aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-selected:bg-fd-accent aria-selected:text-fd-accent-foreground",
        props.className
      ),
      children: props.children
    }
  );
}



// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-MLKGABMK.js
var chunk_MLKGABMK = __webpack_require__(894);
// EXTERNAL MODULE: ./node_modules/fumadocs-core/dist/chunk-EMWGTXSW.js
var chunk_EMWGTXSW = __webpack_require__(7655);
// EXTERNAL MODULE: ./node_modules/fumadocs-core/dist/chunk-MLKGABMK.js
var dist_chunk_MLKGABMK = __webpack_require__(7067);
;// CONCATENATED MODULE: ./node_modules/fumadocs-core/dist/search/client.js



// src/search/client.ts


// src/utils/use-debounce.ts

function useDebounce(value, delayMs = 1e3) {
  const [debouncedValue, setDebouncedValue] = (0,react.useState)(value);
  const timer = (0,react.useRef)();
  if (delayMs === 0) return value;
  if (value !== debouncedValue && timer.current?.value !== value) {
    if (timer.current) clearTimeout(timer.current.handler);
    const handler = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);
    timer.current = { value, handler };
  }
  return debouncedValue;
}

// src/search/client.ts
var cache = /* @__PURE__ */ new Map();
var staticClient;
function useDocsSearch(client, locale, tag, delayMs = 100, allowEmpty = false, key) {
  const [search, setSearch] = (0,react.useState)("");
  const [results, setResults] = (0,react.useState)("empty");
  const [error, setError] = (0,react.useState)();
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const debouncedValue = useDebounce(search, delayMs);
  const onStart = (0,react.useRef)();
  const cacheKey = (0,react.useMemo)(() => {
    return key ?? JSON.stringify([client.type, debouncedValue, locale, tag]);
  }, [client.type, debouncedValue, locale, tag, key]);
  (0,chunk_EMWGTXSW/* useOnChange */.p)(cacheKey, () => {
    const cached = cache.get(cacheKey);
    if (onStart.current) {
      onStart.current();
      onStart.current = void 0;
    }
    if (cached) {
      setIsLoading(false);
      setError(void 0);
      setResults(cached);
      return;
    }
    setIsLoading(true);
    let interrupt = false;
    onStart.current = () => {
      interrupt = true;
    };
    async function run() {
      if (debouncedValue.length === 0 && !allowEmpty) return "empty";
      if (client.type === "fetch") {
        const { fetchDocs } = await __webpack_require__.e(/* import() */ 405).then(__webpack_require__.bind(__webpack_require__, 8405));
        return fetchDocs(debouncedValue, locale, tag, client);
      }
      if (client.type === "algolia") {
        const { index, type: _, ...rest } = client;
        const { searchDocs } = await __webpack_require__.e(/* import() */ 906).then(__webpack_require__.bind(__webpack_require__, 7906));
        return searchDocs(index, debouncedValue, tag, rest);
      }
      if (client.type === "orama-cloud") {
        const { searchDocs } = await __webpack_require__.e(/* import() */ 506).then(__webpack_require__.bind(__webpack_require__, 4506));
        return searchDocs(debouncedValue, tag, client);
      }
      const { createStaticClient } = await __webpack_require__.e(/* import() */ 742).then(__webpack_require__.bind(__webpack_require__, 6179));
      if (!staticClient) staticClient = createStaticClient(client);
      return staticClient.search(debouncedValue, locale, tag);
    }
    void run().then((res) => {
      cache.set(cacheKey, res);
      if (interrupt) return;
      setError(void 0);
      setResults(res);
    }).catch((err) => {
      setError(err);
    }).finally(() => {
      setIsLoading(false);
    });
  });
  return { search, setSearch, query: { isLoading, data: results, error } };
}


// EXTERNAL MODULE: ./node_modules/fumadocs-core/dist/utils/use-on-change.js
var use_on_change = __webpack_require__(3547);
;// CONCATENATED MODULE: ./node_modules/fumadocs-ui/dist/components/dialog/search-default.js
/* __next_internal_client_entry_do_not_use__ default auto */ 








// src/components/dialog/search-default.tsx




function DefaultSearchDialog(param) {
    let { defaultTag, tags, api, delayMs, type = "fetch", allowClear = false, ...props } = param;
    const { locale } = (0,chunk_EFMHXXHW/* useI18n */.Q)();
    const [tag, setTag] = (0,react.useState)(defaultTag);
    const { search, setSearch, query } = useDocsSearch(type === "fetch" ? {
        type: "fetch",
        api
    } : {
        type: "static",
        from: api
    }, locale, tag, delayMs);
    (0,use_on_change/* useOnChange */.p)(defaultTag, (v)=>{
        setTag(v);
    });
    var _query_data;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(SearchDialog, {
        search,
        onSearchChange: setSearch,
        isLoading: query.isLoading,
        results: (_query_data = query.data) !== null && _query_data !== void 0 ? _query_data : [],
        ...props,
        footer: tags ? /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)(TagsList, {
                    tag,
                    onTagChange: setTag,
                    items: tags,
                    allowClear
                }),
                props.footer
            ]
        }) : props.footer
    });
}



/***/ })

}]);