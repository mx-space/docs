(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[998],{

/***/ 8412:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7510));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 222));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1192));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2266));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4794));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2586));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2841));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4093));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 802));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8173, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 231, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 912));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5025));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7928));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4312));


/***/ }),

/***/ 7510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Configurator: () => (/* binding */ Configurator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ Configurator auto */ 


const Configurator = (param)=>{
    let { args, template, env } = param;
    const envVariables = Object.entries(env).map((param)=>{
        let [key, value] = param;
        var _value_default;
        return {
            key,
            name: "".concat(key, " (").concat(value.tip, ")"),
            defaultVal: (_value_default = value.default) === null || _value_default === void 0 ? void 0 : _value_default.toString()
        };
    });
    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(envVariables.map((v)=>v.defaultVal || ''));
    const handleCopy = ()=>{
        // 处理环境变量
        const envString = envVariables.map((variable, index)=>"".concat(variable.key, "=").concat(values[index])).join('\n');
        // 处理参数
        const argsString = args.join(' ');
        // 将模板中的变量替换为实际值
        let result = template;
        envVariables.forEach((variable, index)=>{
            result = result.replace(new RegExp("process.env.".concat(variable.key), 'g'), values[index]);
        });
        copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(result);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border rounded-lg p-4 bg-gray-50 dark:bg-gray-900",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "space-y-4",
                children: envVariables.map((variable, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "text-sm sm:w-1/3",
                                children: variable.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                type: env[variable.key].type === 'password' ? 'password' : 'text',
                                className: "w-full sm:flex-1 border rounded px-3 py-2 text-sm dark:bg-gray-800 dark:border-gray-700",
                                value: values[index],
                                onChange: (e)=>{
                                    const newValues = [
                                        ...values
                                    ];
                                    newValues[index] = e.target.value;
                                    setValues(newValues);
                                },
                                placeholder: variable.defaultVal
                            })
                        ]
                    }, variable.key))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: handleCopy,
                className: "mt-4 w-full bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800",
                children: "复制配置"
            })
        ]
    });
};


/***/ }),

/***/ 222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnvVariableConfig: () => (/* binding */ EnvVariableConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ EnvVariableConfig auto */ 


function EnvVariableConfig(param) {
    let { variableNames, format } = param;
    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(variableNames.map((name)=>name.defaultVal || ''));
    const handleCopy = ()=>{
        if (format === 'yaml') {
            const yamlContent = variableNames.map((name, index)=>"- ".concat(name.key, "=").concat(values[index])).join('\n');
            copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(yamlContent);
            return;
        }
        const envContent = variableNames.map((name, index)=>"".concat(name.key, "=").concat(values[index])).join('\n');
        copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(envContent);
    };
    const handleChange = (index, value)=>{
        const newValues = [
            ...values
        ];
        newValues[index] = value;
        setValues(newValues);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "p-4 mt-2 rounded-lg border dark:bg-gray-900 dark:border-gray-800",
        children: [
            variableNames.map((name, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center space-x-4 mb-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                            type: "text",
                            className: "border rounded-lg px-2 py-2 w-1/2 bg-transparent focus:outline-none focus:border-black hover:border-white-400 transition duration-300 font-[400] font-sans text-sm cursor-not-allowed dark:border-gray-700 dark:text-gray-300 dark:bg-gray-800",
                            value: name.name || name.key,
                            "data-tip": name.key,
                            onMouseOver: (e)=>{
                                e.target.style.color = 'transparent';
                                setTimeout(()=>{
                                    e.target.style.color = 'inherit';
                                    e.target.value = e.target.dataset.tip;
                                }, 300);
                            },
                            onMouseLeave: (e)=>{
                                e.target.style.color = 'transparent';
                                setTimeout(()=>{
                                    e.target.style.color = 'inherit';
                                    e.target.value = name.name || name.key;
                                }, 300);
                            },
                            disabled: true
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                            type: "text",
                            className: "border rounded-lg px-2 py-2 w-1/2 focus:outline-none focus:border-black hover:border-gray-400 transition duration-300 font-[400] font-sans text-sm dark:border-gray-700 dark:text-gray-300 dark:bg-gray-800",
                            style: {
                                outline: "none",
                                boxShadow: "none"
                            },
                            placeholder: "Enter value...",
                            value: values[index],
                            onChange: (e)=>handleChange(index, e.target.value)
                        })
                    ]
                }, "".concat(name.key))),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                        className: "sr-only",
                        children: "环境变量配置"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        type: "button",
                        className: "border bg-black w-full text-white px-4 py-2 rounded-lg text-sm transform transition-all duration-300 focus:outline-none hover:bg-gray-700 dark:border-gray-700 dark:bg-gray-800",
                        onClick: handleCopy,
                        children: "复制"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6648);
