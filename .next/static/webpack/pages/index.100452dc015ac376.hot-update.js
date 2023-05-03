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

/***/ "./src/components/Card/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Card/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _providers_AnimalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/providers/AnimalContext */ \"./src/providers/AnimalContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Card = (param)=>{\n    let { name , id  } = param;\n    _s();\n    const [showText, setShowText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { removeAnimal  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_providers_AnimalContext__WEBPACK_IMPORTED_MODULE_1__.AnimalContext);\n    const handleMakeNoiseClick = ()=>{\n        setShowText(true);\n        setTimeout(()=>setShowText(false), 2000); // hide text after 2 seconds\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"border border-gray-300 p-4 m-4 flex justify-between\",\n            onMouseEnter: ()=>setHovered(true),\n            onMouseLeave: ()=>setHovered(false),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg font-medium mb-4\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded\",\n                            onClick: handleMakeNoiseClick,\n                            children: \"Make Noise\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        }, undefined),\n                        hovered && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4 \",\n                            onClick: ()=>removeAnimal(id),\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, undefined),\n                showText && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-gray-600 text-sm mt-2 self-center\",\n                    children: \"Oink\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n            lineNumber: 22,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(Card, \"nrRLSrGaUkn+wPp+PjmGvtnpXeE=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwRDtBQUNOO0FBT3BELE1BQU1JLE9BQU8sU0FBNkI7UUFBNUIsRUFBRUMsS0FBSSxFQUFFQyxHQUFFLEVBQWE7O0lBQ25DLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzlDLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLE1BQU0sRUFBRVEsYUFBWSxFQUFFLEdBQUdULGlEQUFVQSxDQUFDRixtRUFBYUE7SUFHakQsTUFBTVksdUJBQXVCLElBQU07UUFDakNKLFlBQVksSUFBSTtRQUNoQkssV0FBVyxJQUFNTCxZQUFZLEtBQUssR0FBRyxPQUFPLDRCQUE0QjtJQUMxRTtJQUdBLHFCQUFRO2tCQUNOLDRFQUFDTTtZQUFJQyxXQUFVO1lBQ2JDLGNBQWMsSUFBTU4sV0FBVyxJQUFJO1lBQ25DTyxjQUFjLElBQU1QLFdBQVcsS0FBSzs7OEJBRXBDLDhEQUFDSTs7c0NBQ0MsOERBQUNJOzRCQUFHSCxXQUFVO3NDQUE0QlY7Ozs7OztzQ0FDMUMsOERBQUNjOzRCQUNDSixXQUFVOzRCQUNWSyxTQUFTUjtzQ0FDVjs7Ozs7O3dCQUdBSCx5QkFDQyw4REFBQ1U7NEJBQ0NKLFdBQVU7NEJBQ1ZLLFNBQVMsSUFBTVQsYUFBYUw7c0NBQzdCOzs7Ozs7Ozs7Ozs7Z0JBS0pDLDBCQUNDLDhEQUFDYztvQkFBRU4sV0FBVTs4QkFBeUM7Ozs7Ozs7Ozs7Ozs7QUFROUQ7R0EzQ01YO0tBQUFBO0FBNkNOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcmQvaW5kZXgudHN4P2MxM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWFsQ29udGV4dCB9IGZyb20gXCJAL3Byb3ZpZGVycy9BbmltYWxDb250ZXh0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIENhcmRQcm9wcyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGlkOiBudW1iZXJcclxufVxyXG5cclxuY29uc3QgQ2FyZCA9ICh7IG5hbWUsIGlkIH06IENhcmRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzaG93VGV4dCwgc2V0U2hvd1RleHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtob3ZlcmVkLCBzZXRIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IHJlbW92ZUFuaW1hbCB9ID0gdXNlQ29udGV4dChBbmltYWxDb250ZXh0KTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZU1ha2VOb2lzZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd1RleHQodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldFNob3dUZXh0KGZhbHNlKSwgMjAwMCk7IC8vIGhpZGUgdGV4dCBhZnRlciAyIHNlY29uZHNcclxuICB9O1xyXG5cclxuXHJcbiAgcmV0dXJuICg8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtNCBtLTQgZmxleCBqdXN0aWZ5LWJldHdlZW5cIlxyXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyZWQodHJ1ZSl9XHJcbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJlZChmYWxzZSl9XHJcbiAgICA+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gbWItNFwiPntuYW1lfTwvaDI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlTWFrZU5vaXNlQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTWFrZSBOb2lzZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHtob3ZlcmVkICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNjAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIG1sLTQgXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlQW5pbWFsKGlkKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dUZXh0ICYmIChcclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gbXQtMiBzZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgT2lua1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG5cclxuICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiXSwibmFtZXMiOlsiQW5pbWFsQ29udGV4dCIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQ2FyZCIsIm5hbWUiLCJpZCIsInNob3dUZXh0Iiwic2V0U2hvd1RleHQiLCJob3ZlcmVkIiwic2V0SG92ZXJlZCIsInJlbW92ZUFuaW1hbCIsImhhbmRsZU1ha2VOb2lzZUNsaWNrIiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImgyIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Card/index.tsx\n"));

/***/ })

});