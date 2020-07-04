module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "2Hsl":
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ "3OgD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackageCarousel; });
/* harmony import */ var _carousel_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oO9m");
/* harmony import */ var _carousel_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_carousel_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("99J/");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rfTw");
/* harmony import */ var _cards_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("L71G");
/* harmony import */ var _components_common_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("moLQ");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("VLDe");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







const responsive = {
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
const PackageCarousel = props => {
  const productConsumer = Object(react__WEBPACK_IMPORTED_MODULE_6__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_2__["ProductContext"]);
  return __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
    swipeable: true,
    responsive: responsive,
    showDots: false,
    infinite: true,
    ssr: false,
    dotListClass: "custom-dot-list-style",
    removeArrowOnDeviceType: ["tablet", "mobile"],
    itemClass: "carousel-item-padding-40-px"
  }, productConsumer.activePackage.map((service, index) => __jsx(_cards_card__WEBPACK_IMPORTED_MODULE_3__[/* CardComp */ "a"], {
    key: index,
    title: service.title,
    text: service.content,
    addOns: service.addOns,
    image: service.src,
    package: service
  })));
};

/***/ }),

/***/ "3gPI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPackage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carousel_packageCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3OgD");
/* harmony import */ var _common_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("moLQ");
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rfTw");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("IrP5");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const SelectPackage = () => {
  const productConsumer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_3__["ProductContext"]);
  return __jsx("div", null, __jsx("div", {
    className: "list-buttons"
  }, __jsx(_common_button__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Web App Packages',
    Clickble: () => productConsumer.handleActPackage('webPackages'),
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction"
  }, "Do Something"), ' ', __jsx(_common_button__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Mobile Application Packages',
    Clickble: () => productConsumer.handleActPackage('mobileAppPackages', false),
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction"
  }, "Cancel")), __jsx("div", {
    className: "list-buttons"
  }, __jsx(_common_button__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Software Packages',
    Clickble: () => productConsumer.handleActPackage('softwareDevelopmentPackages', false),
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction"
  }), __jsx(_common_button__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
    Class: "button-rectangular btn button2 gradient-color",
    Name: 'Marketing  Packages',
    Clickble: () => productConsumer.handleActPackage('seoMarketingPackages', false),
    iconFalse: true,
    BtnIcon: "btn-icon",
    type: "touchAction"
  })), __jsx("div", null, productConsumer.activePackage.length > 0 && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(_carousel_packageCarousel__WEBPACK_IMPORTED_MODULE_1__[/* PackageCarousel */ "a"], null))));
};

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("rfTw");


/***/ }),

/***/ "7jmN":
/***/ (function(module, exports) {



/***/ }),

/***/ "99J/":
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "I7fU":
/***/ (function(module, exports) {

module.exports = require("dom-loaded");

/***/ }),

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "L71G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _card_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7jmN");
/* harmony import */ var _card_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_card_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2Hsl");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rfTw");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const domLoaded = __webpack_require__("I7fU"); //p = props


const CardComp = props => {
  const productConsumer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_4__["ProductContext"]);
  const {
    0: loading,
    1: setloading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: imageloading,
    1: setimageloading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const handleImages = imageName => {
    packageImages.map((image, index) => {
      let packageTitle = p.title.toLowerCase();

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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    (async () => {
      await domLoaded;
      setloading(false);
    })();
  }, [loading]);
  const p = props;

  if (!loading) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
      top: true,
      onLoad: () => {
        setimageloading(false);
      },
      width: "100%",
      src: p.image,
      alt: "Card image cap",
      className: !imageloading ? '' : 'display-none'
    }), imageloading && __jsx("div", {
      className: "image-loader"
    }, ' ', __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "Triangle",
      color: "#e100ff ",
      height: 50,
      width: 50,
      timeout: 99000
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
      className: "text-center"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, p.title), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], null, p.text, __jsx("br", null), __jsx("span", {
      className: "text-center"
    }, p.addOns.map((addOn, index) => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      key: index,
      className: "badge",
      color: "primary",
      pill: true
    }, addOn))), __jsx("button", {
      onClick: () => productConsumer.handleFinalPackage(p.package)
    }, ' ', "click me", ' ')), ' '));
  } else {
    return __jsx("div", {
      className: "theme-loader"
    }, __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "Triangle",
      color: "#e100ff ",
      height: 50,
      width: 50,
      timeout: 3000
    }));
  }
};

