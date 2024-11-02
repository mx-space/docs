(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[40],{

/***/ 42:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(5786);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true"
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 9760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Github)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/shared/src/utils.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = function() {
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
        classes[_key] = arguments[_key];
    }
    return classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
};
 //# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
 //# sourceMappingURL=defaultAttributes.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/Icon.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 


const Icon = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest } = param;
    return /*#__PURE__*/ (0,react.createElement)("svg", {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
    }, [
        ...iconNode.map((param)=>{
            let [tag, attrs] = param;
            return /*#__PURE__*/ (0,react.createElement)(tag, attrs);
        }),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
 //# sourceMappingURL=Icon.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 


const createLucideIcon = (iconName, iconNode)=>{
    const Component = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
        let { className, ...props } = param;
        return /*#__PURE__*/ (0,react.createElement)(Icon, {
            ref,
            iconNode,
            className: mergeClasses("lucide-".concat(toKebabCase(iconName)), className),
            ...props
        });
    });
    Component.displayName = "".concat(iconName);
    return Component;
};
 //# sourceMappingURL=createLucideIcon.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/github.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Github = createLucideIcon("Github", [
    [
        "path",
        {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef"
        }
    ],
    [
        "path",
        {
            d: "M9 18c-4.51 2-5-2-7-2",
            key: "9comsn"
        }
    ]
]);
 //# sourceMappingURL=github.js.map


/***/ }),

/***/ 6648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport default from dynamic */ _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5601);
/* harmony import */ var _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0__);



//# sourceMappingURL=image.js.map

/***/ }),

/***/ 5601:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __webpack_require__(9920);
const _getimgprops = __webpack_require__(497);
const _imagecomponent = __webpack_require__(8173);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(1241));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true}
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 9949:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(8877);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 1448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(9949)();
}


/***/ }),

/***/ 8877:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 3513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1448);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var GitHub = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  }));
});
GitHub.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
GitHub.displayName = 'GitHub';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GitHub);

/***/ }),

/***/ 5786:
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ 882:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fw: () => (/* binding */ CollapsibleContent),
/* harmony export */   VY: () => (/* binding */ Content),
/* harmony export */   fC: () => (/* binding */ Root),
/* harmony export */   p_: () => (/* binding */ createCollapsibleScope),
/* harmony export */   wy: () => (/* binding */ CollapsibleTrigger),
/* harmony export */   xz: () => (/* binding */ Trigger)
/* harmony export */ });
/* unused harmony export Collapsible */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8149);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8324);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1715);
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1336);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1584);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5171);
/* harmony import */ var _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1383);
/* harmony import */ var _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3201);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7437);
/* __next_internal_client_entry_do_not_use__ Collapsible,CollapsibleContent,CollapsibleTrigger,Content,Root,Trigger,createCollapsibleScope auto */ // packages/react/collapsible/src/Collapsible.tsx










