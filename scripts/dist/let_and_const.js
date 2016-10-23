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

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Created by xiaobao on 2016/10/23.
	 */
	//let
	//拥有块级作用域
	var arr1 = [];
	for (var i = 0; i < 10; i++) {
	    arr1[i] = function () {
	        console.log(i);
	    };
	}
	arr1[6](); //10

	var arr2 = [];

	var _loop = function _loop(_i) {
	    arr2[_i] = function () {
	        console.log(_i);
	    };
	};

	for (var _i = 0; _i < 10; _i++) {
	    _loop(_i);
	}
	arr2[6](); //5

	//无变量提升
	console.log(a);
	console.log(b);

	var a = 123; //undefined
	var b = 123; //报错

	//不可重复声明
	// var c = 1;
	// let c = 2; //报错

	//const
	//声明常量
	var PI = 3.1415926;
	console.log(PI);

	//拥有块级作用域
	{
	    var MAX = 5;
	}
	// console.log(MAX); //报错

	//不可重复声明
	// var c = 1;
	// const c = 2; //报错

	//彻底冻结对象函数
	var constantize = function constantize(obj) {
	    Object.freeze(obj);
	    Object.keys(obj).forEach(function (key, value) {
	        if (_typeof(obj[key]) === 'object') {
	            constantize(obj[key]);
	        }
	    });
	};

	//获取顶层对象
	var getGlobal = function getGlobal() {
	    if (typeof self !== 'undefined') {
	        return self;
	    } else if (typeof window !== 'undefined') {
	        return window;
	    } else if (typeof global !== 'undefined') {
	        return global;
	    } else {
	        throw new Error('unable to get global object');
	    }
	};

	console.log(getGlobal());
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);