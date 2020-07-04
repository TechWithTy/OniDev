webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/common/button/index.js":
/*!*******************************************!*\
  !*** ./components/common/button/index.js ***!
  \*******************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
var _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\common\\button\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Button(props) {
  return __jsx("button", {
    // a={`#` + props.href}
    className: props.Class,
    onClick: props.Clickble,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "title ".concat(props.Title ? props.Title : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, props.Name), props.BtnIcon && props.type == 'contact' ? __jsx("span", {
    className: props.BtnIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, !props.send ? __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["ChevronRight"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 28
    }
  }) : __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Send"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 47
    }
  })) : __jsx("span", {
    className: props.BtnIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Plus"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 44
    }
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.13f883d33facbfca053a.hot-update.js.map