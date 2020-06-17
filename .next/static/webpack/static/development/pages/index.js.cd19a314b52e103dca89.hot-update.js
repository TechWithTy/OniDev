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
/* harmony import */ var _components_common_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/button */ "./components/common/button/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\carousel\\packageCarousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








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
    items: 1
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
  var productConsumer = Object(react__WEBPACK_IMPORTED_MODULE_7__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_2__["ProductContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(true),
      loading = _useState[0],
      setloading = _useState[1];

  if (loading) {
    return __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
      swipeable: true,
      responsive: responsive,
      showDots: true,
      infinite: true,
      ssr: true,
      removeArrowOnDeviceType: ['tablet', 'mobile'],
      dotListClass: "custom-dot-list-style",
      itemClass: "carousel-item-padding-40-px",
      arrows: true // dotListClass="custom-dot-list-style"
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }
    }, productConsumer.activePackage.map(function (service, index) {
      return __jsx(_cards_card__WEBPACK_IMPORTED_MODULE_3__["CardComp"], {
        key: index,
        title: service.title,
        text: service.content,
        addOns: service.addOns,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      });
    }));
  } else {
    __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default.a, {
      type: "Triangle",
      color: "#e100ff ",
      height: 150,
      width: 150,
      timeout: 3000,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    });
  }
};

/***/ })

})
//# sourceMappingURL=index.js.cd19a314b52e103dca89.hot-update.js.map