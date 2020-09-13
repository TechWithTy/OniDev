webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/addOns/inputBoxes.js":
/*!*****************************************!*\
  !*** ./components/addOns/inputBoxes.js ***!
  \*****************************************/
/*! exports provided: InputBoxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBoxes", function() { return InputBoxes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/oniContext */ "./pages/oniContext.js");
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_oniContext__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _numInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./numInput */ "./components/addOns/numInput.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\addOns\\inputBoxes.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var InputBoxes = function InputBoxes(props) {
  var pCR = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_1__["ProductContext"]);

  var isDisabled = function isDisabled(addOn) {
    if (pCR.addOns.includes(addOn)) {
      return true;
    } else {
      return false;
    }
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, pCR.activeAddOns.map(function (service, index) {
    if (service.title.includes('_')) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        key: index,
        check: true,
        inline: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        key: index,
        check: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }
      }, __jsx(_numInput__WEBPACK_IMPORTED_MODULE_3__["NumInputBoxes"], {
        addOn: service,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 15
        }
      }), service.title));
    } else {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
        key: index,
        check: true,
        inline: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        key: index,
        check: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        checked: isDisabled(service.title),
        key: index,
        type: "checkbox",
        onChange: function onChange() {
          return pCR.selectAddOn(service);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 15
        }
      }), ' ', service.title));
    }
  }));
};

/***/ }),

/***/ "./components/addOns/numInput.js":
/*!***************************************!*\
  !*** ./components/addOns/numInput.js ***!
  \***************************************/
/*! exports provided: NumInputBoxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumInputBoxes", function() { return NumInputBoxes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_input_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-input-number */ "./node_modules/rc-input-number/es/index.js");
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/oniContext */ "./pages/oniContext.js");
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_oniContext__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\addOns\\numInput.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var NumInputBoxes = function NumInputBoxes(props) {
  var pCR = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_2__["ProductContext"]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("span", {
    style: {
      cursor: 'pointer'
    },
    className: " btn btn-black mx-1",
    onClick: function onClick() {
      pCR.addOnDecriment(props.addOn);
      console.warn(props.addOn);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "-"), __jsx("span", {
    className: " btn-black mx-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, props.addOn.count), __jsx("span", {
    style: {
      cursor: 'pointer'
    },
    className: "btn btn-black mx-1",
    onClick: function onClick() {
      return pCR.addOnIncriment(props.addOn);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "+"));
};

/***/ }),

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
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_pages_oniContext__WEBPACK_IMPORTED_MODULE_23__);


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
  }, __jsx(_containers_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
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

/***/ "./components/cards/card.js":
/*!**********************************!*\
  !*** ./components/cards/card.js ***!
  \**********************************/
/*! exports provided: CardComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComp", function() { return CardComp; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _card_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card.scss */ "./components/cards/card.scss");
/* harmony import */ var _card_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_card_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/oniContext */ "./pages/oniContext.js");
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pages_oniContext__WEBPACK_IMPORTED_MODULE_6__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\cards\\card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var domLoaded = __webpack_require__(/*! dom-loaded */ "./node_modules/dom-loaded/index.js"); //p = props


var CardComp = function CardComp(props) {
  var productConsumer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_6__["ProductContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loading = _useState[0],
      setloading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      imageloading = _useState2[0],
      setimageloading = _useState2[1];

  var handleImages = function handleImages(imageName) {
    packageImages.map(function (image, index) {
      var packageTitle = p.title.toLowerCase();

      if (packageTitle.includes(image.uID)) {
        return image.src;
      } else {
        console.log(p.title, image.uID);
      }

      switch (imageName) {
        case value:
          break;

        default:
          break;
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return domLoaded;

            case 2:
              setloading(false);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [loading]);
  var p = props;

  if (!loading) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
      top: true,
      onLoad: function onLoad() {
        setimageloading(false);
      },
      width: "100%",
      src: p.image,
      alt: "Card image cap",
      className: !imageloading ? '' : 'display-none',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }), imageloading && __jsx("div", {
      className: "image-loader",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, ' ', __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default.a, {
      type: "Triangle",
      color: "#e100ff ",
      height: 50,
      width: 50,
      timeout: 99000,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    }, p.title), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    }, p.text, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }
    }), __jsx("span", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }, p.addOns.map(function (addOn, index) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
        key: index,
        className: "badge",
        color: "primary",
        pill: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }
      }, addOn);
    })), __jsx("button", {
      onClick: function onClick() {
        return productConsumer.handleFinalPackage(p["package"]);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    }, ' ', "click me", ' ')), ' '));
  } else {
    return __jsx("div", {
      className: "theme-loader",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 7
      }
    }, __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default.a, {
      type: "Triangle",
      color: "#e100ff ",
      height: 50,
      width: 50,
      timeout: 3000,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }
    }));
  }
};

