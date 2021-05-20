/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/App/app.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/App/app.scss ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/AppHeader/AppHeader.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/AppHeader/AppHeader.scss ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/ChoicePanel/ChoicePanel.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/ChoicePanel/ChoicePanel.scss ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/DescriptionPanel/DescriptionPanel.scss":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/DescriptionPanel/DescriptionPanel.scss ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/GameOverScreen/GameOverScreen.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/GameOverScreen/GameOverScreen.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/LevelMap/LevelMap.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/LevelMap/LevelMap.scss ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/NextLevelBtn/NextLevelBtn.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/NextLevelBtn/NextLevelBtn.scss ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/Preview/Preview.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/Preview/Preview.scss ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!./assets/css/normalize.css":
/*!******************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-1!../node_modules/css-loader/dist/cjs.js!./assets/css/normalize.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./assets/css/normalize.css":
/*!**********************************!*\
  !*** ./assets/css/normalize.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-1!../../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!./assets/css/normalize.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./assets/data-base/data.js":
/*!**********************************!*\
  !*** ./assets/data-base/data.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var birdsData = [[{
  id: 0,
  isQuestion: true,
  title: "В полном ионном уравнении реакции Pb(NO3)2 + 2NaOH = Pb(OH)2 + 2NaNO3 сумма коэффициентов равна ...",
  description: "",
  correctAnswerId: [1]
}, {
  id: 1,
  isQuestion: false,
  title: "Вариант ответа 1",
  description: ""
}, {
  id: 2,
  isQuestion: false,
  title: "Вариант ответа 2",
  description: ""
}, {
  id: 3,
  isQuestion: false,
  title: "Вариант ответа 3",
  description: ""
}, {
  id: 4,
  isQuestion: false,
  title: "Вариант ответа 4",
  description: ""
}], [{
  id: 0,
  isQuestion: true,
  title: "Тестовый вопрос: Сколько друзей у Оушена?",
  description: "",
  correctAnswerId: [4]
}, {
  id: 1,
  isQuestion: false,
  title: "Вариант ответа 1",
  description: ""
}, {
  id: 2,
  isQuestion: false,
  title: "Вариант ответа 2",
  description: ""
}, {
  id: 3,
  isQuestion: false,
  title: "Вариант ответа 3",
  description: ""
}, {
  id: 4,
  isQuestion: false,
  title: "Вариант ответа 4",
  description: ""
}], [{
  id: 0,
  isQuestion: true,
  title: "Тестовый вопрос: кому от улыбки станет светлее?",
  description: "",
  correctAnswerId: [1]
}, {
  id: 1,
  isQuestion: false,
  title: "Вариант ответа 1",
  description: ""
}, {
  id: 2,
  isQuestion: false,
  title: "Вариант ответа 2",
  description: ""
}, {
  id: 3,
  isQuestion: false,
  title: "Вариант ответа 3",
  description: ""
}, {
  id: 4,
  isQuestion: false,
  title: "Вариант ответа 4",
  description: ""
}]];
/* harmony default export */ __webpack_exports__["default"] = (birdsData);

/***/ }),

/***/ "./js/components/App/App.jsx":
/*!***********************************!*\
  !*** ./js/components/App/App.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "../node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.scss */ "./js/components/App/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_playSound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/playSound */ "./js/modules/playSound.js");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animate.css */ "../node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AppHeader_AppHeader_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AppHeader/AppHeader.jsx */ "./js/components/AppHeader/AppHeader.jsx");
/* harmony import */ var _LevelMap_LevelMap_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LevelMap/LevelMap.jsx */ "./js/components/LevelMap/LevelMap.jsx");
/* harmony import */ var _Preview_Preview_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Preview/Preview.jsx */ "./js/components/Preview/Preview.jsx");
/* harmony import */ var _ChoicePanel_ChoicePanel_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ChoicePanel/ChoicePanel.jsx */ "./js/components/ChoicePanel/ChoicePanel.jsx");
/* harmony import */ var _DescriptionPanel_DescriptionPanel_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DescriptionPanel/DescriptionPanel.jsx */ "./js/components/DescriptionPanel/DescriptionPanel.jsx");
/* harmony import */ var _NextLevelBtn_NextLevelBtn_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../NextLevelBtn/NextLevelBtn.jsx */ "./js/components/NextLevelBtn/NextLevelBtn.jsx");
/* harmony import */ var _GameOverScreen_GameOverScreen_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../GameOverScreen/GameOverScreen.jsx */ "./js/components/GameOverScreen/GameOverScreen.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable import/extensions */













