(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");

var _jsxFileName = "D:\\project\\portfolio all project\\portfoliodemo4\\portfolio\\src\\components\\Acomplishments\\Acomplishments.js";



const data = [{
  number: 20,
  text: 'Open Source Projects'
}, {
  number: 50,
  text: 'Shell Scripts'
}, {
  number: 250000,
  text: 'Downloads'
}, {
  number: 150,
  text: 'Github Stars'
}];

const Acomplishments = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
    children: "Personal Achievements"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Boxes, {
    children: data.map((card, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Box, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxNum, {
        children: `${card.number.toLocaleString('en-IN')}+`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxText, {
        children: card.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, undefined)]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

/***/ }),

/***/ "./src/components/Acomplishments/AcomplishmentsStyles.js":
/*!***************************************************************!*\
  !*** ./src/components/Acomplishments/AcomplishmentsStyles.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boxes": function() { return /* binding */ Boxes; },
/* harmony export */   "Box": function() { return /* binding */ Box; },
/* harmony export */   "BoxNum": function() { return /* binding */ BoxNum; },
/* harmony export */   "BoxText": function() { return /* binding */ BoxText; },
/* harmony export */   "Join": function() { return /* binding */ Join; },
/* harmony export */   "JoinText": function() { return /* binding */ JoinText; },
/* harmony export */   "IconContainer": function() { return /* binding */ IconContainer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Boxes = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Boxes",
  componentId: "vuq5bz-0"
})(["width:100%;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin:24px 0 40px;@media ", "{gap:16px;margin:20px 0 32px;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));}@media ", "{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:500px;margin:24px auto;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Box",
  componentId: "vuq5bz-1"
})(["background:#212D45;border-radius:12px;height:144px;padding:24px;@media ", "{height:210px;}@media ", "{height:135px;padding:16px;}@media ", "{height:110px;padding:12px;&:nth-child(2n){grid-row:2;}}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const BoxNum = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h5.withConfig({
  displayName: "AcomplishmentsStyles__BoxNum",
  componentId: "vuq5bz-2"
})(["font-style:normal;font-weight:600;font-size:36px;line-height:40px;letter-spacing:0.01em;color:#FFFFFF;margin-bottom:8px;@media ", "{font-size:28px;line-height:32px;}@media ", "{font-size:24px;line-height:26px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const BoxText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "AcomplishmentsStyles__BoxText",
  componentId: "vuq5bz-3"
})(["font-style:normal;font-weight:normal;font-size:18px;line-height:24px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:20px;};@media ", "{font-size:14px;line-height:14px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Join = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Join",
  componentId: "vuq5bz-4"
})(["display:flex;max-width:1040px;justify-content:center;align-items:center;padding-bottom:80px;@media ", "{display:flex;justify-content:center;padding-bottom:64px;}@media ", "{display:flex;flex-direction:column;align-items:center;padding-bottom:32px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const JoinText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h5.withConfig({
  displayName: "AcomplishmentsStyles__JoinText",
  componentId: "vuq5bz-5"
})(["display:flex;font-size:24px;line-height:40px;letter-spacing:0.02em;color:rgba(255,255,255,0.5);@media ", "{line-height:32px;font-size:20px;};@media ", "{font-size:16px;line-height:24px;margin:0 0 16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__IconContainer",
  componentId: "vuq5bz-6"
})(["display:flex;@media ", "{width:160px;justify-content:space-between;}"], props => props.theme.breakpoints.sm);

/***/ }),

/***/ "./src/components/BackgrooundAnimation/BackgroundAnimation.js":
/*!********************************************************************!*\
  !*** ./src/components/BackgrooundAnimation/BackgroundAnimation.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\project\\portfolio all project\\portfoliodemo4\\portfolio\\src\\components\\BackgrooundAnimation\\BackgroundAnimation.js";


const BackgroundAnimation = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    className: "BgAnimation__svg",
    viewBox: "0 0 602 602",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      opacity: "0.15",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",
        stroke: "url(#paint0_radial)",
        id: "path_0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",
        stroke: "url(#paint1_radial)",
        id: "path_1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",
        stroke: "url(#paint2_radial)",
        id: "path_2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "295.027",
      cy: "193.118",
      transform: "translate(-295.027 -193.118)",
      rx: "1.07306",
      ry: "1.07433",
      fill: "#945DD6",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M294.685 193.474L268.932 219.258",
      transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
      stroke: "url(#paint3_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "295.027",
      cy: "193.118",
      transform: "translate(-295.027 -193.118)",
      rx: "1.07306",
      ry: "1.07433",
      fill: "#46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M294.685 193.474L268.932 219.258",
      transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
      stroke: "url(#paint7_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "476.525",
      cy: "363.313",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
      fill: "#945DD6",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M476.171 362.952L450.417 337.168",
      transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
      stroke: "url(#paint4_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "382.164",
      cy: "155.029",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-382.164 -155.029) rotate(90 382.164 155.029)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M381.81 154.669L356.057 128.885",
      transform: "translate(-381.81 -154.669) rotate(-45 381.81 154.669)",
      stroke: "url(#paint5_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "333.324",
      cy: "382.691",
      rx: "1.07306",
      ry: "1.07433",
      transform: "translate(-333.324 -382.691) rotate(-180 333.324 382.691)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "0",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M333.667 382.335L359.42 356.551",
      transform: "scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",
      stroke: "url(#paint6_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "0",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "165.524",
      cy: "93.9596",
      rx: "1.07306",
      ry: "1.07433",
      transform: "translate(-165.524 -93.9596)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "3",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M165.182 94.3159L139.429 120.1",
      transform: "translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",
      stroke: "url(#paint7_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "3",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "476.525",
      cy: "363.313",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
      fill: "#13ADC7",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "12s",
        begin: "4",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M476.171 362.952L450.417 337.168",
      transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
      stroke: "url(#paint11_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "12s",
        begin: "4",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint0_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint1_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint2_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint3_linear",
        x1: "295.043",
        y1: "193.116",
        x2: "269.975",
        y2: "218.154",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint4_linear",
        x1: "476.529",
        y1: "363.31",
        x2: "451.461",
        y2: "338.272",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint5_linear",
        x1: "382.168",
        y1: "155.027",
        x2: "357.1",
        y2: "129.989",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint6_linear",
        x1: "333.309",
        y1: "382.693",
        x2: "358.376",
        y2: "357.655",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint7_linear",
        x1: "165.54",
        y1: "93.9578",
        x2: "140.472",
        y2: "118.996",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint8_linear",
        x1: "414.367",
        y1: "301.156",
        x2: "439.435",
        y2: "276.118",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint9_linear",
        x1: "515.943",
        y1: "288.238",
        x2: "541.339",
        y2: "291.454",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint10_linear",
        x1: "117.001",
        y1: "230.619",
        x2: "117.36",
        y2: "258.193",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint11_linear",
        x1: "476.529",
        y1: "363.31",
        x2: "451.461",
        y2: "338.272",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (BackgroundAnimation);

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header/HeaderStyles */ "./src/components/Header/HeaderStyles.js");
/* harmony import */ var _FooterStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FooterStyles */ "./src/components/Footer/FooterStyles.js");

var _jsxFileName = "D:\\project\\portfolio all project\\portfoliodemo4\\portfolio\\src\\components\\Footer\\Footer.js";






const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_4__.FooterWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_4__.LinkList, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_4__.LinkColumn, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_4__.LinkTitle, {
          children: "Chat"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_4__.LinkItem, {
          href: "https://discord.com/invite/B3Wg4Wnc",
          children: "Discord"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_4__.LinkColumn, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_4__.LinkTitle, {
          target: "_blank",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_4__.LinkItem, {
          target: "_blank",
          href: "rakibulislam202019@gmail.com",
          children: "rakibulislam202019@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_4__.SocialIconsContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_4__.CompanyContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_4__.Slogan, {
          children: ["\xA9 2022 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Link, {
            href: "https://www.vipuljha.com",
            children: "Rakibul Islam"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 31
          }, undefined), " . All rights reserved."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_4__.SocialContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
          target: "_blank",
          href: "https://github.com/Rakibul71",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillGithub, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
          target: "_blank",
          href: "https://www.linkedin.com/in/rakibul-islam71?original_referer=https%3A%2F%2Fwww.linkedin.com%2Fin%2Frakibul-islam71",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillLinkedin, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
          href: "#",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillInstagram, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
          href: "#",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillTwitterCircle, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/FooterStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Footer/FooterStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterWrapper": function() { return /* binding */ FooterWrapper; },
/* harmony export */   "LinkItem": function() { return /* binding */ LinkItem; },
/* harmony export */   "SocialIconsContainer": function() { return /* binding */ SocialIconsContainer; },
/* harmony export */   "CompanyContainer": function() { return /* binding */ CompanyContainer; },
/* harmony export */   "Slogan": function() { return /* binding */ Slogan; },
/* harmony export */   "SocialContainer": function() { return /* binding */ SocialContainer; },
/* harmony export */   "LinkList": function() { return /* binding */ LinkList; },
/* harmony export */   "LinkColumn": function() { return /* binding */ LinkColumn; },
/* harmony export */   "LinkTitle": function() { return /* binding */ LinkTitle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "FooterStyles__FooterWrapper",
  componentId: "sc-1ifsifd-0"
})(["width:calc(100vw - 96px);max-width:1040px;padding:2rem 48px 40px;margin:1rem auto;box-sizing:content-box;@media ", "{padding:0 16px 48px;width:calc(100vw - 32px);}"], props => props.theme.breakpoints.sm);
const LinkItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "FooterStyles__LinkItem",
  componentId: "sc-1ifsifd-1"
})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);margin-bottom:16px;transition:.3s ease;position:relative;left:0;&:hover{color:#fff;left:6px;}@media ", "{font-size:17px;line-height:28px;display:flex;}@media ", "{font-size:15px;line-height:14px;margin-bottom:8px;display:flex;align-items:center;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SocialIconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__SocialIconsContainer",
  componentId: "sc-1ifsifd-2"
})(["max-width:1040px;display:flex;justify-content:space-between;@media ", "{display:flex;justify-content:space-between;}@media ", "{display:flex;width:100%;flex-direction:column;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__CompanyContainer",
  componentId: "sc-1ifsifd-3"
})(["display:flex;align-items:baseline;flex-wrap:wrap;margin-right:auto;@media ", "{flex-direction:column;align-items:baseline;}@media ", "{display:flex;flex-direction:column;margin:0 0 32px;align-items:center;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Slogan = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "FooterStyles__Slogan",
  componentId: "sc-1ifsifd-4"
})(["color:rgba(255,255,255,0.5);min-width:280px;letter-spacing:0.02em;font-size:18px;line-height:30px;padding-top:1rem;@media ", "{font-size:17px;line-height:28px;}@media ", "{line-height:22px;font-size:15px;min-width:100px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SocialContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__SocialContainer",
  componentId: "sc-1ifsifd-5"
})(["display:flex;align-items:center;@media ", "{justify-content:center;padding-right:16px;flex-wrap:wrap;}"], props => props.theme.breakpoints.md);
const LinkList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "FooterStyles__LinkList",
  componentId: "sc-1ifsifd-6"
})(["border-top:1px solid rgba(255,255,255,0.1);display:grid;grid-template-columns:repeat(3,minmax(85px,220px));gap:40px;padding:40px 0 28px;@media ", "{padding:32px 0 16px;}@media ", "{width:100%;padding:32px 0 16px;gap:16px;}@media ", "{width:100%;padding:32px 4px 16px;gap:5px;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const LinkColumn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__LinkColumn",
  componentId: "sc-1ifsifd-7"
})(["display:flex;flex-direction:column;max-width:220px;width:100%;"]);
const LinkTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "FooterStyles__LinkTitle",
  componentId: "sc-1ifsifd-8"
})(["font-style:normal;font-weight:600;font-size:12px;line-height:24px;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:16px;@media ", "{font-size:10px;line-height:12px;margin-bottom:8px;}"], props => props.theme.breakpoints.sm);

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _HeaderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderStyles */ "./src/components/Header/HeaderStyles.js");

var _jsxFileName = "D:\\project\\portfolio all project\\portfoliodemo4\\portfolio\\src\\components\\Header\\Header.js";





const Header = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Container, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div1, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        style: {
          display: 'flex',
          alignItems: 'center',
          color: "white"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/logo.svg",
          height: 40,
          width: 40
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            marginLeft: 10,
            marginTop: 7,
            fontSize: 20
          },
          children: "Rakibul Islam"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 58
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div2, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#projects",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#skills",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "Skills"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#about",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://blog.vipuljha.com",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "Blog"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div3, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      target: "_blank",
      href: "https://github.com/Rakibul71",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillGithub, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      target: "_blank",
      href: "https://www.linkedin.com/in/rakibul-islam71?original_referer=https%3A%2F%2Fwww.linkedin.com%2Fin%2Frakibul-islam71",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillLinkedin, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      target: "_blank",
      href: "#",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillInstagram, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      target: "_blank",
      href: "#",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillTwitterCircle, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/HeaderStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Header/HeaderStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Div1": function() { return /* binding */ Div1; },
/* harmony export */   "Div2": function() { return /* binding */ Div2; },
/* harmony export */   "Div3": function() { return /* binding */ Div3; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "ContactDropDown": function() { return /* binding */ ContactDropDown; },
/* harmony export */   "NavProductsIcon": function() { return /* binding */ NavProductsIcon; },
/* harmony export */   "SocialIcons": function() { return /* binding */ SocialIcons; }
/* harmony export */ });
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Container",
  componentId: "sc-9w0vkp-0"
})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ", "{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"], props => props.theme.breakpoints.sm);
const Div1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div1",
  componentId: "sc-9w0vkp-1"
})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ", "{grid-area:1 / 1 / 2 / 3;}"], props => props.theme.breakpoints.sm);
const Div2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div2",
  componentId: "sc-9w0vkp-2"
})(["grid-area:1 / 2 / 2 / 4;display:flex;margin-top:0.75em;justify-content:space-between;@media ", "{grid-area:2 / 2 / 3 / 5;}"], props => props.theme.breakpoints.sm);
const Div3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div3",
  componentId: "sc-9w0vkp-3"
})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ", "{align-items:center;grid-area:1 / 4 / 2 / 6;}"], props => props.theme.breakpoints.sm); // Navigation Links

