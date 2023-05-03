"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Card/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Card/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Card = ({ name , id , onDelete  })=>{\n    const [showText, setShowText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleMakeNoiseClick = ()=>{\n        setShowText(true);\n        setTimeout(()=>setShowText(false), 2000); // hide text after 2 seconds\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"border border-gray-300 p-4 m-4 flex justify-between\",\n            onMouseEnter: ()=>setHovered(true),\n            onMouseLeave: ()=>setHovered(false),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg font-medium mb-4\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded\",\n                            onClick: handleMakeNoiseClick,\n                            children: \"Make Noise\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        }, undefined),\n                        hovered && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4 \",\n                            onClick: onDelete,\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, undefined),\n                showText && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-gray-600 text-sm mt-2 self-center\",\n                    children: \"Oink\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\components\\\\Card\\\\index.tsx\",\n            lineNumber: 21,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFReEMsTUFBTUUsT0FBTyxDQUFDLEVBQUVDLEtBQUksRUFBRUMsR0FBRSxFQUFFQyxTQUFRLEVBQWEsR0FBSztJQUNsRCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsS0FBSztJQUM5QyxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUc1QyxNQUFNUyx1QkFBdUIsSUFBTTtRQUNqQ0gsWUFBWSxJQUFJO1FBQ2hCSSxXQUFXLElBQU1KLFlBQVksS0FBSyxHQUFHLE9BQU8sNEJBQTRCO0lBQzFFO0lBR0EscUJBQVE7a0JBQ04sNEVBQUNLO1lBQUlDLFdBQVU7WUFDYkMsY0FBYyxJQUFNTCxXQUFXLElBQUk7WUFDbkNNLGNBQWMsSUFBTU4sV0FBVyxLQUFLOzs4QkFFcEMsOERBQUNHOztzQ0FDQyw4REFBQ0k7NEJBQUdILFdBQVU7c0NBQTRCVjs7Ozs7O3NDQUMxQyw4REFBQ2M7NEJBQ0NKLFdBQVU7NEJBQ1ZLLFNBQVNSO3NDQUNWOzs7Ozs7d0JBR0FGLHlCQUNDLDhEQUFDUzs0QkFDQ0osV0FBVTs0QkFDVkssU0FBU2I7c0NBQ1Y7Ozs7Ozs7Ozs7OztnQkFLSkMsMEJBQ0MsOERBQUNhO29CQUFFTixXQUFVOzhCQUF5Qzs7Ozs7Ozs7Ozs7OztBQVE5RDtBQUVBLGlFQUFlWCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtZW5kLWludGVydmlldy8uL3NyYy9jb21wb25lbnRzL0NhcmQvaW5kZXgudHN4P2MxM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIENhcmRQcm9wcyA9IHtcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgaWQ6IG51bWJlcixcclxuICBvbkRlbGV0ZTogKCkgPT4gdm9pZCxcclxufVxyXG5cclxuY29uc3QgQ2FyZCA9ICh7IG5hbWUsIGlkLCBvbkRlbGV0ZSB9OiBDYXJkUHJvcHMpID0+IHtcclxuICBjb25zdCBbc2hvd1RleHQsIHNldFNob3dUZXh0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaG92ZXJlZCwgc2V0SG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVNYWtlTm9pc2VDbGljayA9ICgpID0+IHtcclxuICAgIHNldFNob3dUZXh0KHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRTaG93VGV4dChmYWxzZSksIDIwMDApOyAvLyBoaWRlIHRleHQgYWZ0ZXIgMiBzZWNvbmRzXHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiAoPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTQgbS00IGZsZXgganVzdGlmeS1iZXR3ZWVuXCJcclxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkKHRydWUpfVxyXG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyZWQoZmFsc2UpfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIG1iLTRcIj57bmFtZX08L2gyPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1ha2VOb2lzZUNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE1ha2UgTm9pc2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7aG92ZXJlZCAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTYwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBtbC00IFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uRGVsZXRlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd1RleHQgJiYgKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1zbSBtdC0yIHNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICBPaW5rXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2FyZCIsIm5hbWUiLCJpZCIsIm9uRGVsZXRlIiwic2hvd1RleHQiLCJzZXRTaG93VGV4dCIsImhvdmVyZWQiLCJzZXRIb3ZlcmVkIiwiaGFuZGxlTWFrZU5vaXNlQ2xpY2siLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Card/index.tsx\n");

