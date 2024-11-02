"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[569],{

/***/ 8369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ry: () => (/* binding */ hideOthers)
/* harmony export */ });
/* unused harmony exports inertOthers, supportsInert, suppressOthers */
var getDefaultParent = function (originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function (node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function (parent, targets) {
    return targets
        .map(function (target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    })
        .filter(function (x) { return Boolean(x); });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */
var applyAttributeToOthers = function (originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function (el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function (parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function (node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            }
            else {
                try {
                    var attr = node.getAttribute(controlAttribute);
                    var alreadyHidden = attr !== null && attr !== 'false';
                    var counterValue = (counterMap.get(node) || 0) + 1;
                    var markerValue = (markerCounter.get(node) || 0) + 1;
                    counterMap.set(node, counterValue);
                    markerCounter.set(node, markerValue);
                    hiddenNodes.push(node);
                    if (counterValue === 1 && alreadyHidden) {
                        uncontrolledNodes.set(node, true);
                    }
                    if (markerValue === 1) {
                        node.setAttribute(markerName, 'true');
                    }
                    if (!alreadyHidden) {
                        node.setAttribute(controlAttribute, 'true');
                    }
                }
                catch (e) {
                    console.error('aria-hidden: cannot operate on ', node, e);
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function () {
        hiddenNodes.forEach(function (node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var hideOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-aria-hidden'; }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function () { return null; };
    }
    // we should not hide ariaLive elements - https://github.com/theKashey/aria-hidden/issues/10
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live]')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};
/**
 * Marks everything except given node(or nodes) as inert
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var inertOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-inert-ed'; }
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function () { return null; };
    }
    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');
};
/**
 * @returns if current browser supports inert
 */
var supportsInert = function () {
    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');
};
/**
 * Automatic function to "suppress" DOM elements - _hide_ or _inert_ in the best possible way
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var suppressOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-suppressed'; }
    return (supportsInert() ? inertOthers : hideOthers)(originalTarget, parentNode, markerName);
};


/***/ }),

/***/ 2358:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  XB: () => (/* binding */ DismissableLayer)
});

// UNUSED EXPORTS: Branch, DismissableLayerBranch, Root

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/@radix-ui/primitive/dist/index.mjs
var dist = __webpack_require__(8149);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var react_primitive_dist = __webpack_require__(5171);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(1584);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var react_use_callback_ref_dist = __webpack_require__(5137);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
// packages/react/use-escape-keydown/src/useEscapeKeydown.tsx


function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
  const onEscapeKeyDown = (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onEscapeKeyDownProp);
  react.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}

//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Branch,DismissableLayer,DismissableLayerBranch,Root auto */ // packages/react/dismissable-layer/src/DismissableLayer.tsx







var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = /*#__PURE__*/ react.createContext({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    var _globalThis;
    const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
    const context = react.useContext(DismissableLayerContext);
    const [node, setNode] = react.useState(null);
    var _node_ownerDocument;
    const ownerDocument = (_node_ownerDocument = node === null || node === void 0 ? void 0 : node.ownerDocument) !== null && _node_ownerDocument !== void 0 ? _node_ownerDocument : (_globalThis = globalThis) === null || _globalThis === void 0 ? void 0 : _globalThis.document;
    const [, force] = react.useState({});
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node2)=>setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
        ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event)=>{
        const target = event.target;
        const isPointerDownOnBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target));
        if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
        onPointerDownOutside === null || onPointerDownOutside === void 0 ? void 0 : onPointerDownOutside(event);
        onInteractOutside === null || onInteractOutside === void 0 ? void 0 : onInteractOutside(event);
        if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event)=>{
        const target = event.target;
        const isFocusInBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target));
        if (isFocusInBranch) return;
        onFocusOutside === null || onFocusOutside === void 0 ? void 0 : onFocusOutside(event);
        onInteractOutside === null || onInteractOutside === void 0 ? void 0 : onInteractOutside(event);
        if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss();
    }, ownerDocument);
    useEscapeKeydown((event)=>{
        const isHighestLayer = index === context.layers.size - 1;
        if (!isHighestLayer) return;
        onEscapeKeyDown === null || onEscapeKeyDown === void 0 ? void 0 : onEscapeKeyDown(event);
        if (!event.defaultPrevented && onDismiss) {
            event.preventDefault();
            onDismiss();
        }
    }, ownerDocument);
    react.useEffect(()=>{
        if (!node) return;
        if (disableOutsidePointerEvents) {
            if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
                originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
                ownerDocument.body.style.pointerEvents = "none";
            }
            context.layersWithOutsidePointerEventsDisabled.add(node);
        }
        context.layers.add(node);
        dispatchUpdate();
        return ()=>{
            if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
                ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
            }
        };
    }, [
        node,
        ownerDocument,
        disableOutsidePointerEvents,
        context
    ]);
    react.useEffect(()=>{
        return ()=>{
            if (!node) return;
            context.layers.delete(node);
            context.layersWithOutsidePointerEventsDisabled.delete(node);
            dispatchUpdate();
        };
    }, [
        node,
        context
    ]);
    react.useEffect(()=>{
        const handleUpdate = ()=>force({});
        document.addEventListener(CONTEXT_UPDATE, handleUpdate);
        return ()=>document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.div, {
        ...layerProps,
        ref: composedRefs,
        style: {
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
            ...props.style
        },
        onFocusCapture: (0,dist/* composeEventHandlers */.M)(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: (0,dist/* composeEventHandlers */.M)(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: (0,dist/* composeEventHandlers */.M)(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
    });
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const context = react.useContext(DismissableLayerContext);
    const ref = react.useRef(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref);
    react.useEffect(()=>{
        const node = ref.current;
        if (node) {
            context.branches.add(node);
            return ()=>{
                context.branches.delete(node);
            };
        }
    }, [
        context.branches
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.div, {
        ...props,
        ref: composedRefs
    });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside) {
    let ownerDocument = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (()=>{
        var _globalThis;
        return (_globalThis = globalThis) === null || _globalThis === void 0 ? void 0 : _globalThis.document;
    })();
    const handlePointerDownOutside = (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onPointerDownOutside);
    const isPointerInsideReactTreeRef = react.useRef(false);
    const handleClickRef = react.useRef(()=>{});
    react.useEffect(()=>{
        const handlePointerDown = (event)=>{
            if (event.target && !isPointerInsideReactTreeRef.current) {
                let handleAndDispatchPointerDownOutsideEvent2 = function() {
                    handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
                        discrete: true
                    });
                };
                var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
                const eventDetail = {
                    originalEvent: event
                };
                if (event.pointerType === "touch") {
                    ownerDocument.removeEventListener("click", handleClickRef.current);
                    handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
                    ownerDocument.addEventListener("click", handleClickRef.current, {
                        once: true
                    });
                } else {
                    handleAndDispatchPointerDownOutsideEvent2();
                }
            } else {
                ownerDocument.removeEventListener("click", handleClickRef.current);
            }
            isPointerInsideReactTreeRef.current = false;
        };
        const timerId = window.setTimeout(()=>{
            ownerDocument.addEventListener("pointerdown", handlePointerDown);
        }, 0);
        return ()=>{
            window.clearTimeout(timerId);
            ownerDocument.removeEventListener("pointerdown", handlePointerDown);
            ownerDocument.removeEventListener("click", handleClickRef.current);
        };
    }, [
        ownerDocument,
        handlePointerDownOutside
    ]);
    return {
        // ensures we check React component tree (not just DOM tree)
        onPointerDownCapture: ()=>isPointerInsideReactTreeRef.current = true
    };
}
function useFocusOutside(onFocusOutside) {
    let ownerDocument = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (()=>{
        var _globalThis;
        return (_globalThis = globalThis) === null || _globalThis === void 0 ? void 0 : _globalThis.document;
    })();
    const handleFocusOutside = (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onFocusOutside);
    const isFocusInsideReactTreeRef = react.useRef(false);
    react.useEffect(()=>{
        const handleFocus = (event)=>{
            if (event.target && !isFocusInsideReactTreeRef.current) {
                const eventDetail = {
                    originalEvent: event
                };
                handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
                    discrete: false
                });
            }
        };
        ownerDocument.addEventListener("focusin", handleFocus);
        return ()=>ownerDocument.removeEventListener("focusin", handleFocus);
    }, [
        ownerDocument,
        handleFocusOutside
    ]);
    return {
        onFocusCapture: ()=>isFocusInsideReactTreeRef.current = true,
        onBlurCapture: ()=>isFocusInsideReactTreeRef.current = false
    };
}
function dispatchUpdate() {
    const event = new CustomEvent(CONTEXT_UPDATE);
    document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, param) {
    let { discrete } = param;
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: true,
        detail
    });
    if (handler) target.addEventListener(name, handler, {
        once: true
    });
    if (discrete) {
        (0,react_primitive_dist/* dispatchDiscreteCustomEvent */.jH)(target, event);
    } else {
        target.dispatchEvent(event);
    }
}
var Root = (/* unused pure expression or super */ null && (DismissableLayer));
var Branch = (/* unused pure expression or super */ null && (DismissableLayerBranch));
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 589:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EW: () => (/* binding */ useFocusGuards)
/* harmony export */ });
/* unused harmony exports FocusGuards, Root */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* __next_internal_client_entry_do_not_use__ FocusGuards,Root,useFocusGuards auto */ // packages/react/focus-guards/src/FocusGuards.tsx

