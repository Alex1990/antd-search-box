webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(282);


/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(3);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(72);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	__webpack_require__(80);
	
	__webpack_require__(81);
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(113);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _antdSearchBox = __webpack_require__(259);
	
	var _antdSearchBox2 = _interopRequireDefault(_antdSearchBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = function (_Component) {
	  (0, _inherits3.default)(App, _Component);
	
	  function App(props) {
	    (0, _classCallCheck3.default)(this, App);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));
	
	    _this.state = {
	      value: undefined,
	      keyword: undefined
	    };
	    return _this;
	  }
	
	  App.prototype.handleChange = function handleChange(value) {
	    this.setState({ value: value });
	  };
	
	  App.prototype.handleSearch = function handleSearch(value) {
	    this.setState({ keyword: value });
	  };
	
	  App.prototype.handleFocus = function handleFocus() {
	    console.log('focus event');
	  };
	
	  App.prototype.handleBlur = function handleBlur() {
	    console.log('blur event');
	  };
	
	  App.prototype.render = function render() {
	    var _state = this.state,
	        value = _state.value,
	        keyword = _state.keyword;
	
	    return _react2.default.createElement(
	      'div',
	      { style: { margin: 32, width: 300 } },
	      _react2.default.createElement(
	        'div',
	        null,
	        'Current value: ',
	        value
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        'Press `Enter/Return` to search: ',
	        keyword
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_antdSearchBox2.default, {
	          value: value,
	          placeholder: 'Type the keyword',
	          onFocus: this.handleFocus.bind(this),
	          onBlur: this.handleBlur.bind(this),
	          onChange: this.handleChange.bind(this),
	          onSearch: this.handleSearch.bind(this)
	        })
	      )
	    );
	  };
	
	  return App;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=basic.js.map