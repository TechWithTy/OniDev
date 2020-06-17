webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/common/button/index.js":
/*!*******************************************!*\
  !*** ./components/common/button/index.js ***!
  \*******************************************/
/*! exports provided: Button, rectButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectButton", function() { return rectButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
var _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\common\\button\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Button(props) {
  return __jsx("button", {
    a: "#" + props.href,
    className: props.Class,
    onClick: props.Clickble,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "title ".concat(props.Title ? props.Title : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, props.Name), props.BtnIcon && __jsx("span", {
    className: props.BtnIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, !props.send ? __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["ChevronRight"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 35
    }
  }) : __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Send"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 53
    }
  })));
}
function rectButton(props) {
  return __jsx("button", {
    a: "#" + props.href,
    className: props.Class,
    onClick: props.Clickble,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "title ".concat(props.Title ? props.Title : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, props.Name), props.BtnIcon && props.type.toLowerCase()(__jsx("span", {
    className: props.BtnIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, !props.send ? __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["ChevronRight"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 26
    }
  }) : __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Send"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 45
    }
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.ffe15856cfcc417dd9c0.hot-update.js.map