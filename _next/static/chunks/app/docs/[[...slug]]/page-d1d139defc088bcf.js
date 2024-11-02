(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[189],{

/***/ 5303:
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
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 33));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2586));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2841));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3518));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6872));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7576));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2539));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8173, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 231, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 912));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5025));
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

/***/ 4312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/status.c2de24b0.png","height":246,"width":488,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEUhISMcHSAuLi8nJyhJSEltamY8PD2noZ9UXJ3YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nAXBgQEAMAiDMGjV/f/xEvYtqtxcAJGZpELTIh8FzQBG1Jzn9QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 33:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AnchorProvider: () => (/* binding */ AnchorProvider),
  ID: () => (/* binding */ ScrollProvider),
  FU: () => (/* binding */ TOCItem),
  tD: () => (/* binding */ useActiveAnchor),
  _z: () => (/* binding */ useActiveAnchors)
});

// EXTERNAL MODULE: ./node_modules/fumadocs-core/dist/chunk-EMWGTXSW.js
var chunk_EMWGTXSW = __webpack_require__(7655);
// EXTERNAL MODULE: ./node_modules/fumadocs-core/dist/chunk-MLKGABMK.js
var chunk_MLKGABMK = __webpack_require__(7067);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
;// CONCATENATED MODULE: ./node_modules/compute-scroll-into-view/dist/index.js
const t=t=>"object"==typeof t&&null!=t&&1===t.nodeType,e=(t,e)=>(!e||"hidden"!==t)&&("visible"!==t&&"clip"!==t),n=(t,n)=>{if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){const o=getComputedStyle(t,null);return e(o.overflowY,n)||e(o.overflowX,n)||(t=>{const e=(t=>{if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}})(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)})(t)}return!1},o=(t,e,n,o,l,r,i,s)=>r<t&&i>e||r>t&&i<e?0:r<=t&&s<=n||i>=e&&s>=n?r-t-o:i>e&&s<n||r<t&&s>n?i-e+l:0,l=t=>{const e=t.parentElement;return null==e?t.getRootNode().host||null:e},dist_r=(e,r)=>{var i,s,d,h;if("undefined"==typeof document)return[];const{scrollMode:c,block:f,inline:u,boundary:a,skipOverflowHiddenElements:g}=r,p="function"==typeof a?a:t=>t!==a;if(!t(e))throw new TypeError("Invalid target");const m=document.scrollingElement||document.documentElement,w=[];let W=e;for(;t(W)&&p(W);){if(W=l(W),W===m){w.push(W);break}null!=W&&W===document.body&&n(W)&&!n(document.documentElement)||null!=W&&n(W,g)&&w.push(W)}const b=null!=(s=null==(i=window.visualViewport)?void 0:i.width)?s:innerWidth,H=null!=(h=null==(d=window.visualViewport)?void 0:d.height)?h:innerHeight,{scrollX:y,scrollY:M}=window,{height:v,width:E,top:x,right:C,bottom:I,left:R}=e.getBoundingClientRect(),{top:T,right:B,bottom:F,left:V}=(t=>{const e=window.getComputedStyle(t);return{top:parseFloat(e.scrollMarginTop)||0,right:parseFloat(e.scrollMarginRight)||0,bottom:parseFloat(e.scrollMarginBottom)||0,left:parseFloat(e.scrollMarginLeft)||0}})(e);let k="start"===f||"nearest"===f?x-T:"end"===f?I+F:x+v/2-T+F,D="center"===u?R+E/2-V+B:"end"===u?C+B:R-V;const L=[];for(let t=0;t<w.length;t++){const e=w[t],{height:n,width:l,top:r,right:i,bottom:s,left:d}=e.getBoundingClientRect();if("if-needed"===c&&x>=0&&R>=0&&I<=H&&C<=b&&x>=r&&I<=s&&R>=d&&C<=i)return L;const h=getComputedStyle(e),a=parseInt(h.borderLeftWidth,10),g=parseInt(h.borderTopWidth,10),p=parseInt(h.borderRightWidth,10),W=parseInt(h.borderBottomWidth,10);let T=0,B=0;const F="offsetWidth"in e?e.offsetWidth-e.clientWidth-a-p:0,V="offsetHeight"in e?e.offsetHeight-e.clientHeight-g-W:0,S="offsetWidth"in e?0===e.offsetWidth?0:l/e.offsetWidth:0,X="offsetHeight"in e?0===e.offsetHeight?0:n/e.offsetHeight:0;if(m===e)T="start"===f?k:"end"===f?k-H:"nearest"===f?o(M,M+H,H,g,W,M+k,M+k+v,v):k-H/2,B="start"===u?D:"center"===u?D-b/2:"end"===u?D-b:o(y,y+b,b,a,p,y+D,y+D+E,E),T=Math.max(0,T+M),B=Math.max(0,B+y);else{T="start"===f?k-r-g:"end"===f?k-s+W+V:"nearest"===f?o(r,s,n,g,W+V,k,k+v,v):k-(r+n/2)+V/2,B="start"===u?D-d-a:"center"===u?D-(d+l/2)+F/2:"end"===u?D-i+p+F:o(d,i,l,a,p+F,D,D+E,E);const{scrollLeft:t,scrollTop:h}=e;T=0===X?0:Math.max(0,Math.min(h+T/X,e.scrollHeight-n/X+V)),B=0===S?0:Math.max(0,Math.min(t+B/S,e.scrollWidth-l/S+F)),k+=h-T,D+=t-B}L.push({el:e,top:T,left:B})}return L};//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/scroll-into-view-if-needed/dist/index.js
const dist_o=t=>!1===t?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&0!==Object.keys(t).length)(t)?t:{block:"start",inline:"nearest"};function dist_e(e,r){if(!e.isConnected||!(t=>{let o=t;for(;o&&o.parentNode;){if(o.parentNode===document)return!0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}return!1})(e))return;const n=(t=>{const o=window.getComputedStyle(t);return{top:parseFloat(o.scrollMarginTop)||0,right:parseFloat(o.scrollMarginRight)||0,bottom:parseFloat(o.scrollMarginBottom)||0,left:parseFloat(o.scrollMarginLeft)||0}})(e);if((t=>"object"==typeof t&&"function"==typeof t.behavior)(r))return r.behavior(dist_r(e,r));const l="boolean"==typeof r||null==r?void 0:r.behavior;for(const{el:a,top:i,left:s}of dist_r(e,dist_o(r))){const t=i-n.top+n.bottom,o=s-n.left+n.right;a.scroll({top:t,left:o,behavior:l})}}//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
;// CONCATENATED MODULE: ./node_modules/fumadocs-core/dist/toc.js
/* __next_internal_client_entry_do_not_use__ AnchorProvider,ScrollProvider,TOCItem,useActiveAnchor,useActiveAnchors auto */ 

