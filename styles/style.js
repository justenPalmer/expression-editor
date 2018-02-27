'use strict';

var me = module.exports = {};

var base = {
	margin: 0,
	padding: 0,
	boxSizing: 'border-box',
	fontFamily: 'sans-serif',
	lineHeight: 1.15,
	WebkitTextSizeAdjust: '100%',
	MsTextSizeAdjust: '100%',
	MsOverflowStyle: 'scrollbar',
	WebkitTapHighlightColor: 'transparent',
	fontSize: '16px'
};

me.get = function (extend) {
	var style = {};
	for (var i in base) {
		style[i] = base[i];
	}
	if (extend) {
		for (var _i in extend) {
			style[_i] = extend[_i];
		}
	}
	return style;
};