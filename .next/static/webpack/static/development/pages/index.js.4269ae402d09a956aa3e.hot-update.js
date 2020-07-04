webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/addOns/inputBoxes.js":
/*!*****************************************!*\
  !*** ./components/addOns/inputBoxes.js ***!
  \*****************************************/
/*! exports provided: InputBoxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBoxes", function() { return InputBoxes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/oniContext */ "./pages/oniContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\addOns\\inputBoxes.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var InputBoxes = function InputBoxes() {
  var pCR = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_1__["ProductContext"]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, pCR.activeAddOns.map(function (service, index) {
    return __jsx(FormGroup, {
      check: true,
      inline: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }
    }, __jsx(Label, {
      check: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, __jsx(Input, {
      type: "checkbox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 15
      }
    }), " ", service.title));
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.4269ae402d09a956aa3e.hot-update.js.map