const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "HeaderStyles__NavLink",
  componentId: "sc-9w0vkp-4"
})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ", "{padding:0.5rem;font-size:1.7rem;}"], props => props.theme.breakpoints.sm); /// DropDown Contact

const ContactDropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "HeaderStyles__ContactDropDown",
  componentId: "sc-9w0vkp-5"
})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ", "{padding:0.4rem 0;}@media ", "{padding:0;}"], props => props.theme.breakpoints.sm, props => props.theme.breakpoints.md);
const NavProductsIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_icons_io__WEBPACK_IMPORTED_MODULE_1__.IoIosArrowDropdown).withConfig({
  displayName: "HeaderStyles__NavProductsIcon",
  componentId: "sc-9w0vkp-6"
})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:", ";transform:", ";&:hover{opacity:1;}@media ", "{margin:2px 0 0 2px;width:15px;}"], ({
  isOpen
}) => isOpen ? '1' : '.75', ({
  isOpen
}) => isOpen ? 'scaleY(-1)' : 'scaleY(1)', props => props.theme.breakpoints.sm); // Social Icons 

const SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "HeaderStyles__SocialIcons",
  componentId: "sc-9w0vkp-7"
})(["transition:0.3s ease;color:white;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}"]);

/***/ }),

/***/ "./src/components/Hero/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/Hero.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ "./src/styles/GlobalComponents/Button.js");
/* harmony import */ var _HeroStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroStyles */ "./src/components/Hero/HeroStyles.js");


var _jsxFileName = "D:\\project\\portfolio all project\\portfoliodemo4\\portfolio\\src\\components\\Hero\\Hero.js";





const Hero = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    row: true,
    nopadding: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles__WEBPACK_IMPORTED_MODULE_4__.LeftSection, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
        main: true,
        center: true,
        children: "Hey there,"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
        children: "Hey there, This is Vipul Jha aka lordarcadius. I am an Android & Flutter developer who also works on ROMs, Kernels, & Scripts."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
        onClick: e => {
          e.preventDefault();
          window.location.href = '/files/resume.pdf';
        },
        children: "My Resume"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/components/Hero/HeroStyles.js":
/*!*******************************************!*\
  !*** ./src/components/Hero/HeroStyles.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftSection": function() { return /* binding */ LeftSection; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LeftSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroStyles__LeftSection",
  componentId: "pbjia3-0"
})(["width:100%;@media ", "{width:80%;display:flex;flex-direction:column;margin:0 auto;}@media ", "{width:100%;display:flex;flex-direction:column;margin:0 auto;}"], props => props.theme.breakpoints.sm, props => props.theme.breakpoints.md);

/***/ }),

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");

var _jsxFileName = "D:\\project\\portfolio all project\\portfoliodemo4\\portfolio\\src\\components\\Projects\\Projects.js";





const Projects = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
  id: "projects",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
    main: true,
    children: "Projects"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.GridContainer, {
    children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.projects.map((p, i) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.BlogCard, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
          src: p.image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.HeaderThree, {
          title: p.title,
          children: p.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Hr, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.CardInfo, {
          className: "card-info",
          children: p.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
            children: "Tech Stack"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Hr, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TagList, {
            children: p.tags.map((t, i) => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Tag, {
                children: t
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 26
              }, undefined);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.UtilityList, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
            href: p.visit,
            children: "Live Preview"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
            href: p.source,
            children: "Source Code"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "ExternalLinks": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "ProjectsStyles__Img",
  componentId: "l76idc-0"
})(["width:100%;height:100%;object-fit:cover;overflow:hidden;"]);
const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "ProjectsStyles__GridContainer",
  componentId: "l76idc-1"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding-top:3rem;padding-bottom:3rem;place-items:center;column-gap:1rem;row-gap:3rem;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:1.5rem;}"], props => props.theme.breakpoints.sm);
const BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__BlogCard",
  componentId: "l76idc-2"
})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:400px;@media ", "{width:100%;}"], props => props.theme.breakpoints.sm);
const TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__TitleContent",
  componentId: "l76idc-3"
})(["text-align:center;z-index:20;width:100%;margin-top:4rem;margin-bottom:0.7em;color:#9cc9e3;font-size:1.8rem;"]);
const HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "ProjectsStyles__HeaderThree",
  componentId: "l76idc-4"
})(["font-weight:500;letter-spacing:2px;color:#9cc9e3;padding:.5rem 0;margin-top:1rem;font-size:", ";"], props => props.title ? '3rem' : '2rem');
const Hr = styled_components__WEBPACK_IMPORTED_MODULE_0___default().hr.withConfig({
  displayName: "ProjectsStyles__Hr",
  componentId: "l76idc-5"
})(["width:50px;height:3px;margin:8px auto;border:0;background:#d0bb57;"]);
const Intro = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__Intro",
  componentId: "l76idc-6"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]);
const CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "ProjectsStyles__CardInfo",
  componentId: "l76idc-7"
})(["width:100%;padding:0 50px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:center;margin-top:2rem;@media ", "{padding:.3rem}"], props => props.theme.breakpoints.sm);
const UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "ProjectsStyles__UtilityList",
  componentId: "l76idc-8"
})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]);
const ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "ProjectsStyles__ExternalLinks",
  componentId: "l76idc-9"
})(["color:#d4c0c0;font-size:1.6rem;padding:1rem 1.5rem;background:#6b3030;border-radius:15px;transition:0.5s;&:hover{background:#801414;}"]);
const TagList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "ProjectsStyles__TagList",
  componentId: "l76idc-10"
})(["display:flex;justify-content:space-around;padding:2rem;"]);
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "ProjectsStyles__Tag",
  componentId: "l76idc-11"
})(["color:#d8bfbf;font-size:1.5rem;"]);

/***/ }),

/***/ "./src/components/Technologies/Skills.js":
/*!***********************************************!*\
  !*** ./src/components/Technologies/Skills.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Skills": function() { return /* binding */ Skills; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/si */ "./node_modules/react-icons/si/index.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");





const Skills = [{
  slug: "android",
  Component: react_icons_di__WEBPACK_IMPORTED_MODULE_1__.DiAndroid,
  title: "Android",
  Description: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "I work on ROMs, Kernels & Android Apps using Java."
  }, void 0, false)
}, {
  slug: "flutter",
  Component: react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiFlutterFill,
  title: "Flutter",
  Description: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "Currently working with Dart & Flutter for app development. "
  }, void 0, false)
}, {
  slug: "java",
  Component: react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiJava,
  title: "Java",
  Description: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "I can code in Java. But I mainly use it for Android app development."
  }, void 0, false)
}, {
  slug: "terminal",
  Component: react_icons_di__WEBPACK_IMPORTED_MODULE_1__.DiTerminal,
  title: "Scripting",
  Description: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "I have written dozens of Shell scripts for various purposes."
  }, void 0, false)
}, {
  slug: "firebase",
  Component: react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiFirebase,
  title: "Firebase",
  Description: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "I have used Firebase for auth, database & analytics in my apps."
  }, void 0, false)
}, {
  slug: "git",
  Component: react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiGit,
  title: "Git",
  Description: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "Git is a tool that I use every day. I use GitHub for pushing my code."
  }, void 0, false)
}];

/***/ }),

/***/ "./src/components/Technologies/Technologies.js":
/*!*****************************************************!*\
  !*** ./src/components/Technologies/Technologies.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TechnologiesStyles */ "./src/components/Technologies/TechnologiesStyles.js");
/* harmony import */ var _Skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Skills */ "./src/components/Technologies/Skills.js");

var _jsxFileName = "D:\\project\\portfolio all project\\portfoliodemo4\\portfolio\\src\\components\\Technologies\\Technologies.js";





const Technologies = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
  id: "skills",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {
    divider: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
    children: "Skills"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
    children: "I've worked with multiple technologies as a developer to develop & maintain my projects."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.List, {
    children: _Skills__WEBPACK_IMPORTED_MODULE_4__.Skills.map(Skill => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("picture", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill.Component, {
          size: "3rem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListTitle, {
          children: Skill.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListParagraph, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill.Description, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, undefined)]
    }, Skill.slug, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {
    colorAlt: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Technologies);

/***/ }),

/***/ "./src/components/Technologies/TechnologiesStyles.js":
/*!***********************************************************!*\
  !*** ./src/components/Technologies/TechnologiesStyles.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageContainer": function() { return /* binding */ ImageContainer; },
/* harmony export */   "MainImage": function() { return /* binding */ MainImage; },
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "ListContainer": function() { return /* binding */ ListContainer; },
/* harmony export */   "ListTitle": function() { return /* binding */ ListTitle; },
/* harmony export */   "ListParagraph": function() { return /* binding */ ListParagraph; },
/* harmony export */   "ListItem": function() { return /* binding */ ListItem; },
/* harmony export */   "ListIcon": function() { return /* binding */ ListIcon; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TechnologiesStyles__ImageContainer",
  componentId: "sc-1ehw0pq-0"
})(["text-align:center;background-image:radial-gradient(50% 50% at 50% 50%,rgba(79,108,176,0.25) 53.8%,rgba(79,108,176,0) 100%);width:100%;padding:60px;margin-top:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;@media ", "{background-image:none;padding:0;margin-top:40px;}@media ", "{background-image:none;padding:0;margin-top:16px;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md);
const MainImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "TechnologiesStyles__MainImage",
  componentId: "sc-1ehw0pq-1"
})(["width:100%;"]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "TechnologiesStyles__List",
  componentId: "sc-1ehw0pq-2"
})(["list-style-type:none;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin-bottom:4rem;@media ", "{margin:64px 0;}@media ", "{margin:64px 0;gap:24px}@media ", "{display:grid;grid-template-columns:repeat(2,1fr);padding:15px;}@media ", "{display:flex;flex-direction:column;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.theme.breakpoints.xs);
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TechnologiesStyles__ListContainer",
  componentId: "sc-1ehw0pq-3"
})(["display:flex;flex-direction:column;margin-left:18px;@media ", "{display:flex;margin-left:18px;}"], props => props.theme.breakpoints.sm);
const ListTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "TechnologiesStyles__ListTitle",
  componentId: "sc-1ehw0pq-4"
})(["font-weight:700;font-size:28px;line-height:32px;letter-spacing:0.02em;color:#FFFFFF;margin-bottom:8px;@media ", "{font-size:24px;line-height:28px;}@media ", "{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TechnologiesStyles__ListParagraph",
  componentId: "sc-1ehw0pq-5"
})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:28px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "TechnologiesStyles__ListItem",
  componentId: "sc-1ehw0pq-6"
})(["max-width:320px;display:flex;flex-direction:row;@media ", "{max-width:203px;}@media ", "{margin-bottom:14px;max-width:320px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "TechnologiesStyles__ListIcon",
  componentId: "sc-1ehw0pq-7"
})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ", "{width:40px;height:40px;margin-bottom:8px;}@media ", "{width:32px;height:32px;margin-bottom:0px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);

/***/ }),

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ "./src/components/TimeLine/TimeLineStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");


var _jsxFileName = "D:\\project\\portfolio all project\\portfoliodemo4\\portfolio\\src\\components\\TimeLine\\TimeLine.js";




const TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;

