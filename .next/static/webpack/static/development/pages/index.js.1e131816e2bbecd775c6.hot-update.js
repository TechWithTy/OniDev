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
    }), __jsx("div", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }, p.addOns.map(function (addOn) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
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

/***/ })

})
//# sourceMappingURL=index.js.1e131816e2bbecd775c6.hot-update.js.map