/* harmony import */ var fumadocs_ui_components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(765);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3513);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const ThemeCard = (param)=>{
    let { title, preview, href, github } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "absolute top-4 right-4 z-10",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                    href: github,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors",
                    onClick: (e)=>e.stopPropagation(),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        size: 16
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fumadocs_ui_components_card__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Z, {
                title: title,
                href: href,
                className: "overflow-hidden",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "relative aspect-[16/10] w-full overflow-hidden bg-white dark:bg-neutral-800",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        src: preview,
                        alt: "".concat(title, " 预览图"),
                        fill: true,
                        className: "object-scale-down",
                        style: {
                            transform: 'translateY(-30px)'
                        },
                        priority: true,
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 40vw"
                    })
                })
            })
        ]
    });
};
const ThemeShowcase = ()=>{
    const themes = [
        {
            title: 'Shiro (@innei)',
            preview: '/assets/images/preview/shiro.png',
            href: '/docs/themes/shiro/deploy',
            github: 'https://github.com/innei/shiro'
        },
        {
            title: 'Kami (@innei)',
            preview: '/assets/images/preview/kami.png',
            href: '/docs/themes/kami',
            github: 'https://github.com/mx-space/kami'
        },
        {
            title: 'Yun (@innei)',
            preview: '/assets/images/preview/yun.png',
            href: '/docs/themes/yun',
            github: 'https://github.com/mx-space/mx-web-yun'
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fumadocs_ui_components_card__WEBPACK_IMPORTED_MODULE_3__/* .Cards */ .o, {
        children: themes.map((theme)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ThemeCard, {
                ...theme
            }, theme.title))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeShowcase);


/***/ }),

/***/ 2266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToGitHub: () => (/* binding */ ToGitHub)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var _barrel_optimize_names_Github_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9760);
/* harmony import */ var fumadocs_ui_components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(765);
/* __next_internal_client_entry_do_not_use__ ToGitHub auto */ 


function ToGitHub(param) {
    let { repo } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fumadocs_ui_components_card__WEBPACK_IMPORTED_MODULE_1__/* .Cards */ .o, {
        className: "gap-6",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fumadocs_ui_components_card__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Z, {
            className: "m-2 break-words",
            style: {
                maxWidth: '100%'
            },
            href: "https://github.com/".concat(repo),
            title: "".concat(repo, " - GitHub"),
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Github_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            external: true
        })
    });
}


/***/ }),

/***/ 4794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Video)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};
function Video(param) {
    let { src } = param;
    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        observerRef.current = new IntersectionObserver(handleIntersection, observerOptions);
        if (videoRef.current) {
            observerRef.current.observe(videoRef.current);
        }
        return ()=>{
            if (videoRef.current && observerRef.current) {
                observerRef.current.unobserve(videoRef.current);
            }
        };
    }, [
        src
    ]);
    const handleIntersection = (entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting && videoRef.current) {
                if (!videoRef.current.src) {
                    videoRef.current.src = src;
                }
                videoRef.current.play();
            } else if (videoRef.current) {
                videoRef.current.pause();
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("video", {
        ref: videoRef,
        muted: true,
        autoPlay: true,
        playsInline: true,
        loop: true,
        controls: true,
        className: "mt-6 rounded-xl border dark:border-zinc-800"
    });
}


