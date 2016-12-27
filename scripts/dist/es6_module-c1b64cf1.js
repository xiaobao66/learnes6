/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _profile = __webpack_require__(302);

	var me = _interopRequireWildcard(_profile);

	var me2 = _interopRequireWildcard(_profile);

	var _profilePlus = __webpack_require__(303);

	var mePlus = _interopRequireWildcard(_profilePlus);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	console.log(_profile.firstName, _profile.lastName, _profile.year); // xiaobao wei 1994
	/**
	 * Created by xiaobao on 2016/12/27.
	 */
	//import逐一加载
	console.log((0, _profile.say)()); // xiaobao wei was born in 1994

	//import整体加载

	console.log(me.say()); // xiaobao wei was born in 1994

	//import加载默认输出

	(0, me2.default)(); // hello xiaobao wei

	//import同时加载默认输出和正常输出

	(0, me2.default)(); // hello xiaobao wei
	console.log(me2.say()); // xiaobao wei was born in 1994

	//import加载继承的模块

	console.log(mePlus.say() + ', ' + (0, mePlus.default)());

/***/ },

/***/ 302:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    console.log('hello ' + firstName + ' ' + lastName);
	};

	/**
	 * Created by xiaobao on 2016/12/27.
	 */
	//export命令
	var firstName = 'xiaobao',
	    lastName = 'wei',
	    year = 1994;

	function say() {
	    return firstName + ' ' + lastName + ' was born in ' + year;
	}

	exports.firstName = firstName;
	exports.lastName = lastName;
	exports.year = year;
	exports.say = say;

	//export default命令

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _profile = __webpack_require__(302);

	Object.keys(_profile).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _profile[key];
	    }
	  });
	});

	exports.default = function () {
	  return species;
	};

	var species = exports.species = 'human'; /**
	                                          * Created by xiaobao on 2016/12/27.
	                                          */
	//模块间的继承

/***/ }

/******/ });