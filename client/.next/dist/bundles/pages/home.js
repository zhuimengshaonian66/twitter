module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Avatar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gravatar_url__ = __webpack_require__("gravatar-url");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gravatar_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_gravatar_url__);
var _jsxFileName = "/home/tsinghua-yincheng/\u684C\u9762/twitter/client/components/Avatar.js";





var DefaultAvatar = function DefaultAvatar(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", props, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", null, "avatar"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M15.5 31C24.031 31 31 24.074 31 15.5S24.031 0 15.5 0C6.969 0 0 6.969 0 15.5 0 24.031 6.969 31 15.5 31zm-9.376-5.406c2.534-3.168 5.87-4.9 9.376-4.9 3.505 0 6.842 1.732 9.376 4.9a13.705 13.705 0 0 1-9.376 3.674 13.705 13.705 0 0 1-9.376-3.674zM15.5 1.689c7.602 0 13.81 6.209 13.81 13.811 0 3.379-1.224 6.462-3.251 8.87-2.872-3.464-6.589-5.365-10.559-5.365-3.97 0-7.687 1.901-10.559 5.364C2.914 21.962 1.69 18.88 1.69 15.5 1.69 7.898 7.898 1.69 15.5 1.69zm0 15.205c3.294 0 5.997-2.703 5.997-5.998 0-3.294-2.703-5.997-5.997-5.997s-5.997 2.703-5.997 5.997c0 3.295 2.703 5.998 5.997 5.998zm0-10.305c2.365 0 4.308 1.942 4.308 4.307 0 2.366-1.943 4.308-4.308 4.308-2.365 0-4.308-1.942-4.308-4.308 0-2.365 1.943-4.307 4.308-4.307z",
    fill: "#6B6B8E",
    fillRule: "nonzero"
  }));
};

DefaultAvatar.defaultProps = {
  width: "31",
  height: "31",
  viewBox: "0 0 31 31",
  xmlns: "http://www.w3.org/2000/svg"
};
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var email = _ref.email,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 32 : _ref$size;
  var url;

  if (email) {
    url = __WEBPACK_IMPORTED_MODULE_2_gravatar_url___default()(email, {
      size: size * 2
    });
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2966813976", [size, size]]]) + " " + "avatar"
  }, url ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2966813976", [size, size]]])
  }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(DefaultAvatar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2966813976",
    css: ".avatar.__jsx-style-dynamic-selector{display:inline-block;vertical-align:middle;width:".concat(size, "px;height:").concat(size, "px;}.avatar.__jsx-style-dynamic-selector svg{width:100%;height:100%;}.avatar.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;height:100%;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jb21wb25lbnRzL0F2YXRhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmtCLEFBR2dDLEFBTVYsQUFJQSxXQUhDLEFBSUEsVUFWVSxFQU94QixBQUlvQixrQkFDcEIsRUFYdUMscUNBQ0Msc0NBQ3hDIiwiZmlsZSI6ImNsaWVudC9jb21wb25lbnRzL0F2YXRhci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90c2luZ2h1YS15aW5jaGVuZy/moYzpnaIvdHdpdHRlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncmF2YXRhclVybCBmcm9tICdncmF2YXRhci11cmwnXG5cbmltcG9ydCBEZWZhdWx0QXZhdGFyIGZyb20gJy4uL2ljb25zL2F2YXRhci5zdmcnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGVtYWlsLCBzaXplID0gMzIgfSkgPT4ge1xuICBsZXQgdXJsXG5cbiAgaWYgKGVtYWlsKSB7XG4gICAgdXJsID0gZ3JhdmF0YXJVcmwoZW1haWwsIHtcbiAgICAgIHNpemU6IHNpemUgKiAyLFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XG4gICAgICB7dXJsXG4gICAgICAgID8gPGltZyBzcmM9e3VybH0gLz5cbiAgICAgICAgOiA8RGVmYXVsdEF2YXRhciAvPlxuICAgICAgfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIHdpZHRoOiAke3NpemV9cHg7XG4gICAgICAgICAgaGVpZ2h0OiAke3NpemV9cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmF2YXRhciA6Z2xvYmFsKHN2Zykge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuYXZhdGFyIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=client/components/Avatar.js */"),
    dynamic: [size, size]
  }));
});

/***/ }),

/***/ "./components/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/tsinghua-yincheng/\u684C\u9762/twitter/client/components/Button.js";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      style = _ref.style,
      onClick = _ref.onClick,
      disabled = _ref.disabled;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    style: style,
    disabled: disabled,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-15407640"
  }, children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "15407640",
    css: "button.jsx-15407640{background-color:#EEEBF5;border:none;border-radius:22px;font-size:16px;font-weight:500;color:#6B6B8E;padding:13px 28px;text-align:center;cursor:pointer;}button.jsx-15407640:focus{outline:none;}button[disabled].jsx-15407640{opacity:0.5;cursor:not-allowed;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jb21wb25lbnRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRZ0IsQUFHa0MsQUFXWixBQUdELFlBQ08sQ0FIckIsWUFYYyxNQWVkLE1BZHFCLG1CQUNKLGVBQ0MsZ0JBQ0YsY0FDSSxrQkFDQSxrQkFDSCxlQUNqQiIsImZpbGUiOiJjbGllbnQvY29tcG9uZW50cy9CdXR0b24uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHNpbmdodWEteWluY2hlbmcv5qGM6Z2iL3R3aXR0ZXIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgc3R5bGUsIG9uQ2xpY2ssIGRpc2FibGVkIH0pID0+IChcbiAgPGJ1dHRvblxuICAgIHN0eWxlPXtzdHlsZX1cbiAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgb25DbGljaz17b25DbGlja31cbiAgPlxuICAgIHtjaGlsZHJlbn1cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVCRjU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogIzZCNkI4RTtcbiAgICAgICAgcGFkZGluZzogMTNweCAyOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG4gICAgICBidXR0b25bZGlzYWJsZWRdIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9idXR0b24+XG4pXG4iXX0= */\n/*@ sourceURL=client/components/Button.js */"
  }));
});

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__web3_users__ = __webpack_require__("./web3/users.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Nav__ = __webpack_require__("./components/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Modal__ = __webpack_require__("./components/Modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TweetComposer__ = __webpack_require__("./components/TweetComposer.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var _jsxFileName = "/home/tsinghua-yincheng/\u684C\u9762/twitter/client/components/Header.js";



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Logotype = function Logotype(props) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("svg", props, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("title", null, "logotype"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("path", {
    d: "M37.135 8.517C33.412 3.358 27.348 0 20.5 0 9.178 0 0 9.178 0 20.5S9.178 41 20.5 41c10.167 0 18.605-7.401 20.22-17.11a53.674 53.674 0 0 0 6.269-3.884c2.632-1.903 4.958-3.988 6.978-6.255a49.096 49.096 0 0 1-6.019.888c-1.905.154-3.56.154-4.962 0 1.729-.934 3.217-2.098 4.463-3.49 1.247-1.392 2.39-3.166 3.429-5.321a31.172 31.172 0 0 1-7.018 2.155c-2.08.375-4.322.553-6.725.534z",
    fill: "#A197F2"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("path", {
    d: "M76.751 12.261l4.185-.648-1.026 4.185h4.482l-.81 3.294h-4.455l-1.188 4.968a6.567 6.567 0 0 0-.202 1.161c-.028.36.017.67.135.931.117.262.319.464.607.608.288.144.684.216 1.188.216.432 0 .85-.04 1.255-.121a9.279 9.279 0 0 0 1.229-.338l.297 3.078a14.46 14.46 0 0 1-1.755.513c-.63.144-1.377.216-2.241.216-1.242 0-2.205-.184-2.889-.554-.684-.369-1.17-.872-1.458-1.511-.288-.64-.414-1.373-.378-2.201.036-.828.162-1.701.378-2.619l2.646-11.178zm18.765 9.423c-.342.738-.724 1.49-1.148 2.255a66.48 66.48 0 0 1-1.295 2.24c-.442.73-.869 1.422-1.283 2.08A230.84 230.84 0 0 1 90.683 30h-3.132a65.282 65.282 0 0 1-.445-2.7 125.18 125.18 0 0 1-.837-7.33 90.226 90.226 0 0 1-.257-4.172h3.942c0 .648.005 1.35.014 2.106.008.756.026 1.539.053 2.349.028.81.068 1.638.122 2.484.054.846.126 1.683.216 2.511.45-.756.895-1.543 1.337-2.363.44-.819.863-1.637 1.269-2.457a63.477 63.477 0 0 0 2.065-4.63h3.348c0 1.296.022 2.745.067 4.347a71.63 71.63 0 0 0 .338 5.103c.486-.81.936-1.642 1.35-2.498a55.504 55.504 0 0 0 2.093-4.9c.279-.756.526-1.44.742-2.052h4.266c-.36.9-.787 1.912-1.282 3.037a59.582 59.582 0 0 1-1.715 3.551 56.57 56.57 0 0 1-2.187 3.807A40.808 40.808 0 0 1 99.35 30h-3.132a65.27 65.27 0 0 1-.486-4.239 76.28 76.28 0 0 1-.216-4.077zm11.988 2.754a9.46 9.46 0 0 1 .608-3.348 9.178 9.178 0 0 1 1.714-2.875 8.497 8.497 0 0 1 2.687-2.026c1.053-.513 2.218-.769 3.496-.769.63 0 1.215.09 1.755.27.54.18 1.012.441 1.418.783.405.342.72.76.944 1.256.226.495.338 1.057.338 1.687 0 1.008-.225 1.863-.675 2.565-.45.702-1.075 1.273-1.877 1.714-.8.442-1.75.761-2.848.959a20.268 20.268 0 0 1-3.591.297c.126.756.4 1.291.823 1.607.424.315 1.094.472 2.012.472.576 0 1.161-.05 1.755-.149a8.778 8.778 0 0 0 1.674-.445l.297 3.159c-.504.198-1.147.378-1.93.54-.784.162-1.634.243-2.552.243-1.116 0-2.056-.157-2.822-.473-.765-.315-1.385-.742-1.862-1.282a4.975 4.975 0 0 1-1.04-1.89 7.947 7.947 0 0 1-.324-2.295zm7.857-5.832c-.918 0-1.723.328-2.416.985-.694.658-1.148 1.526-1.364 2.606 1.116-.036 2.016-.13 2.7-.284.684-.153 1.215-.337 1.593-.553.378-.216.63-.45.756-.702.126-.252.189-.504.189-.756 0-.864-.486-1.296-1.458-1.296zm6.453 5.832a9.46 9.46 0 0 1 .608-3.348 9.178 9.178 0 0 1 1.714-2.875 8.497 8.497 0 0 1 2.687-2.026c1.053-.513 2.218-.769 3.496-.769.63 0 1.215.09 1.755.27.54.18 1.012.441 1.417.783.406.342.72.76.945 1.256.226.495.338 1.057.338 1.687 0 1.008-.225 1.863-.675 2.565-.45.702-1.075 1.273-1.876 1.714-.802.442-1.751.761-2.849.959a20.268 20.268 0 0 1-3.591.297c.126.756.4 1.291.823 1.607.424.315 1.094.472 2.012.472.576 0 1.161-.05 1.755-.149a8.778 8.778 0 0 0 1.674-.445l.297 3.159c-.504.198-1.147.378-1.93.54-.784.162-1.634.243-2.552.243-1.116 0-2.056-.157-2.822-.473-.765-.315-1.385-.742-1.863-1.282a4.975 4.975 0 0 1-1.039-1.89 7.947 7.947 0 0 1-.324-2.295zm7.857-5.832c-.918 0-1.723.328-2.416.985-.694.658-1.148 1.526-1.364 2.606 1.116-.036 2.016-.13 2.7-.284.684-.153 1.215-.337 1.593-.553.378-.216.63-.45.756-.702.126-.252.189-.504.189-.756 0-.864-.486-1.296-1.458-1.296zm9.504-6.345l4.185-.648-1.026 4.185h4.482l-.81 3.294h-4.455l-1.188 4.968a6.567 6.567 0 0 0-.202 1.161c-.028.36.017.67.135.931.117.262.319.464.607.608.288.144.684.216 1.188.216.432 0 .85-.04 1.255-.121a9.279 9.279 0 0 0 1.229-.338l.297 3.078a14.46 14.46 0 0 1-1.755.513c-.63.144-1.377.216-2.241.216-1.242 0-2.205-.184-2.889-.554-.684-.369-1.17-.872-1.458-1.511-.288-.64-.414-1.373-.378-2.201.036-.828.162-1.701.378-2.619l2.646-11.178zm16.956 3.294c.774 0 1.44.112 1.998.338.558.225 1.017.54 1.377.944.36.406.63.887.81 1.445.18.558.27 1.161.27 1.809 0 .756-.09 1.503-.27 2.241L158.48 30h-4.023l1.782-7.506c.072-.306.14-.63.202-.972.064-.342.095-.666.095-.972 0-.468-.121-.868-.364-1.201-.244-.334-.707-.5-1.391-.5-.288 0-.562.018-.823.054-.262.036-.518.081-.77.135L150.569 30h-4.023l4.86-20.304 4.185-.648-1.647 6.777c.36-.072.724-.135 1.094-.189a7.544 7.544 0 0 1 1.093-.081zm6.48 8.883a9.46 9.46 0 0 1 .608-3.348 9.178 9.178 0 0 1 1.714-2.875 8.497 8.497 0 0 1 2.686-2.026c1.054-.513 2.219-.769 3.497-.769.63 0 1.215.09 1.755.27.54.18 1.012.441 1.417.783.406.342.72.76.945 1.256.226.495.338 1.057.338 1.687 0 1.008-.225 1.863-.675 2.565-.45.702-1.075 1.273-1.876 1.714-.802.442-1.751.761-2.849.959a20.268 20.268 0 0 1-3.591.297c.126.756.4 1.291.823 1.607.424.315 1.094.472 2.012.472.576 0 1.161-.05 1.755-.149a8.778 8.778 0 0 0 1.674-.445l.297 3.159c-.504.198-1.147.378-1.93.54-.784.162-1.634.243-2.552.243-1.116 0-2.056-.157-2.821-.473-.766-.315-1.386-.742-1.863-1.282a4.975 4.975 0 0 1-1.04-1.89 7.947 7.947 0 0 1-.324-2.295zm7.857-5.832c-.918 0-1.723.328-2.416.985-.694.658-1.148 1.526-1.364 2.606 1.116-.036 2.016-.13 2.7-.284.684-.153 1.215-.337 1.593-.553.378-.216.63-.45.756-.702.126-.252.189-.504.189-.756 0-.864-.486-1.296-1.458-1.296zm16.497.648c-.36-.09-.715-.175-1.066-.257-.352-.08-.869-.121-1.553-.121-.252 0-.531.022-.837.067a6.61 6.61 0 0 0-.756.149L180.134 30h-4.023l3.24-13.446c.774-.252 1.642-.49 2.606-.715.963-.226 2.047-.338 3.253-.338.45 0 .95.04 1.498.122.55.08 1.031.211 1.445.391l-1.188 3.24z",
    fill: "#6C6A91"
  })));
};

Logotype.defaultProps = {
  width: "189",
  height: "41",
  viewBox: "0 0 189 41",
  xmlns: "http://www.w3.org/2000/svg"
};





var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        loggedIn: false,
        userInfo: {},
        showComposeModal: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleComposeModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var showComposeModal = _this.state.showComposeModal;

        _this.setState({
          showComposeModal: !showComposeModal
        });
      }
    }), _temp));
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var userId, mm, userInfo;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_5__web3_users__["b" /* getLoggedInUserId */])();

              case 2:
                userId = _context.sent;
                _context.next = 5;
                return Object(__WEBPACK_IMPORTED_MODULE_5__web3_users__["c" /* getUserInfo */])(userId);

              case 5:
                mm = _context.sent;
                console.log("showComposeModal", mm);
                _context.prev = 7;
                _context.next = 10;
                return Object(__WEBPACK_IMPORTED_MODULE_5__web3_users__["c" /* getUserInfo */])(userId);

              case 10:
                userInfo = _context.sent;
                this.setState({
                  loggedIn: true,
                  userInfo: userInfo
                });
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](7);
                console.error("Couldn't find logged in user", _context.t0);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 14]]);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          loggedIn = _state.loggedIn,
          userInfo = _state.userInfo,
          showComposeModal = _state.showComposeModal;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-1814845797"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Layout__["a" /* Center */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-1814845797" + " " + "logotype"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Logotype, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-1814845797"
      }, loggedIn && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Nav__["a" /* default */], {
        userInfo: userInfo,
        toggleComposeModal: this.toggleComposeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }))), showComposeModal && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Modal__["a" /* default */], {
        onClose: this.toggleComposeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__TweetComposer__["a" /* default */], {
        onClose: this.toggleComposeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "1814845797",
        css: "header.jsx-1814845797{background-color:#FFFFFF;box-shadow:0 1px 3px 0 rgba(0,0,0,0.14);position:fixed;top:0;left:0;right:0;z-index:100;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRW9CLEFBR3NDLHlCQUNlLHdDQUN6QixlQUNULE1BQ0MsT0FDQyxRQUNJLFlBQ2QiLCJmaWxlIjoiY2xpZW50L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RzaW5naHVhLXlpbmNoZW5nL+ahjOmdoi90d2l0dGVyIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuaW1wb3J0IHsgQ2VudGVyIH0gZnJvbSBcIi4vTGF5b3V0XCJcbmltcG9ydCBMb2dvdHlwZSBmcm9tIFwiLi4vaWNvbnMvbG9nb3R5cGUuc3ZnXCJcbmltcG9ydCB7IGdldExvZ2dlZEluVXNlcklkICwgZ2V0VXNlckluZm8gfSBmcm9tIFwiLi4vd2ViMy91c2Vyc1wiXG5cblxuaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIlxuaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCJcblxuaW1wb3J0IFR3ZWV0Q29tcG9zZXIgZnJvbSBcIi4vVHdlZXRDb21wb3NlclwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIGxvZ2dlZEluOiBmYWxzZSxcbiAgICB1c2VySW5mbzoge30sXG4gc2hvd0NvbXBvc2VNb2RhbDogZmFsc2VcbiAgfVxuXG50b2dnbGVDb21wb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93Q29tcG9zZU1vZGFsIH0gPSB0aGlzLnN0YXRlXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dDb21wb3NlTW9kYWw6ICFzaG93Q29tcG9zZU1vZGFsXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0TG9nZ2VkSW5Vc2VySWQoKVxuICAgICAgICBjb25zdCBtbSA9IGF3YWl0IGdldFVzZXJJbmZvKHVzZXJJZClcbiAgY29uc29sZS5sb2coXCJzaG93Q29tcG9zZU1vZGFsXCIsIG1tKVxuXG4gICAgICB0cnkge1xuICAgICAgY29uc3QgdXNlckluZm8gPSBhd2FpdCBnZXRVc2VySW5mbyh1c2VySWQpXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgdXNlckluZm8sXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkbid0IGZpbmQgbG9nZ2VkIGluIHVzZXJcIiwgZXJyKVxuICAgIH1cbiAgICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvZ2dlZEluLCB1c2VySW5mbywgc2hvd0NvbXBvc2VNb2RhbCB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvdHlwZVwiPlxuICAgICAgICAgICAgICA8TG9nb3R5cGUgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG5cblxuICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICB7bG9nZ2VkSW4gJiYgKFxuICAgICAgICAgICAgICA8TmF2XG4gICAgICAgICAgICAgICAgdXNlckluZm89e3VzZXJJbmZvfVxudG9nZ2xlQ29tcG9zZU1vZGFsPXt0aGlzLnRvZ2dsZUNvbXBvc2VNb2RhbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvQ2VudGVyPlxuXG4ge3Nob3dDb21wb3NlTW9kYWwgJiYgKFxuICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgb25DbG9zZT17dGhpcy50b2dnbGVDb21wb3NlTW9kYWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFR3ZWV0Q29tcG9zZXIgb25DbG9zZT17dGhpcy50b2dnbGVDb21wb3NlTW9kYWx9IC8+XG4gICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKX1cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsMCwwLDAuMTQpO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9oZWFkZXI+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=client/components/Header.js */"
      }));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);