const Timeline = () => {
  const {
    0: activeItem,
    1: setActiveItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  const scroll = (node, left) => {
    return node.scrollTo({
      left,
      behavior: 'smooth'
    });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);
      setActiveItem(index);
    }
  }; // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    id: "about",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      children: "My Journey"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {
      children: "In my journey to date, I have learned a great deal about development and life in general."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {
      ref: carouselRef,
      onScroll: handleScroll,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {
          final: index === TOTAL_CAROUSEL_COUNT - 1,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {
            index: index,
            id: `carousel__item-${index}`,
            active: activeItem,
            onClick: e => handleClick(e, index),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {
              children: [`${item.year}`, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {
                width: "208",
                height: "6",
                viewBox: "0 0 208 6",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
                  fill: "url(#paint0_linear)",
                  fillOpacity: "0.33"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
                    id: "paint0_linear",
                    x1: "-4.30412e-10",
                    y1: "0.5",
                    x2: "208",
                    y2: "0.500295",
                    gradientUnits: "userSpaceOnUse",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                      stopColor: "white"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                      offset: "0.79478",
                      stopColor: "white",
                      stopOpacity: "0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
              children: item.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, undefined)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, undefined))
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {
          index: index,
          active: activeItem,
          onClick: e => handleClick(e, index),
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {
            active: activeItem
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, undefined)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),

/***/ "./src/components/TimeLine/TimeLineStyles.js":
/*!***************************************************!*\
  !*** ./src/components/TimeLine/TimeLineStyles.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselContainer": function() { return /* binding */ CarouselContainer; },
/* harmony export */   "CarouselMobileScrollNode": function() { return /* binding */ CarouselMobileScrollNode; },
/* harmony export */   "CarouselItem": function() { return /* binding */ CarouselItem; },
/* harmony export */   "CarouselItemTitle": function() { return /* binding */ CarouselItemTitle; },
/* harmony export */   "CarouselItemImg": function() { return /* binding */ CarouselItemImg; },
/* harmony export */   "CarouselItemText": function() { return /* binding */ CarouselItemText; },
/* harmony export */   "CarouselButtons": function() { return /* binding */ CarouselButtons; },
/* harmony export */   "CarouselButton": function() { return /* binding */ CarouselButton; },
/* harmony export */   "CarouselButtonDot": function() { return /* binding */ CarouselButtonDot; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "TimeLineStyles__CarouselContainer",
  componentId: "vs8qb6-0"
})(["max-width:1040px;background:#0F1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ", "{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"], props => props.theme.breakpoints.sm);
const CarouselMobileScrollNode = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselMobileScrollNode",
  componentId: "vs8qb6-1"
})(["@media ", "{display:flex;min-width:", "}"], props => props.theme.breakpoints.sm, ({
  final
}) => final ? `120%;` : `min-content`);
const CarouselItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselItem",
  componentId: "vs8qb6-2"
})(["background:#0F1624;border-radius:3px;max-width:196px;@media ", "{max-width:124px;}@media ", "{margin-left:32px;min-width:120px;background:#0F1624;padding:4px;align-content:start;scroll-snap-align:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;", ";}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.active === props.index ? `opacity: 1` : `opacity: 0.5`);
const CarouselItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "TimeLineStyles__CarouselItemTitle",
  componentId: "vs8qb6-3"
})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;background:linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ", "{font-size:20px;line-height:28px;margin-bottom:4px;}@media ", "{font-size:20px;line-height:28px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselItemImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "TimeLineStyles__CarouselItemImg",
  componentId: "vs8qb6-4"
})(["margin-left:21px;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0));width:100%;@media ", "{-webkit-mask-image:none;margin-left:16px;overflow:visible;}"], props => props.theme.breakpoints.sm);
const CarouselItemText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "TimeLineStyles__CarouselItemText",
  componentId: "vs8qb6-5"
})(["font-size:14px;line-height:22px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);padding-right:16px;@media ", "{font-size:12px;line-height:18px;padding-right:32px;}@media ", "{font-size:11px;line-height:18px;padding-right:0;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselButtons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselButtons",
  componentId: "vs8qb6-6"
})(["width:288px;display:none;visibility:hidden;@media ", "{display:flex;visibility:visible;margin-bottom:48px;}"], props => props.theme.breakpoints.sm);
const CarouselButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "TimeLineStyles__CarouselButton",
  componentId: "vs8qb6-7"
})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:", ";transform:", ";&:focus{outline:none;}"], props => props.active === props.index ? `1` : `.33`, props => props.active === props.index ? `scale(1.6)` : `scale(1)`);
const CarouselButtonDot = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselButtonDot",
  componentId: "vs8qb6-8"
})(["background-color:white;border-radius:10px;margin:auto;width:3px;height:3px;"]);

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
const projects = [{
  title: 'Covid-19 Status App',
  description: "COVID-19 Status is a free, open-source Android application that shows the current state of COVID-19 in India and the world. It has a beautiful, simple, fast, and responsive UI.",
  image: '/images/covid.jpg',
  tags: ['Java', 'XML', 'Firebase', 'Rest API'],
  source: 'https://github.com/Coders-Of-XDA-OT/covid19-status-android',
  visit: 'https://project.vipuljha.com/covid/',
  id: 0
}, {
  title: 'Portfolio Website',
  description: "This was my personal portfolio website that has all my work and project experience, including my resume. It used to be my main portfolio before deploying this current portfolio.",
  image: '/images/portfolio.jpg',
  tags: ['HTML', 'CSS', 'Bootstrap', 'JQuery'],
  source: 'https://github.com/lordarcadius/website',
  visit: 'https://project.vipuljha.com/website/',
  id: 1
}, {
  title: 'ABS Tweaks',
  description: "ABS Tweaks or Arkaynine Boost Script is a collection of shell scripts written with the aim of enhancing the performance and battery life of an Android phone. It got 2 Lac+ downloads overall.",
  image: '/images/abs.jpg',
  tags: ['Shell', 'Busybox'],
  source: 'https://github.com/lordarcadius/ABS-Tweaks',
  visit: 'https://forum.xda-developers.com/t/tweak-mod-arm-x86-project-dark-booster-abs-tweaks-v5-0-2-3-6-0-23-01-2016.3120404/',
  id: 2
}, {
  title: 'ElectraBlue Kernel',
  description: "ElectraBlue is a flash & forget custom kernel for supported Android devices. It was developed with the aim to provide a stable, fluid, & battery-efficient experience with customizations.",
  image: '/images/eb.jpg',
  tags: ['Linux', 'C', 'Makefile', 'Bash'],
  source: 'https://github.com/lordarcadius/electrablue_mido',
  visit: 'https://forum.xda-developers.com/t/kernel-mido-oreo-pie-electrablue-kernel-21-0-july-06-redmi-note-4.3655651/',
  id: 3
}, {
  title: 'Lenovo SNAPit',
  description: "Lenovo SNAPit Camera was one of the finest OEM camera apps back in those days. It had tonnes of unique and amazing features. I ported it to work on almost all devices at that time.",
  image: '/images/snapit.jpg',
  tags: ['Java', 'Libs', 'Smali'],
  source: '#',
  visit: 'https://forum.xda-developers.com/t/app-port-6-0-lenovo-snapit-camera-5-8-53-for-all-devices.3608065/',
  id: 3
}, {
  title: 'CyanogenOS Apps',
  description: "CyanogenOS 12.1 had a set of exclusive apps like a new theme engine and a new Truecaller integrated dialer. I ported it to work with CyanogenMod 13 and CM 13 based ROMs.",
  image: '/images/capps.jpg',
  tags: ['Java', 'Libs'],
  source: '#',
  visit: 'https://forum.xda-developers.com/t/c-apps-v2-unofficial-6-0-x-cyanogen-os-capps-v2-for-cm13-and-cm13-based-roms.3254865/',
  id: 3
}];
const TimeLineData = [{
  year: 2016,
  text: 'Started my journey as a new developer.'
}, {
  year: 2017,
  text: 'Worked intensively on ROMs & Kernels.'
}, {
  year: 2018,
  text: 'Learned Android app development.'
}, {
  year: 2019,
  text: 'Finished Diploma in Computer Engineering.'
}, {
  year: 2020,
  text: 'Got a scholarship from the Delhi government.'
}, {
  year: 2021,
  text: 'Still trying to figure out this weird year.'
}];

/***/ }),

/***/ "./src/layout/Layout.js":
/*!******************************!*\
  !*** ./src/layout/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _LayoutStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LayoutStyles */ "./src/layout/LayoutStyles.js");

var _jsxFileName = "D:\\project\\portfolio all project\\portfoliodemo4\\portfolio\\src\\layout\\Layout.js";




const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LayoutStyles__WEBPACK_IMPORTED_MODULE_4__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/layout/LayoutStyles.js":
/*!************************************!*\
  !*** ./src/layout/LayoutStyles.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LayoutStyles__Container",
  componentId: "mzu455-0"
})(["max-width:1280px;width:100%;margin:auto;"]);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Acomplishments/Acomplishments */ "./src/components/Acomplishments/Acomplishments.js");
/* harmony import */ var _components_BackgrooundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BackgrooundAnimation/BackgroundAnimation */ "./src/components/BackgrooundAnimation/BackgroundAnimation.js");
/* harmony import */ var _components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero/Hero */ "./src/components/Hero/Hero.js");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects/Projects */ "./src/components/Projects/Projects.js");
/* harmony import */ var _components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Technologies/Technologies */ "./src/components/Technologies/Technologies.js");
/* harmony import */ var _components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TimeLine/TimeLine */ "./src/components/TimeLine/TimeLine.js");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/Layout */ "./src/layout/Layout.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");

var _jsxFileName = "D:\\project\\portfolio all project\\portfoliodemo4\\portfolio\\src\\pages\\index.js";









const Home = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_7__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_8__.Section, {
      grid: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BackgrooundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/styles/GlobalComponents/Button.js":
/*!***********************************************!*\
  !*** ./src/styles/GlobalComponents/Button.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/styles/GlobalComponents/index.js");

var _jsxFileName = "D:\\project\\portfolio all project\\portfoliodemo4\\portfolio\\src\\styles\\GlobalComponents\\Button.js";



const Button = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.ButtonBack, {
  alt: props.alt,
  form: props.form,
  disabled: props.disabled,
  children: [props.children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.ButtonFront, {
    alt: props.alt,
    onClick: props.onClick,
    disabled: props.disabled,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/styles/GlobalComponents/index.js":
/*!**********************************************!*\
  !*** ./src/styles/GlobalComponents/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "SectionTitle": function() { return /* binding */ SectionTitle; },
