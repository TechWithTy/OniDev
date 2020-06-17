webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/common/button/rectButton.js":
/*!************************************************!*\
  !*** ./components/common/button/rectButton.js ***!
  \************************************************/
/*! exports provided: rectButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectButton", function() { return rectButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
var _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\common\\button\\rectButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function rectButton(props) {
  return __jsx("button", {
    a: "#" + props.href,
    className: props.Class,
    onClick: props.Clickble,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "title ".concat(props.Title ? props.Title : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, props.Name), props.BtnIcon && __jsx("span", {
    className: props.BtnIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, !props.send ? __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["ChevronRight"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 26
    }
  }) : __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Send"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
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
/* harmony import */ var _components_common_button_rectButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/common/button/rectButton */ "./components/common/button/rectButton.js");
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
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    color: "danger",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, buttonLabel), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: productConsumer.isModalOpen,
    toggle: productConsumer.handleModal,
    className: "modal_div",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    toggle: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Choose a package"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "list-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("rectButton", {
    Class: "button-rectangular btn button2 gradient-color",
    Name: !productConsumer.messageSent ? 'SUBMIT' : 'SENT',
    Clickble: productConsumer.handleSubmit,
    iconFalse: true,
    BtnIcon: "btn-icon",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "Do Something"), ' ', __jsx("rectButton", {
    Class: "button-rectangular btn button2 gradient-color",
    Name: !productConsumer.messageSent ? 'SUBMIT' : 'SENT',
    Clickble: productConsumer.handleSubmit,
    iconFalse: true,
    BtnIcon: "btn-icon",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "Cancel"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("rectButton", {
    Class: "button1 btn button2 gradient-color",
    Name: !productConsumer.messageSent ? 'SUBMIT' : 'SENT',
    Clickble: productConsumer.handleSubmit,
    send: productConsumer.messageSent,
    BtnIcon: "btn-icon",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }), __jsx("rectButton", {
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
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalExample);

/***/ })

})
//# sourceMappingURL=index.js.adfecfb0d4964ec91fcb.hot-update.js.map