/***/ }),

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
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_oniContext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cards_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/card */ "./components/cards/card.js");
/* harmony import */ var _components_common_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/button */ "./components/common/button/index.js");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\carousel\\packageCarousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







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
    items: 1
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
  var productConsumer = Object(react__WEBPACK_IMPORTED_MODULE_6__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_2__["ProductContext"]);
  return __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
    swipeable: true,
    responsive: responsive,
    showDots: false,
    infinite: true,
    ssr: false,
    dotListClass: "custom-dot-list-style",
    removeArrowOnDeviceType: ["tablet", "mobile"],
    itemClass: "carousel-item-padding-40-px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, productConsumer.activePackage.map(function (service, index) {
    return __jsx(_cards_card__WEBPACK_IMPORTED_MODULE_3__["CardComp"], {
      key: index,
      title: service.title,
      text: service.content,
      addOns: service.addOns,
      image: service.src,
      "package": service,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    });
  }));
};

/***/ }),

/***/ "./components/finalQuote.js":
/*!**********************************!*\
  !*** ./components/finalQuote.js ***!
  \**********************************/
/*! exports provided: FinalQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalQuote", function() { return FinalQuote; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/oniContext */ "./pages/oniContext.js");
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_oniContext__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_common_title_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/title/index */ "./components/common/title/index.js");
/* harmony import */ var _components_total__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/total */ "./components/total.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\finalQuote.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var FinalQuote = function FinalQuote() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_1__["ProductContext"]),
      hours = _useContext.hours,
      setTotal = _useContext.setTotal,
      total = _useContext.total,
      activeAddOns = _useContext.activeAddOns,
      addOnTotal = _useContext.addOnTotal,
      packageTotal = _useContext.packageTotal,
      activeNumAddOns = _useContext.activeNumAddOns,
      addOns = _useContext.addOns;

  var prevCountRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  return __jsx("section", {
    className: "testimonial-wrapper gradient-color",
    id: "testimonial",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "main-title-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_3__["Subtitle"], {
    Class: "site-subtitle gradient-color",
    Name: "Your Quote",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_3__["Titlespan2"], {
    Class: "sitemain-subtitle",
    Name: "$".concat(Math.round(packageTotal + addOnTotal)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_3__["Description"], {
    Class: "site-dec",
    Name: "The Shown Price is only an estimate and may increase or decrease based on demand and extent of work",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), addOns.map(function (service, index) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
      color: "info",
      id: index,
      pill: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, service);
  }), activeNumAddOns.map(function (service, index) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
      color: "info",
      id: index,
      pill: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, "(", service.count, ")", service.title);
  }))));
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
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_oniContext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_business_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/business-services */ "./data/business-services/index.js");
/* harmony import */ var _cards_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cards/card */ "./components/cards/card.js");
/* harmony import */ var _carousel_packageCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../carousel/packageCarousel */ "./components/carousel/packageCarousel.js");
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.scss */ "./components/modal/modal.scss");
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modal_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_common_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/common/button */ "./components/common/button/index.js");
/* harmony import */ var _common_button_prevButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/button/prevButton */ "./components/common/button/prevButton.js");
/* harmony import */ var _selectAddons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../selectAddons */ "./components/selectAddons.js");
/* harmony import */ var _selectPackage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../selectPackage */ "./components/selectPackage.js");
/* harmony import */ var _scheduleConsultation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../scheduleConsultation */ "./components/scheduleConsultation.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _quoteSteps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../quoteSteps */ "./components/quoteSteps.js");
/* harmony import */ var _finalQuote__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../finalQuote */ "./components/finalQuote.js");
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

  var setRButton = function setRButton() {
    if (!productConsumer.messageSent && productConsumer.progress !== 99.99) {
      return 'Next';
    }

    if (productConsumer.messageSent) {
      return 'Sent';
    }

    if (!productConsumer.messageSent && productConsumer.progress === 99.99) {
      return 'Submit';
    }
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    color: "danger",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, buttonLabel), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: productConsumer.isModalOpen,
    toggle: productConsumer.handleModal,
    className: "modal_div",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    toggle: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, {
    0: 'Choose Your Packages',
    33.33: 'Select Additional Add Ons',
    66.66: 'Your Final Quote',
    99.99: 'Schedule A Consultation'
  }[productConsumer.progress]), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, {
    0: __jsx(_selectPackage__WEBPACK_IMPORTED_MODULE_10__["SelectPackage"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 18
      }
    }),
    33.33: __jsx(_selectAddons__WEBPACK_IMPORTED_MODULE_9__["SelectAddons"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 22
      }
    }),
    66.66: __jsx(_finalQuote__WEBPACK_IMPORTED_MODULE_14__["FinalQuote"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 22
      }
    }),
    99.99: __jsx(_scheduleConsultation__WEBPACK_IMPORTED_MODULE_11__["ScheduleConsultation"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 22
      }
    })
  }[productConsumer.progress], __jsx(_quoteSteps__WEBPACK_IMPORTED_MODULE_13__["QuoteSteps"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "prev-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx(_common_button_prevButton__WEBPACK_IMPORTED_MODULE_8__["PrevButton"], {
    Class: "button2-left btn button2 gradient-color",
    Name: 'Previous',
    Clickble: function Clickble() {
      return productConsumer.decrProgress(33.33);
    },
    BtnIcon: "btn-icon",
    type: "navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    Class: "button1 btn button2 gradient-color",
    Name: setRButton(),
    Clickble: function Clickble() {
      return productConsumer.progress !== 99.99 ? productConsumer.incrProgress(33.33) : productConsumer.handleSubmit();
    },
    send: productConsumer.messageSent,
    BtnIcon: "btn-icon",
    type: "contact",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalExample);

/***/ }),

