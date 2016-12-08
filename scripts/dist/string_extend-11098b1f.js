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

	/**
	 * Created by xiaobao on 2016/10/25.
	 */
	/*
	 * 字符串的Unicode表示法
	 * */
	var s1 = '\uD842\uDFB7';
	var ss1 = '\uD842\uDFB7';
	console.log(s1, ss1); // s1 = 𠮷, s2 = 𠮷

	//获取字符码点
	var s2 = '𠮷A';
	console.log(s2.codePointAt(0)); // 134071
	console.log(s2.codePointAt(1)); // 57271
	console.log(s2.codePointAt(2)); // 97

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
	    for (var _iterator = s2[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var ch = _step.value;

	        console.log(ch.codePointAt(0).toString(16));
	    }
	    // 20bb7
	    // 41

	    //检测一个字符是两字节还四字节
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

	function is32Bit(ch) {
	    if (ch.codePointAt(0) > 0xFFFF) {
	        return true;
	    } else {
	        return false;
	    }
	}

	console.log(is32Bit('𠮷')); //true
	console.log(is32Bit('A')); //false

	//将码点转换为字符
	var ch1 = String.fromCodePoint(0x20BB7),
	    ch2 = String.fromCodePoint(0x41);

	console.log(ch1, ch2); // ch1 = 𠮷, ch2 = A

	//includes,startsWith,endsWith
	var s3 = 'hello world';

	console.log(s3.includes('hello')); // true
	console.log(s3.startsWith('world', 6)); // true
	console.log(s3.endsWith('hello', 5)); // true

	//repeat
	console.log('ha'.repeat(3)); // hahaha

	//模板字符串
	var str4 = 'hello world';
	var str5 = 'hello\nworld';

	console.log(str4); // hello world
	console.log(str5);
	/*
	   hello
	   world
	*/

	var name = 'xiaobao',
	    str6 = 'hello ' + name;

	console.log(str6); // hello xiaobao

	var html = '<ul>\n<li>a</li>\n<li>b</li>\n<li>c</li>\n</ul>';

	console.log(html);

	function fun(name) {
	    return 'hello ' + name;
	}

	console.log(fun('xiaobao'));

/***/ }
/******/ ]);