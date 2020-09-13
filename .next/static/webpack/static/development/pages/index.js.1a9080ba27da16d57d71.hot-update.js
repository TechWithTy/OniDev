webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/finalQuote.js":
/*!**********************************!*\
  !*** ./components/finalQuote.js ***!
  \**********************************/
/*! exports provided: FinalQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalQuote", function() { return FinalQuote; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/oniContext */ "./pages/oniContext.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_common_title_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/title/index */ "./components/common/title/index.js");
/* harmony import */ var _components_total__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/total */ "./components/total.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\finalQuote.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var FinalQuote = function FinalQuote() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_1__["ProductContext"]),
      hours = _useContext.hours,
      setTotal = _useContext.setTotal,
      total = _useContext.total,
      activeAddOns = _useContext.activeAddOns,
      addOnTotal = _useContext.addOnTotal,
      packageTotal = _useContext.packageTotal,
      activeNumAddOns = _useContext.activeNumAddOns,
      addOns = _useContext.addOns;

  var prevCountRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  return __jsx("section", {
    className: "testimonial-wrapper gradient-color",
    id: "testimonial",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "main-title-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_3__["Subtitle"], {
    Class: "site-subtitle gradient-color",
    Name: "Your Quote",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_3__["Titlespan2"], {
    Class: "sitemain-subtitle",
    Name: "$".concat(Math.round(packageTotal + addOnTotal)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_3__["Description"], {
    Class: "site-dec",
    Name: "The Shown Price is only an estimate and may increase or decrease based on demand and extent of work",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), addOns.map(function (service, index) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
      color: "info",
      id: index,
      pill: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, service);
  }))));
};

/***/ })

})
//# sourceMappingURL=index.js.1a9080ba27da16d57d71.hot-update.js.map