var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__/* .createContextScope */ .b)(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeCollapsible, open: openProp, defaultOpen, disabled, onOpenChange, ...collapsibleProps } = props;
    const [open = false, setOpen] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__/* .useControllableState */ .T)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CollapsibleProvider, {
        scope: __scopeCollapsible,
        disabled,
        contentId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__/* .useId */ .M)(),
        open,
        onOpenToggle: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>setOpen((prevOpen)=>!prevOpen), [
            setOpen
        ]),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__/* .Primitive */ .WV.div, {
            "data-state": getState(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
        })
    });
});
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME = "CollapsibleTrigger";
var CollapsibleTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME, __scopeCollapsible);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__/* .Primitive */ .WV.button, {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(props.onClick, context.onOpenToggle)
    });
});
CollapsibleTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "CollapsibleContent";
var CollapsibleContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME, props.__scopeCollapsible);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__/* .Presence */ .z, {
        present: forceMount || context.open,
        children: (param)=>{
            let { present } = param;
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CollapsibleContentImpl, {
                ...contentProps,
                ref: forwardedRef,
                present
            });
        }
    });
});
CollapsibleContent.displayName = CONTENT_NAME;
var CollapsibleContentImpl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeCollapsible, present, children, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME, __scopeCollapsible);
    const [isPresent, setIsPresent] = react__WEBPACK_IMPORTED_MODULE_0__.useState(present);
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_8__/* .useComposedRefs */ .e)(forwardedRef, ref);
    const heightRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const height = heightRef.current;
    const widthRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const width = widthRef.current;
    const isOpen = context.open || isPresent;
    const isMountAnimationPreventedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(isOpen);
    const originalStylesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const rAF = requestAnimationFrame(()=>isMountAnimationPreventedRef.current = false);
        return ()=>cancelAnimationFrame(rAF);
    }, []);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_9__/* .useLayoutEffect */ .b)(()=>{
        const node = ref.current;
        if (node) {
            originalStylesRef.current = originalStylesRef.current || {
                transitionDuration: node.style.transitionDuration,
                animationName: node.style.animationName
            };
            node.style.transitionDuration = "0s";
            node.style.animationName = "none";
            const rect = node.getBoundingClientRect();
            heightRef.current = rect.height;
            widthRef.current = rect.width;
            if (!isMountAnimationPreventedRef.current) {
                node.style.transitionDuration = originalStylesRef.current.transitionDuration;
                node.style.animationName = originalStylesRef.current.animationName;
            }
            setIsPresent(present);
        }
    }, [
        context.open,
        present
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__/* .Primitive */ .WV.div, {
        "data-state": getState(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        id: context.contentId,
        hidden: !isOpen,
        ...contentProps,
        ref: composedRefs,
        style: {
            ["--radix-collapsible-content-height"]: height ? "".concat(height, "px") : void 0,
            ["--radix-collapsible-content-width"]: width ? "".concat(width, "px") : void 0,
            ...props.style
        },
        children: isOpen && children
    });
});
function getState(open) {
    return open ? "open" : "closed";
}
var Root = Collapsible;
var Trigger = CollapsibleTrigger;
var Content = CollapsibleContent;
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 8692:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ useCopyButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
// src/utils/use-copy-button.ts

function useCopyButton(onCopy) {
  const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const timeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setChecked(false);
    }, 1500);
    onCopy();
    setChecked(true);
  }, [onCopy]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);
  return [checked, onClick];
}




/***/ }),

/***/ 6634:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fw: () => (/* binding */ CollapsibleContent2),
/* harmony export */   wy: () => (/* binding */ CollapsibleTrigger2),
/* harmony export */   zF: () => (/* binding */ Collapsible)
/* harmony export */ });
/* harmony import */ var _chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6164);
/* harmony import */ var _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(882);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7437);


// src/components/ui/collapsible.tsx



var Collapsible = _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC;
var CollapsibleTrigger2 = _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_2__/* .CollapsibleTrigger */ .wy;
var CollapsibleContent2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({ children, ...props }, ref) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
    _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_2__/* .CollapsibleContent */ .Fw,
    {
      ref,
      ...props,
      className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_3__/* .twMerge */ .m6)(
        "overflow-hidden [--radix-collapsible-content-height:0px] data-[state=closed]:animate-fd-collapsible-up data-[state=open]:animate-fd-collapsible-down",
        props.className
      ),
      children
    }
  );
});
CollapsibleContent2.displayName = _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_2__/* .CollapsibleContent */ .Fw.displayName;




/***/ }),

/***/ 2586:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Accordion: () => (/* binding */ accordion_Accordion),
  Accordions: () => (/* binding */ Accordions)
});

// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-2KMKNVSN.js
var chunk_2KMKNVSN = __webpack_require__(8692);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-QKOA6KEZ.js
var chunk_QKOA6KEZ = __webpack_require__(3950);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-5QPVK7QM.js
var chunk_5QPVK7QM = __webpack_require__(3592);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/bundle-mjs.mjs
var bundle_mjs = __webpack_require__(6164);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-MLKGABMK.js
var chunk_MLKGABMK = __webpack_require__(894);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-context/dist/index.mjs
var dist = __webpack_require__(8324);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-collection/dist/index.mjs + 1 modules
var react_collection_dist = __webpack_require__(6402);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(1584);
// EXTERNAL MODULE: ./node_modules/@radix-ui/primitive/dist/index.mjs
var primitive_dist = __webpack_require__(8149);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var react_use_controllable_state_dist = __webpack_require__(1715);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var react_primitive_dist = __webpack_require__(5171);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-collapsible/dist/index.mjs
var react_collapsible_dist = __webpack_require__(882);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-id/dist/index.mjs
var react_id_dist = __webpack_require__(3201);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-direction/dist/index.mjs
var react_direction_dist = __webpack_require__(7513);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-accordion/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Accordion,AccordionContent,AccordionHeader,AccordionItem,AccordionTrigger,Content,Header,Item,Root,Trigger,createAccordionScope auto */ // packages/react/accordion/src/Accordion.tsx












