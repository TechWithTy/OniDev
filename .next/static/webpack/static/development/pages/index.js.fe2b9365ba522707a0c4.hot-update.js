webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ */ "./components/modal/index.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9__);
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
  }, [productConsumer.activePackage]);
  var buttonLabel = props.buttonLabel,
      className = props.className;

  var handlePackageModal = function handlePackageModal(packageName) {};

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    color: "danger",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, buttonLabel), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: productConsumer.isModalOpen,
    toggle: productConsumer.handleModal,
    className: "modal_div",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    toggle: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Choose a package"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "list-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Web App Packages',
    Clickble: function Clickble() {
      return productConsumer.handleActPackage('webPackages', false);
    },
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Do Something"), ' ', __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Mobile Application Packages',
    Clickble: function Clickble() {
      return productConsumer.handleActPackage('mobileAppPackages', false);
    },
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Cancel")), __jsx("div", {
    className: "list-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Software Packages',
    Clickble: function Clickble() {
      return productConsumer.handleActPackage('softwareDevelopmentPackages', false);
    },
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Marketing  Packages',
    Clickble: function Clickble() {
      return productConsumer.handleActPackage('seoMarketingPackages', false);
    },
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, productConsumer.activePackage.length > 0 && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx(_carousel_packageCarousel__WEBPACK_IMPORTED_MODULE_5__["PackageCarousel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    Class: "button1 btn button2 gradient-color",
    Name: !productConsumer.messageSent ? 'SUBMIT' : 'SENT',
    Clickble: productConsumer.handleSubmit,
    send: productConsumer.messageSent,
    BtnIcon: "btn-icon",
    type: "contact",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }), __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    Class: "button1 btn button2 gradient-color",
    Name: !productConsumer.messageSent ? 'SUBMIT' : 'SENT',
    Clickble: productConsumer.handleSubmit,
    send: productConsumer.messageSent,
    BtnIcon: "btn-icon",
    type: "contact",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalExample);

/***/ })

})
//# sourceMappingURL=index.js.fe2b9365ba522707a0c4.hot-update.js.map