/***/ }),

/***/ 7928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/image.481f10a6.png","height":990,"width":2312,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAALVBMVEWDwdSAyNmE4fOBytthucqx3eh66v2V1eSU2ul10ue73+ZvxNXA4+Vs3fOQ7v7Ktsl9AAAADXRSTlMKO/5xJlz+mK9Vcmmn49hL7gAAAAlwSFlzAAALEwAACxMBAJqcGAAAACNJREFUeJxjYGBk4eThYmVgYORl4mXjY2JkYGDn4GZmZmEAAAchAILZKO2MAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 4312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/status.c2de24b0.png","height":246,"width":488,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEUhISMcHSAuLi8nJyhJSEltamY8PD2noZ9UXJ3YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nAXBgQEAMAiDMGjV/f/xEvYtqtxcAJGZpELTIh8FzQBG1Jzn9QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 4631:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 6396:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ itemVariants),
/* harmony export */   Y: () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var _chunk_V6RONFCQ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4294);
/* harmony import */ var _chunk_CDPVENXR_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4631);
/* harmony import */ var _chunk_TQJ6YPJ3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6634);
/* harmony import */ var _chunk_2FLZOPQN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9744);
/* harmony import */ var _chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3592);
/* harmony import */ var _chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6164);
/* harmony import */ var _chunk_ET4TW6M5_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8050);
/* harmony import */ var _chunk_YL3MZH7N_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5763);
/* harmony import */ var fumadocs_core_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2042);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6463);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2265);
/* harmony import */ var fumadocs_core_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4275);
/* harmony import */ var fumadocs_core_utils_use_on_change__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3547);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3525);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7437);









// src/components/layout/sidebar.tsx






// src/components/layout/variants.ts

var itemVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_11__/* .cva */ .j)([
  "flex flex-row items-center gap-2 rounded-md px-2 py-1.5 text-fd-muted-foreground transition-colors duration-100 [overflow-wrap:anywhere] [&_svg]:size-4",
  "data-[active=false]:hover:bg-fd-accent/50 data-[active=false]:hover:text-fd-accent-foreground/80 data-[active=false]:hover:transition-none",
  "data-[active=true]:bg-fd-primary/10 data-[active=true]:font-medium data-[active=true]:text-fd-primary"
]);

// src/components/layout/sidebar.tsx

