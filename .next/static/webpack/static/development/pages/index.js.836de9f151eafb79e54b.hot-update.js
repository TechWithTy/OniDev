webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/brands/index.js":
/*!************************************!*\
  !*** ./containers/brands/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _data_brands_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/brands/index */ "./data/brands/index.js");
/* harmony import */ var _components_common_image_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/image/index */ "./components/common/image/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _brands_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./brands.scss */ "./containers/brands/brands.scss");
/* harmony import */ var _brands_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_brands_scss__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\containers\\brands\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function Brand() {
  var _this = this;

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  };
  return __jsx("section", {
    className: "brand-slider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }), _data_brands_index__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (data) {
    return __jsx("div", {
      className: "brand-item",
      key: data.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "brand-content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, __jsx(_components_common_image_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Path: data.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 19
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: "text-brand",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: "align-center",
      href: "".concat(data.url),
      target: "_blank",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }, ' ', __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 23
      }
    }, data.desc))), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 19
      }
    }, data.blerp)));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Brand);

/***/ })

})
//# sourceMappingURL=index.js.836de9f151eafb79e54b.hot-update.js.map