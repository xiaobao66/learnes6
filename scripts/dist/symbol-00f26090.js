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
	 * Created by xiaobao on 2016/12/12.
	 */
	//Symbol——独一无二的值
	var s1 = Symbol(),
	    s2 = Symbol('xiaobao'),
	    s22 = Symbol('xiaobao');

	console.log(s1); // Symbol()
	console.log(s2); // Symbol(xiaobao)
	console.log(s2 === s22); // false

	//作为对象属性的Symbol, 不能使用点（.）运算符
	var name = Symbol('name'),
	    me = _defineProperty({}, name, 'xiaobao');

	console.log(me[name]); // xiaobao

	//定义一组常量(消除魔术字符串)
	var logLevel = {
	    DEBUG: Symbol('debug'),
	    WARN: Symbol('warn'),
	    ERROR: Symbol('error')
	};

	console.log(logLevel);
	/*
	{
	    DEBUG:Symbol(debug)
	    ERROR:Symbol(error)
	    WARN:Symbol(warn)
	}
	*/

	//Symbol.for在全局环境中登记Symbol值
	var s3 = Symbol.for('xiaobaowei'),
	    s4 = Symbol.for('xiaobaowei');

	console.log(s3 === s4); // true

	//Symbol.keyFor返回已登记的Symbol值的描述
	var s5 = Symbol.for('hust');

	console.log(Symbol.keyFor(s5)); // hust

/***/ }
/******/ ]);