var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      currentLevel: 0,
      maxLevel: _this.props.data.length,
      hiddenFieldIndex: _this.props.data[0][0].correctAnswerId[0],
      questionId: 0,
      selectedFieldIndex: false,
      gameOver: false,
      isWin: false,
      levelScore: 5,
      totalScore: 0
    };
    return _this;
  }

  _createClass(App, [{
    key: "onWin",
    value: function onWin() {
      this.setState({
        win: true
      });
    }
  }, {
    key: "chooseField",
    value: function chooseField(id, selector) {
      this.setState(function () {
        var newActiveField = id;
        return {
          selectedFieldIndex: newActiveField
        };
      });

      if (id === this.state.hiddenFieldIndex) {
        document.querySelector(selector).classList.add('pass');
        this.setState({
          isWin: true
        });
        var points = 5 - document.querySelectorAll('.field-choice__item.failure').length;
        this.setState({
          levelScore: points
        });
      } else {
        document.querySelector(selector).classList.add('failure', 'animate__animated', 'animate__headShake');
      }
    }
  }, {
    key: "goNextLevel",
    value: function goNextLevel() {
      this.calcScore();
      var nextLevel = this.state.currentLevel + 1;
      document.querySelectorAll('.field-choice__item').forEach(function (item) {
        item.classList.remove('pass', 'failure', 'animate__animated', 'animate__headShake');
      });

      if (nextLevel > this.state.maxLevel - 1) {
        this.setState(function (_ref) {
          var gameOver = _ref.gameOver;
          return {
            gameOver: true
          };
        });
        return;
      }

      this.setState({
        currentLevel: nextLevel,
        gameOver: false,
        isWin: false,
        hiddenFieldIndex: this.props.data[nextLevel][0].correctAnswerId[0],
        levelScore: 5,
        selectedFieldIndex: false
      });
      console.log(this.props.data[nextLevel][0]);
      console.log(nextLevel + " - " + this.props.data.length);
    }
  }, {
    key: "calcScore",
    value: function calcScore() {
      if (this.state.isWin) {
        var newScore = this.state.levelScore + this.state.totalScore;
        this.setState({
          totalScore: newScore
        });
      }
    }
  }, {
    key: "restartHandler",
    value: function restartHandler() {
      Object(_modules_playSound__WEBPACK_IMPORTED_MODULE_3__["default"])('../../../assets/sounds/restart.mp3');
      this.setState({
        totalScore: 0,
        currentLevel: 0,
        gameOver: false,
        isWin: false,
        hiddenFieldIndex: this.props.data[0][0].correctAnswerId[0],
        levelScore: 5,
        selectedFieldIndex: false
      });
    }
  }, {
    key: "renderLevel",
    value: function renderLevel() {
      var _this2 = this;

      var data = this.props.data;
      var _this$state = this.state,
          currentLevel = _this$state.currentLevel,
          hiddenFieldIndex = _this$state.hiddenFieldIndex,
          isWin = _this$state.isWin,
          totalScore = _this$state.totalScore,
          selectedFieldIndex = _this$state.selectedFieldIndex;
      var levelFields = data[currentLevel];
      var hiddenField = levelFields[hiddenFieldIndex - 1];
      var activeField = levelFields[selectedFieldIndex];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "level"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_AppHeader_AppHeader_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        score: totalScore
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Preview_Preview_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        hidden: !isWin,
        data: hiddenField,
        isWin: isWin
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ChoicePanel_ChoicePanel_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        fieldsList: levelFields,
        onClick: function onClick(id, selector) {
          return _this2.chooseField(id, selector);
        },
        onWin: function onWin() {
          _this2.onWin();
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_NextLevelBtn_NextLevelBtn_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onClick: function onClick() {
          return _this2.goNextLevel();
        },
        isWin: isWin
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          gameOver = _this$state2.gameOver,
          totalScore = _this$state2.totalScore,
          isWin = _this$state2.isWin,
          maxLevel = _this$state2.maxLevel,
          levelScore = _this$state2.levelScore;
      var maxScore = maxLevel * 5;

      if (!gameOver) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "container"
        }, this.renderLevel());
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_GameOverScreen_GameOverScreen_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
        score: totalScore,
        maxScore: maxScore,
        onRestart: function onRestart() {
          return _this3.restartHandler();
        }
      });
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);



