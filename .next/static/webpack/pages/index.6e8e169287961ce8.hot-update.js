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

/***/ "./src/pages/animals/view.tsx":
/*!************************************!*\
  !*** ./src/pages/animals/view.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnimalsView\": function() { return /* binding */ AnimalsView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card/index.tsx\");\n/* harmony import */ var _providers_AnimalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/providers/AnimalContext */ \"./src/providers/AnimalContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction AnimalsView() {\n    _s();\n    const { addAnimal , animals  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_providers_AnimalContext__WEBPACK_IMPORTED_MODULE_3__.AnimalContext);\n    console.log(animals);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            maxWidth: 800\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-disc\",\n                children: animals.map((animal)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, animal.id, false, {\n                        fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mx-4\",\n                onClick: ()=>addAnimal({}),\n                children: \"Add new animal\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(AnimalsView, \"xTNmEZbxALRovFiFgfUXYsOhNhI=\");\n_c = AnimalsView;\nvar _c;\n$RefreshReg$(_c, \"AnimalsView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYW5pbWFscy92aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNzQjtBQUduRCxTQUFTSSxjQUFjOztJQUM1QixNQUFNLEVBQUVDLFVBQVMsRUFBRUMsUUFBTyxFQUFFLEdBQUdMLGlEQUFVQSxDQUFDRSxtRUFBYUE7SUFDdkRJLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixxQkFDRSw4REFBQ0c7UUFBSUMsT0FBTztZQUFFQyxVQUFVO1FBQUk7OzBCQUMxQiw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQ1hQLFFBQVFRLEdBQUcsQ0FBQyxDQUFDQyx1QkFDWiw4REFBQ2Isd0RBQUlBLE1BQU1hLE9BQU9DLEVBQUU7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDQztnQkFDQ0osV0FBVTtnQkFDVkssU0FBUyxJQUFNYixVQUFVLENBQUM7MEJBQzNCOzs7Ozs7Ozs7Ozs7QUFLUCxDQUFDO0dBbEJlRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYW5pbWFscy92aWV3LnRzeD9lODcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcmQgZnJvbSAnQC9jb21wb25lbnRzL0NhcmQnXG5pbXBvcnQgeyBBbmltYWxDb250ZXh0IH0gZnJvbSAnQC9wcm92aWRlcnMvQW5pbWFsQ29udGV4dCc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEFuaW1hbHNWaWV3KCkge1xuICBjb25zdCB7IGFkZEFuaW1hbCwgYW5pbWFscyB9ID0gdXNlQ29udGV4dChBbmltYWxDb250ZXh0KTtcbiAgY29uc29sZS5sb2coYW5pbWFscylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiA4MDAgfX0+XG4gICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0LWRpc2MnPlxuICAgICAgICB7YW5pbWFscy5tYXAoKGFuaW1hbCkgPT4gKFxuICAgICAgICAgIDxDYXJkIGtleT17YW5pbWFsLmlkfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIG10LTQgbXgtNFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEFuaW1hbCh7fSl9XG4gICAgICA+XG4gICAgICAgIEFkZCBuZXcgYW5pbWFsXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIkNhcmQiLCJBbmltYWxDb250ZXh0IiwiQW5pbWFsc1ZpZXciLCJhZGRBbmltYWwiLCJhbmltYWxzIiwiY29uc29sZSIsImxvZyIsImRpdiIsInN0eWxlIiwibWF4V2lkdGgiLCJ1bCIsImNsYXNzTmFtZSIsIm1hcCIsImFuaW1hbCIsImlkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/animals/view.tsx\n"));

/***/ })

});