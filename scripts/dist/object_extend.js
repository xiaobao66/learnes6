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

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * Created by xiaobao on 2016/10/29.
	 */
	/*
	 * 属性的简洁表示
	 * */
	var name = 'xiaobao';
	var person = {
	    name: name,
	    birth: '1994/04/22',
	    say: function say() {
	        console.log('hello ' + this.name);
	    }
	};

	person.say();

	/*
	 * 属性名表达式
	 * */
	var person2 = _defineProperty({
	    name: name
	}, 's' + 'ay', function () {
	    console.log('hello ' + this.name);
	});

	person2.say();

	/*
	 * Object.assign合并对象自身可枚举的属性，浅拷贝
	 * */
	var target = {},
	    source1 = {
	    name: 'xiaobao',
	    sex: 'male'
	},
	    source2 = {
	    birth: '1994/04/22',
	    say: function say() {
	        console.log(this.name, this.sex, this.birth);
	    }
	};

	Object.assign(target, source1, source2);
	target.say();

	/*
	 * 对象属性的遍历
	 * */
	var traverseObj = {
	    name: 'xiaobao',
	    sex: 'male',
	    birth: '1994/04/22'
	};
	//for...in
	//遍历对象自身和继承的可枚举属性（不包括Symbol属性）
	for (var key in traverseObj) {
	    console.log(key);
	}

	//Object.keys
	//遍历对象自身的可枚举属性（不包括Symbol属性）
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
	    for (var _iterator = Object.keys(traverseObj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var _key = _step.value;

	        console.log(_key);
	    }

	    //Object.getOwnPropertyNames
	    //遍历对象自身的所有属性（包括不可枚举属性、不包括Symbol属性）
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

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
	    for (var _iterator2 = Object.getOwnPropertyNames(traverseObj)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var _key2 = _step2.value;

	        console.log(_key2);
	    }

	    //Reflect.ownKeys
	    //遍历对象自身的所有属性（包括Symbol属性、不可枚举属性）
	} catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	        }
	    } finally {
	        if (_didIteratorError2) {
	            throw _iteratorError2;
	        }
	    }
	}

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
	    for (var _iterator3 = Reflect.ownKeys(traverseObj)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var _key3 = _step3.value;

	        console.log(_key3);
	    }

	    /*
	     * Object.setPrototypeOf
	     * Object.getPrototypeOf
	     * Object.create
	     * */
	} catch (err) {
	    _didIteratorError3 = true;
	    _iteratorError3 = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	        }
	    } finally {
	        if (_didIteratorError3) {
	            throw _iteratorError3;
	        }
	    }
	}

	var obj = {};
	var protoObj = {
	    x: 10
	};

	Object.setPrototypeOf(obj, protoObj);

	console.log(obj.x);

	Object.getPrototypeOf(obj).x = 8;
	console.log(obj.x);

	var obj2 = Object.create(protoObj);
	console.log(obj2.x);

/***/ }
/******/ ]);