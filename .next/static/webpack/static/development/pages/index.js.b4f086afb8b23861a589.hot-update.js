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
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/oniContext */ "./pages/oniContext.js");
var _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\containers\\contact\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var initialState = {
  name: '',
  number: '',
  message: '',
  email: '',
  messageSent: false
};

function Contact(props) {
  var _this = this;

  var productConsumer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_9__["ProductContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('ProductContext', productConsumer);
    productConsumer.setValue('name', 'Tyrique Daniel');
  }, []);

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
      setErrors = _useState4[1]; // const { name, email } = productConsumer;
  // const handelSubmit2 = () => {
  //     const error = {}
  //     if (!name) {
  //         error.name = 'First Name field shouldn’t be empty';
  //     }
  //     if (!email) {
  //         error.email = 'Email field shouldn’t be empty';
  //     }
  //     if (!message) {
  //         error.message = 'Message field shouldn’t be empty';
  //     }
  //     if (error) {
  //         setErrors(error)
  //     } else {
  //         setName('');
  //         setEmail('');
  //         setMessage('');
  //     }
  // }


  return __jsx("section", {
    className: "contact-wrapper",
    id: "contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "contact-animation-images",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, _data_contact__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (img, index) {
    return __jsx("span", {
      key: "contact-img-".concat(index),
      className: "image".concat(index + 1),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    }, __jsx(_components_common_image_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
      Path: img.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }));
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 0,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "contact-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(_components_common_image_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    Path: _public_assets_images_contact_contact_us_img_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    Class: "logo-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "contact-content-block main-title-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Subtitle"], {
    Class: "sitemain-subtitle",
    Name: "Send us mesage for any Info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Subtitle"], {
    Class: "site-subtitle2",
    Name: "Call us for a free consultation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Description"], {
    Class: "contact-dec",
    Name: "+1 305 - 204 - 7863",
    Num: "3052047863",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    method: "POST",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "form-label",
    Name: "Name *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }), __jsx(Input, {
    Type: "text",
    Name: "name",
    handlechange: productConsumer.setValue,
    PlaceHolder: "John Doe",
    value: name,
    placeholder: props.PlaceHolder,
    onChange: props.changeValue ? onChangeValue : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "form-label",
    Name: "Email *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }), __jsx(_components_common_input_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Type: "text",
    Name: "email",
    PlaceHolder: "example@gmail.com",
    value: productConsumer.email,
    ChangeValue: productConsumer.setValue,
    Class: productConsumer.errors && productConsumer.errors.email && 'error',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "form-label",
    Name: "Message *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }), __jsx(_components_common_input_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Type: "textarea",
    Name: "text",
    PlaceHolder: "write your message",
    Class: "textbox ".concat(productConsumer.errors && productConsumer.errors.message && 'error'),
    value: productConsumer.message,
    ChangeValue: setMessage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  })))), __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    Class: "button1 btn button2 gradient-color",
    Name: "SUBMIT",
    Clickble: productConsumer.handelSubmit,
    BtnIcon: "btn-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.b4f086afb8b23861a589.hot-update.js.map