// src/toc.tsx


// src/utils/merge-refs.ts
function mergeRefs() {
    for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++){
        refs[_key] = arguments[_key];
    }
    return (value)=>{
        refs.forEach((ref)=>{
            if (typeof ref === "function") {
                ref(value);
            } else if (ref !== null) {
                ref.current = value;
            }
        });
    };
}
// src/utils/use-anchor-observer.ts

function useAnchorObserver(watch, single) {
    const [activeAnchor, setActiveAnchor] = (0,react.useState)([]);
    (0,react.useEffect)(()=>{
        let visible = [];
        const observer = new IntersectionObserver((entries)=>{
            for (const entry of entries){
                if (entry.isIntersecting && !visible.includes(entry.target.id)) {
                    visible = [
                        ...visible,
                        entry.target.id
                    ];
                } else if (!entry.isIntersecting && visible.includes(entry.target.id)) {
                    visible = visible.filter((v)=>v !== entry.target.id);
                }
            }
            if (visible.length > 0) setActiveAnchor(visible);
        }, {
            rootMargin: single ? "-80px 0% -70% 0%" : "-20px 0% -40% 0%",
            threshold: 1
        });
        function onScroll() {
            const element = document.scrollingElement;
            if (!element) return;
            if (element.scrollTop === 0 && single) setActiveAnchor(watch.slice(0, 1));
            else if (element.scrollTop + element.clientHeight >= element.scrollHeight - 6) {
                setActiveAnchor((active)=>{
                    return active.length > 0 && !single ? watch.slice(watch.indexOf(active[0])) : watch.slice(-1);
                });
            }
        }
        for (const heading of watch){
            const element = document.getElementById(heading);
            if (element) observer.observe(element);
        }
        onScroll();
        window.addEventListener("scroll", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
            observer.disconnect();
        };
    }, [
        single,
        watch
    ]);
    return single ? activeAnchor.slice(0, 1) : activeAnchor;
}
// src/toc.tsx

