'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Slider = require('./Slider.js');

var _Slider2 = _interopRequireDefault(_Slider);

var _Range = require('./Range.js');

var _Range2 = _interopRequireDefault(_Range);

var _Handle = require('./Handle.js');

var _Handle2 = _interopRequireDefault(_Handle);

var _createSliderWithTooltip = require('./createSliderWithTooltip.js');

var _createSliderWithTooltip2 = _interopRequireDefault(_createSliderWithTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./style.css');

_Slider2.default.Range = _Range2.default;
_Slider2.default.Handle = _Handle2.default;
_Slider2.default.createSliderWithTooltip = _createSliderWithTooltip2.default;
exports.default = _Slider2.default;