var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = [
    "Home",
    "End",
    "ArrowDown",
    "ArrowUp",
    "ArrowLeft",
    "ArrowRight"
];
var [Collection, useCollection, createCollectionScope] = (0,react_collection_dist/* createCollection */.B)(ACCORDION_NAME);
var [createAccordionContext, createAccordionScope] = (0,dist/* createContextScope */.b)(ACCORDION_NAME, [
    createCollectionScope,
    react_collapsible_dist/* createCollapsibleScope */.p_
]);
var useCollapsibleScope = (0,react_collapsible_dist/* createCollapsibleScope */.p_)();
var Accordion = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { type, ...accordionProps } = props;
    const singleProps = accordionProps;
    const multipleProps = accordionProps;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Collection.Provider, {
        scope: props.__scopeAccordion,
        children: type === "multiple" ? /* @__PURE__ */ (0,jsx_runtime.jsx)(AccordionImplMultiple, {
            ...multipleProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(AccordionImplSingle, {
            ...singleProps,
            ref: forwardedRef
        })
    });
});
Accordion.displayName = ACCORDION_NAME;
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(ACCORDION_NAME, {
    collapsible: false
});
var AccordionImplSingle = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { value: valueProp, defaultValue, onValueChange = ()=>{}, collapsible = false, ...accordionSingleProps } = props;
    const [value, setValue] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(AccordionValueProvider, {
        scope: props.__scopeAccordion,
        value: value ? [
            value
        ] : [],
        onItemOpen: setValue,
        onItemClose: react.useCallback(()=>collapsible && setValue(""), [
            collapsible,
            setValue
        ]),
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(AccordionCollapsibleProvider, {
            scope: props.__scopeAccordion,
            collapsible,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(AccordionImpl, {
                ...accordionSingleProps,
                ref: forwardedRef
            })
        })
    });
});
var AccordionImplMultiple = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { value: valueProp, defaultValue, onValueChange = ()=>{}, ...accordionMultipleProps } = props;
    const [value = [], setValue] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    const handleItemOpen = react.useCallback((itemValue)=>setValue(function() {
            let prevValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            return [
                ...prevValue,
                itemValue
            ];
        }), [
        setValue
    ]);
    const handleItemClose = react.useCallback((itemValue)=>setValue(function() {
            let prevValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            return prevValue.filter((value2)=>value2 !== itemValue);
        }), [
        setValue
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(AccordionValueProvider, {
        scope: props.__scopeAccordion,
        value,
        onItemOpen: handleItemOpen,
        onItemClose: handleItemClose,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(AccordionCollapsibleProvider, {
            scope: props.__scopeAccordion,
            collapsible: true,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(AccordionImpl, {
                ...accordionMultipleProps,
                ref: forwardedRef
            })
        })
    });
});
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
    const accordionRef = react.useRef(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(accordionRef, forwardedRef);
    const getItems = useCollection(__scopeAccordion);
    const direction = (0,react_direction_dist/* useDirection */.gm)(dir);
    const isDirectionLTR = direction === "ltr";
    const handleKeyDown = (0,primitive_dist/* composeEventHandlers */.M)(props.onKeyDown, (event)=>{
        var _triggerCollection_clampedIndex_ref_current;
        if (!ACCORDION_KEYS.includes(event.key)) return;
        const target = event.target;
        const triggerCollection = getItems().filter((item)=>{
            var _item_ref_current;
            return !((_item_ref_current = item.ref.current) === null || _item_ref_current === void 0 ? void 0 : _item_ref_current.disabled);
        });
        const triggerIndex = triggerCollection.findIndex((item)=>item.ref.current === target);
        const triggerCount = triggerCollection.length;
        if (triggerIndex === -1) return;
        event.preventDefault();
        let nextIndex = triggerIndex;
        const homeIndex = 0;
        const endIndex = triggerCount - 1;
        const moveNext = ()=>{
            nextIndex = triggerIndex + 1;
            if (nextIndex > endIndex) {
                nextIndex = homeIndex;
            }
        };
        const movePrev = ()=>{
            nextIndex = triggerIndex - 1;
            if (nextIndex < homeIndex) {
                nextIndex = endIndex;
            }
        };
        switch(event.key){
            case "Home":
                nextIndex = homeIndex;
                break;
            case "End":
                nextIndex = endIndex;
                break;
            case "ArrowRight":
                if (orientation === "horizontal") {
                    if (isDirectionLTR) {
                        moveNext();
                    } else {
                        movePrev();
                    }
                }
                break;
            case "ArrowDown":
                if (orientation === "vertical") {
                    moveNext();
                }
                break;
            case "ArrowLeft":
                if (orientation === "horizontal") {
                    if (isDirectionLTR) {
                        movePrev();
                    } else {
                        moveNext();
                    }
                }
                break;
            case "ArrowUp":
                if (orientation === "vertical") {
                    movePrev();
                }
                break;
        }
        const clampedIndex = nextIndex % triggerCount;
        (_triggerCollection_clampedIndex_ref_current = triggerCollection[clampedIndex].ref.current) === null || _triggerCollection_clampedIndex_ref_current === void 0 ? void 0 : _triggerCollection_clampedIndex_ref_current.focus();
    });
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(AccordionImplProvider, {
        scope: __scopeAccordion,
        disabled,
        direction: dir,
        orientation,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Collection.Slot, {
            scope: __scopeAccordion,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.div, {
                ...accordionProps,
                "data-orientation": orientation,
                ref: composedRefs,
                onKeyDown: disabled ? void 0 : handleKeyDown
            })
        })
    });
});
var ITEM_NAME = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
var AccordionItem = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, value, ...accordionItemProps } = props;
    const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
    const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    const triggerId = (0,react_id_dist/* useId */.M)();
    const open = value && valueContext.value.includes(value) || false;
    const disabled = accordionContext.disabled || props.disabled;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(AccordionItemProvider, {
        scope: __scopeAccordion,
        open,
        disabled,
        triggerId,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_collapsible_dist/* Root */.fC, {
            "data-orientation": accordionContext.orientation,
            "data-state": getState(open),
            ...collapsibleScope,
            ...accordionItemProps,
            ref: forwardedRef,
            disabled,
            open,
            onOpenChange: (open2)=>{
                if (open2) {
                    valueContext.onItemOpen(value);
                } else {
                    valueContext.onItemClose(value);
                }
            }
        })
    });
});
AccordionItem.displayName = ITEM_NAME;
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, ...headerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.h3, {
        "data-orientation": accordionContext.orientation,
        "data-state": getState(itemContext.open),
        "data-disabled": itemContext.disabled ? "" : void 0,
        ...headerProps,
        ref: forwardedRef
    });
});
AccordionHeader.displayName = HEADER_NAME;
var TRIGGER_NAME = "AccordionTrigger";
var AccordionTrigger = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, ...triggerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Collection.ItemSlot, {
        scope: __scopeAccordion,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_collapsible_dist/* Trigger */.xz, {
            "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
            "data-orientation": accordionContext.orientation,
            id: itemContext.triggerId,
            ...collapsibleScope,
            ...triggerProps,
            ref: forwardedRef
        })
    });
});
AccordionTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "AccordionContent";
var AccordionContent = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, ...contentProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(CONTENT_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_collapsible_dist/* Content */.VY, {
        role: "region",
        "aria-labelledby": itemContext.triggerId,
        "data-orientation": accordionContext.orientation,
        ...collapsibleScope,
        ...contentProps,
        ref: forwardedRef,
        style: {
            ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
            ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
            ...props.style
        }
    });
});
AccordionContent.displayName = CONTENT_NAME;
function getState(open) {
    return open ? "open" : "closed";
}
var Root2 = Accordion;
var Item = AccordionItem;
var Header = AccordionHeader;
var Trigger2 = AccordionTrigger;
var Content2 = AccordionContent;
 //# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/fumadocs-ui/dist/components/accordion.js