/***/ "./components/quoteSteps.js":
/*!**********************************!*\
  !*** ./components/quoteSteps.js ***!
  \**********************************/
/*! exports provided: QuoteSteps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteSteps", function() { return QuoteSteps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_sweet_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sweet-progress */ "./node_modules/react-sweet-progress/lib/index.js");
/* harmony import */ var react_sweet_progress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_sweet_progress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_sweet_progress_lib_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sweet-progress/lib/style.css */ "./node_modules/react-sweet-progress/lib/style.css");
/* harmony import */ var react_sweet_progress_lib_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_sweet_progress_lib_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/oniContext */ "./pages/oniContext.js");
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_oniContext__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\quoteSteps.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 //pCR = Product Consumer

var QuoteSteps = function QuoteSteps() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('active'),
      status = _useState[0],
      setstatus = _useState[1];

  var pCR = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_3__["ProductContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (pCR.progress >= 99.99) {
      setstatus('success');
    } else {
      setstatus('active');
    }
  }, [pCR.progress]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(react_sweet_progress__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    percent: pCR.progress,
    status: status,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }));
};

/***/ }),

/***/ "./components/selectAddons.js":
/*!************************************!*\
  !*** ./components/selectAddons.js ***!
  \************************************/
/*! exports provided: SelectAddons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAddons", function() { return SelectAddons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _data_business_services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/business-services/index */ "./data/business-services/index.js");
/* harmony import */ var _common_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/button */ "./components/common/button/index.js");
/* harmony import */ var _components_addOns_inputBoxes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/addOns/inputBoxes */ "./components/addOns/inputBoxes.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/oniContext */ "./pages/oniContext.js");
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pages_oniContext__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_addOns_numInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/addOns/numInput */ "./components/addOns/numInput.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\selectAddons.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var SelectAddons = function SelectAddons() {
  var pCR = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_6__["ProductContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {}, [pCR.addOns]);
  return __jsx("div", {
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "list-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_common_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Web-App Add Ons',
    Clickble: function Clickble() {
      return pCR.handleActAddOns('webPackages');
    },
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Do Something"), ' ', __jsx(_common_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Mobile-Application Add Ons',
    Clickble: function Clickble() {
      return pCR.handleActAddOns('mobileAppPackages');
    },
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Cancel")), __jsx("div", {
    className: "list-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_common_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Software Add Ons',
    Clickble: function Clickble() {
      return pCR.handleActAddOns('scriptingPackages');
    },
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx(_common_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Marketing  Add Ons',
    Clickble: function Clickble() {
      return pCR.handleActAddOns('marketingPackages');
    },
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, pCR.activeAddOns.length > 0 && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(_components_addOns_inputBoxes__WEBPACK_IMPORTED_MODULE_4__["InputBoxes"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  })), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, pCR.addOnTotal)));
};

