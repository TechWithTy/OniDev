webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/oniContext.js":
/*!*****************************!*\
  !*** ./pages/oniContext.js ***!
  \*****************************/
/*! exports provided: default, ProductProvider, ProductConsumer, ProductContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductProvider", function() { return ProductProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductConsumer", function() { return ProductConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductContext", function() { return ProductContext; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_selectPackage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/selectPackage */ "./components/selectPackage.js");
/* harmony import */ var _data_business_services_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../data/business-services/index */ "./data/business-services/index.js");














var _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\pages\\oniContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_5___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_5___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_5___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_5___default()(Date, [], function () {})); return true; } catch (e) { return false; } }



 //Function Order From earliest to latest


var ProductContext = react__WEBPACK_IMPORTED_MODULE_14___default.a.createContext();
var ratePerHour = 25;
var initstate = {
  name: '',
  number: '',
  message: '',
  email: '',
  messageSent: false,
  errors: {},
  addOns: [],
  moreInfoNeeded: true,
  isModalOpen: false,
  activePackage: [],
  activeAddOns: [],
  activeNumAddOns: activeNumAddOns,
  finalPackage: {},
  finalAddOns: [],
  progress: 0,
  total: 0,
  hours: 0,
  packageTotal: 0,
  addOnTotal: 0
};