var Context = (0,react__WEBPACK_IMPORTED_MODULE_8__.createContext)(void 0);
var Sidebar = (0,react__WEBPACK_IMPORTED_MODULE_8__.memo)(
  ({
    components,
    defaultOpenLevel = 0,
    prefetch = true,
    ...props
  }) => {
    const search = (0,_chunk_ET4TW6M5_js__WEBPACK_IMPORTED_MODULE_4__/* .useSearchContext */ .A)();
    const hasSearch = search.enabled && !props.hideSearch;
    const context = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(
      () => ({
        defaultOpenLevel,
        components: {
          Folder: FolderNode,
          Separator: SeparatorNode,
          Item: PageNode,
          ...components
        },
        prefetch
      }),
      [components, defaultOpenLevel, prefetch]
    );
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(
      fumadocs_core_sidebar__WEBPACK_IMPORTED_MODULE_6__/* .SidebarList */ .wb,
      {
        id: "nd-sidebar",
        blockScrollingWidth: 768,
        ...props.aside,
        className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_13__/* .twMerge */ .m6)(
          "fixed top-fd-layout-top z-30 bg-fd-card text-sm md:sticky md:h-[var(--fd-sidebar-height)] md:flex-1",
          "max-md:inset-x-0 max-md:bottom-0 max-md:bg-fd-background/80 max-md:text-[15px] max-md:backdrop-blur-lg max-md:data-[open=false]:invisible",
          props.aside?.className
        ),
        style: {
          ...props.aside?.style,
          "--fd-sidebar-height": "calc(100dvh - var(--fd-banner-height) - var(--fd-nav-height))"
        },
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", { className: "flex size-full flex-col pt-2 md:ms-auto md:w-[var(--fd-sidebar-width)] md:border-e md:pt-4", children: [
          props.banner,
          hasSearch ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_chunk_V6RONFCQ_js__WEBPACK_IMPORTED_MODULE_0__/* .LargeSearchToggle */ .E, { className: "mx-4 rounded-lg max-md:hidden md:mx-3" }) : null,
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_chunk_2FLZOPQN_js__WEBPACK_IMPORTED_MODULE_2__/* .ScrollArea */ .xr, { className: "h-full", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(
            _chunk_2FLZOPQN_js__WEBPACK_IMPORTED_MODULE_2__/* .ScrollViewport */ .fK,
            {
              style: {
                maskImage: "linear-gradient(to bottom, transparent 2px, white 16px)"
              },
              children: [
                props.children,
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(Context.Provider, { value: context, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(RootNodeList, {}) })
              ]
            }
          ) }),
          props.footer
        ] })
      }
    );
  }
);
Sidebar.displayName = "Sidebar";
var SeparatorNode = (0,react__WEBPACK_IMPORTED_MODULE_8__.memo)(({ item }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", { className: "mb-2 mt-8 px-2 text-sm font-medium first:mt-0", children: item.name });
});
SeparatorNode.displayName = "SeparatorNode";
function RootNodeList() {
  const { root } = (0,_chunk_YL3MZH7N_js__WEBPACK_IMPORTED_MODULE_5__/* .useTreeContext */ .W)();
  const { components } = useInternalContext();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", { className: "px-2 py-4 md:px-3", children: renderList(root.children, 0, components) });
}
function renderList(items, level, { Separator, Item, Folder }) {
  return items.map((item, i) => {
    const id = `${item.type}_${i.toString()}`;
    switch (item.type) {
      case "separator":
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(Separator, { item }, id);
      case "folder":
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(Folder, { item, level: level + 1 }, id);
      default:
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(Item, { item }, item.url);
    }
  });
}
var PageNode = (0,react__WEBPACK_IMPORTED_MODULE_8__.memo)(({ item }) => {
  const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.usePathname)();
  const active = (0,_chunk_CDPVENXR_js__WEBPACK_IMPORTED_MODULE_14__/* .isActive */ .z)(item.url, pathname, false);
  const { prefetch } = useInternalContext();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(
    fumadocs_core_link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
    {
      href: item.url,
      external: item.external,
      "data-active": active,
      className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_13__/* .twMerge */ .m6)(itemVariants()),
      prefetch,
      children: [
        item.icon ?? (item.external ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_3__/* .ExternalLink */ .dL, {}) : null),
        item.name
      ]
    }
  );
});
PageNode.displayName = "PageNode";
var FolderNode = (0,react__WEBPACK_IMPORTED_MODULE_8__.memo)(
  ({ item, level }) => {
    const { defaultOpenLevel, prefetch, components } = useInternalContext();
    const { path } = (0,_chunk_YL3MZH7N_js__WEBPACK_IMPORTED_MODULE_5__/* .useTreeContext */ .W)();
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.usePathname)();
    const active = item.index !== void 0 && (0,_chunk_CDPVENXR_js__WEBPACK_IMPORTED_MODULE_14__/* .isActive */ .z)(item.index.url, pathname, false);
    const className = (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_13__/* .twMerge */ .m6)(itemVariants(), "w-full md:pe-1.5");
    const shouldExtend = active || path.includes(item) || (item.defaultOpen ?? defaultOpenLevel >= level);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(shouldExtend);
    (0,fumadocs_core_utils_use_on_change__WEBPACK_IMPORTED_MODULE_10__/* .useOnChange */ .p)(shouldExtend, (v) => {
      if (v) setOpen(v);
    });
    const content = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, { children: [
      item.icon,
      item.name,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(
        _chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_3__/* .ChevronDown */ ._M,
        {
          "data-icon": true,
          className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_13__/* .twMerge */ .m6)("ms-auto transition-transform", !open && "-rotate-90")
        }
      )
    ] });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_chunk_TQJ6YPJ3_js__WEBPACK_IMPORTED_MODULE_1__/* .Collapsible */ .zF, { open, onOpenChange: setOpen, children: [
      item.index ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(
        fumadocs_core_link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
        {
          "data-active": active,
          className,
          href: item.index.url,
          onClick: (e) => {
            if (
              // clicking on icon
              e.target.hasAttribute("data-icon") || active
            ) {
              setOpen((prev) => !prev);
              e.preventDefault();
            }
          },
          prefetch,
          children: content
        }
      ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_chunk_TQJ6YPJ3_js__WEBPACK_IMPORTED_MODULE_1__/* .CollapsibleTrigger */ .wy, { "data-active": active, className, children: content }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_chunk_TQJ6YPJ3_js__WEBPACK_IMPORTED_MODULE_1__/* .CollapsibleContent */ .Fw, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", { className: "ms-2 border-s py-1.5 ps-1", children: renderList(item.children, level, components) }) })
    ] });
  }
);
FolderNode.displayName = "FolderNode";
function useInternalContext() {
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(Context);
  if (!ctx) throw new Error("<Sidebar /> component required.");
  return ctx;
}