/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Center; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__("./components/Header.js");
var _jsxFileName = "/home/tsinghua-yincheng/\u684C\u9762/twitter/client/components/Layout.js";




var Page = function Page(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-4182393151"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Lato:400,700",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-4182393151"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-4182393151"
  }, children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4182393151",
    css: "*{margin:0;padding:0;}body{background-color:#efedf0;font-family:'Lato','Helvetica Neue',Helvetica,Arial,sans-serif;color:#6B6B8E;}main{padding-top:80px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhdUIsQUFHa0IsQUFJZ0IsQUFLUixTQVJQLFFBU1osRUFSQSxNQUdxRSwrREFDckQsY0FDaEIiLCJmaWxlIjoiY2xpZW50L2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RzaW5naHVhLXlpbmNoZW5nL+ahjOmdoi90d2l0dGVyIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiXG5leHBvcnQgY29uc3QgUGFnZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgPC9IZWFkPlxuPEhlYWRlciAvPlxuICAgIDxtYWluPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbWFpbj5cblxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAqIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVkZjA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiAjNkI2QjhFO1xuICAgICAgfVxuICAgICAgbWFpbiB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cblxuXG5leHBvcnQgY29uc3QgQ2VudGVyID0gKHsgY2hpbGRyZW4sIHN0eWxlIH0pID0+IChcbiAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgIHtjaGlsZHJlbn1cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGRpdiB7XG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=client/components/Layout.js */"
  }));
};
var Center = function Center(_ref2) {
  var children = _ref2.children,
      style = _ref2.style;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-2801955631"
  }, children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2801955631",
    css: "div.jsx-2801955631{max-width:1000px;margin:0 auto;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2dCLEFBRzBCLGlCQUNILGNBQ0QsYUFDZiIsImZpbGUiOiJjbGllbnQvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHNpbmdodWEteWluY2hlbmcv5qGM6Z2iL3R3aXR0ZXIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCJcbmV4cG9ydCBjb25zdCBQYWdlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICA8L0hlYWQ+XG48SGVhZGVyIC8+XG4gICAgPG1haW4+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9tYWluPlxuXG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICoge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWRmMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6ICM2QjZCOEU7XG4gICAgICB9XG4gICAgICBtYWluIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuXG5cbmV4cG9ydCBjb25zdCBDZW50ZXIgPSAoeyBjaGlsZHJlbiwgc3R5bGUgfSkgPT4gKFxuICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAge2NoaWxkcmVufVxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgZGl2IHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=client/components/Layout.js */"
  }));
};

/***/ }),

/***/ "./components/Modal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/tsinghua-yincheng/\u684C\u9762/twitter/client/components/Modal.js";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var onClose = _ref.onClose,
      children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-2470096207"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-2470096207" + " " + "overlay"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-2470096207" + " " + "modal"
  }, children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2470096207",
    css: ".overlay.jsx-2470096207{background-color:rgba(65,65,85,0.58);position:fixed;top:0;bottom:0;left:0;right:0;z-index:110;}.modal.jsx-2470096207{position:fixed;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:538px;background-color:white;box-shadow:0 1px 27px 0 rgba(0,0,0,0.19);border-radius:3px;padding:14px;z-index:120;}.modal.jsx-2470096207 h3{text-align:center;margin:10px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jb21wb25lbnRzL01vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdnQixBQUc4QyxBQVN0QixBQVlHLGVBWFQsR0FZSyxNQVhOLFFBQ29DLEFBVzlDLEtBdEJpQixlQUNULE1BQ0csU0FDRixPQUNDLFFBQ0ksWUFDZCxrRkFNYyxZQUNXLHVCQUNrQix5Q0FDdkIsa0JBQ0wsYUFDRCxZQUNkIiwiZmlsZSI6ImNsaWVudC9jb21wb25lbnRzL01vZGFsLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RzaW5naHVhLXlpbmNoZW5nL+ahjOmdoi90d2l0dGVyIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHsgb25DbG9zZSwgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cIm92ZXJsYXlcIlxuICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAvPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLm92ZXJsYXkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY1LDY1LDg1LDAuNTgpO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgei1pbmRleDogMTEwO1xuICAgICAgfVxuICAgICAgLm1vZGFsIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgd2lkdGg6IDUzOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMjdweCAwIHJnYmEoMCwwLDAsMC4xOSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgcGFkZGluZzogMTRweDtcbiAgICAgICAgei1pbmRleDogMTIwO1xuICAgICAgfVxuICAgICAgLm1vZGFsIDpnbG9iYWwoaDMpIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=client/components/Modal.js */"
  }));
});

/***/ }),

/***/ "./components/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Avatar__ = __webpack_require__("./components/Avatar.js");
var _jsxFileName = "/home/tsinghua-yincheng/\u684C\u9762/twitter/client/components/Nav.js";






var ComposeIcon = function ComposeIcon(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", props, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", null, "compose"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M15.2.003a15.513 15.513 0 0 0-12.832 7.26 15.51 15.51 0 0 0 1.97 18.995 15.511 15.511 0 0 0 18.91 2.668 15.51 15.51 0 0 0 7.148-17.708 1.108 1.108 0 0 0-2.129.612 13.276 13.276 0 0 1-6.126 15.178 13.276 13.276 0 0 1-16.208-2.287A13.277 13.277 0 0 1 4.243 8.44a13.276 13.276 0 0 1 15.395-5.564 1.107 1.107 0 1 0 .69-2.104A15.46 15.46 0 0 0 15.2.003zM26.745.19c-.288.004-.563.12-.767.324L11.193 15.3c-.11.11-.195.242-.25.386l-1.958 5.089a1.107 1.107 0 0 0 1.43 1.43l5.09-1.957c.144-.055.275-.14.385-.25L30.675 5.212a1.107 1.107 0 0 0 0-1.566L27.544.514a1.107 1.107 0 0 0-.8-.324zm.016 2.673l1.565 1.566-10.613 10.613-1.566-1.566L26.761 2.863zm-12.18 12.18l1.566 1.566-1.656 1.656-2.545.979.978-2.544 1.658-1.658z",
    fillRule: "nonzero",
    fill: "#6B6C8B"
  }));
};

ComposeIcon.defaultProps = {
  width: "31",
  height: "31",
  viewBox: "0 0 31 31",
  xmlns: "http://www.w3.org/2000/svg"
};
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var userInfo = _ref.userInfo,
      toggleComposeModal = _ref.toggleComposeModal;
  var firstName = userInfo.firstName,
      lastName = userInfo.lastName,
      username = userInfo.username,
      gravatarEmail = userInfo.gravatarEmail;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-272642058"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    onClick: toggleComposeModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-272642058"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposeIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/profile?u=".concat(username),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-272642058" + " " + "username"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Avatar__["a" /* default */], {
    email: gravatarEmail,
    style: {
      marginBottom: -2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-272642058"
  }, firstName, " ", lastName))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "272642058",
    css: "nav.jsx-272642058{display:inline-block;float:right;}nav.jsx-272642058 button.jsx-272642058,nav.jsx-272642058 a.jsx-272642058{min-height:33px;border:none;padding:7px;text-align:center;border-radius:24px;display:inline-block;vertical-align:middle;cursor:pointer;margin:0 10px;-webkit-transition:background-color 0.1s;transition:background-color 0.1s;color:inherit;}nav.jsx-272642058 button.jsx-272642058:hover,nav.jsx-272642058 a.jsx-272642058:hover{background-color:rgba(140,111,193,0.14);}nav.jsx-272642058 button.jsx-272642058:focus{outline:none;}.username.jsx-272642058{font-size:18px;-webkit-text-decoration:none;text-decoration:none;}.username.jsx-272642058 span.jsx-272642058{display:inline-block;vertical-align:middle;margin-left:10px;margin-right:10px;}nav.jsx-272642058 svg{margin-bottom:-2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQmtCLEFBR2dDLEFBS0wsQUFjd0IsQUFHM0IsQUFHRSxBQUlNLEFBTUYsYUFackIsRUFHdUIsQ0FwQlQsR0E4QmQsRUFuQ2MsQUE2QlUsT0F2QlYsS0FMZCxPQU1vQixBQVlwQixHQVdtQixlQXRCRSxFQXVCRCxLQUxwQixZQWpCdUIsQ0F1QnZCLG9CQXRCd0Isc0JBQ1AsZUFDRCxjQUNtQiwwRUFDbkIsY0FDaEIiLCJmaWxlIjoiY2xpZW50L2NvbXBvbmVudHMvTmF2LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RzaW5naHVhLXlpbmNoZW5nL+ahjOmdoi90d2l0dGVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuL0F2YXRhclwiXG5cbmltcG9ydCBDb21wb3NlSWNvbiBmcm9tIFwiLi4vaWNvbnMvY29tcG9zZS5zdmdcIlxuZXhwb3J0IGRlZmF1bHQgKHsgdXNlckluZm8sIHRvZ2dsZUNvbXBvc2VNb2RhbCB9KSA9PiB7XG4gY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCB1c2VybmFtZSwgZ3JhdmF0YXJFbWFpbCB9ID0gdXNlckluZm9cblxuICByZXR1cm4gKFxuICAgIDxuYXY+XG4gPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVDb21wb3NlTW9kYWx9PlxuICAgICAgICA8Q29tcG9zZUljb24gLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlP3U9JHt1c2VybmFtZX1gfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidXNlcm5hbWVcIj5cbiAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgZW1haWw9e2dyYXZhdGFyRW1haWx9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IC0yLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge2ZpcnN0TmFtZX0ge2xhc3ROYW1lfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICBuYXYgYnV0dG9uLFxuICAgICAgICBuYXYgYSB7XG4gICAgICAgICAgbWluLWhlaWdodDogMzNweDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgbmF2IGJ1dHRvbjpob3ZlcixcbiAgICAgICAgbmF2IGE6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQwLDExMSwxOTMsMC4xNCk7XG4gICAgICAgIH1cbiAgICAgICAgbmF2IGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAudXNlcm5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXJuYW1lIHNwYW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBuYXYgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9uYXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=client/components/Nav.js */"
  }));
});

/***/ }),

/***/ "./components/Tweet.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_moment__ = __webpack_require__("react-moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Avatar__ = __webpack_require__("./components/Avatar.js");
var _jsxFileName = "/home/tsinghua-yincheng/\u684C\u9762/twitter/client/components/Tweet.js";





/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var tweet = _ref.tweet;
  var text = tweet.text,
      user = tweet.user,
      postedAt = tweet.postedAt;
  var username = user.username,
      gravatarEmail = user.gravatarEmail;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-3535916587" + " " + "tweet"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Avatar__["a" /* default */], {
    size: 42,
    email: gravatarEmail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-3535916587" + " " + "info"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: "jsx-3535916587" + " " + "top"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/profile?u=".concat(username),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-3535916587" + " " + "username"
  }, username)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("time", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-3535916587"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_moment___default.a, {
    fromNow: true,
    ago: true,
    unix: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, postedAt))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-3535916587"
  }, text)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3535916587",
    css: ".tweet.jsx-3535916587{padding:20px;border-bottom:1px solid rgba(151,151,151,0.17);}.tweet.jsx-3535916587:last-child{border-bottom:none;}.avatar.jsx-3535916587{width:42px;height:42px;background-color:gray;border-radius:50%;display:inline-block;}.info.jsx-3535916587{display:inline-block;vertical-align:top;margin-left:20px;width:calc(100% - 62px);}.top.jsx-3535916587{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-3535916587{font-size:17px;color:#5D5D65;font-weight:600;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-text-decoration:none;text-decoration:none;}a.jsx-3535916587:hover{-webkit-text-decoration:underline;text-decoration:underline;}p.jsx-3535916587{font-size:16px;color:#444448;line-height:24px;margin-top:6px;}time.jsx-3535916587{font-size:16px;color:rgba(68,68,72,0.45);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jb21wb25lbnRzL1R3ZWV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDa0IsQUFHd0IsQUFJTSxBQUdSLEFBT1UsQUFNUixBQUdFLEFBT1csQUFHWCxBQU1BLFdBL0JILEVBUG1DLEVBdUJqQyxBQVVBLEFBTVksSUFuQzVCLEVBVXFCLEVBTkcsTUFnQk4sQUFVQyxXQW5CQSxDQXlCbkIsSUEvQm9CLEFBZ0JOLENBVUcsV0FuQlMsR0FmMUIsQUE2QkEsQ0FNQSxFQTFCdUIsV0FVdkIsT0FIQSxHQU5BLGdDQWV1QixrREFDdkIiLCJmaWxlIjoiY2xpZW50L2NvbXBvbmVudHMvVHdlZXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHNpbmdodWEteWluY2hlbmcv5qGM6Z2iL3R3aXR0ZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiXG5cbmltcG9ydCBBdmF0YXIgZnJvbSBcIi4vQXZhdGFyXCJcblxuZXhwb3J0IGRlZmF1bHQgKHsgdHdlZXQgfSkgPT4ge1xuICBjb25zdCB7IHRleHQsIHVzZXIsIHBvc3RlZEF0IH0gPSB0d2VldFxuICBjb25zdCB7IHVzZXJuYW1lLCBncmF2YXRhckVtYWlsIH0gPSB1c2VyXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInR3ZWV0XCI+XG4gICAgICA8QXZhdGFyIHNpemU9ezQyfSBlbWFpbD17Z3JhdmF0YXJFbWFpbH0gLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlP3U9JHt1c2VybmFtZX1gfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVzZXJuYW1lXCI+XG4gICAgICAgICAgICAgIHt1c2VybmFtZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPHRpbWU+XG4gICAgICAgICAgICA8TW9tZW50IGZyb21Ob3cgYWdvIHVuaXg+XG4gICAgICAgICAgICAgIHtwb3N0ZWRBdH1cbiAgICAgICAgICAgIDwvTW9tZW50PlxuICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAge3RleHR9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50d2VldCB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNTEsMTUxLDE1MSwwLjE3KTtcbiAgICAgICAgfVxuICAgICAgICAudHdlZXQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICB3aWR0aDogNDJweDtcbiAgICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5pbmZvIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjJweCk7XG4gICAgICAgIH1cbiAgICAgICAgLnRvcCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgY29sb3I6ICM1RDVENjU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjb2xvcjogIzQ0NDQ0ODtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgIH1cbiAgICAgICAgdGltZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDY4LDY4LDcyLDAuNDUpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=client/components/Tweet.js */"
  }));
});

/***/ }),

/***/ "./components/TweetComposer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposeModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__web3_tweets__ = __webpack_require__("./web3/tweets.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button__ = __webpack_require__("./components/Button.js");

var _jsxFileName = "/home/tsinghua-yincheng/\u684C\u9762/twitter/client/components/TweetComposer.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var ComposeModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ComposeModal, _React$Component);

  function ComposeModal() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, ComposeModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ComposeModal.__proto__ || Object.getPrototypeOf(ComposeModal)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        text: ""
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          text: e.target.value
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "post", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
          var text, onClose;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  text = _this.state.text;
                  onClose = _this.props.onClose;
                  _context.next = 4;
                  return Object(__WEBPACK_IMPORTED_MODULE_3__web3_tweets__["a" /* createTweet */])(text);

                case 4:
                  alert("Your tweet was posted!");
                  onClose();

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(ComposeModal, [{
    key: "render",
    value: function render() {
      var onClose = this.props.onClose;
      var text = this.state.text;
      var disabled = text === "";
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-1460367201"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-1460367201"
      }, "Post a new tweet"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("textarea", {
        value: text,
        onChange: this.handleChange,
        maxLength: 140,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-1460367201"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Button__["a" /* default */], {
        onClick: this.post,
        disabled: disabled,
        style: {
          marginTop: 12,
          float: 'right'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Post tweet"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "1460367201",
        css: "textarea.jsx-1460367201{box-sizing:border-box;margin:0px;margin-top:10px;border:2px solid rgba(107,108,139,0.58);border-radius:7px;width:100%;padding:11px;font-size:16px;}textarea.jsx-1460367201:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jb21wb25lbnRzL1R3ZWV0Q29tcG9zZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RvQixBQUdtQyxBQVVULGFBQ2YsU0FWYSxXQUNLLGdCQUN3Qix3Q0FDdEIsa0JBQ1AsV0FDRSxhQUNFLGVBQ2pCIiwiZmlsZSI6ImNsaWVudC9jb21wb25lbnRzL1R3ZWV0Q29tcG9zZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHNpbmdodWEteWluY2hlbmcv5qGM6Z2iL3R3aXR0ZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUd2VldCB9IGZyb20gJy4uL3dlYjMvdHdlZXRzJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zZU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdGV4dDogXCJcIixcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGV4dDogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBwb3N0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgdGV4dCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgb25DbG9zZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgYXdhaXQgY3JlYXRlVHdlZXQodGV4dClcblxuICAgIGFsZXJ0KFwiWW91ciB0d2VldCB3YXMgcG9zdGVkIVwiKVxuXG4gICAgb25DbG9zZSgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvbkNsb3NlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB0ZXh0IH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBkaXNhYmxlZCA9ICh0ZXh0ID09PSBcIlwiKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICBQb3N0IGEgbmV3IHR3ZWV0XG4gICAgICAgIDwvaDM+XG5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG1heExlbmd0aD17MTQwfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnBvc3R9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDEyLFxuICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFBvc3QgdHdlZXRcbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEwNywxMDgsMTM5LDAuNTgpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=client/components/TweetComposer.js */"
      }));
    }
  }]);

  return ComposeModal;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);



/***/ }),

/***/ "./components/TweetList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tweet__ = __webpack_require__("./components/Tweet.js");
var _jsxFileName = "/home/tsinghua-yincheng/\u684C\u9762/twitter/client/components/TweetList.js";



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$tweets = _ref.tweets,
      tweets = _ref$tweets === void 0 ? [] : _ref$tweets;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-7849045" + " " + "feed"
  }, !tweets.length && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-7849045"
  }, "No tweets yet."), tweets.map(function (tweet) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Tweet__["a" /* default */], {
      key: tweet.id,
      tweet: tweet,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    });
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "7849045",
    css: ".feed.jsx-7849045{background-color:white;border:1px solid rgba(0,0,0,0.11);box-shadow:0 1px 3px 0 rgba(0,0,0,0.15);border-radius:3px;max-width:560px;margin:20px auto;}p.jsx-7849045{padding:20px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jb21wb25lbnRzL1R3ZWV0TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRZ0IsQUFHZ0MsQUFRVixhQUNLLFVBUmdCLFFBU3BDLDBCQVIwQyx3Q0FDdEIsa0JBQ0YsZ0JBQ0MsaUJBQ25CIiwiZmlsZSI6ImNsaWVudC9jb21wb25lbnRzL1R3ZWV0TGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90c2luZ2h1YS15aW5jaGVuZy/moYzpnaIvdHdpdHRlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VldCBmcm9tICcuL1R3ZWV0J1xuXG5leHBvcnQgZGVmYXVsdCAoeyB0d2VldHMgPSBbXSB9KSA9PiAoXG4gIDx1bCBjbGFzc05hbWU9XCJmZWVkXCI+XG4gICAgeyF0d2VldHMubGVuZ3RoICYmIDxwPk5vIHR3ZWV0cyB5ZXQuPC9wPn1cblxuICAgIHt0d2VldHMubWFwKHR3ZWV0ID0+IDxUd2VldCBrZXk9e3R3ZWV0LmlkfSB0d2VldD17dHdlZXR9IC8+KX1cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5mZWVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgbWF4LXdpZHRoOiA1NjBweDtcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC91bD5cbilcbiJdfQ== */\n/*@ sourceURL=client/components/TweetList.js */"
  }));
});

/***/ }),

/***/ "./pages/home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__web3_tweets__ = __webpack_require__("./web3/tweets.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_TweetList__ = __webpack_require__("./components/TweetList.js");