var ProductProvider = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(ProductProvider, _Component);

  var _super = _createSuper(ProductProvider);

  function ProductProvider() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, ProductProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "state", {
      name: '',
      number: '',
      message: '',
      email: '',
      messageSent: false,
      errors: {},
      addOns: [],
      moreInfoNeeded: true,
      isModalOpen: false,
      activeAddOns: [],
      activePackage: [],
      finalPackage: {},
      finalAddOns: [],
      progress: 0,
      hours: 0,
      packageTotal: 0,
      addOnTotal: 0,
      total: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "setThemeColor", function (color) {
      switch (color) {
        case 'blue':
          document.body.style.setProperty('--primary', 'linear-gradient(to right, #33ccff 0%, #3366ff 100%)');
          document.body.style.setProperty('--primary1', '#3366ff');
          document.body.style.setProperty('--primary2', '#33ccff');
          document.body.style.setProperty('--primary3', 'rgba(52, 106, 255, 0.1)');
          document.body.style.setProperty('--bannerimg', 'url(/assets/images/banner/bg1.png)');
          break;

        case 'green':
          document.body.style.setProperty('--primary', 'linear-gradient(to right, #184e68 0%, #57ca85 100%)');
          document.body.style.setProperty('--primary1', '#57ca85');
          document.body.style.setProperty('--primary2', '#184e68');
          document.body.style.setProperty('--primary3', 'rgba(24, 78, 104, 0.1)');
          document.body.style.setProperty('--bannerimg', 'url(/assets/images/banner/bg4.png)');
          break;

        default:
          break;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "addOnIncriment", function (addOn) {
      addOn.count = addOn.count + 1;

      _this.setState({
        addOnTotal: Math.round(_this.state.addOnTotal + addOn.hours * ratePerHour * Math.PI)
      });

      console.log(addOn.count);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "addOnDecriment", function (addOn) {
      if (addOn.count > 0) {
        console.warn("".concat(_this.state.hours, " - ").concat(addOn.hours, " * ").concat(addOn.count), _this.state.hours - addOn.hours * addOn.count);
        addOn.count = addOn.count - 1;
        console.log("".concat(_this.state.addOnTotal, " -\n            ").concat(addOn.hours, " * ").concat(addOn.count, " * ").concat(ratePerHour, " * ").concat(Math.PI)); // this.setState({
        //   addOnTotal: 
        //     this.state.addOnTotal -
        //       Math.round(addOn.hours * addOn.count * ratePerHour * Math.PI)
        //   ,
        // });

        _this.setState({
          addOnTotal: Math.round(_this.state.addOnTotal - addOn.hours * ratePerHour * Math.PI)
        });
      } else {
        return;
      }

      console.log(addOn.hours * addOn.count * ratePerHour * Math.PI, 'Decriment');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "progressIncrement", function (incrBy) {
      if (_this.state.progress < 99.99) {
        _this.setState({
          progress: _this.state.progress + incrBy
        });
      } else {
        return;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "setTotal", function () {
      _this.setState({
        total: _this.state.addOnTotal + _this.state.packageTotal + _this.state.hours * ratePerHour * Math.PI
      });

      console.log(_this.state);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "selectAddOn", function (addOn) {
      if (_this.state.addOns.includes(addOn.title)) {
        console.clear();

        var tempAddOns = _this.state.addOns.filter(function (obj) {
          return obj !== addOn.title;
        });

        console.warn(tempAddOns);

        if (_this.state.addOnTotal > 0) {
          _this.setState({
            addOns: tempAddOns
          });

          _this.setState({
            hours: _this.state.hours - addOn.hours
          });

          console.log(' Found', _this.state.hours + addOn.hours);
          setTimeout(function () {
            console.log(_this.state.hours - addOn.hours * ratePerHour * Math.PI);

            _this.setState({
              addOnTotal: Math.round(_this.state.addOnTotal - addOn.hours * ratePerHour * Math.PI)
            });
          }, 300);
          setTimeout(function () {
            _this.setTotal();
          }, 300);
        }
      } else {
        _this.state.addOns.push(addOn.title);

        _this.setState({
          hours: _this.state.hours + addOn.hours
        });

        console.log('Not Found', _this.state.hours + addOn.hours);
        setTimeout(function () {
          _this.setState({
            addOnTotal: Math.round(_this.state.addOnTotal + addOn.hours * ratePerHour * Math.PI)
          });
        }, 300);
        setTimeout(function () {
          _this.setTotal();
        }, 300);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "progressDecrement", function (decrBy) {
      if (_this.state.progress > 0) {
        _this.setState({
          progress: _this.state.progress - decrBy
        });
      } else {
        return;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleFinalPackage", function (servicePackage) {
      var total = 0;
      var slicedNum = 0;

      if (_this.state.finalPackage.length === 0) {
        _this.setState({
          packageTotal: servicePackage.price
        });
      } else {
        _this.setState({
          packageTotal: _this.state.total + servicePackage.price
        });
      }

      _this.setState({
        finalPackage: servicePackage
      });

      _this.progressIncrement(33.33);

      {
        servicePackage.addOns.map(function (addOn, index) {
          if (_this.state.addOns.includes(addOn)) {
            return;
          } else {
            // if (this.hasNumber(addOn)) {
            //   slicedNum = 5
            //   addOn.count = slicedNum
            // }
            _this.state.addOns.push(addOn);
          }
        });
      }
      setTimeout(function () {
        console.warn(_this.state.packageTotal);
      }, 300);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleActiveAddOns", function (packageName) {
      switch (packageName) {
        case 'webPackages':
          _this.setState({
            activeAddOns: _data_business_services_index__WEBPACK_IMPORTED_MODULE_17__["webAddOns"]
          });

          break;

        case 'mobileAppPackages':
          _this.setState({
            activeAddOns: _data_business_services_index__WEBPACK_IMPORTED_MODULE_17__["appAddOns"]
          });

          break;

        case 'scriptingPackages':
          _this.setState({
            activeAddOns: _data_business_services_index__WEBPACK_IMPORTED_MODULE_17__["scriptingAddOns"]
          });

          break;

        case 'marketingPackages':
          _this.setState({
            activeAddOns: _data_business_services_index__WEBPACK_IMPORTED_MODULE_17__["marketingAddOns"]
          });

          break;

        case 'dataPackages':
          _this.setState({
            activeAddOns: _data_business_services_index__WEBPACK_IMPORTED_MODULE_17__["dataAddOns"]
          });

          break;

        default:
          console.error('No packages Found');
      }

      setTimeout(function () {// console.log(this.state.activeAddOns);
      }, 300);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleActivePackage", function (packageName) {
      switch (packageName) {
        case 'webPackages':
          _this.setState({
            activePackage: _data_business_services_index__WEBPACK_IMPORTED_MODULE_17__["webAppPackages"]
          });

          break;

        case 'mobileAppPackages':
          _this.setState({
            activePackage: _data_business_services_index__WEBPACK_IMPORTED_MODULE_17__["mobileAppPackages"]
          });

          break;

        case 'softwareDevelopmentPackages':
          _this.setState({
            activePackage: _data_business_services_index__WEBPACK_IMPORTED_MODULE_17__["softwareDeveleopmentPackages"]
          });

          break;

        case 'seoMarketingPackages':
          _this.setState({
            activePackage: _data_business_services_index__WEBPACK_IMPORTED_MODULE_17__["seoMarketingPackages"]
          });

          break;

        default: // code block

      }

      setTimeout(function () {
        console.log(_this.state.activePackage);
      }, 300);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleModal", function (e) {
      _this.setState({
        isModalOpen: !_this.state.isModalOpen
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "sendEmail", function (e) {
      _this.handleErrors();

      if (!_this.state.errors) {
        console.log(_this.state);
        emailjs_com__WEBPACK_IMPORTED_MODULE_15___default.a.send('OniDev', 'onidev', {
          senderEmail: _this.state.email,
          senderName: _this.state.name,
          senderMessage: _this.state.message,
          senderPhoneNumber: _this.state.number,
          receiverEmail: 'tyriquedaniel14@gmail.com',
          number: 0,
          total: '10000',
          addOns: 'Everything'
        }, 'user_ra9kLqa47SSFhb4QI3Swp').then(function (result) {
          console.log(result.text);

          _this.setState({
            messageSent: true
          });

          setTimeout(function () {
            _this.setState(function (prev) {
              return _objectSpread({}, prev, {}, initstate);
            });

            console.log(_this.state);
          }, 3000);
        }, function (error) {
          console.log(error.text);
        });
      } else {
        console.log('Error');
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "setField", function (targetID, textValue) {
      console.log('Run');

      _this.setState(function () {
        return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])({}, targetID, textValue);
      });

      setTimeout(function () {
        console.log(_this.state);
      }, 300);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleErrors", function (e) {
      var error = {};

      if (!_this.state.name) {
        error.name = 'First Name field shouldn’t be empty';

        _this.setState({
          name: 'First Name field shouldn’t be empty'
        });
      }

      if (!_this.state.number) {
        error.number = 'Number field shouldn’t be empty';

        _this.setState({
          number: 'Number field shouldn’t be empty'
        });
      }

      if (!_this.state.email) {
        error.email = 'Email field shouldn’t be empty';

        _this.setState({
          email: 'Email field shouldn’t be empty'
        });
      }

      if (!_this.state.message) {
        error.message = 'Message field shouldn’t be empty';

        _this.setState({
          message: 'Message field shouldn’t be empty'
        });
      }

      if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(error).length === 0) {
        _this.setState({
          errors: false
        });
      } else {
        _this.setState({
          errors: error
        });

        return;
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(ProductProvider, [{
    key: "hasNumber",
    value: function hasNumber(myString) {
      return /\d/.test(myString);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(ProductContext.Provider, {
        value: _objectSpread({}, this.state, {
          setValue: this.setField,
          handleSubmit: this.sendEmail,
          handleModal: this.handleModal,
          handleActPackage: this.handleActivePackage,
          handleActAddOns: this.handleActiveAddOns,
          handleFinalPackage: this.handleFinalPackage,
          setBackground: this.setThemeColor,
          selectAddOn: this.selectAddOn,
          incrProgress: this.progressIncrement,
          decrProgress: this.progressDecrement,
          setTotal: this.setTotal,
          addOnIncriment: this.addOnIncriment,
          addOnDecriment: this.addOnDecriment
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 7
        }
      }, this.props.children);
    }
  }]);

  return ProductProvider;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);


var ProductConsumer = ProductContext.Consumer;


/***/ })

})
//# sourceMappingURL=index.js.04228b6af265b4437247.hot-update.js.map