/***/ }),

/***/ "./js/components/App/app.scss":
/*!************************************!*\
  !*** ./js/components/App/app.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/App/app.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./js/components/AppHeader/AppHeader.jsx":
/*!***********************************************!*\
  !*** ./js/components/AppHeader/AppHeader.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppHeader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppHeader.scss */ "./js/components/AppHeader/AppHeader.scss");
/* harmony import */ var _AppHeader_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AppHeader_scss__WEBPACK_IMPORTED_MODULE_1__);



var AppHeader = function AppHeader(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "logo"
  }, "\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " \u0445\u0438\u043C\u0438\u0438"), " 9 \u043A\u043B\u0430\u0441\u0441"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Score:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "important-counter"
  }, ' ' + props.score)));
};

/* harmony default export */ __webpack_exports__["default"] = (AppHeader);

/***/ }),

/***/ "./js/components/AppHeader/AppHeader.scss":
/*!************************************************!*\
  !*** ./js/components/AppHeader/AppHeader.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./AppHeader.scss */ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/AppHeader/AppHeader.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./js/components/ChoicePanel/ChoicePanel.jsx":
/*!***************************************************!*\
  !*** ./js/components/ChoicePanel/ChoicePanel.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChoicePanel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChoicePanel.scss */ "./js/components/ChoicePanel/ChoicePanel.scss");
/* harmony import */ var _ChoicePanel_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ChoicePanel_scss__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable class-methods-use-this */

/* eslint-disable react/prop-types */



var ChoicePanel = /*#__PURE__*/function (_React$Component) {
  _inherits(ChoicePanel, _React$Component);

  var _super = _createSuper(ChoicePanel);

  function ChoicePanel(props) {
    var _this;

    _classCallCheck(this, ChoicePanel);

    _this = _super.call(this, props);
    _this.state = {
      points: 5
    };
    return _this;
  }

  _createClass(ChoicePanel, [{
    key: "answersRender",
    value: function answersRender(array) {
      var _this2 = this;

      var elements = array.map(function (item) {
        if (item.isQuestion) return;
        var className = 'field-choice__item';
        var selector = ".".concat(className, "#answer-").concat(item.id);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          id: "answer-".concat(item.id),
          key: item.id,
          className: className,
          onClick: function onClick() {
            return _this2.props.onClick(item.id, selector);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "button"
        }, item.title));
      });
      return elements;
    }
  }, {
    key: "render",
    value: function render() {
      var fieldsList = this.props.fieldsList;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field-card field-choice"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.answersRender(fieldsList)));
    }
  }]);

  return ChoicePanel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ChoicePanel);

/***/ }),

/***/ "./js/components/ChoicePanel/ChoicePanel.scss":
/*!****************************************************!*\
  !*** ./js/components/ChoicePanel/ChoicePanel.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./ChoicePanel.scss */ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/ChoicePanel/ChoicePanel.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./js/components/DescriptionPanel/DescriptionPanel.jsx":
/*!*************************************************************!*\
  !*** ./js/components/DescriptionPanel/DescriptionPanel.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_h5_audio_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-h5-audio-player */ "../node_modules/react-h5-audio-player/es/index.js");
/* harmony import */ var _DescriptionPanel_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DescriptionPanel.scss */ "./js/components/DescriptionPanel/DescriptionPanel.scss");
/* harmony import */ var _DescriptionPanel_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DescriptionPanel_scss__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable react/prop-types */




