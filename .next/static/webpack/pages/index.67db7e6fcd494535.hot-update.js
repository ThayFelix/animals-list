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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Card = (param)=>{\n    let { title , buttonText , onMakeNoise , onDelete  } = param;\n    _s();\n    const [showText, setShowText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleMakeNoiseClick = ()=>{\n        onMakeNoise();\n        setShowText(true);\n        setTimeout(()=>setShowText(false), 2000); // hide text after 2 seconds\n    };\n    const handleDeleteClick = ()=>{\n        onDelete();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"border border-gray-300 p-4 m-4 flex justify-between\",\n            onMouseEnter: ()=>setHovered(true),\n            onMouseLeave: ()=>setHovered(false),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg font-medium mb-4\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded\",\n                            onClick: handleMakeNoiseClick,\n                            children: buttonText\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        }, undefined),\n                        hovered && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4\",\n                            onClick: handleDeleteClick,\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, undefined),\n                showText && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-gray-600 text-sm mt-2 self-center\",\n                    children: \"test\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n            lineNumber: 26,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(Card, \"7giuluvT0D4NUikIEGAbCE5TtBA=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBU3hDLE1BQU1FLE9BQU8sU0FBNkQ7UUFBNUQsRUFBRUMsTUFBSyxFQUFFQyxXQUFVLEVBQUVDLFlBQVcsRUFBRUMsU0FBUSxFQUFhOztJQUNuRSxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUM5QyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUc1QyxNQUFNVSx1QkFBdUIsSUFBTTtRQUNqQ047UUFDQUcsWUFBWSxJQUFJO1FBQ2hCSSxXQUFXLElBQU1KLFlBQVksS0FBSyxHQUFHLE9BQU8sNEJBQTRCO0lBQzFFO0lBRUEsTUFBTUssb0JBQW9CLElBQU07UUFDOUJQO0lBQ0Y7SUFFQSxxQkFBUTtrQkFDTiw0RUFBQ1E7WUFBSUMsV0FBVTtZQUFzREMsY0FBYyxJQUFNTixXQUFXLElBQUk7WUFDdEdPLGNBQWMsSUFBTVAsV0FBVyxLQUFLOzs4QkFDcEMsOERBQUNJOztzQ0FDQyw4REFBQ0k7NEJBQUdILFdBQVU7c0NBQTRCWjs7Ozs7O3NDQUMxQyw4REFBQ2dCOzRCQUNDSixXQUFVOzRCQUNWSyxTQUFTVDtzQ0FFUlA7Ozs7Ozt3QkFFRksseUJBQ0MsOERBQUNVOzRCQUNDSixXQUFVOzRCQUNWSyxTQUFTUDtzQ0FDVjs7Ozs7Ozs7Ozs7O2dCQUtKTiwwQkFDQyw4REFBQ2M7b0JBQUVOLFdBQVU7OEJBQXlDOzs7Ozs7Ozs7Ozs7O0FBUTlEO0dBNUNNYjtLQUFBQTtBQThDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LnRzeD9jMTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIENhcmRQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBidXR0b25UZXh0OiBzdHJpbmc7XHJcbiAgb25NYWtlTm9pc2U6ICgpID0+IHZvaWQ7XHJcbiAgb25EZWxldGU6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IENhcmQgPSAoeyB0aXRsZSwgYnV0dG9uVGV4dCwgb25NYWtlTm9pc2UsIG9uRGVsZXRlIH06IENhcmRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzaG93VGV4dCwgc2V0U2hvd1RleHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtob3ZlcmVkLCBzZXRIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZU1ha2VOb2lzZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgb25NYWtlTm9pc2UoKTtcclxuICAgIHNldFNob3dUZXh0KHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRTaG93VGV4dChmYWxzZSksIDIwMDApOyAvLyBoaWRlIHRleHQgYWZ0ZXIgMiBzZWNvbmRzXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBvbkRlbGV0ZSgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTQgbS00IGZsZXgganVzdGlmeS1iZXR3ZWVuXCIgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkKHRydWUpfVxyXG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyZWQoZmFsc2UpfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSBtYi00XCI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlTWFrZU5vaXNlQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2J1dHRvblRleHR9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAge2hvdmVyZWQgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgbWwtNFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUNsaWNrfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd1RleHQgJiYgKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1zbSBtdC0yIHNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICB0ZXN0XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2FyZCIsInRpdGxlIiwiYnV0dG9uVGV4dCIsIm9uTWFrZU5vaXNlIiwib25EZWxldGUiLCJzaG93VGV4dCIsInNldFNob3dUZXh0IiwiaG92ZXJlZCIsInNldEhvdmVyZWQiLCJoYW5kbGVNYWtlTm9pc2VDbGljayIsInNldFRpbWVvdXQiLCJoYW5kbGVEZWxldGVDbGljayIsImRpdiIsImNsYXNzTmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImgyIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Card/index.tsx\n"));

/***/ })

});