/***/ }),

/***/ 8125:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ 4093:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DynamicSidebar)
/* harmony export */ });
/* harmony import */ var _chunk_JUOW3DZK_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6396);
/* harmony import */ var _chunk_V6RONFCQ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4294);
/* harmony import */ var _chunk_TQJ6YPJ3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6634);
/* harmony import */ var _chunk_QKOA6KEZ_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3950);
/* harmony import */ var _chunk_2FLZOPQN_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9744);
/* harmony import */ var _chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3592);
/* harmony import */ var _chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6164);
/* harmony import */ var _chunk_ET4TW6M5_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8050);
/* harmony import */ var _chunk_YL3MZH7N_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5763);
/* harmony import */ var _chunk_27HFSL7N_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7753);
/* harmony import */ var _chunk_EFMHXXHW_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9145);
/* harmony import */ var _chunk_MLKGABMK_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(894);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2265);
/* harmony import */ var fumadocs_core_utils_use_on_change__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3547);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7437);
/* __next_internal_client_entry_do_not_use__ default auto */ 












// src/components/layout/dynamic-sidebar.tsx



function DynamicSidebar(props) {
    const { collapsed, setCollapsed } = (0,_chunk_27HFSL7N_js__WEBPACK_IMPORTED_MODULE_8__/* .useSidebar */ .A)();
    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false);
    const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(0);
    const closeTimeRef = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(0);
    (0,fumadocs_core_utils_use_on_change__WEBPACK_IMPORTED_MODULE_12__/* .useOnChange */ .p)(collapsed, ()=>{
        setHover(false);
        closeTimeRef.current = Date.now() + 150;
    });
    const onEnter = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)((e)=>{
        if (e.pointerType === "touch" || closeTimeRef.current > Date.now()) return;
        window.clearTimeout(timerRef.current);
        setHover(true);
    }, []);
    const onLeave = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)((e)=>{
        if (e.pointerType === "touch") return;
        window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(()=>{
            setHover(false);
            closeTimeRef.current = Date.now() + 150;
        }, Math.min(e.clientX, document.body.clientWidth - e.clientX) > 100 ? 0 : 500);
    }, []);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: [
            collapsed ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
                children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
                        className: "fixed inset-y-0 start-0 w-6 max-md:hidden",
                        onPointerEnter: onEnter,
                        onPointerLeave: onLeave
                    }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button", {
                        type: "button",
                        "aria-label": "Collapse Sidebar",
                        className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_14__/* .twMerge */ .m6)((0,_chunk_QKOA6KEZ_js__WEBPACK_IMPORTED_MODULE_3__/* .buttonVariants */ .d)({
                            color: "secondary",
                            size: "icon",
                            className: "fixed start-4 bottom-2 z-10 max-md:hidden"
                        })),
                        onClick: ()=>{
                            setCollapsed((v)=>!v);
                        },
                        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_5__/* .PanelLeft */ .aq, {})
                    }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("style", {
                        children: "#nd-page { --fd-sidebar-width: 0px; }"
                    })
                ]
            }) : null,
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_chunk_JUOW3DZK_js__WEBPACK_IMPORTED_MODULE_0__/* .Sidebar */ .Y, {
                ...props,
                aside: (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(()=>({
                        "data-collapse": collapsed,
                        "data-hover": hover,
                        onPointerEnter: collapsed ? onEnter : void 0,
                        onPointerLeave: collapsed ? onLeave : void 0,
                        "aria-hidden": Boolean(collapsed && !hover),
                        style: {
                            // the offset given to docs content when the sidebar is collapsed
                            "--fd-content-offset": "calc(var(--fd-sidebar-width) * -1)"
                        },
                        className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_14__/* .twMerge */ .m6)("md:transition-[transform,margin,flex]", collapsed && [
                            "md:me-[var(--fd-content-offset)] md:grow-0 md:shadow-md",
                            hover ? "md:translate-x-0" : "md:translate-x-[calc(var(--fd-sidebar-width)*-1)] rtl:md:translate-x-[var(--fd-sidebar-width)]"
                        ], "")
                    }), [
                    collapsed,
                    hover,
                    onEnter,
                    onLeave
                ])
            }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
                role: "none",
                className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_14__/* .twMerge */ .m6)("transition-all max-md:hidden", collapsed && "flex-1")
            })
        ]
    });
}