var count = 0;
function FocusGuards(props) {
    useFocusGuards();
    return props.children;
}
function useFocusGuards() {
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
        var _edgeGuards_;
        document.body.insertAdjacentElement("afterbegin", (_edgeGuards_ = edgeGuards[0]) !== null && _edgeGuards_ !== void 0 ? _edgeGuards_ : createFocusGuard());
        var _edgeGuards_1;
        document.body.insertAdjacentElement("beforeend", (_edgeGuards_1 = edgeGuards[1]) !== null && _edgeGuards_1 !== void 0 ? _edgeGuards_1 : createFocusGuard());
        count++;
        return ()=>{
            if (count === 1) {
                document.querySelectorAll("[data-radix-focus-guard]").forEach((node)=>node.remove());
            }
            count--;
        };
    }, []);
}
function createFocusGuard() {
    const element = document.createElement("span");
    element.setAttribute("data-radix-focus-guard", "");
    element.tabIndex = 0;
    element.style.outline = "none";
    element.style.opacity = "0";
    element.style.position = "fixed";
    element.style.pointerEvents = "none";
    return element;
}
var Root = (/* unused pure expression or super */ null && (FocusGuards));
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 467:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ FocusScope)
/* harmony export */ });
/* unused harmony export Root */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1584);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5171);
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5137);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7437);
/* __next_internal_client_entry_do_not_use__ FocusScope,Root auto */ // packages/react/focus-scope/src/FocusScope.tsx





