'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t', '\n\tposition:relative;\n\tdisplay:inline-block;\n'], ['\n\t', '\n\tposition:relative;\n\tdisplay:inline-block;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t', '\n\tposition:absolute;\n\ttop:28px;\n\tleft:0;\n\tborder:1px solid #BDBDBD;\n\tbackground-color:#FFFFFF;\n\tz-index:2;\n'], ['\n\t', '\n\tposition:absolute;\n\ttop:28px;\n\tleft:0;\n\tborder:1px solid #BDBDBD;\n\tbackground-color:#FFFFFF;\n\tz-index:2;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t', '\n\tcursor:pointer;\n\tline-height:1.8;\n\tpadding:0 8px;\n\t&:hover{\n\t\tbackground-color:#BDBDBD;\n\t\tcolor:#FFFFFF;\n\t}\n'], ['\n\t', '\n\tcursor:pointer;\n\tline-height:1.8;\n\tpadding:0 8px;\n\t&:hover{\n\t\tbackground-color:#BDBDBD;\n\t\tcolor:#FFFFFF;\n\t}\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tbackground-color:', ';\n\tcolor:#FFFFFF;\n\t&:hover{\n\t\tbackground-color:', ';\n\t}\n'], ['\n\tbackground-color:', ';\n\tcolor:#FFFFFF;\n\t&:hover{\n\t\tbackground-color:', ';\n\t}\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\t', '\n\tposition:relative;\n\tbackground-color:', ';\n\tcolor:#FFFFFF;\n\tdisplay:inline-block;\n\tline-height:1.8;\n\tpadding:0 8px;\n\tcursor:pointer;\n\tborder:1px solid ', ';\n\t&:hover{\n\t\tbackground-color:', ';\n\t}\n'], ['\n\t', '\n\tposition:relative;\n\tbackground-color:', ';\n\tcolor:#FFFFFF;\n\tdisplay:inline-block;\n\tline-height:1.8;\n\tpadding:0 8px;\n\tcursor:pointer;\n\tborder:1px solid ', ';\n\t&:hover{\n\t\tbackground-color:', ';\n\t}\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n\t', '\n\tcolor:#FFFFFF;\n\tline-height:21px;\n\tfont-size:12px;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tpadding:0 8px;\n\tbackground-color:#C62928;\n\tmargin-left:10px;\n'], ['\n\t', '\n\tcolor:#FFFFFF;\n\tline-height:21px;\n\tfont-size:12px;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tpadding:0 8px;\n\tbackground-color:#C62928;\n\tmargin-left:10px;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n\t', '\n\tline-height:1.8;\n\tpadding: 0 8px;\n\tborder:1px solid #CFD8DD;\n'], ['\n\t', '\n\tline-height:1.8;\n\tpadding: 0 8px;\n\tborder:1px solid #CFD8DD;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _base = require('../styles/base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject, _base2.default);

var Dropdown = _styledComponents2.default.ul(_templateObject2, _base2.default);
var Li = _styledComponents2.default.li(_templateObject3, _base2.default);
var ActiveLi = (0, _styledComponents2.default)(Li)(_templateObject4, function (props) {
	return props.theme.color;
}, function (props) {
	return props.theme.colorDk;
});
var Selected = _styledComponents2.default.button(_templateObject5, _base2.default, function (props) {
	return props.theme.color;
}, function (props) {
	return props.theme.color;
}, function (props) {
	return props.theme.colorDk;
});

var Err = _styledComponents2.default.div(_templateObject6, _base2.default);

var Input = _styledComponents2.default.input(_templateObject7, _base2.default);

