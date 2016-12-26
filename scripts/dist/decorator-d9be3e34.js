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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _desc, _value, _class2;

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	    var desc = {};
	    Object['ke' + 'ys'](descriptor).forEach(function (key) {
	        desc[key] = descriptor[key];
	    });
	    desc.enumerable = !!desc.enumerable;
	    desc.configurable = !!desc.configurable;

	    if ('value' in desc || desc.initializer) {
	        desc.writable = true;
	    }

	    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	        return decorator(target, property, desc) || desc;
	    }, desc);

	    if (context && desc.initializer !== void 0) {
	        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	        desc.initializer = undefined;
	    }

	    if (desc.initializer === void 0) {
	        Object['define' + 'Property'](target, property, desc);
	        desc = null;
	    }

	    return desc;
	}

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by xiaobao on 2016/12/26.
	 */
	//类的修饰
	//target指代被修饰的类
	function isTestable(target) {
	    target.isTestable = true;
	}

	var TestableClass = isTestable(_class = function TestableClass() {
	    _classCallCheck(this, TestableClass);
	}) || _class;

	console.log(TestableClass.isTestable);

	//方法的修饰
	//target指代被修饰的类
	//name是要修饰的属性名
	//description是该属性的描述对象，修饰器可以返回一个新的description，也可以不返回。如果不返回，则使用原来的description
	function readOnly(target, name, description) {
	    description.writable = false;
	    return description; // 本条语句可以去掉
	}

	var ReadOnlyClass = (_class2 = function () {
	    function ReadOnlyClass() {
	        _classCallCheck(this, ReadOnlyClass);
	    }

	    _createClass(ReadOnlyClass, [{
	        key: 'log',
	        value: function log() {
	            console.log('hello world');
	        }
	    }]);

	    return ReadOnlyClass;
	}(), (_applyDecoratedDescriptor(_class2.prototype, 'log', [readOnly], Object.getOwnPropertyDescriptor(_class2.prototype, 'log'), _class2.prototype)), _class2);


	var readOnlyClass = new ReadOnlyClass();
	readOnlyClass.log();
	// readOnlyClass.__proto__.log = 'hello world'; // 报错

/***/ }
/******/ ]);