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

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * Created by xiaobao on 2016/12/20.
	 */
	//Proxy
	/*
	 创建一个代理器
	 */
	var proxy = new Proxy({}, {
	    get: function get(target, key) {
	        console.log('getting ' + key);
	        return target[key];
	    },
	    set: function set(target, key, value) {
	        console.log('setting ' + key + ' ' + value);
	        target[key] = value;
	        return true;
	    }
	});

	proxy.name = 'xiaobaowei';
	//setting name xiaobaowei

	console.log(proxy.name);
	//getting name
	//xiaobaowei

	/*
	 介绍Proxy的几种主要拦截
	 */
	//get(target, key, receiver)
	var person = {
	    name: 'xiaobaowei'
	};

	var personProxy = new Proxy(person, {
	    get: function get(target, key) {
	        if (key in target) {
	            return target[key];
	        } else {
	            throw new Error('Property ' + key + ' doesn\'t exist.');
	        }
	    }
	});

	// console.log(personProxy.name); //xiaobaowei
	// personProxy.age; //Error

	//set(target, key, value, receiver)
	var personProxy2 = new Proxy(person, {
	    set: function set(target, key, value) {
	        if (!Number.isInteger(value)) {
	            throw new TypeError('The type of ' + key + ' must be integer');
	        } else if (value > 150) {
	            throw new RangeError('The ' + key + ' is out of range');
	        } else {
	            target[key] = value;
	            return true;
	        }
	    }
	});

	personProxy2.age = 100;
	console.log(personProxy2.age); //100

	// personProxy2.age = 'young'; //TypeError
	// personProxy2.age = 200; //RangeError

	//apply(target, ctx, args)
	var sum = function sum(x, y) {
	    return x + y;
	};

	var sumProxy = new Proxy(sum, {
	    apply: function apply(target, ctx, args) {
	        return target.apply(undefined, _toConsumableArray(args)) * 2;
	    }
	});

	console.log(sumProxy(2, 3)); //10

	//has(target, key)
	var personProxy3 = new Proxy(person, {
	    has: function has(target, key) {
	        if (key[0] === '_') {
	            return false;
	        } else {
	            return key in target;
	        }
	    }
	});

	personProxy3._species = 'human';

	console.log('_species' in personProxy3); //false
	console.log('name' in personProxy3); //true

	//对for...in循环无效
	// for(let key in personProxy3) {
	//     console.log(key);
	// }

	//construct(target, args)
	var constructProxy = new Proxy(function () {}, {
	    construct: function construct(target, args) {
	        console.log('args: ' + args.join('|'));
	        return {
	            value: args.reduce(function (pre, current) {
	                return pre * current;
	            }, 1)
	        };
	    }
	});

	var obj = new constructProxy(1, 2, 3); //args: 1|2|3
	console.log(obj.value); //6

/***/ }
/******/ ]);