/***/ }),

/***/ 802:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  IconItem: () => (/* reexport */ chunk_PZTQPB4U/* IconItem */._R),
  LanguageToggle: () => (/* reexport */ chunk_KZTWSBYY/* LanguageToggle */.j),
  LanguageToggleText: () => (/* reexport */ chunk_KZTWSBYY/* LanguageToggleText */.L),
  LinksMenu: () => (/* binding */ LinksMenu),
  MenuItem: () => (/* binding */ MenuItem),
  NavProvider: () => (/* reexport */ chunk_MCX7E6ZW/* NavProvider */.N7),
  RootToggle: () => (/* reexport */ RootToggle),
  Sidebar: () => (/* reexport */ chunk_JUOW3DZK/* Sidebar */.Y),
  SidebarCollapseTrigger: () => (/* binding */ SidebarCollapseTrigger),
  SubNav: () => (/* binding */ SubNav),
  ThemeToggle: () => (/* reexport */ chunk_PZTQPB4U/* ThemeToggle */.Tl),
  TreeContextProvider: () => (/* reexport */ chunk_YL3MZH7N/* TreeContextProvider */.G)
});

// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-CDPVENXR.js
var chunk_CDPVENXR = __webpack_require__(4631);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-IVBHRX3O.js + 10 modules
var chunk_IVBHRX3O = __webpack_require__(7076);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-5QPVK7QM.js
var chunk_5QPVK7QM = __webpack_require__(3592);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/bundle-mjs.mjs
var bundle_mjs = __webpack_require__(6164);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-27HFSL7N.js
var chunk_27HFSL7N = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/dist/api/link.js
var api_link = __webpack_require__(7138);
// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(6463);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
;// CONCATENATED MODULE: ./node_modules/fumadocs-ui/dist/chunk-WRBUXI2A.js






// src/components/layout/root-toggle.tsx