var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
    const [container, setContainer] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const onMountAutoFocus = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_2__/* .useCallbackRef */ .W)(onMountAutoFocusProp);
    const onUnmountAutoFocus = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_2__/* .useCallbackRef */ .W)(onUnmountAutoFocusProp);
    const lastFocusedElementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__/* .useComposedRefs */ .e)(forwardedRef, (node)=>setContainer(node));
    const focusScope = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        paused: false,
        pause () {
            this.paused = true;
        },
        resume () {
            this.paused = false;
        }
    }).current;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (trapped) {
            let handleFocusIn2 = function(event) {
                if (focusScope.paused || !container) return;
                const target = event.target;
                if (container.contains(target)) {
                    lastFocusedElementRef.current = target;
                } else {
                    focus(lastFocusedElementRef.current, {
                        select: true
                    });
                }
            }, handleFocusOut2 = function(event) {
                if (focusScope.paused || !container) return;
                const relatedTarget = event.relatedTarget;
                if (relatedTarget === null) return;
                if (!container.contains(relatedTarget)) {
                    focus(lastFocusedElementRef.current, {
                        select: true
                    });
                }
            }, handleMutations2 = function(mutations) {
                const focusedElement = document.activeElement;
                if (focusedElement !== document.body) return;
                for (const mutation of mutations){
                    if (mutation.removedNodes.length > 0) focus(container);
                }
            };
            var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
            document.addEventListener("focusin", handleFocusIn2);
            document.addEventListener("focusout", handleFocusOut2);
            const mutationObserver = new MutationObserver(handleMutations2);
            if (container) mutationObserver.observe(container, {
                childList: true,
                subtree: true
            });
            return ()=>{
                document.removeEventListener("focusin", handleFocusIn2);
                document.removeEventListener("focusout", handleFocusOut2);
                mutationObserver.disconnect();
            };
        }
    }, [
        trapped,
        container,
        focusScope.paused
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (container) {
            focusScopesStack.add(focusScope);
            const previouslyFocusedElement = document.activeElement;
            const hasFocusedCandidate = container.contains(previouslyFocusedElement);
            if (!hasFocusedCandidate) {
                const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
                container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                container.dispatchEvent(mountEvent);
                if (!mountEvent.defaultPrevented) {
                    focusFirst(removeLinks(getTabbableCandidates(container)), {
                        select: true
                    });
                    if (document.activeElement === previouslyFocusedElement) {
                        focus(container);
                    }
                }
            }
            return ()=>{
                container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                setTimeout(()=>{
                    const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
                    container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    container.dispatchEvent(unmountEvent);
                    if (!unmountEvent.defaultPrevented) {
                        focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
                            select: true
                        });
                    }
                    container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    focusScopesStack.remove(focusScope);
                }, 0);
            };
        }
    }, [
        container,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
    ]);
    const handleKeyDown = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event)=>{
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
            const container2 = event.currentTarget;
            const [first, last] = getTabbableEdges(container2);
            const hasTabbableElementsInside = first && last;
            if (!hasTabbableElementsInside) {
                if (focusedElement === container2) event.preventDefault();
            } else {
                if (!event.shiftKey && focusedElement === last) {
                    event.preventDefault();
                    if (loop) focus(first, {
                        select: true
                    });
                } else if (event.shiftKey && focusedElement === first) {
                    event.preventDefault();
                    if (loop) focus(last, {
                        select: true
                    });
                }
            }
        }
    }, [
        loop,
        trapped,
        focusScope.paused
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__/* .Primitive */ .WV.div, {
        tabIndex: -1,
        ...scopeProps,
        ref: composedRefs,
        onKeyDown: handleKeyDown
    });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates) {
    let { select = false } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates){
        focus(candidate, {
            select
        });
        if (document.activeElement !== previouslyFocusedElement) return;
    }
}
function getTabbableEdges(container) {
    const candidates = getTabbableCandidates(container);
    const first = findVisible(candidates, container);
    const last = findVisible(candidates.reverse(), container);
    return [
        first,
        last
    ];
}
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
function findVisible(elements, container) {
    for (const element of elements){
        if (!isHidden(element, {
            upTo: container
        })) return element;
    }
}
function isHidden(node, param) {
    let { upTo } = param;
    if (getComputedStyle(node).visibility === "hidden") return true;
    while(node){
        if (upTo !== void 0 && node === upTo) return false;
        if (getComputedStyle(node).display === "none") return true;
        node = node.parentElement;
    }
    return false;
}
function isSelectableInput(element) {
    return element instanceof HTMLInputElement && "select" in element;
}
function focus(element) {
    let { select = false } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement;
        element.focus({
            preventScroll: true
        });
        if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
    }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
    let stack = [];
    return {
        add (focusScope) {
            const activeFocusScope = stack[0];
            if (focusScope !== activeFocusScope) {
                activeFocusScope === null || activeFocusScope === void 0 ? void 0 : activeFocusScope.pause();
            }
            stack = arrayRemove(stack, focusScope);
            stack.unshift(focusScope);
        },
        remove (focusScope) {
            var _stack_;
            stack = arrayRemove(stack, focusScope);
            (_stack_ = stack[0]) === null || _stack_ === void 0 ? void 0 : _stack_.resume();
        }
    };
}
function arrayRemove(array, item) {
    const updatedArray = [
        ...array
    ];
    const index = updatedArray.indexOf(item);
    if (index !== -1) {
        updatedArray.splice(index, 1);
    }
    return updatedArray;
}
function removeLinks(items) {
    return items.filter((item)=>item.tagName !== "A");
}
var Root = (/* unused pure expression or super */ null && (FocusScope));
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 6935:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ Portal)
/* harmony export */ });
/* unused harmony export Root */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4887);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5171);
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1336);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7437);
/* __next_internal_client_entry_do_not_use__ Portal,Root auto */ // packages/react/portal/src/Portal.tsx





var PORTAL_NAME = "Portal";
var Portal = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    var _globalThis_document, _globalThis;
    const { container: containerProp, ...portalProps } = props;
    const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__/* .useLayoutEffect */ .b)(()=>setMounted(true), []);
    const container = containerProp || mounted && ((_globalThis = globalThis) === null || _globalThis === void 0 ? void 0 : (_globalThis_document = _globalThis.document) === null || _globalThis_document === void 0 ? void 0 : _globalThis_document.body);
    return container ? /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__/* .Primitive */ .WV.div, {
        ...portalProps,
        ref: forwardedRef
    }), container) : null;
});
Portal.displayName = PORTAL_NAME;
var Root = (/* unused pure expression or super */ null && (Portal));
 //# sourceMappingURL=index.mjs.map


/***/ })

}]);