var ActiveAnchorContext = /*#__PURE__*/ (0,react.createContext)([]);
var ScrollContext = /*#__PURE__*/ (0,react.createContext)({
    current: null
});
function useActiveAnchor() {
    return (0,react.useContext)(ActiveAnchorContext).at(-1);
}
function useActiveAnchors() {
    return (0,react.useContext)(ActiveAnchorContext);
}
function ScrollProvider(param) {
    let { containerRef, children } = param;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollContext.Provider, {
        value: containerRef,
        children
    });
}
function AnchorProvider(param) {
    let { toc, single = true, children } = param;
    const headings = (0,react.useMemo)(()=>{
        return toc.map((item)=>item.url.split("#")[1]);
    }, [
        toc
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(ActiveAnchorContext.Provider, {
        value: useAnchorObserver(headings, single),
        children
    });
}
var TOCItem = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { onActiveChange, ...props } = param;
    const containerRef = (0,react.useContext)(ScrollContext);
    const anchors = useActiveAnchors();
    const anchorRef = (0,react.useRef)(null);
    const mergedRef = mergeRefs(anchorRef, ref);
    const isActive = anchors.includes(props.href.slice(1));
    (0,chunk_EMWGTXSW/* useOnChange */.p)(isActive, (v)=>{
        const element = anchorRef.current;
        if (!element) return;
        if (v && containerRef.current) {
            dist_e(element, {
                behavior: "smooth",
                block: "center",
                inline: "center",
                scrollMode: "always",
                boundary: containerRef.current
            });
        }
        onActiveChange === null || onActiveChange === void 0 ? void 0 : onActiveChange(v);
    });
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("a", {
        ref: mergedRef,
        "data-active": isActive,
        ...props,
        children: props.children
    });
});
TOCItem.displayName = "TOCItem";



/***/ }),

/***/ 3770:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ TocThumb)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var fumadocs_core_toc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var fumadocs_core_utils_use_on_change__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3547);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7437);
// src/components/layout/toc-thumb.tsx




function calc(container, active) {
  if (active.length === 0 || container.clientHeight === 0) {
    return [0, 0];
  }
  let upper = Number.MAX_VALUE, lower = 0;
  for (const item of active) {
    const element = container.querySelector(`a[href="#${item}"]`);
    if (!element) continue;
    const styles = getComputedStyle(element);
    upper = Math.min(upper, element.offsetTop + parseFloat(styles.paddingTop));
    lower = Math.max(
      lower,
      element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom)
    );
  }
  return [upper, lower - upper];
}
function update(element, info) {
  element.style.setProperty("--fd-top", `${info[0]}px`);
  element.style.setProperty("--fd-height", `${info[1]}px`);
}
function TocThumb({
  containerRef,
  ...props
}) {
  const active = fumadocs_core_toc__WEBPACK_IMPORTED_MODULE_1__/* .useActiveAnchors */ ._z();
  const thumbRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const activeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(active);
  activeRef.current = active;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const onResize = () => {
      if (!thumbRef.current) return;
      update(thumbRef.current, calc(container, activeRef.current));
    };
    onResize();
    const observer = new ResizeObserver(onResize);
    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, [containerRef]);
  (0,fumadocs_core_utils_use_on_change__WEBPACK_IMPORTED_MODULE_2__/* .useOnChange */ .p)(active, () => {
    if (!containerRef.current || !thumbRef.current) return;
    update(thumbRef.current, calc(containerRef.current, active));
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", { ref: thumbRef, role: "none", ...props });
}




/***/ }),

/***/ 3518:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ edit_on_github_default)
/* harmony export */ });
/* harmony import */ var _chunk_QKOA6KEZ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3950);
/* harmony import */ var _chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3592);
/* harmony import */ var _chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6164);
/* harmony import */ var _chunk_EFMHXXHW_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9145);
/* harmony import */ var _chunk_MLKGABMK_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(894);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2265);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7437);
/* __next_internal_client_entry_do_not_use__ default auto */ 




// src/components/layout/edit-on-github.tsx


