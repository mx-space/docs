(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[342],{

/***/ 4026:
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

/***/ 7138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport default from dynamic */ _client_link__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var _client_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(231);
/* harmony import */ var _client_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_link__WEBPACK_IMPORTED_MODULE_0__);



//# sourceMappingURL=link.js.map

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

/***/ 6402:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ createCollection)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-context/dist/index.mjs
// packages/react/context/src/createContext.tsx


function createContext2(rootComponentName, defaultContext) {
  const Context = React.createContext(defaultContext);
  function Provider(props) {
    const { children, ...context } = props;
    const value = React.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ jsx(Context.Provider, { value, children });
  }
  function useContext2(consumerName) {
    const context = React.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  Provider.displayName = rootComponentName + "Provider";
  return [Provider, useContext2];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = react.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName][index] || BaseContext;
      const value = react.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(Context.Provider, { value, children });
    }
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName][index] || BaseContext;
      const context = react.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return react.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return react.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return react.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var dist = __webpack_require__(1584);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs
var react_slot_dist = __webpack_require__(1538);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-collection/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ createCollection auto */ // packages/react/collection/src/Collection.tsx





function createCollection(name) {
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope] = createContextScope(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
            current: null
        },
        itemMap: /* @__PURE__ */ new Map()
    });
    const CollectionProvider = (props)=>{
        const { scope, children } = props;
        const ref = react.useRef(null);
        const itemMap = react.useRef(/* @__PURE__ */ new Map()).current;
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(CollectionProviderImpl, {
            scope,
            itemMap,
            collectionRef: ref,
            children
        });
    };
    CollectionProvider.displayName = PROVIDER_NAME;
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlot = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = (0,dist/* useComposedRefs */.e)(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_slot_dist/* Slot */.g7, {
            ref: composedRefs,
            children
        });
    });
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlot = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
        const { scope, children, ...itemData } = props;
        const ref = react.useRef(null);
        const composedRefs = (0,dist/* useComposedRefs */.e)(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        react.useEffect(()=>{
            context.itemMap.set(ref, {
                ref,
                ...itemData
            });
            return ()=>void context.itemMap.delete(ref);
        });
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_slot_dist/* Slot */.g7, {
            ...{
                [ITEM_DATA_ATTR]: ""
            },
            ref: composedRefs,
            children
        });
    });
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useCollection(scope) {
        const context = useCollectionContext(name + "CollectionConsumer", scope);
        const getItems = react.useCallback(()=>{
            const collectionNode = context.collectionRef.current;
            if (!collectionNode) return [];
            const orderedNodes = Array.from(collectionNode.querySelectorAll("[".concat(ITEM_DATA_ATTR, "]")));
            const items = Array.from(context.itemMap.values());
            const orderedItems = items.sort((a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current));
            return orderedItems;
        }, [
            context.collectionRef,
            context.itemMap
        ]);
        return getItems;
    }
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
    ];
}
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 7513:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _9: () => (/* binding */ DirectionProvider),
/* harmony export */   gm: () => (/* binding */ useDirection)
/* harmony export */ });
/* unused harmony export Provider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7437);
// packages/react/direction/src/Direction.tsx


var DirectionContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);
var DirectionProvider = (props) => {
  const { dir, children } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DirectionContext.Provider, { value: dir, children });
};
function useDirection(localDir) {
  const globalDir = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}
var Provider = (/* unused pure expression or super */ null && (DirectionProvider));

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 7067:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export __export */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};




/***/ }),

/***/ 4275:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ Link)
});

// EXTERNAL MODULE: ./node_modules/next/dist/api/link.js
var api_link = __webpack_require__(7138);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
;// CONCATENATED MODULE: ./node_modules/fumadocs-core/dist/chunk-DVOZJZGH.js
// src/link.tsx



var Link = (0,react.forwardRef)(
  ({
    href = "#",
    external = !(href.startsWith("/") || href.startsWith("#") || href.startsWith(".")),
    prefetch,
    replace,
    ...props
  }, ref) => {
    if (external) {
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "a",
        {
          ref,
          href,
          rel: "noreferrer noopener",
          target: "_blank",
          ...props,
          children: props.children
        }
      );
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      api_link["default"],
      {
        ref,
        href,
        prefetch,
        replace,
        ...props
      }
    );
  }
);
Link.displayName = "Link";



// EXTERNAL MODULE: ./node_modules/fumadocs-core/dist/chunk-MLKGABMK.js
var chunk_MLKGABMK = __webpack_require__(7067);
;// CONCATENATED MODULE: ./node_modules/fumadocs-core/dist/link.js





/***/ }),

/***/ 894:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export __export */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [30,49,40,130,215,744], () => (__webpack_exec__(4026)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);