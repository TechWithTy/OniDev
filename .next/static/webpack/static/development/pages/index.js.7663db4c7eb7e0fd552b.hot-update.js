webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/carousel/packageCarousel.js":
/*!************************************************!*\
  !*** ./components/carousel/packageCarousel.js ***!
  \************************************************/
/*! exports provided: packageCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packageCarousel", function() { return packageCarousel; });
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
var packageCarousel = function packageCarousel(props) {
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
      title: props.title,
      text: props.content,
      addOns: props.addOns,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    });
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.7663db4c7eb7e0fd552b.hot-update.js.map