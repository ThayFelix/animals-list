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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tw_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tw-elements */ \"./node_modules/tw-elements/dist/js/tw-elements.es.min.js\");\n\nvar _s = $RefreshSig$();\n\n\n(0,tw_elements__WEBPACK_IMPORTED_MODULE_2__.initTE)({\n    Animate: tw_elements__WEBPACK_IMPORTED_MODULE_2__.Animate\n});\nconst Card = (param)=>{\n    let { title , buttonText , onMakeNoise , onDelete  } = param;\n    _s();\n    const [showText, setShowText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleMakeNoiseClick = ()=>{\n        onMakeNoise();\n        setShowText(true);\n        setTimeout(()=>setShowText(false), 2000); // hide text after 2 seconds\n    };\n    const handleDeleteClick = ()=>{\n        onDelete();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"border border-gray-300 p-4 m-4 flex justify-between\",\n            onMouseEnter: ()=>setHovered(true),\n            onMouseLeave: ()=>setHovered(false),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg font-medium mb-4\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded\",\n                            onClick: handleMakeNoiseClick,\n                            children: buttonText\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        }, undefined),\n                        hovered && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded\",\n                            onClick: handleDeleteClick,\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, undefined),\n                showText && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-gray-600 text-sm mt-2 self-center\",\n                    children: \"test\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n            lineNumber: 31,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(Card, \"7giuluvT0D4NUikIEGAbCE5TtBA=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUluQjtBQUVyQkcsbURBQU1BLENBQUM7SUFBRUQsT0FBT0Esa0RBQUFBO0FBQUM7QUFRakIsTUFBTUUsT0FBTyxTQUE2RDtRQUE1RCxFQUFFQyxNQUFLLEVBQUVDLFdBQVUsRUFBRUMsWUFBVyxFQUFFQyxTQUFRLEVBQWE7O0lBQ25FLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzlDLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRzVDLE1BQU1ZLHVCQUF1QixJQUFNO1FBQ2pDTjtRQUNBRyxZQUFZLElBQUk7UUFDaEJJLFdBQVcsSUFBTUosWUFBWSxLQUFLLEdBQUcsT0FBTyw0QkFBNEI7SUFDMUU7SUFFQSxNQUFNSyxvQkFBb0IsSUFBTTtRQUM5QlA7SUFDRjtJQUVBLHFCQUFRO2tCQUNOLDRFQUFDUTtZQUFJQyxXQUFVO1lBQXNEQyxjQUFjLElBQU1OLFdBQVcsSUFBSTtZQUN0R08sY0FBYyxJQUFNUCxXQUFXLEtBQUs7OzhCQUNwQyw4REFBQ0k7O3NDQUNDLDhEQUFDSTs0QkFBR0gsV0FBVTtzQ0FBNEJaOzs7Ozs7c0NBQzFDLDhEQUFDZ0I7NEJBQ0NKLFdBQVU7NEJBQ1ZLLFNBQVNUO3NDQUVSUDs7Ozs7O3dCQUVGSyx5QkFDQyw4REFBQ1U7NEJBQ0NKLFdBQVU7NEJBQ1ZLLFNBQVNQO3NDQUNWOzs7Ozs7Ozs7Ozs7Z0JBS0pOLDBCQUNDLDhEQUFDYztvQkFBRU4sV0FBVTs4QkFBeUM7Ozs7Ozs7Ozs7Ozs7QUFROUQ7R0E1Q01iO0tBQUFBO0FBOENOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcmQvaW5kZXgudHN4P2MxM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQW5pbWF0ZSxcclxuICBpbml0VEUsXHJcbn0gZnJvbSBcInR3LWVsZW1lbnRzXCI7XHJcblxyXG5pbml0VEUoeyBBbmltYXRlIH0pO1xyXG5pbnRlcmZhY2UgQ2FyZFByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGJ1dHRvblRleHQ6IHN0cmluZztcclxuICBvbk1ha2VOb2lzZTogKCkgPT4gdm9pZDtcclxuICBvbkRlbGV0ZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgQ2FyZCA9ICh7IHRpdGxlLCBidXR0b25UZXh0LCBvbk1ha2VOb2lzZSwgb25EZWxldGUgfTogQ2FyZFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dUZXh0LCBzZXRTaG93VGV4dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlTWFrZU5vaXNlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBvbk1ha2VOb2lzZSgpO1xyXG4gICAgc2V0U2hvd1RleHQodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldFNob3dUZXh0KGZhbHNlKSwgMjAwMCk7IC8vIGhpZGUgdGV4dCBhZnRlciAyIHNlY29uZHNcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVDbGljayA9ICgpID0+IHtcclxuICAgIG9uRGVsZXRlKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuICg8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtNCBtLTQgZmxleCBqdXN0aWZ5LWJldHdlZW5cIiBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyZWQodHJ1ZSl9XHJcbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJlZChmYWxzZSl9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIG1iLTRcIj57dGl0bGV9PC9oMj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNYWtlTm9pc2VDbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7YnV0dG9uVGV4dH1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7aG92ZXJlZCAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHB4LTIgcHktMSByb3VuZGVkXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlQ2xpY2t9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93VGV4dCAmJiAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIG10LTIgc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgIHRlc3RcclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBbmltYXRlIiwiaW5pdFRFIiwiQ2FyZCIsInRpdGxlIiwiYnV0dG9uVGV4dCIsIm9uTWFrZU5vaXNlIiwib25EZWxldGUiLCJzaG93VGV4dCIsInNldFNob3dUZXh0IiwiaG92ZXJlZCIsInNldEhvdmVyZWQiLCJoYW5kbGVNYWtlTm9pc2VDbGljayIsInNldFRpbWVvdXQiLCJoYW5kbGVEZWxldGVDbGljayIsImRpdiIsImNsYXNzTmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImgyIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Card/index.tsx\n"));

/***/ })

});