"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/login/page.jsx":
/*!****************************!*\
  !*** ./app/login/page.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/styles/login.module.css */ \"(app-pages-browser)/./app/ui/styles/login.module.css\");\n/* harmony import */ var _ui_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ui_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ui_styles_global_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/styles/global.module.css */ \"(app-pages-browser)/./app/ui/styles/global.module.css\");\n/* harmony import */ var _ui_styles_global_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ui_styles_global_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/../node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Login = ()=>{\n    _s();\n    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userPassword, setUserPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const validateLogin = ()=>{\n        if (userName.length > 0 && userPassword.length > 0) {\n            localStorage.setItem(\"token\", true);\n            router.push(\"/board\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ui_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_ui_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().data_container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ui_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/stejerina/Documents/Proyectos/react-projects/life-graph/frontend2/app/login/page.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    autoFocus: true,\n                    value: userName,\n                    name: \"userName\",\n                    autoComplete: \"username\",\n                    placeholder: \"Ingresa el mail\",\n                    onChange: (evt)=>{\n                        setUserName(evt.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/stejerina/Documents/Proyectos/react-projects/life-graph/frontend2/app/login/page.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    autoFocus: true,\n                    type: \"password\",\n                    name: \"userPassword\",\n                    autoComplete: \"current-password\",\n                    value: userPassword,\n                    placeholder: \"Ingresa el password\",\n                    onChange: (evt)=>{\n                        setUserPassword(evt.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/stejerina/Documents/Proyectos/react-projects/life-graph/frontend2/app/login/page.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ui_styles_global_module_css__WEBPACK_IMPORTED_MODULE_5___default().block),\n                    onClick: ()=>{\n                        validateLogin(true);\n                    },\n                    children: \"Enter\"\n                }, void 0, false, {\n                    fileName: \"/Users/stejerina/Documents/Proyectos/react-projects/life-graph/frontend2/app/login/page.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/stejerina/Documents/Proyectos/react-projects/life-graph/frontend2/app/login/page.jsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/stejerina/Documents/Proyectos/react-projects/life-graph/frontend2/app/login/page.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Login, \"0v13quhOU88spsfjFb0J1S9nn1k=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVpQztBQUNKO0FBQ3NCO0FBQ1E7QUFDZjtBQUU1QyxNQUFNSyxRQUFROztJQUNaLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNVSxTQUFTTiwwREFBU0E7SUFFeEIsTUFBTU8sZ0JBQWdCO1FBQ3BCLElBQUlMLFNBQVNNLE1BQU0sR0FBRyxLQUFLSixhQUFhSSxNQUFNLEdBQUcsR0FBRztZQUNsREMsYUFBYUMsT0FBTyxDQUFDLFNBQVM7WUFDOUJKLE9BQU9LLElBQUksQ0FBQztRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV2YsOEVBQWdCO2tCQUM5Qiw0RUFBQ2M7WUFBSUMsV0FBV2YsbUZBQXFCOzs4QkFDbkMsOERBQUNjO29CQUFJQyxXQUFXZiwwRUFBWTs4QkFBRTs7Ozs7OzhCQUM5Qiw4REFBQ21CO29CQUNDQyxTQUFTO29CQUNUQyxPQUFPakI7b0JBQ1BrQixNQUFLO29CQUNMQyxjQUFhO29CQUNiQyxhQUFhO29CQUNiQyxVQUFVLENBQUNDO3dCQUNUckIsWUFBWXFCLElBQUlDLE1BQU0sQ0FBQ04sS0FBSztvQkFDOUI7Ozs7Ozs4QkFFRiw4REFBQ0Y7b0JBQ0NDLFNBQVM7b0JBQ1RRLE1BQUs7b0JBQ0xOLE1BQUs7b0JBQ0xDLGNBQWE7b0JBQ2JGLE9BQU9mO29CQUNQa0IsYUFBYTtvQkFDYkMsVUFBVSxDQUFDQzt3QkFDVG5CLGdCQUFnQm1CLElBQUlDLE1BQU0sQ0FBQ04sS0FBSztvQkFDbEM7Ozs7Ozs4QkFFRiw4REFBQ1A7b0JBQ0NDLFdBQVdkLDJFQUFtQjtvQkFDOUI2QixTQUFTO3dCQUNQckIsY0FBYztvQkFDaEI7OEJBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0FoRE1OOztRQUdXRCxzREFBU0E7OztLQUhwQkM7QUFrRE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xvZ2luL3BhZ2UuanN4Pzc3NmEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi91aS9zdHlsZXMvbG9naW4ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IGdlbmVyYWxTdHlsZXMgZnJvbSBcIi4uL3VpL3N0eWxlcy9nbG9iYWwubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3VzZXJQYXNzd29yZCwgc2V0VXNlclBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB2YWxpZGF0ZUxvZ2luID0gKCkgPT4ge1xuICAgIGlmICh1c2VyTmFtZS5sZW5ndGggPiAwICYmIHVzZXJQYXNzd29yZC5sZW5ndGggPiAwKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHRydWUpO1xuICAgICAgcm91dGVyLnB1c2goXCIvYm9hcmRcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhX2NvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkxvZ2luPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgIHZhbHVlPXt1c2VyTmFtZX1cbiAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17XCJJbmdyZXNhIGVsIG1haWxcIn1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4ge1xuICAgICAgICAgICAgc2V0VXNlck5hbWUoZXZ0LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBuYW1lPVwidXNlclBhc3N3b3JkXCJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17dXNlclBhc3N3b3JkfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkluZ3Jlc2EgZWwgcGFzc3dvcmRcIn1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4ge1xuICAgICAgICAgICAgc2V0VXNlclBhc3N3b3JkKGV2dC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2dlbmVyYWxTdHlsZXMuYmxvY2t9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdmFsaWRhdGVMb2dpbih0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgRW50ZXJcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGluayIsInN0eWxlcyIsImdlbmVyYWxTdHlsZXMiLCJ1c2VSb3V0ZXIiLCJMb2dpbiIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJ1c2VyUGFzc3dvcmQiLCJzZXRVc2VyUGFzc3dvcmQiLCJyb3V0ZXIiLCJ2YWxpZGF0ZUxvZ2luIiwibGVuZ3RoIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJkYXRhX2NvbnRhaW5lciIsInRpdGxlIiwiaW5wdXQiLCJhdXRvRm9jdXMiLCJ2YWx1ZSIsIm5hbWUiLCJhdXRvQ29tcGxldGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZXZ0IiwidGFyZ2V0IiwidHlwZSIsImJsb2NrIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.jsx\n"));

/***/ })

});