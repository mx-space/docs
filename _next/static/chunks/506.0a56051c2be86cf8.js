"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[506],{

/***/ 7165:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ removeUndefined)
/* harmony export */ });
// src/utils/remove-undefined.ts
function removeUndefined(value) {
  const obj = value;
  Object.keys(obj).forEach((key) => {
    if (obj[key] === void 0) delete obj[key];
  });
  return value;
}




/***/ }),

/***/ 4506:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchDocs: () => (/* binding */ searchDocs)
/* harmony export */ });
/* harmony import */ var _chunk_2V6SCS43_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7165);
/* harmony import */ var _chunk_MLKGABMK_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7067);



// src/search/client/orama-cloud.ts
async function searchDocs(query, tag, options) {
  const { client, params: extraParams = {} } = options;
  const params = {
    ...extraParams,
    term: query,
    where: (0,_chunk_2V6SCS43_js__WEBPACK_IMPORTED_MODULE_1__/* .removeUndefined */ .o)({
      tag,
      ...extraParams.where
    }),
    groupBy: {
      properties: ["page_id"],
      maxResult: 7,
      ...extraParams.groupBy
    }
  };
  const result = await client.search(params);
  if (!result) return [];
  const list = [];
  for (const item of result.groups ?? []) {
    let addedHead = false;
    for (const hit of item.result) {
      const doc = hit.document;
      if (!addedHead) {
        list.push({
          id: doc.page_id,
          type: "page",
          content: doc.title,
          url: doc.url
        });
        addedHead = true;
      }
      list.push({
        id: doc.id,
        content: doc.content,
        type: doc.content === doc.section ? "heading" : "text",
        url: doc.section_id ? `${doc.url}#${doc.section_id}` : doc.url
      });
    }
  }
  return list;
}



/***/ })

}]);