webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/cards/card.js":
/*!**********************************!*\
  !*** ./components/cards/card.js ***!
  \**********************************/
/*! exports provided: CardComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComp", function() { return CardComp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _data_image_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/image_source */ "./data/image_source.js");
/* harmony import */ var _card_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.scss */ "./components/cards/card.scss");
/* harmony import */ var _card_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_card_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\cards\\card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 //p = props

var CardComp = function CardComp(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      loading = _useState[0],
      setloading = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log();
  }, [loading]);
  var p = props;

  if (!loading) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
      top: true,
      onLoad: function onLoad() {
        setloading(false);
      },
      width: "100%",
      src: _data_image_source__WEBPACK_IMPORTED_MODULE_2__["packageImages"].map(function (image, index) {
        var packageTitle = p.title.toLowerCase();

        if (packageTitle.includes(image.uID)) {
          return image.src;
        } else {
          console.log(p.title, image.uID);
        }
      }),
      alt: "Card image cap",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, p.title), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }, p.text, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }), p.addOns.map(function (addOn) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        color: "primary",
        pill: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 15
        }
      }, addOn);
    })), ' '));
  } else {
    return __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4___default.a, {
      type: "Triangle",
      color: "#e100ff ",
      height: 50,
      width: 50,
      timeout: 3000,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    });
  }
};

/***/ })

})
//# sourceMappingURL=index.js.7348c4d2fb4bd5a540af.hot-update.js.map