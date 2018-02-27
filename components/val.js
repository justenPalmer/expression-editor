'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t', '\n\tposition:relative;\n\tdisplay:inline-block;\n'], ['\n\t', '\n\tposition:relative;\n\tdisplay:inline-block;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t', '\n\tposition:absolute;\n\ttop:4px;\n\tright:4px;\n\twidth:16px;\n\theight:26px;\n\tbackground-color:', ';\n'], ['\n\t', '\n\tposition:absolute;\n\ttop:4px;\n\tright:4px;\n\twidth:16px;\n\theight:26px;\n\tbackground-color:', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t', '\n\tline-height:1.8;\n\tborder:1px solid #CFD8DD;\n\tpadding:0 8px;\n\tborder-left:4px solid ', ';\n'], ['\n\t', '\n\tline-height:1.8;\n\tborder:1px solid #CFD8DD;\n\tpadding:0 8px;\n\tborder-left:4px solid ', ';\n']);

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

var Swatch = _styledComponents2.default.div(_templateObject2, _base2.default, function (props) {
	return props.color;
});

var Input = _styledComponents2.default.input(_templateObject3, _base2.default, function (props) {
	return props.theme.color;
});

var Val = function (_React$Component) {
	_inherits(Val, _React$Component);

	/*
 props (obj)
 	pos (str)
 	vector (any)
 	handle (obj)
 */
	function Val(props) {
		_classCallCheck(this, Val);

		var _this = _possibleConstructorReturn(this, (Val.__proto__ || Object.getPrototypeOf(Val)).call(this, props));

		_this.handle = {
			change: function change(e) {
				// reset pos to string
				if (e.target.value == '[') {
					return _this.props.handle.vectorUpdate(_this.props.pos, []);
				}
				if (e.target.value == 'true') {
					return _this.props.handle.vectorUpdate(_this.props.pos, true);
				}
				if (e.target.value == 'false') {
					return _this.props.handle.vectorUpdate(_this.props.pos, false);
				}
				if (e.target.value == 'null') {
					return _this.props.handle.vectorUpdate(_this.props.pos, null);
				}
				/*
    if (e.target.value.match(/^[0-9]+$/))
    	return this.props.handle.vectorUpdate(this.props.pos,Number(e.target.value));
    */
				var value = _this.props.type == 'number' ? Number(e.target.value) : e.target.value;

				_this.props.handle.vectorUpdate(_this.props.pos, value);
			},
			keyUp: function keyUp(e) {
				if (e.key == 'Enter' || e.key == ',') {
					_this.props.handle.focusNextAdd(_this.props.pos);
					// if enter was hit on empty value, focus on next field of parent
				}
				if (e.key == 'Backspace' && e.target.value == '') {
					if (_this.backoutOnce) {
						_this.backoutOnce = false;
						_this.props.handle.focusBackout(_this.props.pos);
						return;
					}
					_this.backoutOnce = true;
				}
				if (e.key == 'ArrowDown') {
					_this.props.handle.focusNext(_this.props.pos);
				}
				if (e.key == 'ArrowUp') {
					_this.props.handle.focusPrev(_this.props.pos);
				}
			},
			focus: function focus(e) {
				_this.props.handle.focusIn(_this.props.pos);
			},
			blur: function blur(e) {
				_this.props.handle.focusOut(_this.props.pos);
			}
		};

		for (var i in _this.handle) {
			_this.handle[i] = _this.handle[i].bind(_this);
		}
		return _this;
	}

	_createClass(Val, [{
		key: 'render',
		value: function render() {

			var inputType = 'text';
			if (this.props.type == 'number') inputType = 'number';

			var value = this.props.type == 'null' ? 'null' : this.props.vector;
			var isFocused = this.props.handle.focusIs(this.props.pos);

			return _react2.default.createElement(
				Container,
				{ theme: this.props.theme },
				_react2.default.createElement(Input, { value: value,
					onBlur: this.handle.blur,
					onChange: this.handle.change,
					onFocus: this.handle.focus,
					onKeyUp: this.handle.keyUp,
					innerRef: function innerRef(input) {
						return input && isFocused && input.focus();
					},
					theme: this.props.theme,
					type: inputType }),
				this.props.type == 'color' && _react2.default.createElement(Swatch, { color: this.props.vector })
			);
		}
	}]);

	return Val;
}(_react2.default.Component);

;

exports.default = Val;