/***/ }),

/***/ "NC1Z":
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "VLDe":
/***/ (function(module, exports) {



/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "moLQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("NC1Z");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Button(props) {
  return __jsx("button", {
    className: props.Class,
    onClick: props.Clickble
  }, __jsx("span", {
    className: `title ${props.Title ? props.Title : ''}`
  }, props.Name), props.BtnIcon && props.type == 'contact' ? __jsx("span", {
    className: props.BtnIcon
  }, !props.send ? __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["ChevronRight"], null) : __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Send"], null)) : __jsx("span", {
    className: props.BtnIcon
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Plus"], null)));
}

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "oO9m":
/***/ (function(module, exports) {



/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rfTw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "emailjs-com"
var external_emailjs_com_ = __webpack_require__("u8Nd");
var external_emailjs_com_default = /*#__PURE__*/__webpack_require__.n(external_emailjs_com_);

// EXTERNAL MODULE: ./components/selectPackage.js
var selectPackage = __webpack_require__("3gPI");

// EXTERNAL MODULE: ./data/business-services/index.js + 1 modules
var business_services = __webpack_require__("v3s1");

// CONCATENATED MODULE: ./pages/oniContext.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductProvider", function() { return oniContext_ProductProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductConsumer", function() { return ProductConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductContext", function() { return ProductContext; });







var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }



 //Function Order From earliest to latest


const ProductContext = external_react_default.a.createContext();
const ratePerHour = 50;
let initstate = {
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
  finalPackage: {},
  finalAddOns: [],
  progress: 0,
  total: 0,
  hours: 0
};

class oniContext_ProductProvider extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
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
      total: 0
    });

    _defineProperty(this, "setThemeColor", color => {
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

    _defineProperty(this, "progressIncrement", incrBy => {
      if (this.state.progress < 99.99) {
        this.setState({
          progress: this.state.progress + incrBy
        });
      } else {
        return;
      }
    });

    _defineProperty(this, "selectAddOn", addOn => {
      if (this.state.addOns.includes(addOn.title)) {
        console.warn("Found");
        this.state.addOns.pop(addOn.title);
        this.setState({
          hours: this.state.hours - addOn.hours
        });
      } else {
        this.state.addOns.push(addOn.title);
        this.setState({
          hours: this.state.hours + addOn.hours
        });
      }

      setTimeout(() => {
        console.log(this.state.addOns, this.state.hours);
      }, 300);
    });

    _defineProperty(this, "progressDecrement", decrBy => {
      if (this.state.progress > 0) {
        this.setState({
          progress: this.state.progress - decrBy
        });
      } else {
        return;
      }
    });

    _defineProperty(this, "handleFinalPackage", servicePackage => {
      this.setState({
        finalPackage: servicePackage
      });
      this.progressIncrement(33.33);
      {
        servicePackage.addOns.map((addOn, index) => {
          if (this.state.addOns.includes(addOn)) {
            return;
          } else {
            this.state.addOns.push(addOn);
          }
        });
      }
      setTimeout(() => {
        console.log(this.state.finalPackage, this.state.addOns);
      }, 300);
    });

    _defineProperty(this, "handleActiveAddOns", packageName => {
      switch (packageName) {
        case 'webPackages':
          this.setState({
            activeAddOns: business_services["h" /* webAddOns */]
          });
          break;

        case 'mobileAppPackages':
          this.setState({
            activeAddOns: business_services["a" /* appAddOns */]
          });
          break;

        case 'scriptingPackages':
          this.setState({
            activeAddOns: business_services["e" /* scriptingAddOns */]
          });
          break;

        case 'marketingPackages':
          this.setState({
            activeAddOns: business_services["c" /* marketingAddOns */]
          });
          break;

        case 'dataPackages':
          this.setState({
            activeAddOns: business_services["b" /* dataAddOns */]
          });
          break;

        default:
          console.error('No packages Found');
      }

      setTimeout(() => {
        console.log(this.state.activeAddOns);
      }, 300);
    });

    _defineProperty(this, "handleActivePackage", packageName => {
      switch (packageName) {
        case 'webPackages':
          this.setState({
            activePackage: business_services["i" /* webAppPackages */]
          });
          break;

        case 'mobileAppPackages':
          this.setState({
            activePackage: business_services["d" /* mobileAppPackages */]
          });
          break;

        case 'softwareDevelopmentPackages':
          this.setState({
            activePackage: business_services["g" /* softwareDeveleopmentPackages */]
          });
          break;

        case 'seoMarketingPackages':
          this.setState({
            activePackage: business_services["f" /* seoMarketingPackages */]
          });
          break;

        default: // code block

      }

      setTimeout(() => {
        console.log(this.state.activePackage);
      }, 300);
    });

    _defineProperty(this, "handleModal", e => {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    });

    _defineProperty(this, "sendEmail", e => {
      this.handleErrors();

      if (!this.state.errors) {
        console.log(this.state);
        external_emailjs_com_default.a.send('OniDev', 'onidev', {
          senderEmail: this.state.email,
          senderName: this.state.name,
          senderMessage: this.state.message,
          senderPhoneNumber: this.state.number,
          receiverEmail: 'tyriquedaniel14@gmail.com',
          number: 0,
          total: '10000',
          addOns: 'Everything'
        }, 'user_ra9kLqa47SSFhb4QI3Swp').then(result => {
          console.log(result.text);
          this.setState({
            messageSent: true
          });
          setTimeout(() => {
            this.setState(prev => _objectSpread({}, prev, {}, initstate));
            console.log(this.state);
          }, 3000);
        }, error => {
          console.log(error.text);
        });
      } else {
        console.log('Error');
      }
    });

    _defineProperty(this, "setField", (targetID, textValue) => {
      console.log('Run');
      this.setState(() => {
        return {
          [targetID]: textValue
        };
      });
      setTimeout(() => {
        console.log(this.state);
      }, 300);
    });

    _defineProperty(this, "handleErrors", e => {
      const error = {};

      if (!this.state.name) {
        error.name = 'First Name field shouldn’t be empty';
        this.setState({
          name: 'First Name field shouldn’t be empty'
        });
      }

      if (!this.state.number) {
        error.number = 'Number field shouldn’t be empty';
        this.setState({
          number: 'Number field shouldn’t be empty'
        });
      }

      if (!this.state.email) {
        error.email = 'Email field shouldn’t be empty';
        this.setState({
          email: 'Email field shouldn’t be empty'
        });
      }

      if (!this.state.message) {
        error.message = 'Message field shouldn’t be empty';
        this.setState({
          message: 'Message field shouldn’t be empty'
        });
      }

      if (keys_default()(error).length === 0) {
        this.setState({
          errors: false
        });
      } else {
        this.setState({
          errors: error
        });
        return;
      }
    });
  }

  render() {
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
        decrProgress: this.progressDecrement
      })
    }, this.props.children);
  }

}

