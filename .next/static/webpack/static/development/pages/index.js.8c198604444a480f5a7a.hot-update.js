webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/carousel/packageCarousel.js":
/*!************************************************!*\
  !*** ./components/carousel/packageCarousel.js ***!
  \************************************************/
/*! exports provided: PackageCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageCarousel", function() { return PackageCarousel; });
/* harmony import */ var _carousel_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel.scss */ "./components/carousel/carousel.scss");
/* harmony import */ var _carousel_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_carousel_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/oniContext */ "./pages/oniContext.js");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\carousel\\packageCarousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





var responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {
      max: 4000,
      min: 3000
    },
    items: 5
  },
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  }
};
var PackageCarousel = function PackageCarousel(props) {
  return __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
    swipeable: true,
    responsive: responsive // dotListClass="custom-dot-list-style"
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, props.packages.map(function (service, index) {
    return __jsx(CardComp, {
      title: service.title,
      text: service.content,
      addOns: service.addOns,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    });
  }));
};

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
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "danger",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, buttonLabel), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: productConsumer.isModalOpen,
    toggle: productConsumer.handleModal,
    className: "modal_div",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    toggle: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Choose a package"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(_carousel_packageCarousel__WEBPACK_IMPORTED_MODULE_5__["PackageCarousel"], {
    "package": _data_business_services__WEBPACK_IMPORTED_MODULE_3__["webAppPackages"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 10
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "primary",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Do Something"), ' ', __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "secondary",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Cancel"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalExample);

/***/ })

})
//# sourceMappingURL=index.js.8c198604444a480f5a7a.hot-update.js.map