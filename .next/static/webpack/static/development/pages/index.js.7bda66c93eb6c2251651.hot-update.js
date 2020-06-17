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
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\cards\\card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 //p = props

var CardComp = function CardComp(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(props.setImageLoad, "Image Load");
  }, []);
  var p = props;
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
    top: true,
    onLoad: function onLoad() {
      return p.setImageLoad(false);
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
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, p.title), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, p.text, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), p.addOns.map(function (addOn) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      color: "primary",
      pill: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, addOn);
  })), ' '));
};

/***/ })

})
//# sourceMappingURL=index.js.7bda66c93eb6c2251651.hot-update.js.map