/***/ }),

/***/ "./src/lib/animals/data.ts":
/*!*********************************!*\
  !*** ./src/lib/animals/data.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialAnimals\": () => (/* binding */ initialAnimals)\n/* harmony export */ });\nconst initialAnimals = [\n    {\n        id: 1,\n        type: \"pig\",\n        name: \"Stinky\"\n    },\n    {\n        id: 2,\n        type: \"cow\",\n        name: \"Spotty\"\n    },\n    {\n        id: 3,\n        type: \"cow\",\n        name: \"Betsy\"\n    },\n    {\n        id: 4,\n        type: \"sheep\",\n        name: \"Wooly\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2FuaW1hbHMvZGF0YS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sTUFBTUEsaUJBQTJCO0lBQ3RDO1FBQ0VDLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC1pbnRlcnZpZXcvLi9zcmMvbGliL2FuaW1hbHMvZGF0YS50cz9lMjgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hbCB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBpbml0aWFsQW5pbWFsczogQW5pbWFsW10gPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0eXBlOiAncGlnJyxcbiAgICBuYW1lOiAnU3Rpbmt5JyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHR5cGU6ICdjb3cnLFxuICAgIG5hbWU6ICdTcG90dHknLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdHlwZTogJ2NvdycsXG4gICAgbmFtZTogJ0JldHN5JyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHR5cGU6ICdzaGVlcCcsXG4gICAgbmFtZTogJ1dvb2x5JyxcbiAgfVxuXSJdLCJuYW1lcyI6WyJpbml0aWFsQW5pbWFscyIsImlkIiwidHlwZSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/animals/data.ts\n");

/***/ }),

/***/ "./src/lib/animals/index.ts":
/*!**********************************!*\
  !*** ./src/lib/animals/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/lib/animals/data.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _data__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _data__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/lib/animals/types.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _types__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2FuaW1hbHMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNCO0FBQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQtaW50ZXJ2aWV3Ly4vc3JjL2xpYi9hbmltYWxzL2luZGV4LnRzP2ZlOWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9kYXRhJ1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcydcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/animals/index.ts\n");

/***/ }),

/***/ "./src/lib/animals/types.ts":
/*!**********************************!*\
  !*** ./src/lib/animals/types.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2FuaW1hbHMvdHlwZXMudHMuanMiLCJtYXBwaW5ncyI6IjtBQU1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtZW5kLWludGVydmlldy8uL3NyYy9saWIvYW5pbWFscy90eXBlcy50cz80YmQxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIEFuaW1hbFR5cGUgPSAncGlnJyB8ICdjb3cnIHwgJ3NoZWVwJ1xuXG5leHBvcnQgdHlwZSBBbmltYWwgPSB7XG4gIGlkOiBudW1iZXJcbiAgdHlwZTogQW5pbWFsVHlwZVxuICBuYW1lOiBzdHJpbmdcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/animals/types.ts\n");

/***/ }),

/***/ "./src/pages/animals/index.ts":
/*!************************************!*\
  !*** ./src/pages/animals/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnimalsView\": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_0__.AnimalsView)\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/pages/animals/view.tsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYW5pbWFscy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC1pbnRlcnZpZXcvLi9zcmMvcGFnZXMvYW5pbWFscy9pbmRleC50cz8xMGRhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IEFuaW1hbHNWaWV3IH0gZnJvbSAnLi92aWV3JyJdLCJuYW1lcyI6WyJBbmltYWxzVmlldyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/animals/index.ts\n");

/***/ }),

