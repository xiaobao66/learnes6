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
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _console;

	/**
	 * Created by xiaobao on 2016/10/29.
	 */
	//函数默认参数
	function say(x) {
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'xiaobao';

	    console.log(x, y);
	}

	say('hello'); // hello xiaobao
	say('hello', 'Sam'); // hello Sam
	say('hello', ''); // hello

	//函数参数是默认声明，不能用let和const再次声明
	// function f(x = 1) {
	//     let x = 2; //报错
	//     const x = 3; //报错
	// }

	//函数参数的作用域
	var x = 1;

	function f(x) {
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

	    console.log(y);
	}

	f(2); //y = 2

	function f2() {
	    var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x;
	    return function () {
	        var x = 1;
	        console.log(y);
	    }();
	}

	f2(); //y = 1

	//rest参数
	//用于获取函数多余参数
	function add(x) {
	    var sum = x;

	    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        values[_key - 1] = arguments[_key];
	    }

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var value = _step.value;

	            sum += value;
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    return sum;
	}

	console.log(add(1)); // sum = 1
	console.log(add(1, 2, 3)); // sum = 6

	//扩展运算符...
	//用于函数调用
	(_console = console).log.apply(_console, [1, 2, 3]); // 1, 2, 3

	function add2(x, y) {
	    return x + y;
	}

	console.log(add2.apply(undefined, [1, 2])); // 3

	//箭头函数=>
	var mod = function mod(x, y) {
	    return x % y;
	};

	var mod2 = function mod2(x, y) {
	    return x % y;
	};

	console.log(mod(11, 2)); // 1
	console.log(mod2(11, 2)); // 1

	var log = function log(_ref) {
	    var firstName = _ref.firstName;
	    var lastName = _ref.lastName;

	    console.log(firstName + ' ' + lastName);
	};

	log({
	    firstName: 'xiaobao',
	    lastName: 'wei'
	}); // xiaobao wei

	//箭头函数this指向函数定义时所在的对象
	function Timer() {
	    var _this = this;

	    this.s1 = 0;
	    this.s2 = 0;

	    //箭头函数
	    setInterval(function () {
	        return _this.s1++;
	    }, 1000);

	    //普通函数
	    setInterval(function () {
	        this.s2++;
	    }, 1000);
	}

	var timer = new Timer();

	setTimeout(function () {
	    return console.log('s1: ', timer.s1);
	}, 3100); // s1: 3
	setTimeout(function () {
	    return console.log('s2: ', timer.s2);
	}, 3100); // s2: 0

/***/ }
/******/ ]);