var _jsxFileName = "/home/tsinghua-yincheng/\u684C\u9762/twitter/client/pages/home.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var HomePage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HomePage, _React$Component);

  function HomePage() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, HomePage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        tweets: []
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "loadLatestTweets", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
          var tweetIds, tweetPromises, tweets;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Object(__WEBPACK_IMPORTED_MODULE_4__web3_tweets__["b" /* getLatestTweetIds */])();

                case 2:
                  tweetIds = _context.sent;
                  tweetPromises = tweetIds.map(function (tweetId) {
                    return Object(__WEBPACK_IMPORTED_MODULE_4__web3_tweets__["c" /* getTweetInfo */])(tweetId);
                  });
                  _context.next = 6;
                  return Object(__WEBPACK_IMPORTED_MODULE_4__web3_tweets__["d" /* loadTweetsFromTweetPromises */])(tweetPromises);

                case 6:
                  tweets = _context.sent;

                  _this.setState({
                    tweets: tweets
                  });

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadLatestTweets();
    }
  }, {
    key: "render",
    value: function render() {
      var tweets = this.state.tweets;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["b" /* Page */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* Center */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-1368668353"
      }, "Latest tweets"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_TweetList__["a" /* default */], {
        tweets: tweets,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "1368668353",
        css: "h2.jsx-1368668353{font-size:16px;color:rgba(84,83,98,0.64);-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;text-align:center;text-transform:uppercase;margin-bottom:16px;margin-top:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9wYWdlcy9ob21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDb0IsQUFHNEIsZUFDVywwQkFDTCxxR0FDSCxrQkFDTyx5QkFDTixtQkFDSixlQUNqQiIsImZpbGUiOiJjbGllbnQvcGFnZXMvaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90c2luZ2h1YS15aW5jaGVuZy/moYzpnaIvdHdpdHRlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2UsIENlbnRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiXG5pbXBvcnQgeyBnZXRMYXRlc3RUd2VldElkcywgZ2V0VHdlZXRJbmZvLCBsb2FkVHdlZXRzRnJvbVR3ZWV0UHJvbWlzZXMgfSBmcm9tICcuLi93ZWIzL3R3ZWV0cydcblxuaW1wb3J0IFR3ZWV0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1R3ZWV0TGlzdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB0d2VldHM6IFtdLFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5sb2FkTGF0ZXN0VHdlZXRzKClcbiAgfVxuXG4gIGxvYWRMYXRlc3RUd2VldHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdHdlZXRJZHMgPSBhd2FpdCBnZXRMYXRlc3RUd2VldElkcygpXG5cbiAgICBjb25zdCB0d2VldFByb21pc2VzID0gdHdlZXRJZHMubWFwKHR3ZWV0SWQgPT4ge1xuICAgICAgcmV0dXJuIGdldFR3ZWV0SW5mbyh0d2VldElkKVxuICAgIH0pXG5cbiAgICBjb25zdCB0d2VldHMgPSBhd2FpdCBsb2FkVHdlZXRzRnJvbVR3ZWV0UHJvbWlzZXModHdlZXRQcm9taXNlcylcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdHdlZXRzLFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0d2VldHMgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZT5cbiAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBMYXRlc3QgdHdlZXRzXG4gICAgICAgICAgPC9oMj5cblxuICAgICAgICAgIDxUd2VldExpc3QgdHdlZXRzPXt0d2VldHN9IC8+XG4gICAgICAgIDwvQ2VudGVyPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSg4NCw4Myw5OCwwLjY0KTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9QYWdlPlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=client/pages/home.js */"
      }));
    }
  }]);

  return HomePage;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);



/***/ }),

