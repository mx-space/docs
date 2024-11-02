"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[405],{

/***/ 8405:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchDocs: () => (/* binding */ fetchDocs)
/* harmony export */ });
/* harmony import */ var _chunk_MLKGABMK_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7067);


// src/search/client/fetch.ts
async function fetchDocs(query, locale, tag, options) {
  const params = new URLSearchParams();
  params.set("query", query);
  if (locale) params.set("locale", locale);
  if (tag) params.set("tag", tag);
  const res = await fetch(
    `${options.api ?? "/api/search"}?${params.toString()}`
  );
  if (!res.ok) throw new Error(await res.text());
  return await res.json();
}



/***/ })

}]);