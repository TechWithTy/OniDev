webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/common/input/index.js":
/*!******************************************!*\
  !*** ./components/common/input/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputBox; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");

var _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\common\\input\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function InputBox(_ref) {
  var Type = _ref.Type,
      Name = _ref.Name,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["Type", "Name"]);

  var onChangeValue = function onChangeValue(e) {
    console.log("Run2");
    var target = event.target;
    var value = target.value;
    var name = target.name;
    props.ChangeValue(name, value);
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: Type,
    name: Name,
    id: props.Id,
    value: props.Value,
    className: props.Class,
    placeholder: props.PlaceHolder,
    onChange: onChangeValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  });
}

/***/ })

})
//# sourceMappingURL=index.js.56619299a6e16b62c0e3.hot-update.js.map