/***/ "./web3/artifacts/TweetController.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"TweetController","abi":[{"constant":false,"inputs":[{"name":"_managerAddr","type":"address"}],"name":"setManagerAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ownerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_text","type":"string"}],"name":"createTweet","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610787806100536000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637978b231146100675780637c9cd2bc146100aa5780639c675eaa14610127578063f2fde38b1461017e575b600080fd5b34801561007357600080fd5b506100a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101c1565b005b3480156100b657600080fd5b50610111600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610260565b6040518082815260200191505060405180910390f35b34801561013357600080fd5b5061013c61065c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561018a57600080fd5b506101bf600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610681565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561021c57600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000806000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1695508573ffffffffffffffffffffffffffffffffffffffff1663bf40fac16040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180806020018281038252600b8152602001807f5573657253746f72616765000000000000000000000000000000000000000000815250602001915050602060405180830381600087803b15801561033057600080fd5b505af1158015610344573d6000803e3d6000fd5b505050506040513d602081101561035a57600080fd5b810190808051906020019092919050505094508493508373ffffffffffffffffffffffffffffffffffffffff166382d38954336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561040b57600080fd5b505af115801561041f573d6000803e3d6000fd5b505050506040513d602081101561043557600080fd5b810190808051906020019092919050505092506000831415151561045857600080fd5b8573ffffffffffffffffffffffffffffffffffffffff1663bf40fac16040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180806020018281038252600c8152602001807f547765657453746f726167650000000000000000000000000000000000000000815250602001915050602060405180830381600087803b1580156104f857600080fd5b505af115801561050c573d6000803e3d6000fd5b505050506040513d602081101561052257600080fd5b810190808051906020019092919050505091508190508073ffffffffffffffffffffffffffffffffffffffff16637cc82f20848a6040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156105c75780820151818401526020810190506105ac565b50505050905090810190601f1680156105f45780820380516001836020036101000a031916815260200191505b509350505050602060405180830381600087803b15801561061457600080fd5b505af1158015610628573d6000803e3d6000fd5b505050506040513d602081101561063e57600080fd5b81019080805190602001909291905050509650505050505050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106dc57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561071857600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820af7350de14aaa02bb2977afb8e4d9530bbe84cbb4aeb524276b9fc326f092d4d0029","deployedBytecode":"0x608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637978b231146100675780637c9cd2bc146100aa5780639c675eaa14610127578063f2fde38b1461017e575b600080fd5b34801561007357600080fd5b506100a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101c1565b005b3480156100b657600080fd5b50610111600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610260565b6040518082815260200191505060405180910390f35b34801561013357600080fd5b5061013c61065c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561018a57600080fd5b506101bf600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610681565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561021c57600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000806000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1695508573ffffffffffffffffffffffffffffffffffffffff1663bf40fac16040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180806020018281038252600b8152602001807f5573657253746f72616765000000000000000000000000000000000000000000815250602001915050602060405180830381600087803b15801561033057600080fd5b505af1158015610344573d6000803e3d6000fd5b505050506040513d602081101561035a57600080fd5b810190808051906020019092919050505094508493508373ffffffffffffffffffffffffffffffffffffffff166382d38954336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561040b57600080fd5b505af115801561041f573d6000803e3d6000fd5b505050506040513d602081101561043557600080fd5b810190808051906020019092919050505092506000831415151561045857600080fd5b8573ffffffffffffffffffffffffffffffffffffffff1663bf40fac16040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180806020018281038252600c8152602001807f547765657453746f726167650000000000000000000000000000000000000000815250602001915050602060405180830381600087803b1580156104f857600080fd5b505af115801561050c573d6000803e3d6000fd5b505050506040513d602081101561052257600080fd5b810190808051906020019092919050505091508190508073ffffffffffffffffffffffffffffffffffffffff16637cc82f20848a6040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156105c75780820151818401526020810190506105ac565b50505050905090810190601f1680156105f45780820380516001836020036101000a031916815260200191505b509350505050602060405180830381600087803b15801561061457600080fd5b505af1158015610628573d6000803e3d6000fd5b505050506040513d602081101561063e57600080fd5b81019080805190602001909291905050509650505050505050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106dc57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561071857600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820af7350de14aaa02bb2977afb8e4d9530bbe84cbb4aeb524276b9fc326f092d4d0029","sourceMap":"679:658:4:-;;;118:10:3;106:9;;:22;;;;;;;;;;;;;;;;;;679:658:4;;;;;;","deployedSourceMap":"679:658:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;147:100:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;147:100:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;727:607:4;;8:9:-1;5:2;;;30:1;27;20:12;5:2;727:607:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;45:24:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;45:24:3;;;;;;;;;;;;;;;;;;;;;;;;;;;212:134;;8:9:-1;5:2;;;30:1;27;20:12;5:2;212:134:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;147:100:1;186:9:3;;;;;;;;;;;172:23;;:10;:23;;;164:32;;;;;;;;230:12:1;216:11;;:26;;;;;;;;;;;;;;;;;;147:100;:::o;727:607:4:-;777:4;789:24;851;918;1021:12;1145:25;1214:26;832:11;;;;;;;;;;;789:55;;878:8;:19;;;:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;878:34:4;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;878:34:4;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;878:34:4;;;;;;;;;;;;;;;;851:61;;957:16;918:56;;1036:12;:22;;;1059:10;1036:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1036:34:4;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1036:34:4;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1036:34:4;;;;;;;;;;;;;;;;1021:49;;1136:1;1125:7;:12;;1117:21;;;;;;;;1173:8;:19;;;:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1173:35:4;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1173:35:4;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1173:35:4;;;;;;;;;;;;;;;;1145:63;;1256:17;1214:60;;1288:13;:25;;;1314:7;1323:5;1288:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1288:41:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1288:41:4;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1288:41:4;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1288:41:4;;;;;;;;;;;;;;;;1281:48;;727:607;;;;;;;;;:::o;45:24:3:-;;;;;;;;;;;;;:::o;212:134::-;186:9;;;;;;;;;;;172:23;;:10;:23;;;164:32;;;;;;;;310:1;289:23;;:9;:23;;;;281:32;;;;;;;;332:9;320;;:21;;;;;;;;;;;;;;;;;;212:134;:::o","source":"\n/*\npragma solidity ^0.4.19;\n\nimport '../helpers/BaseController.sol';\nimport '../ContractManager.sol';\nimport './TweetStorage.sol';\n\ncontract TweetController is BaseController {\n\n  function createTweet(uint _userId, string _text) public returns(uint) {\n    ContractManager _manager = ContractManager(managerAddr);\n\n    address _tweetStorageAddr = _manager.getAddress(\"TweetStorage\");\n    TweetStorage _tweetStorage = TweetStorage(_tweetStorageAddr);\n\n    return _tweetStorage.createTweet(_userId, _text);\n  }\n\n}\n*/\npragma solidity ^0.4.19;\n\nimport '../helpers/BaseController.sol';\nimport '../ContractManager.sol';\nimport './TweetStorage.sol';\nimport \"../users/UserStorage.sol\";\n\ncontract TweetController is BaseController {\n\n  function createTweet(string _text) public returns(uint) {\n    ContractManager _manager = ContractManager(managerAddr);\n\n    address _userStorageAddr = _manager.getAddress(\"UserStorage\");\n    UserStorage _userStorage = UserStorage(_userStorageAddr);\n\n    // Get the user ID from the address\n    uint _userId = _userStorage.addresses(msg.sender);\n\n    // Make sure the user ID isn't null\n    require(_userId != 0);\n\n    address _tweetStorageAddr = _manager.getAddress(\"TweetStorage\");\n    TweetStorage _tweetStorage = TweetStorage(_tweetStorageAddr);\n\n    return _tweetStorage.createTweet(_userId, _text);\n  }\n\n}\n","sourcePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/tweets/TweetController.sol","ast":{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/tweets/TweetController.sol","exportedSymbols":{"TweetController":[218]},"id":219,"nodeType":"SourceUnit","nodes":[{"id":151,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"515:24:4"},{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/helpers/BaseController.sol","file":"../helpers/BaseController.sol","id":152,"nodeType":"ImportDirective","scope":219,"sourceUnit":74,"src":"541:39:4","symbolAliases":[],"unitAlias":""},{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/ContractManager.sol","file":"../ContractManager.sol","id":153,"nodeType":"ImportDirective","scope":219,"sourceUnit":54,"src":"581:32:4","symbolAliases":[],"unitAlias":""},{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/tweets/TweetStorage.sol","file":"./TweetStorage.sol","id":154,"nodeType":"ImportDirective","scope":219,"sourceUnit":312,"src":"614:28:4","symbolAliases":[],"unitAlias":""},{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/users/UserStorage.sol","file":"../users/UserStorage.sol","id":155,"nodeType":"ImportDirective","scope":219,"sourceUnit":396,"src":"643:34:4","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":156,"name":"BaseController","nodeType":"UserDefinedTypeName","referencedDeclaration":73,"src":"707:14:4","typeDescriptions":{"typeIdentifier":"t_contract$_BaseController_$73","typeString":"contract BaseController"}},"id":157,"nodeType":"InheritanceSpecifier","src":"707:14:4"}],"contractDependencies":[73,149],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":218,"linearizedBaseContracts":[218,73,149],"name":"TweetController","nodeType":"ContractDefinition","nodes":[{"body":{"id":216,"nodeType":"Block","src":"783:551:4","statements":[{"assignments":[165],"declarations":[{"constant":false,"id":165,"name":"_manager","nodeType":"VariableDeclaration","scope":217,"src":"789:24:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"},"typeName":{"contractScope":null,"id":164,"name":"ContractManager","nodeType":"UserDefinedTypeName","referencedDeclaration":53,"src":"789:15:4","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"value":null,"visibility":"internal"}],"id":169,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":167,"name":"managerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"832:11:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":166,"name":"ContractManager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":53,"src":"816:15:4","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_ContractManager_$53_$","typeString":"type(contract ContractManager)"}},"id":168,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"816:28:4","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"nodeType":"VariableDeclarationStatement","src":"789:55:4"},{"assignments":[171],"declarations":[{"constant":false,"id":171,"name":"_userStorageAddr","nodeType":"VariableDeclaration","scope":217,"src":"851:24:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":170,"name":"address","nodeType":"ElementaryTypeName","src":"851:7:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"id":176,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"5573657253746f72616765","id":174,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"898:13:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_debaa55f7d082c9901660eadd80a0cb32c005b09c1b66bf1d91c135662933850","typeString":"literal_string \"UserStorage\""},"value":"UserStorage"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_stringliteral_debaa55f7d082c9901660eadd80a0cb32c005b09c1b66bf1d91c135662933850","typeString":"literal_string \"UserStorage\""}],"expression":{"argumentTypes":null,"id":172,"name":"_manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":165,"src":"878:8:4","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"id":173,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"getAddress","nodeType":"MemberAccess","referencedDeclaration":36,"src":"878:19:4","typeDescriptions":{"typeIdentifier":"t_function_external_view$_t_string_memory_ptr_$returns$_t_address_$","typeString":"function (string memory) view external returns (address)"}},"id":175,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"878:34:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"VariableDeclarationStatement","src":"851:61:4"},{"assignments":[178],"declarations":[{"constant":false,"id":178,"name":"_userStorage","nodeType":"VariableDeclaration","scope":217,"src":"918:24:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$395","typeString":"contract UserStorage"},"typeName":{"contractScope":null,"id":177,"name":"UserStorage","nodeType":"UserDefinedTypeName","referencedDeclaration":395,"src":"918:11:4","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$395","typeString":"contract UserStorage"}},"value":null,"visibility":"internal"}],"id":182,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":180,"name":"_userStorageAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":171,"src":"957:16:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":179,"name":"UserStorage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":395,"src":"945:11:4","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_UserStorage_$395_$","typeString":"type(contract UserStorage)"}},"id":181,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"945:29:4","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$395","typeString":"contract UserStorage"}},"nodeType":"VariableDeclarationStatement","src":"918:56:4"},{"assignments":[184],"declarations":[{"constant":false,"id":184,"name":"_userId","nodeType":"VariableDeclaration","scope":217,"src":"1021:12:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":183,"name":"uint","nodeType":"ElementaryTypeName","src":"1021:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":190,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":187,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":410,"src":"1059:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":188,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1059:10:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":185,"name":"_userStorage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":178,"src":"1036:12:4","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$395","typeString":"contract UserStorage"}},"id":186,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"addresses","nodeType":"MemberAccess","referencedDeclaration":324,"src":"1036:22:4","typeDescriptions":{"typeIdentifier":"t_function_external_view$_t_address_$returns$_t_uint256_$","typeString":"function (address) view external returns (uint256)"}},"id":189,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1036:34:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1021:49:4"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":194,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":192,"name":"_userId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"1125:7:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"hexValue":"30","id":193,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1136:1:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"1125:12:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":191,"name":"require","nodeType":"Identifier","overloadedDeclarations":[413,414],"referencedDeclaration":413,"src":"1117:7:4","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":195,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1117:21:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":196,"nodeType":"ExpressionStatement","src":"1117:21:4"},{"assignments":[198],"declarations":[{"constant":false,"id":198,"name":"_tweetStorageAddr","nodeType":"VariableDeclaration","scope":217,"src":"1145:25:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":197,"name":"address","nodeType":"ElementaryTypeName","src":"1145:7:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"id":203,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"547765657453746f72616765","id":201,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"1193:14:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_bbca9ccd0061b75e76c598126b6a08f32368ac19efe4b570485f019fc8cd9bfb","typeString":"literal_string \"TweetStorage\""},"value":"TweetStorage"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_stringliteral_bbca9ccd0061b75e76c598126b6a08f32368ac19efe4b570485f019fc8cd9bfb","typeString":"literal_string \"TweetStorage\""}],"expression":{"argumentTypes":null,"id":199,"name":"_manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":165,"src":"1173:8:4","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"id":200,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"getAddress","nodeType":"MemberAccess","referencedDeclaration":36,"src":"1173:19:4","typeDescriptions":{"typeIdentifier":"t_function_external_view$_t_string_memory_ptr_$returns$_t_address_$","typeString":"function (string memory) view external returns (address)"}},"id":202,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1173:35:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"VariableDeclarationStatement","src":"1145:63:4"},{"assignments":[205],"declarations":[{"constant":false,"id":205,"name":"_tweetStorage","nodeType":"VariableDeclaration","scope":217,"src":"1214:26:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_TweetStorage_$311","typeString":"contract TweetStorage"},"typeName":{"contractScope":null,"id":204,"name":"TweetStorage","nodeType":"UserDefinedTypeName","referencedDeclaration":311,"src":"1214:12:4","typeDescriptions":{"typeIdentifier":"t_contract$_TweetStorage_$311","typeString":"contract TweetStorage"}},"value":null,"visibility":"internal"}],"id":209,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":207,"name":"_tweetStorageAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":198,"src":"1256:17:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":206,"name":"TweetStorage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":311,"src":"1243:12:4","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_TweetStorage_$311_$","typeString":"type(contract TweetStorage)"}},"id":208,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1243:31:4","typeDescriptions":{"typeIdentifier":"t_contract$_TweetStorage_$311","typeString":"contract TweetStorage"}},"nodeType":"VariableDeclarationStatement","src":"1214:60:4"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":212,"name":"_userId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"1314:7:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":213,"name":"_text","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":159,"src":"1323:5:4","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"expression":{"argumentTypes":null,"id":210,"name":"_tweetStorage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":205,"src":"1288:13:4","typeDescriptions":{"typeIdentifier":"t_contract$_TweetStorage_$311","typeString":"contract TweetStorage"}},"id":211,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"createTweet","nodeType":"MemberAccess","referencedDeclaration":288,"src":"1288:25:4","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$_t_uint256_$","typeString":"function (uint256,string memory) external returns (uint256)"}},"id":214,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1288:41:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":163,"id":215,"nodeType":"Return","src":"1281:48:4"}]},"documentation":null,"id":217,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"createTweet","nodeType":"FunctionDefinition","parameters":{"id":160,"nodeType":"ParameterList","parameters":[{"constant":false,"id":159,"name":"_text","nodeType":"VariableDeclaration","scope":217,"src":"748:12:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":158,"name":"string","nodeType":"ElementaryTypeName","src":"748:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"747:14:4"},"payable":false,"returnParameters":{"id":163,"nodeType":"ParameterList","parameters":[{"constant":false,"id":162,"name":"","nodeType":"VariableDeclaration","scope":217,"src":"777:4:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":161,"name":"uint","nodeType":"ElementaryTypeName","src":"777:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"776:6:4"},"scope":218,"src":"727:607:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":219,"src":"679:658:4"}],"src":"515:823:4"},"legacyAST":{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/tweets/TweetController.sol","exportedSymbols":{"TweetController":[218]},"id":219,"nodeType":"SourceUnit","nodes":[{"id":151,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"515:24:4"},{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/helpers/BaseController.sol","file":"../helpers/BaseController.sol","id":152,"nodeType":"ImportDirective","scope":219,"sourceUnit":74,"src":"541:39:4","symbolAliases":[],"unitAlias":""},{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/ContractManager.sol","file":"../ContractManager.sol","id":153,"nodeType":"ImportDirective","scope":219,"sourceUnit":54,"src":"581:32:4","symbolAliases":[],"unitAlias":""},{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/tweets/TweetStorage.sol","file":"./TweetStorage.sol","id":154,"nodeType":"ImportDirective","scope":219,"sourceUnit":312,"src":"614:28:4","symbolAliases":[],"unitAlias":""},{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/users/UserStorage.sol","file":"../users/UserStorage.sol","id":155,"nodeType":"ImportDirective","scope":219,"sourceUnit":396,"src":"643:34:4","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":156,"name":"BaseController","nodeType":"UserDefinedTypeName","referencedDeclaration":73,"src":"707:14:4","typeDescriptions":{"typeIdentifier":"t_contract$_BaseController_$73","typeString":"contract BaseController"}},"id":157,"nodeType":"InheritanceSpecifier","src":"707:14:4"}],"contractDependencies":[73,149],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":218,"linearizedBaseContracts":[218,73,149],"name":"TweetController","nodeType":"ContractDefinition","nodes":[{"body":{"id":216,"nodeType":"Block","src":"783:551:4","statements":[{"assignments":[165],"declarations":[{"constant":false,"id":165,"name":"_manager","nodeType":"VariableDeclaration","scope":217,"src":"789:24:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"},"typeName":{"contractScope":null,"id":164,"name":"ContractManager","nodeType":"UserDefinedTypeName","referencedDeclaration":53,"src":"789:15:4","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"value":null,"visibility":"internal"}],"id":169,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":167,"name":"managerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"832:11:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":166,"name":"ContractManager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":53,"src":"816:15:4","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_ContractManager_$53_$","typeString":"type(contract ContractManager)"}},"id":168,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"816:28:4","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"nodeType":"VariableDeclarationStatement","src":"789:55:4"},{"assignments":[171],"declarations":[{"constant":false,"id":171,"name":"_userStorageAddr","nodeType":"VariableDeclaration","scope":217,"src":"851:24:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":170,"name":"address","nodeType":"ElementaryTypeName","src":"851:7:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"id":176,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"5573657253746f72616765","id":174,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"898:13:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_debaa55f7d082c9901660eadd80a0cb32c005b09c1b66bf1d91c135662933850","typeString":"literal_string \"UserStorage\""},"value":"UserStorage"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_stringliteral_debaa55f7d082c9901660eadd80a0cb32c005b09c1b66bf1d91c135662933850","typeString":"literal_string \"UserStorage\""}],"expression":{"argumentTypes":null,"id":172,"name":"_manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":165,"src":"878:8:4","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"id":173,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"getAddress","nodeType":"MemberAccess","referencedDeclaration":36,"src":"878:19:4","typeDescriptions":{"typeIdentifier":"t_function_external_view$_t_string_memory_ptr_$returns$_t_address_$","typeString":"function (string memory) view external returns (address)"}},"id":175,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"878:34:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"VariableDeclarationStatement","src":"851:61:4"},{"assignments":[178],"declarations":[{"constant":false,"id":178,"name":"_userStorage","nodeType":"VariableDeclaration","scope":217,"src":"918:24:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$395","typeString":"contract UserStorage"},"typeName":{"contractScope":null,"id":177,"name":"UserStorage","nodeType":"UserDefinedTypeName","referencedDeclaration":395,"src":"918:11:4","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$395","typeString":"contract UserStorage"}},"value":null,"visibility":"internal"}],"id":182,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":180,"name":"_userStorageAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":171,"src":"957:16:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":179,"name":"UserStorage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":395,"src":"945:11:4","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_UserStorage_$395_$","typeString":"type(contract UserStorage)"}},"id":181,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"945:29:4","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$395","typeString":"contract UserStorage"}},"nodeType":"VariableDeclarationStatement","src":"918:56:4"},{"assignments":[184],"declarations":[{"constant":false,"id":184,"name":"_userId","nodeType":"VariableDeclaration","scope":217,"src":"1021:12:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":183,"name":"uint","nodeType":"ElementaryTypeName","src":"1021:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":190,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":187,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":410,"src":"1059:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":188,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1059:10:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":185,"name":"_userStorage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":178,"src":"1036:12:4","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$395","typeString":"contract UserStorage"}},"id":186,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"addresses","nodeType":"MemberAccess","referencedDeclaration":324,"src":"1036:22:4","typeDescriptions":{"typeIdentifier":"t_function_external_view$_t_address_$returns$_t_uint256_$","typeString":"function (address) view external returns (uint256)"}},"id":189,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1036:34:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1021:49:4"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":194,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":192,"name":"_userId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"1125:7:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"hexValue":"30","id":193,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1136:1:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"1125:12:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":191,"name":"require","nodeType":"Identifier","overloadedDeclarations":[413,414],"referencedDeclaration":413,"src":"1117:7:4","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":195,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1117:21:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":196,"nodeType":"ExpressionStatement","src":"1117:21:4"},{"assignments":[198],"declarations":[{"constant":false,"id":198,"name":"_tweetStorageAddr","nodeType":"VariableDeclaration","scope":217,"src":"1145:25:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":197,"name":"address","nodeType":"ElementaryTypeName","src":"1145:7:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"id":203,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"547765657453746f72616765","id":201,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"1193:14:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_bbca9ccd0061b75e76c598126b6a08f32368ac19efe4b570485f019fc8cd9bfb","typeString":"literal_string \"TweetStorage\""},"value":"TweetStorage"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_stringliteral_bbca9ccd0061b75e76c598126b6a08f32368ac19efe4b570485f019fc8cd9bfb","typeString":"literal_string \"TweetStorage\""}],"expression":{"argumentTypes":null,"id":199,"name":"_manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":165,"src":"1173:8:4","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"id":200,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"getAddress","nodeType":"MemberAccess","referencedDeclaration":36,"src":"1173:19:4","typeDescriptions":{"typeIdentifier":"t_function_external_view$_t_string_memory_ptr_$returns$_t_address_$","typeString":"function (string memory) view external returns (address)"}},"id":202,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1173:35:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"VariableDeclarationStatement","src":"1145:63:4"},{"assignments":[205],"declarations":[{"constant":false,"id":205,"name":"_tweetStorage","nodeType":"VariableDeclaration","scope":217,"src":"1214:26:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_TweetStorage_$311","typeString":"contract TweetStorage"},"typeName":{"contractScope":null,"id":204,"name":"TweetStorage","nodeType":"UserDefinedTypeName","referencedDeclaration":311,"src":"1214:12:4","typeDescriptions":{"typeIdentifier":"t_contract$_TweetStorage_$311","typeString":"contract TweetStorage"}},"value":null,"visibility":"internal"}],"id":209,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":207,"name":"_tweetStorageAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":198,"src":"1256:17:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":206,"name":"TweetStorage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":311,"src":"1243:12:4","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_TweetStorage_$311_$","typeString":"type(contract TweetStorage)"}},"id":208,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1243:31:4","typeDescriptions":{"typeIdentifier":"t_contract$_TweetStorage_$311","typeString":"contract TweetStorage"}},"nodeType":"VariableDeclarationStatement","src":"1214:60:4"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":212,"name":"_userId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"1314:7:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":213,"name":"_text","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":159,"src":"1323:5:4","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"expression":{"argumentTypes":null,"id":210,"name":"_tweetStorage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":205,"src":"1288:13:4","typeDescriptions":{"typeIdentifier":"t_contract$_TweetStorage_$311","typeString":"contract TweetStorage"}},"id":211,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"createTweet","nodeType":"MemberAccess","referencedDeclaration":288,"src":"1288:25:4","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$_t_uint256_$","typeString":"function (uint256,string memory) external returns (uint256)"}},"id":214,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1288:41:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":163,"id":215,"nodeType":"Return","src":"1281:48:4"}]},"documentation":null,"id":217,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"createTweet","nodeType":"FunctionDefinition","parameters":{"id":160,"nodeType":"ParameterList","parameters":[{"constant":false,"id":159,"name":"_text","nodeType":"VariableDeclaration","scope":217,"src":"748:12:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":158,"name":"string","nodeType":"ElementaryTypeName","src":"748:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"747:14:4"},"payable":false,"returnParameters":{"id":163,"nodeType":"ParameterList","parameters":[{"constant":false,"id":162,"name":"","nodeType":"VariableDeclaration","scope":217,"src":"777:4:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":161,"name":"uint","nodeType":"ElementaryTypeName","src":"777:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"776:6:4"},"scope":218,"src":"727:607:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":219,"src":"679:658:4"}],"src":"515:823:4"},"compiler":{"name":"solc","version":"0.4.23+commit.124ca40d.Emscripten.clang"},"networks":{"1526344513654":{"events":{},"links":{},"address":"0xfb858534c9f294f234c7ca9e3902be82914e6f74","transactionHash":"0x4bbeaac41e40d5c627fcc2ea0aa80290a900c38636b823050c66e06d82e30bad"}},"schemaVersion":"2.0.0","updatedAt":"2018-05-15T13:42:37.337Z"}

/***/ }),

/***/ "./web3/artifacts/TweetStorage.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"TweetStorage","abi":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tweetIds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_controllerAddr","type":"address"}],"name":"setControllerAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ownerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tweets","outputs":[{"name":"id","type":"uint256"},{"name":"text","type":"string"},{"name":"userId","type":"uint256"},{"name":"postedAt","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"controllerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_userId","type":"uint256"},{"name":"_text","type":"string"}],"name":"createTweet","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_userId","type":"uint256"}],"name":"getTweetIdsFromUser","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNumTweets","outputs":[{"name":"_numTweets","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],"bytecode":"0x60806040526000600555336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610959806100586000396000f300608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806317edf66d1461009e578063317aae1b146100df5780636981fa7d146101615780637cc82f20146101a45780639c675eaa1461022b578063e8d857b014610282578063eb4fdc3f1461033d578063ee255c5714610368578063f2fde38b146103bf575b600080fd5b3480156100aa57600080fd5b506100c960048036038101908080359060200190929190505050610402565b6040518082815260200191505060405180910390f35b3480156100eb57600080fd5b5061010a60048036038101908080359060200190929190505050610425565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561014d578082015181840152602081019050610132565b505050509050019250505060405180910390f35b34801561016d57600080fd5b506101a2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610490565b005b3480156101b057600080fd5b5061021560048036038101908080359060200190929190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061052f565b6040518082815260200191505060405180910390f35b34801561023757600080fd5b5061024061068e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561028e57600080fd5b506102ad600480360381019080803590602001909291905050506106b3565b6040518085815260200180602001848152602001838152602001828103825285818151815260200191508051906020019080838360005b838110156102ff5780820151818401526020810190506102e4565b50505050905090810190601f16801561032c5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b34801561034957600080fd5b5061035261077b565b6040518082815260200191505060405180910390f35b34801561037457600080fd5b5061037d610788565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103cb57600080fd5b50610400600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107ae565b005b60048181548110151561041157fe5b906000526020600020016000915090505481565b60606003600083815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561048457602002820191906000526020600020905b815481526020019060010190808311610470575b50505050509050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104eb57600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561058d57600080fd5b6005600081548092919060010191905055506080604051908101604052806005548152602001838152602001848152602001428152506002600060055481526020019081526020016000206000820151816000015560208201518160010190805190602001906105fe929190610888565b50604082015181600201556060820151816003015590505060036000848152602001908152602001600020600554908060018154018082558091505090600182039060005260206000200160009091929091909150555060046005549080600181540180825580915050906001820390600052602060002001600090919290919091505550600554905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002602052806000526040600020600091509050806000015490806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107655780601f1061073a57610100808354040283529160200191610765565b820191906000526020600020905b81548152906001019060200180831161074857829003601f168201915b5050505050908060020154908060030154905084565b6000600480549050905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561080957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561084557600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106108c957805160ff19168380011785556108f7565b828001600101855582156108f7579182015b828111156108f65782518255916020019190600101906108db565b5b5090506109049190610908565b5090565b61092a91905b8082111561092657600081600090555060010161090e565b5090565b905600a165627a7a72305820284f0530f3a27d7841176142c2880043df4bcc6e3a623b0ae58d1a9368b9fff60029","deployedBytecode":"0x608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806317edf66d1461009e578063317aae1b146100df5780636981fa7d146101615780637cc82f20146101a45780639c675eaa1461022b578063e8d857b014610282578063eb4fdc3f1461033d578063ee255c5714610368578063f2fde38b146103bf575b600080fd5b3480156100aa57600080fd5b506100c960048036038101908080359060200190929190505050610402565b6040518082815260200191505060405180910390f35b3480156100eb57600080fd5b5061010a60048036038101908080359060200190929190505050610425565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561014d578082015181840152602081019050610132565b505050509050019250505060405180910390f35b34801561016d57600080fd5b506101a2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610490565b005b3480156101b057600080fd5b5061021560048036038101908080359060200190929190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061052f565b6040518082815260200191505060405180910390f35b34801561023757600080fd5b5061024061068e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561028e57600080fd5b506102ad600480360381019080803590602001909291905050506106b3565b6040518085815260200180602001848152602001838152602001828103825285818151815260200191508051906020019080838360005b838110156102ff5780820151818401526020810190506102e4565b50505050905090810190601f16801561032c5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b34801561034957600080fd5b5061035261077b565b6040518082815260200191505060405180910390f35b34801561037457600080fd5b5061037d610788565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103cb57600080fd5b50610400600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107ae565b005b60048181548110151561041157fe5b906000526020600020016000915090505481565b60606003600083815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561048457602002820191906000526020600020905b815481526020019060010190808311610470575b50505050509050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104eb57600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561058d57600080fd5b6005600081548092919060010191905055506080604051908101604052806005548152602001838152602001848152602001428152506002600060055481526020019081526020016000206000820151816000015560208201518160010190805190602001906105fe929190610888565b50604082015181600201556060820151816003015590505060036000848152602001908152602001600020600554908060018154018082558091505090600182039060005260206000200160009091929091909150555060046005549080600181540180825580915050906001820390600052602060002001600090919290919091505550600554905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002602052806000526040600020600091509050806000015490806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107655780601f1061073a57610100808354040283529160200191610765565b820191906000526020600020905b81548152906001019060200180831161074857829003601f168201915b5050505050908060020154908060030154905084565b6000600480549050905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561080957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561084557600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106108c957805160ff19168380011785556108f7565b828001600101855582156108f7579182015b828111156108f65782518255916020019190600101906108db565b5b5090506109049190610908565b5090565b61092a91905b8082111561092657600081600090555060010161090e565b5090565b905600a165627a7a72305820284f0530f3a27d7841176142c2880043df4bcc6e3a623b0ae58d1a9368b9fff60029","sourceMap":"64:761:5:-;;;317:1;296:22;;118:10:3;106:9;;:22;;;;;;;;;;;;;;;;;;64:761:5;;;;;;","deployedSourceMap":"64:761:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;182:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;182:22:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;615:110;;8:9:-1;5:2;;;30:1;27;20:12;5:2;615:110:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;615:110:5;;;;;;;;;;;;;;;;;202:112:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;202:112:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;323:291:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;323:291:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;45:24:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;45:24:3;;;;;;;;;;;;;;;;;;;;;;;;;;;105:36:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;105:36:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;105:36:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;728:94;;8:9:-1;5:2;;;30:1;27;20:12;5:2;728:94:5;;;;;;;;;;;;;;;;;;;;;;;83:29:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;83:29:2;;;;;;;;;;;;;;;;;;;;;;;;;;;212:134:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;212:134:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;182:22:5;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;615:110::-;678:6;699:12;:21;712:7;699:21;;;;;;;;;;;692:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;615:110;;;:::o;202:112:2:-;186:9:3;;;;;;;;;;;172:23;;:10;:23;;;164:32;;;;;;;;294:15:2;277:14;;:32;;;;;;;;;;;;;;;;;;202:112;:::o;323:291:5:-;402:4;171:14:2;;;;;;;;;;;157:28;;:10;:28;;;149:37;;;;;;;;414:13:5;;:15;;;;;;;;;;;;;460:41;;;;;;;;;466:13;;460:41;;;;481:5;460:41;;;;488:7;460:41;;;;497:3;460:41;;;436:6;:21;443:13;;436:21;;;;;;;;;;;:65;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;507:12;:21;520:7;507:21;;;;;;;;;;;534:13;;507:41;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;507:41:5;;;;;;;;;;;;;;;;;;;;;;555:8;569:13;;555:28;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;555:28:5;;;;;;;;;;;;;;;;;;;;;;596:13;;589:20;;323:291;;;;:::o;45:24:3:-;;;;;;;;;;;;;:::o;105:36:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;728:94::-;772:15;802:8;:15;;;;795:22;;728:94;:::o;83:29:2:-;;;;;;;;;;;;;:::o;212:134:3:-;186:9;;;;;;;;;;;172:23;;:10;:23;;;164:32;;;;;;;;310:1;289:23;;:9;:23;;;;281:32;;;;;;;;332:9;320;;:21;;;;;;;;;;;;;;;;;;212:134;:::o;64:761:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o","source":"pragma solidity ^0.4.19;\n\nimport '../helpers/BaseStorage.sol';\n\ncontract TweetStorage is BaseStorage{\n\n  mapping(uint => Tweet) public tweets;\nmapping (uint => uint[]) userTweetIds;\nuint[] public tweetIds;\n  struct Tweet {\n    uint id;\n    string text;\n    uint userId;\n    uint postedAt;\n  }\n\n  uint latestTweetId = 0;\n\n  function createTweet(uint _userId, string _text) public onlyController returns(uint) {\n    latestTweetId++;\n\n    tweets[latestTweetId] = Tweet(latestTweetId, _text, _userId, now);\n    userTweetIds[_userId].push(latestTweetId);\n     tweetIds.push(latestTweetId);\n    return latestTweetId;\n  }\nfunction getTweetIdsFromUser(uint _userId) view public returns(uint[]) {\n    return userTweetIds[_userId];\n  }\n\n function getNumTweets() view public returns(uint _numTweets) {\n    return tweetIds.length;\n  }\n\n}\n","sourcePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/tweets/TweetStorage.sol","ast":{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/tweets/TweetStorage.sol","exportedSymbols":{"TweetStorage":[311]},"id":312,"nodeType":"SourceUnit","nodes":[{"id":220,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"0:24:5"},{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/helpers/BaseStorage.sol","file":"../helpers/BaseStorage.sol","id":221,"nodeType":"ImportDirective","scope":312,"sourceUnit":105,"src":"26:36:5","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":222,"name":"BaseStorage","nodeType":"UserDefinedTypeName","referencedDeclaration":104,"src":"89:11:5","typeDescriptions":{"typeIdentifier":"t_contract$_BaseStorage_$104","typeString":"contract BaseStorage"}},"id":223,"nodeType":"InheritanceSpecifier","src":"89:11:5"}],"contractDependencies":[104,149],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":311,"linearizedBaseContracts":[311,104,149],"name":"TweetStorage","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":227,"name":"tweets","nodeType":"VariableDeclaration","scope":311,"src":"105:36:5","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Tweet_$244_storage_$","typeString":"mapping(uint256 => struct TweetStorage.Tweet)"},"typeName":{"id":226,"keyType":{"id":224,"name":"uint","nodeType":"ElementaryTypeName","src":"113:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Mapping","src":"105:22:5","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Tweet_$244_storage_$","typeString":"mapping(uint256 => struct TweetStorage.Tweet)"},"valueType":{"contractScope":null,"id":225,"name":"Tweet","nodeType":"UserDefinedTypeName","referencedDeclaration":244,"src":"121:5:5","typeDescriptions":{"typeIdentifier":"t_struct$_Tweet_$244_storage_ptr","typeString":"struct TweetStorage.Tweet"}}},"value":null,"visibility":"public"},{"constant":false,"id":232,"name":"userTweetIds","nodeType":"VariableDeclaration","scope":311,"src":"143:37:5","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_uint256_$dyn_storage_$","typeString":"mapping(uint256 => uint256[])"},"typeName":{"id":231,"keyType":{"id":228,"name":"uint","nodeType":"ElementaryTypeName","src":"152:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Mapping","src":"143:24:5","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_uint256_$dyn_storage_$","typeString":"mapping(uint256 => uint256[])"},"valueType":{"baseType":{"id":229,"name":"uint","nodeType":"ElementaryTypeName","src":"160:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":230,"length":null,"nodeType":"ArrayTypeName","src":"160:6:5","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}}},"value":null,"visibility":"internal"},{"constant":false,"id":235,"name":"tweetIds","nodeType":"VariableDeclaration","scope":311,"src":"182:22:5","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[]"},"typeName":{"baseType":{"id":233,"name":"uint","nodeType":"ElementaryTypeName","src":"182:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":234,"length":null,"nodeType":"ArrayTypeName","src":"182:6:5","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"public"},{"canonicalName":"TweetStorage.Tweet","id":244,"members":[{"constant":false,"id":237,"name":"id","nodeType":"VariableDeclaration","scope":244,"src":"227:7:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":236,"name":"uint","nodeType":"ElementaryTypeName","src":"227:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":239,"name":"text","nodeType":"VariableDeclaration","scope":244,"src":"240:11:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":238,"name":"string","nodeType":"ElementaryTypeName","src":"240:6:5","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":241,"name":"userId","nodeType":"VariableDeclaration","scope":244,"src":"257:11:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":240,"name":"uint","nodeType":"ElementaryTypeName","src":"257:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":243,"name":"postedAt","nodeType":"VariableDeclaration","scope":244,"src":"274:13:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":242,"name":"uint","nodeType":"ElementaryTypeName","src":"274:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"name":"Tweet","nodeType":"StructDefinition","scope":311,"src":"208:84:5","visibility":"public"},{"constant":false,"id":247,"name":"latestTweetId","nodeType":"VariableDeclaration","scope":311,"src":"296:22:5","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":245,"name":"uint","nodeType":"ElementaryTypeName","src":"296:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":246,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"317:1:5","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"internal"},{"body":{"id":287,"nodeType":"Block","src":"408:206:5","statements":[{"expression":{"argumentTypes":null,"id":259,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"414:15:5","subExpression":{"argumentTypes":null,"id":258,"name":"latestTweetId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":247,"src":"414:13:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":260,"nodeType":"ExpressionStatement","src":"414:15:5"},{"expression":{"argumentTypes":null,"id":270,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":261,"name":"tweets","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":227,"src":"436:6:5","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Tweet_$244_storage_$","typeString":"mapping(uint256 => struct TweetStorage.Tweet storage ref)"}},"id":263,"indexExpression":{"argumentTypes":null,"id":262,"name":"latestTweetId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":247,"src":"443:13:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"436:21:5","typeDescriptions":{"typeIdentifier":"t_struct$_Tweet_$244_storage","typeString":"struct TweetStorage.Tweet storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":265,"name":"latestTweetId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":247,"src":"466:13:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":266,"name":"_text","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":251,"src":"481:5:5","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":267,"name":"_userId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":249,"src":"488:7:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":268,"name":"now","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":412,"src":"497:3:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":264,"name":"Tweet","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":244,"src":"460:5:5","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Tweet_$244_storage_ptr_$","typeString":"type(struct TweetStorage.Tweet storage pointer)"}},"id":269,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"460:41:5","typeDescriptions":{"typeIdentifier":"t_struct$_Tweet_$244_memory","typeString":"struct TweetStorage.Tweet memory"}},"src":"436:65:5","typeDescriptions":{"typeIdentifier":"t_struct$_Tweet_$244_storage","typeString":"struct TweetStorage.Tweet storage ref"}},"id":271,"nodeType":"ExpressionStatement","src":"436:65:5"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":276,"name":"latestTweetId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":247,"src":"534:13:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":272,"name":"userTweetIds","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":232,"src":"507:12:5","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_uint256_$dyn_storage_$","typeString":"mapping(uint256 => uint256[] storage ref)"}},"id":274,"indexExpression":{"argumentTypes":null,"id":273,"name":"_userId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":249,"src":"520:7:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"507:21:5","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"id":275,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"507:26:5","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256) returns (uint256)"}},"id":277,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"507:41:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":278,"nodeType":"ExpressionStatement","src":"507:41:5"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":282,"name":"latestTweetId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":247,"src":"569:13:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":279,"name":"tweetIds","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":235,"src":"555:8:5","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"id":281,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"555:13:5","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256) returns (uint256)"}},"id":283,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"555:28:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":284,"nodeType":"ExpressionStatement","src":"555:28:5"},{"expression":{"argumentTypes":null,"id":285,"name":"latestTweetId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":247,"src":"596:13:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":257,"id":286,"nodeType":"Return","src":"589:20:5"}]},"documentation":null,"id":288,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":null,"id":254,"modifierName":{"argumentTypes":null,"id":253,"name":"onlyController","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":91,"src":"379:14:5","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"379:14:5"}],"name":"createTweet","nodeType":"FunctionDefinition","parameters":{"id":252,"nodeType":"ParameterList","parameters":[{"constant":false,"id":249,"name":"_userId","nodeType":"VariableDeclaration","scope":288,"src":"344:12:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":248,"name":"uint","nodeType":"ElementaryTypeName","src":"344:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":251,"name":"_text","nodeType":"VariableDeclaration","scope":288,"src":"358:12:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":250,"name":"string","nodeType":"ElementaryTypeName","src":"358:6:5","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"343:28:5"},"payable":false,"returnParameters":{"id":257,"nodeType":"ParameterList","parameters":[{"constant":false,"id":256,"name":"","nodeType":"VariableDeclaration","scope":288,"src":"402:4:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":255,"name":"uint","nodeType":"ElementaryTypeName","src":"402:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"401:6:5"},"scope":311,"src":"323:291:5","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":300,"nodeType":"Block","src":"686:39:5","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":296,"name":"userTweetIds","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":232,"src":"699:12:5","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_uint256_$dyn_storage_$","typeString":"mapping(uint256 => uint256[] storage ref)"}},"id":298,"indexExpression":{"argumentTypes":null,"id":297,"name":"_userId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":290,"src":"712:7:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"699:21:5","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"functionReturnParameters":295,"id":299,"nodeType":"Return","src":"692:28:5"}]},"documentation":null,"id":301,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getTweetIdsFromUser","nodeType":"FunctionDefinition","parameters":{"id":291,"nodeType":"ParameterList","parameters":[{"constant":false,"id":290,"name":"_userId","nodeType":"VariableDeclaration","scope":301,"src":"644:12:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":289,"name":"uint","nodeType":"ElementaryTypeName","src":"644:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"643:14:5"},"payable":false,"returnParameters":{"id":295,"nodeType":"ParameterList","parameters":[{"constant":false,"id":294,"name":"","nodeType":"VariableDeclaration","scope":301,"src":"678:6:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":292,"name":"uint","nodeType":"ElementaryTypeName","src":"678:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":293,"length":null,"nodeType":"ArrayTypeName","src":"678:6:5","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"}],"src":"677:8:5"},"scope":311,"src":"615:110:5","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":309,"nodeType":"Block","src":"789:33:5","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":306,"name":"tweetIds","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":235,"src":"802:8:5","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"id":307,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"802:15:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":305,"id":308,"nodeType":"Return","src":"795:22:5"}]},"documentation":null,"id":310,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getNumTweets","nodeType":"FunctionDefinition","parameters":{"id":302,"nodeType":"ParameterList","parameters":[],"src":"749:2:5"},"payable":false,"returnParameters":{"id":305,"nodeType":"ParameterList","parameters":[{"constant":false,"id":304,"name":"_numTweets","nodeType":"VariableDeclaration","scope":310,"src":"772:15:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":303,"name":"uint","nodeType":"ElementaryTypeName","src":"772:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"771:17:5"},"scope":311,"src":"728:94:5","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":312,"src":"64:761:5"}],"src":"0:826:5"},"legacyAST":{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/tweets/TweetStorage.sol","exportedSymbols":{"TweetStorage":[311]},"id":312,"nodeType":"SourceUnit","nodes":[{"id":220,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"0:24:5"},{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/helpers/BaseStorage.sol","file":"../helpers/BaseStorage.sol","id":221,"nodeType":"ImportDirective","scope":312,"sourceUnit":105,"src":"26:36:5","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":222,"name":"BaseStorage","nodeType":"UserDefinedTypeName","referencedDeclaration":104,"src":"89:11:5","typeDescriptions":{"typeIdentifier":"t_contract$_BaseStorage_$104","typeString":"contract BaseStorage"}},"id":223,"nodeType":"InheritanceSpecifier","src":"89:11:5"}],"contractDependencies":[104,149],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":311,"linearizedBaseContracts":[311,104,149],"name":"TweetStorage","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":227,"name":"tweets","nodeType":"VariableDeclaration","scope":311,"src":"105:36:5","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Tweet_$244_storage_$","typeString":"mapping(uint256 => struct TweetStorage.Tweet)"},"typeName":{"id":226,"keyType":{"id":224,"name":"uint","nodeType":"ElementaryTypeName","src":"113:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Mapping","src":"105:22:5","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Tweet_$244_storage_$","typeString":"mapping(uint256 => struct TweetStorage.Tweet)"},"valueType":{"contractScope":null,"id":225,"name":"Tweet","nodeType":"UserDefinedTypeName","referencedDeclaration":244,"src":"121:5:5","typeDescriptions":{"typeIdentifier":"t_struct$_Tweet_$244_storage_ptr","typeString":"struct TweetStorage.Tweet"}}},"value":null,"visibility":"public"},{"constant":false,"id":232,"name":"userTweetIds","nodeType":"VariableDeclaration","scope":311,"src":"143:37:5","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_uint256_$dyn_storage_$","typeString":"mapping(uint256 => uint256[])"},"typeName":{"id":231,"keyType":{"id":228,"name":"uint","nodeType":"ElementaryTypeName","src":"152:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Mapping","src":"143:24:5","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_uint256_$dyn_storage_$","typeString":"mapping(uint256 => uint256[])"},"valueType":{"baseType":{"id":229,"name":"uint","nodeType":"ElementaryTypeName","src":"160:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":230,"length":null,"nodeType":"ArrayTypeName","src":"160:6:5","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}}},"value":null,"visibility":"internal"},{"constant":false,"id":235,"name":"tweetIds","nodeType":"VariableDeclaration","scope":311,"src":"182:22:5","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[]"},"typeName":{"baseType":{"id":233,"name":"uint","nodeType":"ElementaryTypeName","src":"182:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":234,"length":null,"nodeType":"ArrayTypeName","src":"182:6:5","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"public"},{"canonicalName":"TweetStorage.Tweet","id":244,"members":[{"constant":false,"id":237,"name":"id","nodeType":"VariableDeclaration","scope":244,"src":"227:7:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":236,"name":"uint","nodeType":"ElementaryTypeName","src":"227:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":239,"name":"text","nodeType":"VariableDeclaration","scope":244,"src":"240:11:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":238,"name":"string","nodeType":"ElementaryTypeName","src":"240:6:5","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":241,"name":"userId","nodeType":"VariableDeclaration","scope":244,"src":"257:11:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":240,"name":"uint","nodeType":"ElementaryTypeName","src":"257:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":243,"name":"postedAt","nodeType":"VariableDeclaration","scope":244,"src":"274:13:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":242,"name":"uint","nodeType":"ElementaryTypeName","src":"274:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"name":"Tweet","nodeType":"StructDefinition","scope":311,"src":"208:84:5","visibility":"public"},{"constant":false,"id":247,"name":"latestTweetId","nodeType":"VariableDeclaration","scope":311,"src":"296:22:5","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":245,"name":"uint","nodeType":"ElementaryTypeName","src":"296:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":246,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"317:1:5","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"internal"},{"body":{"id":287,"nodeType":"Block","src":"408:206:5","statements":[{"expression":{"argumentTypes":null,"id":259,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"414:15:5","subExpression":{"argumentTypes":null,"id":258,"name":"latestTweetId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":247,"src":"414:13:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":260,"nodeType":"ExpressionStatement","src":"414:15:5"},{"expression":{"argumentTypes":null,"id":270,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":261,"name":"tweets","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":227,"src":"436:6:5","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Tweet_$244_storage_$","typeString":"mapping(uint256 => struct TweetStorage.Tweet storage ref)"}},"id":263,"indexExpression":{"argumentTypes":null,"id":262,"name":"latestTweetId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":247,"src":"443:13:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"436:21:5","typeDescriptions":{"typeIdentifier":"t_struct$_Tweet_$244_storage","typeString":"struct TweetStorage.Tweet storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":265,"name":"latestTweetId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":247,"src":"466:13:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":266,"name":"_text","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":251,"src":"481:5:5","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":267,"name":"_userId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":249,"src":"488:7:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":268,"name":"now","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":412,"src":"497:3:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":264,"name":"Tweet","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":244,"src":"460:5:5","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Tweet_$244_storage_ptr_$","typeString":"type(struct TweetStorage.Tweet storage pointer)"}},"id":269,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"460:41:5","typeDescriptions":{"typeIdentifier":"t_struct$_Tweet_$244_memory","typeString":"struct TweetStorage.Tweet memory"}},"src":"436:65:5","typeDescriptions":{"typeIdentifier":"t_struct$_Tweet_$244_storage","typeString":"struct TweetStorage.Tweet storage ref"}},"id":271,"nodeType":"ExpressionStatement","src":"436:65:5"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":276,"name":"latestTweetId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":247,"src":"534:13:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":272,"name":"userTweetIds","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":232,"src":"507:12:5","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_uint256_$dyn_storage_$","typeString":"mapping(uint256 => uint256[] storage ref)"}},"id":274,"indexExpression":{"argumentTypes":null,"id":273,"name":"_userId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":249,"src":"520:7:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"507:21:5","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"id":275,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"507:26:5","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256) returns (uint256)"}},"id":277,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"507:41:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":278,"nodeType":"ExpressionStatement","src":"507:41:5"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":282,"name":"latestTweetId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":247,"src":"569:13:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":279,"name":"tweetIds","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":235,"src":"555:8:5","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"id":281,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"555:13:5","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256) returns (uint256)"}},"id":283,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"555:28:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":284,"nodeType":"ExpressionStatement","src":"555:28:5"},{"expression":{"argumentTypes":null,"id":285,"name":"latestTweetId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":247,"src":"596:13:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":257,"id":286,"nodeType":"Return","src":"589:20:5"}]},"documentation":null,"id":288,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":null,"id":254,"modifierName":{"argumentTypes":null,"id":253,"name":"onlyController","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":91,"src":"379:14:5","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"379:14:5"}],"name":"createTweet","nodeType":"FunctionDefinition","parameters":{"id":252,"nodeType":"ParameterList","parameters":[{"constant":false,"id":249,"name":"_userId","nodeType":"VariableDeclaration","scope":288,"src":"344:12:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":248,"name":"uint","nodeType":"ElementaryTypeName","src":"344:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":251,"name":"_text","nodeType":"VariableDeclaration","scope":288,"src":"358:12:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":250,"name":"string","nodeType":"ElementaryTypeName","src":"358:6:5","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"343:28:5"},"payable":false,"returnParameters":{"id":257,"nodeType":"ParameterList","parameters":[{"constant":false,"id":256,"name":"","nodeType":"VariableDeclaration","scope":288,"src":"402:4:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":255,"name":"uint","nodeType":"ElementaryTypeName","src":"402:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"401:6:5"},"scope":311,"src":"323:291:5","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":300,"nodeType":"Block","src":"686:39:5","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":296,"name":"userTweetIds","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":232,"src":"699:12:5","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_uint256_$dyn_storage_$","typeString":"mapping(uint256 => uint256[] storage ref)"}},"id":298,"indexExpression":{"argumentTypes":null,"id":297,"name":"_userId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":290,"src":"712:7:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"699:21:5","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"functionReturnParameters":295,"id":299,"nodeType":"Return","src":"692:28:5"}]},"documentation":null,"id":301,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getTweetIdsFromUser","nodeType":"FunctionDefinition","parameters":{"id":291,"nodeType":"ParameterList","parameters":[{"constant":false,"id":290,"name":"_userId","nodeType":"VariableDeclaration","scope":301,"src":"644:12:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":289,"name":"uint","nodeType":"ElementaryTypeName","src":"644:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"643:14:5"},"payable":false,"returnParameters":{"id":295,"nodeType":"ParameterList","parameters":[{"constant":false,"id":294,"name":"","nodeType":"VariableDeclaration","scope":301,"src":"678:6:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":292,"name":"uint","nodeType":"ElementaryTypeName","src":"678:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":293,"length":null,"nodeType":"ArrayTypeName","src":"678:6:5","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"}],"src":"677:8:5"},"scope":311,"src":"615:110:5","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":309,"nodeType":"Block","src":"789:33:5","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":306,"name":"tweetIds","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":235,"src":"802:8:5","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"id":307,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"802:15:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":305,"id":308,"nodeType":"Return","src":"795:22:5"}]},"documentation":null,"id":310,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getNumTweets","nodeType":"FunctionDefinition","parameters":{"id":302,"nodeType":"ParameterList","parameters":[],"src":"749:2:5"},"payable":false,"returnParameters":{"id":305,"nodeType":"ParameterList","parameters":[{"constant":false,"id":304,"name":"_numTweets","nodeType":"VariableDeclaration","scope":310,"src":"772:15:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":303,"name":"uint","nodeType":"ElementaryTypeName","src":"772:4:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"771:17:5"},"scope":311,"src":"728:94:5","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":312,"src":"64:761:5"}],"src":"0:826:5"},"compiler":{"name":"solc","version":"0.4.23+commit.124ca40d.Emscripten.clang"},"networks":{"1526344513654":{"events":{},"links":{},"address":"0x65754b17574a1a3a96f55f71d3633fe90c528f6e","transactionHash":"0x674ac19e50627afebbbf632cd24ca735b6e11aa65061306a4be4bb2bf22d1e83"}},"schemaVersion":"2.0.0","updatedAt":"2018-05-15T13:42:37.339Z"}

/***/ }),

/***/ "./web3/artifacts/UserController.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"UserController","abi":[{"constant":false,"inputs":[{"name":"_managerAddr","type":"address"}],"name":"setManagerAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ownerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_username","type":"bytes32"},{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_bio","type":"string"},{"name":"_gravatarEmail","type":"string"}],"name":"createUser","outputs":[{"name":"_newUserId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610898806100536000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637978b231146100675780639c675eaa146100aa578063f2fde38b14610101578063f901175b14610144575b600080fd5b34801561007357600080fd5b506100a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610231565b005b3480156100b657600080fd5b506100bf6102d0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561010d57600080fd5b50610142600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102f5565b005b34801561015057600080fd5b5061021b600480360381019080803560001916906020019092919080356000191690602001909291908035600019169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506103cf565b6040518082815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561028c57600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561035057600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561038c57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692508273ffffffffffffffffffffffffffffffffffffffff1663bf40fac16040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180806020018281038252600b8152602001807f5573657253746f72616765000000000000000000000000000000000000000000815250602001915050602060405180830381600087803b15801561049a57600080fd5b505af11580156104ae573d6000803e3d6000fd5b505050506040513d60208110156104c457600080fd5b8101908080519060200190929190505050915081905060008173ffffffffffffffffffffffffffffffffffffffff166382d38954336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561057757600080fd5b505af115801561058b573d6000803e3d6000fd5b505050506040513d60208110156105a157600080fd5b81019080805190602001909291905050501415156105be57600080fd5b60008173ffffffffffffffffffffffffffffffffffffffff1663ec4d88d78b6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561063757600080fd5b505af115801561064b573d6000803e3d6000fd5b505050506040513d602081101561066157600080fd5b810190808051906020019092919050505014151561067e57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1663d399e63d338b8b8b8b8b6040518763ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018660001916600019168152602001856000191660001916815260200184600019166000191681526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561076b578082015181840152602081019050610750565b50505050905090810190601f1680156107985780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156107d15780820151818401526020810190506107b6565b50505050905090810190601f1680156107fe5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b15801561082357600080fd5b505af1158015610837573d6000803e3d6000fd5b505050506040513d602081101561084d57600080fd5b81019080805190602001909291905050509350505050959450505050505600a165627a7a723058201a518828f833b6fa6b92bbd1d831219a63a20581d52b6d2b038dde2afe9bf6ad0029","deployedBytecode":"0x608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637978b231146100675780639c675eaa146100aa578063f2fde38b14610101578063f901175b14610144575b600080fd5b34801561007357600080fd5b506100a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610231565b005b3480156100b657600080fd5b506100bf6102d0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561010d57600080fd5b50610142600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102f5565b005b34801561015057600080fd5b5061021b600480360381019080803560001916906020019092919080356000191690602001909291908035600019169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506103cf565b6040518082815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561028c57600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561035057600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561038c57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692508273ffffffffffffffffffffffffffffffffffffffff1663bf40fac16040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180806020018281038252600b8152602001807f5573657253746f72616765000000000000000000000000000000000000000000815250602001915050602060405180830381600087803b15801561049a57600080fd5b505af11580156104ae573d6000803e3d6000fd5b505050506040513d60208110156104c457600080fd5b8101908080519060200190929190505050915081905060008173ffffffffffffffffffffffffffffffffffffffff166382d38954336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561057757600080fd5b505af115801561058b573d6000803e3d6000fd5b505050506040513d60208110156105a157600080fd5b81019080805190602001909291905050501415156105be57600080fd5b60008173ffffffffffffffffffffffffffffffffffffffff1663ec4d88d78b6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561063757600080fd5b505af115801561064b573d6000803e3d6000fd5b505050506040513d602081101561066157600080fd5b810190808051906020019092919050505014151561067e57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1663d399e63d338b8b8b8b8b6040518763ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018660001916600019168152602001856000191660001916815260200184600019166000191681526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561076b578082015181840152602081019050610750565b50505050905090810190601f1680156107985780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156107d15780820151818401526020810190506107b6565b50505050905090810190601f1680156107fe5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b15801561082357600080fd5b505af1158015610837573d6000803e3d6000fd5b505050506040513d602081101561084d57600080fd5b81019080805190602001909291905050509350505050959450505050505600a165627a7a723058201a518828f833b6fa6b92bbd1d831219a63a20581d52b6d2b038dde2afe9bf6ad0029","sourceMap":"128:653:7:-;;;118:10:4;106:9;;:22;;;;;;;;;;;;;;;;;;128:653:7;;;;;;","deployedSourceMap":"128:653:7:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;147:100:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;147:100:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;45:24:4;;8:9:-1;5:2;;;30:1;27;20:12;5:2;45:24:4;;;;;;;;;;;;;;;;;;;;;;;;;;;212:134;;8:9:-1;5:2;;;30:1;27;20:12;5:2;212:134:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;174:605:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;174:605:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;147:100:2;186:9:4;;;;;;;;;;;172:23;;:10;:23;;;164:32;;;;;;;;230:12:2;216:11;;:26;;;;;;;;;;;;;;;;;;147:100;:::o;45:24:4:-;;;;;;;;;;;;;:::o;212:134::-;186:9;;;;;;;;;;;172:23;;:10;:23;;;164:32;;;;;;;;310:1;289:23;;:9;:23;;;;281:32;;;;;;;;332:9;320;;:21;;;;;;;;;;;;;;;;;;212:134;:::o;174:605:7:-;327:15;350:24;412;479:20;393:11;;;;;;;;;;;350:55;;439:8;:19;;;:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;439:34:7;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;439:34:7;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;439:34:7;;;;;;;;;;;;;;;;412:61;;514:16;479:52;;580:1;546:8;:18;;;565:10;546:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;546:30:7;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;546:30:7;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;546:30:7;;;;;;;;;;;;;;;;:35;538:44;;;;;;;;629:1;596:8;:18;;;615:9;596:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;596:29:7;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;596:29:7;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;596:29:7;;;;;;;;;;;;;;;;:34;588:43;;;;;;;;645:8;:19;;;672:10;690:9;707:10;725:9;742:4;754:14;645:129;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;645:129:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;645:129:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;645:129:7;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;645:129:7;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;645:129:7;;;;;;;;;;;;;;;;638:136;;174:605;;;;;;;;;;:::o","source":"pragma solidity ^0.4.19;\n\nimport '../helpers/BaseController.sol';\nimport '../ContractManager.sol';\nimport './UserStorage.sol';\n\ncontract UserController is BaseController {\n  function createUser(\n    bytes32 _username,\n    bytes32 _firstName,\n    bytes32 _lastName,\n    string _bio,\n    string _gravatarEmail\n  ) public returns(uint _newUserId) {\n    ContractManager _manager = ContractManager(managerAddr);\n\n    address _userStorageAddr = _manager.getAddress(\"UserStorage\");\n    UserStorage _storage = UserStorage(_userStorageAddr);\n\n    require(_storage.addresses(msg.sender) == 0);\n    require(_storage.usernames(_username) == 0);\n\n    return _storage.createUser(\n      msg.sender,\n      _username,\n      _firstName,\n      _lastName,\n      _bio,\n      _gravatarEmail\n    );\n  }\n}\n","sourcePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/users/UserController.sol","ast":{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/users/UserController.sol","exportedSymbols":{"UserController":[372]},"id":373,"nodeType":"SourceUnit","nodes":[{"id":301,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"0:24:7"},{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/helpers/BaseController.sol","file":"../helpers/BaseController.sol","id":302,"nodeType":"ImportDirective","scope":373,"sourceUnit":131,"src":"26:39:7","symbolAliases":[],"unitAlias":""},{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/ContractManager.sol","file":"../ContractManager.sol","id":303,"nodeType":"ImportDirective","scope":373,"sourceUnit":54,"src":"66:32:7","symbolAliases":[],"unitAlias":""},{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/users/UserStorage.sol","file":"./UserStorage.sol","id":304,"nodeType":"ImportDirective","scope":373,"sourceUnit":457,"src":"99:27:7","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":305,"name":"BaseController","nodeType":"UserDefinedTypeName","referencedDeclaration":130,"src":"155:14:7","typeDescriptions":{"typeIdentifier":"t_contract$_BaseController_$130","typeString":"contract BaseController"}},"id":306,"nodeType":"InheritanceSpecifier","src":"155:14:7"}],"contractDependencies":[130,206],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":372,"linearizedBaseContracts":[372,130,206],"name":"UserController","nodeType":"ContractDefinition","nodes":[{"body":{"id":370,"nodeType":"Block","src":"344:435:7","statements":[{"assignments":[322],"declarations":[{"constant":false,"id":322,"name":"_manager","nodeType":"VariableDeclaration","scope":371,"src":"350:24:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"},"typeName":{"contractScope":null,"id":321,"name":"ContractManager","nodeType":"UserDefinedTypeName","referencedDeclaration":53,"src":"350:15:7","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"value":null,"visibility":"internal"}],"id":326,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":324,"name":"managerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":117,"src":"393:11:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":323,"name":"ContractManager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":53,"src":"377:15:7","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_ContractManager_$53_$","typeString":"type(contract ContractManager)"}},"id":325,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"377:28:7","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"nodeType":"VariableDeclarationStatement","src":"350:55:7"},{"assignments":[328],"declarations":[{"constant":false,"id":328,"name":"_userStorageAddr","nodeType":"VariableDeclaration","scope":371,"src":"412:24:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":327,"name":"address","nodeType":"ElementaryTypeName","src":"412:7:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"id":333,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"5573657253746f72616765","id":331,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"459:13:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_debaa55f7d082c9901660eadd80a0cb32c005b09c1b66bf1d91c135662933850","typeString":"literal_string \"UserStorage\""},"value":"UserStorage"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_stringliteral_debaa55f7d082c9901660eadd80a0cb32c005b09c1b66bf1d91c135662933850","typeString":"literal_string \"UserStorage\""}],"expression":{"argumentTypes":null,"id":329,"name":"_manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":322,"src":"439:8:7","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"id":330,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"getAddress","nodeType":"MemberAccess","referencedDeclaration":36,"src":"439:19:7","typeDescriptions":{"typeIdentifier":"t_function_external_view$_t_string_memory_ptr_$returns$_t_address_$","typeString":"function (string memory) view external returns (address)"}},"id":332,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"439:34:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"VariableDeclarationStatement","src":"412:61:7"},{"assignments":[335],"declarations":[{"constant":false,"id":335,"name":"_storage","nodeType":"VariableDeclaration","scope":371,"src":"479:20:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$456","typeString":"contract UserStorage"},"typeName":{"contractScope":null,"id":334,"name":"UserStorage","nodeType":"UserDefinedTypeName","referencedDeclaration":456,"src":"479:11:7","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$456","typeString":"contract UserStorage"}},"value":null,"visibility":"internal"}],"id":339,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":337,"name":"_userStorageAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":328,"src":"514:16:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":336,"name":"UserStorage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":456,"src":"502:11:7","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_UserStorage_$456_$","typeString":"type(contract UserStorage)"}},"id":338,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"502:29:7","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$456","typeString":"contract UserStorage"}},"nodeType":"VariableDeclarationStatement","src":"479:52:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":347,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":343,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":471,"src":"565:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":344,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"565:10:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":341,"name":"_storage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":335,"src":"546:8:7","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$456","typeString":"contract UserStorage"}},"id":342,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"addresses","nodeType":"MemberAccess","referencedDeclaration":385,"src":"546:18:7","typeDescriptions":{"typeIdentifier":"t_function_external_view$_t_address_$returns$_t_uint256_$","typeString":"function (address) view external returns (uint256)"}},"id":345,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"546:30:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":346,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"580:1:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"546:35:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":340,"name":"require","nodeType":"Identifier","overloadedDeclarations":[474,475],"referencedDeclaration":474,"src":"538:7:7","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":348,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"538:44:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":349,"nodeType":"ExpressionStatement","src":"538:44:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":356,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":353,"name":"_username","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":308,"src":"615:9:7","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"expression":{"argumentTypes":null,"id":351,"name":"_storage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":335,"src":"596:8:7","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$456","typeString":"contract UserStorage"}},"id":352,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"usernames","nodeType":"MemberAccess","referencedDeclaration":389,"src":"596:18:7","typeDescriptions":{"typeIdentifier":"t_function_external_view$_t_bytes32_$returns$_t_uint256_$","typeString":"function (bytes32) view external returns (uint256)"}},"id":354,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"596:29:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":355,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"629:1:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"596:34:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":350,"name":"require","nodeType":"Identifier","overloadedDeclarations":[474,475],"referencedDeclaration":474,"src":"588:7:7","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":357,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"588:43:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":358,"nodeType":"ExpressionStatement","src":"588:43:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":361,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":471,"src":"672:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":362,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"672:10:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":363,"name":"_username","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":308,"src":"690:9:7","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},{"argumentTypes":null,"id":364,"name":"_firstName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":310,"src":"707:10:7","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},{"argumentTypes":null,"id":365,"name":"_lastName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":312,"src":"725:9:7","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},{"argumentTypes":null,"id":366,"name":"_bio","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":314,"src":"742:4:7","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":367,"name":"_gravatarEmail","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":316,"src":"754:14:7","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_bytes32","typeString":"bytes32"},{"typeIdentifier":"t_bytes32","typeString":"bytes32"},{"typeIdentifier":"t_bytes32","typeString":"bytes32"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"expression":{"argumentTypes":null,"id":359,"name":"_storage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":335,"src":"645:8:7","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$456","typeString":"contract UserStorage"}},"id":360,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"createUser","nodeType":"MemberAccess","referencedDeclaration":455,"src":"645:19:7","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_address_$_t_bytes32_$_t_bytes32_$_t_bytes32_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_uint256_$","typeString":"function (address,bytes32,bytes32,bytes32,string memory,string memory) external returns (uint256)"}},"id":368,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"645:129:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":320,"id":369,"nodeType":"Return","src":"638:136:7"}]},"documentation":null,"id":371,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"createUser","nodeType":"FunctionDefinition","parameters":{"id":317,"nodeType":"ParameterList","parameters":[{"constant":false,"id":308,"name":"_username","nodeType":"VariableDeclaration","scope":371,"src":"199:17:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":307,"name":"bytes32","nodeType":"ElementaryTypeName","src":"199:7:7","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":310,"name":"_firstName","nodeType":"VariableDeclaration","scope":371,"src":"222:18:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":309,"name":"bytes32","nodeType":"ElementaryTypeName","src":"222:7:7","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":312,"name":"_lastName","nodeType":"VariableDeclaration","scope":371,"src":"246:17:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":311,"name":"bytes32","nodeType":"ElementaryTypeName","src":"246:7:7","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":314,"name":"_bio","nodeType":"VariableDeclaration","scope":371,"src":"269:11:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":313,"name":"string","nodeType":"ElementaryTypeName","src":"269:6:7","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":316,"name":"_gravatarEmail","nodeType":"VariableDeclaration","scope":371,"src":"286:21:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":315,"name":"string","nodeType":"ElementaryTypeName","src":"286:6:7","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"193:118:7"},"payable":false,"returnParameters":{"id":320,"nodeType":"ParameterList","parameters":[{"constant":false,"id":319,"name":"_newUserId","nodeType":"VariableDeclaration","scope":371,"src":"327:15:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":318,"name":"uint","nodeType":"ElementaryTypeName","src":"327:4:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"326:17:7"},"scope":372,"src":"174:605:7","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":373,"src":"128:653:7"}],"src":"0:782:7"},"legacyAST":{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/users/UserController.sol","exportedSymbols":{"UserController":[372]},"id":373,"nodeType":"SourceUnit","nodes":[{"id":301,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"0:24:7"},{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/helpers/BaseController.sol","file":"../helpers/BaseController.sol","id":302,"nodeType":"ImportDirective","scope":373,"sourceUnit":131,"src":"26:39:7","symbolAliases":[],"unitAlias":""},{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/ContractManager.sol","file":"../ContractManager.sol","id":303,"nodeType":"ImportDirective","scope":373,"sourceUnit":54,"src":"66:32:7","symbolAliases":[],"unitAlias":""},{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/users/UserStorage.sol","file":"./UserStorage.sol","id":304,"nodeType":"ImportDirective","scope":373,"sourceUnit":457,"src":"99:27:7","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":305,"name":"BaseController","nodeType":"UserDefinedTypeName","referencedDeclaration":130,"src":"155:14:7","typeDescriptions":{"typeIdentifier":"t_contract$_BaseController_$130","typeString":"contract BaseController"}},"id":306,"nodeType":"InheritanceSpecifier","src":"155:14:7"}],"contractDependencies":[130,206],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":372,"linearizedBaseContracts":[372,130,206],"name":"UserController","nodeType":"ContractDefinition","nodes":[{"body":{"id":370,"nodeType":"Block","src":"344:435:7","statements":[{"assignments":[322],"declarations":[{"constant":false,"id":322,"name":"_manager","nodeType":"VariableDeclaration","scope":371,"src":"350:24:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"},"typeName":{"contractScope":null,"id":321,"name":"ContractManager","nodeType":"UserDefinedTypeName","referencedDeclaration":53,"src":"350:15:7","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"value":null,"visibility":"internal"}],"id":326,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":324,"name":"managerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":117,"src":"393:11:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":323,"name":"ContractManager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":53,"src":"377:15:7","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_ContractManager_$53_$","typeString":"type(contract ContractManager)"}},"id":325,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"377:28:7","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"nodeType":"VariableDeclarationStatement","src":"350:55:7"},{"assignments":[328],"declarations":[{"constant":false,"id":328,"name":"_userStorageAddr","nodeType":"VariableDeclaration","scope":371,"src":"412:24:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":327,"name":"address","nodeType":"ElementaryTypeName","src":"412:7:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"id":333,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"5573657253746f72616765","id":331,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"459:13:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_debaa55f7d082c9901660eadd80a0cb32c005b09c1b66bf1d91c135662933850","typeString":"literal_string \"UserStorage\""},"value":"UserStorage"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_stringliteral_debaa55f7d082c9901660eadd80a0cb32c005b09c1b66bf1d91c135662933850","typeString":"literal_string \"UserStorage\""}],"expression":{"argumentTypes":null,"id":329,"name":"_manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":322,"src":"439:8:7","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"id":330,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"getAddress","nodeType":"MemberAccess","referencedDeclaration":36,"src":"439:19:7","typeDescriptions":{"typeIdentifier":"t_function_external_view$_t_string_memory_ptr_$returns$_t_address_$","typeString":"function (string memory) view external returns (address)"}},"id":332,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"439:34:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"VariableDeclarationStatement","src":"412:61:7"},{"assignments":[335],"declarations":[{"constant":false,"id":335,"name":"_storage","nodeType":"VariableDeclaration","scope":371,"src":"479:20:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$456","typeString":"contract UserStorage"},"typeName":{"contractScope":null,"id":334,"name":"UserStorage","nodeType":"UserDefinedTypeName","referencedDeclaration":456,"src":"479:11:7","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$456","typeString":"contract UserStorage"}},"value":null,"visibility":"internal"}],"id":339,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":337,"name":"_userStorageAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":328,"src":"514:16:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":336,"name":"UserStorage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":456,"src":"502:11:7","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_UserStorage_$456_$","typeString":"type(contract UserStorage)"}},"id":338,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"502:29:7","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$456","typeString":"contract UserStorage"}},"nodeType":"VariableDeclarationStatement","src":"479:52:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":347,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":343,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":471,"src":"565:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":344,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"565:10:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":341,"name":"_storage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":335,"src":"546:8:7","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$456","typeString":"contract UserStorage"}},"id":342,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"addresses","nodeType":"MemberAccess","referencedDeclaration":385,"src":"546:18:7","typeDescriptions":{"typeIdentifier":"t_function_external_view$_t_address_$returns$_t_uint256_$","typeString":"function (address) view external returns (uint256)"}},"id":345,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"546:30:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":346,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"580:1:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"546:35:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":340,"name":"require","nodeType":"Identifier","overloadedDeclarations":[474,475],"referencedDeclaration":474,"src":"538:7:7","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":348,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"538:44:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":349,"nodeType":"ExpressionStatement","src":"538:44:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":356,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":353,"name":"_username","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":308,"src":"615:9:7","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"expression":{"argumentTypes":null,"id":351,"name":"_storage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":335,"src":"596:8:7","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$456","typeString":"contract UserStorage"}},"id":352,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"usernames","nodeType":"MemberAccess","referencedDeclaration":389,"src":"596:18:7","typeDescriptions":{"typeIdentifier":"t_function_external_view$_t_bytes32_$returns$_t_uint256_$","typeString":"function (bytes32) view external returns (uint256)"}},"id":354,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"596:29:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":355,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"629:1:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"596:34:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":350,"name":"require","nodeType":"Identifier","overloadedDeclarations":[474,475],"referencedDeclaration":474,"src":"588:7:7","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":357,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"588:43:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":358,"nodeType":"ExpressionStatement","src":"588:43:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":361,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":471,"src":"672:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":362,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"672:10:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":363,"name":"_username","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":308,"src":"690:9:7","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},{"argumentTypes":null,"id":364,"name":"_firstName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":310,"src":"707:10:7","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},{"argumentTypes":null,"id":365,"name":"_lastName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":312,"src":"725:9:7","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},{"argumentTypes":null,"id":366,"name":"_bio","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":314,"src":"742:4:7","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":367,"name":"_gravatarEmail","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":316,"src":"754:14:7","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_bytes32","typeString":"bytes32"},{"typeIdentifier":"t_bytes32","typeString":"bytes32"},{"typeIdentifier":"t_bytes32","typeString":"bytes32"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"expression":{"argumentTypes":null,"id":359,"name":"_storage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":335,"src":"645:8:7","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$456","typeString":"contract UserStorage"}},"id":360,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"createUser","nodeType":"MemberAccess","referencedDeclaration":455,"src":"645:19:7","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_address_$_t_bytes32_$_t_bytes32_$_t_bytes32_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_uint256_$","typeString":"function (address,bytes32,bytes32,bytes32,string memory,string memory) external returns (uint256)"}},"id":368,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"645:129:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":320,"id":369,"nodeType":"Return","src":"638:136:7"}]},"documentation":null,"id":371,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"createUser","nodeType":"FunctionDefinition","parameters":{"id":317,"nodeType":"ParameterList","parameters":[{"constant":false,"id":308,"name":"_username","nodeType":"VariableDeclaration","scope":371,"src":"199:17:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":307,"name":"bytes32","nodeType":"ElementaryTypeName","src":"199:7:7","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":310,"name":"_firstName","nodeType":"VariableDeclaration","scope":371,"src":"222:18:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":309,"name":"bytes32","nodeType":"ElementaryTypeName","src":"222:7:7","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":312,"name":"_lastName","nodeType":"VariableDeclaration","scope":371,"src":"246:17:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":311,"name":"bytes32","nodeType":"ElementaryTypeName","src":"246:7:7","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":314,"name":"_bio","nodeType":"VariableDeclaration","scope":371,"src":"269:11:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":313,"name":"string","nodeType":"ElementaryTypeName","src":"269:6:7","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":316,"name":"_gravatarEmail","nodeType":"VariableDeclaration","scope":371,"src":"286:21:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":315,"name":"string","nodeType":"ElementaryTypeName","src":"286:6:7","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"193:118:7"},"payable":false,"returnParameters":{"id":320,"nodeType":"ParameterList","parameters":[{"constant":false,"id":319,"name":"_newUserId","nodeType":"VariableDeclaration","scope":371,"src":"327:15:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":318,"name":"uint","nodeType":"ElementaryTypeName","src":"327:4:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"326:17:7"},"scope":372,"src":"174:605:7","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":373,"src":"128:653:7"}],"src":"0:782:7"},"compiler":{"name":"solc","version":"0.4.23+commit.124ca40d.Emscripten.clang"},"networks":{"1526344513654":{"events":{},"links":{},"address":"0x018d5dc342c72a1eda7935af9d7ad03b98738d0f","transactionHash":"0x7abf88887f80823bdd58676c5659ae77c4e6260ac188506fdcdf441d0df60552"}},"schemaVersion":"2.0.0","updatedAt":"2018-05-15T13:42:36.784Z"}

/***/ }),

/***/ "./web3/artifacts/UserStorage.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"UserStorage","abi":[{"constant":false,"inputs":[{"name":"_controllerAddr","type":"address"}],"name":"setControllerAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"addresses","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ownerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"profiles","outputs":[{"name":"id","type":"uint256"},{"name":"username","type":"bytes32"},{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"bio","type":"string"},{"name":"gravatarEmail","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"usernames","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"controllerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_username","type":"bytes32"},{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_bio","type":"string"},{"name":"_gravatarEmail","type":"string"}],"name":"createUser","outputs":[{"name":"_newUserId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040526000600555336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610a96806100586000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680636981fa7d1461009357806382d38954146100d65780639c675eaa1461012d578063c36fe3d614610184578063d399e63d146102ca578063ec4d88d7146103d7578063ee255c571461041c578063f2fde38b14610473575b600080fd5b34801561009f57600080fd5b506100d4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104b6565b005b3480156100e257600080fd5b50610117600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610555565b6040518082815260200191505060405180910390f35b34801561013957600080fd5b5061014261056d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019057600080fd5b506101af60048036038101908080359060200190929190505050610592565b604051808781526020018660001916600019168152602001856000191660001916815260200184600019166000191681526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015610223578082015181840152602081019050610208565b50505050905090810190601f1680156102505780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561028957808201518184015260208101905061026e565b50505050905090810190601f1680156102b65780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b3480156102d657600080fd5b506103c1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560001916906020019092919080356000191690602001909291908035600019169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506106fe565b6040518082815260200191505060405180910390f35b3480156103e357600080fd5b5061040660048036038101908080356000191690602001909291905050506108ad565b6040518082815260200191505060405180910390f35b34801561042857600080fd5b506104316108c5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561047f57600080fd5b506104b4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108eb565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561051157600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60036020528060005260406000206000915090505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002602052806000526040600020600091509050806000015490806001015490806002015490806003015490806004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106565780601f1061062b57610100808354040283529160200191610656565b820191906000526020600020905b81548152906001019060200180831161063957829003601f168201915b505050505090806005018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106f45780601f106106c9576101008083540402835291602001916106f4565b820191906000526020600020905b8154815290600101906020018083116106d757829003601f168201915b5050505050905086565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561075c57600080fd5b60056000815480929190600101919050555060c0604051908101604052806005548152602001876000191681526020018660001916815260200185600019168152602001848152602001838152506002600060055481526020019081526020016000206000820151816000015560208201518160010190600019169055604082015181600201906000191690556060820151816003019060001916905560808201518160040190805190602001906108159291906109c5565b5060a08201518160050190805190602001906108329291906109c5565b50905050600554600360008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506005546004600088600019166000191681526020019081526020016000208190555060055490509695505050505050565b60046020528060005260406000206000915090505481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561094657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561098257600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a0657805160ff1916838001178555610a34565b82800160010185558215610a34579182015b82811115610a33578251825591602001919060010190610a18565b5b509050610a419190610a45565b5090565b610a6791905b80821115610a63576000816000905550600101610a4b565b5090565b905600a165627a7a723058202c8f17171cf3e11b42553013da50e9bfd4ea7dc358ac8acf98aa1067bee654c00029","deployedBytecode":"0x60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680636981fa7d1461009357806382d38954146100d65780639c675eaa1461012d578063c36fe3d614610184578063d399e63d146102ca578063ec4d88d7146103d7578063ee255c571461041c578063f2fde38b14610473575b600080fd5b34801561009f57600080fd5b506100d4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104b6565b005b3480156100e257600080fd5b50610117600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610555565b6040518082815260200191505060405180910390f35b34801561013957600080fd5b5061014261056d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019057600080fd5b506101af60048036038101908080359060200190929190505050610592565b604051808781526020018660001916600019168152602001856000191660001916815260200184600019166000191681526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015610223578082015181840152602081019050610208565b50505050905090810190601f1680156102505780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561028957808201518184015260208101905061026e565b50505050905090810190601f1680156102b65780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b3480156102d657600080fd5b506103c1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560001916906020019092919080356000191690602001909291908035600019169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506106fe565b6040518082815260200191505060405180910390f35b3480156103e357600080fd5b5061040660048036038101908080356000191690602001909291905050506108ad565b6040518082815260200191505060405180910390f35b34801561042857600080fd5b506104316108c5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561047f57600080fd5b506104b4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108eb565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561051157600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60036020528060005260406000206000915090505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002602052806000526040600020600091509050806000015490806001015490806002015490806003015490806004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106565780601f1061062b57610100808354040283529160200191610656565b820191906000526020600020905b81548152906001019060200180831161063957829003601f168201915b505050505090806005018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106f45780601f106106c9576101008083540402835291602001916106f4565b820191906000526020600020905b8154815290600101906020018083116106d757829003601f168201915b5050505050905086565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561075c57600080fd5b60056000815480929190600101919050555060c0604051908101604052806005548152602001876000191681526020018660001916815260200185600019168152602001848152602001838152506002600060055481526020019081526020016000206000820151816000015560208201518160010190600019169055604082015181600201906000191690556060820151816003019060001916905560808201518160040190805190602001906108159291906109c5565b5060a08201518160050190805190602001906108329291906109c5565b50905050600554600360008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506005546004600088600019166000191681526020019081526020016000208190555060055490509695505050505050565b60046020528060005260406000206000915090505481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561094657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561098257600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a0657805160ff1916838001178555610a34565b82800160010185558215610a34579182015b82811115610a33578251825591602001919060010190610a18565b5b509050610a419190610a45565b5090565b610a6791905b80821115610a63576000816000905550600101610a4b565b5090565b905600a165627a7a723058202c8f17171cf3e11b42553013da50e9bfd4ea7dc358ac8acf98aa1067bee654c00029","sourceMap":"64:909:6:-;;;433:1;413:21;;118:10:3;106:9;;:22;;;;;;;;;;;;;;;;;;64:909:6;;;;;;","deployedSourceMap":"64:909:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;202:112:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;202:112:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;149:42:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;149:42:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;45:24:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;45:24:3;;;;;;;;;;;;;;;;;;;;;;;;;;;105:40:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;105:40:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;105:40:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;105:40:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;439:531;;8:9:-1;5:2;;;30:1;27;20:12;5:2;439:531:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;209:42;;8:9:-1;5:2;;;30:1;27;20:12;5:2;209:42:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;83:29:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;83:29:2;;;;;;;;;;;;;;;;;;;;;;;;;;;212:134:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;212:134:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;202:112:2;186:9:3;;;;;;;;;;;172:23;;:10;:23;;;164:32;;;;;;;;294:15:2;277:14;;:32;;;;;;;;;;;;;;;;;;202:112;:::o;149:42:6:-;;;;;;;;;;;;;;;;;:::o;45:24:3:-;;;;;;;;;;;;;:::o;105:40:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;439:531::-;643:15;171:14:2;;;;;;;;;;;157:28;;:10;:28;;;149:37;;;;;;;;668:12:6;;:14;;;;;;;;;;;;;716:133;;;;;;;;;733:12;;716:133;;;;755:9;716:133;;;;;;;774:10;716:133;;;;;;;794:9;716:133;;;;;;;813:4;716:133;;;;827:14;716:133;;;691:8;:22;700:12;;691:22;;;;;;;;;;;:158;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;880:12;;858:9;:19;868:8;858:19;;;;;;;;;;;;;;;:34;;;;923:12;;900:9;:20;910:9;900:20;;;;;;;;;;;;;;;;;:35;;;;951:12;;944:19;;439:531;;;;;;;;:::o;209:42::-;;;;;;;;;;;;;;;;;:::o;83:29:2:-;;;;;;;;;;;;;:::o;212:134:3:-;186:9;;;;;;;;;;;172:23;;:10;:23;;;164:32;;;;;;;;310:1;289:23;;:9;:23;;;;281:32;;;;;;;;332:9;320;;:21;;;;;;;;;;;;;;;;;;212:134;:::o;64:909:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o","source":"pragma solidity ^0.4.19;\n\nimport '../helpers/BaseStorage.sol';\n\ncontract UserStorage is BaseStorage {\n\n  mapping(uint => Profile) public profiles;\n  mapping (address => uint) public addresses; // <-- Add this\nmapping (bytes32 => uint) public usernames; // <-- ...and this\n  struct Profile {\n   uint id;\n   bytes32 username;\n   bytes32 firstName;\n   bytes32 lastName;\n   string bio;\n   string gravatarEmail;\n }\n\n  uint latestUserId = 0;\n\n  function createUser(\n      address _address,\n      bytes32 _username,\n      bytes32 _firstName,\n      bytes32 _lastName,\n      string _bio,\n      string _gravatarEmail\n    ) public onlyController returns(uint _newUserId) {\n      latestUserId++;\n\n      profiles[latestUserId] = Profile(\n        latestUserId,\n        _username,\n        _firstName,\n        _lastName,\n        _bio,\n        _gravatarEmail\n      );\n\n      addresses[_address] = latestUserId;\n      usernames[_username] = latestUserId;\n\n      return latestUserId;\n    }\n\n}\n","sourcePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/users/UserStorage.sol","ast":{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/users/UserStorage.sol","exportedSymbols":{"UserStorage":[395]},"id":396,"nodeType":"SourceUnit","nodes":[{"id":313,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"0:24:6"},{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/helpers/BaseStorage.sol","file":"../helpers/BaseStorage.sol","id":314,"nodeType":"ImportDirective","scope":396,"sourceUnit":105,"src":"26:36:6","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":315,"name":"BaseStorage","nodeType":"UserDefinedTypeName","referencedDeclaration":104,"src":"88:11:6","typeDescriptions":{"typeIdentifier":"t_contract$_BaseStorage_$104","typeString":"contract BaseStorage"}},"id":316,"nodeType":"InheritanceSpecifier","src":"88:11:6"}],"contractDependencies":[104,149],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":395,"linearizedBaseContracts":[395,104,149],"name":"UserStorage","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":320,"name":"profiles","nodeType":"VariableDeclaration","scope":395,"src":"105:40:6","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Profile_$341_storage_$","typeString":"mapping(uint256 => struct UserStorage.Profile)"},"typeName":{"id":319,"keyType":{"id":317,"name":"uint","nodeType":"ElementaryTypeName","src":"113:4:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Mapping","src":"105:24:6","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Profile_$341_storage_$","typeString":"mapping(uint256 => struct UserStorage.Profile)"},"valueType":{"contractScope":null,"id":318,"name":"Profile","nodeType":"UserDefinedTypeName","referencedDeclaration":341,"src":"121:7:6","typeDescriptions":{"typeIdentifier":"t_struct$_Profile_$341_storage_ptr","typeString":"struct UserStorage.Profile"}}},"value":null,"visibility":"public"},{"constant":false,"id":324,"name":"addresses","nodeType":"VariableDeclaration","scope":395,"src":"149:42:6","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":323,"keyType":{"id":321,"name":"address","nodeType":"ElementaryTypeName","src":"158:7:6","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"149:25:6","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":322,"name":"uint","nodeType":"ElementaryTypeName","src":"169:4:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"constant":false,"id":328,"name":"usernames","nodeType":"VariableDeclaration","scope":395,"src":"209:42:6","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_bytes32_$_t_uint256_$","typeString":"mapping(bytes32 => uint256)"},"typeName":{"id":327,"keyType":{"id":325,"name":"bytes32","nodeType":"ElementaryTypeName","src":"218:7:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"Mapping","src":"209:25:6","typeDescriptions":{"typeIdentifier":"t_mapping$_t_bytes32_$_t_uint256_$","typeString":"mapping(bytes32 => uint256)"},"valueType":{"id":326,"name":"uint","nodeType":"ElementaryTypeName","src":"229:4:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"canonicalName":"UserStorage.Profile","id":341,"members":[{"constant":false,"id":330,"name":"id","nodeType":"VariableDeclaration","scope":341,"src":"294:7:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":329,"name":"uint","nodeType":"ElementaryTypeName","src":"294:4:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":332,"name":"username","nodeType":"VariableDeclaration","scope":341,"src":"306:16:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":331,"name":"bytes32","nodeType":"ElementaryTypeName","src":"306:7:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":334,"name":"firstName","nodeType":"VariableDeclaration","scope":341,"src":"327:17:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":333,"name":"bytes32","nodeType":"ElementaryTypeName","src":"327:7:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":336,"name":"lastName","nodeType":"VariableDeclaration","scope":341,"src":"349:16:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":335,"name":"bytes32","nodeType":"ElementaryTypeName","src":"349:7:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":338,"name":"bio","nodeType":"VariableDeclaration","scope":341,"src":"370:10:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":337,"name":"string","nodeType":"ElementaryTypeName","src":"370:6:6","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":340,"name":"gravatarEmail","nodeType":"VariableDeclaration","scope":341,"src":"385:20:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":339,"name":"string","nodeType":"ElementaryTypeName","src":"385:6:6","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"name":"Profile","nodeType":"StructDefinition","scope":395,"src":"274:135:6","visibility":"public"},{"constant":false,"id":344,"name":"latestUserId","nodeType":"VariableDeclaration","scope":395,"src":"413:21:6","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":342,"name":"uint","nodeType":"ElementaryTypeName","src":"413:4:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":343,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"433:1:6","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"internal"},{"body":{"id":393,"nodeType":"Block","src":"660:310:6","statements":[{"expression":{"argumentTypes":null,"id":364,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"668:14:6","subExpression":{"argumentTypes":null,"id":363,"name":"latestUserId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":344,"src":"668:12:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":365,"nodeType":"ExpressionStatement","src":"668:14:6"},{"expression":{"argumentTypes":null,"id":377,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":366,"name":"profiles","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":320,"src":"691:8:6","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Profile_$341_storage_$","typeString":"mapping(uint256 => struct UserStorage.Profile storage ref)"}},"id":368,"indexExpression":{"argumentTypes":null,"id":367,"name":"latestUserId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":344,"src":"700:12:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"691:22:6","typeDescriptions":{"typeIdentifier":"t_struct$_Profile_$341_storage","typeString":"struct UserStorage.Profile storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":370,"name":"latestUserId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":344,"src":"733:12:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":371,"name":"_username","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":348,"src":"755:9:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},{"argumentTypes":null,"id":372,"name":"_firstName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":350,"src":"774:10:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},{"argumentTypes":null,"id":373,"name":"_lastName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":352,"src":"794:9:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},{"argumentTypes":null,"id":374,"name":"_bio","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":354,"src":"813:4:6","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":375,"name":"_gravatarEmail","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":356,"src":"827:14:6","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_bytes32","typeString":"bytes32"},{"typeIdentifier":"t_bytes32","typeString":"bytes32"},{"typeIdentifier":"t_bytes32","typeString":"bytes32"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"id":369,"name":"Profile","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":341,"src":"716:7:6","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Profile_$341_storage_ptr_$","typeString":"type(struct UserStorage.Profile storage pointer)"}},"id":376,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"716:133:6","typeDescriptions":{"typeIdentifier":"t_struct$_Profile_$341_memory","typeString":"struct UserStorage.Profile memory"}},"src":"691:158:6","typeDescriptions":{"typeIdentifier":"t_struct$_Profile_$341_storage","typeString":"struct UserStorage.Profile storage ref"}},"id":378,"nodeType":"ExpressionStatement","src":"691:158:6"},{"expression":{"argumentTypes":null,"id":383,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":379,"name":"addresses","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":324,"src":"858:9:6","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":381,"indexExpression":{"argumentTypes":null,"id":380,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":346,"src":"868:8:6","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"858:19:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":382,"name":"latestUserId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":344,"src":"880:12:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"858:34:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":384,"nodeType":"ExpressionStatement","src":"858:34:6"},{"expression":{"argumentTypes":null,"id":389,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":385,"name":"usernames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":328,"src":"900:9:6","typeDescriptions":{"typeIdentifier":"t_mapping$_t_bytes32_$_t_uint256_$","typeString":"mapping(bytes32 => uint256)"}},"id":387,"indexExpression":{"argumentTypes":null,"id":386,"name":"_username","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":348,"src":"910:9:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"900:20:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":388,"name":"latestUserId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":344,"src":"923:12:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"900:35:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":390,"nodeType":"ExpressionStatement","src":"900:35:6"},{"expression":{"argumentTypes":null,"id":391,"name":"latestUserId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":344,"src":"951:12:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":362,"id":392,"nodeType":"Return","src":"944:19:6"}]},"documentation":null,"id":394,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":null,"id":359,"modifierName":{"argumentTypes":null,"id":358,"name":"onlyController","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":91,"src":"620:14:6","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"620:14:6"}],"name":"createUser","nodeType":"FunctionDefinition","parameters":{"id":357,"nodeType":"ParameterList","parameters":[{"constant":false,"id":346,"name":"_address","nodeType":"VariableDeclaration","scope":394,"src":"466:16:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":345,"name":"address","nodeType":"ElementaryTypeName","src":"466:7:6","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":348,"name":"_username","nodeType":"VariableDeclaration","scope":394,"src":"490:17:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":347,"name":"bytes32","nodeType":"ElementaryTypeName","src":"490:7:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":350,"name":"_firstName","nodeType":"VariableDeclaration","scope":394,"src":"515:18:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":349,"name":"bytes32","nodeType":"ElementaryTypeName","src":"515:7:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":352,"name":"_lastName","nodeType":"VariableDeclaration","scope":394,"src":"541:17:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":351,"name":"bytes32","nodeType":"ElementaryTypeName","src":"541:7:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":354,"name":"_bio","nodeType":"VariableDeclaration","scope":394,"src":"566:11:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":353,"name":"string","nodeType":"ElementaryTypeName","src":"566:6:6","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":356,"name":"_gravatarEmail","nodeType":"VariableDeclaration","scope":394,"src":"585:21:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":355,"name":"string","nodeType":"ElementaryTypeName","src":"585:6:6","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"458:154:6"},"payable":false,"returnParameters":{"id":362,"nodeType":"ParameterList","parameters":[{"constant":false,"id":361,"name":"_newUserId","nodeType":"VariableDeclaration","scope":394,"src":"643:15:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":360,"name":"uint","nodeType":"ElementaryTypeName","src":"643:4:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"642:17:6"},"scope":395,"src":"439:531:6","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":396,"src":"64:909:6"}],"src":"0:974:6"},"legacyAST":{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/users/UserStorage.sol","exportedSymbols":{"UserStorage":[395]},"id":396,"nodeType":"SourceUnit","nodes":[{"id":313,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"0:24:6"},{"absolutePath":"/home/tsinghua-yincheng/桌面/twitter/contracts/helpers/BaseStorage.sol","file":"../helpers/BaseStorage.sol","id":314,"nodeType":"ImportDirective","scope":396,"sourceUnit":105,"src":"26:36:6","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":315,"name":"BaseStorage","nodeType":"UserDefinedTypeName","referencedDeclaration":104,"src":"88:11:6","typeDescriptions":{"typeIdentifier":"t_contract$_BaseStorage_$104","typeString":"contract BaseStorage"}},"id":316,"nodeType":"InheritanceSpecifier","src":"88:11:6"}],"contractDependencies":[104,149],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":395,"linearizedBaseContracts":[395,104,149],"name":"UserStorage","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":320,"name":"profiles","nodeType":"VariableDeclaration","scope":395,"src":"105:40:6","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Profile_$341_storage_$","typeString":"mapping(uint256 => struct UserStorage.Profile)"},"typeName":{"id":319,"keyType":{"id":317,"name":"uint","nodeType":"ElementaryTypeName","src":"113:4:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Mapping","src":"105:24:6","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Profile_$341_storage_$","typeString":"mapping(uint256 => struct UserStorage.Profile)"},"valueType":{"contractScope":null,"id":318,"name":"Profile","nodeType":"UserDefinedTypeName","referencedDeclaration":341,"src":"121:7:6","typeDescriptions":{"typeIdentifier":"t_struct$_Profile_$341_storage_ptr","typeString":"struct UserStorage.Profile"}}},"value":null,"visibility":"public"},{"constant":false,"id":324,"name":"addresses","nodeType":"VariableDeclaration","scope":395,"src":"149:42:6","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":323,"keyType":{"id":321,"name":"address","nodeType":"ElementaryTypeName","src":"158:7:6","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"149:25:6","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":322,"name":"uint","nodeType":"ElementaryTypeName","src":"169:4:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"constant":false,"id":328,"name":"usernames","nodeType":"VariableDeclaration","scope":395,"src":"209:42:6","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_bytes32_$_t_uint256_$","typeString":"mapping(bytes32 => uint256)"},"typeName":{"id":327,"keyType":{"id":325,"name":"bytes32","nodeType":"ElementaryTypeName","src":"218:7:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"Mapping","src":"209:25:6","typeDescriptions":{"typeIdentifier":"t_mapping$_t_bytes32_$_t_uint256_$","typeString":"mapping(bytes32 => uint256)"},"valueType":{"id":326,"name":"uint","nodeType":"ElementaryTypeName","src":"229:4:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"canonicalName":"UserStorage.Profile","id":341,"members":[{"constant":false,"id":330,"name":"id","nodeType":"VariableDeclaration","scope":341,"src":"294:7:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":329,"name":"uint","nodeType":"ElementaryTypeName","src":"294:4:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":332,"name":"username","nodeType":"VariableDeclaration","scope":341,"src":"306:16:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":331,"name":"bytes32","nodeType":"ElementaryTypeName","src":"306:7:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":334,"name":"firstName","nodeType":"VariableDeclaration","scope":341,"src":"327:17:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":333,"name":"bytes32","nodeType":"ElementaryTypeName","src":"327:7:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":336,"name":"lastName","nodeType":"VariableDeclaration","scope":341,"src":"349:16:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":335,"name":"bytes32","nodeType":"ElementaryTypeName","src":"349:7:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":338,"name":"bio","nodeType":"VariableDeclaration","scope":341,"src":"370:10:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":337,"name":"string","nodeType":"ElementaryTypeName","src":"370:6:6","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":340,"name":"gravatarEmail","nodeType":"VariableDeclaration","scope":341,"src":"385:20:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":339,"name":"string","nodeType":"ElementaryTypeName","src":"385:6:6","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"name":"Profile","nodeType":"StructDefinition","scope":395,"src":"274:135:6","visibility":"public"},{"constant":false,"id":344,"name":"latestUserId","nodeType":"VariableDeclaration","scope":395,"src":"413:21:6","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":342,"name":"uint","nodeType":"ElementaryTypeName","src":"413:4:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":343,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"433:1:6","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"internal"},{"body":{"id":393,"nodeType":"Block","src":"660:310:6","statements":[{"expression":{"argumentTypes":null,"id":364,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"668:14:6","subExpression":{"argumentTypes":null,"id":363,"name":"latestUserId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":344,"src":"668:12:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":365,"nodeType":"ExpressionStatement","src":"668:14:6"},{"expression":{"argumentTypes":null,"id":377,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":366,"name":"profiles","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":320,"src":"691:8:6","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_Profile_$341_storage_$","typeString":"mapping(uint256 => struct UserStorage.Profile storage ref)"}},"id":368,"indexExpression":{"argumentTypes":null,"id":367,"name":"latestUserId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":344,"src":"700:12:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"691:22:6","typeDescriptions":{"typeIdentifier":"t_struct$_Profile_$341_storage","typeString":"struct UserStorage.Profile storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":370,"name":"latestUserId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":344,"src":"733:12:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":371,"name":"_username","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":348,"src":"755:9:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},{"argumentTypes":null,"id":372,"name":"_firstName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":350,"src":"774:10:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},{"argumentTypes":null,"id":373,"name":"_lastName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":352,"src":"794:9:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},{"argumentTypes":null,"id":374,"name":"_bio","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":354,"src":"813:4:6","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":375,"name":"_gravatarEmail","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":356,"src":"827:14:6","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_bytes32","typeString":"bytes32"},{"typeIdentifier":"t_bytes32","typeString":"bytes32"},{"typeIdentifier":"t_bytes32","typeString":"bytes32"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"id":369,"name":"Profile","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":341,"src":"716:7:6","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Profile_$341_storage_ptr_$","typeString":"type(struct UserStorage.Profile storage pointer)"}},"id":376,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"716:133:6","typeDescriptions":{"typeIdentifier":"t_struct$_Profile_$341_memory","typeString":"struct UserStorage.Profile memory"}},"src":"691:158:6","typeDescriptions":{"typeIdentifier":"t_struct$_Profile_$341_storage","typeString":"struct UserStorage.Profile storage ref"}},"id":378,"nodeType":"ExpressionStatement","src":"691:158:6"},{"expression":{"argumentTypes":null,"id":383,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":379,"name":"addresses","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":324,"src":"858:9:6","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":381,"indexExpression":{"argumentTypes":null,"id":380,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":346,"src":"868:8:6","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"858:19:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":382,"name":"latestUserId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":344,"src":"880:12:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"858:34:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":384,"nodeType":"ExpressionStatement","src":"858:34:6"},{"expression":{"argumentTypes":null,"id":389,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":385,"name":"usernames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":328,"src":"900:9:6","typeDescriptions":{"typeIdentifier":"t_mapping$_t_bytes32_$_t_uint256_$","typeString":"mapping(bytes32 => uint256)"}},"id":387,"indexExpression":{"argumentTypes":null,"id":386,"name":"_username","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":348,"src":"910:9:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"900:20:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":388,"name":"latestUserId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":344,"src":"923:12:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"900:35:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":390,"nodeType":"ExpressionStatement","src":"900:35:6"},{"expression":{"argumentTypes":null,"id":391,"name":"latestUserId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":344,"src":"951:12:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":362,"id":392,"nodeType":"Return","src":"944:19:6"}]},"documentation":null,"id":394,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":null,"id":359,"modifierName":{"argumentTypes":null,"id":358,"name":"onlyController","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":91,"src":"620:14:6","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"620:14:6"}],"name":"createUser","nodeType":"FunctionDefinition","parameters":{"id":357,"nodeType":"ParameterList","parameters":[{"constant":false,"id":346,"name":"_address","nodeType":"VariableDeclaration","scope":394,"src":"466:16:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":345,"name":"address","nodeType":"ElementaryTypeName","src":"466:7:6","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":348,"name":"_username","nodeType":"VariableDeclaration","scope":394,"src":"490:17:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":347,"name":"bytes32","nodeType":"ElementaryTypeName","src":"490:7:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":350,"name":"_firstName","nodeType":"VariableDeclaration","scope":394,"src":"515:18:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":349,"name":"bytes32","nodeType":"ElementaryTypeName","src":"515:7:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":352,"name":"_lastName","nodeType":"VariableDeclaration","scope":394,"src":"541:17:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":351,"name":"bytes32","nodeType":"ElementaryTypeName","src":"541:7:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":354,"name":"_bio","nodeType":"VariableDeclaration","scope":394,"src":"566:11:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":353,"name":"string","nodeType":"ElementaryTypeName","src":"566:6:6","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":356,"name":"_gravatarEmail","nodeType":"VariableDeclaration","scope":394,"src":"585:21:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":355,"name":"string","nodeType":"ElementaryTypeName","src":"585:6:6","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"458:154:6"},"payable":false,"returnParameters":{"id":362,"nodeType":"ParameterList","parameters":[{"constant":false,"id":361,"name":"_newUserId","nodeType":"VariableDeclaration","scope":394,"src":"643:15:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":360,"name":"uint","nodeType":"ElementaryTypeName","src":"643:4:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"642:17:6"},"scope":395,"src":"439:531:6","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":396,"src":"64:909:6"}],"src":"0:974:6"},"compiler":{"name":"solc","version":"0.4.23+commit.124ca40d.Emscripten.clang"},"networks":{"1526344513654":{"events":{},"links":{},"address":"0x50a64eb5565e1408574e98ee9a60ea731d680261","transactionHash":"0xba3ffd86683b4a95e35d7bc324742c98627c654a91877a26b74b2468e3cca265"}},"schemaVersion":"2.0.0","updatedAt":"2018-05-15T13:42:36.787Z"}

/***/ }),

/***/ "./web3/provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getInstance; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_truffle_contract__ = __webpack_require__("truffle-contract");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_truffle_contract___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_truffle_contract__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3__ = __webpack_require__("web3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_web3__);
// client/web3/provider.js



var provider = function provider() {
  // If the user has MetaMask:
  if (typeof web3 !== 'undefined') {
    return web3.currentProvider;
  } else {
    console.error("You need to install MetaMask for this app to work!");
  }
};

var eth = new __WEBPACK_IMPORTED_MODULE_1_web3___default.a(provider()).eth;
var getInstance = function getInstance(artifact) {
  var contractObj = __WEBPACK_IMPORTED_MODULE_0_truffle_contract___default()(artifact);
  contractObj.setProvider(provider());
  return contractObj.deployed();
};

/***/ }),

/***/ "./web3/tweets.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createTweet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTweetInfo; });
/* unused harmony export getTweetIdsFromUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loadTweetsFromTweetPromises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLatestTweetIds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider__ = __webpack_require__("./web3/provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artifacts_TweetStorage_json__ = __webpack_require__("./web3/artifacts/TweetStorage.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artifacts_TweetStorage_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__artifacts_TweetStorage_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artifacts_TweetController_json__ = __webpack_require__("./web3/artifacts/TweetController.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artifacts_TweetController_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__artifacts_TweetController_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users__ = __webpack_require__("./web3/users.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





var createTweet =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(text) {
    var controller, addresses, result;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(__WEBPACK_IMPORTED_MODULE_1__provider__["b" /* getInstance */])(__WEBPACK_IMPORTED_MODULE_3__artifacts_TweetController_json___default.a);

          case 2:
            controller = _context.sent;
            _context.next = 5;
            return __WEBPACK_IMPORTED_MODULE_1__provider__["a" /* eth */].getAccounts();

          case 5:
            addresses = _context.sent;
            _context.next = 8;
            return controller.createTweet(text, {
              from: addresses[0]
            });

          case 8:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function createTweet(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getTweetInfo =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(tweetId) {
    var storage, tweet, _tweet, id, text, userId, postedAt;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(__WEBPACK_IMPORTED_MODULE_1__provider__["b" /* getInstance */])(__WEBPACK_IMPORTED_MODULE_2__artifacts_TweetStorage_json___default.a);

          case 2:
            storage = _context2.sent;
            _context2.next = 5;
            return storage.tweets.call(tweetId);

          case 5:
            tweet = _context2.sent;
            _tweet = _slicedToArray(tweet, 4), id = _tweet[0], text = _tweet[1], userId = _tweet[2], postedAt = _tweet[3]; // Parse the data to make it look nice:

            return _context2.abrupt("return", {
              id: parseInt(id),
              userId: parseInt(userId),
              text: text,
              postedAt: parseInt(postedAt)
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getTweetInfo(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getTweetIdsFromUser =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(userId) {
    var storage, tweetIds;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Object(__WEBPACK_IMPORTED_MODULE_1__provider__["b" /* getInstance */])(__WEBPACK_IMPORTED_MODULE_2__artifacts_TweetStorage_json___default.a);

          case 2:
            storage = _context3.sent;
            _context3.next = 5;
            return storage.getTweetIdsFromUser.call(userId);

          case 5:
            tweetIds = _context3.sent;
            return _context3.abrupt("return", tweetIds.map(function (tweetId) {
              return parseInt(tweetId);
            }));

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getTweetIdsFromUser(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var loadTweetsFromTweetPromises =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(tweetPromises) {
    var tweets, userPromises, users;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Promise.all(tweetPromises);

          case 2:
            tweets = _context4.sent;
            userPromises = tweets.map(function (tweet) {
              var userId = tweet.userId;
              return Object(__WEBPACK_IMPORTED_MODULE_4__users__["c" /* getUserInfo */])(userId);
            });
            _context4.next = 6;
            return Promise.all(userPromises);

          case 6:
            users = _context4.sent;
            return _context4.abrupt("return", tweets.map(function (tweet, index) {
              return _objectSpread({
                user: users[index]
              }, tweet);
            }));

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function loadTweetsFromTweetPromises(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var getLatestTweetIds =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5() {
    var amount,
        page,
        storage,
        numTweets,
        tweetIdPromises,
        lastIndex,
        pageIndex,
        startIndex,
        maxIndex,
        i,
        tweetIds,
        _args5 = arguments;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            amount = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : 5;
            page = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : 1;
            _context5.next = 4;
            return Object(__WEBPACK_IMPORTED_MODULE_1__provider__["b" /* getInstance */])(__WEBPACK_IMPORTED_MODULE_2__artifacts_TweetStorage_json___default.a);

          case 4:
            storage = _context5.sent;
            _context5.next = 7;
            return storage.getNumTweets.call();

          case 7:
            numTweets = _context5.sent;
            tweetIdPromises = [];
            lastIndex = numTweets - 1; // Latest

            pageIndex = page - 1;
            startIndex = lastIndex - amount * pageIndex;
            maxIndex = startIndex - amount;
            i = startIndex;

          case 14:
            if (!(i > maxIndex)) {
              _context5.next = 21;
              break;
            }

            if (!(i < 0)) {
              _context5.next = 17;
              break;
            }

            return _context5.abrupt("break", 21);

          case 17:
            tweetIdPromises.push(storage.tweetIds(i));

          case 18:
            i--;
            _context5.next = 14;
            break;

          case 21:
            _context5.next = 23;
            return Promise.all(tweetIdPromises);

          case 23:
            tweetIds = _context5.sent;
            return _context5.abrupt("return", tweetIds);

          case 25:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getLatestTweetIds() {
    return _ref5.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./web3/users.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoggedInUserId; });
/* unused harmony export getUserIdFromUsername */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider__ = __webpack_require__("./web3/provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artifacts_UserStorage_json__ = __webpack_require__("./web3/artifacts/UserStorage.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artifacts_UserStorage_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__artifacts_UserStorage_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artifacts_UserController_json__ = __webpack_require__("./web3/artifacts/UserController.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artifacts_UserController_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__artifacts_UserController_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_web3__ = __webpack_require__("web3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_web3__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

// client/web3/users.js




var hexToString = __WEBPACK_IMPORTED_MODULE_4_web3___default.a.utils.hexToString;
/*
export const getUserInfo = async (userId) => {
  const storage = await getInstance(UserStorage)
  const profile = await storage.profiles.call(userId)

  return {
    id: parseInt(id),
    username: hexToString(username),
  }
}
*/

var getUserInfo =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(userId) {
    var storage, profile, _profile, id, username, firstName, lastName, bio, gravatarEmail;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(__WEBPACK_IMPORTED_MODULE_1__provider__["b" /* getInstance */])(__WEBPACK_IMPORTED_MODULE_2__artifacts_UserStorage_json___default.a);

          case 2:
            storage = _context.sent;
            _context.next = 5;
            return storage.profiles.call(userId);

          case 5:
            profile = _context.sent;
            _profile = _slicedToArray(profile, 6), id = _profile[0], username = _profile[1], firstName = _profile[2], lastName = _profile[3], bio = _profile[4], gravatarEmail = _profile[5];

            if (parseInt(id)) {
              _context.next = 9;
              break;
            }

            throw "Couldn't find user!";

          case 9:
            return _context.abrupt("return", {
              id: parseInt(id),
              username: hexToString(username),
              firstName: hexToString(firstName),
              lastName: hexToString(lastName),
              bio: bio,
              gravatarEmail: gravatarEmail
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getUserInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();
var createUser =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
    var controller,
        addresses,
        _len,
        params,
        _key,
        result,
        _args2 = arguments;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(__WEBPACK_IMPORTED_MODULE_1__provider__["b" /* getInstance */])(__WEBPACK_IMPORTED_MODULE_3__artifacts_UserController_json___default.a);

          case 2:
            controller = _context2.sent;
            _context2.next = 5;
            return __WEBPACK_IMPORTED_MODULE_1__provider__["a" /* eth */].getAccounts();

          case 5:
            addresses = _context2.sent;

            for (_len = _args2.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
              params[_key] = _args2[_key];
            }

            _context2.next = 9;
            return controller.createUser.apply(controller, params.concat([{
              from: addresses[0]
            }]));

          case 9:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function createUser() {
    return _ref2.apply(this, arguments);
  };
}();
var getLoggedInUserId =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3() {
    var addresses, storage, userId;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return __WEBPACK_IMPORTED_MODULE_1__provider__["a" /* eth */].getAccounts();

          case 2:
            addresses = _context3.sent;

            if (addresses) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return");

          case 5:
            _context3.next = 7;
            return Object(__WEBPACK_IMPORTED_MODULE_1__provider__["b" /* getInstance */])(__WEBPACK_IMPORTED_MODULE_2__artifacts_UserStorage_json___default.a);

          case 7:
            storage = _context3.sent;
            _context3.next = 10;
            return storage.addresses.call(addresses[0]);

          case 10:
            userId = _context3.sent;
            return _context3.abrupt("return", parseInt(userId));

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getLoggedInUserId() {
    return _ref3.apply(this, arguments);
  };
}();
var getUserIdFromUsername =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(username) {
    var storage, userId;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Object(__WEBPACK_IMPORTED_MODULE_1__provider__["b" /* getInstance */])(__WEBPACK_IMPORTED_MODULE_2__artifacts_UserStorage_json___default.a);

          case 2:
            storage = _context4.sent;
            _context4.next = 5;
            return storage.usernames.call(username);

          case 5:
            userId = _context4.sent;
            return _context4.abrupt("return", userId);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getUserIdFromUsername(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/home.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "gravatar-url":
/***/ (function(module, exports) {

module.exports = require("gravatar-url");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-moment":
/***/ (function(module, exports) {

module.exports = require("react-moment");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "truffle-contract":
/***/ (function(module, exports) {

module.exports = require("truffle-contract");

/***/ }),

/***/ "web3":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=home.js.map