var EditOnGitHub = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)((param, ref)=>{
    let { owner, repo, sha = "main", path, ...props } = param;
    const { text } = (0,_chunk_EFMHXXHW_js__WEBPACK_IMPORTED_MODULE_2__/* .useI18n */ .Q)();
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
        ref,
        href: "https://github.com/".concat(owner, "/").concat(repo, "/blob/").concat(sha, "/").concat(path.startsWith("/") ? path.slice(1) : path),
        target: "_blank",
        rel: "noreferrer noopener",
        ...props,
        className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_6__/* .twMerge */ .m6)((0,_chunk_QKOA6KEZ_js__WEBPACK_IMPORTED_MODULE_0__/* .buttonVariants */ .d)({
            color: "secondary",
            className: "gap-1.5 py-1 text-fd-muted-foreground"
        }), props.className),
        children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_1__/* .SquarePen */ .m7, {
                className: "size-3.5"
            }),
            text.editOnGithub
        ]
    });
});
EditOnGitHub.displayName = "EditOnGitHub";
var edit_on_github_default = EditOnGitHub;



/***/ }),

/***/ 6872:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Pre: () => (/* binding */ Pre2)
});

// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-2KMKNVSN.js
var chunk_2KMKNVSN = __webpack_require__(8692);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-QKOA6KEZ.js
var chunk_QKOA6KEZ = __webpack_require__(3950);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-2FLZOPQN.js + 2 modules
var chunk_2FLZOPQN = __webpack_require__(9744);
// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-5QPVK7QM.js
var chunk_5QPVK7QM = __webpack_require__(3592);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/bundle-mjs.mjs
var bundle_mjs = __webpack_require__(6164);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
;// CONCATENATED MODULE: ./node_modules/fumadocs-ui/dist/chunk-5KVEK5A7.js






// src/components/codeblock.tsx


var Pre = (0,react.forwardRef)(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("pre", { ref, className: (0,bundle_mjs/* twMerge */.m6)("max-h-[400px] p-4", className), ...props, children: props.children });
  }
);
Pre.displayName = "Pre";
var CodeBlock = (0,react.forwardRef)(
  ({
    title,
    allowCopy = true,
    keepBackground = false,
    icon,
    className,
    ...props
  }, ref) => {
    const areaRef = (0,react.useRef)(null);
    const onCopy = (0,react.useCallback)(() => {
      const pre = areaRef.current?.getElementsByTagName("pre").item(0);
      if (!pre) return;
      const clone = pre.cloneNode(true);
      clone.querySelectorAll(".nd-copy-ignore").forEach((node) => {
        node.remove();
      });
      void navigator.clipboard.writeText(clone.textContent ?? "");
    }, []);
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
      "figure",
      {
        ref,
        className: (0,bundle_mjs/* twMerge */.m6)(
          "not-prose group fd-codeblock relative my-6 overflow-hidden rounded-lg border bg-fd-secondary/50 text-sm",
          keepBackground && "bg-[var(--shiki-light-bg)] dark:bg-[var(--shiki-dark-bg)]",
          className
        ),
        ...props,
        children: [
          title ? /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "flex flex-row items-center gap-2 border-b bg-fd-muted px-4 py-1.5", children: [
            icon ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
              "div",
              {
                className: "text-fd-muted-foreground [&_svg]:size-3.5",
                ...typeof icon === "string" ? {
                  dangerouslySetInnerHTML: { __html: icon }
                } : {
                  children: icon
                }
              }
            ) : null,
            /* @__PURE__ */ (0,jsx_runtime.jsx)("figcaption", { className: "flex-1 truncate text-fd-muted-foreground", children: title }),
            allowCopy ? /* @__PURE__ */ (0,jsx_runtime.jsx)(CopyButton, { className: "-me-2", onCopy }) : null
          ] }) : allowCopy && /* @__PURE__ */ (0,jsx_runtime.jsx)(
            CopyButton,
            {
              className: "absolute right-2 top-2 z-[2] backdrop-blur-md",
              onCopy
            }
          ),
          /* @__PURE__ */ (0,jsx_runtime.jsxs)(chunk_2FLZOPQN/* ScrollArea */.xr, { ref: areaRef, dir: "ltr", children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_2FLZOPQN/* ScrollViewport */.fK, { children: props.children }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_2FLZOPQN/* ScrollBar */.Bl, { orientation: "horizontal" })
          ] })
        ]
      }
    );
  }
);
CodeBlock.displayName = "CodeBlock";
function CopyButton({
  className,
  onCopy,
  ...props
}) {
  const [checked, onClick] = (0,chunk_2KMKNVSN/* useCopyButton */.v)(onCopy);
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    "button",
    {
      type: "button",
      className: (0,bundle_mjs/* twMerge */.m6)(
        (0,chunk_QKOA6KEZ/* buttonVariants */.d)({
          color: "ghost",
          className: "transition-all group-hover:opacity-100"
        }),
        !checked && "opacity-0",
        className
      ),
      "aria-label": "Copy Text",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          chunk_5QPVK7QM/* Check */.Jr,
          {
            className: (0,bundle_mjs/* twMerge */.m6)("size-3.5 transition-transform", !checked && "scale-0")
          }
        ),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          chunk_5QPVK7QM/* Copy */.CK,
          {
            className: (0,bundle_mjs/* twMerge */.m6)(
              "absolute size-3.5 transition-transform",
              checked && "scale-0"
            )
          }
        )
      ]
    }
  );
}



