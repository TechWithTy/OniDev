webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/contact/index.js":
/*!*************************************!*\
  !*** ./containers/contact/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_common_title_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/common/title/index */ "./components/common/title/index.js");
/* harmony import */ var _components_common_image_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/common/image/index */ "./components/common/image/index.js");
/* harmony import */ var _public_assets_images_contact_contact_us_img_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/assets/images/contact/contact-us-img.png */ "./public/assets/images/contact/contact-us-img.png");
/* harmony import */ var _components_common_input_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/common/input/index */ "./components/common/input/index.js");
/* harmony import */ var _components_common_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/common/button */ "./components/common/button/index.js");
/* harmony import */ var _data_contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/contact */ "./data/contact/index.js");
/* harmony import */ var _contact_contact_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contact/contact.scss */ "./containers/contact/contact.scss");
/* harmony import */ var _contact_contact_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_contact_contact_scss__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\containers\\contact\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function Contact() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      message = _useState3[0],
      setMessage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var handelSubmit = function handelSubmit() {
    alert("What!");
  };

  return __jsx("section", {
    className: "contact-wrapper",
    id: "contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "contact-animation-images",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, _data_contact__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (img, index) {
    return __jsx("span", {
      key: "contact-img-".concat(index),
      className: "image".concat(index + 1),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, __jsx(_components_common_image_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
      Path: img.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 15
      }
    }));
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 0,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "contact-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx(_components_common_image_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    Path: _public_assets_images_contact_contact_us_img_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    Class: "logo-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "contact-content-block main-title-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Subtitle"], {
    Class: "sitemain-subtitle",
    Name: "Send us mesage for any Info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Subtitle"], {
    Class: "site-subtitle2",
    Name: "Call us for a free consultation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Description"], {
    Class: "contact-dec",
    Name: "+1 305 - 204 - 7863",
    Num: "3052047863",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    method: "POST",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "form-label",
    Name: "Name *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 23
    }
  }), __jsx(_components_common_input_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Type: "text",
    Name: "name",
    PlaceHolder: "John Doe",
    value: name,
    ChangeValue: setName,
    Class: errors && errors.name && 'error',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 23
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "form-label",
    Name: "Email *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 23
    }
  }), __jsx(_components_common_input_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Type: "text",
    Name: "email",
    PlaceHolder: "example@gmail.com",
    value: email,
    ChangeValue: setEmail,
    Class: errors && errors.email && 'error',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 23
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "form-label",
    Name: "Message *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 23
    }
  }), __jsx(_components_common_input_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Type: "textarea",
    Name: "text",
    PlaceHolder: "write your message",
    Class: "textbox ".concat(errors && errors.message && 'error'),
    value: message,
    ChangeValue: setMessage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 23
    }
  })))), __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    Class: "button1 btn button2 gradient-color",
    Name: "SUBMIT",
    Clickble: handelSubmit,
    BtnIcon: "btn-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.afa98f893a1fa11ce136.hot-update.js.map