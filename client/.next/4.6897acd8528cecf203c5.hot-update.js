webpackHotUpdate(4,{

/***/ "./components/TweetComposer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposeModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("../node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__web3_tweets__ = __webpack_require__("./web3/tweets.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button__ = __webpack_require__("./components/Button.js");

var _jsxFileName = "/home/tsinghua-yincheng/\u684C\u9762/twitter/client/components/TweetComposer.js";



(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ComposeModal;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);


;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ComposeModal, "ComposeModal", "/home/tsinghua-yincheng/\u684C\u9762/twitter/client/components/TweetComposer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./web3/tweets.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createTweet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTweetInfo; });
/* unused harmony export getTweetIdsFromUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loadTweetsFromTweetPromises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLatestTweetIds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider__ = __webpack_require__("./web3/provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artifacts_TweetStorage_json__ = __webpack_require__("./web3/artifacts/TweetStorage.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artifacts_TweetStorage_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__artifacts_TweetStorage_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artifacts_TweetController_json__ = __webpack_require__("./web3/artifacts/TweetController.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artifacts_TweetController_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__artifacts_TweetController_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users__ = __webpack_require__("./web3/users.js");


(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(createTweet, "createTweet", "/home/tsinghua-yincheng/\u684C\u9762/twitter/client/web3/tweets.js");
  reactHotLoader.register(getTweetInfo, "getTweetInfo", "/home/tsinghua-yincheng/\u684C\u9762/twitter/client/web3/tweets.js");
  reactHotLoader.register(getTweetIdsFromUser, "getTweetIdsFromUser", "/home/tsinghua-yincheng/\u684C\u9762/twitter/client/web3/tweets.js");
  reactHotLoader.register(loadTweetsFromTweetPromises, "loadTweetsFromTweetPromises", "/home/tsinghua-yincheng/\u684C\u9762/twitter/client/web3/tweets.js");
  reactHotLoader.register(getLatestTweetIds, "getLatestTweetIds", "/home/tsinghua-yincheng/\u684C\u9762/twitter/client/web3/tweets.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.6897acd8528cecf203c5.hot-update.js.map