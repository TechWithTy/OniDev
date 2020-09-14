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
/* harmony import */ var _data_business_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/business-services */ "./data/business-services/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\containers\\contact\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function Contact(props) {
  var _this = this;

  var productConsumer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_9__["ProductContext"]);

  var notify = function notify() {
    return Object(react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"])('Wow so easy !');
  };

  var handleInfo = function handleInfo() {
    productConsumer.handleErrors();
    setTimeout(function () {
      console.clear();
      console.log();
      console.warn(productConsumer.errors.length);

      if (!productConsumer.errors.length === 0) {
        var _notify = function _notify() {
          return Object(react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"])('Please Make Sure All fields are filled out !');
        };
      } else {
        productConsumer.handleModal();
      }
    }, 300);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('ProductContext', productConsumer.messageSent);
  }, [productConsumer.errors]);

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

  return __jsx("section", {
    className: "contact-wrapper",
    id: "contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "contact-animation-images",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, _data_contact__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (img, index) {
    return __jsx("span", {
      key: "contact-img-".concat(index),
      className: "image".concat(index + 1),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }, __jsx(_components_common_image_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
      Path: img.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }));
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 0,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "contact-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(_components_common_image_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    Path: _public_assets_images_contact_contact_us_img_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    Class: "logo-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "contact-content-block main-title-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Subtitle"], {
    Class: "sitemain-subtitle",
    Name: "Send us mesage for any Info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Subtitle"], {
    Class: "site-subtitle2",
    Name: "Call us for a free consultation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Description"], {
    Class: "contact-dec",
    Name: "+1 305 - 204 - 7863",
    Num: "3052047863",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    method: "POST",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "form-label",
    Name: "Name *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }), __jsx(_components_common_input_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Type: "text",
    Name: "name",
    handlechange: productConsumer.setValue,
    PlaceHolder: "John Doe",
    Value: productConsumer.name,
    ChangeValue: productConsumer.setValue,
    Class: productConsumer.errors.name && 'error',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "form-label",
    Name: "Number *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }), __jsx(_components_common_input_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Type: "text",
    Name: "number" // handlechange={productConsumer.setValue}
    ,
    PlaceHolder: "000-000-0000",
    Value: productConsumer.number,
    ChangeValue: productConsumer.setValue,
    Class: productConsumer.number && '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 19
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "form-label",
    Name: "Email *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }), __jsx(_components_common_input_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Type: "text",
    Name: "email",
    PlaceHolder: "example@gmail.com",
    Value: productConsumer.email,
    ChangeValue: productConsumer.setValue,
    Class: productConsumer.errors.email && 'error',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 19
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "form-label",
    Name: "Message *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }), __jsx(_components_common_input_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Type: "textarea",
    Name: "message",
    PlaceHolder: "Tell us more about your business",
    Class: "textbox ".concat(productConsumer.errors.message && 'error'),
    Value: productConsumer.message,
    ChangeValue: productConsumer.setValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  })))), !productConsumer.moreInfoNeeded ? __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    Class: "button1 btn button2 gradient-color",
    Name: !productConsumer.messageSent ? 'SUBMIT' : 'SENT',
    Clickble: productConsumer.handleSubmit,
    send: productConsumer.messageSent,
    BtnIcon: "btn-icon",
    type: "contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }) : __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    Class: "button1 btn button2 gradient-color",
    Name: 'Tell Us More',
    Clickble: function Clickble() {
      return handleInfo();
    },
    moreInfo: productConsumer.moreInfoNeeded,
    BtnIcon: "btn-icon",
    type: "contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }))))));
} // webAppPackages.map((service, index) => (
//                 <span
//                   key={`contact-img-${index}`}
//                   className={`image${index + 1}`}
//                 >
//                  {service.title}
//                 </span>
//               ))}


/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.78ce37c13669c8808571.hot-update.js.map