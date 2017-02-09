'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./style.css');
var bg = require('./wave.png');

var styles = {
  container: {
    position: 'relative',
    width: '210px',
    height: '210px',
    margin: 'auto'
  },
  background: {
    color: '#fff'
  },
  unit: {
    fontSize: '12px',
    color: '#a7a7a7',
    position: 'absolute',
    display: 'block',
    textAlign: 'center',
    width: '100%',
    top: '50%',
    marginTop: '24px'
  }
};

var WaterDashboard = function (_Component) {
  _inherits(WaterDashboard, _Component);

  function WaterDashboard() {
    _classCallCheck(this, WaterDashboard);

    return _possibleConstructorReturn(this, (WaterDashboard.__proto__ || Object.getPrototypeOf(WaterDashboard)).apply(this, arguments));
  }

  _createClass(WaterDashboard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          unit = _props.unit,
          valueStyle = _props.valueStyle,
          unitStyle = _props.unitStyle,
          waveColor = _props.waveColor;

      return _react2.default.createElement(
        'div',
        { className: 'water-dashboard', style: styles.container },
        _react2.default.createElement(
          'div',
          { className: 'welcome' },
          _react2.default.createElement('div', { className: 'wave', style: { backgroundColor: waveColor } }),
          _react2.default.createElement('div', { className: 'wave-block', style: { backgroundColor: waveColor } })
        ),
        _react2.default.createElement(
          'span',
          { className: 'water-dashboard-content-text', style: Object.assign({}, styles.valueText, valueStyle) },
          value
        ),
        _react2.default.createElement(
          'span',
          { style: Object.assign({}, styles.unit, unitStyle) },
          unit
        )
      );
    }
  }]);

  return WaterDashboard;
}(_react.Component);

WaterDashboard.defaultProps = {
  value: 10,
  unit: 'TDS',
  valueStyle: {},
  unitStyle: {},
  waveColor: '#0cdaff'
};
exports.default = WaterDashboard;