function RootToggle({
  options,
  ...props
}) {
  const [open, setOpen] = (0,react.useState)(false);
  const { closeOnRedirect } = (0,chunk_27HFSL7N/* useSidebar */.A)();
  const pathname = (0,navigation.usePathname)();
  const selected = (0,react.useMemo)(() => {
    return options.find((item) => (0,chunk_CDPVENXR/* isActive */.z)(item.url, pathname, true));
  }, [options, pathname]);
  const onClick = () => {
    closeOnRedirect.current = false;
    setOpen(false);
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(chunk_IVBHRX3O/* Popover */.J2, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(
      chunk_IVBHRX3O/* PopoverTrigger */.xo,
      {
        ...props,
        className: (0,bundle_mjs/* twMerge */.m6)(
          "flex flex-row items-center gap-2.5 rounded-lg p-1 hover:bg-fd-accent/50 hover:text-fd-accent-foreground",
          props.className
        ),
        children: [
          selected ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Item, { ...selected }) : null,
          /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_5QPVK7QM/* ChevronDown */._M, { className: "size-4 text-fd-muted-foreground md:me-1.5" })
        ]
      }
    ),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_IVBHRX3O/* PopoverContent */.yk, { className: "w-[var(--radix-popover-trigger-width)] overflow-hidden p-0", children: options.map((item) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
      api_link["default"],
      {
        href: item.url,
        onClick,
        ...item.props,
        className: (0,bundle_mjs/* twMerge */.m6)(
          "flex w-full flex-row items-center gap-2.5 p-1.5",
          selected === item ? "bg-fd-accent text-fd-accent-foreground" : "hover:bg-fd-accent/50",
          item.props?.className
        ),
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Item, { ...item })
      },
      item.url
    )) })
  ] });
}
function Item(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
    props.icon,
    /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "flex-1 text-left", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "text-sm font-medium", children: props.title }),
      props.description ? /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "text-xs text-fd-muted-foreground", children: props.description }) : null
    ] })
  ] });
}



// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-JUOW3DZK.js
var chunk_JUOW3DZK = __webpack_require__(6396);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-PZTQPB4U.js
var chunk_PZTQPB4U = __webpack_require__(8704);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-V6RONFCQ.js
var chunk_V6RONFCQ = __webpack_require__(4294);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-KZTWSBYY.js
var chunk_KZTWSBYY = __webpack_require__(8125);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-TQJ6YPJ3.js
var chunk_TQJ6YPJ3 = __webpack_require__(6634);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-QKOA6KEZ.js
var chunk_QKOA6KEZ = __webpack_require__(3950);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-MCX7E6ZW.js
var chunk_MCX7E6ZW = __webpack_require__(9471);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-2FLZOPQN.js + 2 modules
var chunk_2FLZOPQN = __webpack_require__(9744);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-ET4TW6M5.js
var chunk_ET4TW6M5 = __webpack_require__(8050);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-YL3MZH7N.js
var chunk_YL3MZH7N = __webpack_require__(5763);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-EFMHXXHW.js
var chunk_EFMHXXHW = __webpack_require__(9145);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-MLKGABMK.js
var chunk_MLKGABMK = __webpack_require__(894);
// EXTERNAL MODULE: ./node_modules/fumadocs-core/dist/sidebar.js
var sidebar = __webpack_require__(2042);
// EXTERNAL MODULE: ./node_modules/fumadocs-core/dist/utils/use-on-change.js
var use_on_change = __webpack_require__(3547);
;// CONCATENATED MODULE: ./node_modules/fumadocs-ui/dist/layouts/docs.client.js
/* __next_internal_client_entry_do_not_use__ IconItem,LanguageToggle,LanguageToggleText,LinksMenu,MenuItem,NavProvider,RootToggle,Sidebar,SidebarCollapseTrigger,SubNav,ThemeToggle,TreeContextProvider auto */ 

















// src/layouts/docs.client.tsx




// src/layouts/menu-item.tsx

