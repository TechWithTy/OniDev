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
  }, props.Name), props.BtnIcon && __jsx("span", {
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
  })));
}

/***/ }),

/***/ "./components/modal/index.js":
/*!***********************************!*\
  !*** ./components/modal/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/oniContext */ "./pages/oniContext.js");
/* harmony import */ var _data_business_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/business-services */ "./data/business-services/index.js");
/* harmony import */ var _cards_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cards/card */ "./components/cards/card.js");
/* harmony import */ var _carousel_packageCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../carousel/packageCarousel */ "./components/carousel/packageCarousel.js");
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.scss */ "./components/modal/modal.scss");
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modal_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_common_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/common/button */ "./components/common/button/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\modal\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var ModalExample = function ModalExample(props) {
  var productConsumer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_2__["ProductContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      packageShowing = _useState[0],
      setpackageShowing = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(productConsumer.isModalOpen, 'Modal');
  }, []);
  var buttonLabel = props.buttonLabel,
      className = props.className;

  var handlePackageModal = function handlePackageModal(packageName) {
    switch (packageName) {
      case 'webPackages':
        setpackageShowing(_data_business_services__WEBPACK_IMPORTED_MODULE_3__["webAppPackages"]);
        break;

      case 'mobileAppPackages':
        setpackageShowing(mobileAppPackages);
        break;

      case 'softwareDevelopmentPackages':
        setpackageShowing(softwareDevelopmentPackages);
        break;

      case 'seoMarketingPackages':
        setpackageShowing(seoMarketingPackages);
        break;

      default: // code block

    }
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    color: "danger",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, buttonLabel), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: productConsumer.isModalOpen,
    toggle: productConsumer.handleModal,
    className: "modal_div",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    toggle: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "Choose a package"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: !productConsumer.messageSent ? 'SUBMIT' : 'SENT',
    Clickble: productConsumer.handleSubmit,
    iconFalse: true,
    BtnIcon: "btn-icon",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Do Something"), ' ', __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: !productConsumer.messageSent ? 'SUBMIT' : 'SENT',
    Clickble: productConsumer.handleSubmit,
    iconFalse: true,
    BtnIcon: "btn-icon",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Cancel"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    Class: "button1 btn button2 gradient-color",
    Name: !productConsumer.messageSent ? 'SUBMIT' : 'SENT',
    Clickble: productConsumer.handleSubmit,
    send: productConsumer.messageSent,
    BtnIcon: "btn-icon",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, "Do Something"), ' ', __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    Class: "button1 btn button2 gradient-color",
    Name: !productConsumer.messageSent ? 'SUBMIT' : 'SENT',
    Clickble: productConsumer.handleSubmit,
    send: productConsumer.messageSent,
    BtnIcon: "btn-icon",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, "Cancel"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalExample);

/***/ }),

/***/ "./containers/banner/index.js":
/*!************************************!*\
  !*** ./containers/banner/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_common_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/common/button */ "./components/common/button/index.js");
