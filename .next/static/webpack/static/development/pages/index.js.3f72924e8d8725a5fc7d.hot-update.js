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
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/es/index.js");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_7__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\modal\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 // requires a loader



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
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "danger",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, buttonLabel), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: productConsumer.isModalOpen,
    toggle: productConsumer.handleModal,
    className: "M",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    toggle: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Choose a package"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_7__["Carousel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, _data_business_services__WEBPACK_IMPORTED_MODULE_3__["webAppPackages"].map(function (service, index) {
    return __jsx(_cards_card__WEBPACK_IMPORTED_MODULE_4__["CardComp"], {
      title: service.title,
      text: service.content,
      addOns: service.addOns,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    });
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "primary",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Do Something"), ' ', __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "secondary",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Cancel"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalExample);

/***/ })

})
//# sourceMappingURL=index.js.3f72924e8d8725a5fc7d.hot-update.js.map