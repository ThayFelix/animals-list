"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/providers/AnimalContext.tsx":
/*!*****************************************!*\
  !*** ./src/providers/AnimalContext.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnimalContext\": function() { return /* binding */ AnimalContext; },\n/* harmony export */   \"contextDefaultValues\": function() { return /* binding */ contextDefaultValues; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_animals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/animals */ \"./src/lib/animals/index.ts\");\n\n\nconst contextDefaultValues = {\n    addAnimal: ()=>{},\n    removeAnimal: ()=>{},\n    animals: _lib_animals__WEBPACK_IMPORTED_MODULE_1__.initialAnimals\n};\nconst AnimalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(contextDefaultValues);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvdmlkZXJzL0FuaW1hbENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDO0FBQ2dCO0FBUS9DLE1BQU1FLHVCQUE0QztJQUN2REMsV0FBVyxJQUFNLENBQUU7SUFDbkJDLGNBQWMsSUFBTSxDQUFFO0lBQ3RCQyxTQUFTSix3REFBY0E7QUFDekIsRUFBQztBQUVNLE1BQU1LLDhCQUFnQk4sb0RBQWFBLENBQ3hDRSxzQkFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcHJvdmlkZXJzL0FuaW1hbENvbnRleHQudHN4P2IwN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQW5pbWFsLCBpbml0aWFsQW5pbWFscyB9IGZyb20gJ0AvbGliL2FuaW1hbHMnXHJcblxyXG5pbnRlcmZhY2UgQW5pbWFsc0NvbnRleHRQcm9wcyB7XHJcbiAgYWRkQW5pbWFsOiAobmV3QW5pbWFsOiBBbmltYWwpID0+IHZvaWQ7XHJcbiAgcmVtb3ZlQW5pbWFsOiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcclxuICBhbmltYWxzOiBBbmltYWxbXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRleHREZWZhdWx0VmFsdWVzOiBBbmltYWxzQ29udGV4dFByb3BzID0ge1xyXG4gIGFkZEFuaW1hbDogKCkgPT4geyB9LFxyXG4gIHJlbW92ZUFuaW1hbDogKCkgPT4geyB9LFxyXG4gIGFuaW1hbHM6IGluaXRpYWxBbmltYWxzLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQW5pbWFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QW5pbWFsc0NvbnRleHRQcm9wcz4oXHJcbiAgY29udGV4dERlZmF1bHRWYWx1ZXNcclxuKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsImluaXRpYWxBbmltYWxzIiwiY29udGV4dERlZmF1bHRWYWx1ZXMiLCJhZGRBbmltYWwiLCJyZW1vdmVBbmltYWwiLCJhbmltYWxzIiwiQW5pbWFsQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/providers/AnimalContext.tsx\n"));

/***/ })

});