function MenuItem(param) {
    let { item, ...props } = param;
    if (item.type === "custom") return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
        ...props,
        className: (0,bundle_mjs/* twMerge */.m6)("grid", props.className),
        children: item.children
    });
    if (item.type === "menu") {
        return /* @__PURE__ */ (0,jsx_runtime.jsxs)(chunk_TQJ6YPJ3/* Collapsible */.zF, {
            className: "flex flex-col",
            children: [
                /* @__PURE__ */ (0,jsx_runtime.jsxs)(chunk_TQJ6YPJ3/* CollapsibleTrigger */.wy, {
                    ...props,
                    "data-active": false,
                    className: (0,bundle_mjs/* twMerge */.m6)((0,chunk_JUOW3DZK/* itemVariants */.D)(), "group/link", props.className),
                    children: [
                        item.icon,
                        item.text,
                        /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_5QPVK7QM/* ChevronDown */._M, {
                            className: "ms-auto transition-transform group-data-[state=closed]/link:-rotate-90"
                        })
                    ]
                }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_TQJ6YPJ3/* CollapsibleContent */.Fw, {
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                        className: "ms-2 flex flex-col border-s py-2 ps-2",
                        children: item.items.map((child, i)=>/* @__PURE__ */ (0,jsx_runtime.jsx)(MenuItem, {
                                item: child
                            }, i))
                    })
                })
            ]
        });
    }
    if (item.type === "button") {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_PZTQPB4U/* ButtonItem */.yO, {
            item,
            ...props
        });
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(chunk_PZTQPB4U/* BaseLinkItem */.uc, {
        item,
        ...props,
        className: (0,bundle_mjs/* twMerge */.m6)((0,chunk_JUOW3DZK/* itemVariants */.D)(), props.className),
        children: [
            item.icon,
            item.text
        ]
    });
}
// src/layouts/docs.client.tsx

function SubNav(param) {
    let { title, url, enableSearch = true, ...props } = param;
    const { open } = (0,chunk_27HFSL7N/* useSidebar */.A)();
    const { isTransparent } = (0,react.useContext)(chunk_MCX7E6ZW/* NavContext */.Ly);
    const search = (0,chunk_ET4TW6M5/* useSearchContext */.A)();
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)("header", {
        id: "nd-subnav",
        ...props,
        className: (0,bundle_mjs/* twMerge */.m6)("sticky top-[var(--fd-banner-height)] z-40 flex flex-row items-center border-b border-fd-foreground/10 px-4 transition-colors", (!isTransparent || open) && "bg-fd-background/80 backdrop-blur-lg", props.className),
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_MCX7E6ZW/* Title */.Dx, {
                url,
                title
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                className: "flex flex-1 flex-row items-center gap-1",
                children: props.children
            }),
            search.enabled && enableSearch ? /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_V6RONFCQ/* SearchToggle */._, {}) : null,
            /* @__PURE__ */ (0,jsx_runtime.jsx)(sidebar/* SidebarTrigger */.vP, {
                className: (0,bundle_mjs/* twMerge */.m6)((0,chunk_QKOA6KEZ/* buttonVariants */.d)({
                    color: "ghost",
                    size: "icon",
                    className: "-me-2 md:hidden"
                })),
                children: open ? /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_5QPVK7QM.X, {}) : /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_5QPVK7QM/* Menu */.v2, {})
            })
        ]
    });
}
function SidebarCollapseTrigger(props) {
    const { setCollapsed } = (0,chunk_27HFSL7N/* useSidebar */.A)();
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("button", {
        type: "button",
        "aria-label": "Collapse Sidebar",
        ...props,
        className: (0,bundle_mjs/* twMerge */.m6)((0,chunk_QKOA6KEZ/* buttonVariants */.d)({
            color: "ghost",
            size: "icon"
        }), props.className),
        onClick: ()=>{
            setCollapsed((prev)=>!prev);
        },
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_5QPVK7QM/* PanelLeft */.aq, {})
    });
}
function LinksMenu(param) {
    let { items, ...props } = param;
    const [open, setOpen] = (0,react.useState)(false);
    const pathname = (0,navigation.usePathname)();
    (0,use_on_change/* useOnChange */.p)(pathname, ()=>{
        setOpen(false);
    });
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(chunk_IVBHRX3O/* Popover */.J2, {
        open,
        onOpenChange: setOpen,
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_IVBHRX3O/* PopoverTrigger */.xo, {
                ...props
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_IVBHRX3O/* PopoverContent */.yk, {
                className: "flex flex-col p-1",
                children: items
            })
        ]
    });
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
/******/ __webpack_require__.O(0, [30,49,811,569,343,40,867,130,215,744], () => (__webpack_exec__(8412)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);