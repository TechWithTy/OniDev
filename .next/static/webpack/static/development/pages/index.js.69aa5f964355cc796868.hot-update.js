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
/* harmony import */ var _cards_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/card */ "./components/cards/card.js");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\carousel\\packageCarousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






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
    responsive: responsive,
    showDots: true,
    infinite: true,
    dotListClass: "custom-dot-list-style",
    itemClass: "carousel-item-padding-40-px",
    arrows: truec // dotListClass="custom-dot-list-style"
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, props.packages.map(function (service, index) {
    return __jsx(_cards_card__WEBPACK_IMPORTED_MODULE_3__["CardComp"], {
      title: service.title,
      text: service.content,
      addOns: service.addOns,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    });
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.69aa5f964355cc796868.hot-update.js.map