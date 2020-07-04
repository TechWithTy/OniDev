webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/selectAddons.js":
/*!************************************!*\
  !*** ./components/selectAddons.js ***!
  \************************************/
/*! exports provided: SelectAddons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAddons", function() { return SelectAddons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _data_business_services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/business-services/index */ "./data/business-services/index.js");
/* harmony import */ var _common_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/button */ "./components/common/button/index.js");
/* harmony import */ var _components_addOns_inputBoxes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/addOns/inputBoxes */ "./components/addOns/inputBoxes.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/oniContext */ "./pages/oniContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\selectAddons.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var SelectAddons = function SelectAddons() {
  var pCR = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contextValue);
  return __jsx("div", {
    style: {
      'text-align': 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "list-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(_common_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Web App Packages',
    Clickble: function Clickble() {
      return productConsumer.handleActPackage('webPackages', false);
    },
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "Do Something"), ' ', __jsx(_common_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
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
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Cancel")), __jsx("div", {
    className: "list-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx(_common_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
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
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx(_common_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
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
      lineNumber: 54,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, pCR.activeAddOns.length > 0 && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(_components_addOns_inputBoxes__WEBPACK_IMPORTED_MODULE_4__["InputBoxes"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  })))));
};

/***/ })

})
//# sourceMappingURL=index.js.28b6c6d74c11f298b843.hot-update.js.map