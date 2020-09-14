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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_calendly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-calendly */ "./node_modules/react-calendly/dist/index.es.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\scheduleConsultation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //https://calendly.com/oni_development

var ScheduleConsultation = function ScheduleConsultation() {
  var prefillVar = {
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
    firstName: 'Jon',
    lastName: 'Snow',
    name: 'Jon Snow'
  };

  var openWidget = function openWidget() {
    Object(react_calendly__WEBPACK_IMPORTED_MODULE_1__["openPopupWidget"])({
      url: 'https://calendly.com/oni_development',
      prefill: prefillVar,
      pageSettings: '',
      utm: utm
    });
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("span", {
    onClick: function onClick() {
      openWidget();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 8
    }
  }, " Schedule Consultation"));
};

/***/ })

})
//# sourceMappingURL=index.js.3d7138fc3ae98d209451.hot-update.js.map