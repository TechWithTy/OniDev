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
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\selectAddons.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var SelectAddons = function SelectAddons() {
  return __jsx("div", {
    style: {
      'text-align': 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, _data_business_services_index__WEBPACK_IMPORTED_MODULE_2__["webAddOns"].map(function (service, index) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
      check: true,
      inline: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      check: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      type: "checkbox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }), " ", service.title));
  })));
};

/***/ })

})
//# sourceMappingURL=index.js.b16df11851be9d7c5e6a.hot-update.js.map