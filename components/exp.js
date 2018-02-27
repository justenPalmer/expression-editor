'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t', '\n\tposition:relative;\n\tdisplay:inline-block;\n\tmargin-left:16px;\n'], ['\n\t', '\n\tposition:relative;\n\tdisplay:inline-block;\n\tmargin-left:16px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t', '\n\tposition:absolute;\n\twidth:10px;\n\ttop:14px;\n\tbottom:10px;\n\tborder-left:2px solid ', ';\n\tleft:-14px;\n'], ['\n\t', '\n\tposition:absolute;\n\twidth:10px;\n\ttop:14px;\n\tbottom:10px;\n\tborder-left:2px solid ', ';\n\tleft:-14px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t', '\n\tborder-radius:4px;\n\twidth:16px;\n\theight:16px;\n\tposition:relative;\n\tleft:-9px;\n\ttop:-9px;\n\tcolor:#FFFFFF;\n\tbackground-color:', ';\n\tcursor:pointer;\n\t&:hover{\n\t\tbackground-color:', ';\n\t}\n'], ['\n\t', '\n\tborder-radius:4px;\n\twidth:16px;\n\theight:16px;\n\tposition:relative;\n\tleft:-9px;\n\ttop:-9px;\n\tcolor:#FFFFFF;\n\tbackground-color:', ';\n\tcursor:pointer;\n\t&:hover{\n\t\tbackground-color:', ';\n\t}\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\t', '\n\tposition:relative;\n\twidth:6px;\n\theight:8px;\n\tborder-left:6px solid #FFFFFF;\n\tborder-top:4px solid transparent;\n\tborder-bottom:4px solid transparent;\n\ttop:4px;\n\tleft:6px;\n'], ['\n\t', '\n\tposition:relative;\n\twidth:6px;\n\theight:8px;\n\tborder-left:6px solid #FFFFFF;\n\tborder-top:4px solid transparent;\n\tborder-bottom:4px solid transparent;\n\ttop:4px;\n\tleft:6px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\t', '\n\tposition:relative;\n\twidth:8px;\n\theight:6px;\n\tborder-left:4px solid transparent;\n\tborder-right:4px solid transparent;\n\tborder-top:6px solid #FFFFFF;\n\ttop:6px;\n\tleft:4px;\n'], ['\n\t', '\n\tposition:relative;\n\twidth:8px;\n\theight:6px;\n\tborder-left:4px solid transparent;\n\tborder-right:4px solid transparent;\n\tborder-top:6px solid #FFFFFF;\n\ttop:6px;\n\tleft:4px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n\t', '\n\twidth:4px;\n\theight:4px;\n\tposition:absolute;\n\tleft:-3px;\n\tbottom:-3px;\n\tcolor:#FFFFFF;\n\tbackground-color:', ';\n'], ['\n\t', '\n\twidth:4px;\n\theight:4px;\n\tposition:absolute;\n\tleft:-3px;\n\tbottom:-3px;\n\tcolor:#FFFFFF;\n\tbackground-color:', ';\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n\t', '\n\tposition:absolute;\n\tleft:-16px;\n\ttop:10px;\n\tborder-radius:4px;\n\twidth:6px;\n\theight:6px;\n\tborder:2px solid #333;\n\tbackground-color:#FFFFFF;\n\tz-index:2;\n'], ['\n\t', '\n\tposition:absolute;\n\tleft:-16px;\n\ttop:10px;\n\tborder-radius:4px;\n\twidth:6px;\n\theight:6px;\n\tborder:2px solid #333;\n\tbackground-color:#FFFFFF;\n\tz-index:2;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n\t', '\n\tposition:relative;\n\t', '\n'], ['\n\t', '\n\tposition:relative;\n\t', '\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n\t', '\n\tposition:absolute;\n\tbottom:0;\n\ttop:16px;\n\tleft:-16px;\n\tbackground-color:#FAFAFA;\n\twidth:4px;\n\tz-index:1;\n'], ['\n\t', '\n\tposition:absolute;\n\tbottom:0;\n\ttop:16px;\n\tleft:-16px;\n\tbackground-color:#FAFAFA;\n\twidth:4px;\n\tz-index:1;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ac = require('./ac');

var _ac2 = _interopRequireDefault(_ac);

var _pos = require('./pos');

var _pos2 = _interopRequireDefault(_pos);

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

var Tack = _styledComponents2.default.div(_templateObject2, _base2.default, function (props) {
	return props.focus ? props.theme.colorLt : props.theme.color;
});

var Top = _styledComponents2.default.div(_templateObject3, _base2.default, function (props) {
	return props.focus ? props.theme.colorLt : props.theme.color;
}, function (props) {
	return props.theme.colorDk;
});

var ArrowRight = _styledComponents2.default.div(_templateObject4, _base2.default);

var ArrowDown = _styledComponents2.default.div(_templateObject5, _base2.default);

var Bottom = _styledComponents2.default.div(_templateObject6, _base2.default, function (props) {
	return props.focus ? props.theme.colorLt : props.theme.color;
});

var Dot = _styledComponents2.default.div(_templateObject7, _base2.default);

var Row = _styledComponents2.default.div(_templateObject8, _base2.default, function (props) {
	return props.expanded ? 'clear:both;' : 'display:inline-block;';
});

var LineEnd = _styledComponents2.default.div(_templateObject9, _base2.default);

var expressions = [{ value: 'array', category: 'type', returns: 'array' }, { value: 'boolean', category: 'type', returns: 'boolean' }, { value: 'literal', category: 'type', returns: ['array', 'object'] }, { value: 'number', category: 'type', returns: 'number' }, { value: 'string', category: 'type', returns: 'string' }, { value: 'to-boolean', category: 'type', returns: 'boolean' }, { value: 'to-color', category: 'type', returns: 'color' }, { value: 'to-number', category: 'type', returns: 'number' }, { value: 'to-string', category: 'type', returns: 'string' }, { value: 'typeof', category: 'type', returns: 'string' }, { value: 'geometry-type', category: 'feature' }, { value: 'id', category: 'feature' }, { value: 'properties', category: 'feature' }, { value: 'at', category: 'feature' }, { value: 'get', category: 'feature' }, { value: 'has', category: 'feature' }, { value: 'length', category: 'feature' }, { value: '!', category: 'feature' }, { value: '!=', category: 'feature' }, { value: '>', category: 'feature' }, { value: '<', category: 'feature' }, { value: '>=', category: 'feature' }, { value: '<=', category: 'feature' }, { value: '==', category: 'feature' }, { value: 'all', category: 'feature' }, { value: 'any', category: 'feature' }, { value: 'case', category: 'feature' }, { value: 'coalesce', category: 'feature' }, { value: 'match', category: 'feature' }, { value: 'interpolate', category: 'feature' }, { value: 'step', category: 'feature' }, { value: 'let', category: 'feature' }, { value: 'var', category: 'feature' }, { value: 'concat', category: 'feature' }, { value: 'downcase', category: 'feature' }, { value: 'upcase', category: 'feature' }, { value: 'rgb', category: 'feature' }, { value: 'rgba', category: 'feature' }, { value: 'to-rgba', category: 'feature' }, { value: '-', category: 'feature' }, { value: '*', category: 'feature' }, { value: '/', category: 'feature' }, { value: '%', category: 'feature' }, { value: '^', category: 'feature' }, { value: '+', category: 'feature' }, { value: 'acos', category: 'feature' }, { value: 'asin', category: 'feature' }, { value: 'atan', category: 'feature' }, { value: 'cos', category: 'feature' }, { value: 'e', category: 'feature' }, { value: 'ln', category: 'feature' }, { value: 'ln2', category: 'feature' }, { value: 'log10', category: 'feature' }, { value: 'log2', category: 'feature' }, { value: 'max', category: 'feature' }, { value: 'min', category: 'feature' }, { value: 'pi', category: 'feature' }, { value: 'sin', category: 'feature' }, { value: 'sqrt', category: 'feature' }, { value: 'tan', category: 'feature' }, { value: 'zoom', category: 'feature' }, { value: 'heatmap-density', category: 'feature' }];

var Exp = function (_React$Component) {
	_inherits(Exp, _React$Component);

	/*
 props (obj)
 	pos (str)
 	vector (any)
 	handle (obj)
 */
	function Exp(props) {
		_classCallCheck(this, Exp);

		var _this = _possibleConstructorReturn(this, (Exp.__proto__ || Object.getPrototypeOf(Exp)).call(this, props));

		_this.state = {
			expanded: true
		};

		_this.handle = {
			argAdd: function argAdd() {
				var pos = _this.props.pos + '.' + _this.props.vector.length;
				_this.props.handle.vectorUpdate(pos, '');
				_this.props.handle.focusFromTo(_this.props.pos, pos);
			},
			topClick: function topClick() {
				if (_this.state.expanded) _this.setState({ expanded: false });else _this.setState({ expanded: true });
			}
		};

		_this.acHandle = {
			backout: function backout(e) {
				// reset pos to string
				console.log('backout ac');
				if (_this.backoutOnce) {
					_this.backoutOnce = false;
					_this.props.handle.focusBackout(_this.props.pos);
					return;
				}
				_this.backoutOnce = true;
			},
			select: function select(value) {
				var typePos = _this.props.pos + '.0';
				_this.props.handle.vectorUpdate(typePos, value);
				_this.props.handle.focusNextAdd(typePos, _this.props.pos);
			},
			clear: function clear() {
				_this.props.handle.vectorUpdate(_this.props.pos, []);
			},
			selectedClick: function selectedClick() {
				_this.props.handle.focusIn(_this.props.pos);
			},
			focusIs: function focusIs() {
				return _this.props.handle.focusIs(_this.props.pos);
			},
			focus: function focus() {
				_this.props.handle.focusIn(_this.props.pos);
			},
			blur: function blur() {
				_this.props.handle.focusOut(_this.props.pos);
			},
			focusNext: function focusNext() {
				_this.props.handle.focusNext(_this.props.pos);
			},
			focusPrev: function focusPrev() {
				_this.props.handle.focusPrev(_this.props.pos);
			}
		};

		for (var i in _this.handle) {
			_this.handle[i] = _this.handle[i].bind(_this);
		}
		for (var _i in _this.acHandle) {
			_this.acHandle[_i] = _this.acHandle[_i].bind(_this);
		}
		return _this;
	}

	_createClass(Exp, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var type = this.props.vector.length < 1 ? '' : this.props.vector[0];
			var args = this.props.vector.length < 2 ? [] : this.props.vector.slice(1);

			var isFocused = this.props.handle.focusIs(this.props.pos);

			return _react2.default.createElement(
				Container,
				{ theme: this.props.theme, focus: isFocused },
				_react2.default.createElement(
					Tack,
					{ expanded: this.state.expanded },
					_react2.default.createElement(
						Top,
						{ theme: this.props.theme, onClick: this.handle.topClick },
						this.state.expanded ? _react2.default.createElement(ArrowDown, null) : _react2.default.createElement(ArrowRight, null)
					)
				),
				_react2.default.createElement(_ac2.default, { options: expressions, handle: this.acHandle, value: type, focus: isFocused,
					theme: this.props.theme }),
				type != null && this.state.expanded && args.map(function (arg, i) {
					//console.log('loop arg:',arg,i);
					var pos = _this2.props.pos + '.' + (i + 1);
					return _react2.default.createElement(
						Row,
						{ expanded: _this2.state.expanded },
						_react2.default.createElement(Dot, { theme: _this2.props.theme }),
						_react2.default.createElement(_pos2.default, { expanded: _this2.state.expanded, key: pos, pos: pos, vector: arg,
							handle: _this2.props.handle, theme: _this2.props.theme }),
						i == args.length - 1 && _react2.default.createElement(LineEnd, null)
					);
				})
			);
		}
	}]);

	return Exp;
}(_react2.default.Component);

;

exports.default = Exp;