const ProductConsumer = ProductContext.Consumer;


/***/ }),

/***/ "u8Nd":
/***/ (function(module, exports) {

module.exports = require("emailjs-com");

/***/ }),

/***/ "v3s1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./data/image_source.js
const startUp = "https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const establishedBusiness = 'https://cdn.stocksnap.io/img-thumbs/960w/conference-room_KQNZJCQYZY.jpg';
const launchBusiness = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1302&q=80';
const landingPage = 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=786&q=80';
const ecommercePage = 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80';
// CONCATENATED MODULE: ./data/business-services/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return webAppPackages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return mobileAppPackages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return softwareDeveleopmentPackages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return seoMarketingPackages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return webAddOns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appAddOns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dataAddOns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return scriptingAddOns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return marketingAddOns; });

const webAppPackages = [{
  id: 1,
  title: 'Start Up Business Website Development',
  addOns: ['Mobile Optimized', '(3) maximum pages', 'Built with latest technologies', 'Custom Design', '', '(3)Standard Changes', 'Free Uncopyrighten Images', 'Standard SEO'],
  content: 'Get Started With Our Most Cost Efficient Web Package',
  src: startUp,
  alt: "Start Up"
}, {
  id: 2,
  title: 'Established Business Website Development',
  addOns: ['Mobile Optimized', '7 Maximum Pages', 'Built with latest technologies', 'Custom Design', 'News Letters Signup', '(5-7)Standard Changes', 'Free Uncopyrighten Images', '(2) Months Customized  SEO', '3 Free  Adverts', 'Customer Contact Automation', 'Customer Scheduling Automation', 'Auto Lead Generation'],
  content: 'Start Boosting Your Sales and Leads With Our Established Business Package',
  src: establishedBusiness,
  alt: "Established Business"
}, {
  id: 3,
  title: 'Full Launch Business Website Development',
  addOns: ['Mobile Optimized', 'Unl Maximum Pages', 'Built with latest technologies', 'Custom Design', 'News Letters Signup', '(1)Premium Customer Support', 'Free Uncopyrighten Images', '(6) Months Premium Customized  SEO', '10 Free  Adverts', 'Customer Contact Automation', 'Customer Scheduling Automation', 'Landing Page', 'Auto Lead Generation', 'Team Administrative Dashboard', 'Custom Graphics', 'Personal Web Content Writer', 'Personal Marketing Agent'],
  content: 'Reach Your Companies Full Potential with Our Full Launch Package',
  src: launchBusiness,
  alt: 'Launch Business'
}, {
  id: 4,
  title: 'Landing Web Page Package',
  addOns: ['Mobile Optimized', '(1) maximum pages', 'Built with latest technologies', 'Custom Design', 'NewsLetters', '(3)Standard Changes', 'Free Uncopyrighten Images', '(1) month Custom SEO', '5 Free Adverts', 'Auto Lead Generation'],
  content: 'Help Capture Leads and Sales Directly From Advertisments',
  src: landingPage,
  alt: 'Landing Page'
}, {
  id: 5,
  title: 'Ecommerce Webb App',
  addOns: ['Mobile Optimized', 'Unlimited maximum pages', 'Built with latest technologies', 'Custom Design', 'Customer order tracking', '(3)Standard Changes', 'Free Uncopyrighten Images', '(6) Months Integrated  SEO', 'Administration Panel', 'Customer Contact Automation', 'One Click Payment System', 'Fully Automatable', 'Customer Service Integratable'],
  content: 'Let us take your business to the next level, with a lightning fast interactive website. We can build your website from scratch with the same technology that Facebook uses, or through a third party service like squarspace.',
  src: ecommercePage,
  alt: 'Ecommerce Page'
}];
const mobileAppPackages = [{
  id: 1,
  title: 'Premium Business Integrtation Mobile Application',
  addOns: ['Android/IOS', 'Business ideology integration', 'Premium Customer Service', 'Custom Design', 'Custom Functionality', '(3)Standard Changes', 'Custom Uncopyrighten Images', '(6) months of SEO'],
  content: 'Let us take your business to the next level, with a lightning fast interactive website. We can build your website from scratch with the same technology that Facebook uses, or through a third party service like squarspace.'
}, {
  id: 2,
  title: 'Premium Ecommerce Mobile Application',
  addOns: ['Android/IOS', 'Business ideology integration', 'Premium Customer Service', 'Custom Design', 'Custom Functionality', '(3)Standard Changes', 'Free Uncopyrighten Images', '(6) months of SEO', 'Administration Panel', 'Customer Contact Automation', 'One Click Payment System', 'Fully Automatable', 'Customer Service Integratable'],
  content: 'Let us take your business to the next level, with a lightning fast interactive website. We can build your website from scratch with the same technology that Facebook uses, or through a third party service like squarspace.'
}];
const softwareDeveleopmentPackages = [{
  id: 1,
  title: 'Data Gather Software Package',
  addOns: ['Data Scraping - Custom Web/App Integration', 'Premium Oni Customer Service', ' ___Customized Data Targets', 'Custom Data Functionality', '(3)Standard Changes'],
  content: 'Let us take your business to the next level, with a lightning fast interactive website. We can build your website from scratch with the same technology that Facebook uses, or through a third party service like squarspace.'
},, {
  id: 2,
  title: 'Scripting Software Package',
  addOns: ['Task Automation', 'Custom Bot Goals', 'Premium Customer Service', 'Customized Targeting', 'Custom Functionality', '(3)Standard Changes'],
  content: 'Let us take your business to the next level, with a lightning fast interactive website. We can build your website from scratch with the same technology that Facebook uses, or through a third party service like squarspace.'
}];
const seoMarketingPackages = [{
  id: 1,
  title: 'Basic Business Marketing',
  addOns: ['(5) Adverts', '(1) Month Premium SEO', 'Custom Content Writing', '(1) Month Web Hosting'],
  content: 'Let us take your business to the next level, with a lightning fast interactive website. We can build your website from scratch with the same technology that Facebook uses, or through a third party service like squarspace.'
},, {
  id: 2,
  title: 'Intermediate Package Marketing',
  addOns: ['(10) Adverts', '(3) Months Premium SEO', '(3) Months Web Hosting', 'Custom Content Writing', 'Premium Customer Service', 'Landing Page', 'Customized Targeting', 'Custom Functionality', 'Auto Lead Generation', 'Easy Lead Contact'],
  content: 'Let us take your business to the next level, with a lightning fast interactive website. We can build your website from scratch with the same technology that Facebook uses, or through a third party service like squarspace.'
}, {
  id: 3,
  title: 'Premium Marketing Package',
  addOns: ['(20) Adverts', '(6) Months Premium SEO', '(6) Months Web Hosting', 'Custom Content Writing', 'Premium Customer Service', '(3)Landing Pages', 'Customized Targeting', 'Custom Functionality', 'Auto Lead Generation', 'Administrative Dashboard', 'Easy Lead Contact', 'Weekly Progress Update'],
  content: 'Let us take your business to the next level, with a lightning fast interactive website. We can build your website from scratch with the same technology that Facebook uses, or through a third party service like squarspace.'
},,];
const webAddOns = [{
  id: 1,
  title: 'Mobile Optimized',
  hours: 2
}, {
  id: 2,
  title: 'Built with latest technologies',
  hours: 2
}, {
  id: 3,
  title: 'Custom Design',
  hours: 10
}, {
  id: 4,
  title: 'Custom Functionality',
  hours: 5
}, {
  id: 5,
  title: 'News Letters Signup',
  hours: 2
}, {
  id: 6,
  title: 'Contact Form',
  hours: 5
}, {
  id: 7,
  title: 'Customer Scheduling Automation',
  hours: 10
}, {
  id: 8,
  title: ' Team Administrative Dashboard',
  hours: 20
}, {
  id: 9,
  title: 'Customer Conatact Automation',
  hours: 20
}, {
  id: 10,
  title: 'Customer Conatact Integration',
  hours: 20
}, {
  id: 11,
  title: 'One Click Purchase Option',
  hours: 20
}, {
  id: 12,
  title: '6 Month payment plan option',
  hours: 20
}, {
  id: 13,
  title: '__Changes',
  hours: 2
}, {
  id: 14,
  title: '__Custom Graphics',
  hours: 5
}, {
  id: 15,
  title: '__Pages',
  hours: 10
}, {
  id: 16,
  title: '__Adverts',
  hours: 3
}, {
  id: 17,
  title: '__Month of SEO',
  hours: 30
}, {
  id: 18,
  title: '__Months of Web-Hosting',
  hours: 1
}];
const appAddOns = [{
  id: 1,
  title: 'Built with latest technologies',
  hours: 2
}, {
  id: 2,
  title: 'Custom Design',
  hours: 10
}, {
  id: 3,
  title: 'Custom Functionality',
  hours: 5
}, {
  id: 4,
  title: 'News Letters Signup',
  hours: 2
}, {
  id: 5,
  title: 'Contact Us',
  hours: 5
}, {
  id: 6,
  title: 'Customer Scheduling Automation',
  hours: 10
}, {
  id: 7,
  title: ' Team Administrative Dashboard',
  hours: 20
}, {
  id: 8,
  title: 'Customer Conatact Automation',
  hours: 20
}, {
  id: 9,
  title: 'Customer Conatact Integration',
  hours: 20
}, {
  id: 10,
  title: 'One Click Purchase Option',
  hours: 20
}, {
  id: 11,
  title: '6 Month payment plan option',
  hours: 20
}, {
  id: 12,
  title: '__Changes',
  hours: 2
}, {
  id: 13,
  title: '__Custom Graphics',
  hours: 5
}, {
  id: 14,
  title: '__Pages',
  hours: 10
}, {
  id: 15,
  title: '__Adverts',
  hours: 3
}, {
  id: 16,
  title: '__Month of SEO',
  hours: 30
}, {
  id: 17,
  title: '__Months of Web-Hosting',
  hours: 1
}];
const dataAddOns = [{
  id: 1,
  title: 'Data Scraping - Custom Web/App Integration',
  hours: 60
}, {
  id: 3,
  title: '__Custom Data Targets',
  hours: 10
}, {
  id: 4,
  title: '__Months Of Server Hosting',
  hours: 2
}];
const scriptingAddOns = [{
  id: 1,
  title: 'Task Automation - Custom Web/App Integration',
  hours: 60
}, {
  id: 2,
  title: '__Number of tasks (Each task is 3 steps)',
  hours: 10
}, {
  id: 3,
  title: 'Custom Data Integration',
  hours: 60
}, {
  id: 5,
  title: '__Months Of Server Hosting',
  hours: 2
}, {
  id: 6,
  title: 'Data Scraping - Custom Web/App Integration',
  hours: 60
}, {
  id: 7,
  title: '__Custom Data Targets',
  hours: 10
}];
const marketingAddOns = [{
  id: 1,
  title: '__Months of Premium SEO(Search Engine Optimization)',
  hours: 25
}, {
  id: 2,
  title: '__Pages Of Content Writing',
  hours: 10
}, {
  id: 3,
  title: '_ Months of Google Analytics Ads',
  hours: 50
}, {
  id: 4,
  title: '_ Months of Social  Media Ads',
  hours: 2
}, {
  id: 5,
  title: 'Auto Lead Generator',
  hours: 10
}, {
  id: 6,
  title: '__Hours Of Brand and Business Development',
  hours: 42
}, {
  id: 7,
  title: '__Months Of Social Media Strategy',
  hours: 42
}, {
  id: 7,
  title: ' Introductory Branding Suite',
  hours: 36
}, {
  id: 8,
  title: 'Making Some Impressions Branding Suite',
  hours: 44
}, {
  id: 9,
  title: 'Established - Branding Suite',
  hours: 70
}];

/***/ })

/******/ });