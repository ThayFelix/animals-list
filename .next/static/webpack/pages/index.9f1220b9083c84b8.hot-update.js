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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnimalsView\": function() { return /* binding */ AnimalsView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction AnimalsView(param) {\n    let { animals  } = param;\n    _s();\n    const [animal, setAnimal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleAddCardClick = ()=>{\n        const id = Math.floor(Math.random() * 1000);\n        const newAnimal = {\n            id\n        };\n        setAnimal([\n            ...animals,\n            newAnimal\n        ]);\n    };\n    const handleDeleteCardClick = (id)=>{\n        setAnimal(animals.filter((animal)=>animal.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            maxWidth: 800\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-disc\",\n                children: animals.map((animal)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: animal.name,\n                        buttonText: \"Make noise\",\n                        onButtonClick: ()=>console.log(\"cliquei\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mx-4\",\n                onClick: handleAddCardClick,\n                children: \"Add new animal\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(AnimalsView, \"SYoI4fpuQQ4kMujkUAIkQmmByXA=\");\n_c = AnimalsView;\nvar _c;\n$RefreshReg$(_c, \"AnimalsView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYW5pbWFscy92aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QztBQUVIO0FBRTdCLFNBQVNHLFlBQVksS0FJM0IsRUFBRTtRQUp5QixFQUMxQkMsUUFBTyxFQUdSLEdBSjJCOztJQU0xQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQVcsRUFBRTtJQUVqRCxNQUFNTSxxQkFBcUIsSUFBTTtRQUMvQixNQUFNQyxLQUFLQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSztRQUN0QyxNQUFNQyxZQUFZO1lBQUVKO1FBQUc7UUFDdkJGLFVBQVU7ZUFBSUY7WUFBU1E7U0FBVTtJQUNuQztJQUVBLE1BQU1DLHdCQUF3QixDQUFDTCxLQUFlO1FBQzVDRixVQUFVRixRQUFRVSxNQUFNLENBQUMsQ0FBQ1QsU0FBV0EsT0FBT0csRUFBRSxLQUFLQTtJQUNyRDtJQUNBLHFCQUNFLDhEQUFDTztRQUFJQyxPQUFPO1lBQUVDLFVBQVU7UUFBSTs7MEJBQzFCLDhEQUFDQztnQkFBR0MsV0FBVTswQkFDWGYsUUFBUWdCLEdBQUcsQ0FBQyxDQUFDZix1QkFDWiw4REFBQ0gsd0RBQUlBO3dCQUFDbUIsT0FBT2hCLE9BQU9pQixJQUFJO3dCQUFFQyxZQUFXO3dCQUFhQyxlQUFlLElBQU1DLFFBQVFDLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7MEJBT3ZGLDhEQUFDQztnQkFDQ1IsV0FBVTtnQkFDVlMsU0FBU3JCOzBCQUNWOzs7Ozs7Ozs7Ozs7QUFLUCxDQUFDO0dBcENlSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYW5pbWFscy92aWV3LnRzeD9lODcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQW5pbWFsIH0gZnJvbSAnQC9saWIvYW5pbWFscydcbmltcG9ydCBDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9DYXJkJ1xuXG5leHBvcnQgZnVuY3Rpb24gQW5pbWFsc1ZpZXcoe1xuICBhbmltYWxzLFxufToge1xuICBhbmltYWxzOiBBbmltYWxbXVxufSkge1xuXG4gIGNvbnN0IFthbmltYWwsIHNldEFuaW1hbF0gPSB1c2VTdGF0ZTxBbmltYWxbXT4oW10pO1xuXG4gIGNvbnN0IGhhbmRsZUFkZENhcmRDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgIGNvbnN0IG5ld0FuaW1hbCA9IHsgaWQgfTtcbiAgICBzZXRBbmltYWwoWy4uLmFuaW1hbHMsIG5ld0FuaW1hbF0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNhcmRDbGljayA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0QW5pbWFsKGFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IGFuaW1hbC5pZCAhPT0gaWQpKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiA4MDAgfX0+XG4gICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0LWRpc2MnPlxuICAgICAgICB7YW5pbWFscy5tYXAoKGFuaW1hbCkgPT4gKFxuICAgICAgICAgIDxDYXJkIHRpdGxlPXthbmltYWwubmFtZX0gYnV0dG9uVGV4dD1cIk1ha2Ugbm9pc2VcIiBvbkJ1dHRvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnY2xpcXVlaScpfSAvPlxuXG4gICAgICAgICAgLy8gPGxpIGtleT17YW5pbWFsLmlkfT5cbiAgICAgICAgICAvLyAgICB7YW5pbWFsLm5hbWV9XG4gICAgICAgICAgLy8gIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgbXQtNCBteC00XCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQWRkQ2FyZENsaWNrfVxuICAgICAgPlxuICAgICAgICBBZGQgbmV3IGFuaW1hbFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2FyZCIsIkFuaW1hbHNWaWV3IiwiYW5pbWFscyIsImFuaW1hbCIsInNldEFuaW1hbCIsImhhbmRsZUFkZENhcmRDbGljayIsImlkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibmV3QW5pbWFsIiwiaGFuZGxlRGVsZXRlQ2FyZENsaWNrIiwiZmlsdGVyIiwiZGl2Iiwic3R5bGUiLCJtYXhXaWR0aCIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwidGl0bGUiLCJuYW1lIiwiYnV0dG9uVGV4dCIsIm9uQnV0dG9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/animals/view.tsx\n"));

/***/ })

});