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
  number: 50,
  text: 'Front end Project'
}, {
  number: 12,
  text: 'Blockchain Project'
}, {
  number: 6,
  text: 'Full stack project'
}, {
  number: 150,
  text: 'Problem Solving'
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
            href: "https://rakibulislam71.netlify.app/",
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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            marginLeft: 10,
            marginTop: 7,
            fontSize: 20
          },
          children: "Rakibul Islam"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
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
          lineNumber: 21,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#skills",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "Skills"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#about",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        target: "_blank",
        href: "https://medium.com/@rakibulislam202019",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "Blog"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div3, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      target: "_blank",
      href: "https://github.com/Rakibul71",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillGithub, {
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
      href: "https://www.linkedin.com/in/rakibul-islam71?original_referer=https%3A%2F%2Fwww.linkedin.com%2Fin%2Frakibul-islam71",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillLinkedin, {
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
      href: "https://www.facebook.com/photo/?fbid=2204523729862573&set=a.1961222667526015",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillFacebook, {
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      target: "_blank",
      href: "#",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillTwitterCircle, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
        children: "Hey there, This is Rakibul Islam. I am a Full-stack web developer  who also works on Blockchain and mobile apps development."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
        onClick: e => {
          e.preventDefault();
          window.location.href = "https://drive.google.com/file/d/11PddY_2FsoVCHJGs3g2r9IVkCER1YwIN/view?usp=sharing";
        },
        children: "My Resume"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
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
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/si */ "./node_modules/react-icons/si/index.esm.js");





const Skills = [{
  slug: "Web-Development",
  Component: react_icons_di__WEBPACK_IMPORTED_MODULE_1__.DiWebplatform,
  title: "Web-Development",
  Description: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "I work on web development for front end using React and backend Using Express."
  }, void 0, false)
}, {
  slug: "Javascript",
  Component: react_icons_di__WEBPACK_IMPORTED_MODULE_1__.DiJavascript,
  title: "Javascript",
  Description: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "Currently working on javascript algorithm and Data structure. "
  }, void 0, false)
}, {
  slug: "Solidity",
  Component: react_icons_di__WEBPACK_IMPORTED_MODULE_1__.DiGoogleCloudPlatform,
  title: "Solidity",
  Description: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "I can code in Solidity and able to create smart contract. But I mainly use it for Dapp Development"
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
  Component: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiFirebase,
  title: "Firebase",
  Description: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "I have used Firebase for auth, database & analytics in my apps."
  }, void 0, false)
}, {
  slug: "git",
  Component: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiGit,
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
// export const projects = [
//   {
//     title: 'Covid-19 Status App',
//     description: "COVID-19 Status is a free, open-source Android application that shows the current state of COVID-19 in India and the world. It has a beautiful, simple, fast, and responsive UI.",
//     image: '/images/covid.jpg',
//     tags: ['Java', 'XML', 'Firebase', 'Rest API'],
//     source: 'https://github.com/Coders-Of-XDA-OT/covid19-status-android',
//     visit: 'https://project.vipuljha.com/covid/',
//     id: 0,
//   },
//   {
//     title: 'Portfolio Website',
//     description: "This was my personal portfolio website that has all my work and project experience, including my resume. It used to be my main portfolio before deploying this current portfolio.",
//     image: '/images/portfolio.jpg',
//     tags: ['HTML', 'CSS', 'Bootstrap', 'JQuery'],
//     source: 'https://github.com/lordarcadius/website',
//     visit: 'https://project.vipuljha.com/website/',
//     id: 1,
//   },
//   {
//     title: 'ABS Tweaks',
//     description: "ABS Tweaks or Arkaynine Boost Script is a collection of shell scripts written with the aim of enhancing the performance and battery life of an Android phone. It got 2 Lac+ downloads overall.",
//     image: '/images/abs.jpg',
//     tags: ['Shell', 'Busybox'],
//     source: 'https://github.com/lordarcadius/ABS-Tweaks',
//     visit: 'https://forum.xda-developers.com/t/tweak-mod-arm-x86-project-dark-booster-abs-tweaks-v5-0-2-3-6-0-23-01-2016.3120404/',
//     id: 2,
//   },
//   {
//     title: 'ElectraBlue Kernel',
//     description: "ElectraBlue is a flash & forget custom kernel for supported Android devices. It was developed with the aim to provide a stable, fluid, & battery-efficient experience with customizations.",
//     image: '/images/eb.jpg',
//     tags: ['Linux', 'C', 'Makefile', 'Bash'],
//     source: 'https://github.com/lordarcadius/electrablue_mido',
//     visit: 'https://forum.xda-developers.com/t/kernel-mido-oreo-pie-electrablue-kernel-21-0-july-06-redmi-note-4.3655651/',
//     id: 3,
//   },
//   {
//     title: 'Lenovo SNAPit',
//     description: "Lenovo SNAPit Camera was one of the finest OEM camera apps back in those days. It had tonnes of unique and amazing features. I ported it to work on almost all devices at that time.",
//     image: '/images/snapit.jpg',
//     tags: ['Java', 'Libs', 'Smali'],
//     source: '#',
//     visit: 'https://forum.xda-developers.com/t/app-port-6-0-lenovo-snapit-camera-5-8-53-for-all-devices.3608065/',
//     id: 3,
//   },
//   {
//     title: 'CyanogenOS Apps',
//     description: "CyanogenOS 12.1 had a set of exclusive apps like a new theme engine and a new Truecaller integrated dialer. I ported it to work with CyanogenMod 13 and CM 13 based ROMs.",
//     image: '/images/capps.jpg',
//     tags: ['Java', 'Libs'],
//     source: '#',
//     visit: 'https://forum.xda-developers.com/t/c-apps-v2-unofficial-6-0-x-cyanogen-os-capps-v2-for-cm13-and-cm13-based-roms.3254865/',
//     id: 3,
//   },
// ];
// export const TimeLineData = [
//   { year: 2016, text: 'Started my journey as a new developer.', },
//   { year: 2017, text: 'Worked intensively on ROMs & Kernels.', },
//   { year: 2018, text: 'Learned Android app development.', },
//   { year: 2019, text: 'Finished Diploma in Computer Engineering.', },
//   { year: 2020, text: 'Got a scholarship from the Delhi government.', },
//   { year: 2021, text: 'Still trying to figure out this weird year.', },
// ];
const projects = [{
  title: 'Real Estate App',
  description: " Real-Estate website where you can bye property on different Location or if want also can rent house for live and able to filtering  property. It has a beautiful, simple, fast, and responsive UI.",
  image: '/images/real-estate.png',
  tags: ['React', 'Styled-Component', 'React-Reveal'],
  source: 'https://github.com/Rakibul71/real-state-responsive',
  visit: 'https://real-estate-responsive.netlify.app/',
  id: 0
}, {
  title: 'Foodies Hub',
  description: "This was a food making and selling front end web site , I am giving an user option for choosing using color them , text and font size . It used to be my main portfolio before deploying this current portfolio.",
  image: '/images/foodhub.png',
  tags: ['React', 'SCSS', 'Html'],
  source: 'https://github.com/Rakibul71/Foodies-Hub',
  visit: 'https://foods-hub.netlify.app/',
  id: 1
}, {
  title: 'Personal Agency ',
  description: "Personal Agency have few section Like design ,development, Production, Photography and nice animation. This website is fully mobile responsive. Using Multiple image data",
  image: '/images/agency.png',
  tags: ['Next.js', 'Css'],
  source: 'https://github.com/Rakibul71/Agency-Website-',
  visit: 'https://personal-agency.netlify.app/',
  id: 2
}, {
  title: 'Event Management',
  description: "Loudent is a event management web -site ; Where You can book a place or hire a management team to doing your event  It was developed with React and Tailwind css that's make the website user friendly and smooth",
  image: '/images/laudent.png',
  tags: ['React', 'Tailwind'],
  source: 'https://github.com/Rakibul71/Loudent--menagment-app',
  visit: 'https://loudent-event-managment.netlify.app/',
  id: 3
}, {
  title: 'Dao Dapps',
  description: "Blockchain technology is blooming Day by day . This is dap dapp blockchain front end . I am using dynamic api to load the data ",
  image: '/images/dao.png',
  tags: ['React', 'Api', 'Css'],
  source: 'https://github.com/Rakibul71/DAOfind-React-Front-End-Skills-Test',
  visit: 'https://dao-dapps-frontend-demo.netlify.app/',
  id: 3
}, {
  title: 'Song Bird ',
  description: " This is just front end of song website like lo-fie.In future I am  create this project backend  ",
  image: '/images/songbird.png',
  tags: ['Html', 'Css', 'JavaScript'],
  source: 'https://github.com/Rakibul71/Music--app',
  visit: 'https://song-bird-frontend.netlify.app/',
  id: 3
}];
const TimeLineData = [{
  year: 2017,
  text: 'Starting a development Journey'
}, {
  year: 2018,
  text: 'Got a scholarship from Chinese university'
}, {
  year: 2019,
  text: 'Developing a android apps'
}, {
  year: 2020,
  text: 'Focusing on front end and free Lancing'
}, {
  year: 2021,
  text: 'Complete Internship as a front end developer'
}, {
  year: 2022,
  text: 'Working on Blockchain and full stack development'
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js-node_modules_react-icons_ai_index_esm_js-node_modules_react-966abc"], function() { return __webpack_exec__("./src/pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0Fjb21wbGlzaG1lbnRzL0Fjb21wbGlzaG1lbnRzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9CYWNrZ3Jvb3VuZEFuaW1hdGlvbi9CYWNrZ3JvdW5kQW5pbWF0aW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZXJvL0hlcm8uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0hlcm8vSGVyb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvU2tpbGxzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvbGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2xheW91dC9MYXlvdXRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9pZ25vcmVkfEQ6XFxwcm9qZWN0XFxwb3J0Zm9saW8gYWxsIHByb2plY3RcXHBvcnRmb2xpb2RlbW80XFxwb3J0Zm9saW9cXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJkYXRhIiwibnVtYmVyIiwidGV4dCIsIkFjb21wbGlzaG1lbnRzIiwibWFwIiwiY2FyZCIsImluZGV4IiwidG9Mb2NhbGVTdHJpbmciLCJCb3hlcyIsInN0eWxlZCIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsIm1kIiwic20iLCJCb3giLCJsZyIsIkJveE51bSIsIkJveFRleHQiLCJKb2luIiwiSm9pblRleHQiLCJJY29uQ29udGFpbmVyIiwiQmFja2dyb3VuZEFuaW1hdGlvbiIsIkZvb3RlciIsIkZvb3RlcldyYXBwZXIiLCJMaW5rSXRlbSIsIlNvY2lhbEljb25zQ29udGFpbmVyIiwiQ29tcGFueUNvbnRhaW5lciIsIlNsb2dhbiIsIlNvY2lhbENvbnRhaW5lciIsIkxpbmtMaXN0IiwiTGlua0NvbHVtbiIsIkxpbmtUaXRsZSIsIkhlYWRlciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJDb250YWluZXIiLCJEaXYxIiwiRGl2MiIsIkRpdjMiLCJOYXZMaW5rIiwiQ29udGFjdERyb3BEb3duIiwiTmF2UHJvZHVjdHNJY29uIiwiSW9Jb3NBcnJvd0Ryb3Bkb3duIiwiaXNPcGVuIiwiU29jaWFsSWNvbnMiLCJIZXJvIiwiZSIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiTGVmdFNlY3Rpb24iLCJQcm9qZWN0cyIsInByb2plY3RzIiwicCIsImkiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0YWdzIiwidCIsInZpc2l0Iiwic291cmNlIiwiSW1nIiwiR3JpZENvbnRhaW5lciIsIkJsb2dDYXJkIiwiVGl0bGVDb250ZW50IiwiSGVhZGVyVGhyZWUiLCJIciIsIkludHJvIiwiQ2FyZEluZm8iLCJVdGlsaXR5TGlzdCIsIkV4dGVybmFsTGlua3MiLCJUYWdMaXN0IiwiVGFnIiwiU2tpbGxzIiwic2x1ZyIsIkNvbXBvbmVudCIsIkRpV2VicGxhdGZvcm0iLCJEZXNjcmlwdGlvbiIsIkRpSmF2YXNjcmlwdCIsIkRpR29vZ2xlQ2xvdWRQbGF0Zm9ybSIsIkRpVGVybWluYWwiLCJTaUZpcmViYXNlIiwiU2lHaXQiLCJUZWNobm9sb2dpZXMiLCJTa2lsbCIsIkltYWdlQ29udGFpbmVyIiwiTWFpbkltYWdlIiwiTGlzdCIsInhzIiwiTGlzdENvbnRhaW5lciIsIkxpc3RUaXRsZSIsIkxpc3RQYXJhZ3JhcGgiLCJMaXN0SXRlbSIsIkxpc3RJY29uIiwiVE9UQUxfQ0FST1VTRUxfQ09VTlQiLCJUaW1lTGluZURhdGEiLCJUaW1lbGluZSIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwidXNlU3RhdGUiLCJjYXJvdXNlbFJlZiIsInVzZVJlZiIsInNjcm9sbCIsIm5vZGUiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhhbmRsZUNsaWNrIiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJNYXRoIiwiZmxvb3IiLCJzY3JvbGxXaWR0aCIsImhhbmRsZVNjcm9sbCIsInJvdW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW0iLCJ5ZWFyIiwiQ2Fyb3VzZWxDb250YWluZXIiLCJDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUiLCJmaW5hbCIsIkNhcm91c2VsSXRlbSIsImFjdGl2ZSIsIkNhcm91c2VsSXRlbVRpdGxlIiwiQ2Fyb3VzZWxJdGVtSW1nIiwiQ2Fyb3VzZWxJdGVtVGV4dCIsIkNhcm91c2VsQnV0dG9ucyIsIkNhcm91c2VsQnV0dG9uIiwiQ2Fyb3VzZWxCdXR0b25Eb3QiLCJpZCIsIkxheW91dCIsImNoaWxkcmVuIiwiSG9tZSIsIkJ1dHRvbiIsImFsdCIsImZvcm0iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJTZWN0aW9uIiwiZ3JpZCIsInJvdyIsIm5vcGFkZGluZyIsIlNlY3Rpb25UaXRsZSIsIm1haW4iLCJTZWN0aW9uVGV4dCIsIlNlY3Rpb25EaXZpZGVyIiwiY29sb3JBbHQiLCJkaXZpZGVyIiwiU2VjdGlvblN1YlRleHQiLCJTZWNvbmRhcnlCdG4iLCJCdXR0b25CYWNrIiwiQnV0dG9uRnJvbnQiLCJMaW5rQ29udGFpbmVyIiwibGFyZ2UiLCJMaW5rSWNvbkltZyIsIm5hdiIsIkxpbmsiLCJjb2xvcnMiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFBRUMsUUFBTSxFQUFFLEVBQVY7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRFcsRUFFWDtBQUFFRCxRQUFNLEVBQUUsRUFBVjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FGVyxFQUdYO0FBQUVELFFBQU0sRUFBRSxDQUFWO0FBQWFDLE1BQUksRUFBRTtBQUFuQixDQUhXLEVBSVg7QUFBRUQsUUFBTSxFQUFFLEdBQVY7QUFBZUMsTUFBSSxFQUFFO0FBQXJCLENBSlcsQ0FBYjs7QUFPQSxNQUFNQyxjQUFjLEdBQUcsbUJBQ3JCLDhEQUFDLDZEQUFEO0FBQUEsMEJBQ0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLHdEQUFEO0FBQUEsY0FDR0gsSUFBSSxDQUFDSSxHQUFMLENBQVMsQ0FBQ0MsSUFBRCxFQUFP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S0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBSnRCLEVBS1YsQ0FBQztBQUFFdUo7QUFBRixDQUFELEtBQWFBLEdBQUcsR0FBRyxNQUFILEdBQVksTUFMbEIsRUFRWjFKLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBUnRCLEVBU1YsQ0FBQztBQUFFb0o7QUFBRixDQUFELEtBQWVBLEtBQUssR0FBRyxNQUFILEdBQVksTUFUdEIsQ0FBakI7QUFhQSxNQUFNRyxJQUFJLEdBQUc1SixxRUFBSDtBQUFBO0FBQUE7QUFBQSxtQkFDTEMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWTJKLE1BQVosQ0FBbUJDLElBRHhCLENBQVYsQzs7Ozs7Ozs7Ozs7QUMxUlAseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEJveCwgQm94ZXMsIEJveE51bSwgQm94VGV4dCB9IGZyb20gJy4vQWNvbXBsaXNobWVudHNTdHlsZXMnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7IG51bWJlcjogNTAsIHRleHQ6ICdGcm9udCBlbmQgUHJvamVjdCcgfSxcclxuICB7IG51bWJlcjogMTIsIHRleHQ6ICdCbG9ja2NoYWluIFByb2plY3QnLCB9LFxyXG4gIHsgbnVtYmVyOiA2LCB0ZXh0OiAnRnVsbCBzdGFjayBwcm9qZWN0JywgfSxcclxuICB7IG51bWJlcjogMTUwLCB0ZXh0OiAnUHJvYmxlbSBTb2x2aW5nJywgfVxyXG5dO1xyXG5cclxuY29uc3QgQWNvbXBsaXNobWVudHMgPSAoKSA9PiAoXHJcbiAgPFNlY3Rpb24+XHJcbiAgICA8U2VjdGlvblRpdGxlPlBlcnNvbmFsIEFjaGlldmVtZW50czwvU2VjdGlvblRpdGxlPlxyXG4gICAgPEJveGVzPlxyXG4gICAgICB7ZGF0YS5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPEJveCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIDxCb3hOdW0+e2Ake2NhcmQubnVtYmVyLnRvTG9jYWxlU3RyaW5nKCdlbi1JTicpfStgfTwvQm94TnVtPlxyXG4gICAgICAgICAgPEJveFRleHQ+e2NhcmQudGV4dH08L0JveFRleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Cb3hlcz5cclxuICAgIDxTZWN0aW9uRGl2aWRlciAvPlxyXG4gIDwvU2VjdGlvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjb21wbGlzaG1lbnRzO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG5leHBvcnQgY29uc3QgQm94ZXMgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICBnYXA6IDI0cHg7XHJcbiAgbWFyZ2luOiAyNHB4IDAgNDBweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMzJweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTQwcHgsIDFmcikpO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiAyNHB4IGF1dG87XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjMjEyRDQ1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgaGVpZ2h0OiAxNDRweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfSB7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBoZWlnaHQ6IDEzNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIFxyXG4gICAgJjpudGgtY2hpbGQoMm4pe1xyXG4gICAgICBncmlkLXJvdzoyO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQm94TnVtID0gc3R5bGVkLmg1YFxyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIH1cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJveFRleHQgPSBzdHlsZWQucGBcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfTtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEpvaW4gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDY0cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBKb2luVGV4dCA9IHN0eWxlZC5oNWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59O1xyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW46IDAgMCAxNnB4O1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5gXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBCYWNrZ3JvdW5kQW5pbWF0aW9uID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8c3ZnXHJcbiAgICAgIGNsYXNzTmFtZT1cIkJnQW5pbWF0aW9uX19zdmdcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDYwMiA2MDJcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgPlxyXG4gICAgICA8ZyBvcGFjaXR5PVwiMC4xNVwiPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgIGQ9XCJNMjAxLjMzNyA4Ny40MzdDMTkzLjQ3NCA3OS41NzM4IDE4MC43MjUgNzkuNTczOCAxNzIuODYyIDg3LjQzN0w4Ny40MzcgMTcyLjg2MkM3OS41NzM5IDE4MC43MjUgNzkuNTczOSAxOTMuNDc0IDg3LjQzNyAyMDEuMzM3TDQwMC42NjMgNTE0LjU2M0M0MDguNTI2IDUyMi40MjYgNDIxLjI3NSA1MjIuNDI2IDQyOS4xMzggNTE0LjU2M0w1MTQuNTYzIDQyOS4xMzhDNTIyLjQyNiA0MjEuMjc1IDUyMi40MjYgNDA4LjUyNiA1MTQuNTYzIDQwMC42NjNMMjAxLjMzNyA4Ny40MzdaTTMwLjQ4NjkgMTE1LjkxMkMtOC44Mjg5NyAxNTUuMjI4IC04LjgyODk3IDIxOC45NzIgMzAuNDg2OSAyNTguMjg3TDM0My43MTMgNTcxLjUxM0MzODMuMDI4IDYxMC44MjkgNDQ2Ljc3MiA2MTAuODI5IDQ4Ni4wODggNTcxLjUxM0w1NzEuNTEzIDQ4Ni4wODhDNjEwLjgyOSA0NDYuNzcyIDYxMC44MjkgMzgzLjAyOCA1NzEuNTEzIDM0My43MTNMMjU4LjI4NyAzMC40ODY5QzIxOC45NzIgLTguODI4OTYgMTU1LjIyOCAtOC44Mjg5NiAxMTUuOTEyIDMwLjQ4NjlMMzAuNDg2OSAxMTUuOTEyWlwiXHJcbiAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50MF9yYWRpYWwpXCJcclxuICAgICAgICAgIGlkPVwicGF0aF8wXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTUxNC41NjMgMjAxLjMzN0M1MjIuNDI2IDE5My40NzQgNTIyLjQyNiAxODAuNzI1IDUxNC41NjMgMTcyLjg2Mkw0MjkuMTM4IDg3LjQzN0M0MjEuMjc1IDc5LjU3MzggNDA4LjUyNiA3OS41NzM5IDQwMC42NjMgODcuNDM3TDM1OC4wOTggMTMwLjAwMkwzMDEuMTQ4IDczLjA1MTZMMzQzLjcxMyAzMC40ODY5QzM4My4wMjggLTguODI4OTYgNDQ2Ljc3MiAtOC44Mjg5NiA0ODYuMDg4IDMwLjQ4NjlMNTcxLjUxMyAxMTUuOTEyQzYxMC44MjkgMTU1LjIyOCA2MTAuODI5IDIxOC45NzIgNTcxLjUxMyAyNTguMjg3TDM1Ny44MDIgNDcxLjk5OUwzMDAuODUyIDQxNS4wNDlMNTE0LjU2MyAyMDEuMzM3WlwiXHJcbiAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50MV9yYWRpYWwpXCJcclxuICAgICAgICAgIGlkPVwicGF0aF8xXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTI0My45MDEgNDcxLjk5OUwyMDEuMzM3IDUxNC41NjNDMTkzLjQ3NCA1MjIuNDI2IDE4MC43MjUgNTIyLjQyNiAxNzIuODYyIDUxNC41NjNMODcuNDM3IDQyOS4xMzhDNzkuNTczOSA0MjEuMjc1IDc5LjU3MzkgNDA4LjUyNiA4Ny40MzcgNDAwLjY2M0wzMDEuMTQ4IDE4Ni45NTJMMjQ0LjE5OCAxMzAuMDAyTDMwLjQ4NjkgMzQzLjcxM0MtOC44Mjg5NyAzODMuMDI4IC04LjgyODk3IDQ0Ni43NzIgMzAuNDg2OSA0ODYuMDg4TDExNS45MTIgNTcxLjUxM0MxNTUuMjI4IDYxMC44MjkgMjE4Ljk3MiA2MTAuODI5IDI1OC4yODcgNTcxLjUxM0wzMDAuODUyIDUyOC45NDlMMjQzLjkwMSA0NzEuOTk5WlwiXHJcbiAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50Ml9yYWRpYWwpXCJcclxuICAgICAgICAgIGlkPVwicGF0aF8yXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2c+XHJcbiAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgY3g9XCIyOTUuMDI3XCJcclxuICAgICAgICBjeT1cIjE5My4xMThcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjk1LjAyNyAtMTkzLjExOClcIlxyXG4gICAgICAgIHJ4PVwiMS4wNzMwNlwiXHJcbiAgICAgICAgcnk9XCIxLjA3NDMzXCJcclxuICAgICAgICBmaWxsPVwiIzk0NURENlwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIxMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiByb3RhdGU9XCJhdXRvXCI+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMlwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L2VsbGlwc2U+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0yOTQuNjg1IDE5My40NzRMMjY4LjkzMiAyMTkuMjU4XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI5NC42ODUgLTE5My40NzQpIHJvdGF0ZSg0NSAyOTQuNjg1IDE5My40NzQpXCJcclxuICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50M19saW5lYXIpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjEwc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIHJvdGF0ZT1cImF1dG9cIj5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8yXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvcGF0aD5cclxuICAgICAgPGVsbGlwc2VcclxuICAgICAgICBjeD1cIjI5NS4wMjdcIlxyXG4gICAgICAgIGN5PVwiMTkzLjExOFwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yOTUuMDI3IC0xOTMuMTE4KVwiXHJcbiAgICAgICAgcng9XCIxLjA3MzA2XCJcclxuICAgICAgICByeT1cIjEuMDc0MzNcIlxyXG4gICAgICAgIGZpbGw9XCIjNDY3MzdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjVzXCJcclxuICAgICAgICAgIGJlZ2luPVwiMVwiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzJcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9lbGxpcHNlPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMjk0LjY4NSAxOTMuNDc0TDI2OC45MzIgMjE5LjI1OFwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yOTQuNjg1IC0xOTMuNDc0KSByb3RhdGUoNDUgMjk0LjY4NSAxOTMuNDc0KVwiXHJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDdfbGluZWFyKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxyXG4gICAgICAgICAgZHVyPVwiNXNcIlxyXG4gICAgICAgICAgYmVnaW49XCIxXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMlwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L3BhdGg+XHJcbiAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgY3g9XCI0NzYuNTI1XCJcclxuICAgICAgICBjeT1cIjM2My4zMTNcIlxyXG4gICAgICAgIHJ4PVwiMS4wNzQzM1wiXHJcbiAgICAgICAgcnk9XCIxLjA3MzA2XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQ3Ni41MjUgLTM2My4zMTMpIHJvdGF0ZSg5MCA0NzYuNTI1IDM2My4zMTMpXCJcclxuICAgICAgICBmaWxsPVwiIzk0NURENlwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIxMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiByb3RhdGU9XCJhdXRvXCI+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L2VsbGlwc2U+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk00NzYuMTcxIDM2Mi45NTJMNDUwLjQxNyAzMzcuMTY4XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQ3Ni41MjUgLTM2My4zMTMpIHJvdGF0ZSgtNDUgNDc2LjE3MSAzNjIuOTUyKVwiXHJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDRfbGluZWFyKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIxMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiByb3RhdGU9XCJhdXRvXCI+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L3BhdGg+XHJcbiAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgY3g9XCIzODIuMTY0XCJcclxuICAgICAgICBjeT1cIjE1NS4wMjlcIlxyXG4gICAgICAgIHJ4PVwiMS4wNzQzM1wiXHJcbiAgICAgICAgcnk9XCIxLjA3MzA2XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM4Mi4xNjQgLTE1NS4wMjkpIHJvdGF0ZSg5MCAzODIuMTY0IDE1NS4wMjkpXCJcclxuICAgICAgICBmaWxsPVwiI0Y0NjczN1wiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxyXG4gICAgICAgICAgZHVyPVwiMTBzXCJcclxuICAgICAgICAgIGJlZ2luPVwiMVwiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9lbGxpcHNlPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMzgxLjgxIDE1NC42NjlMMzU2LjA1NyAxMjguODg1XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM4MS44MSAtMTU0LjY2OSkgcm90YXRlKC00NSAzODEuODEgMTU0LjY2OSlcIlxyXG4gICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQ1X2xpbmVhcilcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjEwc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjFcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvcGF0aD5cclxuICAgICAgPGVsbGlwc2VcclxuICAgICAgICBjeD1cIjMzMy4zMjRcIlxyXG4gICAgICAgIGN5PVwiMzgyLjY5MVwiXHJcbiAgICAgICAgcng9XCIxLjA3MzA2XCJcclxuICAgICAgICByeT1cIjEuMDc0MzNcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzMzLjMyNCAtMzgyLjY5MSkgcm90YXRlKC0xODAgMzMzLjMyNCAzODIuNjkxKVwiXHJcbiAgICAgICAgZmlsbD1cIiNGNDY3MzdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjVzXCJcclxuICAgICAgICAgIGJlZ2luPVwiMFwiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzFcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9lbGxpcHNlPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMzMzLjY2NyAzODIuMzM1TDM1OS40MiAzNTYuNTUxXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJzY2FsZSgtMSAxKSB0cmFuc2xhdGUoLTMzMy42NjcgLTM4Mi4zMzUpIHJvdGF0ZSg0NSAzMzMuNjY3IDM4Mi4zMzUpXCJcclxuICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50Nl9saW5lYXIpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlTW90aW9uXHJcbiAgICAgICAgICBkdXI9XCI1c1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjBcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8xXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvcGF0aD5cclxuICAgICAgPGVsbGlwc2VcclxuICAgICAgICBjeD1cIjE2NS41MjRcIlxyXG4gICAgICAgIGN5PVwiOTMuOTU5NlwiXHJcbiAgICAgICAgcng9XCIxLjA3MzA2XCJcclxuICAgICAgICByeT1cIjEuMDc0MzNcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTY1LjUyNCAtOTMuOTU5NilcIlxyXG4gICAgICAgIGZpbGw9XCIjRjQ2NzM3XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlTW90aW9uXHJcbiAgICAgICAgICBkdXI9XCIxMHNcIlxyXG4gICAgICAgICAgYmVnaW49XCIzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L2VsbGlwc2U+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0xNjUuMTgyIDk0LjMxNTlMMTM5LjQyOSAxMjAuMVwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNjUuMTgyIC05NC4zMTU5KSByb3RhdGUoNDUgMTY1LjE4MiA5NC4zMTU5KVwiXHJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDdfbGluZWFyKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxyXG4gICAgICAgICAgZHVyPVwiMTBzXCJcclxuICAgICAgICAgIGJlZ2luPVwiM1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9wYXRoPlxyXG4gICAgICA8ZWxsaXBzZVxyXG4gICAgICAgIGN4PVwiNDc2LjUyNVwiXHJcbiAgICAgICAgY3k9XCIzNjMuMzEzXCJcclxuICAgICAgICByeD1cIjEuMDc0MzNcIlxyXG4gICAgICAgIHJ5PVwiMS4wNzMwNlwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NzYuNTI1IC0zNjMuMzEzKSByb3RhdGUoOTAgNDc2LjUyNSAzNjMuMzEzKVwiXHJcbiAgICAgICAgZmlsbD1cIiMxM0FEQzdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjEyc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjRcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvZWxsaXBzZT5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTQ3Ni4xNzEgMzYyLjk1Mkw0NTAuNDE3IDMzNy4xNjhcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDc2LjUyNSAtMzYzLjMxMykgcm90YXRlKC00NSA0NzYuMTcxIDM2Mi45NTIpXCJcclxuICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50MTFfbGluZWFyKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxyXG4gICAgICAgICAgZHVyPVwiMTJzXCJcclxuICAgICAgICAgIGJlZ2luPVwiNFwiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9wYXRoPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8cmFkaWFsR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQwX3JhZGlhbFwiXHJcbiAgICAgICAgICBjeD1cIjBcIlxyXG4gICAgICAgICAgY3k9XCIwXCJcclxuICAgICAgICAgIHI9XCIxXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgICBncmFkaWVudFRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMDEgMzAxKSByb3RhdGUoOTApIHNjYWxlKDMwMClcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMzMzMzMzXCIgc3RvcENvbG9yPVwiI0ZCRkJGQlwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwid2hpdGVcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxyXG4gICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XHJcbiAgICAgICAgPHJhZGlhbEdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInBhaW50MV9yYWRpYWxcIlxyXG4gICAgICAgICAgY3g9XCIwXCJcclxuICAgICAgICAgIGN5PVwiMFwiXHJcbiAgICAgICAgICByPVwiMVwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAxIDMwMSkgcm90YXRlKDkwKSBzY2FsZSgzMDApXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwLjMzMzMzM1wiIHN0b3BDb2xvcj1cIiNGQkZCRkJcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIndoaXRlXCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L3JhZGlhbEdyYWRpZW50PlxyXG4gICAgICAgIDxyYWRpYWxHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwYWludDJfcmFkaWFsXCJcclxuICAgICAgICAgIGN4PVwiMFwiXHJcbiAgICAgICAgICBjeT1cIjBcIlxyXG4gICAgICAgICAgcj1cIjFcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwidHJhbnNsYXRlKDMwMSAzMDEpIHJvdGF0ZSg5MCkgc2NhbGUoMzAwKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC4zMzMzMzNcIiBzdG9wQ29sb3I9XCIjRkJGQkZCXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCJ3aGl0ZVwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQzX2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjI5NS4wNDNcIlxyXG4gICAgICAgICAgeTE9XCIxOTMuMTE2XCJcclxuICAgICAgICAgIHgyPVwiMjY5Ljk3NVwiXHJcbiAgICAgICAgICB5Mj1cIjIxOC4xNTRcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjOTQ1REQ2XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjOTQ1REQ2XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwYWludDRfbGluZWFyXCJcclxuICAgICAgICAgIHgxPVwiNDc2LjUyOVwiXHJcbiAgICAgICAgICB5MT1cIjM2My4zMVwiXHJcbiAgICAgICAgICB4Mj1cIjQ1MS40NjFcIlxyXG4gICAgICAgICAgeTI9XCIzMzguMjcyXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzk0NURENlwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzk0NURENlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQ1X2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjM4Mi4xNjhcIlxyXG4gICAgICAgICAgeTE9XCIxNTUuMDI3XCJcclxuICAgICAgICAgIHgyPVwiMzU3LjFcIlxyXG4gICAgICAgICAgeTI9XCIxMjkuOTg5XCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0Y0NjczN1wiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0Y0NjczN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQ2X2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjMzMy4zMDlcIlxyXG4gICAgICAgICAgeTE9XCIzODIuNjkzXCJcclxuICAgICAgICAgIHgyPVwiMzU4LjM3NlwiXHJcbiAgICAgICAgICB5Mj1cIjM1Ny42NTVcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjRjQ2NzM3XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjRjQ2NzM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwYWludDdfbGluZWFyXCJcclxuICAgICAgICAgIHgxPVwiMTY1LjU0XCJcclxuICAgICAgICAgIHkxPVwiOTMuOTU3OFwiXHJcbiAgICAgICAgICB4Mj1cIjE0MC40NzJcIlxyXG4gICAgICAgICAgeTI9XCIxMTguOTk2XCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0Y0NjczN1wiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0Y0NjczN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQ4X2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjQxNC4zNjdcIlxyXG4gICAgICAgICAgeTE9XCIzMDEuMTU2XCJcclxuICAgICAgICAgIHgyPVwiNDM5LjQzNVwiXHJcbiAgICAgICAgICB5Mj1cIjI3Ni4xMThcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjMTNBREM3XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMTNBREM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwYWludDlfbGluZWFyXCJcclxuICAgICAgICAgIHgxPVwiNTE1Ljk0M1wiXHJcbiAgICAgICAgICB5MT1cIjI4OC4yMzhcIlxyXG4gICAgICAgICAgeDI9XCI1NDEuMzM5XCJcclxuICAgICAgICAgIHkyPVwiMjkxLjQ1NFwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiMxM0FEQzdcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMxM0FEQzdcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInBhaW50MTBfbGluZWFyXCJcclxuICAgICAgICAgIHgxPVwiMTE3LjAwMVwiXHJcbiAgICAgICAgICB5MT1cIjIzMC42MTlcIlxyXG4gICAgICAgICAgeDI9XCIxMTcuMzZcIlxyXG4gICAgICAgICAgeTI9XCIyNTguMTkzXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzk0NURENlwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzk0NURENlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQxMV9saW5lYXJcIlxyXG4gICAgICAgICAgeDE9XCI0NzYuNTI5XCJcclxuICAgICAgICAgIHkxPVwiMzYzLjMxXCJcclxuICAgICAgICAgIHgyPVwiNDUxLjQ2MVwiXHJcbiAgICAgICAgICB5Mj1cIjMzOC4yNzJcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjMTNBREM3XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMTNBREM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICA8L3N2Zz5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmRBbmltYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWlGaWxsR2l0aHViLCBBaUZpbGxJbnN0YWdyYW0sIEFpRmlsbExpbmtlZGluLCBBaUZpbGxUd2l0dGVyQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBTb2NpYWxJY29ucyB9IGZyb20gJy4uL0hlYWRlci9IZWFkZXJTdHlsZXMnO1xyXG5pbXBvcnQgeyBDb21wYW55Q29udGFpbmVyLCBGb290ZXJXcmFwcGVyLCBMaW5rQ29sdW1uLCBMaW5rSXRlbSwgTGlua0xpc3QsIExpbmtUaXRsZSwgU2xvZ2FuLCBTb2NpYWxDb250YWluZXIsIFNvY2lhbEljb25zQ29udGFpbmVyIH0gZnJvbSAnLi9Gb290ZXJTdHlsZXMnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9vdGVyV3JhcHBlcj5cclxuICAgICAgPExpbmtMaXN0PlxyXG4gICAgICAgIDxMaW5rQ29sdW1uPlxyXG4gICAgICAgICAgPExpbmtUaXRsZT5DaGF0PC9MaW5rVGl0bGU+XHJcbiAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cImh0dHBzOi8vZGlzY29yZC5jb20vaW52aXRlL0IzV2c0V25jXCI+RGlzY29yZDwvTGlua0l0ZW0+XHJcbiAgICAgICAgPC9MaW5rQ29sdW1uPlxyXG4gICAgICAgIDxMaW5rQ29sdW1uPlxyXG4gICAgICAgICAgPExpbmtUaXRsZSB0YXJnZXQ9XCJfYmxhbmtcIj5FbWFpbDwvTGlua1RpdGxlPlxyXG4gICAgICAgICAgPExpbmtJdGVtIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJyYWtpYnVsaXNsYW0yMDIwMTlAZ21haWwuY29tXCI+XHJcbiAgICAgICAgICAgIHJha2lidWxpc2xhbTIwMjAxOUBnbWFpbC5jb21cclxuICAgICAgICAgIDwvTGlua0l0ZW0+XHJcbiAgICAgICAgPC9MaW5rQ29sdW1uPlxyXG4gICAgICA8L0xpbmtMaXN0PlxyXG4gICAgICA8U29jaWFsSWNvbnNDb250YWluZXI+XHJcbiAgICAgICAgPENvbXBhbnlDb250YWluZXI+XHJcbiAgICAgICAgICA8U2xvZ2FuPiZjb3B5OyAyMDIyIDxMaW5rIGhyZWY9XCJodHRwczovL3Jha2lidWxpc2xhbTcxLm5ldGxpZnkuYXBwL1wiPlJha2lidWwgSXNsYW08L0xpbms+IC4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L1Nsb2dhbj5cclxuICAgICAgICA8L0NvbXBhbnlDb250YWluZXI+XHJcbiAgICAgICAgPFNvY2lhbENvbnRhaW5lcj5cclxuICAgICAgICAgIDxTb2NpYWxJY29ucyB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1Jha2lidWw3MVwiPlxyXG4gICAgICAgICAgICA8QWlGaWxsR2l0aHViIHNpemU9XCIzcmVtXCIgLz5cclxuICAgICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgICAgICA8U29jaWFsSWNvbnMgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9yYWtpYnVsLWlzbGFtNzE/b3JpZ2luYWxfcmVmZXJlcj1odHRwcyUzQSUyRiUyRnd3dy5saW5rZWRpbi5jb20lMkZpbiUyRnJha2lidWwtaXNsYW03MVwiPlxyXG4gICAgICAgICAgICA8QWlGaWxsTGlua2VkaW4gc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgICAgIDxTb2NpYWxJY29ucyBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICA8QWlGaWxsSW5zdGFncmFtIHNpemU9XCIzcmVtXCIgLz5cclxuICAgICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgICAgICA8U29jaWFsSWNvbnMgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgPEFpRmlsbFR3aXR0ZXJDaXJjbGUgc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgICA8L1NvY2lhbENvbnRhaW5lcj5cclxuICAgICAgPC9Tb2NpYWxJY29uc0NvbnRhaW5lcj5cclxuXHJcbiAgICA8L0Zvb3RlcldyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlcldyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuXHR3aWR0aDogY2FsYygxMDB2dyAtIDk2cHgpO1xyXG4gIG1heC13aWR0aDogMTA0MHB4O1xyXG4gIHBhZGRpbmc6IDJyZW0gNDhweCA0MHB4O1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG5cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHBhZGRpbmc6IDAgMTZweCA0OHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rSXRlbSA9IHN0eWxlZC5hYFxyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cdHRyYW5zaXRpb246IC4zcyBlYXNlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRsZWZ0OiAwO1xyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0bGVmdDogNnB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuXHRcdGZvbnQtc2l6ZTogMTdweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcblx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTRweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDhweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNvY2lhbEljb25zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOiAxMDQwcHg7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ29tcGFueUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczpiYXNlbGluZTtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdFxyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRtYXJnaW46IDAgMCAzMnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2xvZ2FuID0gc3R5bGVkLnBgXHJcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHRtaW4td2lkdGg6IDI4MHB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdHBhZGRpbmctdG9wOiAxcmVtO1xyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcblx0XHRmb250LXNpemU6IDE3cHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjhweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdFx0bWluLXdpZHRoOiAxMDBweDtcclxuXHR9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTb2NpYWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdH1cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rTGlzdCA9IHN0eWxlZC51bGBcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDg1cHgsIDIyMHB4KSk7XHJcblx0Z2FwOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDQwcHggMCAyOHB4O1xyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ30ge1xyXG5cdFx0cGFkZGluZzogMzJweCAwIDE2cHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwYWRkaW5nOiAzMnB4IDAgMTZweDtcclxuXHRcdGdhcDogMTZweDtcclxuXHR9XHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cGFkZGluZzogMzJweCA0cHggMTZweDtcclxuXHRcdGdhcDogNXB4O1xyXG5cdH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtDb2x1bW4gPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRtYXgtd2lkdGg6IDIyMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBMaW5rVGl0bGUgPSBzdHlsZWQuaDRgXHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG5cdFx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XHJcblx0fVxyXG5gXHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFpRmlsbEdpdGh1YiwgQWlGaWxsSW5zdGFncmFtLCBBaUZpbGxMaW5rZWRpbiwgQWlGaWxsVHdpdHRlckNpcmNsZSwgQWlGaWxsRmFjZWJvb2sgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgRGl2MSwgRGl2MiwgRGl2MywgTmF2TGluaywgU29jaWFsSWNvbnMgfSBmcm9tICcuL0hlYWRlclN0eWxlcyc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgPENvbnRhaW5lcj5cclxuICAgIDxEaXYxPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAxMCwgbWFyZ2luVG9wOiA3LCBmb250U2l6ZTogMjAgfX0+UmFraWJ1bCBJc2xhbTwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgey8qIDxhIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnN2Z1wiIGhlaWdodD17NDB9IHdpZHRoPXs0MH0gLz4gPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogMTAsIG1hcmdpblRvcDogNywgZm9udFNpemU6IDIwIH19ID5SYWtpYnVsIElzbGFtPC9zcGFuPlxyXG4gICAgICAgIDwvYT4gKi99XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvRGl2MT5cclxuICAgIDxEaXYyPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIiNwcm9qZWN0c1wiPlxyXG4gICAgICAgICAgPE5hdkxpbms+UHJvamVjdHM8L05hdkxpbms+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIiNza2lsbHNcIj5cclxuICAgICAgICAgIDxOYXZMaW5rPlNraWxsczwvTmF2TGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPVwiI2Fib3V0XCI+XHJcbiAgICAgICAgICA8TmF2TGluaz5BYm91dDwvTmF2TGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL0ByYWtpYnVsaXNsYW0yMDIwMTlcIj5cclxuICAgICAgICAgIDxOYXZMaW5rID5CbG9nPC9OYXZMaW5rPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9saT5cclxuICAgIDwvRGl2Mj5cclxuICAgIDxEaXYzPlxyXG4gICAgICA8U29jaWFsSWNvbnMgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9SYWtpYnVsNzFcIj5cclxuICAgICAgICA8QWlGaWxsR2l0aHViIHNpemU9XCIzcmVtXCIgLz5cclxuICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgPFNvY2lhbEljb25zIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcmFraWJ1bC1pc2xhbTcxP29yaWdpbmFsX3JlZmVyZXI9aHR0cHMlM0ElMkYlMkZ3d3cubGlua2VkaW4uY29tJTJGaW4lMkZyYWtpYnVsLWlzbGFtNzFcIj5cclxuICAgICAgICA8QWlGaWxsTGlua2VkaW4gc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICA8L1NvY2lhbEljb25zPlxyXG4gICAgICA8U29jaWFsSWNvbnMgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9waG90by8/ZmJpZD0yMjA0NTIzNzI5ODYyNTczJnNldD1hLjE5NjEyMjI2Njc1MjYwMTVcIj5cclxuICAgICAgICA8QWlGaWxsRmFjZWJvb2sgc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICA8L1NvY2lhbEljb25zPlxyXG4gICAgICA8U29jaWFsSWNvbnMgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICA8QWlGaWxsVHdpdHRlckNpcmNsZSBzaXplPVwiM3JlbVwiIC8+XHJcbiAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICA8L0RpdjM+XHJcbiAgPC9Db250YWluZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCB7IElvSW9zQXJyb3dEcm9wZG93biB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAycmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgcGFkZGluZy10b3A6IDJyZW07XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNjBweCk7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDAuNXJlbTtcclxuICAgIGdyaWQtcm93LWdhcDogMC41cmVtO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IERpdjEgPSBzdHlsZWQuZGl2YFxyXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBEaXYyID0gc3R5bGVkLmRpdmBcclxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAwLjc1ZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gNTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBEaXYzID0gc3R5bGVkLmRpdmBcclxuICBncmlkLWFyZWE6IDEgLyA1IC8gMiAvIDY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLWFyZWE6IDEgLyA0IC8gMiAvIDY7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gTmF2aWdhdGlvbiBMaW5rc1xyXG5leHBvcnQgY29uc3QgTmF2TGluayA9IHN0eWxlZC5hYFxyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbi8vLyBEcm9wRG93biBDb250YWN0XHJcbmV4cG9ydCBjb25zdCBDb250YWN0RHJvcERvd24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xyXG5cclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW0gMDtcclxuICB9XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2UHJvZHVjdHNJY29uID0gc3R5bGVkKElvSW9zQXJyb3dEcm9wZG93bilgXHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgb3BhY2l0eTogJHsoeyBpc09wZW4gfSkgPT4gKGlzT3BlbiA/ICcxJyA6ICcuNzUnKX07XHJcbiAgdHJhbnNmb3JtOiAkeyh7IGlzT3BlbiB9KSA9PiAoaXNPcGVuID8gJ3NjYWxlWSgtMSknIDogJ3NjYWxlWSgxKScpfTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgbWFyZ2luOiAycHggMCAwIDJweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG4vLyBTb2NpYWwgSWNvbnMgXHJcblxyXG5leHBvcnQgY29uc3QgU29jaWFsSWNvbnMgPSBzdHlsZWQuYWBcclxudHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG5jb2xvcjogd2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTJkNDU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxuICB9XHJcbmAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSwgTGluayB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgeyBMZWZ0U2VjdGlvbiB9IGZyb20gJy4vSGVyb1N0eWxlcyc7XHJcblxyXG5jb25zdCBIZXJvID0gKHByb3BzKSA9PiAoXHJcbiAgPD5cclxuICAgIDxTZWN0aW9uIHJvdyBub3BhZGRpbmc+XHJcbiAgICAgIDxMZWZ0U2VjdGlvbj5cclxuICAgICAgICA8U2VjdGlvblRpdGxlIG1haW4gY2VudGVyPlxyXG4gICAgICAgICAgSGV5IHRoZXJlLFxyXG4gICAgICAgIDwvU2VjdGlvblRpdGxlPlxyXG4gICAgICAgIDxTZWN0aW9uVGV4dD5cclxuICAgICAgICAgIEhleSB0aGVyZSwgVGhpcyBpcyBSYWtpYnVsIElzbGFtLiBJIGFtIGEgRnVsbC1zdGFjayB3ZWIgZGV2ZWxvcGVyICB3aG8gYWxzbyB3b3JrcyBvbiBCbG9ja2NoYWluIGFuZCBtb2JpbGUgYXBwcyBkZXZlbG9wbWVudC5cclxuICAgICAgICA8L1NlY3Rpb25UZXh0PlxyXG5cclxuXHJcblxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExUGRkWV8yRnNvVkNISkdzM2cycjlJVmtDRVIxWXdJTi92aWV3P3VzcD1zaGFyaW5nXCI7XHJcbiAgICAgICAgfX0+TXkgUmVzdW1lPC9CdXR0b24+XHJcbiAgICAgIDwvTGVmdFNlY3Rpb24+XHJcbiAgICA8L1NlY3Rpb24+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBMZWZ0U2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IEJsb2dDYXJkLCBDYXJkSW5mbywgRXh0ZXJuYWxMaW5rcywgR3JpZENvbnRhaW5lciwgSGVhZGVyVGhyZWUsIEhyLCBUYWcsIFRhZ0xpc3QsIFRpdGxlQ29udGVudCwgVXRpbGl0eUxpc3QsIEltZyB9IGZyb20gJy4vUHJvamVjdHNTdHlsZXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiAoXHJcbiAgPFNlY3Rpb24gaWQ9XCJwcm9qZWN0c1wiPlxyXG4gICAgPFNlY3Rpb25EaXZpZGVyIC8+XHJcbiAgICA8U2VjdGlvblRpdGxlIG1haW4+UHJvamVjdHM8L1NlY3Rpb25UaXRsZT5cclxuICAgIDxHcmlkQ29udGFpbmVyPlxyXG4gICAgICB7cHJvamVjdHMubWFwKChwLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCbG9nQ2FyZCBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8SW1nIHNyYz17cC5pbWFnZX0gLz5cclxuXHJcbiAgICAgICAgICAgIDxIZWFkZXJUaHJlZSB0aXRsZT17cC50aXRsZX0+e3AudGl0bGV9PC9IZWFkZXJUaHJlZT5cclxuICAgICAgICAgICAgPEhyIC8+XHJcblxyXG4gICAgICAgICAgICA8Q2FyZEluZm8gY2xhc3NOYW1lPVwiY2FyZC1pbmZvXCI+e3AuZGVzY3JpcHRpb259PC9DYXJkSW5mbz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8VGl0bGVDb250ZW50PlRlY2ggU3RhY2s8L1RpdGxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8SHIgLz5cclxuICAgICAgICAgICAgICA8VGFnTGlzdD5cclxuICAgICAgICAgICAgICAgIHtwLnRhZ3MubWFwKCh0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8VGFnIGtleT17aX0+e3R9PC9UYWc+O1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9UYWdMaXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFV0aWxpdHlMaXN0PlxyXG4gICAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzIGhyZWY9e3AudmlzaXR9PkxpdmUgUHJldmlldzwvRXh0ZXJuYWxMaW5rcz5cclxuICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rcyBocmVmPXtwLnNvdXJjZX0+U291cmNlIENvZGU8L0V4dGVybmFsTGlua3M+XHJcbiAgICAgICAgICAgIDwvVXRpbGl0eUxpc3Q+XHJcbiAgICAgICAgICA8L0Jsb2dDYXJkPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gIDwvU2VjdGlvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxyXG5kaXNwbGF5OiBncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbnBhZGRpbmctdG9wOiAzcmVtO1xyXG5wYWRkaW5nLWJvdHRvbTogM3JlbTtcclxucGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuY29sdW1uLWdhcDogMXJlbTtcclxucm93LWdhcDogM3JlbTtcclxuQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IEJsb2dDYXJkID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDgwLCA3OCwgNzgsIDAuNSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBUaXRsZUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAyMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuN2VtO1xyXG4gIGNvbG9yOiAjOWNjOWUzO1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG5cclxuYDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyVGhyZWUgPSBzdHlsZWQuaDNgXHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGNvbG9yOiAjOWNjOWUzO1xyXG4gIHBhZGRpbmc6IC41cmVtIDA7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy50aXRsZSA/ICczcmVtJyA6ICcycmVtJ307XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSHIgPSBzdHlsZWQuaHJgXHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgbWFyZ2luOiA4cHggYXV0bztcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogI2QwYmI1NztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnRybyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGNvbG9yOiAjZGNlM2U3O1xyXG4gIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2VyaWYnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkSW5mbyA9IHN0eWxlZC5wYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgNTBweDtcclxuICBjb2xvcjogI2U0ZTZlNztcclxuICBmb250LXN0eWxlOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHBhZGRpbmc6LjNyZW1cclxuICBcclxufVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVdGlsaXR5TGlzdCA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIG1hcmdpbjogMi41cmVtIDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRXh0ZXJuYWxMaW5rcyA9IHN0eWxlZC5hYFxyXG5jb2xvcjojZDRjMGMwO1xyXG5mb250LXNpemU6IDEuNnJlbTtcclxucGFkZGluZzoxcmVtIDEuNXJlbTtcclxuYmFja2dyb3VuZDogIzZiMzAzMDtcclxuYm9yZGVyLXJhZGl1czogMTVweDtcclxudHJhbnNpdGlvbjogMC41cztcclxuJjpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjODAxNDE0O1xyXG5cclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ0xpc3QgPSBzdHlsZWQudWxgXHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5wYWRkaW5nOiAycmVtO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQubGlgXHJcbmNvbG9yOiAjZDhiZmJmO1xyXG5mb250LXNpemU6IDEuNXJlbTtcclxuYCIsImltcG9ydCB7IERpQW5kcm9pZCwgRGlUZXJtaW5hbCwgRGlKYXZhc2NyaXB0LCBEaVJlYWN0LCBEaVdlYnBsYXRmb3JtLCBEaUdvb2dsZUNsb3VkUGxhdGZvcm0gfSBmcm9tIFwicmVhY3QtaWNvbnMvZGlcIjtcclxuaW1wb3J0IHsgU2lTb2xpZGl0eSwgU2lGaXJlYmFzZSwgU2lHaXQsIFNpSGl2ZUJsb2NrY2hhaW4gfSBmcm9tIFwicmVhY3QtaWNvbnMvc2lcIjtcclxuaW1wb3J0IHsgUmlGbHV0dGVyRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNraWxscyA9IFtcclxuICB7XHJcbiAgICBzbHVnOiBcIldlYi1EZXZlbG9wbWVudFwiLFxyXG4gICAgQ29tcG9uZW50OiBEaVdlYnBsYXRmb3JtLFxyXG4gICAgdGl0bGU6IFwiV2ViLURldmVsb3BtZW50XCIsXHJcbiAgICBEZXNjcmlwdGlvbjogKCkgPT4gPD5JIHdvcmsgb24gd2ViIGRldmVsb3BtZW50IGZvciBmcm9udCBlbmQgdXNpbmcgUmVhY3QgYW5kIGJhY2tlbmQgVXNpbmcgRXhwcmVzcy48Lz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBzbHVnOiBcIkphdmFzY3JpcHRcIixcclxuICAgIENvbXBvbmVudDogRGlKYXZhc2NyaXB0LFxyXG4gICAgdGl0bGU6IFwiSmF2YXNjcmlwdFwiLFxyXG4gICAgRGVzY3JpcHRpb246ICgpID0+IDw+Q3VycmVudGx5IHdvcmtpbmcgb24gamF2YXNjcmlwdCBhbGdvcml0aG0gYW5kIERhdGEgc3RydWN0dXJlLiA8Lz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBzbHVnOiBcIlNvbGlkaXR5XCIsXHJcbiAgICBDb21wb25lbnQ6IERpR29vZ2xlQ2xvdWRQbGF0Zm9ybSxcclxuICAgIHRpdGxlOiBcIlNvbGlkaXR5XCIsXHJcbiAgICBEZXNjcmlwdGlvbjogKCkgPT4gPD5JIGNhbiBjb2RlIGluIFNvbGlkaXR5IGFuZCBhYmxlIHRvIGNyZWF0ZSBzbWFydCBjb250cmFjdC4gQnV0IEkgbWFpbmx5IHVzZSBpdCBmb3IgRGFwcCBEZXZlbG9wbWVudDwvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHNsdWc6IFwidGVybWluYWxcIixcclxuICAgIENvbXBvbmVudDogRGlUZXJtaW5hbCxcclxuICAgIHRpdGxlOiBcIlNjcmlwdGluZ1wiLFxyXG4gICAgRGVzY3JpcHRpb246ICgpID0+IDw+SSBoYXZlIHdyaXR0ZW4gZG96ZW5zIG9mIFNoZWxsIHNjcmlwdHMgZm9yIHZhcmlvdXMgcHVycG9zZXMuPC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2x1ZzogXCJmaXJlYmFzZVwiLFxyXG4gICAgQ29tcG9uZW50OiBTaUZpcmViYXNlLFxyXG4gICAgdGl0bGU6IFwiRmlyZWJhc2VcIixcclxuICAgIERlc2NyaXB0aW9uOiAoKSA9PiA8PkkgaGF2ZSB1c2VkIEZpcmViYXNlIGZvciBhdXRoLCBkYXRhYmFzZSAmIGFuYWx5dGljcyBpbiBteSBhcHBzLjwvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHNsdWc6IFwiZ2l0XCIsXHJcbiAgICBDb21wb25lbnQ6IFNpR2l0LFxyXG4gICAgdGl0bGU6IFwiR2l0XCIsXHJcbiAgICBEZXNjcmlwdGlvbjogKCkgPT4gPD5HaXQgaXMgYSB0b29sIHRoYXQgSSB1c2UgZXZlcnkgZGF5LiBJIHVzZSBHaXRIdWIgZm9yIHB1c2hpbmcgbXkgY29kZS48Lz4sXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSwgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTGlzdCwgTGlzdENvbnRhaW5lciwgTGlzdEl0ZW0sIExpc3RQYXJhZ3JhcGgsIExpc3RUaXRsZSwgfSBmcm9tIFwiLi9UZWNobm9sb2dpZXNTdHlsZXNcIjtcclxuaW1wb3J0IHsgU2tpbGxzIH0gZnJvbSAnLi9Ta2lsbHMnXHJcblxyXG5jb25zdCBUZWNobm9sb2dpZXMgPSAoKSA9PiAoXHJcbiAgPFNlY3Rpb24gaWQ9XCJza2lsbHNcIj5cclxuICAgIDxTZWN0aW9uRGl2aWRlciBkaXZpZGVyIC8+XHJcbiAgICA8U2VjdGlvblRpdGxlPlNraWxsczwvU2VjdGlvblRpdGxlPlxyXG4gICAgPFNlY3Rpb25UZXh0PlxyXG4gICAgICBJJ3ZlIHdvcmtlZCB3aXRoIG11bHRpcGxlIHRlY2hub2xvZ2llcyBhcyBhIGRldmVsb3BlciB0byBkZXZlbG9wICYgbWFpbnRhaW4gbXkgcHJvamVjdHMuXHJcbiAgICA8L1NlY3Rpb25UZXh0PlxyXG4gICAgPExpc3Q+XHJcbiAgICAgIHtTa2lsbHMubWFwKChTa2lsbCkgPT4gKFxyXG4gICAgICAgIDxMaXN0SXRlbSBrZXk9e1NraWxsLnNsdWd9PlxyXG4gICAgICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgICAgIDxTa2lsbC5Db21wb25lbnQgc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgPC9waWN0dXJlPlxyXG4gICAgICAgICAgPExpc3RDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxMaXN0VGl0bGU+e1NraWxsLnRpdGxlfTwvTGlzdFRpdGxlPlxyXG4gICAgICAgICAgICA8TGlzdFBhcmFncmFwaD5cclxuICAgICAgICAgICAgICA8U2tpbGwuRGVzY3JpcHRpb24gLz5cclxuICAgICAgICAgICAgPC9MaXN0UGFyYWdyYXBoPlxyXG4gICAgICAgICAgPC9MaXN0Q29udGFpbmVyPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICkpfVxyXG4gICAgPC9MaXN0PlxyXG4gICAgPFNlY3Rpb25EaXZpZGVyIGNvbG9yQWx0IC8+XHJcbiAgPC9TZWN0aW9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVjaG5vbG9naWVzO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KDUwJSA1MCUgYXQgNTAlIDUwJSwgcmdiYSg3OSwgMTA4LCAxNzYsIDAuMjUpIDUzLjglLCByZ2JhKDc5LCAxMDgsIDE3NiwgMCkgMTAwJSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNjBweDtcclxuICBtYXJnaW4tdG9wOiA0OHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ30ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5JbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9e1xyXG4gICAgbWFyZ2luOiA2NHB4IDA7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgICBtYXJnaW46IDY0cHggMDtcclxuICAgIGdhcDogMjRweFxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy54c317XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0VGl0bGUgPSBzdHlsZWQuaDRgXHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0UGFyYWdyYXBoID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQubGlgXHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgbWF4LXdpZHRoOiAyMDNweDtcclxufVxyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdEljb24gPSBzdHlsZWQuaW1nYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG5gXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBDYXJvdXNlbEJ1dHRvbiwgQ2Fyb3VzZWxCdXR0b25Eb3QsIENhcm91c2VsQnV0dG9ucywgQ2Fyb3VzZWxDb250YWluZXIsIENhcm91c2VsSXRlbSwgQ2Fyb3VzZWxJdGVtSW1nLCBDYXJvdXNlbEl0ZW1UZXh0LCBDYXJvdXNlbEl0ZW1UaXRsZSwgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIH0gZnJvbSAnLi9UaW1lTGluZVN0eWxlcyc7XHJcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBUaW1lTGluZURhdGEgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IFRPVEFMX0NBUk9VU0VMX0NPVU5UID0gVGltZUxpbmVEYXRhLmxlbmd0aDtcclxuXHJcbmNvbnN0IFRpbWVsaW5lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IHNjcm9sbCA9IChub2RlLCBsZWZ0KSA9PiB7XHJcbiAgICByZXR1cm4gbm9kZS5zY3JvbGxUbyh7IGxlZnQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGkpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcihjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43ICogKGkgLyBUaW1lTGluZURhdGEubGVuZ3RoKSk7XHJcblxyXG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43KSkgKiBUaW1lTGluZURhdGEubGVuZ3RoKTtcclxuXHJcbiAgICAgIHNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gc25hcCBiYWNrIHRvIGJlZ2lubmluZyBvZiBzY3JvbGwgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxyXG4gIC8vIGF2b2lkcyBhIGJ1ZyB3aGVyZSBjb250ZW50IGlzIGNvdmVyZWQgdXAgaWYgY29taW5nIGZyb20gc21hbGxlciBzY3JlZW5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlY3Rpb24gaWQ9XCJhYm91dFwiPlxyXG4gICAgICA8U2VjdGlvblRpdGxlPk15IEpvdXJuZXk8L1NlY3Rpb25UaXRsZT5cclxuICAgICAgPFNlY3Rpb25UZXh0PlxyXG4gICAgICAgIEluIG15IGpvdXJuZXkgdG8gZGF0ZSwgSSBoYXZlIGxlYXJuZWQgYSBncmVhdCBkZWFsIGFib3V0IGRldmVsb3BtZW50IGFuZCBsaWZlIGluIGdlbmVyYWwuXHJcbiAgICAgIDwvU2VjdGlvblRleHQ+XHJcbiAgICAgIDxDYXJvdXNlbENvbnRhaW5lciByZWY9e2Nhcm91c2VsUmVmfSBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfT5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGVcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGZpbmFsPXtpbmRleCA9PT0gVE9UQUxfQ0FST1VTRUxfQ09VTlQgLSAxfT5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtXHJcbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBpZD17YGNhcm91c2VsX19pdGVtLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICB7YCR7aXRlbS55ZWFyfWB9XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1JbWdcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDggNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIuNSA1LjVDMy44ODA3MSA1LjUgNSA0LjM4MDcxIDUgM1YzLjVMMjA4IDMuNTAwMDJWMi41MDAwMkw1IDIuNVYzQzUgMS42MTkyOSAzLjg4MDcxIDAuNSAyLjUgMC41QzEuMTE5MjkgMC41IDAgMS42MTkyOSAwIDNDMCA0LjM4MDcxIDEuMTE5MjkgNS41IDIuNSA1LjVaXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3BhaW50MF9saW5lYXIpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5PVwiMC4zM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhaW50MF9saW5lYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4MT1cIi00LjMwNDEyZS0xMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxPVwiMC41XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDI9XCIyMDhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5Mj1cIjAuNTAwMjk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIndoaXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9XCIwLjc5NDc4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wQ29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcE9wYWNpdHk9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbUltZz5cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGV4dD57aXRlbS50ZXh0fTwvQ2Fyb3VzZWxJdGVtVGV4dD5cclxuICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGU+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9DYXJvdXNlbENvbnRhaW5lcj5cclxuICAgICAgPENhcm91c2VsQnV0dG9ucz5cclxuICAgICAgICB7VGltZUxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25Eb3QgYWN0aXZlPXthY3RpdmVJdGVtfSAvPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsQnV0dG9uPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9DYXJvdXNlbEJ1dHRvbnM+XHJcbiAgICAgIDxTZWN0aW9uRGl2aWRlciAvPlxyXG4gICAgPC9TZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcclxuIiwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxDb250YWluZXIgPSBzdHlsZWQudWxgXHJcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XHJcbiAgYmFja2dyb3VuZDogIzBGMTYyNDtcclxuICBwYWRkaW5nOiAwcmVtO1xyXG4gIGxpc3Qtc3R5bGU6bm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXHJcbiAgLyogb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xyXG5cclxuICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAmOmZpcnN0LW9mLXR5cGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuXHJcbiAgLy9yZW1vdmUgc2Nyb2xsYmFyXHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgXHJcbiAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICBkaXNwbGF5OiBub25lO1xyXG4gICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcclxuICAgIHRvdWNoLWFjdGlvbjogcGFuLXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUgPSBzdHlsZWQuZGl2YFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLXdpZHRoOiAkeyh7IGZpbmFsIH0pID0+IGZpbmFsID8gYDEyMCU7YCA6IGBtaW4tY29udGVudGB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjMEYxNjI0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXgtd2lkdGg6IDE5NnB4O1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgbWF4LXdpZHRoOiAxMjRweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwRjE2MjQ7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcclxuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIFxyXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgb3BhY2l0eTogMWAgOiBgb3BhY2l0eTogMC41YH07IFxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbVRpdGxlID0gc3R5bGVkLmg0YFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyogVGhpcyBncmFkaWVudCBpcyBkaWZmZXJlbnQgZHVlIHRvIHRoZSBzaXplIG9mIHRoZSBUaXRsZSBjb250YWluZXIsIGl0IG11c3QgdHJhbnNpdGlvbiBzb29uZXIgdG8gYmUgdmlzaWJsZSBvbiB0aGUgdGV4dCAqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjEuNTdkZWcsICNGRkZGRkYgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpIDMwLjE1JSk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1JbWcgPSBzdHlsZWQuc3ZnYFxyXG4gIG1hcmdpbi1sZWZ0OiAyMXB4O1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMCwwLDEpLCByZ2JhKDAsMCwwLDApKTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtVGV4dCA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbnMgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAyODhweDtcclxuXHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGAxYCA6IGAuMzNgfTtcclxuICB0cmFuc2Zvcm06ICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgPT09IHByb3BzLmluZGV4ID8gYHNjYWxlKDEuNilgIDogYHNjYWxlKDEpYH07XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbkRvdCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDNweDtcclxuICBoZWlnaHQ6IDNweDtcclxuYFxyXG4iLCIvLyBleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbi8vICAge1xyXG4vLyAgICAgdGl0bGU6ICdDb3ZpZC0xOSBTdGF0dXMgQXBwJyxcclxuLy8gICAgIGRlc2NyaXB0aW9uOiBcIkNPVklELTE5IFN0YXR1cyBpcyBhIGZyZWUsIG9wZW4tc291cmNlIEFuZHJvaWQgYXBwbGljYXRpb24gdGhhdCBzaG93cyB0aGUgY3VycmVudCBzdGF0ZSBvZiBDT1ZJRC0xOSBpbiBJbmRpYSBhbmQgdGhlIHdvcmxkLiBJdCBoYXMgYSBiZWF1dGlmdWwsIHNpbXBsZSwgZmFzdCwgYW5kIHJlc3BvbnNpdmUgVUkuXCIsXHJcbi8vICAgICBpbWFnZTogJy9pbWFnZXMvY292aWQuanBnJyxcclxuLy8gICAgIHRhZ3M6IFsnSmF2YScsICdYTUwnLCAnRmlyZWJhc2UnLCAnUmVzdCBBUEknXSxcclxuLy8gICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Db2RlcnMtT2YtWERBLU9UL2NvdmlkMTktc3RhdHVzLWFuZHJvaWQnLFxyXG4vLyAgICAgdmlzaXQ6ICdodHRwczovL3Byb2plY3QudmlwdWxqaGEuY29tL2NvdmlkLycsXHJcbi8vICAgICBpZDogMCxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIHRpdGxlOiAnUG9ydGZvbGlvIFdlYnNpdGUnLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiVGhpcyB3YXMgbXkgcGVyc29uYWwgcG9ydGZvbGlvIHdlYnNpdGUgdGhhdCBoYXMgYWxsIG15IHdvcmsgYW5kIHByb2plY3QgZXhwZXJpZW5jZSwgaW5jbHVkaW5nIG15IHJlc3VtZS4gSXQgdXNlZCB0byBiZSBteSBtYWluIHBvcnRmb2xpbyBiZWZvcmUgZGVwbG95aW5nIHRoaXMgY3VycmVudCBwb3J0Zm9saW8uXCIsXHJcbi8vICAgICBpbWFnZTogJy9pbWFnZXMvcG9ydGZvbGlvLmpwZycsXHJcbi8vICAgICB0YWdzOiBbJ0hUTUwnLCAnQ1NTJywgJ0Jvb3RzdHJhcCcsICdKUXVlcnknXSxcclxuLy8gICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sb3JkYXJjYWRpdXMvd2Vic2l0ZScsXHJcbi8vICAgICB2aXNpdDogJ2h0dHBzOi8vcHJvamVjdC52aXB1bGpoYS5jb20vd2Vic2l0ZS8nLFxyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICB0aXRsZTogJ0FCUyBUd2Vha3MnLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiQUJTIFR3ZWFrcyBvciBBcmtheW5pbmUgQm9vc3QgU2NyaXB0IGlzIGEgY29sbGVjdGlvbiBvZiBzaGVsbCBzY3JpcHRzIHdyaXR0ZW4gd2l0aCB0aGUgYWltIG9mIGVuaGFuY2luZyB0aGUgcGVyZm9ybWFuY2UgYW5kIGJhdHRlcnkgbGlmZSBvZiBhbiBBbmRyb2lkIHBob25lLiBJdCBnb3QgMiBMYWMrIGRvd25sb2FkcyBvdmVyYWxsLlwiLFxyXG4vLyAgICAgaW1hZ2U6ICcvaW1hZ2VzL2Ficy5qcGcnLFxyXG4vLyAgICAgdGFnczogWydTaGVsbCcsICdCdXN5Ym94J10sXHJcbi8vICAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vbG9yZGFyY2FkaXVzL0FCUy1Ud2Vha3MnLFxyXG4vLyAgICAgdmlzaXQ6ICdodHRwczovL2ZvcnVtLnhkYS1kZXZlbG9wZXJzLmNvbS90L3R3ZWFrLW1vZC1hcm0teDg2LXByb2plY3QtZGFyay1ib29zdGVyLWFicy10d2Vha3MtdjUtMC0yLTMtNi0wLTIzLTAxLTIwMTYuMzEyMDQwNC8nLFxyXG4vLyAgICAgaWQ6IDIsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICB0aXRsZTogJ0VsZWN0cmFCbHVlIEtlcm5lbCcsXHJcbi8vICAgICBkZXNjcmlwdGlvbjogXCJFbGVjdHJhQmx1ZSBpcyBhIGZsYXNoICYgZm9yZ2V0IGN1c3RvbSBrZXJuZWwgZm9yIHN1cHBvcnRlZCBBbmRyb2lkIGRldmljZXMuIEl0IHdhcyBkZXZlbG9wZWQgd2l0aCB0aGUgYWltIHRvIHByb3ZpZGUgYSBzdGFibGUsIGZsdWlkLCAmIGJhdHRlcnktZWZmaWNpZW50IGV4cGVyaWVuY2Ugd2l0aCBjdXN0b21pemF0aW9ucy5cIixcclxuLy8gICAgIGltYWdlOiAnL2ltYWdlcy9lYi5qcGcnLFxyXG4vLyAgICAgdGFnczogWydMaW51eCcsICdDJywgJ01ha2VmaWxlJywgJ0Jhc2gnXSxcclxuLy8gICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sb3JkYXJjYWRpdXMvZWxlY3RyYWJsdWVfbWlkbycsXHJcbi8vICAgICB2aXNpdDogJ2h0dHBzOi8vZm9ydW0ueGRhLWRldmVsb3BlcnMuY29tL3Qva2VybmVsLW1pZG8tb3Jlby1waWUtZWxlY3RyYWJsdWUta2VybmVsLTIxLTAtanVseS0wNi1yZWRtaS1ub3RlLTQuMzY1NTY1MS8nLFxyXG4vLyAgICAgaWQ6IDMsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICB0aXRsZTogJ0xlbm92byBTTkFQaXQnLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiTGVub3ZvIFNOQVBpdCBDYW1lcmEgd2FzIG9uZSBvZiB0aGUgZmluZXN0IE9FTSBjYW1lcmEgYXBwcyBiYWNrIGluIHRob3NlIGRheXMuIEl0IGhhZCB0b25uZXMgb2YgdW5pcXVlIGFuZCBhbWF6aW5nIGZlYXR1cmVzLiBJIHBvcnRlZCBpdCB0byB3b3JrIG9uIGFsbW9zdCBhbGwgZGV2aWNlcyBhdCB0aGF0IHRpbWUuXCIsXHJcbi8vICAgICBpbWFnZTogJy9pbWFnZXMvc25hcGl0LmpwZycsXHJcbi8vICAgICB0YWdzOiBbJ0phdmEnLCAnTGlicycsICdTbWFsaSddLFxyXG4vLyAgICAgc291cmNlOiAnIycsXHJcbi8vICAgICB2aXNpdDogJ2h0dHBzOi8vZm9ydW0ueGRhLWRldmVsb3BlcnMuY29tL3QvYXBwLXBvcnQtNi0wLWxlbm92by1zbmFwaXQtY2FtZXJhLTUtOC01My1mb3ItYWxsLWRldmljZXMuMzYwODA2NS8nLFxyXG4vLyAgICAgaWQ6IDMsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICB0aXRsZTogJ0N5YW5vZ2VuT1MgQXBwcycsXHJcbi8vICAgICBkZXNjcmlwdGlvbjogXCJDeWFub2dlbk9TIDEyLjEgaGFkIGEgc2V0IG9mIGV4Y2x1c2l2ZSBhcHBzIGxpa2UgYSBuZXcgdGhlbWUgZW5naW5lIGFuZCBhIG5ldyBUcnVlY2FsbGVyIGludGVncmF0ZWQgZGlhbGVyLiBJIHBvcnRlZCBpdCB0byB3b3JrIHdpdGggQ3lhbm9nZW5Nb2QgMTMgYW5kIENNIDEzIGJhc2VkIFJPTXMuXCIsXHJcbi8vICAgICBpbWFnZTogJy9pbWFnZXMvY2FwcHMuanBnJyxcclxuLy8gICAgIHRhZ3M6IFsnSmF2YScsICdMaWJzJ10sXHJcbi8vICAgICBzb3VyY2U6ICcjJyxcclxuLy8gICAgIHZpc2l0OiAnaHR0cHM6Ly9mb3J1bS54ZGEtZGV2ZWxvcGVycy5jb20vdC9jLWFwcHMtdjItdW5vZmZpY2lhbC02LTAteC1jeWFub2dlbi1vcy1jYXBwcy12Mi1mb3ItY20xMy1hbmQtY20xMy1iYXNlZC1yb21zLjMyNTQ4NjUvJyxcclxuLy8gICAgIGlkOiAzLFxyXG4vLyAgIH0sXHJcblxyXG4vLyBdO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcclxuLy8gICB7IHllYXI6IDIwMTYsIHRleHQ6ICdTdGFydGVkIG15IGpvdXJuZXkgYXMgYSBuZXcgZGV2ZWxvcGVyLicsIH0sXHJcbi8vICAgeyB5ZWFyOiAyMDE3LCB0ZXh0OiAnV29ya2VkIGludGVuc2l2ZWx5IG9uIFJPTXMgJiBLZXJuZWxzLicsIH0sXHJcbi8vICAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiAnTGVhcm5lZCBBbmRyb2lkIGFwcCBkZXZlbG9wbWVudC4nLCB9LFxyXG4vLyAgIHsgeWVhcjogMjAxOSwgdGV4dDogJ0ZpbmlzaGVkIERpcGxvbWEgaW4gQ29tcHV0ZXIgRW5naW5lZXJpbmcuJywgfSxcclxuLy8gICB7IHllYXI6IDIwMjAsIHRleHQ6ICdHb3QgYSBzY2hvbGFyc2hpcCBmcm9tIHRoZSBEZWxoaSBnb3Zlcm5tZW50LicsIH0sXHJcbi8vICAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiAnU3RpbGwgdHJ5aW5nIHRvIGZpZ3VyZSBvdXQgdGhpcyB3ZWlyZCB5ZWFyLicsIH0sXHJcbi8vIF07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ1JlYWwgRXN0YXRlIEFwcCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCIgUmVhbC1Fc3RhdGUgd2Vic2l0ZSB3aGVyZSB5b3UgY2FuIGJ5ZSBwcm9wZXJ0eSBvbiBkaWZmZXJlbnQgTG9jYXRpb24gb3IgaWYgd2FudCBhbHNvIGNhbiByZW50IGhvdXNlIGZvciBsaXZlIGFuZCBhYmxlIHRvIGZpbHRlcmluZyAgcHJvcGVydHkuIEl0IGhhcyBhIGJlYXV0aWZ1bCwgc2ltcGxlLCBmYXN0LCBhbmQgcmVzcG9uc2l2ZSBVSS5cIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9yZWFsLWVzdGF0ZS5wbmcnLFxyXG4gICAgdGFnczogWydSZWFjdCcsICdTdHlsZWQtQ29tcG9uZW50JywgJ1JlYWN0LVJldmVhbCddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL1Jha2lidWw3MS9yZWFsLXN0YXRlLXJlc3BvbnNpdmUnLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL3JlYWwtZXN0YXRlLXJlc3BvbnNpdmUubmV0bGlmeS5hcHAvJyxcclxuICAgIGlkOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdGb29kaWVzIEh1YicsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIHdhcyBhIGZvb2QgbWFraW5nIGFuZCBzZWxsaW5nIGZyb250IGVuZCB3ZWIgc2l0ZSAsIEkgYW0gZ2l2aW5nIGFuIHVzZXIgb3B0aW9uIGZvciBjaG9vc2luZyB1c2luZyBjb2xvciB0aGVtICwgdGV4dCBhbmQgZm9udCBzaXplIC4gSXQgdXNlZCB0byBiZSBteSBtYWluIHBvcnRmb2xpbyBiZWZvcmUgZGVwbG95aW5nIHRoaXMgY3VycmVudCBwb3J0Zm9saW8uXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvZm9vZGh1Yi5wbmcnLFxyXG4gICAgdGFnczogWydSZWFjdCcsICdTQ1NTJywgJ0h0bWwnXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9SYWtpYnVsNzEvRm9vZGllcy1IdWInLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2Zvb2RzLWh1Yi5uZXRsaWZ5LmFwcC8nLFxyXG4gICAgaWQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1BlcnNvbmFsIEFnZW5jeSAnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiUGVyc29uYWwgQWdlbmN5IGhhdmUgZmV3IHNlY3Rpb24gTGlrZSBkZXNpZ24gLGRldmVsb3BtZW50LCBQcm9kdWN0aW9uLCBQaG90b2dyYXBoeSBhbmQgbmljZSBhbmltYXRpb24uIFRoaXMgd2Vic2l0ZSBpcyBmdWxseSBtb2JpbGUgcmVzcG9uc2l2ZS4gVXNpbmcgTXVsdGlwbGUgaW1hZ2UgZGF0YVwiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2FnZW5jeS5wbmcnLFxyXG4gICAgdGFnczogWydOZXh0LmpzJywgJ0NzcyddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL1Jha2lidWw3MS9BZ2VuY3ktV2Vic2l0ZS0nLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL3BlcnNvbmFsLWFnZW5jeS5uZXRsaWZ5LmFwcC8nLFxyXG4gICAgaWQ6IDIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0V2ZW50IE1hbmFnZW1lbnQnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTG91ZGVudCBpcyBhIGV2ZW50IG1hbmFnZW1lbnQgd2ViIC1zaXRlIDsgV2hlcmUgWW91IGNhbiBib29rIGEgcGxhY2Ugb3IgaGlyZSBhIG1hbmFnZW1lbnQgdGVhbSB0byBkb2luZyB5b3VyIGV2ZW50ICBJdCB3YXMgZGV2ZWxvcGVkIHdpdGggUmVhY3QgYW5kIFRhaWx3aW5kIGNzcyB0aGF0J3MgbWFrZSB0aGUgd2Vic2l0ZSB1c2VyIGZyaWVuZGx5IGFuZCBzbW9vdGhcIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9sYXVkZW50LnBuZycsXHJcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ1RhaWx3aW5kJ10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vUmFraWJ1bDcxL0xvdWRlbnQtLW1lbmFnbWVudC1hcHAnLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2xvdWRlbnQtZXZlbnQtbWFuYWdtZW50Lm5ldGxpZnkuYXBwLycsXHJcbiAgICBpZDogMyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnRGFvIERhcHBzJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkJsb2NrY2hhaW4gdGVjaG5vbG9neSBpcyBibG9vbWluZyBEYXkgYnkgZGF5IC4gVGhpcyBpcyBkYXAgZGFwcCBibG9ja2NoYWluIGZyb250IGVuZCAuIEkgYW0gdXNpbmcgZHluYW1pYyBhcGkgdG8gbG9hZCB0aGUgZGF0YSBcIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9kYW8ucG5nJyxcclxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnQXBpJywgJ0NzcyddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL1Jha2lidWw3MS9EQU9maW5kLVJlYWN0LUZyb250LUVuZC1Ta2lsbHMtVGVzdCcsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZGFvLWRhcHBzLWZyb250ZW5kLWRlbW8ubmV0bGlmeS5hcHAvJyxcclxuICAgIGlkOiAzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdTb25nIEJpcmQgJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIiBUaGlzIGlzIGp1c3QgZnJvbnQgZW5kIG9mIHNvbmcgd2Vic2l0ZSBsaWtlIGxvLWZpZS5JbiBmdXR1cmUgSSBhbSAgY3JlYXRlIHRoaXMgcHJvamVjdCBiYWNrZW5kICBcIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9zb25nYmlyZC5wbmcnLFxyXG4gICAgdGFnczogWydIdG1sJywgJ0NzcycsICdKYXZhU2NyaXB0J10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vUmFraWJ1bDcxL011c2ljLS1hcHAnLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL3NvbmctYmlyZC1mcm9udGVuZC5uZXRsaWZ5LmFwcC8nLFxyXG4gICAgaWQ6IDMsXHJcbiAgfSxcclxuXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xyXG4gIHsgeWVhcjogMjAxNywgdGV4dDogJ1N0YXJ0aW5nIGEgZGV2ZWxvcG1lbnQgSm91cm5leScsIH0sXHJcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiAnR290IGEgc2Nob2xhcnNoaXAgZnJvbSBDaGluZXNlIHVuaXZlcnNpdHknLCB9LFxyXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ0RldmVsb3BpbmcgYSBhbmRyb2lkIGFwcHMnLCB9LFxyXG4gIHsgeWVhcjogMjAyMCwgdGV4dDogJ0ZvY3VzaW5nIG9uIGZyb250IGVuZCBhbmQgZnJlZSBMYW5jaW5nJywgfSxcclxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdDb21wbGV0ZSBJbnRlcm5zaGlwIGFzIGEgZnJvbnQgZW5kIGRldmVsb3BlcicsIH0sXHJcbiAgeyB5ZWFyOiAyMDIyLCB0ZXh0OiAnV29ya2luZyBvbiBCbG9ja2NoYWluIGFuZCBmdWxsIHN0YWNrIGRldmVsb3BtZW50JywgfSxcclxuXTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlcidcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInXHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vTGF5b3V0U3R5bGVzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOiAxMjgwcHg7XHJcbndpZHRoOiAxMDAlO1xyXG5tYXJnaW46IGF1dG87XHJcbmA7XHJcbiIsImltcG9ydCBBY29tcGxpc2htZW50cyBmcm9tICcuLi9jb21wb25lbnRzL0Fjb21wbGlzaG1lbnRzL0Fjb21wbGlzaG1lbnRzJztcclxuaW1wb3J0IEJnQW5pbWF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvQmFja2dyb291bmRBbmltYXRpb24vQmFja2dyb3VuZEFuaW1hdGlvbic7XHJcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvSGVyby9IZXJvJztcclxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMnO1xyXG5pbXBvcnQgVGVjaG5vbG9naWVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGVjaG5vbG9naWVzL1RlY2hub2xvZ2llcyc7XHJcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9jb21wb25lbnRzL1RpbWVMaW5lL1RpbWVMaW5lJztcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vbGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8U2VjdGlvbiBncmlkPlxyXG4gICAgICAgIDxIZXJvIC8+XHJcbiAgICAgICAgPEJnQW5pbWF0aW9uIC8+XHJcbiAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgPFByb2plY3RzIC8+XHJcbiAgICAgIDxUZWNobm9sb2dpZXMgLz5cclxuICAgICAgPFRpbWVsaW5lIC8+XHJcbiAgICAgIDxBY29tcGxpc2htZW50cyAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IEJ1dHRvbkJhY2ssIEJ1dHRvbkZyb250IH0gZnJvbSAnLi9pbmRleCdcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4gKFxyXG4gIDxCdXR0b25CYWNrIGFsdD17cHJvcHMuYWx0fSBmb3JtPXtwcm9wcy5mb3JtfSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9Pntwcm9wcy5jaGlsZHJlbn1cclxuICAgIDxCdXR0b25Gcm9udCBhbHQ9e3Byb3BzLmFsdH0gb25DbGljaz17cHJvcHMub25DbGlja30gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfT57cHJvcHMuY2hpbGRyZW59PC9CdXR0b25Gcm9udD5cclxuICA8L0J1dHRvbkJhY2s+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IHByb3BzLmdyaWQgPyBcImdyaWRcIiA6IFwiZmxleFwifTtcclxuICBmbGV4LWRpcmVjdGlvbjogJHsocHJvcHMpID0+IHByb3BzLnJvdyA/IFwicm93XCIgOiBcImNvbHVtblwifTtcclxuICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubm9wYWRkaW5nID8gXCIwXCIgOiBcIjMycHggNDhweCAwXCJ9IDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDEwNDBweDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIHBhZGRpbmc6IDI0cHggNDhweCAwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5ub3BhZGRpbmcgPyBcIjBcIiA6IFwiMTZweCAxNnB4IDBcIn0gO1xyXG5cclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMzJweCk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UaXRsZSA9IHN0eWxlZC5oMmBcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNjVweCcgOiAnNTZweCd9O1xyXG4gIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc3MnB4JyA6ICc2N3B4J307XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIxLjU3ZGVnLCAjRkZGRkZGIDE4Ljc3JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KSA2MC4xNSUpO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzU4cHggMCAxNnB4JyA6ICcwJ307XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNTZweCcgOiAnNDhweCd9O1xyXG4gICAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzU2cHgnIDogJzQ4cHgnfTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc0MHB4IDAgMTJweCcgOiAnMCd9O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzI4cHgnIDogJzMycHgnfTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICczMnB4JyA6ICc0MHB4J307XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICcxNnB4IDAgOHB4JyA6ICcwJ307XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvblRleHQgPSBzdHlsZWQucGBcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzLjZyZW07XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgbWF4LXdpZHRoOiA2NzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25EaXZpZGVyID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvckFsdCA/XHJcbiAgICAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0Y0NjczNyAwJSwgIzk0NURENiAxMDAlKScgOlxyXG4gICAgJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICMxM0FEQzcgMCUsICM5NDVERDYgMTAwJSknfTtcclxuXHJcbiAgICBtYXJnaW46ICR7KHByb3BzKSA9PiBwcm9wcy5kaXZpZGVyID8gXCI0cmVtIDBcIiA6IFwiXCJ9O1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25TdWJUZXh0ID0gc3R5bGVkLnBgXHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuXHJcbkBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIG1heC13aWR0aDogNjcycHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5QnRuID0gc3R5bGVkLmJ1dHRvbmBcclxuICBjb2xvcjogI0ZGRjtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMyk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwZjE2MjQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlMGU0ZWI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzA0MTY5O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4OyBcclxuICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbkJhY2sgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMTUwcHgnIDogJzI2MnB4J307XHJcbiAgaGVpZ2h0OiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnNTJweCcgOiAnNjRweCd9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMjBweCcgOiAnMjRweCd9O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogJHsoeyBhbHQsIGZvcm0gfSkgPT4gKGFsdCB8fCBmb3JtKSA/ICcwJyA6ICcwIDAgODBweCd9O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZmY2MjJlIDAlLCAjQjEzM0ZGIDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBEQkQ4IDAlLCAjQjEzM0ZGIDEwMCUpJ307XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAkeyh7IGRpc2FibGVkIH0pID0+IGRpc2FibGVkID8gJy41JyA6ICcxJ307XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIHdpZHRoOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMTUwcHgnIDogJzE4NHB4J307XHJcbiAgICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICc1MnB4JyA6ICc0OHB4J307XHJcbiAgICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcyMHB4JyA6ICcxNnB4J307XHJcbiAgICBtYXJnaW4tYm90dG9tOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMCcgOiAnNjRweCd9O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMCcgOiAnMzJweCd9O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbkZyb250ID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGNDY3MzcgMCUsICM5NDVERDYgMTAwJSknIDogJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICMxM0FEQzcgMCUsICM5NDVERDYgMTAwJSknfTtcclxuICBvcGFjaXR5OiAkeyh7IGRpc2FibGVkIH0pID0+IGRpc2FibGVkID8gJy41JyA6ICcxJ307XHJcbiAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XHJcbiAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMjBweCcgOiAnMjRweCd9O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogJHsoeyBkaXNhYmxlZCB9KSA9PiBkaXNhYmxlZCA/ICdpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyknIDogJ25vbmUnfTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICY6YWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVke1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwREJEOCAwJSwgI0IxMzNGRiAxMDAlKTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzE2cHgnfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICcyNHB4JyA6ICcxNnB4J307XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTJkNDU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICcxNnB4JyA6ICc4cHgnfTtcclxuXHJcbiAgfVxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAkeyh7IGxhcmdlIH0pID0+IGxhcmdlID8gJzAnIDogJzhweCd9O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtJY29uSW1nID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4OyAgXHJcbiAgaGVpZ2h0OiAkeyh7IGxhcmdlIH0pID0+IGxhcmdlID8gJzMycHgnIDogJzI0cHgnfTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgaGVpZ2h0OiAkeyh7IG5hdiB9KSA9PiBuYXYgPyAnMTZweCcgOiAnMjRweCd9O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgaGVpZ2h0OiAkeyh7IGxhcmdlIH0pID0+IGxhcmdlID8gJzMycHgnIDogJzE2cHgnfTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rID0gc3R5bGVkLmFgXHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubGlua31cclxuYDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=