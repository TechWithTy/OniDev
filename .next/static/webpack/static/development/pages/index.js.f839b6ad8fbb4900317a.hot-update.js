webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/selectPackage.js":
/*!*************************************!*\
  !*** ./components/selectPackage.js ***!
  \*************************************/
/*! exports provided: SelectPackage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPackage", function() { return SelectPackage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carousel_packageCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel/packageCarousel */ "./components/carousel/packageCarousel.js");
/* harmony import */ var _common_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/button */ "./components/common/button/index.js");
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/oniContext */ "./pages/oniContext.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\selectPackage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var SelectPackage = function SelectPackage() {
  var productConsumer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_3__["ProductContext"]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "list-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(_common_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Web App Packages',
    Clickble: function Clickble() {
      return productConsumer.handleActPackage('webPackages');
    },
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Do Something"), ' ', __jsx(_common_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Mobile Application Packages',
    Clickble: function Clickble() {
      return productConsumer.handleActPackage('mobileAppPackages', false);
    },
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Cancel")), __jsx("div", {
    className: "list-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_common_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Software Packages',
    Clickble: function Clickble() {
      return productConsumer.handleActPackage('softwareDevelopmentPackages', false);
    },
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx(_common_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Marketing  Packages',
    Clickble: function Clickble() {
      return productConsumer.handleActPackage('seoMarketingPackages', false);
    },
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, productConsumer.activePackage.length > 0 && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(_carousel_packageCarousel__WEBPACK_IMPORTED_MODULE_1__["PackageCarousel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }))));
};

/***/ })

})
//# sourceMappingURL=index.js.f839b6ad8fbb4900317a.hot-update.js.map