// EXTERNAL MODULE: ./node_modules/fumadocs-ui/dist/chunk-MLKGABMK.js
var chunk_MLKGABMK = __webpack_require__(894);
;// CONCATENATED MODULE: ./node_modules/fumadocs-ui/dist/mdx.client.js
/* __next_internal_client_entry_do_not_use__ Pre auto */ 






// src/mdx.client.tsx

function Pre2(props) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(CodeBlock, {
        ...props,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Pre, {
            children: props.children
        })
    });
}



/***/ }),

/***/ 7576:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Breadcrumb: () => (/* binding */ Breadcrumb),
/* harmony export */   Footer: () => (/* binding */ Footer),
/* harmony export */   LastUpdate: () => (/* binding */ LastUpdate),
/* harmony export */   TOCItems: () => (/* binding */ TOCItems),
/* harmony export */   Toc: () => (/* binding */ Toc),
/* harmony export */   TocPopover: () => (/* binding */ TocPopover)
/* harmony export */ });
/* harmony import */ var _chunk_DN6Z5VW6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3770);
/* harmony import */ var _chunk_MCX7E6ZW_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9471);
/* harmony import */ var _chunk_IVBHRX3O_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7076);
/* harmony import */ var _chunk_2FLZOPQN_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9744);
/* harmony import */ var _chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3592);
/* harmony import */ var _chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6164);
/* harmony import */ var _chunk_YL3MZH7N_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5763);
/* harmony import */ var _chunk_27HFSL7N_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7753);
/* harmony import */ var _chunk_EFMHXXHW_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9145);
/* harmony import */ var _chunk_MLKGABMK_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(894);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2265);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7138);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3525);
/* harmony import */ var fumadocs_core_toc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7437);
/* harmony import */ var fumadocs_core_breadcrumb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5772);
/* __next_internal_client_entry_do_not_use__ Breadcrumb,Footer,LastUpdate,TOCItems,Toc,TocPopover auto */ 









// src/page.client.tsx



// src/components/layout/toc.tsx