/* harmony export */   "SectionText": function() { return /* binding */ SectionText; },
/* harmony export */   "SectionDivider": function() { return /* binding */ SectionDivider; },
/* harmony export */   "SectionSubText": function() { return /* binding */ SectionSubText; },
/* harmony export */   "SecondaryBtn": function() { return /* binding */ SecondaryBtn; },
/* harmony export */   "ButtonBack": function() { return /* binding */ ButtonBack; },
/* harmony export */   "ButtonFront": function() { return /* binding */ ButtonFront; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkIconImg": function() { return /* binding */ LinkIconImg; },
/* harmony export */   "Link": function() { return /* binding */ Link; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "GlobalComponents__Section",
  componentId: "sc-6qzy6y-0"
})(["display:", ";flex-direction:", ";padding:", ";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px 0;flex-direction:column;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:column;}"], props => props.grid ? "grid" : "flex", props => props.row ? "row" : "column", props => props.nopadding ? "0" : "32px 48px 0", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.nopadding ? "0" : "16px 16px 0");
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "GlobalComponents__SectionTitle",
  componentId: "sc-6qzy6y-1"
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], props => props.main ? '65px' : '56px', props => props.main ? '72px' : '67px', props => props.main ? '58px 0 16px' : '0', props => props.theme.breakpoints.md, props => props.main ? '56px' : '48px', props => props.main ? '56px' : '48px', props => props.main ? '40px 0 12px' : '0', props => props.theme.breakpoints.sm, props => props.main ? '28px' : '32px', props => props.main ? '32px' : '40px', props => props.main ? '16px 0 8px' : '0');
const SectionText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GlobalComponents__SectionText",
  componentId: "sc-6qzy6y-2"
})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ", "{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ", "{font-size:16px;line-height:24px;padding-bottom:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionDivider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__SectionDivider",
  componentId: "sc-6qzy6y-3"
})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:", ";margin:", ";@media ", "{width:48px;height:4px;}@media ", "{width:32px;height:2px;}"], props => props.colorAlt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)', props => props.divider ? "4rem 0" : "", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionSubText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GlobalComponents__SectionSubText",
  componentId: "sc-6qzy6y-4"
})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "GlobalComponents__SecondaryBtn",
  componentId: "sc-6qzy6y-5"
})(["color:#FFF;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ", "{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ButtonBack = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__ButtonBack",
  componentId: "sc-6qzy6y-6"
})(["width:", ";height:", ";border-radius:50px;font-size:", ";font-weight:600;display:flex;align-items:center;justify-content:center;margin:", ";color:#fff;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";@media ", "{width:", ";height:", ";font-size:", ";margin-bottom:", ";}@media ", "{width:100%;height:32px;font-size:14px;margin-bottom:", ";}"], ({
  alt
}) => alt ? '150px' : '262px', ({
  alt
}) => alt ? '52px' : '64px', ({
  alt
}) => alt ? '20px' : '24px', ({
  alt,
  form
}) => alt || form ? '0' : '0 0 80px', ({
  alt
}) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)', ({
  disabled
}) => disabled ? '.5' : '1', props => props.theme.breakpoints.md, ({
  alt
}) => alt ? '150px' : '184px', ({
  alt
}) => alt ? '52px' : '48px', ({
  alt
}) => alt ? '20px' : '16px', ({
  alt
}) => alt ? '0' : '64px', props => props.theme.breakpoints.sm, ({
  alt
}) => alt ? '0' : '32px');
const ButtonFront = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "GlobalComponents__ButtonFront",
  componentId: "sc-6qzy6y-7"
})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:", ";opacity:", ";transition:.4s ease;font-size:", ";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:", ";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00DBD8 0%,#B133FF 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{font-size:", ";}@media ", "{font-size:14px;}"], ({
  alt
}) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)', ({
  disabled
}) => disabled ? '.5' : '1', ({
  alt
}) => alt ? '20px' : '24px', ({
  disabled
}) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none', props => props.theme.breakpoints.md, ({
  alt
}) => alt ? '20px' : '16px', props => props.theme.breakpoints.sm);
const LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__LinkContainer",
  componentId: "sc-6qzy6y-8"
})(["margin-left:", ";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ", "{margin-left:", ";}@media ", "{margin-left:", ";}"], ({
  large
}) => large ? '24px' : '16px', props => props.theme.breakpoints.md, ({
  large
}) => large ? '16px' : '8px', props => props.theme.breakpoints.sm, ({
  large
}) => large ? '0' : '8px');
const LinkIconImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__LinkIconImg",
  componentId: "sc-6qzy6y-9"
})(["display:flex;height:", ";@media ", "{height:", ";}@media ", "{height:", ";}"], ({
  large
}) => large ? '32px' : '24px', props => props.theme.breakpoints.md, ({
  nav
}) => nav ? '16px' : '24px', props => props.theme.breakpoints.sm, ({
  large
}) => large ? '32px' : '16px');
const Link = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "GlobalComponents__Link",
  componentId: "sc-6qzy6y-10"
})(["color:", ""], props => props.theme.colors.link);

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js-node_modules_react-icons_ai_index_esm_js-node_modules_react-904ab2"], function() { return __webpack_exec__("./src/pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0Fjb21wbGlzaG1lbnRzL0Fjb21wbGlzaG1lbnRzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9CYWNrZ3Jvb3VuZEFuaW1hdGlvbi9CYWNrZ3JvdW5kQW5pbWF0aW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZXJvL0hlcm8uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0hlcm8vSGVyb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvU2tpbGxzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvbGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2xheW91dC9MYXlvdXRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9pZ25vcmVkfEQ6XFxwcm9qZWN0XFxwb3J0Zm9saW8gYWxsIHByb2plY3RcXHBvcnRmb2xpb2RlbW80XFxwb3J0Zm9saW9cXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJkYXRhIiwibnVtYmVyIiwidGV4dCIsIkFjb21wbGlzaG1lbnRzIiwibWFwIiwiY2FyZCIsImluZGV4IiwidG9Mb2NhbGVTdHJpbmciLCJCb3hlcyIsInN0eWxlZCIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsIm1kIiwic20iLCJCb3giLCJsZyIsIkJveE51bSIsIkJveFRleHQiLCJKb2luIiwiSm9pblRleHQiLCJJY29uQ29udGFpbmVyIiwiQmFja2dyb3VuZEFuaW1hdGlvbiIsIkZvb3RlciIsIkZvb3RlcldyYXBwZXIiLCJMaW5rSXRlbSIsIlNvY2lhbEljb25zQ29udGFpbmVyIiwiQ29tcGFueUNvbnRhaW5lciIsIlNsb2dhbiIsIlNvY2lhbENvbnRhaW5lciIsIkxpbmtMaXN0IiwiTGlua0NvbHVtbiIsIkxpbmtUaXRsZSIsIkhlYWRlciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJDb250YWluZXIiLCJEaXYxIiwiRGl2MiIsIkRpdjMiLCJOYXZMaW5rIiwiQ29udGFjdERyb3BEb3duIiwiTmF2UHJvZHVjdHNJY29uIiwiSW9Jb3NBcnJvd0Ryb3Bkb3duIiwiaXNPcGVuIiwiU29jaWFsSWNvbnMiLCJIZXJvIiwiZSIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiTGVmdFNlY3Rpb24iLCJQcm9qZWN0cyIsInByb2plY3RzIiwicCIsImkiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0YWdzIiwidCIsInZpc2l0Iiwic291cmNlIiwiSW1nIiwiR3JpZENvbnRhaW5lciIsIkJsb2dDYXJkIiwiVGl0bGVDb250ZW50IiwiSGVhZGVyVGhyZWUiLCJIciIsIkludHJvIiwiQ2FyZEluZm8iLCJVdGlsaXR5TGlzdCIsIkV4dGVybmFsTGlua3MiLCJUYWdMaXN0IiwiVGFnIiwiU2tpbGxzIiwic2x1ZyIsIkNvbXBvbmVudCIsIkRpQW5kcm9pZCIsIkRlc2NyaXB0aW9uIiwiUmlGbHV0dGVyRmlsbCIsIlNpSmF2YSIsIkRpVGVybWluYWwiLCJTaUZpcmViYXNlIiwiU2lHaXQiLCJUZWNobm9sb2dpZXMiLCJTa2lsbCIsIkltYWdlQ29udGFpbmVyIiwiTWFpbkltYWdlIiwiTGlzdCIsInhzIiwiTGlzdENvbnRhaW5lciIsIkxpc3RUaXRsZSIsIkxpc3RQYXJhZ3JhcGgiLCJMaXN0SXRlbSIsIkxpc3RJY29uIiwiVE9UQUxfQ0FST1VTRUxfQ09VTlQiLCJUaW1lTGluZURhdGEiLCJUaW1lbGluZSIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwidXNlU3RhdGUiLCJjYXJvdXNlbFJlZiIsInVzZVJlZiIsInNjcm9sbCIsIm5vZGUiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhhbmRsZUNsaWNrIiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJNYXRoIiwiZmxvb3IiLCJzY3JvbGxXaWR0aCIsImhhbmRsZVNjcm9sbCIsInJvdW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW0iLCJ5ZWFyIiwiQ2Fyb3VzZWxDb250YWluZXIiLCJDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUiLCJmaW5hbCIsIkNhcm91c2VsSXRlbSIsImFjdGl2ZSIsIkNhcm91c2VsSXRlbVRpdGxlIiwiQ2Fyb3VzZWxJdGVtSW1nIiwiQ2Fyb3VzZWxJdGVtVGV4dCIsIkNhcm91c2VsQnV0dG9ucyIsIkNhcm91c2VsQnV0dG9uIiwiQ2Fyb3VzZWxCdXR0b25Eb3QiLCJpZCIsIkxheW91dCIsImNoaWxkcmVuIiwiSG9tZSIsIkJ1dHRvbiIsImFsdCIsImZvcm0iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJTZWN0aW9uIiwiZ3JpZCIsInJvdyIsIm5vcGFkZGluZyIsIlNlY3Rpb25UaXRsZSIsIm1haW4iLCJTZWN0aW9uVGV4dCIsIlNlY3Rpb25EaXZpZGVyIiwiY29sb3JBbHQiLCJkaXZpZGVyIiwiU2VjdGlvblN1YlRleHQiLCJTZWNvbmRhcnlCdG4iLCJCdXR0b25CYWNrIiwiQnV0dG9uRnJvbnQiLCJMaW5rQ29udGFpbmVyIiwibGFyZ2UiLCJMaW5rSWNvbkltZyIsIm5hdiIsIkxpbmsiLCJjb2xvcnMiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFBRUMsUUFBTSxFQUFFLEVBQVY7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRFcsRUFFWDtBQUFFRCxRQUFNLEVBQUUsRUFBVjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FGVyxFQUdYO0FBQUVELFFBQU0sRUFBRSxNQUFWO0FBQWtCQyxNQUFJLEVBQUU7QUFBeEIsQ0FIVyxFQUlYO0FBQUVELFFBQU0sRUFBRSxHQUFWO0FBQWVDLE1BQUksRUFBRTtBQUFyQixDQUpXLENBQWI7O0FBT0EsTUFBTUMsY0FBYyxHQUFHLG1CQUNyQiw4REFBQyw2REFBRDtBQUFBLDBCQUNFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyx3REFBRDtBQUFBLGNBQ0dILElBQUksQ0FBQ0ksR0FBTCxDQUFTLENBQUNDLElBQUQsRUFBT0MsS0FBUCxrQkFDUiw4REFB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YUEsTUFBTUcsSUFBSSxHQUFHNUoscUVBQUg7QUFBQTtBQUFBO0FBQUEsbUJBQ0xDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVkySixNQUFaLENBQW1CQyxJQUR4QixDQUFWLEM7Ozs7Ozs7Ozs7O0FDMVJQLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBCb3gsIEJveGVzLCBCb3hOdW0sIEJveFRleHQgfSBmcm9tICcuL0Fjb21wbGlzaG1lbnRzU3R5bGVzJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAgeyBudW1iZXI6IDIwLCB0ZXh0OiAnT3BlbiBTb3VyY2UgUHJvamVjdHMnIH0sXHJcbiAgeyBudW1iZXI6IDUwLCB0ZXh0OiAnU2hlbGwgU2NyaXB0cycsIH0sXHJcbiAgeyBudW1iZXI6IDI1MDAwMCwgdGV4dDogJ0Rvd25sb2FkcycsIH0sXHJcbiAgeyBudW1iZXI6IDE1MCwgdGV4dDogJ0dpdGh1YiBTdGFycycsIH1cclxuXTtcclxuXHJcbmNvbnN0IEFjb21wbGlzaG1lbnRzID0gKCkgPT4gKFxyXG4gIDxTZWN0aW9uPlxyXG4gICAgPFNlY3Rpb25UaXRsZT5QZXJzb25hbCBBY2hpZXZlbWVudHM8L1NlY3Rpb25UaXRsZT5cclxuICAgIDxCb3hlcz5cclxuICAgICAge2RhdGEubWFwKChjYXJkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxCb3gga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8Qm94TnVtPntgJHtjYXJkLm51bWJlci50b0xvY2FsZVN0cmluZygnZW4tSU4nKX0rYH08L0JveE51bT5cclxuICAgICAgICAgIDxCb3hUZXh0PntjYXJkLnRleHR9PC9Cb3hUZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApKX1cclxuICAgIDwvQm94ZXM+XHJcbiAgICA8U2VjdGlvbkRpdmlkZXIgLz5cclxuICA8L1NlY3Rpb24+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY29tcGxpc2htZW50cztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IEJveGVzID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgZ2FwOiAyNHB4O1xyXG4gIG1hcmdpbjogMjRweCAwIDQwcHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIGdhcDogMTZweDtcclxuICAgIG1hcmdpbjogMjBweCAwIDMycHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE0MHB4LCAxZnIpKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogMjRweCBhdXRvO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogIzIxMkQ0NTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGhlaWdodDogMTQ0cHg7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ30ge1xyXG4gICAgaGVpZ2h0OiAyMTBweDtcclxuXHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgaGVpZ2h0OiAxMzVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBcclxuICAgICY6bnRoLWNoaWxkKDJuKXtcclxuICAgICAgZ3JpZC1yb3c6MjtcclxuICAgIH1cclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IEJveE51bSA9IHN0eWxlZC5oNWBcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICB9XHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBCb3hUZXh0ID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH07XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBKb2luID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1heC13aWR0aDogMTA0MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2NHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSm9pblRleHQgPSBzdHlsZWQuaDVgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufTtcclxuXHJcbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luOiAwIDAgMTZweDtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuYFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQmFja2dyb3VuZEFuaW1hdGlvbiA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPHN2Z1xyXG4gICAgICBjbGFzc05hbWU9XCJCZ0FuaW1hdGlvbl9fc3ZnXCJcclxuICAgICAgdmlld0JveD1cIjAgMCA2MDIgNjAyXCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgID5cclxuICAgICAgPGcgb3BhY2l0eT1cIjAuMTVcIj5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICBkPVwiTTIwMS4zMzcgODcuNDM3QzE5My40NzQgNzkuNTczOCAxODAuNzI1IDc5LjU3MzggMTcyLjg2MiA4Ny40MzdMODcuNDM3IDE3Mi44NjJDNzkuNTczOSAxODAuNzI1IDc5LjU3MzkgMTkzLjQ3NCA4Ny40MzcgMjAxLjMzN0w0MDAuNjYzIDUxNC41NjNDNDA4LjUyNiA1MjIuNDI2IDQyMS4yNzUgNTIyLjQyNiA0MjkuMTM4IDUxNC41NjNMNTE0LjU2MyA0MjkuMTM4QzUyMi40MjYgNDIxLjI3NSA1MjIuNDI2IDQwOC41MjYgNTE0LjU2MyA0MDAuNjYzTDIwMS4zMzcgODcuNDM3Wk0zMC40ODY5IDExNS45MTJDLTguODI4OTcgMTU1LjIyOCAtOC44Mjg5NyAyMTguOTcyIDMwLjQ4NjkgMjU4LjI4N0wzNDMuNzEzIDU3MS41MTNDMzgzLjAyOCA2MTAuODI5IDQ0Ni43NzIgNjEwLjgyOSA0ODYuMDg4IDU3MS41MTNMNTcxLjUxMyA0ODYuMDg4QzYxMC44MjkgNDQ2Ljc3MiA2MTAuODI5IDM4My4wMjggNTcxLjUxMyAzNDMuNzEzTDI1OC4yODcgMzAuNDg2OUMyMTguOTcyIC04LjgyODk2IDE1NS4yMjggLTguODI4OTYgMTE1LjkxMiAzMC40ODY5TDMwLjQ4NjkgMTE1LjkxMlpcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDBfcmFkaWFsKVwiXHJcbiAgICAgICAgICBpZD1cInBhdGhfMFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk01MTQuNTYzIDIwMS4zMzdDNTIyLjQyNiAxOTMuNDc0IDUyMi40MjYgMTgwLjcyNSA1MTQuNTYzIDE3Mi44NjJMNDI5LjEzOCA4Ny40MzdDNDIxLjI3NSA3OS41NzM4IDQwOC41MjYgNzkuNTczOSA0MDAuNjYzIDg3LjQzN0wzNTguMDk4IDEzMC4wMDJMMzAxLjE0OCA3My4wNTE2TDM0My43MTMgMzAuNDg2OUMzODMuMDI4IC04LjgyODk2IDQ0Ni43NzIgLTguODI4OTYgNDg2LjA4OCAzMC40ODY5TDU3MS41MTMgMTE1LjkxMkM2MTAuODI5IDE1NS4yMjggNjEwLjgyOSAyMTguOTcyIDU3MS41MTMgMjU4LjI4N0wzNTcuODAyIDQ3MS45OTlMMzAwLjg1MiA0MTUuMDQ5TDUxNC41NjMgMjAxLjMzN1pcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDFfcmFkaWFsKVwiXHJcbiAgICAgICAgICBpZD1cInBhdGhfMVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0yNDMuOTAxIDQ3MS45OTlMMjAxLjMzNyA1MTQuNTYzQzE5My40NzQgNTIyLjQyNiAxODAuNzI1IDUyMi40MjYgMTcyLjg2MiA1MTQuNTYzTDg3LjQzNyA0MjkuMTM4Qzc5LjU3MzkgNDIxLjI3NSA3OS41NzM5IDQwOC41MjYgODcuNDM3IDQwMC42NjNMMzAxLjE0OCAxODYuOTUyTDI0NC4xOTggMTMwLjAwMkwzMC40ODY5IDM0My43MTNDLTguODI4OTcgMzgzLjAyOCAtOC44Mjg5NyA0NDYuNzcyIDMwLjQ4NjkgNDg2LjA4OEwxMTUuOTEyIDU3MS41MTNDMTU1LjIyOCA2MTAuODI5IDIxOC45NzIgNjEwLjgyOSAyNTguMjg3IDU3MS41MTNMMzAwLjg1MiA1MjguOTQ5TDI0My45MDEgNDcxLjk5OVpcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDJfcmFkaWFsKVwiXHJcbiAgICAgICAgICBpZD1cInBhdGhfMlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9nPlxyXG4gICAgICA8ZWxsaXBzZVxyXG4gICAgICAgIGN4PVwiMjk1LjAyN1wiXHJcbiAgICAgICAgY3k9XCIxOTMuMTE4XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI5NS4wMjcgLTE5My4xMTgpXCJcclxuICAgICAgICByeD1cIjEuMDczMDZcIlxyXG4gICAgICAgIHJ5PVwiMS4wNzQzM1wiXHJcbiAgICAgICAgZmlsbD1cIiM5NDVERDZcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMTBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgcm90YXRlPVwiYXV0b1wiPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzJcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9lbGxpcHNlPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMjk0LjY4NSAxOTMuNDc0TDI2OC45MzIgMjE5LjI1OFwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yOTQuNjg1IC0xOTMuNDc0KSByb3RhdGUoNDUgMjk0LjY4NSAxOTMuNDc0KVwiXHJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDNfbGluZWFyKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIxMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiByb3RhdGU9XCJhdXRvXCI+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMlwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L3BhdGg+XHJcbiAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgY3g9XCIyOTUuMDI3XCJcclxuICAgICAgICBjeT1cIjE5My4xMThcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjk1LjAyNyAtMTkzLjExOClcIlxyXG4gICAgICAgIHJ4PVwiMS4wNzMwNlwiXHJcbiAgICAgICAgcnk9XCIxLjA3NDMzXCJcclxuICAgICAgICBmaWxsPVwiIzQ2NzM3XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlTW90aW9uXHJcbiAgICAgICAgICBkdXI9XCI1c1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjFcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8yXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvZWxsaXBzZT5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTI5NC42ODUgMTkzLjQ3NEwyNjguOTMyIDIxOS4yNThcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjk0LjY4NSAtMTkzLjQ3NCkgcm90YXRlKDQ1IDI5NC42ODUgMTkzLjQ3NClcIlxyXG4gICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQ3X2xpbmVhcilcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjVzXCJcclxuICAgICAgICAgIGJlZ2luPVwiMVwiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzJcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9wYXRoPlxyXG4gICAgICA8ZWxsaXBzZVxyXG4gICAgICAgIGN4PVwiNDc2LjUyNVwiXHJcbiAgICAgICAgY3k9XCIzNjMuMzEzXCJcclxuICAgICAgICByeD1cIjEuMDc0MzNcIlxyXG4gICAgICAgIHJ5PVwiMS4wNzMwNlwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NzYuNTI1IC0zNjMuMzEzKSByb3RhdGUoOTAgNDc2LjUyNSAzNjMuMzEzKVwiXHJcbiAgICAgICAgZmlsbD1cIiM5NDVERDZcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMTBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgcm90YXRlPVwiYXV0b1wiPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9lbGxpcHNlPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNDc2LjE3MSAzNjIuOTUyTDQ1MC40MTcgMzM3LjE2OFwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NzYuNTI1IC0zNjMuMzEzKSByb3RhdGUoLTQ1IDQ3Ni4xNzEgMzYyLjk1MilcIlxyXG4gICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQ0X2xpbmVhcilcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMTBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgcm90YXRlPVwiYXV0b1wiPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9wYXRoPlxyXG4gICAgICA8ZWxsaXBzZVxyXG4gICAgICAgIGN4PVwiMzgyLjE2NFwiXHJcbiAgICAgICAgY3k9XCIxNTUuMDI5XCJcclxuICAgICAgICByeD1cIjEuMDc0MzNcIlxyXG4gICAgICAgIHJ5PVwiMS4wNzMwNlwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zODIuMTY0IC0xNTUuMDI5KSByb3RhdGUoOTAgMzgyLjE2NCAxNTUuMDI5KVwiXHJcbiAgICAgICAgZmlsbD1cIiNGNDY3MzdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjEwc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjFcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvZWxsaXBzZT5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTM4MS44MSAxNTQuNjY5TDM1Ni4wNTcgMTI4Ljg4NVwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zODEuODEgLTE1NC42NjkpIHJvdGF0ZSgtNDUgMzgxLjgxIDE1NC42NjkpXCJcclxuICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50NV9saW5lYXIpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlTW90aW9uXHJcbiAgICAgICAgICBkdXI9XCIxMHNcIlxyXG4gICAgICAgICAgYmVnaW49XCIxXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L3BhdGg+XHJcbiAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgY3g9XCIzMzMuMzI0XCJcclxuICAgICAgICBjeT1cIjM4Mi42OTFcIlxyXG4gICAgICAgIHJ4PVwiMS4wNzMwNlwiXHJcbiAgICAgICAgcnk9XCIxLjA3NDMzXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTMzMy4zMjQgLTM4Mi42OTEpIHJvdGF0ZSgtMTgwIDMzMy4zMjQgMzgyLjY5MSlcIlxyXG4gICAgICAgIGZpbGw9XCIjRjQ2NzM3XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlTW90aW9uXHJcbiAgICAgICAgICBkdXI9XCI1c1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjBcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8xXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvZWxsaXBzZT5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTMzMy42NjcgMzgyLjMzNUwzNTkuNDIgMzU2LjU1MVwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwic2NhbGUoLTEgMSkgdHJhbnNsYXRlKC0zMzMuNjY3IC0zODIuMzM1KSByb3RhdGUoNDUgMzMzLjY2NyAzODIuMzM1KVwiXHJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDZfbGluZWFyKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxyXG4gICAgICAgICAgZHVyPVwiNXNcIlxyXG4gICAgICAgICAgYmVnaW49XCIwXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMVwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L3BhdGg+XHJcbiAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgY3g9XCIxNjUuNTI0XCJcclxuICAgICAgICBjeT1cIjkzLjk1OTZcIlxyXG4gICAgICAgIHJ4PVwiMS4wNzMwNlwiXHJcbiAgICAgICAgcnk9XCIxLjA3NDMzXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE2NS41MjQgLTkzLjk1OTYpXCJcclxuICAgICAgICBmaWxsPVwiI0Y0NjczN1wiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxyXG4gICAgICAgICAgZHVyPVwiMTBzXCJcclxuICAgICAgICAgIGJlZ2luPVwiM1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9lbGxpcHNlPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMTY1LjE4MiA5NC4zMTU5TDEzOS40MjkgMTIwLjFcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTY1LjE4MiAtOTQuMzE1OSkgcm90YXRlKDQ1IDE2NS4xODIgOTQuMzE1OSlcIlxyXG4gICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQ3X2xpbmVhcilcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjEwc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjNcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvcGF0aD5cclxuICAgICAgPGVsbGlwc2VcclxuICAgICAgICBjeD1cIjQ3Ni41MjVcIlxyXG4gICAgICAgIGN5PVwiMzYzLjMxM1wiXHJcbiAgICAgICAgcng9XCIxLjA3NDMzXCJcclxuICAgICAgICByeT1cIjEuMDczMDZcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDc2LjUyNSAtMzYzLjMxMykgcm90YXRlKDkwIDQ3Ni41MjUgMzYzLjMxMylcIlxyXG4gICAgICAgIGZpbGw9XCIjMTNBREM3XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlTW90aW9uXHJcbiAgICAgICAgICBkdXI9XCIxMnNcIlxyXG4gICAgICAgICAgYmVnaW49XCI0XCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L2VsbGlwc2U+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk00NzYuMTcxIDM2Mi45NTJMNDUwLjQxNyAzMzcuMTY4XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQ3Ni41MjUgLTM2My4zMTMpIHJvdGF0ZSgtNDUgNDc2LjE3MSAzNjIuOTUyKVwiXHJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDExX2xpbmVhcilcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjEyc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjRcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvcGF0aD5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPHJhZGlhbEdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInBhaW50MF9yYWRpYWxcIlxyXG4gICAgICAgICAgY3g9XCIwXCJcclxuICAgICAgICAgIGN5PVwiMFwiXHJcbiAgICAgICAgICByPVwiMVwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAxIDMwMSkgcm90YXRlKDkwKSBzY2FsZSgzMDApXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwLjMzMzMzM1wiIHN0b3BDb2xvcj1cIiNGQkZCRkJcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIndoaXRlXCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L3JhZGlhbEdyYWRpZW50PlxyXG4gICAgICAgIDxyYWRpYWxHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwYWludDFfcmFkaWFsXCJcclxuICAgICAgICAgIGN4PVwiMFwiXHJcbiAgICAgICAgICBjeT1cIjBcIlxyXG4gICAgICAgICAgcj1cIjFcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwidHJhbnNsYXRlKDMwMSAzMDEpIHJvdGF0ZSg5MCkgc2NhbGUoMzAwKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC4zMzMzMzNcIiBzdG9wQ29sb3I9XCIjRkJGQkZCXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCJ3aGl0ZVwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cclxuICAgICAgICA8cmFkaWFsR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQyX3JhZGlhbFwiXHJcbiAgICAgICAgICBjeD1cIjBcIlxyXG4gICAgICAgICAgY3k9XCIwXCJcclxuICAgICAgICAgIHI9XCIxXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgICBncmFkaWVudFRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMDEgMzAxKSByb3RhdGUoOTApIHNjYWxlKDMwMClcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMzMzMzMzXCIgc3RvcENvbG9yPVwiI0ZCRkJGQlwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwid2hpdGVcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxyXG4gICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInBhaW50M19saW5lYXJcIlxyXG4gICAgICAgICAgeDE9XCIyOTUuMDQzXCJcclxuICAgICAgICAgIHkxPVwiMTkzLjExNlwiXHJcbiAgICAgICAgICB4Mj1cIjI2OS45NzVcIlxyXG4gICAgICAgICAgeTI9XCIyMTguMTU0XCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzk0NURENlwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzk0NURENlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQ0X2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjQ3Ni41MjlcIlxyXG4gICAgICAgICAgeTE9XCIzNjMuMzFcIlxyXG4gICAgICAgICAgeDI9XCI0NTEuNDYxXCJcclxuICAgICAgICAgIHkyPVwiMzM4LjI3MlwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiM5NDVERDZcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiM5NDVERDZcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInBhaW50NV9saW5lYXJcIlxyXG4gICAgICAgICAgeDE9XCIzODIuMTY4XCJcclxuICAgICAgICAgIHkxPVwiMTU1LjAyN1wiXHJcbiAgICAgICAgICB4Mj1cIjM1Ny4xXCJcclxuICAgICAgICAgIHkyPVwiMTI5Ljk4OVwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNGNDY3MzdcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNGNDY3MzdcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInBhaW50Nl9saW5lYXJcIlxyXG4gICAgICAgICAgeDE9XCIzMzMuMzA5XCJcclxuICAgICAgICAgIHkxPVwiMzgyLjY5M1wiXHJcbiAgICAgICAgICB4Mj1cIjM1OC4zNzZcIlxyXG4gICAgICAgICAgeTI9XCIzNTcuNjU1XCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0Y0NjczN1wiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0Y0NjczN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQ3X2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjE2NS41NFwiXHJcbiAgICAgICAgICB5MT1cIjkzLjk1NzhcIlxyXG4gICAgICAgICAgeDI9XCIxNDAuNDcyXCJcclxuICAgICAgICAgIHkyPVwiMTE4Ljk5NlwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNGNDY3MzdcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNGNDY3MzdcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInBhaW50OF9saW5lYXJcIlxyXG4gICAgICAgICAgeDE9XCI0MTQuMzY3XCJcclxuICAgICAgICAgIHkxPVwiMzAxLjE1NlwiXHJcbiAgICAgICAgICB4Mj1cIjQzOS40MzVcIlxyXG4gICAgICAgICAgeTI9XCIyNzYuMTE4XCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzEzQURDN1wiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzEzQURDN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQ5X2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjUxNS45NDNcIlxyXG4gICAgICAgICAgeTE9XCIyODguMjM4XCJcclxuICAgICAgICAgIHgyPVwiNTQxLjMzOVwiXHJcbiAgICAgICAgICB5Mj1cIjI5MS40NTRcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjMTNBREM3XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMTNBREM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwYWludDEwX2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjExNy4wMDFcIlxyXG4gICAgICAgICAgeTE9XCIyMzAuNjE5XCJcclxuICAgICAgICAgIHgyPVwiMTE3LjM2XCJcclxuICAgICAgICAgIHkyPVwiMjU4LjE5M1wiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiM5NDVERDZcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiM5NDVERDZcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInBhaW50MTFfbGluZWFyXCJcclxuICAgICAgICAgIHgxPVwiNDc2LjUyOVwiXHJcbiAgICAgICAgICB5MT1cIjM2My4zMVwiXHJcbiAgICAgICAgICB4Mj1cIjQ1MS40NjFcIlxyXG4gICAgICAgICAgeTI9XCIzMzguMjcyXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzEzQURDN1wiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzEzQURDN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kQW5pbWF0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFpRmlsbEdpdGh1YiwgQWlGaWxsSW5zdGFncmFtLCBBaUZpbGxMaW5rZWRpbiwgQWlGaWxsVHdpdHRlckNpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IHsgU29jaWFsSWNvbnMgfSBmcm9tICcuLi9IZWFkZXIvSGVhZGVyU3R5bGVzJztcclxuaW1wb3J0IHsgQ29tcGFueUNvbnRhaW5lciwgRm9vdGVyV3JhcHBlciwgTGlua0NvbHVtbiwgTGlua0l0ZW0sIExpbmtMaXN0LCBMaW5rVGl0bGUsIFNsb2dhbiwgU29jaWFsQ29udGFpbmVyLCBTb2NpYWxJY29uc0NvbnRhaW5lciB9IGZyb20gJy4vRm9vdGVyU3R5bGVzJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvb3RlcldyYXBwZXI+XHJcbiAgICAgIDxMaW5rTGlzdD5cclxuICAgICAgICA8TGlua0NvbHVtbj5cclxuICAgICAgICAgIDxMaW5rVGl0bGU+Q2hhdDwvTGlua1RpdGxlPlxyXG4gICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCJodHRwczovL2Rpc2NvcmQuY29tL2ludml0ZS9CM1dnNFduY1wiPkRpc2NvcmQ8L0xpbmtJdGVtPlxyXG4gICAgICAgIDwvTGlua0NvbHVtbj5cclxuICAgICAgICA8TGlua0NvbHVtbj5cclxuICAgICAgICAgIDxMaW5rVGl0bGUgdGFyZ2V0PVwiX2JsYW5rXCI+RW1haWw8L0xpbmtUaXRsZT5cclxuICAgICAgICAgIDxMaW5rSXRlbSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwicmFraWJ1bGlzbGFtMjAyMDE5QGdtYWlsLmNvbVwiPlxyXG4gICAgICAgICAgICByYWtpYnVsaXNsYW0yMDIwMTlAZ21haWwuY29tXHJcbiAgICAgICAgICA8L0xpbmtJdGVtPlxyXG4gICAgICAgIDwvTGlua0NvbHVtbj5cclxuICAgICAgPC9MaW5rTGlzdD5cclxuICAgICAgPFNvY2lhbEljb25zQ29udGFpbmVyPlxyXG4gICAgICAgIDxDb21wYW55Q29udGFpbmVyPlxyXG4gICAgICAgICAgPFNsb2dhbj4mY29weTsgMjAyMiA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cudmlwdWxqaGEuY29tXCI+UmFraWJ1bCBJc2xhbTwvTGluaz4gLiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvU2xvZ2FuPlxyXG4gICAgICAgIDwvQ29tcGFueUNvbnRhaW5lcj5cclxuICAgICAgICA8U29jaWFsQ29udGFpbmVyPlxyXG4gICAgICAgICAgPFNvY2lhbEljb25zIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vUmFraWJ1bDcxXCI+XHJcbiAgICAgICAgICAgIDxBaUZpbGxHaXRodWIgc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgICAgIDxTb2NpYWxJY29ucyB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3Jha2lidWwtaXNsYW03MT9vcmlnaW5hbF9yZWZlcmVyPWh0dHBzJTNBJTJGJTJGd3d3LmxpbmtlZGluLmNvbSUyRmluJTJGcmFraWJ1bC1pc2xhbTcxXCI+XHJcbiAgICAgICAgICAgIDxBaUZpbGxMaW5rZWRpbiBzaXplPVwiM3JlbVwiIC8+XHJcbiAgICAgICAgICA8L1NvY2lhbEljb25zPlxyXG4gICAgICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIDxBaUZpbGxJbnN0YWdyYW0gc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgICAgIDxTb2NpYWxJY29ucyBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICA8QWlGaWxsVHdpdHRlckNpcmNsZSBzaXplPVwiM3JlbVwiIC8+XHJcbiAgICAgICAgICA8L1NvY2lhbEljb25zPlxyXG4gICAgICAgIDwvU29jaWFsQ29udGFpbmVyPlxyXG4gICAgICA8L1NvY2lhbEljb25zQ29udGFpbmVyPlxyXG5cclxuICAgIDwvRm9vdGVyV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG5cdHdpZHRoOiBjYWxjKDEwMHZ3IC0gOTZweCk7XHJcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XHJcbiAgcGFkZGluZzogMnJlbSA0OHB4IDQwcHg7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcblxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgcGFkZGluZzogMCAxNnB4IDQ4cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtJdGVtID0gc3R5bGVkLmFgXHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG5cdG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblx0dHJhbnNpdGlvbjogLjNzIGVhc2U7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGxlZnQ6IDA7XHJcblxyXG5cdCY6aG92ZXIge1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRsZWZ0OiA2cHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG5cdFx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI4cHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuXHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU29jaWFsSWNvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6IDEwNDBweDtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHR3aWR0aDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDb21wYW55Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOmJhc2VsaW5lO1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdG1hcmdpbjogMCAwIDMycHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTbG9nYW4gPSBzdHlsZWQucGBcclxuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cdG1pbi13aWR0aDogMjgwcHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0cGFkZGluZy10b3A6IDFyZW07XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuXHRcdGZvbnQtc2l6ZTogMTdweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIycHg7XHJcblx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRtaW4td2lkdGg6IDEwMHB4O1xyXG5cdH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNvY2lhbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0fVxyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtMaXN0ID0gc3R5bGVkLnVsYFxyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoODVweCwgMjIwcHgpKTtcclxuXHRnYXA6IDQwcHg7XHJcbiAgcGFkZGluZzogNDBweCAwIDI4cHg7XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfSB7XHJcblx0XHRwYWRkaW5nOiAzMnB4IDAgMTZweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBhZGRpbmc6IDMycHggMCAxNnB4O1xyXG5cdFx0Z2FwOiAxNnB4O1xyXG5cdH1cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwYWRkaW5nOiAzMnB4IDRweCAxNnB4O1xyXG5cdFx0Z2FwOiA1cHg7XHJcblx0fVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlua0NvbHVtbiA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdG1heC13aWR0aDogMjIwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbmBcclxuZXhwb3J0IGNvbnN0IExpbmtUaXRsZSA9IHN0eWxlZC5oNGBcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bGluZS1oZWlnaHQ6IDI0cHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG5cdG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcblx0XHRmb250LXNpemU6IDEwcHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDhweDtcclxuXHR9XHJcbmBcclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWlGaWxsR2l0aHViLCBBaUZpbGxJbnN0YWdyYW0sIEFpRmlsbExpbmtlZGluLCBBaUZpbGxUd2l0dGVyQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIERpdjEsIERpdjIsIERpdjMsIE5hdkxpbmssIFNvY2lhbEljb25zIH0gZnJvbSAnLi9IZWFkZXJTdHlsZXMnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gIDxDb250YWluZXI+XHJcbiAgICA8RGl2MT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5zdmdcIiBoZWlnaHQ9ezQwfSB3aWR0aD17NDB9IC8+IDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDEwLCBtYXJnaW5Ub3A6IDcsIGZvbnRTaXplOiAyMCB9fSA+UmFraWJ1bCBJc2xhbTwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvRGl2MT5cclxuICAgIDxEaXYyPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIiNwcm9qZWN0c1wiPlxyXG4gICAgICAgICAgPE5hdkxpbms+UHJvamVjdHM8L05hdkxpbms+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIiNza2lsbHNcIj5cclxuICAgICAgICAgIDxOYXZMaW5rPlNraWxsczwvTmF2TGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPVwiI2Fib3V0XCI+XHJcbiAgICAgICAgICA8TmF2TGluaz5BYm91dDwvTmF2TGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ibG9nLnZpcHVsamhhLmNvbVwiPlxyXG4gICAgICAgICAgPE5hdkxpbms+QmxvZzwvTmF2TGluaz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L0RpdjI+XHJcbiAgICA8RGl2Mz5cclxuICAgICAgPFNvY2lhbEljb25zIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vUmFraWJ1bDcxXCI+XHJcbiAgICAgICAgPEFpRmlsbEdpdGh1YiBzaXplPVwiM3JlbVwiIC8+XHJcbiAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgIDxTb2NpYWxJY29ucyB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3Jha2lidWwtaXNsYW03MT9vcmlnaW5hbF9yZWZlcmVyPWh0dHBzJTNBJTJGJTJGd3d3LmxpbmtlZGluLmNvbSUyRmluJTJGcmFraWJ1bC1pc2xhbTcxXCI+XHJcbiAgICAgICAgPEFpRmlsbExpbmtlZGluIHNpemU9XCIzcmVtXCIgLz5cclxuICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgPFNvY2lhbEljb25zIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgPEFpRmlsbEluc3RhZ3JhbSBzaXplPVwiM3JlbVwiIC8+XHJcbiAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgIDxTb2NpYWxJY29ucyB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgIDxBaUZpbGxUd2l0dGVyQ2lyY2xlIHNpemU9XCIzcmVtXCIgLz5cclxuICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgIDwvRGl2Mz5cclxuICA8L0NvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IHsgSW9Jb3NBcnJvd0Ryb3Bkb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICBncmlkLWNvbHVtbi1nYXA6IDJyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA2MHB4KTtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogMC41cmVtO1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAwLjVyZW07XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgRGl2MSA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IERpdjIgPSBzdHlsZWQuZGl2YFxyXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDAuNzVlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA1O1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IERpdjMgPSBzdHlsZWQuZGl2YFxyXG4gIGdyaWQtYXJlYTogMSAvIDUgLyAyIC8gNjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtYXJlYTogMSAvIDQgLyAyIC8gNjtcclxuICB9XHJcbmA7XHJcblxyXG4vLyBOYXZpZ2F0aW9uIExpbmtzXHJcbmV4cG9ydCBjb25zdCBOYXZMaW5rID0gc3R5bGVkLmFgXHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8vIERyb3BEb3duIENvbnRhY3RcclxuZXhwb3J0IGNvbnN0IENvbnRhY3REcm9wRG93biA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcblxyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xyXG4gIH1cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZQcm9kdWN0c0ljb24gPSBzdHlsZWQoSW9Jb3NBcnJvd0Ryb3Bkb3duKWBcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICBvcGFjaXR5OiAkeyh7IGlzT3BlbiB9KSA9PiAoaXNPcGVuID8gJzEnIDogJy43NScpfTtcclxuICB0cmFuc2Zvcm06ICR7KHsgaXNPcGVuIH0pID0+IChpc09wZW4gPyAnc2NhbGVZKC0xKScgOiAnc2NhbGVZKDEpJyl9O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBtYXJnaW46IDJweCAwIDAgMnB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbi8vIFNvY2lhbCBJY29ucyBcclxuXHJcbmV4cG9ydCBjb25zdCBTb2NpYWxJY29ucyA9IHN0eWxlZC5hYFxyXG50cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbmNvbG9yOiB3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMmQ0NTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIFxyXG4gIH1cclxuYCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlLCBMaW5rIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbic7XHJcbmltcG9ydCB7IExlZnRTZWN0aW9uIH0gZnJvbSAnLi9IZXJvU3R5bGVzJztcclxuXHJcbmNvbnN0IEhlcm8gPSAocHJvcHMpID0+IChcclxuICA8PlxyXG4gICAgPFNlY3Rpb24gcm93IG5vcGFkZGluZz5cclxuICAgICAgPExlZnRTZWN0aW9uPlxyXG4gICAgICAgIDxTZWN0aW9uVGl0bGUgbWFpbiBjZW50ZXI+XHJcbiAgICAgICAgICBIZXkgdGhlcmUsXHJcbiAgICAgICAgPC9TZWN0aW9uVGl0bGU+XHJcbiAgICAgICAgPFNlY3Rpb25UZXh0PlxyXG4gICAgICAgICAgSGV5IHRoZXJlLCBUaGlzIGlzIFZpcHVsIEpoYSBha2EgbG9yZGFyY2FkaXVzLiBJIGFtIGFuIEFuZHJvaWQgJiBGbHV0dGVyIGRldmVsb3BlciB3aG8gYWxzbyB3b3JrcyBvbiBST01zLCBLZXJuZWxzLCAmIFNjcmlwdHMuXHJcbiAgICAgICAgPC9TZWN0aW9uVGV4dD5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvZmlsZXMvcmVzdW1lLnBkZic7XHJcbiAgICAgICAgfX0+TXkgUmVzdW1lPC9CdXR0b24+XHJcbiAgICAgIDwvTGVmdFNlY3Rpb24+XHJcbiAgICA8L1NlY3Rpb24+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBMZWZ0U2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IEJsb2dDYXJkLCBDYXJkSW5mbywgRXh0ZXJuYWxMaW5rcywgR3JpZENvbnRhaW5lciwgSGVhZGVyVGhyZWUsIEhyLCBUYWcsIFRhZ0xpc3QsIFRpdGxlQ29udGVudCwgVXRpbGl0eUxpc3QsIEltZyB9IGZyb20gJy4vUHJvamVjdHNTdHlsZXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiAoXHJcbiAgPFNlY3Rpb24gaWQ9XCJwcm9qZWN0c1wiPlxyXG4gICAgPFNlY3Rpb25EaXZpZGVyIC8+XHJcbiAgICA8U2VjdGlvblRpdGxlIG1haW4+UHJvamVjdHM8L1NlY3Rpb25UaXRsZT5cclxuICAgIDxHcmlkQ29udGFpbmVyPlxyXG4gICAgICB7cHJvamVjdHMubWFwKChwLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCbG9nQ2FyZCBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8SW1nIHNyYz17cC5pbWFnZX0gLz5cclxuXHJcbiAgICAgICAgICAgIDxIZWFkZXJUaHJlZSB0aXRsZT17cC50aXRsZX0+e3AudGl0bGV9PC9IZWFkZXJUaHJlZT5cclxuICAgICAgICAgICAgPEhyIC8+XHJcblxyXG4gICAgICAgICAgICA8Q2FyZEluZm8gY2xhc3NOYW1lPVwiY2FyZC1pbmZvXCI+e3AuZGVzY3JpcHRpb259PC9DYXJkSW5mbz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8VGl0bGVDb250ZW50PlRlY2ggU3RhY2s8L1RpdGxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8SHIgLz5cclxuICAgICAgICAgICAgICA8VGFnTGlzdD5cclxuICAgICAgICAgICAgICAgIHtwLnRhZ3MubWFwKCh0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8VGFnIGtleT17aX0+e3R9PC9UYWc+O1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9UYWdMaXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFV0aWxpdHlMaXN0PlxyXG4gICAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzIGhyZWY9e3AudmlzaXR9PkxpdmUgUHJldmlldzwvRXh0ZXJuYWxMaW5rcz5cclxuICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rcyBocmVmPXtwLnNvdXJjZX0+U291cmNlIENvZGU8L0V4dGVybmFsTGlua3M+XHJcbiAgICAgICAgICAgIDwvVXRpbGl0eUxpc3Q+XHJcbiAgICAgICAgICA8L0Jsb2dDYXJkPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gIDwvU2VjdGlvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxyXG5kaXNwbGF5OiBncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbnBhZGRpbmctdG9wOiAzcmVtO1xyXG5wYWRkaW5nLWJvdHRvbTogM3JlbTtcclxucGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuY29sdW1uLWdhcDogMXJlbTtcclxucm93LWdhcDogM3JlbTtcclxuQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IEJsb2dDYXJkID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDgwLCA3OCwgNzgsIDAuNSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBUaXRsZUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAyMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuN2VtO1xyXG4gIGNvbG9yOiAjOWNjOWUzO1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG5cclxuYDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyVGhyZWUgPSBzdHlsZWQuaDNgXHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGNvbG9yOiAjOWNjOWUzO1xyXG4gIHBhZGRpbmc6IC41cmVtIDA7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy50aXRsZSA/ICczcmVtJyA6ICcycmVtJ307XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSHIgPSBzdHlsZWQuaHJgXHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgbWFyZ2luOiA4cHggYXV0bztcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogI2QwYmI1NztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnRybyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGNvbG9yOiAjZGNlM2U3O1xyXG4gIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2VyaWYnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkSW5mbyA9IHN0eWxlZC5wYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgNTBweDtcclxuICBjb2xvcjogI2U0ZTZlNztcclxuICBmb250LXN0eWxlOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHBhZGRpbmc6LjNyZW1cclxuICBcclxufVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVdGlsaXR5TGlzdCA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIG1hcmdpbjogMi41cmVtIDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRXh0ZXJuYWxMaW5rcyA9IHN0eWxlZC5hYFxyXG5jb2xvcjojZDRjMGMwO1xyXG5mb250LXNpemU6IDEuNnJlbTtcclxucGFkZGluZzoxcmVtIDEuNXJlbTtcclxuYmFja2dyb3VuZDogIzZiMzAzMDtcclxuYm9yZGVyLXJhZGl1czogMTVweDtcclxudHJhbnNpdGlvbjogMC41cztcclxuJjpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjODAxNDE0O1xyXG5cclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ0xpc3QgPSBzdHlsZWQudWxgXHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5wYWRkaW5nOiAycmVtO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQubGlgXHJcbmNvbG9yOiAjZDhiZmJmO1xyXG5mb250LXNpemU6IDEuNXJlbTtcclxuYCIsImltcG9ydCB7IERpQW5kcm9pZCwgRGlUZXJtaW5hbCB9IGZyb20gXCJyZWFjdC1pY29ucy9kaVwiO1xyXG5pbXBvcnQgeyBTaUphdmEsIFNpRmlyZWJhc2UsIFNpR2l0IH0gZnJvbSBcInJlYWN0LWljb25zL3NpXCI7XHJcbmltcG9ydCB7IFJpRmx1dHRlckZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTa2lsbHMgPSBbXHJcbiAge1xyXG4gICAgc2x1ZzogXCJhbmRyb2lkXCIsXHJcbiAgICBDb21wb25lbnQ6IERpQW5kcm9pZCxcclxuICAgIHRpdGxlOiBcIkFuZHJvaWRcIixcclxuICAgIERlc2NyaXB0aW9uOiAoKSA9PiA8Pkkgd29yayBvbiBST01zLCBLZXJuZWxzICYgQW5kcm9pZCBBcHBzIHVzaW5nIEphdmEuPC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2x1ZzogXCJmbHV0dGVyXCIsXHJcbiAgICBDb21wb25lbnQ6IFJpRmx1dHRlckZpbGwsXHJcbiAgICB0aXRsZTogXCJGbHV0dGVyXCIsXHJcbiAgICBEZXNjcmlwdGlvbjogKCkgPT4gPD5DdXJyZW50bHkgd29ya2luZyB3aXRoIERhcnQgJiBGbHV0dGVyIGZvciBhcHAgZGV2ZWxvcG1lbnQuIDwvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHNsdWc6IFwiamF2YVwiLFxyXG4gICAgQ29tcG9uZW50OiBTaUphdmEsXHJcbiAgICB0aXRsZTogXCJKYXZhXCIsXHJcbiAgICBEZXNjcmlwdGlvbjogKCkgPT4gPD5JIGNhbiBjb2RlIGluIEphdmEuIEJ1dCBJIG1haW5seSB1c2UgaXQgZm9yIEFuZHJvaWQgYXBwIGRldmVsb3BtZW50LjwvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHNsdWc6IFwidGVybWluYWxcIixcclxuICAgIENvbXBvbmVudDogRGlUZXJtaW5hbCxcclxuICAgIHRpdGxlOiBcIlNjcmlwdGluZ1wiLFxyXG4gICAgRGVzY3JpcHRpb246ICgpID0+IDw+SSBoYXZlIHdyaXR0ZW4gZG96ZW5zIG9mIFNoZWxsIHNjcmlwdHMgZm9yIHZhcmlvdXMgcHVycG9zZXMuPC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2x1ZzogXCJmaXJlYmFzZVwiLFxyXG4gICAgQ29tcG9uZW50OiBTaUZpcmViYXNlLFxyXG4gICAgdGl0bGU6IFwiRmlyZWJhc2VcIixcclxuICAgIERlc2NyaXB0aW9uOiAoKSA9PiA8PkkgaGF2ZSB1c2VkIEZpcmViYXNlIGZvciBhdXRoLCBkYXRhYmFzZSAmIGFuYWx5dGljcyBpbiBteSBhcHBzLjwvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHNsdWc6IFwiZ2l0XCIsXHJcbiAgICBDb21wb25lbnQ6IFNpR2l0LFxyXG4gICAgdGl0bGU6IFwiR2l0XCIsXHJcbiAgICBEZXNjcmlwdGlvbjogKCkgPT4gPD5HaXQgaXMgYSB0b29sIHRoYXQgSSB1c2UgZXZlcnkgZGF5LiBJIHVzZSBHaXRIdWIgZm9yIHB1c2hpbmcgbXkgY29kZS48Lz4sXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSwgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTGlzdCwgTGlzdENvbnRhaW5lciwgTGlzdEl0ZW0sIExpc3RQYXJhZ3JhcGgsIExpc3RUaXRsZSwgfSBmcm9tIFwiLi9UZWNobm9sb2dpZXNTdHlsZXNcIjtcclxuaW1wb3J0IHsgU2tpbGxzIH0gZnJvbSAnLi9Ta2lsbHMnXHJcblxyXG5jb25zdCBUZWNobm9sb2dpZXMgPSAoKSA9PiAoXHJcbiAgPFNlY3Rpb24gaWQ9XCJza2lsbHNcIj5cclxuICAgIDxTZWN0aW9uRGl2aWRlciBkaXZpZGVyIC8+XHJcbiAgICA8U2VjdGlvblRpdGxlPlNraWxsczwvU2VjdGlvblRpdGxlPlxyXG4gICAgPFNlY3Rpb25UZXh0PlxyXG4gICAgICBJJ3ZlIHdvcmtlZCB3aXRoIG11bHRpcGxlIHRlY2hub2xvZ2llcyBhcyBhIGRldmVsb3BlciB0byBkZXZlbG9wICYgbWFpbnRhaW4gbXkgcHJvamVjdHMuXHJcbiAgICA8L1NlY3Rpb25UZXh0PlxyXG4gICAgPExpc3Q+XHJcbiAgICAgIHtTa2lsbHMubWFwKChTa2lsbCkgPT4gKFxyXG4gICAgICAgIDxMaXN0SXRlbSBrZXk9e1NraWxsLnNsdWd9PlxyXG4gICAgICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgICAgIDxTa2lsbC5Db21wb25lbnQgc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgPC9waWN0dXJlPlxyXG4gICAgICAgICAgPExpc3RDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxMaXN0VGl0bGU+e1NraWxsLnRpdGxlfTwvTGlzdFRpdGxlPlxyXG4gICAgICAgICAgICA8TGlzdFBhcmFncmFwaD5cclxuICAgICAgICAgICAgICA8U2tpbGwuRGVzY3JpcHRpb24gLz5cclxuICAgICAgICAgICAgPC9MaXN0UGFyYWdyYXBoPlxyXG4gICAgICAgICAgPC9MaXN0Q29udGFpbmVyPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICkpfVxyXG4gICAgPC9MaXN0PlxyXG4gICAgPFNlY3Rpb25EaXZpZGVyIGNvbG9yQWx0IC8+XHJcbiAgPC9TZWN0aW9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVjaG5vbG9naWVzO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KDUwJSA1MCUgYXQgNTAlIDUwJSwgcmdiYSg3OSwgMTA4LCAxNzYsIDAuMjUpIDUzLjglLCByZ2JhKDc5LCAxMDgsIDE3NiwgMCkgMTAwJSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNjBweDtcclxuICBtYXJnaW4tdG9wOiA0OHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ30ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5JbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9e1xyXG4gICAgbWFyZ2luOiA2NHB4IDA7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgICBtYXJnaW46IDY0cHggMDtcclxuICAgIGdhcDogMjRweFxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy54c317XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0VGl0bGUgPSBzdHlsZWQuaDRgXHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0UGFyYWdyYXBoID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQubGlgXHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgbWF4LXdpZHRoOiAyMDNweDtcclxufVxyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdEljb24gPSBzdHlsZWQuaW1nYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG5gXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBDYXJvdXNlbEJ1dHRvbiwgQ2Fyb3VzZWxCdXR0b25Eb3QsIENhcm91c2VsQnV0dG9ucywgQ2Fyb3VzZWxDb250YWluZXIsIENhcm91c2VsSXRlbSwgQ2Fyb3VzZWxJdGVtSW1nLCBDYXJvdXNlbEl0ZW1UZXh0LCBDYXJvdXNlbEl0ZW1UaXRsZSwgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIH0gZnJvbSAnLi9UaW1lTGluZVN0eWxlcyc7XHJcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBUaW1lTGluZURhdGEgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IFRPVEFMX0NBUk9VU0VMX0NPVU5UID0gVGltZUxpbmVEYXRhLmxlbmd0aDtcclxuXHJcbmNvbnN0IFRpbWVsaW5lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IHNjcm9sbCA9IChub2RlLCBsZWZ0KSA9PiB7XHJcbiAgICByZXR1cm4gbm9kZS5zY3JvbGxUbyh7IGxlZnQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGkpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcihjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43ICogKGkgLyBUaW1lTGluZURhdGEubGVuZ3RoKSk7XHJcblxyXG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43KSkgKiBUaW1lTGluZURhdGEubGVuZ3RoKTtcclxuXHJcbiAgICAgIHNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gc25hcCBiYWNrIHRvIGJlZ2lubmluZyBvZiBzY3JvbGwgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxyXG4gIC8vIGF2b2lkcyBhIGJ1ZyB3aGVyZSBjb250ZW50IGlzIGNvdmVyZWQgdXAgaWYgY29taW5nIGZyb20gc21hbGxlciBzY3JlZW5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlY3Rpb24gaWQ9XCJhYm91dFwiPlxyXG4gICAgICA8U2VjdGlvblRpdGxlPk15IEpvdXJuZXk8L1NlY3Rpb25UaXRsZT5cclxuICAgICAgPFNlY3Rpb25UZXh0PlxyXG4gICAgICAgIEluIG15IGpvdXJuZXkgdG8gZGF0ZSwgSSBoYXZlIGxlYXJuZWQgYSBncmVhdCBkZWFsIGFib3V0IGRldmVsb3BtZW50IGFuZCBsaWZlIGluIGdlbmVyYWwuXHJcbiAgICAgIDwvU2VjdGlvblRleHQ+XHJcbiAgICAgIDxDYXJvdXNlbENvbnRhaW5lciByZWY9e2Nhcm91c2VsUmVmfSBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfT5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGVcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGZpbmFsPXtpbmRleCA9PT0gVE9UQUxfQ0FST1VTRUxfQ09VTlQgLSAxfT5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtXHJcbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBpZD17YGNhcm91c2VsX19pdGVtLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICB7YCR7aXRlbS55ZWFyfWB9XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1JbWdcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDggNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIuNSA1LjVDMy44ODA3MSA1LjUgNSA0LjM4MDcxIDUgM1YzLjVMMjA4IDMuNTAwMDJWMi41MDAwMkw1IDIuNVYzQzUgMS42MTkyOSAzLjg4MDcxIDAuNSAyLjUgMC41QzEuMTE5MjkgMC41IDAgMS42MTkyOSAwIDNDMCA0LjM4MDcxIDEuMTE5MjkgNS41IDIuNSA1LjVaXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3BhaW50MF9saW5lYXIpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5PVwiMC4zM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhaW50MF9saW5lYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4MT1cIi00LjMwNDEyZS0xMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxPVwiMC41XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDI9XCIyMDhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5Mj1cIjAuNTAwMjk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIndoaXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9XCIwLjc5NDc4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wQ29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcE9wYWNpdHk9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbUltZz5cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGV4dD57aXRlbS50ZXh0fTwvQ2Fyb3VzZWxJdGVtVGV4dD5cclxuICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGU+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9DYXJvdXNlbENvbnRhaW5lcj5cclxuICAgICAgPENhcm91c2VsQnV0dG9ucz5cclxuICAgICAgICB7VGltZUxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25Eb3QgYWN0aXZlPXthY3RpdmVJdGVtfSAvPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsQnV0dG9uPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9DYXJvdXNlbEJ1dHRvbnM+XHJcbiAgICAgIDxTZWN0aW9uRGl2aWRlciAvPlxyXG4gICAgPC9TZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcclxuIiwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxDb250YWluZXIgPSBzdHlsZWQudWxgXHJcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XHJcbiAgYmFja2dyb3VuZDogIzBGMTYyNDtcclxuICBwYWRkaW5nOiAwcmVtO1xyXG4gIGxpc3Qtc3R5bGU6bm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXHJcbiAgLyogb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xyXG5cclxuICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAmOmZpcnN0LW9mLXR5cGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuXHJcbiAgLy9yZW1vdmUgc2Nyb2xsYmFyXHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgXHJcbiAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICBkaXNwbGF5OiBub25lO1xyXG4gICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcclxuICAgIHRvdWNoLWFjdGlvbjogcGFuLXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUgPSBzdHlsZWQuZGl2YFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLXdpZHRoOiAkeyh7IGZpbmFsIH0pID0+IGZpbmFsID8gYDEyMCU7YCA6IGBtaW4tY29udGVudGB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjMEYxNjI0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXgtd2lkdGg6IDE5NnB4O1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgbWF4LXdpZHRoOiAxMjRweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwRjE2MjQ7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcclxuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIFxyXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgb3BhY2l0eTogMWAgOiBgb3BhY2l0eTogMC41YH07IFxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbVRpdGxlID0gc3R5bGVkLmg0YFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyogVGhpcyBncmFkaWVudCBpcyBkaWZmZXJlbnQgZHVlIHRvIHRoZSBzaXplIG9mIHRoZSBUaXRsZSBjb250YWluZXIsIGl0IG11c3QgdHJhbnNpdGlvbiBzb29uZXIgdG8gYmUgdmlzaWJsZSBvbiB0aGUgdGV4dCAqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjEuNTdkZWcsICNGRkZGRkYgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpIDMwLjE1JSk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1JbWcgPSBzdHlsZWQuc3ZnYFxyXG4gIG1hcmdpbi1sZWZ0OiAyMXB4O1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMCwwLDEpLCByZ2JhKDAsMCwwLDApKTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtVGV4dCA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbnMgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAyODhweDtcclxuXHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGAxYCA6IGAuMzNgfTtcclxuICB0cmFuc2Zvcm06ICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgPT09IHByb3BzLmluZGV4ID8gYHNjYWxlKDEuNilgIDogYHNjYWxlKDEpYH07XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbkRvdCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDNweDtcclxuICBoZWlnaHQ6IDNweDtcclxuYFxyXG4iLCJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdDb3ZpZC0xOSBTdGF0dXMgQXBwJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkNPVklELTE5IFN0YXR1cyBpcyBhIGZyZWUsIG9wZW4tc291cmNlIEFuZHJvaWQgYXBwbGljYXRpb24gdGhhdCBzaG93cyB0aGUgY3VycmVudCBzdGF0ZSBvZiBDT1ZJRC0xOSBpbiBJbmRpYSBhbmQgdGhlIHdvcmxkLiBJdCBoYXMgYSBiZWF1dGlmdWwsIHNpbXBsZSwgZmFzdCwgYW5kIHJlc3BvbnNpdmUgVUkuXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvY292aWQuanBnJyxcclxuICAgIHRhZ3M6IFsnSmF2YScsICdYTUwnLCAnRmlyZWJhc2UnLCAnUmVzdCBBUEknXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Db2RlcnMtT2YtWERBLU9UL2NvdmlkMTktc3RhdHVzLWFuZHJvaWQnLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL3Byb2plY3QudmlwdWxqaGEuY29tL2NvdmlkLycsXHJcbiAgICBpZDogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnUG9ydGZvbGlvIFdlYnNpdGUnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyB3YXMgbXkgcGVyc29uYWwgcG9ydGZvbGlvIHdlYnNpdGUgdGhhdCBoYXMgYWxsIG15IHdvcmsgYW5kIHByb2plY3QgZXhwZXJpZW5jZSwgaW5jbHVkaW5nIG15IHJlc3VtZS4gSXQgdXNlZCB0byBiZSBteSBtYWluIHBvcnRmb2xpbyBiZWZvcmUgZGVwbG95aW5nIHRoaXMgY3VycmVudCBwb3J0Zm9saW8uXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvcG9ydGZvbGlvLmpwZycsXHJcbiAgICB0YWdzOiBbJ0hUTUwnLCAnQ1NTJywgJ0Jvb3RzdHJhcCcsICdKUXVlcnknXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sb3JkYXJjYWRpdXMvd2Vic2l0ZScsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vcHJvamVjdC52aXB1bGpoYS5jb20vd2Vic2l0ZS8nLFxyXG4gICAgaWQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0FCUyBUd2Vha3MnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQUJTIFR3ZWFrcyBvciBBcmtheW5pbmUgQm9vc3QgU2NyaXB0IGlzIGEgY29sbGVjdGlvbiBvZiBzaGVsbCBzY3JpcHRzIHdyaXR0ZW4gd2l0aCB0aGUgYWltIG9mIGVuaGFuY2luZyB0aGUgcGVyZm9ybWFuY2UgYW5kIGJhdHRlcnkgbGlmZSBvZiBhbiBBbmRyb2lkIHBob25lLiBJdCBnb3QgMiBMYWMrIGRvd25sb2FkcyBvdmVyYWxsLlwiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2Ficy5qcGcnLFxyXG4gICAgdGFnczogWydTaGVsbCcsICdCdXN5Ym94J10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vbG9yZGFyY2FkaXVzL0FCUy1Ud2Vha3MnLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2ZvcnVtLnhkYS1kZXZlbG9wZXJzLmNvbS90L3R3ZWFrLW1vZC1hcm0teDg2LXByb2plY3QtZGFyay1ib29zdGVyLWFicy10d2Vha3MtdjUtMC0yLTMtNi0wLTIzLTAxLTIwMTYuMzEyMDQwNC8nLFxyXG4gICAgaWQ6IDIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0VsZWN0cmFCbHVlIEtlcm5lbCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJFbGVjdHJhQmx1ZSBpcyBhIGZsYXNoICYgZm9yZ2V0IGN1c3RvbSBrZXJuZWwgZm9yIHN1cHBvcnRlZCBBbmRyb2lkIGRldmljZXMuIEl0IHdhcyBkZXZlbG9wZWQgd2l0aCB0aGUgYWltIHRvIHByb3ZpZGUgYSBzdGFibGUsIGZsdWlkLCAmIGJhdHRlcnktZWZmaWNpZW50IGV4cGVyaWVuY2Ugd2l0aCBjdXN0b21pemF0aW9ucy5cIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9lYi5qcGcnLFxyXG4gICAgdGFnczogWydMaW51eCcsICdDJywgJ01ha2VmaWxlJywgJ0Jhc2gnXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sb3JkYXJjYWRpdXMvZWxlY3RyYWJsdWVfbWlkbycsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZm9ydW0ueGRhLWRldmVsb3BlcnMuY29tL3Qva2VybmVsLW1pZG8tb3Jlby1waWUtZWxlY3RyYWJsdWUta2VybmVsLTIxLTAtanVseS0wNi1yZWRtaS1ub3RlLTQuMzY1NTY1MS8nLFxyXG4gICAgaWQ6IDMsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0xlbm92byBTTkFQaXQnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTGVub3ZvIFNOQVBpdCBDYW1lcmEgd2FzIG9uZSBvZiB0aGUgZmluZXN0IE9FTSBjYW1lcmEgYXBwcyBiYWNrIGluIHRob3NlIGRheXMuIEl0IGhhZCB0b25uZXMgb2YgdW5pcXVlIGFuZCBhbWF6aW5nIGZlYXR1cmVzLiBJIHBvcnRlZCBpdCB0byB3b3JrIG9uIGFsbW9zdCBhbGwgZGV2aWNlcyBhdCB0aGF0IHRpbWUuXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvc25hcGl0LmpwZycsXHJcbiAgICB0YWdzOiBbJ0phdmEnLCAnTGlicycsICdTbWFsaSddLFxyXG4gICAgc291cmNlOiAnIycsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZm9ydW0ueGRhLWRldmVsb3BlcnMuY29tL3QvYXBwLXBvcnQtNi0wLWxlbm92by1zbmFwaXQtY2FtZXJhLTUtOC01My1mb3ItYWxsLWRldmljZXMuMzYwODA2NS8nLFxyXG4gICAgaWQ6IDMsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0N5YW5vZ2VuT1MgQXBwcycsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJDeWFub2dlbk9TIDEyLjEgaGFkIGEgc2V0IG9mIGV4Y2x1c2l2ZSBhcHBzIGxpa2UgYSBuZXcgdGhlbWUgZW5naW5lIGFuZCBhIG5ldyBUcnVlY2FsbGVyIGludGVncmF0ZWQgZGlhbGVyLiBJIHBvcnRlZCBpdCB0byB3b3JrIHdpdGggQ3lhbm9nZW5Nb2QgMTMgYW5kIENNIDEzIGJhc2VkIFJPTXMuXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvY2FwcHMuanBnJyxcclxuICAgIHRhZ3M6IFsnSmF2YScsICdMaWJzJ10sXHJcbiAgICBzb3VyY2U6ICcjJyxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9mb3J1bS54ZGEtZGV2ZWxvcGVycy5jb20vdC9jLWFwcHMtdjItdW5vZmZpY2lhbC02LTAteC1jeWFub2dlbi1vcy1jYXBwcy12Mi1mb3ItY20xMy1hbmQtY20xMy1iYXNlZC1yb21zLjMyNTQ4NjUvJyxcclxuICAgIGlkOiAzLFxyXG4gIH0sXHJcblxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcclxuICB7IHllYXI6IDIwMTYsIHRleHQ6ICdTdGFydGVkIG15IGpvdXJuZXkgYXMgYSBuZXcgZGV2ZWxvcGVyLicsIH0sXHJcbiAgeyB5ZWFyOiAyMDE3LCB0ZXh0OiAnV29ya2VkIGludGVuc2l2ZWx5IG9uIFJPTXMgJiBLZXJuZWxzLicsIH0sXHJcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiAnTGVhcm5lZCBBbmRyb2lkIGFwcCBkZXZlbG9wbWVudC4nLCB9LFxyXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ0ZpbmlzaGVkIERpcGxvbWEgaW4gQ29tcHV0ZXIgRW5naW5lZXJpbmcuJywgfSxcclxuICB7IHllYXI6IDIwMjAsIHRleHQ6ICdHb3QgYSBzY2hvbGFyc2hpcCBmcm9tIHRoZSBEZWxoaSBnb3Zlcm5tZW50LicsIH0sXHJcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiAnU3RpbGwgdHJ5aW5nIHRvIGZpZ3VyZSBvdXQgdGhpcyB3ZWlyZCB5ZWFyLicsIH0sXHJcbl07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJ1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL0xheW91dFN0eWxlcydcclxuXHJcbmV4cG9ydCBjb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDogMTI4MHB4O1xyXG53aWR0aDogMTAwJTtcclxubWFyZ2luOiBhdXRvO1xyXG5gO1xyXG4iLCJpbXBvcnQgQWNvbXBsaXNobWVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9BY29tcGxpc2htZW50cy9BY29tcGxpc2htZW50cyc7XHJcbmltcG9ydCBCZ0FuaW1hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0JhY2tncm9vdW5kQW5pbWF0aW9uL0JhY2tncm91bmRBbmltYXRpb24nO1xyXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8vSGVybyc7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzJztcclxuaW1wb3J0IFRlY2hub2xvZ2llcyBmcm9tICcuLi9jb21wb25lbnRzL1RlY2hub2xvZ2llcy9UZWNobm9sb2dpZXMnO1xyXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZSc7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPFNlY3Rpb24gZ3JpZD5cclxuICAgICAgICA8SGVybyAvPlxyXG4gICAgICAgIDxCZ0FuaW1hdGlvbiAvPlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICAgIDxQcm9qZWN0cyAvPlxyXG4gICAgICA8VGVjaG5vbG9naWVzIC8+XHJcbiAgICAgIDxUaW1lbGluZSAvPlxyXG4gICAgICA8QWNvbXBsaXNobWVudHMgLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBCdXR0b25CYWNrLCBCdXR0b25Gcm9udCB9IGZyb20gJy4vaW5kZXgnXHJcblxyXG5jb25zdCBCdXR0b24gPSAocHJvcHMpID0+IChcclxuICA8QnV0dG9uQmFjayBhbHQ9e3Byb3BzLmFsdH0gZm9ybT17cHJvcHMuZm9ybX0gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfT57cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8QnV0dG9uRnJvbnQgYWx0PXtwcm9wcy5hbHR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0+e3Byb3BzLmNoaWxkcmVufTwvQnV0dG9uRnJvbnQ+XHJcbiAgPC9CdXR0b25CYWNrPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGRpc3BsYXk6ICR7KHByb3BzKSA9PiBwcm9wcy5ncmlkID8gXCJncmlkXCIgOiBcImZsZXhcIn07XHJcbiAgZmxleC1kaXJlY3Rpb246ICR7KHByb3BzKSA9PiBwcm9wcy5yb3cgPyBcInJvd1wiIDogXCJjb2x1bW5cIn07XHJcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm5vcGFkZGluZyA/IFwiMFwiIDogXCIzMnB4IDQ4cHggMFwifSA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDQ4cHggMDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubm9wYWRkaW5nID8gXCIwXCIgOiBcIjE2cHggMTZweCAwXCJ9IDtcclxuXHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uVGl0bGUgPSBzdHlsZWQuaDJgXHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzY1cHgnIDogJzU2cHgnfTtcclxuICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNzJweCcgOiAnNjdweCd9O1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMS41N2RlZywgI0ZGRkZGRiAxOC43NyUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikgNjAuMTUlKTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc1OHB4IDAgMTZweCcgOiAnMCd9O1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzU2cHgnIDogJzQ4cHgnfTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc1NnB4JyA6ICc0OHB4J307XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNDBweCAwIDEycHgnIDogJzAnfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICcyOHB4JyA6ICczMnB4J307XHJcbiAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnMzJweCcgOiAnNDBweCd9O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnMTZweCAwIDhweCcgOiAnMCd9O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UZXh0ID0gc3R5bGVkLnBgXHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMy42cmVtO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIG1heC13aWR0aDogNjcwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uRGl2aWRlciA9IHN0eWxlZC5kaXZgXHJcblxyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3JBbHQgP1xyXG4gICAgJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGNDY3MzcgMCUsICM5NDVERDYgMTAwJSknIDpcclxuICAgICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMTNBREM3IDAlLCAjOTQ1REQ2IDEwMCUpJ307XHJcblxyXG4gICAgbWFyZ2luOiAkeyhwcm9wcykgPT4gcHJvcHMuZGl2aWRlciA/IFwiNHJlbSAwXCIgOiBcIlwifTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uU3ViVGV4dCA9IHN0eWxlZC5wYFxyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcblxyXG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBtYXgtd2lkdGg6IDY3MnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IFNlY29uZGFyeUJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzMpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMGYxNjI0O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTBlNGViO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMwNDE2OTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xyXG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25CYWNrID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzE1MHB4JyA6ICcyNjJweCd9O1xyXG4gIGhlaWdodDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzUycHgnIDogJzY0cHgnfTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzI0cHgnfTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46ICR7KHsgYWx0LCBmb3JtIH0pID0+IChhbHQgfHwgZm9ybSkgPyAnMCcgOiAnMCAwIDgwcHgnfTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZmNjIyZSAwJSwgI0IxMzNGRiAxMDAlKScgOiAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwREJEOCAwJSwgI0IxMzNGRiAxMDAlKSd9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogJHsoeyBkaXNhYmxlZCB9KSA9PiBkaXNhYmxlZCA/ICcuNScgOiAnMSd9O1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICB3aWR0aDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzE1MHB4JyA6ICcxODRweCd9O1xyXG4gICAgaGVpZ2h0OiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnNTJweCcgOiAnNDhweCd9O1xyXG4gICAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMjBweCcgOiAnMTZweCd9O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzAnIDogJzY0cHgnfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzAnIDogJzMycHgnfTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25Gcm9udCA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRjQ2NzM3IDAlLCAjOTQ1REQ2IDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMTNBREM3IDAlLCAjOTQ1REQ2IDEwMCUpJ307XHJcbiAgb3BhY2l0eTogJHsoeyBkaXNhYmxlZCB9KSA9PiBkaXNhYmxlZCA/ICcuNScgOiAnMSd9O1xyXG4gIHRyYW5zaXRpb246IC40cyBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzI0cHgnfTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpJyA6ICdub25lJ307XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMERCRDggMCUsICNCMTMzRkYgMTAwJSk7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcyMHB4JyA6ICcxNnB4J307XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMjRweCcgOiAnMTZweCd9O1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyZDQ1O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMTZweCcgOiAnOHB4J307XHJcblxyXG4gIH1cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICcwJyA6ICc4cHgnfTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rSWNvbkltZyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDsgIFxyXG4gIGhlaWdodDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICczMnB4JyA6ICcyNHB4J307XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGhlaWdodDogJHsoeyBuYXYgfSkgPT4gbmF2ID8gJzE2cHgnIDogJzI0cHgnfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGhlaWdodDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICczMnB4JyA6ICcxNnB4J307XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGluayA9IHN0eWxlZC5hYFxyXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmxpbmt9XHJcbmA7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9