/* __next_internal_client_entry_do_not_use__ Accordion,Accordions auto */ 




// src/components/accordion.tsx



var Accordions = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { type = "single", className, defaultValue, ...props } = param;
    const [value, setValue] = (0,react.useState)(type === "single" ? defaultValue !== null && defaultValue !== void 0 ? defaultValue : "" : defaultValue !== null && defaultValue !== void 0 ? defaultValue : []);
    (0,react.useEffect)(()=>{
        const id = window.location.hash.substring(1);
        if (id.length > 0) setValue((prev)=>typeof prev === "string" ? id : [
                id,
                ...prev
            ]);
    }, []);
    return(// @ts-expect-error -- Multiple types
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Root2, {
        type,
        ref,
        value,
        onValueChange: setValue,
        collapsible: type === "single" ? true : void 0,
        className: (0,bundle_mjs/* twMerge */.m6)("divide-y divide-fd-border overflow-hidden rounded-lg border bg-fd-card", className),
        ...props
    }));
});
Accordions.displayName = "Accordions";
var accordion_Accordion = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { title, className, id, children, ...props } = param;
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Item, {
        ref,
        value: id !== null && id !== void 0 ? id : title,
        className: (0,bundle_mjs/* twMerge */.m6)("group/accordion relative scroll-m-20", className),
        ...props,
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsxs)(Header, {
                id,
                className: "not-prose flex flex-row items-center font-medium text-fd-foreground",
                children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsxs)(Trigger2, {
                        className: "flex flex-1 items-center gap-2 p-4 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring",
                        children: [
                            /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_5QPVK7QM/* ChevronRight */._Q, {
                                className: "-ms-1 size-4 shrink-0 text-fd-muted-foreground transition-transform duration-200 group-data-[state=open]/accordion:rotate-90"
                            }),
                            title
                        ]
                    }),
                    id ? /* @__PURE__ */ (0,jsx_runtime.jsx)(CopyButton, {
                        id
                    }) : null
                ]
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Content2, {
                className: "overflow-hidden data-[state=closed]:animate-fd-accordion-up data-[state=open]:animate-fd-accordion-down",
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                    className: "p-4 pt-0 prose-no-margin",
                    children
                })
            })
        ]
    });
});
function CopyButton(param) {
    let { id } = param;
    const [checked, onClick] = (0,chunk_2KMKNVSN/* useCopyButton */.v)(()=>{
        const url = new URL(window.location.href);
        url.hash = id;
        void navigator.clipboard.writeText(url.toString());
    });
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("button", {
        type: "button",
        "aria-label": "Copy Link",
        className: (0,bundle_mjs/* twMerge */.m6)((0,chunk_QKOA6KEZ/* buttonVariants */.d)({
            color: "ghost",
            className: "text-fd-muted-foreground me-2"
        })),
        onClick,
        children: checked ? /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_5QPVK7QM/* Check */.Jr, {
            className: "size-3.5"
        }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_5QPVK7QM/* Link */.rU, {
            className: "size-3.5"
        })
    });
}
accordion_Accordion.displayName = "Accordion";



/***/ }),

/***/ 765:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ Card),
  o: () => (/* reexport */ Cards)
});

// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/bundle-mjs.mjs
var bundle_mjs = __webpack_require__(6164);
// EXTERNAL MODULE: ./node_modules/fumadocs-core/dist/link.js + 1 modules
var dist_link = __webpack_require__(4275);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
;// CONCATENATED MODULE: ./node_modules/fumadocs-ui/dist/chunk-GHOAONNQ.js


// src/components/card.tsx


function Cards(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "div",
    {
      ...props,
      className: (0,bundle_mjs/* twMerge */.m6)("grid grid-cols-1 gap-4 sm:grid-cols-2", props.className),
      children: props.children
    }
  );
}
function Card({
  icon,
  title,
  description,
  ...props
}) {
  const E = props.href ? dist_link/* default */.Z : "div";
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    E,
    {
      ...props,
      "data-card": true,
      className: (0,bundle_mjs/* twMerge */.m6)(
        "block rounded-lg border bg-fd-card p-4 text-fd-card-foreground shadow-md transition-colors",
        props.href && "hover:bg-fd-accent/80",
        props.className
      ),
      children: [
        icon ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "not-prose mb-2 w-fit rounded-md border bg-fd-muted p-1.5 text-fd-muted-foreground [&_svg]:size-4", children: icon }) : null,
        /* @__PURE__ */ (0,jsx_runtime.jsx)("h3", { className: "not-prose mb-1 text-sm font-medium", children: title }),
        description ? /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "my-0 text-sm text-fd-muted-foreground", children: description }) : null,
        props.children ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "text-sm text-fd-muted-foreground prose-no-margin", children: props.children }) : null
      ]
    }
  );
}



// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-MLKGABMK.js
var chunk_MLKGABMK = __webpack_require__(894);
;// CONCATENATED MODULE: ./node_modules/fumadocs-ui/dist/components/card.js






/***/ }),

/***/ 2841:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Files: () => (/* binding */ Files),
/* harmony export */   Folder: () => (/* binding */ Folder2)
/* harmony export */ });
/* unused harmony export File */
/* harmony import */ var _chunk_TQJ6YPJ3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6634);
/* harmony import */ var _chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3592);
/* harmony import */ var _chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6164);
/* harmony import */ var _chunk_MLKGABMK_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(894);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3525);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2265);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7437);
/* __next_internal_client_entry_do_not_use__ File,Files,Folder auto */ 



// src/components/files.tsx



var itemVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_5__/* .cva */ .j)("flex flex-row items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-fd-accent hover:text-fd-accent-foreground [&_svg]:size-4");
function Files(param) {
    let { className, ...props } = param;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_6__/* .twMerge */ .m6)("not-prose rounded-md border bg-fd-card p-2", className),
        ...props,
        children: props.children
    });
}
function File2(param) {
    let { name, icon = /* @__PURE__ */ jsx(File, {}), className, ...rest } = param;
    return /* @__PURE__ */ jsxs("div", {
        className: twMerge(itemVariants({
            className
        })),
        ...rest,
        children: [
            icon,
            name
        ]
    });
}
function Folder2(param) {
    let { name, defaultOpen = false, ...props } = param;
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(defaultOpen);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chunk_TQJ6YPJ3_js__WEBPACK_IMPORTED_MODULE_0__/* .Collapsible */ .zF, {
        open,
        onOpenChange: setOpen,
        ...props,
        children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chunk_TQJ6YPJ3_js__WEBPACK_IMPORTED_MODULE_0__/* .CollapsibleTrigger */ .wy, {
                className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_6__/* .twMerge */ .m6)(itemVariants({
                    className: "w-full"
                })),
                children: [
                    open ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_1__/* .FolderOpen */ .P7, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_1__/* .Folder */ .gt, {}),
                    name
                ]
            }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chunk_TQJ6YPJ3_js__WEBPACK_IMPORTED_MODULE_0__/* .CollapsibleContent */ .Fw, {
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "ms-2 flex flex-col border-l ps-2",
                    children: props.children
                })
            })
        ]
    });
}



/***/ })

}]);