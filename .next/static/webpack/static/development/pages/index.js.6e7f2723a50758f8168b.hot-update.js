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

var elementReady = __webpack_require__(/*! element-ready */ "./node_modules/element-ready/index.js");

var ScheduleConsultation = function ScheduleConsultation() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(react_calendly__WEBPACK_IMPORTED_MODULE_1__["InlineWidget"], {
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
      lineNumber: 9,
      columnNumber: 9
    }
  }));
};

/***/ }),

/***/ "./node_modules/element-ready/index.js":
/*!*********************************************!*\
  !*** ./node_modules/element-ready/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const ManyKeysMap = __webpack_require__(/*! many-keys-map */ "./node_modules/many-keys-map/index.js");
const pDefer = __webpack_require__(/*! p-defer */ "./node_modules/p-defer/index.js");

const cache = new ManyKeysMap();
const isDomReady = () => document.readyState === 'interactive' || document.readyState === 'complete';

const elementReady = (selector, {
	target = document,
	stopOnDomReady = true,
	timeout = Infinity
} = {}) => {
	const cacheKeys = [target, selector, stopOnDomReady, timeout];
	const cachedPromise = cache.get(cacheKeys);
	if (cachedPromise) {
		return cachedPromise;
	}

	let rafId;
	const deferred = pDefer();
	const {promise} = deferred;

	cache.set(cacheKeys, promise);

	const stop = () => {
		cancelAnimationFrame(rafId);
		cache.delete(cacheKeys, promise);
		deferred.resolve();
	};

	if (timeout !== Infinity) {
		setTimeout(stop, timeout);
	}

	// Interval to keep checking for it to come into the DOM.
	(function check() {
		const element = target.querySelector(selector);

		if (element) {
			deferred.resolve(element);
			stop();
		} else if (stopOnDomReady && isDomReady()) {
			stop();
		} else {
			rafId = requestAnimationFrame(check);
		}
	})();

	return Object.assign(promise, {stop});
};

module.exports = elementReady;


/***/ }),

/***/ "./node_modules/many-keys-map/index.js":
/*!*********************************************!*\
  !*** ./node_modules/many-keys-map/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const getInternalKeys = Symbol('getInternalKeys');
const getPrivateKey = Symbol('getPrivateKey');
const publicKeys = Symbol('publicKeys');
const objectHashes = Symbol('objectHashes');
const symbolHashes = Symbol('symbolHashes');
const nullKey = Symbol('null'); // `objectHashes` key for null

let keyCounter = 0;
function checkKeys(keys) {
	if (!Array.isArray(keys)) {
		throw new TypeError('The keys parameter must be an array');
	}
}

module.exports = class ManyKeysMap extends Map {
	constructor() {
		super();

		this[objectHashes] = new WeakMap();
		this[symbolHashes] = new Map(); // https://github.com/tc39/ecma262/issues/1194
		this[publicKeys] = new Map();

		// eslint-disable-next-line prefer-rest-params
		const [pairs] = arguments; // Map compat
		if (pairs === null || pairs === undefined) {
			return;
		}

		if (typeof pairs[Symbol.iterator] !== 'function') {
			throw new TypeError(typeof pairs + ' is not iterable (cannot read property Symbol(Symbol.iterator))');
		}

		for (const [keys, value] of pairs) {
			this.set(keys, value);
		}
	}

	[getInternalKeys](keys, create = false) {
		const privateKey = this[getPrivateKey](keys, create);

		let publicKey;
		if (privateKey && this[publicKeys].has(privateKey)) {
			publicKey = this[publicKeys].get(privateKey);
		} else if (create) {
			publicKey = [...keys]; // Regenerate keys array to avoid external interaction
			this[publicKeys].set(privateKey, publicKey);
		}

		return {privateKey, publicKey};
	}

	[getPrivateKey](keys, create = false) {
		const privateKeys = [];
		for (let key of keys) {
			if (key === null) {
				key = nullKey;
			}

			const hashes = typeof key === 'object' || typeof key === 'function' ? objectHashes : typeof key === 'symbol' ? symbolHashes : false;

			if (!hashes) {
				privateKeys.push(key);
			} else if (this[hashes].has(key)) {
				privateKeys.push(this[hashes].get(key));
			} else if (create) {
				const privateKey = `@@mkm-ref-${keyCounter++}@@`;
				this[hashes].set(key, privateKey);
				privateKeys.push(privateKey);
			} else {
				return false;
			}
		}

		return JSON.stringify(privateKeys);
	}

	set(keys, value) {
		checkKeys(keys);
		const {publicKey} = this[getInternalKeys](keys, true);
		return super.set(publicKey, value);
	}

	get(keys) {
		checkKeys(keys);
		const {publicKey} = this[getInternalKeys](keys);
		return super.get(publicKey);
	}

	has(keys) {
		checkKeys(keys);
		const {publicKey} = this[getInternalKeys](keys);
		return super.has(publicKey);
	}

	delete(keys) {
		checkKeys(keys);
		const {publicKey, privateKey} = this[getInternalKeys](keys);
		return Boolean(publicKey && super.delete(publicKey) && this[publicKeys].delete(privateKey));
	}

	clear() {
		super.clear();
		this[symbolHashes].clear();
		this[publicKeys].clear();
	}

	get [Symbol.toStringTag]() {
		return 'ManyKeysMap';
	}

	get size() {
		return super.size;
	}
};

if (false) {}


/***/ }),

/***/ "./node_modules/p-defer/index.js":
/*!***************************************!*\
  !*** ./node_modules/p-defer/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const pDefer = () => {
	const deferred = {};

	deferred.promise = new Promise((resolve, reject) => {
		deferred.resolve = resolve;
		deferred.reject = reject;
	});

	return deferred;
};

module.exports = pDefer;


/***/ })

})
//# sourceMappingURL=index.js.6e7f2723a50758f8168b.hot-update.js.map