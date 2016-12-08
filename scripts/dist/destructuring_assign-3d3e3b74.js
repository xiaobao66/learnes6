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

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	/**
	 * Created by xiaobao on 2016/10/25.
	 */
	/*
	 * 数组的解构赋值
	 */
	var a = 1;
	var b = 2;
	var c = 3;

	console.log(a, b, c);

	var v1 = 1;
	var v2 = 2;
	var v3 = 3;

	console.log(v1, v2, v3);

	var head = 1;
	var tail = [2, 3, 4];

	console.log(head, tail);

	//设置默认值
	// let [x = 3,y = x] = []; //x = 3, y = 3
	// let [x = 3,y = x] = [1]; //x = 1, y = 1
	// let [x = 3,y = x] = [, 2]; //x = 3, y = 2

	//惰性赋值
	function fun() {
	  console.log('aaa');
	}

	var _ = 1;
	var x = _ === undefined ? fun() : _;

	console.log(x); //x = 1

	var _ref = [];
	var _ref$ = _ref[0];
	var xx = _ref$ === undefined ? fun() : _ref$; //输出aaa

	/*
	 * 对象的解构赋值
	 */

	var _x1$x = { x1: 1, x2: 2 };
	var x2 = _x1$x.x2;
	var x1 = _x1$x.x1;

	console.log(x1, x2); // x1 = 1, x2 = 2

	var _first$second = { first: 'hello', second: 'world' };
	var f = _first$second.first;
	var s = _first$second.second;

	console.log(f, s); // f = 'hello', s = 'world'

	//设置默认值
	// let {x = 3, y = x} = {}; //x = 3, y = 3
	// let {x = 3, y = x} = {x: 1}; //x = 1, y = 1
	// let {x = 3, y = x} = {y: 2};

	/*
	 * 字符串的解构赋值
	 * */
	var _hello = 'hello';

	var _hello2 = _slicedToArray(_hello, 5);

	var h1 = _hello2[0];
	var h2 = _hello2[1];
	var h3 = _hello2[2];
	var h4 = _hello2[3];
	var h5 = _hello2[4];

	console.log(h1, h2, h3, h4, h5); // h1 = 'h', h2 = 'e', h3 = 'l', h4 = 'l', h5 = 'o'

	var _hello3 = 'hello';
	var len = _hello3.length;

	console.log(len); // len = 5

	/*
	 * 函数参数的解构赋值
	 * */
	function add(_ref2) {
	  var _ref3 = _slicedToArray(_ref2, 2);

	  var x = _ref3[0];
	  var y = _ref3[1];

	  return x + y;
	}

	console.log(add([1, 2])); // 3

	//设置默认值
	function subtract() {
	  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var _ref4$x = _ref4.x;
	  var x = _ref4$x === undefined ? 3 : _ref4$x;
	  var _ref4$y = _ref4.y;
	  var y = _ref4$y === undefined ? 2 : _ref4$y;

	  return x - y;
	}

	console.log(subtract()); // 1
	console.log(subtract({})); // 1
	console.log(subtract({ x: 4 })); // 2
	console.log(subtract({ x: 3, y: 1 })); // 2

	/*
	 * 解构赋值用法
	 * */
	//交换变量值
	var a1 = 1,
	    a2 = 2;
	var _ref5 = [a2, a1];
	a1 = _ref5[0];
	a2 = _ref5[1];

	console.log(a1, a2); // a1 = 2, a2 = 1

	//函数返回多个值
	function assign() {
	  return [1, 2];
	}

	var _assign = assign();

	var _assign2 = _slicedToArray(_assign, 2);

	var b1 = _assign2[0];
	var b2 = _assign2[1];

	console.log(b1, b2); // b1 = 1, b2 = 2

	function assign2() {
	  return {
	    c1: 1,
	    c2: 2
	  };
	}

	var _assign3 = assign2();

	var c1 = _assign3.c1;
	var c2 = _assign3.c2;

	console.log(c1, c2); // c1 = 1, c2 = 2

/***/ }
/******/ ]);