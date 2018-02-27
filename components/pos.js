'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t', '\n\tposition:relative;\n\tmargin:8px 0 0 0;\n\t', '\n'], ['\n\t', '\n\tposition:relative;\n\tmargin:8px 0 0 0;\n\t', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _val = require('./val');

var _val2 = _interopRequireDefault(_val);

var _exp = require('./exp');

var _exp2 = _interopRequireDefault(_exp);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _base = require('../styles/base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject, _base2.default, function (props) {
	return props.expanded ? 'clear:both;' : 'display:inline-block;';
});

var themes = {
	exp: { color: '#424242', colorLt: '#616161', colorDk: '#212121' },
	string: { color: '#1E88E5', colorLt: '#2196F3', colorDk: '#1A75D3' },
	number: { color: '#679E38', colorLt: '#7CB341', colorDk: '#558A30' },
	bool: { color: '#9C27B0', colorLt: '#AB47BC', colorDk: '#8E24AA' },
	color: { color: '#424242', colorLt: '#616161', colorDk: '#212121' },
	null: { color: '#424242', colorLt: '#616161', colorDk: '#212121' }
};

var Pos = function (_React$Component) {
	_inherits(Pos, _React$Component);

	/*
 props (obj)
 	pos (str)
 	vector (any)
 	handle (obj)
 */
	function Pos(props) {
		_classCallCheck(this, Pos);

		return _possibleConstructorReturn(this, (Pos.__proto__ || Object.getPrototypeOf(Pos)).call(this, props));
	}

	_createClass(Pos, [{
		key: 'render',
		value: function render() {
			this.type = 'string';
			if (Object.prototype.toString.call(this.props.vector) == '[object Array]') {
				this.type = 'exp';
			} else if (this.props.vector && typeof this.props.vector == 'number') {
				this.type = 'number';
			} else if (this.props.vector === true || this.props.vector === false) {
				this.type = 'bool';
			} else if (this.props.vector === null) {
				this.type = 'null';
			} else if (this.props.vector && typeof this.props.vector == 'string') {
				if (this.props.vector.match(/^[0-9]+$/)) this.type = 'number';
				if (this.props.vector.indexOf('#') == 0) this.type = 'color';
			}

			var theme = themes[this.type];
			console.log('theme:', this.type, theme);

			return _react2.default.createElement(
				Container,
				{ expanded: this.props.expanded },
				this.type == 'exp' ? _react2.default.createElement(_exp2.default, { pos: this.props.pos, vector: this.props.vector, handle: this.props.handle,
					theme: theme }) : _react2.default.createElement(_val2.default, { pos: this.props.pos, vector: this.props.vector, handle: this.props.handle,
					type: this.type, theme: theme })
			);
		}
	}]);

	return Pos;
}(_react2.default.Component);

;

exports.default = Pos;