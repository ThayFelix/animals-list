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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Card = (param)=>{\n    let { title , buttonText  } = param;\n    _s();\n    const [showText, setShowText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleMakeNoiseClick = ()=>{\n        setShowText(true);\n        setTimeout(()=>setShowText(false), 2000); // hide text after 2 seconds\n    };\n    const handleDeleteClick = ()=>{\n        console.log(\"deleta o animal\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"border border-gray-300 p-4 m-4 flex justify-between\",\n            onMouseEnter: ()=>setHovered(true),\n            onMouseLeave: ()=>setHovered(false),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg font-medium mb-4\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded\",\n                            onClick: handleMakeNoiseClick,\n                            children: buttonText\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        }, undefined),\n                        hovered && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4 transform transition-all fade-out\",\n                            onClick: handleDeleteClick,\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, undefined),\n                showText && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-gray-600 text-sm mt-2 self-center\",\n                    children: \"Oink\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n            lineNumber: 24,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(Card, \"7giuluvT0D4NUikIEGAbCE5TtBA=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBUXhDLE1BQU1FLE9BQU8sU0FBc0M7UUFBckMsRUFBRUMsTUFBSyxFQUFFQyxXQUFVLEVBQWE7O0lBQzVDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzlDLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRzVDLE1BQU1RLHVCQUF1QixJQUFNO1FBQ2pDSCxZQUFZLElBQUk7UUFDaEJJLFdBQVcsSUFBTUosWUFBWSxLQUFLLEdBQUcsT0FBTyw0QkFBNEI7SUFDMUU7SUFFQSxNQUFNSyxvQkFBb0IsSUFBTTtRQUM5QkMsUUFBUUMsR0FBRyxDQUFDO0lBQ2Q7SUFFQSxxQkFBUTtrQkFDTiw0RUFBQ0M7WUFBSUMsV0FBVTtZQUNiQyxjQUFjLElBQU1SLFdBQVcsSUFBSTtZQUNuQ1MsY0FBYyxJQUFNVCxXQUFXLEtBQUs7OzhCQUVwQyw4REFBQ007O3NDQUNDLDhEQUFDSTs0QkFBR0gsV0FBVTtzQ0FBNEJaOzs7Ozs7c0NBQzFDLDhEQUFDZ0I7NEJBQ0NKLFdBQVU7NEJBQ1ZLLFNBQVNYO3NDQUVSTDs7Ozs7O3dCQUVGRyx5QkFDQyw4REFBQ1k7NEJBQ0NKLFdBQVU7NEJBQ1ZLLFNBQVNUO3NDQUNWOzs7Ozs7Ozs7Ozs7Z0JBS0pOLDBCQUNDLDhEQUFDZ0I7b0JBQUVOLFdBQVU7OEJBQXlDOzs7Ozs7Ozs7Ozs7O0FBUTlEO0dBN0NNYjtLQUFBQTtBQStDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LnRzeD9jMTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIENhcmRQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBidXR0b25UZXh0OiBzdHJpbmc7XHJcblxyXG59XHJcblxyXG5jb25zdCBDYXJkID0gKHsgdGl0bGUsIGJ1dHRvblRleHQgfTogQ2FyZFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dUZXh0LCBzZXRTaG93VGV4dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlTWFrZU5vaXNlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93VGV4dCh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd1RleHQoZmFsc2UpLCAyMDAwKTsgLy8gaGlkZSB0ZXh0IGFmdGVyIDIgc2Vjb25kc1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2RlbGV0YSBvIGFuaW1hbCcpXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuICg8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtNCBtLTQgZmxleCBqdXN0aWZ5LWJldHdlZW5cIlxyXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyZWQodHJ1ZSl9XHJcbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJlZChmYWxzZSl9XHJcbiAgICA+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gbWItNFwiPnt0aXRsZX08L2gyPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1ha2VOb2lzZUNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtidXR0b25UZXh0fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHtob3ZlcmVkICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNjAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIG1sLTQgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGZhZGUtb3V0XCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlQ2xpY2t9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93VGV4dCAmJiAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIG10LTIgc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgIE9pbmtcclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDYXJkIiwidGl0bGUiLCJidXR0b25UZXh0Iiwic2hvd1RleHQiLCJzZXRTaG93VGV4dCIsImhvdmVyZWQiLCJzZXRIb3ZlcmVkIiwiaGFuZGxlTWFrZU5vaXNlQ2xpY2siLCJzZXRUaW1lb3V0IiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Card/index.tsx\n"));

/***/ })

});