var Ac = function (_React$Component) {
	_inherits(Ac, _React$Component);

	/*
 props
 	value (str): if defined, select this element from options
 	options (ary): 
 		option (obj):
 			vaLue (str or num):
 	handle (obj)
 		select (fun)
 			value
 		clear (fun)
 */
	function Ac(props) {
		_classCallCheck(this, Ac);

		var _this = _possibleConstructorReturn(this, (Ac.__proto__ || Object.getPrototypeOf(Ac)).call(this, props));

		_this.state = {
			inputValue: '',
			active: null,
			mode: null
		};

		_this.handle = {
			change: function change(e) {
				_this.setState({ inputValue: e.target.value });
				// set active to first matching
				for (var i = 0, len = _this.props.options.length; i < len; i++) {
					if (_this.props.options[i].value.indexOf(e.target.value) !== -1) {
						// is a match
						_this.setState({ active: _this.props.options[i].value });
						return;
					}
				}
				_this.setState({ active: null });
			},
			keyUp: function keyUp(e) {
				if (e.key == 'ArrowDown') {
					var next = _this.state.active === null ? true : false;
					for (var i = 0, len = _this.props.options.length; i < len; i++) {
						if (_this.props.options[i].value.indexOf(e.target.value) === -1) continue; // not a match
						if (next) return _this.setState({ active: _this.props.options[i].value });
						if (_this.props.options[i].value == _this.state.active) {
							// is active
							next = true;
						}
					}
				}
				if (e.key == 'ArrowUp') {
					var _next = false;
					for (var _i = _this.props.options.length - 1; _i >= 0; _i--) {
						if (_this.props.options[_i].value.indexOf(e.target.value) === -1) continue; // not a match
						if (_next) return _this.setState({ active: _this.props.options[_i].value });
						if (_this.props.options[_i].value == _this.state.active) {
							// is active
							_next = true;
						}
					}
				}
				if (e.key == 'Enter') {

					if (_this.state.active !== null) {
						_this.handle.select(_this.state.active);
					}
				}
				if (e.key == 'Backspace' && !_this.state.inputValue) {
					_this.props.handle.backout();
				}
			},

			select: function select(value) {
				_this.setState({ mode: 'view' });
				// if this is focused, move focus to next

				_this.props.handle.select(value);
			},
			liClick: function liClick(value) {
				_this.handle.select(value);
			},
			cancel: function cancel() {
				//this.setState({selected:null});
				_this.props.handle.clear();
			},

			selectedKeyPress: function selectedKeyPress(e) {
				if (e.which === 13 /* Enter */) {
						return e.preventDefault();
					}
			},
			selectedClick: function selectedClick(e) {
				console.log('selected click');
				_this.selectedEnter = true;
				_this.setState({ mode: 'edit' });
				_this.props.handle.selectedClick();
			},
			selectedKeyUp: function selectedKeyUp(e) {
				console.log('selected keyUp', e);
				/*
    if (e.key == 'ArrowDown'){
    	this.props.handle.focusNext();
    }
    if (e.key == 'ArrowUp'){
    	this.props.handle.focusPrev();
    }
    */
				if (e.key == 'Enter') {
					_this.setState({ mode: 'edit' });
				}
				if (e.key == 'Backspace') {
					_this.setState({ mode: 'edit' });
				}
			},

			focus: function focus() {
				_this.props.handle.focus();
			},
			focusIs: function focusIs() {
				return _this.props.handle.focusIs();
			},
			blur: function blur() {
				if (_this.dropdownOver) return;
				_this.props.handle.blur();
			},

			dropdownMouseEnter: function dropdownMouseEnter() {
				_this.dropdownOver = true;
			},
			dropdownMouseLeave: function dropdownMouseLeave() {
				_this.dropdownOver = false;
			}

		};

		for (var i in _this.handle) {
			_this.handle[i] = _this.handle[i].bind(_this);
		}

		return _this;
	}

	_createClass(Ac, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			//console.log('handle change:',this.state.value);
			if (this.props.value !== null && this.props.value.length > 0 && (!this.state.mode || this.state.mode == 'view')) {

				//check if value is valid option, if not show error
				var found = false;
				for (var i = 0, len = this.props.options.length; i < len; i++) {
					var option = this.props.options[i];
					if (option.value == this.props.value) {
						found = true;
					}
				}

				var error = !found ? 'expression not found' : null;

				return _react2.default.createElement(
					Container,
					{ theme: this.props.theme },
					_react2.default.createElement(
						Selected,
						{ type: 'button',
							error: error,
							onBlur: this.handle.blur,
							onClick: this.handle.selectedClick,
							onKeyPress: this.handle.selectedKeyPress,
							onKeyUp: this.handle.selectedKeyUp,
							onFocus: this.handle.focus,
							innerRef: function innerRef(input) {
								return input && _this2.props.focus && input.focus();
							},
							theme: this.props.theme },
						this.props.value
					),
					error && _react2.default.createElement(
						Err,
						null,
						error
					)
				);
			}
			var count = 0;
			return _react2.default.createElement(
				Container,
				{ theme: this.props.theme },
				_react2.default.createElement(Input, { type: 'text',
					onBlur: this.handle.blur,
					onChange: this.handle.change,
					onFocus: this.handle.focus,
					onKeyUp: this.handle.keyUp,
					innerRef: function innerRef(input) {
						return input && _this2.props.focus && input.focus();
					},
					theme: this.props.theme,
					value: this.state.inputValue }),
				this.handle.focusIs() && _react2.default.createElement(
					Dropdown,
					{ theme: this.props.theme,
						onMouseEnter: this.handle.dropdownMouseEnter,
						onMouseLeave: this.handle.dropdownMouseLeave },
					this.props.options.map(function (exp, i) {

						if (exp.value.indexOf(_this2.state.inputValue) === -1) return;
						count++;
						if (count > 10) return;
						if (_this2.state.active == exp.value) {
							return _react2.default.createElement(
								ActiveLi,
								{ theme: _this2.props.theme,
									onClick: function onClick(e) {
										_this2.handle.liClick(exp.value);
									},
									key: exp.value },
								exp.value
							);
						}
						return _react2.default.createElement(
							Li,
							{ theme: _this2.props.theme,
								onClick: function onClick(e) {
									_this2.handle.liClick(exp.value);
								},
								key: exp.value },
							exp.value
						);
					})
				)
			);
		}
	}]);

	return Ac;
}(_react2.default.Component);

;

exports.default = Ac;