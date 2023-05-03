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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnimalsView\": function() { return /* binding */ AnimalsView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card/index.tsx\");\n/* harmony import */ var _providers_AnimalProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/providers/AnimalProvider */ \"./src/providers/AnimalProvider.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction AnimalsView() {\n    _s();\n    const animals = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_providers_AnimalProvider__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            maxWidth: 800\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-disc\",\n                children: animals.map((animal)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: animal.name,\n                        buttonText: \"Make noise\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mx-4\",\n                onClick: ()=>console.log(\"adiciona animal random\"),\n                children: \"Add new animal\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(AnimalsView, \"G9HeiLJobYaWBiH4nwa3tygm8d0=\");\n_c = AnimalsView;\nvar _c;\n$RefreshReg$(_c, \"AnimalsView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYW5pbWFscy92aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNvQjtBQUVqRCxTQUFTSSxjQUFjOztJQUU1QixNQUFNQyxVQUFVSixpREFBVUEsQ0FBQ0UsaUVBQWNBO0lBRXpDLHFCQUNFLDhEQUFDRztRQUFJQyxPQUFPO1lBQUVDLFVBQVU7UUFBSTs7MEJBQzFCLDhEQUFDQztnQkFBR0MsV0FBVTswQkFDWEwsUUFBUU0sR0FBRyxDQUFDLENBQUNDLHVCQUNaLDhEQUFDVix3REFBSUE7d0JBQUNXLE9BQU9ELE9BQU9FLElBQUk7d0JBQUVDLFlBQVc7Ozs7Ozs7Ozs7OzBCQUd6Qyw4REFBQ0M7Z0JBQ0NOLFdBQVU7Z0JBQ1ZPLFNBQVMsSUFBTUMsUUFBUUMsR0FBRyxDQUFDOzBCQUM1Qjs7Ozs7Ozs7Ozs7O0FBS1AsQ0FBQztHQW5CZWY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FuaW1hbHMvdmlldy50c3g/ZTg3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9DYXJkJ1xuaW1wb3J0IEFuaW1hbFByb3ZpZGVyIGZyb20gJ0AvcHJvdmlkZXJzL0FuaW1hbFByb3ZpZGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIEFuaW1hbHNWaWV3KCkge1xuXG4gIGNvbnN0IGFuaW1hbHMgPSB1c2VDb250ZXh0KEFuaW1hbFByb3ZpZGVyKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6IDgwMCB9fT5cbiAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3QtZGlzYyc+XG4gICAgICAgIHthbmltYWxzLm1hcCgoYW5pbWFsKSA9PiAoXG4gICAgICAgICAgPENhcmQgdGl0bGU9e2FuaW1hbC5uYW1lfSBidXR0b25UZXh0PVwiTWFrZSBub2lzZVwiIC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgbXQtNCBteC00XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ2FkaWNpb25hIGFuaW1hbCByYW5kb20nKX1cbiAgICAgID5cbiAgICAgICAgQWRkIG5ldyBhbmltYWxcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiQ2FyZCIsIkFuaW1hbFByb3ZpZGVyIiwiQW5pbWFsc1ZpZXciLCJhbmltYWxzIiwiZGl2Iiwic3R5bGUiLCJtYXhXaWR0aCIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwiYW5pbWFsIiwidGl0bGUiLCJuYW1lIiwiYnV0dG9uVGV4dCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/animals/view.tsx\n"));

/***/ })

});