/* harmony import */ var _components_common_title_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/common/title/index */ "./components/common/title/index.js");
/* harmony import */ var _components_common_image_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/image/index */ "./components/common/image/index.js");
/* harmony import */ var _public_assets_images_banner_bannerimg2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/assets/images/banner/bannerimg2.png */ "./public/assets/images/banner/bannerimg2.png");
/* harmony import */ var _public_assets_images_banner_bg_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/assets/images/banner/bg.png */ "./public/assets/images/banner/bg.png");
/* harmony import */ var _data_bannerimages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/bannerimages */ "./data/bannerimages/index.js");
/* harmony import */ var _public_assets_images_banner_bg_wave_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/assets/images/banner/bg-wave.svg */ "./public/assets/images/banner/bg-wave.svg");
/* harmony import */ var _public_assets_images_banner_wave_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/assets/images/banner/wave.png */ "./public/assets/images/banner/wave.png");
/* harmony import */ var _banner_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./banner.scss */ "./containers/banner/banner.scss");
/* harmony import */ var _banner_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_banner_scss__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\containers\\banner\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function Banner(props) {
  var _this = this;

  return __jsx("section", {
    className: "banner-wrapper ".concat(props.ChangeClass),
    id: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "banner-outer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "slider-animation-images",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, _data_bannerimages__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (img, index) {
    return __jsx("span", {
      className: "image".concat(index + 1),
      key: "banner-".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }
    }, __jsx(_components_common_image_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Path: img.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 88
      }
    }));
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "banner-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_3__["Titlespan"], {
    Class: "banner-main-title",
    Label: "WE ARE",
    Name: "A CREATIVE Software AGENCY",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 33
    }
  }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_3__["Description"], {
    Class: "banner-dec",
    Name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "banner-btn-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 33
    }
  }, __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    Class: "button1 button3 btn",
    Name: "LEARN MORE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 37
    }
  }), __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    Class: "button1 button4 btn",
    Name: "GET STARTED",
    Title: "gradient-color",
    BtnIcon: "btn-icon gradient-color1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "banner-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }, __jsx(_components_common_image_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    Path: _public_assets_images_banner_bannerimg2_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    Class: "banner-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }))))), (props.ChangeClass === 'demo2' || props.ChangeClass === 'demo3') && __jsx("div", {
    className: "bottom-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, props.ChangeClass === 'demo2' ? __jsx(_components_common_image_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    Path: _public_assets_images_banner_bg_wave_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }) : __jsx(_components_common_image_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    Path: _public_assets_images_banner_wave_png__WEBPACK_IMPORTED_MODULE_9__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

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
var _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\containers\\contact\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function Contact(props) {
  var _this = this;

  var productConsumer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_9__["ProductContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('ProductContext', productConsumer.messageSent);
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
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "contact-animation-images",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, _data_contact__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (img, index) {
    return __jsx("span", {
      key: "contact-img-".concat(index),
      className: "image".concat(index + 1),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, __jsx(_components_common_image_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
      Path: img.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }));
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 0,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "contact-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(_components_common_image_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    Path: _public_assets_images_contact_contact_us_img_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    Class: "logo-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "contact-content-block main-title-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Subtitle"], {
    Class: "sitemain-subtitle",
    Name: "Send us mesage for any Info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Subtitle"], {
    Class: "site-subtitle2",
    Name: "Call us for a free consultation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Description"], {
    Class: "contact-dec",
    Name: "+1 305 - 204 - 7863",
    Num: "3052047863",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    method: "POST",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "form-label",
    Name: "Name *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }), __jsx(_components_common_input_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Type: "text",
    Name: "name",
    handlechange: productConsumer.setValue,
    PlaceHolder: "John Doe",
    Value: productConsumer.name,
    ChangeValue: productConsumer.setValue,
    Class: productConsumer.errors && productConsumer.errors.name && 'error',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "form-label",
    Name: "Number *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }), __jsx(_components_common_input_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Type: "text",
    Name: "number",
    handlechange: productConsumer.setValue,
    PlaceHolder: "3054",
    Value: productConsumer.number,
    ChangeValue: productConsumer.setValue,
    Class: productConsumer.errors && productConsumer.errors.name && 'error',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "form-label",
    Name: "Email *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }), __jsx(_components_common_input_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Type: "text",
    Name: "email",
    PlaceHolder: "example@gmail.com",
    Value: productConsumer.email,
    ChangeValue: productConsumer.setValue,
    Class: productConsumer.errors && productConsumer.errors.email && 'error',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 19
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "form-label",
    Name: "Message *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }), __jsx(_components_common_input_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Type: "textarea",
    Name: "message",
    PlaceHolder: "Tell us more about your business",
    Class: "textbox ".concat(productConsumer.errors && productConsumer.errors.message && 'error'),
    Value: productConsumer.message,
    ChangeValue: productConsumer.setValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  })))), !productConsumer.moreInfoNeeded ? __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    Class: "button1 btn button2 gradient-color",
    Name: !productConsumer.messageSent ? 'SUBMIT' : 'SENT',
    Clickble: productConsumer.handleSubmit,
    send: productConsumer.messageSent,
    BtnIcon: "btn-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }) : __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    Class: "button1 btn button2 gradient-color",
    Name: 'Tell Us More',
    Clickble: productConsumer.handleModal,
    moreInfo: productConsumer.moreInfoNeeded,
    BtnIcon: "btn-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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

/***/ }),

/***/ "./containers/service/index.js":
/*!*************************************!*\
  !*** ./containers/service/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_common_title_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/common/title/index */ "./components/common/title/index.js");
/* harmony import */ var _components_common_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/common/button */ "./components/common/button/index.js");
/* harmony import */ var _data_service_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/service/index */ "./data/service/index.js");
/* harmony import */ var _components_common_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/common/icon */ "./components/common/icon/index.js");
/* harmony import */ var _service_service_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/service.scss */ "./containers/service/service.scss");
/* harmony import */ var _service_service_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_service_service_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\containers\\service\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Service() {
  var _this = this;

  return __jsx("section", {
    className: "service-wrapper",
    id: "service",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 5,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "service-content-1 main-title-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Titlespan2"], {
    Class: "sitemain-subtitle",
    Name: "Technological",
    Label: "Solutions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Subtitle"], {
    Class: "site-subtitle2",
    Name: "We Provide ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "service-title",
    Name: "Our core features",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 29
    }
  }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Description"], {
    Class: "service-dec",
    Name: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }), __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    Class: "button1 btn button2 gradient-color",
    Name: "Get a free quote",
    BtnIcon: "btn-icon",
    href: "get-quote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 7,
    md: 8,
    className: "service-block-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 6,
    className: "service-block1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, _data_service_index__WEBPACK_IMPORTED_MODULE_4__["Servicedata"].map(function (data, i) {
    return __jsx("div", {
      className: "service-".concat(i, " service-content"),
      key: data.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "service-icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 41
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 45
      }
    }, __jsx(_components_common_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      icon: data.Icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 51
      }
    }))), __jsx("div", {
      className: "service-content-dec",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 41
      }
    }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      Class: "service-title",
      Name: data.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 45
      }
    }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Description"], {
      Class: "service-dec-content",
      Name: data.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 45
      }
    })));
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 6,
    className: "service-block2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }, _data_service_index__WEBPACK_IMPORTED_MODULE_4__["Servicedata1"].map(function (data, i) {
    return __jsx("div", {
      className: "service-".concat(i, " service-content"),
      key: data.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "service-icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 41
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 45
      }
    }, __jsx(_components_common_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      icon: data.Icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 51
      }
    }))), __jsx("div", {
      className: "service-content-dec",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 41
      }
    }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      Class: "service-title",
      Name: data.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 45
      }
    }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Description"], {
      Class: "service-dec-content",
      Name: data.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 45
      }
    })));
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ })

})
//# sourceMappingURL=index.js.b1602da775fe1c6f13c3.hot-update.js.map