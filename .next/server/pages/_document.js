(function() {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.js":
/*!********************************!*\
  !*** ./src/pages/_document.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyDocument; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\project\\portfolio all project\\portfoliodemo4\\portfolio\\src\\pages\\_document.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
  static async getInitialProps(ctx) {
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__.ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 33
        }, this))
      });

      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);
      return _objectSpread(_objectSpread({}, initialProps), {}, {
        styles: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [initialProps.styles, sheet.getStyleElement()]
        }, void 0, true)
      });
    } finally {
      sheet.seal();
    }
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      lang: "en-GB",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "title",
          content: "Rakibul Islam , Web developer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "description",
          content: "Hey there, This is Rakibul Islam. I am a Full-stack web developer who also works on Blockchain and mobile apps development."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          property: "og:type",
          content: "website"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          property: "og:title",
          content: "Rakibul islam - Web Dev"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          property: "og:description",
          content: " Hey there, This is Rakibul Islam. I am a Full-stack web developer who also works on Blockchain and mobile apps development."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          property: "twitter:card",
          content: "summary_large_image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          property: "twitter:title",
          content: "Vipul Jha - Android & Flutter Dev"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          property: "twitter:description",
          content: "Hey there, This is Rakibul Islam. I am a Full-stack web developer who also works on Blockchain and mobile apps development."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this);
  }

}

/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_document_js"], function() { return __webpack_exec__("./src/pages/_document.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJNeURvY3VtZW50IiwiRG9jdW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJzaGVldCIsIlNlcnZlclN0eWxlU2hlZXQiLCJvcmlnaW5hbFJlbmRlclBhZ2UiLCJyZW5kZXJQYWdlIiwiZW5oYW5jZUFwcCIsIkFwcCIsInByb3BzIiwiY29sbGVjdFN0eWxlcyIsImluaXRpYWxQcm9wcyIsInN0eWxlcyIsImdldFN0eWxlRWxlbWVudCIsInNlYWwiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxNQUFNQSxVQUFOLFNBQXlCQyxzREFBekIsQ0FBa0M7QUFDL0MsZUFBYUMsZUFBYixDQUE2QkMsR0FBN0IsRUFBa0M7QUFDaEMsVUFBTUMsS0FBSyxHQUFHLElBQUlDLCtEQUFKLEVBQWQ7QUFDQSxVQUFNQyxrQkFBa0IsR0FBR0gsR0FBRyxDQUFDSSxVQUEvQjs7QUFFQSxRQUFJO0FBQ0ZKLFNBQUcsQ0FBQ0ksVUFBSixHQUFpQixNQUNmRCxrQkFBa0IsQ0FBQztBQUNqQkUsa0JBQVUsRUFBR0MsR0FBRCxJQUFVQyxLQUFELElBQ25CTixLQUFLLENBQUNPLGFBQU4sZUFBb0IsOERBQUMsR0FBRCxvQkFBU0QsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFwQjtBQUZlLE9BQUQsQ0FEcEI7O0FBTUEsWUFBTUUsWUFBWSxHQUFHLE1BQU1YLG9FQUFBLENBQXlCRSxHQUF6QixDQUEzQjtBQUNBLDZDQUNLUyxZQURMO0FBRUVDLGNBQU0sZUFDSjtBQUFBLHFCQUNHRCxZQUFZLENBQUNDLE1BRGhCLEVBRUdULEtBQUssQ0FBQ1UsZUFBTixFQUZIO0FBQUE7QUFISjtBQVNELEtBakJELFNBaUJVO0FBQ1JWLFdBQUssQ0FBQ1csSUFBTjtBQUNEO0FBQ0Y7O0FBQ0RDLFFBQU0sR0FBRztBQUNQLHdCQUNFLDhEQUFDLCtDQUFEO0FBQU0sVUFBSSxFQUFDLE9BQVg7QUFBQSw4QkFDRSw4REFBQywrQ0FBRDtBQUFBLGdDQUNFO0FBQU0sY0FBSSxFQUFDLDBGQUFYO0FBQXNHLGFBQUcsRUFBQztBQUExRztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxjQUFJLEVBQUMsT0FBWDtBQUFtQixpQkFBTyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFNLGNBQUksRUFBQyxhQUFYO0FBQXlCLGlCQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQUlFO0FBQU0sa0JBQVEsRUFBQyxTQUFmO0FBQXlCLGlCQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQUtFO0FBQU0sa0JBQVEsRUFBQyxVQUFmO0FBQTBCLGlCQUFPLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQU1FO0FBQU0sa0JBQVEsRUFBQyxnQkFBZjtBQUFnQyxpQkFBTyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsZUFRRTtBQUFNLGtCQUFRLEVBQUMsY0FBZjtBQUE4QixpQkFBTyxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsZUFTRTtBQUFNLGtCQUFRLEVBQUMsZUFBZjtBQUErQixpQkFBTyxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEYsZUFVRTtBQUFNLGtCQUFRLEVBQUMscUJBQWY7QUFBcUMsaUJBQU8sRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBY0U7QUFBQSxnQ0FDRSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQXFCRDs7QUFoRDhDLEM7Ozs7Ozs7Ozs7O0FDSGpELG9FOzs7Ozs7Ozs7OztBQ0FBLDJFOzs7Ozs7Ozs7OztBQ0FBLCtFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDRFOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19kb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2N1bWVudCwgeyBIZWFkLCBIdG1sLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCdcclxuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgY29uc3Qgc2hlZXQgPSBuZXcgU2VydmVyU3R5bGVTaGVldCgpXHJcbiAgICBjb25zdCBvcmlnaW5hbFJlbmRlclBhZ2UgPSBjdHgucmVuZGVyUGFnZVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cclxuICAgICAgICBvcmlnaW5hbFJlbmRlclBhZ2Uoe1xyXG4gICAgICAgICAgZW5oYW5jZUFwcDogKEFwcCkgPT4gKHByb3BzKSA9PlxyXG4gICAgICAgICAgICBzaGVldC5jb2xsZWN0U3R5bGVzKDxBcHAgey4uLnByb3BzfSAvPiksXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uaW5pdGlhbFByb3BzLFxyXG4gICAgICAgIHN0eWxlczogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge2luaXRpYWxQcm9wcy5zdHlsZXN9XHJcbiAgICAgICAgICAgIHtzaGVldC5nZXRTdHlsZUVsZW1lbnQoKX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICksXHJcbiAgICAgIH1cclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNoZWV0LnNlYWwoKVxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SHRtbCBsYW5nPSdlbi1HQic+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD1cIlJha2lidWwgSXNsYW0gLCBXZWIgZGV2ZWxvcGVyXCIgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJIZXkgdGhlcmUsIFRoaXMgaXMgUmFraWJ1bCBJc2xhbS4gSSBhbSBhIEZ1bGwtc3RhY2sgd2ViIGRldmVsb3BlciB3aG8gYWxzbyB3b3JrcyBvbiBCbG9ja2NoYWluIGFuZCBtb2JpbGUgYXBwcyBkZXZlbG9wbWVudC5cIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJSYWtpYnVsIGlzbGFtIC0gV2ViIERldlwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIiBIZXkgdGhlcmUsIFRoaXMgaXMgUmFraWJ1bCBJc2xhbS4gSSBhbSBhIEZ1bGwtc3RhY2sgd2ViIGRldmVsb3BlciB3aG8gYWxzbyB3b3JrcyBvbiBCbG9ja2NoYWluIGFuZCBtb2JpbGUgYXBwcyBkZXZlbG9wbWVudC5cIiAvPlxyXG4gICAgICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly93d3cudmlwdWxqaGEuY29tL2ltYWdlcy9iYW5uZXIucG5nXCIgLz4gKi99XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJWaXB1bCBKaGEgLSBBbmRyb2lkICYgRmx1dHRlciBEZXZcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkhleSB0aGVyZSwgVGhpcyBpcyBSYWtpYnVsIElzbGFtLiBJIGFtIGEgRnVsbC1zdGFjayB3ZWIgZGV2ZWxvcGVyIHdobyBhbHNvIHdvcmtzIG9uIEJsb2NrY2hhaW4gYW5kIG1vYmlsZSBhcHBzIGRldmVsb3BtZW50LlwiIC8+XHJcbiAgICAgICAgICB7LyogPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vd3d3LnZpcHVsamhhLmNvbS9pbWFnZXMvYmFubmVyLnBuZ1wiIC8+ICovfVxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Ym9keT5cclxuICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgPC9IdG1sPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9