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

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _extendableBuiltin(cls) {
	    function ExtendableBuiltin() {
	        var instance = Reflect.construct(cls, Array.from(arguments));
	        Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
	        return instance;
	    }

	    ExtendableBuiltin.prototype = Object.create(cls.prototype, {
	        constructor: {
	            value: cls,
	            enumerable: false,
	            writable: true,
	            configurable: true
	        }
	    });

	    if (Object.setPrototypeOf) {
	        Object.setPrototypeOf(ExtendableBuiltin, cls);
	    } else {
	        ExtendableBuiltin.__proto__ = cls;
	    }

	    return ExtendableBuiltin;
	}

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by xiaobao on 2016/12/24.
	 */
	//Class使用示例
	var Point = function () {
	    function Point(x, y) {
	        _classCallCheck(this, Point);

	        this.x = x;
	        this.y = y;
	    }

	    //类的方法定义在prototype属性上面


	    _createClass(Point, [{
	        key: 'toString',
	        value: function toString() {
	            return '(' + this.x + ', ' + this.y + ')';
	        }
	    }]);

	    return Point;
	}();

	var point = new Point(1, 2);
	console.log(point.toString()); // (1, 2)

	//类的继承

	var ColorPoint = function (_Point) {
	    _inherits(ColorPoint, _Point);

	    function ColorPoint(x, y, color) {
	        _classCallCheck(this, ColorPoint);

	        var _this = _possibleConstructorReturn(this, (ColorPoint.__proto__ || Object.getPrototypeOf(ColorPoint)).call(this, x, y));

	        _this.color = color;
	        return _this;
	    }

	    _createClass(ColorPoint, [{
	        key: 'toString',
	        value: function toString() {
	            return _get(ColorPoint.prototype.__proto__ || Object.getPrototypeOf(ColorPoint.prototype), 'toString', this).call(this) + ' ' + this.color;
	        }
	    }]);

	    return ColorPoint;
	}(Point);

	var colorPoint = new ColorPoint(1, 2, 'red');
	console.log(colorPoint.toString()); // (1, 2) red

	//Object.getPrototypeOf()
	console.log(Object.getPrototypeOf(ColorPoint) === Point); // true

	//继承原生构造函数
	//创建一个带版本的数组

	var VersionArray = function (_extendableBuiltin2) {
	    _inherits(VersionArray, _extendableBuiltin2);

	    function VersionArray() {
	        _classCallCheck(this, VersionArray);

	        var _this2 = _possibleConstructorReturn(this, (VersionArray.__proto__ || Object.getPrototypeOf(VersionArray)).call(this));

	        _this2.history = [[]];
	        return _this2;
	    }

	    _createClass(VersionArray, [{
	        key: 'commit',
	        value: function commit() {
	            this.history.push(this.slice());
	        }
	    }, {
	        key: 'revert',
	        value: function revert() {
	            this.splice.apply(this, [0, this.length].concat(_toConsumableArray(this.history[this.history.length - 1])));
	        }
	    }]);

	    return VersionArray;
	}(_extendableBuiltin(Array));

	var versionArray = new VersionArray();
	versionArray.push(1);
	versionArray.push(2);
	console.log(versionArray);
	console.log(versionArray.history);

	versionArray.commit();
	console.log(versionArray.history);

	versionArray.push(3);
	versionArray.push(4);
	console.log(versionArray);

	versionArray.revert();
	console.log(versionArray);

/***/ }
/******/ ]);