webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/scheduleConsultation.js":
/*!********************************************!*\
  !*** ./components/scheduleConsultation.js ***!
  \********************************************/
/*! exports provided: ScheduleConsultation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleConsultation", function() { return ScheduleConsultation; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_calendly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-calendly */ "./node_modules/react-calendly/dist/index.es.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\scheduleConsultation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 //https://calendly.com/oni_development

var elementReady = __webpack_require__(/*! element-ready */ "./node_modules/element-ready/index.js");

useEffect(function () {
  Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var element;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return elementReady('#scheduleConsultation');

          case 2:
            element = _context.sent;
            alert('element Found'); //=> 'unicorn'

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))();
}, []);
var ScheduleConsultation = function ScheduleConsultation() {
  return __jsx("div", {
    id: "#scheduleConsultation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(react_calendly__WEBPACK_IMPORTED_MODULE_3__["InlineWidget"], {
    pageSettings: {
      backgroundColor: 'ffffff',
      hideEventTypeDetails: false,
      hideLandingPageDetails: false,
      primaryColor: '00a2ff',
      textColor: '4d5055'
    },
    prefill: {
      customAnswers: {
        a1: 'a1',
        a10: 'a10',
        a2: 'a2',
        a3: 'a3',
        a4: 'a4',
        a5: 'a5',
        a6: 'a6',
        a7: 'a7',
        a8: 'a8',
        a9: 'a9'
      },
      email: 'test@test.com',
      firstName: 'John ',
      lastName: 'Doe',
      name: 'Jon Doe'
    },
    styles: {
      height: '1000px'
    },
    url: "https://calendly.com/oni_development",
    utm: {
      utmCampaign: 'Spring Sale 2019',
      utmContent: 'Shoe and Shirts',
      utmMedium: 'Ad',
      utmSource: 'Facebook',
      utmTerm: 'Spring'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.5f4f15773783007f5fe8.hot-update.js.map