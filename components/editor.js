'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t', '\n\tposition:relative;\n\tmax-width:500px;\n\tmargin:60px auto;\n'], ['\n\t', '\n\tposition:relative;\n\tmax-width:500px;\n\tmargin:60px auto;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t', '\n\tfont-size:24px;\n\tline-height:1.6;\n\tfont-weight:normal;\n'], ['\n\t', '\n\tfont-size:24px;\n\tline-height:1.6;\n\tfont-weight:normal;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t', '\n\tposition:relative;\n\tbackground-color:#FAFAFA;\n\tborder:1px solid #CFD8DD;\n\tpadding:4px 12px 12px 12px;\n\tfont-size:12px;\n'], ['\n\t', '\n\tposition:relative;\n\tbackground-color:#FAFAFA;\n\tborder:1px solid #CFD8DD;\n\tpadding:4px 12px 12px 12px;\n\tfont-size:12px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\t', '\n\tposition:relative;\n\tbackground-color:#FFFFFF;\n\tborder:1px solid #cccccc;\n\tpadding:8px;\n\twidth:100%;\n\tmin-height:120px;\n\tfont-size:14px;\n\tline-height:1.6;\n\tresize: none;\n'], ['\n\t', '\n\tposition:relative;\n\tbackground-color:#FFFFFF;\n\tborder:1px solid #cccccc;\n\tpadding:8px;\n\twidth:100%;\n\tmin-height:120px;\n\tfont-size:14px;\n\tline-height:1.6;\n\tresize: none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
var H2 = _styledComponents2.default.h2(_templateObject2, _base2.default);
var EditorBox = _styledComponents2.default.div(_templateObject3, _base2.default);
var Textarea = _styledComponents2.default.textarea(_templateObject4, _base2.default);

var Editor = function (_React$Component) {
	_inherits(Editor, _React$Component);

	/*
 props (obj)
 */
	function Editor(props) {
		_classCallCheck(this, Editor);

		var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));

		_this.state = {
			vector: [''],
			focusCur: '0'
		};
		_this.handle = {
			vectorAdd: function vectorAdd(pos, val) {
				// adds afer this pos
				var vector = _this.state.vector.slice(),
				    inds = pos.split('.'),
				    cur = vector;
				if (inds.length < 2) return; // do not allow more than one base node
				inds.forEach(function (ind, i) {
					if (i == inds.length - 1) cur.splice(ind + 1, 0, val);else cur = cur[ind];
				});
				_this.vectorSet(vector);
			},
			vectorUpdate: function vectorUpdate(pos, val) {
				var vector = _this.state.vector.slice(),
				    inds = pos.split('.'),
				    cur = vector;
				inds.forEach(function (ind, i) {
					if (i == inds.length - 1) cur[ind] = val;else cur = cur[ind];
				});
				_this.vectorSet(vector);
			},
			vectorRemove: function vectorRemove(pos) {
				var vector = _this.state.vector.slice(),
				    inds = pos.split('.'),
				    cur = vector;
				inds.forEach(function (ind, i) {
					if (i == inds.length - 1) cur.splice(ind, 1);else cur = cur[ind];
				});
				_this.vectorSet(vector);
			},

			textareaUpdate: function textareaUpdate(e) {
				//add delay
				var value = e.target.value;
				_this.setState({ vectorStr: value });
				var obj = _this.vectorObj(value);
				if (obj !== undefined) {
					_this.setState({ vector: [obj] });
				}
			},

			isDefined: function isDefined(pos) {
				return _this.getVectorItem(pos) === undefined ? false : true;
			},

			focusIs: function focusIs(pos) {
				return _this.state.focusCur == pos ? true : false;
			},
			focusIn: function focusIn(pos) {
				//console.log('focus in:',pos);
				_this.setState({ focusCur: pos });
			},
			focusNext: function focusNext(pos) {
				// move focus to next pos, if doesn't exist make it
				// get next pos
				var nextPos = _this.getNextPos(pos);
				if (!_this.handle.isDefined(nextPos)) return;
				_this.handle.focusFromTo(pos, nextPos);
			},
			focusNextAdd: function focusNextAdd(pos, focusPos) {
				// move focus to next pos, if doesn't exist make it
				// get next pos
				var nextPos = _this.getNextPos(pos);
				if (!_this.handle.isDefined(nextPos)) {
					console.log('next pos not defined:', _this.handle.isDefined(nextPos), pos, nextPos);
					_this.handle.vectorUpdate(nextPos, '');
				}
				_this.handle.focusFromTo(focusPos || pos, nextPos);
			},
			focusFromTo: function focusFromTo(fromPos, toPos) {
				// move focus to a pos
				if (_this.handle.focusIs(fromPos)) {
					_this.focusPrev = fromPos;
					_this.handle.focusIn(toPos);
				}
			},
			focusPrev: function focusPrev(pos) {
				// move focus to next pos, if doesn't exist make it
				// get next pos
				var prevPos = _this.getPrevPos(pos);
				if (!_this.handle.isDefined(prevPos)) return;
				_this.handle.focusFromTo(pos, prevPos);
			},
			focusBackout: function focusBackout(pos) {
				var prevPos = _this.getPrevPos(pos);
				if (pos == '0') {
					_this.handle.vectorUpdate(pos, '');
					return;
				}
				_this.handle.focusFromTo(pos, prevPos);
				_this.handle.vectorRemove(pos);
			},

			focusOut: function focusOut(pos) {
				//console.log('focus out:',pos);
				// do not reset if another focus action triggered change
				if (_this.focusPrev == pos) {
					_this.focusPrev = null;
					return;
				}
				_this.setState({ focusCur: null });
			},
			focusUp: function focusUp(pos) {

				// move focus up
			},
			focusRight: function focusRight(pos) {
				// move focus in deeper
			},
			focusLeft: function focusLeft(pos) {
				// move focus out
			},
			focusDown: function focusDown(pos) {
				// move focus down

				// look through vectors

				/*
    let inds = pos.split('.');
    inds[inds.length-1]++;
    let nextPos = inds.join('.');
    	let nextVector = this.getVectorItem(nextPos);
    	if (nextVector) this.handle.focusIn(nextPos);
    */
			},
			focusAdd: function focusAdd(pos) {
				_this.focusPrev = pos;

				// if zero, do not allow new 
				// move focus down, if no element make a new one
			}
		};
		for (var i in _this.handle) {
			_this.handle[i] = _this.handle[i].bind(_this);
		}
		return _this;
	}

	_createClass(Editor, [{
		key: 'getNextPos',
		value: function getNextPos(pos) {
			var inds = pos.split('.');
			inds[inds.length - 1]++;
			return inds.join('.');
		}
	}, {
		key: 'getPrevPos',
		value: function getPrevPos(pos) {
			var inds = pos.split('.');
			inds[inds.length - 1]--;
			if (inds[inds.length - 1] < 1) {
				inds.pop();
			}
			return inds.join('.');
		}
	}, {
		key: 'getVectorItem',
		value: function getVectorItem(pos, vector) {
			if (vector === undefined) vector = this.state.vector;
			var bits = pos.split('.');
			if (bits.length < 0 || pos.length < 1) return vector;
			if (bits.length > 0) {
				var bit = bits.shift();
				if (vector[bit] === undefined) return;
				return this.getVectorItem(bits.join('.'), vector[bit]);
			}
		}
	}, {
		key: 'vectorSet',
		value: function vectorSet(vector) {
			this.setState({ vector: vector });
			this.setState({ vectorStr: this.vectorStr(vector[0]) });
		}
	}, {
		key: 'vectorStr',
		value: function vectorStr(vector) {
			try {
				return JSON.stringify(vector);
			} catch (e) {
				// throw error
				return console.error('vector error');
			}
		}
	}, {
		key: 'vectorObj',
		value: function vectorObj(vector) {
			try {
				return JSON.parse(vector);
			} catch (e) {
				// throw error
				return console.error('vector error');
			}
		}
	}, {
		key: 'render',
		value: function render(props) {
			var _this2 = this;

			return _react2.default.createElement(
				Container,
				null,
				_react2.default.createElement(
					H2,
					null,
					'Expression Editor'
				),
				_react2.default.createElement(
					EditorBox,
					null,
					_react2.default.createElement(_pos2.default, { ref: function ref(instance) {
							_this2.entry = instance;
						}, pos: '0',
						vector: this.state.vector[0], handle: this.handle })
				),
				_react2.default.createElement(Textarea, { onChange: this.handle.textareaUpdate, value: this.state.vectorStr })
			);
		}
	}]);

	return Editor;
}(_react2.default.Component);

;

exports.default = Editor;