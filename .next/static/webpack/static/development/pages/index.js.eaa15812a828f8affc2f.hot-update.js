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
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.scss */ "./components/modal/modal.scss");
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modal_scss__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\modal\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var ModalExample = function ModalExample(props) {
  var productConsumer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_2__["ProductContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(productConsumer.isModalOpen, 'Modal');
  }, []);
  var buttonLabel = props.buttonLabel,
      className = props.className;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "danger",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, buttonLabel), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: productConsumer.isModalOpen,
    toggle: productConsumer.handleModal,
    className: "modal_div",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    toggle: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Choose a package"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "primary",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Do Something"), ' ', __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "secondary",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "Cancel"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalExample);

/***/ }),

/***/ "./node_modules/react-multi-carousel/index.js":
false,

/***/ "./node_modules/react-multi-carousel/lib/Arrows.js":
false,

/***/ "./node_modules/react-multi-carousel/lib/Carousel.js":
false,

/***/ "./node_modules/react-multi-carousel/lib/CarouselItems.js":
false,

/***/ "./node_modules/react-multi-carousel/lib/Dots.js":
false,

/***/ "./node_modules/react-multi-carousel/lib/index.js":
false,

/***/ "./node_modules/react-multi-carousel/lib/types.js":
false,

/***/ "./node_modules/react-multi-carousel/lib/utils/clones.js":
false,

/***/ "./node_modules/react-multi-carousel/lib/utils/common.js":
false,

/***/ "./node_modules/react-multi-carousel/lib/utils/dots.js":
false,

/***/ "./node_modules/react-multi-carousel/lib/utils/elementWidth.js":
false,

/***/ "./node_modules/react-multi-carousel/lib/utils/index.js":
false,

/***/ "./node_modules/react-multi-carousel/lib/utils/mouseOrTouchMove.js":
false,

/***/ "./node_modules/react-multi-carousel/lib/utils/next.js":
false,

/***/ "./node_modules/react-multi-carousel/lib/utils/previous.js":
false,

/***/ "./node_modules/react-multi-carousel/lib/utils/throttle.js":
false,

/***/ "./node_modules/react-multi-carousel/lib/utils/throwError.js":
false

})
//# sourceMappingURL=index.js.eaa15812a828f8affc2f.hot-update.js.map