/***/ "./src/pages/animals/view.tsx":
/*!************************************!*\
  !*** ./src/pages/animals/view.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnimalsView\": () => (/* binding */ AnimalsView)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card/index.tsx\");\n/* harmony import */ var _providers_AnimalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/providers/AnimalContext */ \"./src/providers/AnimalContext.tsx\");\n\n\n\n\nfunction AnimalsView() {\n    const { addAnimal , animals , removeAnimal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_providers_AnimalContext__WEBPACK_IMPORTED_MODULE_3__.AnimalContext);\n    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            maxWidth: 800\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-disc\",\n                children: animals.map((animal)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: animal.name,\n                        id: animal.id,\n                        onDelete: ()=>removeAnimal(animal.id)\n                    }, animal.id, false, {\n                        fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mx-4\",\n                onClick: ()=>addAnimal(randomAnimal),\n                children: \"Add new animal\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\animals\\\\view.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYW5pbWFscy92aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNMO0FBQ3NCO0FBRW5ELFNBQVNJLGNBQWM7SUFDNUIsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFFBQU8sRUFBRUMsYUFBWSxFQUFFLEdBQUdOLGlEQUFVQSxDQUFDRSxtRUFBYUE7SUFFckUsTUFBTUssZUFBZUYsT0FBTyxDQUFDRyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS0wsUUFBUU0sTUFBTSxFQUFFO0lBRXhFLHFCQUNFLDhEQUFDQztRQUFJQyxPQUFPO1lBQUVDLFVBQVU7UUFBSTs7MEJBQzFCLDhEQUFDQztnQkFBR0MsV0FBVTswQkFDWFgsUUFBUVksR0FBRyxDQUFDLENBQUNDLHVCQUNaLDhEQUFDakIsd0RBQUlBO3dCQUFpQmtCLE1BQU1ELE9BQU9DLElBQUk7d0JBQUVDLElBQUlGLE9BQU9FLEVBQUU7d0JBQUVDLFVBQVUsSUFBTWYsYUFBYVksT0FBT0UsRUFBRTt1QkFBbkZGLE9BQU9FLEVBQUU7Ozs7Ozs7Ozs7MEJBSXhCLDhEQUFDRTtnQkFDQ04sV0FBVTtnQkFDVk8sU0FBUyxJQUFNbkIsVUFBVUc7MEJBQzFCOzs7Ozs7Ozs7Ozs7QUFLUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtZW5kLWludGVydmlldy8uL3NyYy9wYWdlcy9hbmltYWxzL3ZpZXcudHN4P2U4NzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9DYXJkJ1xuaW1wb3J0IHsgQW5pbWFsQ29udGV4dCB9IGZyb20gJ0AvcHJvdmlkZXJzL0FuaW1hbENvbnRleHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gQW5pbWFsc1ZpZXcoKSB7XG4gIGNvbnN0IHsgYWRkQW5pbWFsLCBhbmltYWxzLCByZW1vdmVBbmltYWwgfSA9IHVzZUNvbnRleHQoQW5pbWFsQ29udGV4dCk7XG5cbiAgY29uc3QgcmFuZG9tQW5pbWFsID0gYW5pbWFsc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbmltYWxzLmxlbmd0aCldO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogODAwIH19PlxuICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdC1kaXNjJz5cbiAgICAgICAge2FuaW1hbHMubWFwKChhbmltYWwpID0+IChcbiAgICAgICAgICA8Q2FyZCBrZXk9e2FuaW1hbC5pZH0gbmFtZT17YW5pbWFsLm5hbWV9IGlkPXthbmltYWwuaWR9IG9uRGVsZXRlPXsoKSA9PiByZW1vdmVBbmltYWwoYW5pbWFsLmlkKX0gLz5cblxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIG10LTQgbXgtNFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEFuaW1hbChyYW5kb21BbmltYWwpfVxuICAgICAgPlxuICAgICAgICBBZGQgbmV3IGFuaW1hbFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJDYXJkIiwiQW5pbWFsQ29udGV4dCIsIkFuaW1hbHNWaWV3IiwiYWRkQW5pbWFsIiwiYW5pbWFscyIsInJlbW92ZUFuaW1hbCIsInJhbmRvbUFuaW1hbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImRpdiIsInN0eWxlIiwibWF4V2lkdGgiLCJ1bCIsImNsYXNzTmFtZSIsIm1hcCIsImFuaW1hbCIsIm5hbWUiLCJpZCIsIm9uRGVsZXRlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/animals/view.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _animals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animals */ \"./src/pages/animals/index.ts\");\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: `min-h-screen p-24`,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold text-left my-8 m-4\",\n                children: \"Animals\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animals__WEBPACK_IMPORTED_MODULE_2__.AnimalsView, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\thayn\\\\Downloads\\\\front-end-interview\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDYztBQUV4QixTQUFTRSxPQUFPO0lBQzdCLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFXLENBQUMsaUJBQWlCLENBQUM7OzBCQUU5Qiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXdDOzs7Ozs7MEJBQ3RELDhEQUFDSCxpREFBV0E7Ozs7Ozs7Ozs7O0FBR2xCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQtaW50ZXJ2aWV3Ly4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFuaW1hbHNWaWV3IH0gZnJvbSAnLi9hbmltYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxtYWluXG4gICAgICBjbGFzc05hbWU9e2BtaW4taC1zY3JlZW4gcC0yNGB9XG4gICAgPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWxlZnQgbXktOCBtLTRcIj5BbmltYWxzPC9oMT5cbiAgICAgIDxBbmltYWxzVmlldyAvPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQW5pbWFsc1ZpZXciLCJIb21lIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/providers/AnimalContext.tsx":