function Toc(param) {
    let { header, footer, children } = param;
    const { text } = (0,_chunk_EFMHXXHW_js__WEBPACK_IMPORTED_MODULE_7__/* .useI18n */ .Q)();
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        "data-toc": "",
        className: "sticky top-fd-layout-top h-[var(--fd-toc-height)] flex-1 pb-2 pt-12 max-lg:hidden",
        style: {
            "--fd-toc-height": "calc(100dvh - var(--fd-banner-height) - var(--fd-nav-height))"
        },
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: "flex h-full w-[var(--fd-toc-width)] flex-col gap-3 pe-2",
            children: [
                header,
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("h3", {
                    className: "-ms-0.5 inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground",
                    children: [
                        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv, {
                            className: "size-4"
                        }),
                        text.toc
                    ]
                }),
                children,
                footer
            ]
        })
    });
}
function TocNav(props) {
    const { open } = (0,_chunk_27HFSL7N_js__WEBPACK_IMPORTED_MODULE_6__/* .useSidebar */ .A)();
    const { isTransparent } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useContext)(_chunk_MCX7E6ZW_js__WEBPACK_IMPORTED_MODULE_1__/* .NavContext */ .Ly);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        id: "nd-tocnav",
        className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_13__/* .twMerge */ .m6)("sticky top-fd-layout-top z-10 border-b border-fd-foreground/10 text-sm transition-colors md:top-[var(--fd-toc-top-with-offset)] md:mx-3 md:rounded-full md:border", !isTransparent && "bg-fd-background/80 backdrop-blur-md md:shadow-md", open && "opacity-0", props.className),
        style: {
            "--fd-toc-top-with-offset": "calc(4px + var(--fd-banner-height) + var(--fd-nav-height))"
        },
        children: props.children
    });
}
function TocPopover(param) {
    let { items, ...props } = param;
    const { text } = (0,_chunk_EFMHXXHW_js__WEBPACK_IMPORTED_MODULE_7__/* .useI18n */ .Q)();
    const active = fumadocs_core_toc__WEBPACK_IMPORTED_MODULE_11__/* .useActiveAnchor */ .tD();
    const current = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(()=>{
        var _items_find;
        return (_items_find = items.find((item)=>active === item.url.slice(1))) === null || _items_find === void 0 ? void 0 : _items_find.title;
    }, [
        items,
        active
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TocNav, {
        ...props,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_chunk_IVBHRX3O_js__WEBPACK_IMPORTED_MODULE_2__/* .Popover */ .J2, {
            children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_chunk_IVBHRX3O_js__WEBPACK_IMPORTED_MODULE_2__/* .PopoverTrigger */ .xo, {
                    className: "inline-flex size-full items-center gap-2 text-nowrap px-4 py-2 text-left md:px-3",
                    children: [
                        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv, {
                            className: "size-4 shrink-0"
                        }),
                        text.toc,
                        current ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
                            children: [
                                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_4__/* .ChevronRight */ ._Q, {
                                    className: "-mx-1.5 size-4 shrink-0 text-fd-muted-foreground"
                                }),
                                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                                    className: "truncate text-fd-muted-foreground",
                                    children: current
                                })
                            ]
                        }) : null
                    ]
                }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_chunk_IVBHRX3O_js__WEBPACK_IMPORTED_MODULE_2__/* .PopoverContent */ .yk, {
                    hideWhenDetached: true,
                    alignOffset: 16,
                    align: "start",
                    side: "bottom",
                    className: "flex max-h-[var(--radix-popover-content-available-height)] w-[260px] flex-col gap-4 p-3",
                    "data-toc-popover": "",
                    children: [
                        props.header,
                        props.children,
                        props.footer
                    ]
                })
            ]
        })
    });
}
function TOCItems(param) {
    let { items, isMenu = false } = param;
    const { text } = (0,_chunk_EFMHXXHW_js__WEBPACK_IMPORTED_MODULE_7__/* .useI18n */ .Q)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)(null);
    const viewRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)(null);
    if (items.length === 0) return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",
        children: text.tocNoHeadings
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_chunk_2FLZOPQN_js__WEBPACK_IMPORTED_MODULE_3__/* .ScrollArea */ .xr, {
        className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_13__/* .twMerge */ .m6)("flex flex-col", isMenu && "-ms-3"),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(fumadocs_core_toc__WEBPACK_IMPORTED_MODULE_11__/* .ScrollProvider */ .ID, {
            containerRef: viewRef,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_chunk_2FLZOPQN_js__WEBPACK_IMPORTED_MODULE_3__/* .ScrollViewport */ .fK, {
                className: "relative min-h-0 text-sm",
                ref: viewRef,
                children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_chunk_DN6Z5VW6_js__WEBPACK_IMPORTED_MODULE_0__/* .TocThumb */ .F, {
                        containerRef,
                        className: "absolute start-0 mt-[var(--fd-top)] h-[var(--fd-height)] w-px bg-fd-primary transition-all"
                    }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                        ref: containerRef,
                        className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_13__/* .twMerge */ .m6)("flex flex-col", !isMenu && "border-s border-fd-foreground/10"),
                        children: items.map((item)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TOCItem2, {
                                item
                            }, item.url))
                    })
                ]
            })
        })
    });
}
function TOCItem2(param) {
    let { item } = param;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(fumadocs_core_toc__WEBPACK_IMPORTED_MODULE_11__/* .TOCItem */ .FU, {
        href: item.url,
        className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_13__/* .twMerge */ .m6)("prose py-1.5 text-sm text-fd-muted-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary", item.depth <= 2 && "ps-3.5", item.depth === 3 && "ps-6", item.depth >= 4 && "ps-8"),
        children: item.title
    });
}
// src/components/layout/breadcrumb.tsx