/***/ }),

/***/ "./components/selectPackage.js":
/*!*************************************!*\
  !*** ./components/selectPackage.js ***!
  \*************************************/
/*! exports provided: SelectPackage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPackage", function() { return SelectPackage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carousel_packageCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel/packageCarousel */ "./components/carousel/packageCarousel.js");
/* harmony import */ var _common_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/button */ "./components/common/button/index.js");
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/oniContext */ "./pages/oniContext.js");
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_oniContext__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\selectPackage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var SelectPackage = function SelectPackage() {
  var productConsumer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_3__["ProductContext"]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "list-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(_common_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Web App Packages',
    Clickble: function Clickble() {
      return productConsumer.handleActPackage('webPackages');
    },
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Do Something"), ' ', __jsx(_common_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
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
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Cancel")), __jsx("div", {
    className: "list-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_common_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
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
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx(_common_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
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
      lineNumber: 52,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, productConsumer.activePackage.length > 0 && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(_carousel_packageCarousel__WEBPACK_IMPORTED_MODULE_1__["PackageCarousel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }))));
};

/***/ }),

/***/ "./containers/contact/index.js":
/*!*************************************!*\
  !*** ./containers/contact/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_common_title_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/common/title/index */ "./components/common/title/index.js");
/* harmony import */ var _components_common_image_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/common/image/index */ "./components/common/image/index.js");
/* harmony import */ var _public_assets_images_contact_contact_us_img_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/assets/images/contact/contact-us-img.png */ "./public/assets/images/contact/contact-us-img.png");
/* harmony import */ var _components_common_input_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/common/input/index */ "./components/common/input/index.js");
/* harmony import */ var _components_common_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/common/button */ "./components/common/button/index.js");
/* harmony import */ var _data_contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/contact */ "./data/contact/index.js");
/* harmony import */ var _contact_contact_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contact/contact.scss */ "./containers/contact/contact.scss");
/* harmony import */ var _contact_contact_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_contact_contact_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/oniContext */ "./pages/oniContext.js");
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_pages_oniContext__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _data_business_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/business-services */ "./data/business-services/index.js");
var _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\containers\\contact\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function Contact(props) {
  var _this = this;

  var productConsumer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_9__["ProductContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('ProductContext', productConsumer.messageSent);
    productConsumer.setValue('name', 'Tyrique Daniel');
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      message = _useState3[0],
      setMessage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      errors = _useState4[0],
      setErrors = _useState4[1]; // const { name, email } = productConsumer;
  // const handelSubmit2 = () => {
  //     const error = {}
  //     if (!name) {
  //         error.name = 'First Name field shouldn’t be empty';
  //     }
  //     if (!email) {
  //         error.email = 'Email field shouldn’t be empty';
  //     }
  //     if (!message) {
  //         error.message = 'Message field shouldn’t be empty';
  //     }
  //     if (error) {
  //         setErrors(error)
  //     } else {
  //         setName('');
  //         setEmail('');
  //         setMessage('');
  //     }
  // }


  return __jsx("section", {
    className: "contact-wrapper",
    id: "contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "contact-animation-images",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, _data_contact__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (img, index) {
    return __jsx("span", {
      key: "contact-img-".concat(index),
      className: "image".concat(index + 1),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, __jsx(_components_common_image_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
      Path: img.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }));
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 0,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "contact-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(_components_common_image_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    Path: _public_assets_images_contact_contact_us_img_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    Class: "logo-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "contact-content-block main-title-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Subtitle"], {
    Class: "sitemain-subtitle",
    Name: "Send us mesage for any Info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Subtitle"], {
    Class: "site-subtitle2",
    Name: "Call us for a free consultation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }), __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Description"], {
    Class: "contact-dec",
    Name: "+1 305 - 204 - 7863",
    Num: "3052047863",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    method: "POST",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "form-label",
    Name: "Name *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }), __jsx(_components_common_input_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Type: "text",
    Name: "name",
    handlechange: productConsumer.setValue,
    PlaceHolder: "John Doe",
    Value: productConsumer.name,
    ChangeValue: productConsumer.setValue,
    Class: productConsumer.errors && productConsumer.errors.name && 'error',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "form-label",
    Name: "Number *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }), __jsx(_components_common_input_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Type: "text",
    Name: "number",
    handlechange: productConsumer.setValue,
    PlaceHolder: "000-000-0000",
    Value: productConsumer.number,
    ChangeValue: productConsumer.setValue,
    Class: productConsumer.errors && productConsumer.errors.name && 'error',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "form-label",
    Name: "Email *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }), __jsx(_components_common_input_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Type: "text",
    Name: "email",
    PlaceHolder: "example@gmail.com",
    Value: productConsumer.email,
    ChangeValue: productConsumer.setValue,
    Class: productConsumer.errors && productConsumer.errors.email && 'error',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 19
    }
  }, __jsx(_components_common_title_index__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    Class: "form-label",
    Name: "Message *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }), __jsx(_components_common_input_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Type: "textarea",
    Name: "message",
    PlaceHolder: "Tell us more about your business",
    Class: "textbox ".concat(productConsumer.errors && productConsumer.errors.message && 'error'),
    Value: productConsumer.message,
    ChangeValue: productConsumer.setValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  })))), !productConsumer.moreInfoNeeded ? __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    Class: "button1 btn button2 gradient-color",
    Name: !productConsumer.messageSent ? 'SUBMIT' : 'SENT',
    Clickble: productConsumer.handleSubmit,
    send: productConsumer.messageSent,
    BtnIcon: "btn-icon",
    type: "contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }) : __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    Class: "button1 btn button2 gradient-color",
    Name: 'Tell Us More',
    Clickble: productConsumer.handleModal,
    moreInfo: productConsumer.moreInfoNeeded,
    BtnIcon: "btn-icon",
    type: "contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }))))));
} // webAppPackages.map((service, index) => (
//                 <span
//                   key={`contact-img-${index}`}
//                   className={`image${index + 1}`}
//                 >
//                  {service.title}
//                 </span>
//               ))}


/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
false,

/***/ "./node_modules/emailjs-com/source/index.js":
false,

/***/ "./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js":
false,

/***/ "./node_modules/emailjs-com/source/services/ui/UI.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_businesstheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/businesstheme */ "./components/businesstheme.js");
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/oniContext */ "./pages/oniContext.js");
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_oniContext__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Home = function Home() {
  return __jsx(_pages_oniContext__WEBPACK_IMPORTED_MODULE_3__["ProductProvider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "main-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_components_businesstheme__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ThemeClass: "demo1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/oniContext.js":
/*!*****************************!*\
  !*** ./pages/oniContext.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

})
//# sourceMappingURL=index.js.91fde04b01d1b24b3f13.hot-update.js.map