/*!*****************************************!*\
  !*** ./src/providers/AnimalContext.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnimalContext\": () => (/* binding */ AnimalContext),\n/* harmony export */   \"contextDefaultValues\": () => (/* binding */ contextDefaultValues)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_animals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/animals */ \"./src/lib/animals/index.ts\");\n\n\nconst contextDefaultValues = {\n    addAnimal: ()=>{},\n    removeAnimal: ()=>{},\n    animals: _lib_animals__WEBPACK_IMPORTED_MODULE_1__.initialAnimals\n};\nconst AnimalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(contextDefaultValues);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvdmlkZXJzL0FuaW1hbENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDO0FBQ2dCO0FBUS9DLE1BQU1FLHVCQUE0QztJQUN2REMsV0FBVyxJQUFNLENBQUU7SUFDbkJDLGNBQWMsSUFBTSxDQUFFO0lBQ3RCQyxTQUFTSix3REFBY0E7QUFDekIsRUFBQztBQUVNLE1BQU1LLDhCQUFnQk4sb0RBQWFBLENBQ3hDRSxzQkFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC1pbnRlcnZpZXcvLi9zcmMvcHJvdmlkZXJzL0FuaW1hbENvbnRleHQudHN4P2IwN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQW5pbWFsLCBpbml0aWFsQW5pbWFscyB9IGZyb20gJ0AvbGliL2FuaW1hbHMnXHJcblxyXG5pbnRlcmZhY2UgQW5pbWFsc0NvbnRleHRQcm9wcyB7XHJcbiAgYWRkQW5pbWFsOiAobmV3QW5pbWFsOiBBbmltYWwpID0+IHZvaWQ7XHJcbiAgcmVtb3ZlQW5pbWFsOiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcclxuICBhbmltYWxzOiBBbmltYWxbXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRleHREZWZhdWx0VmFsdWVzOiBBbmltYWxzQ29udGV4dFByb3BzID0ge1xyXG4gIGFkZEFuaW1hbDogKCkgPT4geyB9LFxyXG4gIHJlbW92ZUFuaW1hbDogKCkgPT4geyB9LFxyXG4gIGFuaW1hbHM6IGluaXRpYWxBbmltYWxzLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQW5pbWFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QW5pbWFsc0NvbnRleHRQcm9wcz4oXHJcbiAgY29udGV4dERlZmF1bHRWYWx1ZXNcclxuKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsImluaXRpYWxBbmltYWxzIiwiY29udGV4dERlZmF1bHRWYWx1ZXMiLCJhZGRBbmltYWwiLCJyZW1vdmVBbmltYWwiLCJhbmltYWxzIiwiQW5pbWFsQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/providers/AnimalContext.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();