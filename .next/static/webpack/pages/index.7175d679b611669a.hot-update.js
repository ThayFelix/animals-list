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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Card = (param)=>{\n    let { title , buttonText , onButtonClick  } = param;\n    _s();\n    const [showText, setShowText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        onButtonClick();\n        setShowText(true);\n    //setTimeout(() => setShowText(false), 2000); // hide text after 2 seconds\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border border-gray-300 p-4 m-4 flex mb-4 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-lg font-medium mb-4 w-3/4  h-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg font-medium \",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded\",\n                        onClick: handleClick,\n                        children: buttonText\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            showText && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-600 text-sm mt-2 w-1/4 h-12\",\n                children: \"test\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Card, \"zALVG9dRqkZEtsE6RTdxJ4IWmsE=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBUXhDLE1BQU1FLE9BQU8sU0FBcUQ7UUFBcEQsRUFBRUMsTUFBSyxFQUFFQyxXQUFVLEVBQUVDLGNBQWEsRUFBYTs7SUFDM0QsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDLEtBQUs7SUFDOUMsTUFBTU8sY0FBYyxJQUFNO1FBQ3hCSDtRQUNBRSxZQUFZLElBQUk7SUFDaEIsMEVBQTBFO0lBQzVFO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUF3QlA7Ozs7OztrQ0FDdEMsOERBQUNTO3dCQUNDRixXQUFVO3dCQUNWRyxTQUFTTDtrQ0FFUko7Ozs7Ozs7Ozs7OztZQUdKRSwwQkFDQyw4REFBQ1E7Z0JBQUVKLFdBQVU7MEJBQXdDOzs7Ozs7Ozs7Ozs7QUFNN0Q7R0ExQk1SO0tBQUFBO0FBNEJOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcmQvaW5kZXgudHN4P2MxM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ2FyZFByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGJ1dHRvblRleHQ6IHN0cmluZztcclxuICBvbkJ1dHRvbkNsaWNrOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBDYXJkID0gKHsgdGl0bGUsIGJ1dHRvblRleHQsIG9uQnV0dG9uQ2xpY2sgfTogQ2FyZFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dUZXh0LCBzZXRTaG93VGV4dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBvbkJ1dHRvbkNsaWNrKCk7XHJcbiAgICBzZXRTaG93VGV4dCh0cnVlKTtcclxuICAgIC8vc2V0VGltZW91dCgoKSA9PiBzZXRTaG93VGV4dChmYWxzZSksIDIwMDApOyAvLyBoaWRlIHRleHQgYWZ0ZXIgMiBzZWNvbmRzXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTQgbS00IGZsZXggbWItNCBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIG1iLTQgdy0zLzQgIGgtMTJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSBcIj57dGl0bGV9PC9oMj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7YnV0dG9uVGV4dH1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93VGV4dCAmJiAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIG10LTIgdy0xLzQgaC0xMlwiPlxyXG4gICAgICAgICAgdGVzdFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2FyZCIsInRpdGxlIiwiYnV0dG9uVGV4dCIsIm9uQnV0dG9uQ2xpY2siLCJzaG93VGV4dCIsInNldFNob3dUZXh0IiwiaGFuZGxlQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Card/index.tsx\n"));

/***/ })

});