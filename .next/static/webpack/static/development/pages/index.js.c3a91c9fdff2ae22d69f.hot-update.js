webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/businesstheme.js":
/*!*************************************!*\
  !*** ./components/businesstheme.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_modal_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modal/index */ "./components/modal/index.js");
/* harmony import */ var _containers_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/navbar */ "./containers/navbar/index.js");
/* harmony import */ var _containers_navbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_containers_navbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _containers_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/banner */ "./containers/banner/index.js");
/* harmony import */ var _containers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/service */ "./containers/service/index.js");
/* harmony import */ var _containers_about__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../containers/about */ "./containers/about/index.js");
/* harmony import */ var _containers_blog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../containers/blog */ "./containers/blog/index.js");
/* harmony import */ var _containers_video__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../containers/video */ "./containers/video/index.js");
/* harmony import */ var _containers_skills__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../containers/skills */ "./containers/skills/index.js");
/* harmony import */ var _containers_project__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../containers/project */ "./containers/project/index.js");
/* harmony import */ var _containers_portfolio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../containers/portfolio */ "./containers/portfolio/index.js");
/* harmony import */ var _containers_testimonial__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../containers/testimonial */ "./containers/testimonial/index.js");
/* harmony import */ var _containers_contact__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../containers/contact */ "./containers/contact/index.js");
/* harmony import */ var _containers_brands__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../containers/brands */ "./containers/brands/index.js");
/* harmony import */ var _containers_footer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../containers/footer */ "./containers/footer/index.js");
/* harmony import */ var _containers_copyright_text__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../containers/copyright_text */ "./containers/copyright_text/index.js");
/* harmony import */ var _containers_themecolor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../containers/themecolor */ "./containers/themecolor/index.js");
/* harmony import */ var _containers_themeoptions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../containers/themeoptions */ "./containers/themeoptions/index.js");
/* harmony import */ var _public_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../public/assets/scss/style.scss */ "./public/assets/scss/style.scss");
/* harmony import */ var _public_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-loader-spinner/dist/loader/css/react-spinner-loader.css */ "./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css");
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../pages/oniContext */ "./pages/oniContext.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\businesstheme.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
























var BusinessTheme = function BusinessTheme(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      loader = _React$useState2[0],
      setLoader = _React$useState2[1];

  var productConsumer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_23__["ProductContext"]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var interval = setInterval(function () {
      setLoader(true);
    }, 3000);
    productConsumer.setBackground('blue');
    return function () {
      return clearInterval(interval);
    };
  }, []);
  return loader ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(_containers_navbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx("div", {
    id: "main-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_containers_banner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ChangeClass: props.ThemeClass,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx(_containers_service__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx(_containers_about__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), __jsx(_containers_blog__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), __jsx(_containers_video__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), __jsx(_containers_skills__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx(_containers_project__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), __jsx(_containers_portfolio__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx(_containers_testimonial__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }), __jsx(_containers_contact__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), __jsx(_containers_brands__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }), __jsx(_containers_footer__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), __jsx(_containers_copyright_text__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx(_components_modal_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }))) : __jsx("div", {
    className: "theme-loader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default.a, {
    type: "Triangle",
    color: "#3366ff",
    height: 150,
    width: 150,
    timeout: 3000,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BusinessTheme);

/***/ }),

/***/ "./containers/menu/index.js":
false,

/***/ "./containers/navbar/index.js":
/*!************************************!*\
  !*** ./containers/navbar/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./containers/navbar/login.js":
false,

/***/ "./data/menu/index.js":
false,

/***/ "./firebaseConfig.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@firebase/app/dist/index.cjs.js":
false,

/***/ "./node_modules/@firebase/app/node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/@firebase/auth/dist/auth.esm.js":
false,

/***/ "./node_modules/@firebase/component/dist/index.cjs.js":
false,

/***/ "./node_modules/@firebase/component/node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/util/dist/index.cjs.js":
false,

/***/ "./node_modules/@firebase/util/node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/clsx/dist/clsx.m.js":
false,

/***/ "./node_modules/core-js/library/fn/weak-map.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection-weak.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.weak-map.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.weak-map.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.weak-map.of.js":
false,

/***/ "./node_modules/firebase/app/dist/index.cjs.js":
false,

/***/ "./node_modules/firebase/auth/dist/index.esm.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

/***/ "./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js":
false,

/***/ "./node_modules/react-tabs/esm/components/Tab.js":
false,

/***/ "./node_modules/react-tabs/esm/components/TabList.js":
false,

/***/ "./node_modules/react-tabs/esm/components/TabPanel.js":
false,

/***/ "./node_modules/react-tabs/esm/components/Tabs.js":
false,

/***/ "./node_modules/react-tabs/esm/components/UncontrolledTabs.js":
false,

/***/ "./node_modules/react-tabs/esm/helpers/childrenDeepMap.js":
false,

/***/ "./node_modules/react-tabs/esm/helpers/count.js":
false,

/***/ "./node_modules/react-tabs/esm/helpers/elementTypes.js":
false,

/***/ "./node_modules/react-tabs/esm/helpers/propTypes.js":
false,

/***/ "./node_modules/react-tabs/esm/helpers/uuid.js":
false,

/***/ "./node_modules/react-tabs/esm/index.js":
false,

/***/ "./node_modules/url/url.js":
false,

/***/ "./node_modules/url/util.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false,

/***/ "./public/assets/images/account.png":
false,

/***/ "./public/assets/images/login/check.png":
false,

/***/ "./public/assets/images/login/facebook.png":
false,

/***/ "./public/assets/images/login/google.png":
false,

/***/ "./public/assets/images/login/twitter.png":
false,

/***/ "./public/assets/images/search.png":
false

})
//# sourceMappingURL=index.js.c3a91c9fdff2ae22d69f.hot-update.js.map