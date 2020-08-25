webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/addOns/numInput.js":
/*!***************************************!*\
  !*** ./components/addOns/numInput.js ***!
  \***************************************/
/*! exports provided: NumInputBoxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumInputBoxes", function() { return NumInputBoxes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_input_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-input-number */ "./node_modules/rc-input-number/es/index.js");
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/oniContext */ "./pages/oniContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\addOns\\numInput.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var NumInputBoxes = function NumInputBoxes(props) {
  var pCR = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_2__["ProductContext"]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("span", {
    style: {
      cursor: 'pointer'
    },
    className: " btn btn-black mx-1",
    onClick: function onClick() {
      pCR.addOnDecriment(props.addOn);
      console.warn(props.addOn);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "-"), __jsx("span", {
    className: " btn-black mx-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, props.addOn.count), __jsx("span", {
    style: {
      cursor: 'pointer'
    },
    className: "btn btn-black mx-1",
    onClick: function onClick() {
      return pCR.addOnIncriment(props.addOn);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "+"));
};

/***/ })

})
//# sourceMappingURL=index.js.30ff32bc9d45d835d77c.hot-update.js.map