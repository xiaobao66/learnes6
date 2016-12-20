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

	var resultObj = new constructProxy(1, 2, 3); //args: 1|2|3
	console.log(resultObj.value); //6

	/*
	 Reflect对象
	 */
	/*
	 介绍Reflect的常用方法
	 */
	//Reflect.get(target, key, receiver)
	var school = {
	    class: 20,
	    total: 10000,
	    get average() {
	        return Math.floor(this.total / this.class);
	    }
	};

	var newSchool = {
	    class: 30,
	    total: 12000
	};

	console.log(Reflect.get(school, 'class')); //20
	console.log(Reflect.get(school, 'total')); //10000

	console.log(Reflect.get(school, 'average')); //500
	console.log(Reflect.get(school, 'average', newSchool)); //400

	//Reflect.set(target, key, value, receiver)
	var goods = {
	    total: 100,
	    set average(value) {
	        return this.amount = Math.floor(this.total / value);
	    }
	};

	var newGoods = {
	    total: 20000
	};

	console.log(goods.amount); //undefined

	Reflect.set(goods, 'average', 4);
	console.log(goods.amount); //25

	Reflect.set(goods, 'average', 40, newGoods);
	console.log(goods.amount); //25
	console.log(newGoods.amount); //500

	//Reflect.has(target, key)
	console.log(Reflect.has(goods, 'total')); // true

	//Reflect.deleteProperty(target, key)
	Reflect.deleteProperty(goods, 'amount');
	console.log(goods.amount); //undefined

	//Reflect.contruct(target, args)
	function Cat(name) {
	    this.name = name;
	}

	var cat = Reflect.construct(Cat, ['mimi']);
	console.log(cat.name); //mimi

	//Reflect.apply(func, thisArg, args)
	var numbers = [10, 12, 33, 24, 53, 11, 20];

	console.log(Reflect.apply(Math.min, Math, numbers)); //10

	//Proxy实现观察者模式
	var observerSet = new Set(),
	    observe = function observe(fn) {
	    return observerSet.add(fn);
	},
	    observable = function observable(obj) {
	    return new Proxy(obj, {
	        set: function set(target, key, value, receiver) {
	            var result = Reflect.set(target, key, value, receiver);
	            observerSet.forEach(function (observer) {
	                return observer();
	            });
	            return result;
	        }
	    });
	};

	var animal = observable({
	    name: 'LaiFu',
	    age: 8
	});

	var print = function print() {
	    console.log(animal.name + ' ' + animal.age);
	};

	observe(print);
	animal.name = 'WangCai'; //WangCai 8

/***/ }
/******/ ]);