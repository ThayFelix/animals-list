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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Card = (param)=>{\n    let { title , buttonText , onMakeNoise , onDelete  } = param;\n    _s();\n    const [showText, setShowText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleMakeNoiseClick = ()=>{\n        setShowText(true);\n        setTimeout(()=>setShowText(false), 2000); // hide text after 2 seconds\n    };\n    const handleDeleteClick = ()=>{\n        onDelete();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"border border-gray-300 p-4 m-4 flex justify-between\",\n            onMouseEnter: ()=>setHovered(true),\n            onMouseLeave: ()=>setHovered(false),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg font-medium mb-4\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded\",\n                            onClick: handleMakeNoiseClick,\n                            children: buttonText\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        }, undefined),\n                        hovered && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4\",\n                            onClick: handleDeleteClick,\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, undefined),\n                showText && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"animate-fade-out text-gray-600 text-sm mt-2 self-center\",\n                    children: \"test\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n            lineNumber: 25,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(Card, \"7giuluvT0D4NUikIEGAbCE5TtBA=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBU3hDLE1BQU1FLE9BQU8sU0FBNkQ7UUFBNUQsRUFBRUMsTUFBSyxFQUFFQyxXQUFVLEVBQUVDLFlBQVcsRUFBRUMsU0FBUSxFQUFhOztJQUNuRSxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUM5QyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUc1QyxNQUFNVSx1QkFBdUIsSUFBTTtRQUNqQ0gsWUFBWSxJQUFJO1FBQ2hCSSxXQUFXLElBQU1KLFlBQVksS0FBSyxHQUFHLE9BQU8sNEJBQTRCO0lBQzFFO0lBRUEsTUFBTUssb0JBQW9CLElBQU07UUFDOUJQO0lBQ0Y7SUFFQSxxQkFBUTtrQkFDTiw0RUFBQ1E7WUFBSUMsV0FBVTtZQUNiQyxjQUFjLElBQU1OLFdBQVcsSUFBSTtZQUNuQ08sY0FBYyxJQUFNUCxXQUFXLEtBQUs7OzhCQUVwQyw4REFBQ0k7O3NDQUNDLDhEQUFDSTs0QkFBR0gsV0FBVTtzQ0FBNEJaOzs7Ozs7c0NBQzFDLDhEQUFDZ0I7NEJBQ0NKLFdBQVU7NEJBQ1ZLLFNBQVNUO3NDQUVSUDs7Ozs7O3dCQUVGSyx5QkFDQyw4REFBQ1U7NEJBQ0NKLFdBQVU7NEJBQ1ZLLFNBQVNQO3NDQUNWOzs7Ozs7Ozs7Ozs7Z0JBS0pOLDBCQUNDLDhEQUFDYztvQkFBRU4sV0FBVTs4QkFBMEQ7Ozs7Ozs7Ozs7Ozs7QUFRL0U7R0E3Q01iO0tBQUFBO0FBK0NOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcmQvaW5kZXgudHN4P2MxM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ2FyZFByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGJ1dHRvblRleHQ6IHN0cmluZztcclxuICBvbk1ha2VOb2lzZTogKCkgPT4gdm9pZDtcclxuICBvbkRlbGV0ZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgQ2FyZCA9ICh7IHRpdGxlLCBidXR0b25UZXh0LCBvbk1ha2VOb2lzZSwgb25EZWxldGUgfTogQ2FyZFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dUZXh0LCBzZXRTaG93VGV4dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlTWFrZU5vaXNlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93VGV4dCh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd1RleHQoZmFsc2UpLCAyMDAwKTsgLy8gaGlkZSB0ZXh0IGFmdGVyIDIgc2Vjb25kc1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgb25EZWxldGUoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcC00IG0tNCBmbGV4IGp1c3RpZnktYmV0d2VlblwiXHJcbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZCh0cnVlKX1cclxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmVkKGZhbHNlKX1cclxuICAgID5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSBtYi00XCI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlTWFrZU5vaXNlQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2J1dHRvblRleHR9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAge2hvdmVyZWQgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgbWwtNFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUNsaWNrfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd1RleHQgJiYgKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImFuaW1hdGUtZmFkZS1vdXQgdGV4dC1ncmF5LTYwMCB0ZXh0LXNtIG10LTIgc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgIHRlc3RcclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDYXJkIiwidGl0bGUiLCJidXR0b25UZXh0Iiwib25NYWtlTm9pc2UiLCJvbkRlbGV0ZSIsInNob3dUZXh0Iiwic2V0U2hvd1RleHQiLCJob3ZlcmVkIiwic2V0SG92ZXJlZCIsImhhbmRsZU1ha2VOb2lzZUNsaWNrIiwic2V0VGltZW91dCIsImhhbmRsZURlbGV0ZUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Card/index.tsx\n"));

/***/ })

});