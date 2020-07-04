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
  var pCR = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_6__["ProductContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      cleanup;
    };
  }, [pCR.addOns]);
  return __jsx("div", {
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "list-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_common_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Web-App Add Ons',
    Clickble: function Clickble() {
      return pCR.handleActAddOns('webPackages');
    },
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "Do Something"), ' ', __jsx(_common_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Mobile-Application Add Ons',
    Clickble: function Clickble() {
      return pCR.handleActAddOns('mobileAppPackages');
    },
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Cancel")), __jsx("div", {
    className: "list-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_common_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Software Add Ons',
    Clickble: function Clickble() {
      return pCR.handleActAddOns('softwareDevelopmentPackages');
    },
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), __jsx(_common_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Marketing  Add Ons',
    Clickble: function Clickble() {
      return pCR.handleActAddOns('scriptingPackages');
    },
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, pCR.activeAddOns.length > 0 && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(_components_addOns_inputBoxes__WEBPACK_IMPORTED_MODULE_4__["InputBoxes"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }))));
};

/***/ })

})
//# sourceMappingURL=index.js.ef9a22c190ce8f1c5ddd.hot-update.js.map