var renderDescription = function renderDescription(data) {
  if (data) {
    var image = data.image,
        name = data.name,
        species = data.species,
        description = data.description,
        audio = data.audio;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "field-card description-panel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "field-card__img"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: image,
      alt: name
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "field-card__body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "field-card__name"
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "field-card__subtitle field-card__name"
    }, species)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_h5_audio_player__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "field-card__audio",
      layout: "horizontal-reverse",
      autoPlay: false,
      autoPlayAfterSrcChange: false,
      src: "../../../".concat(audio),
      customControlsSection: [react_h5_audio_player__WEBPACK_IMPORTED_MODULE_1__["RHAP_UI"].MAIN_CONTROLS, react_h5_audio_player__WEBPACK_IMPORTED_MODULE_1__["RHAP_UI"].VOLUME_CONTROLS]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "field-card__description"
    }, description));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field-card description-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field-card__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "field-card__name"
  }, "\u0414\u043B\u044F \u043F\u043E\u043A\u0430\u0437\u0430 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0442\u0438\u0446\u0443")));
};

var DescriptionPanel = function DescriptionPanel(props) {
  var data = props.data;
  return renderDescription(data);
};

/* harmony default export */ __webpack_exports__["default"] = (DescriptionPanel);

/***/ }),

/***/ "./js/components/DescriptionPanel/DescriptionPanel.scss":
/*!**************************************************************!*\
  !*** ./js/components/DescriptionPanel/DescriptionPanel.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./DescriptionPanel.scss */ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/DescriptionPanel/DescriptionPanel.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./js/components/GameOverScreen/GameOverScreen.jsx":
/*!*********************************************************!*\
  !*** ./js/components/GameOverScreen/GameOverScreen.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GameOverScreen_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameOverScreen.scss */ "./js/components/GameOverScreen/GameOverScreen.scss");
/* harmony import */ var _GameOverScreen_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_GameOverScreen_scss__WEBPACK_IMPORTED_MODULE_1__);



var restartHandler = function restartHandler(condition, handler) {
  if (condition) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "game-over__restart-btn",
      onClick: function onClick() {
        return handler();
      }
    }, "\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "congrats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0412\u044B \u043D\u0430\u0431\u0440\u0430\u043B\u0438 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0431\u0430\u043B\u043B\u043E\u0432! \u041C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0445\u0432\u0430\u0441\u0442\u0430\u0442\u044C\u0441\u044F \u0437\u043D\u0430\u043A\u043E\u043C\u044B\u043C."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../../../assets/img/congrats.gif",
    alt: "",
    srcSet: ""
  }));
};

var GameOverScreen = function GameOverScreen(props) {
  var score = props.score,
      maxScore = props.maxScore,
      onRestart = props.onRestart;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-over container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-over__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u0435\u043C \u0441 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435\u043C \u0432\u0438\u043A\u0442\u043E\u0440\u0438\u043D\u044B!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-over__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "game-over__score"
  }, "\u0412\u0430\u0448 \u0441\u0447\u0451\u0442:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ' ', score, ' ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "game-over__score game-over__score_max"
  }, "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0431\u0430\u043B\u043B:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ' ', maxScore, ' ')), restartHandler(maxScore !== score, onRestart)));
};

/* harmony default export */ __webpack_exports__["default"] = (GameOverScreen);

/***/ }),

/***/ "./js/components/GameOverScreen/GameOverScreen.scss":
/*!**********************************************************!*\
  !*** ./js/components/GameOverScreen/GameOverScreen.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./GameOverScreen.scss */ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/GameOverScreen/GameOverScreen.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./js/components/LevelMap/LevelMap.jsx":
/*!*********************************************!*\
  !*** ./js/components/LevelMap/LevelMap.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LevelMap_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LevelMap.scss */ "./js/components/LevelMap/LevelMap.scss");
/* harmony import */ var _LevelMap_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LevelMap_scss__WEBPACK_IMPORTED_MODULE_1__);


var levels = ['Тестовый раунд', 'Survival', 'MMORPG', 'Shooter', 'Chill games', 'LEGENDS'];