function Breadcrumb(param) {
    let { full = false, ...options } = param;
    const { path, root } = (0,_chunk_YL3MZH7N_js__WEBPACK_IMPORTED_MODULE_5__/* .useTreeContext */ .W)();
    const items = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(()=>{
        return (0,fumadocs_core_breadcrumb__WEBPACK_IMPORTED_MODULE_14__/* .getBreadcrumbItemsFromPath */ .bi)(root, path, {
            includePage: full,
            ...options
        });
    }, [
        full,
        options,
        path,
        root
    ]);
    if (items.length === 0) return null;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: "-mb-3 flex flex-row items-center gap-1 text-sm font-medium text-fd-muted-foreground",
        children: items.map((item, i)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [
                    i !== 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_4__/* .ChevronRight */ ._Q, {
                        className: "size-4 shrink-0 rtl:rotate-180"
                    }),
                    item.url ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_10__["default"], {
                        href: item.url,
                        className: "truncate hover:text-fd-accent-foreground",
                        children: item.name
                    }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "truncate",
                        children: item.name
                    })
                ]
            }, i))
    });
}
// src/page.client.tsx

function LastUpdate(props) {
    const { text } = (0,_chunk_EFMHXXHW_js__WEBPACK_IMPORTED_MODULE_7__/* .useI18n */ .Q)();
    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        setDate(props.date.toLocaleDateString());
    }, [
        props.date
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("p", {
        className: "text-sm text-fd-muted-foreground",
        children: [
            text.lastUpdate,
            " ",
            date
        ]
    });
}
var itemVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_15__/* .cva */ .j)("flex w-full flex-col gap-2 rounded-lg border bg-fd-card p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground");
var itemLabel = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_15__/* .cva */ .j)("inline-flex items-center gap-0.5 text-fd-muted-foreground");
function Footer(param) {
    let { items } = param;
    const tree = (0,_chunk_YL3MZH7N_js__WEBPACK_IMPORTED_MODULE_5__/* .useTreeContext */ .W)();
    const { text } = (0,_chunk_EFMHXXHW_js__WEBPACK_IMPORTED_MODULE_7__/* .useI18n */ .Q)();
    const { previous, next } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(()=>{
        if (items) return items;
        const neighbours = tree.getNeighbours();
        return {
            previous: neighbours[0],
            next: neighbours[1]
        };
    }, [
        items,
        tree
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "grid grid-cols-2 gap-4 pb-6",
        children: [
            previous ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(next_link__WEBPACK_IMPORTED_MODULE_10__["default"], {
                href: previous.url,
                className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_13__/* .twMerge */ .m6)(itemVariants()),
                children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                        className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_13__/* .twMerge */ .m6)(itemLabel()),
                        children: [
                            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_4__/* .ChevronLeft */ .s$, {
                                className: "-ms-1 size-4 shrink-0 rtl:rotate-180"
                            }),
                            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
                                children: text.previousPage
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
                        className: "font-medium",
                        children: previous.name
                    })
                ]
            }) : null,
            next ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(next_link__WEBPACK_IMPORTED_MODULE_10__["default"], {
                href: next.url,
                className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_13__/* .twMerge */ .m6)(itemVariants({
                    className: "col-start-2 text-end"
                })),
                children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                        className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_13__/* .twMerge */ .m6)(itemLabel({
                            className: "flex-row-reverse"
                        })),
                        children: [
                            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_chunk_5QPVK7QM_js__WEBPACK_IMPORTED_MODULE_4__/* .ChevronRight */ ._Q, {
                                className: "-me-1 size-4 shrink-0 rtl:rotate-180"
                            }),
                            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
                                children: text.nextPage
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
                        className: "font-medium",
                        children: next.name
                    })
                ]
            }) : null
        ]
    });
}



/***/ }),

/***/ 2539:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClerkTOCItems)
/* harmony export */ });
/* harmony import */ var _chunk_DN6Z5VW6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3770);
/* harmony import */ var _chunk_2FLZOPQN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9744);
/* harmony import */ var _chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6164);
/* harmony import */ var _chunk_EFMHXXHW_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9145);
/* harmony import */ var _chunk_MLKGABMK_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(894);
/* harmony import */ var fumadocs_core_toc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2265);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7437);
/* __next_internal_client_entry_do_not_use__ default auto */ 




// src/components/layout/toc-clerk.tsx



