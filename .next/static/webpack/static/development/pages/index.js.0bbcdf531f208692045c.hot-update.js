webpackHotUpdate("static\\development\\pages\\index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.0bbcdf531f208692045c.hot-update.js.map