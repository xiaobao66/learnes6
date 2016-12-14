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

	"use strict";

	var _console, _console2, _console3;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * Created by xiaobao on 2016/12/14.
	 */
	//Set
	//创建一个Set
	var set = new Set();
	set.add(1);
	set.add(2);
	set.add(3);
	set.add(3);

	var set2 = new Set([1, 2, 3, 3]);

	console.log([].concat(_toConsumableArray(set))); // [1, 2, 3]
	console.log([].concat(_toConsumableArray(set2))); // [1, 2, 3]

	//Set实例的属性和方法
	//size属性
	var set3 = new Set([1, 2, 3, 4, 5]);
	console.log(set3.size); // 5

	//操作方法
	set3.add(6);
	console.log([].concat(_toConsumableArray(set3))); // [1, 2, 3, 4, 5, 6]

	console.log(set3.has(6)); // true

	set3.delete(6);
	console.log(set3.has(6)); // false

	//去除数组重复元素的方法
	function removeDuplicateElements(array) {
	    return Array.from(new Set(array));
	}

	function removeDuplicateElements2(array) {
	    return [].concat(_toConsumableArray(new Set(array)));
	}

	var arr = [1, 2, 3, 3, 4, 4, 4];
	console.log(removeDuplicateElements(arr)); // [1, 2, 3, 4]
	console.log(removeDuplicateElements2(arr)); // [1, 2, 3, 4]

	//遍历方法
	//keys()
	var set4 = new Set([1, 2, 3, 4]);
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
	    for (var _iterator = set4.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var _item = _step.value;

	        console.log(_item);
	    }
	    /*
	     1
	     2
	     3
	     4
	     */

	    //values()
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
	    for (var _iterator2 = set4.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var _item2 = _step2.value;

	        console.log(_item2);
	    }
	    /*
	     1
	     2
	     3
	     4
	     */

	    //entries()
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
	    for (var _iterator3 = set4.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var _item3 = _step3.value;

	        console.log(_item3);
	    }
	    /*
	     [1, 1]
	     [2, 2]
	     [3, 3]
	     [4, 4]
	     */

	    //forEach
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

	set4.forEach(function (value, key) {
	    return console.log(value * 2);
	});
	/*
	 2
	 4
	 6
	 8
	 */

	//Set实现并集
	var a = new Set([1, 2, 3]),
	    b = new Set([2, 3, 4]);

	var union = new Set([].concat(_toConsumableArray(a), _toConsumableArray(b)));
	(_console = console).log.apply(_console, _toConsumableArray(union)); // 1 2 3 4

	//Set实现交集
	var intersect = new Set([].concat(_toConsumableArray(a)).filter(function (value, key) {
	    return b.has(value);
	}));
	(_console2 = console).log.apply(_console2, _toConsumableArray(intersect)); // 2 3

	//Set实现差集
	var difference = new Set([].concat(_toConsumableArray(a)).filter(function (value, key) {
	    return !b.has(value);
	}));
	(_console3 = console).log.apply(_console3, _toConsumableArray(difference)); // 1

	//WeakSet
	//成员只能是对象
	//具有iterator接口的对象都可以作为WeakSet的参数
	var weakSet = new WeakSet([[1, 2], [3, 4]]);

	//操作方法
	var item = {};
	weakSet.add(item);
	console.log(weakSet.has(item)); // true

	weakSet.delete(item);
	console.log(weakSet.has(item)); // false

/***/ }
/******/ ]);