function ClerkTOCItems(param) {
    let { items, isMenu = false } = param;
    const { text } = (0,_chunk_EFMHXXHW_js__WEBPACK_IMPORTED_MODULE_2__/* .useI18n */ .Q)();
    const viewRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const [svg, setSvg] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (!containerRef.current) return;
        const container = containerRef.current;
        function onResize() {
            if (container.clientHeight === 0) return;
            let w = 0, h = 0;
            const d = [];
            for(let i = 0; i < items.length; i++){
                const element = container.querySelector('a[href="#'.concat(items[i].url.slice(1), '"]'));
                if (!element) continue;
                const styles = getComputedStyle(element);
                const offset = getLineOffset(items[i].depth) + 1, top = element.offsetTop + parseFloat(styles.paddingTop), bottom = element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom);
                w = Math.max(offset, w);
                h = Math.max(h, bottom);
                d.push("".concat(i === 0 ? "M" : "L").concat(offset, " ").concat(top));
                d.push("L".concat(offset, " ").concat(bottom));
            }
            setSvg({
                path: d.join(" "),
                width: w + 1,
                height: h
            });
        }
        const observer = new ResizeObserver(onResize);
        onResize();
        observer.observe(container);
        return ()=>{
            observer.disconnect();
        };
    }, [
        items
    ]);
    if (items.length === 0) return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",
        children: text.tocNoHeadings
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chunk_2FLZOPQN_js__WEBPACK_IMPORTED_MODULE_1__/* .ScrollArea */ .xr, {
        className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_7__/* .twMerge */ .m6)("flex flex-col", isMenu && "-ms-3"),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chunk_2FLZOPQN_js__WEBPACK_IMPORTED_MODULE_1__/* .ScrollViewport */ .fK, {
            className: "relative min-h-0",
            ref: viewRef,
            children: [
                svg ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                    className: "absolute start-0 top-0 rtl:-scale-x-100",
                    style: {
                        width: svg.width,
                        height: svg.height,
                        maskImage: 'url("data:image/svg+xml,'.concat(encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(svg.width, " ").concat(svg.height, '"><path d="').concat(svg.path, '" stroke="black" stroke-width="1" fill="none" /></svg>')), '")')
                    },
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chunk_DN6Z5VW6_js__WEBPACK_IMPORTED_MODULE_0__/* .TocThumb */ .F, {
                        containerRef,
                        className: "mt-[var(--fd-top)] h-[var(--fd-height)] bg-fd-primary transition-all"
                    })
                }) : null,
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(fumadocs_core_toc__WEBPACK_IMPORTED_MODULE_4__/* .ScrollProvider */ .ID, {
                    containerRef: viewRef,
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                        className: "flex flex-col",
                        ref: containerRef,
                        children: items.map((item, i)=>{
                            var _items_, _items_1;
                            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TOCItem2, {
                                item,
                                upper: (_items_ = items[i - 1]) === null || _items_ === void 0 ? void 0 : _items_.depth,
                                lower: (_items_1 = items[i + 1]) === null || _items_1 === void 0 ? void 0 : _items_1.depth
                            }, item.url);
                        })
                    })
                })
            ]
        })
    });
}
function getItemOffset(depth) {
    if (depth <= 2) return 16;
    if (depth === 3) return 32;
    return 48;
}
function getLineOffset(depth) {
    return depth >= 3 ? 12 : 0;
}
function TOCItem2(param) {
    let { item, upper = item.depth, lower = item.depth } = param;
    const offset = getLineOffset(item.depth), upperOffset = getLineOffset(upper), lowerOffset = getLineOffset(lower);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(fumadocs_core_toc__WEBPACK_IMPORTED_MODULE_4__/* .TOCItem */ .FU, {
        href: item.url,
        style: {
            paddingInlineStart: getItemOffset(item.depth)
        },
        className: "prose relative py-2 text-sm text-fd-muted-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary",
        children: [
            offset !== upperOffset ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16",
                className: "absolute -top-2 start-0 size-4 rtl:-scale-x-100",
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("line", {
                    x1: upperOffset,
                    y1: "0",
                    x2: offset,
                    y2: "16",
                    className: "stroke-fd-foreground/10",
                    strokeWidth: "1"
                })
            }) : null,
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: (0,_chunk_TK3TM3MR_js__WEBPACK_IMPORTED_MODULE_7__/* .twMerge */ .m6)("absolute inset-y-0 w-px bg-fd-foreground/10", offset !== upperOffset && "top-2", offset !== lowerOffset && "bottom-2"),
                style: {
                    insetInlineStart: offset
                }
            }),
            item.title
        ]
    });
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [30,49,811,569,343,40,867,130,215,744], () => (__webpack_exec__(5303)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);