var renderLevels = function renderLevels(data, activeIndex) {
  var levelsList = data.map(function (item, idx) {
    if (idx === activeIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "level-map__item active",
        key: "".concat(idx, "-level")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "level-map__item",
      key: "".concat(idx, "-level")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item));
  });
  return levelsList;
};

var LevelMap = function LevelMap(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "level-map"
  }, renderLevels(levels, props.currentLevel));
};

/* harmony default export */ __webpack_exports__["default"] = (LevelMap);

/***/ }),

/***/ "./js/components/LevelMap/LevelMap.scss":
/*!**********************************************!*\
  !*** ./js/components/LevelMap/LevelMap.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./LevelMap.scss */ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/LevelMap/LevelMap.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./js/components/NextLevelBtn/NextLevelBtn.jsx":
/*!*****************************************************!*\
  !*** ./js/components/NextLevelBtn/NextLevelBtn.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NextLevelBtn_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NextLevelBtn.scss */ "./js/components/NextLevelBtn/NextLevelBtn.scss");
/* harmony import */ var _NextLevelBtn_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NextLevelBtn_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_playSound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/playSound */ "./js/modules/playSound.js");




var clickHandler = function clickHandler(src, callback) {
  Object(_modules_playSound__WEBPACK_IMPORTED_MODULE_2__["default"])(src);
  callback();
};

var NextLevelBtn = function NextLevelBtn(props) {
  var isWin = props.isWin;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "next-level-btn ".concat(!isWin ? 'disabled' : ''),
    onClick: function onClick() {
      return isWin ? clickHandler('../../../assets/sounds/nextLevel.mp3', props.onClick) : '';
    }
  }, "Next level");
};

/* harmony default export */ __webpack_exports__["default"] = (NextLevelBtn);

/***/ }),

/***/ "./js/components/NextLevelBtn/NextLevelBtn.scss":
/*!******************************************************!*\
  !*** ./js/components/NextLevelBtn/NextLevelBtn.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./NextLevelBtn.scss */ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/NextLevelBtn/NextLevelBtn.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./js/components/Preview/Preview.jsx":
/*!*******************************************!*\
  !*** ./js/components/Preview/Preview.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_h5_audio_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-h5-audio-player */ "../node_modules/react-h5-audio-player/es/index.js");
/* harmony import */ var react_h5_audio_player_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-h5-audio-player/lib/styles.css */ "../node_modules/react-h5-audio-player/lib/styles.css");
/* harmony import */ var react_h5_audio_player_lib_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_h5_audio_player_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Preview_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Preview.scss */ "./js/components/Preview/Preview.scss");
/* harmony import */ var _Preview_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Preview_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable react/prop-types */





var Preview = /*#__PURE__*/function (_React$Component) {
  _inherits(Preview, _React$Component);

  var _super = _createSuper(Preview);

  function Preview(props) {
    var _this;

    _classCallCheck(this, Preview);

    _this = _super.call(this, props);
    _this.player = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = {
      win: _this.props.isWin
    };
    return _this;
  }

  _createClass(Preview, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          hidden = _this$props.hidden,
          isWin = _this$props.isWin;
      var title = data.title,
          description = data.description;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field-card "
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field-card__body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "field-card__name"
      }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "field-card__help"
      }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442")));
    }
  }]);

  return Preview;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Preview);

/***/ }),

/***/ "./js/components/Preview/Preview.scss":
/*!********************************************!*\
  !*** ./js/components/Preview/Preview.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Preview.scss */ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./js/components/Preview/Preview.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./js/modules/playSound.js":
/*!*********************************!*\
  !*** ./js/modules/playSound.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var playSound = function playSound(src) {
  var sound = new Audio();
  sound.src = src;
  sound.play();
};

/* harmony default export */ __webpack_exports__["default"] = (playSound);

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/css/normalize.css */ "./assets/css/normalize.css");
/* harmony import */ var _assets_css_normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_normalize_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_data_base_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/data-base/data */ "./assets/data-base/data.js");
/* harmony import */ var _components_App_App_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/App/App.jsx */ "./js/components/App/App.jsx");





react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_App_App_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
  data: _assets_data_base_data__WEBPACK_IMPORTED_MODULE_3__["default"]
}), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./js/script.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./js/script.js */"./js/script.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map