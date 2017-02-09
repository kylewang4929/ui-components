'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./style.css');

var styles = {
  container: {
    textAlign: 'center',
    boxSizing: 'border-box'
  },
  inner: {
    display: 'inline-block',
    width: '70%',
    maxWidth: '300px',
    margin: 'auto',
    position: 'relative',
    fontSize: '12px'
  },
  item: {
    display: 'inline-block',
    width: '50%',
    overflow: 'hidden',
    textAlign: 'center',
    color: '#fff',
    boxSizing: 'border-box',
    padding: '20px 0px 20px 0px'
  },
  verticalLine: {
    position: 'absolute',
    height: '100%',
    width: '1px',
    backgroundColor: 'rgba(255,255,255,0.3)',
    left: '50%',
    top: '0px'
  },
  horizontalLine: {
    position: 'absolute',
    height: '1px',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    top: '50%',
    left: '0px'
  },
  label: {
    marginBottom: '6px',
    color: 'rgba(255,255,255,0.6)'
  },
  value: {
    fontSize: '30px'
  },
  unit: {
    fontSize: '12px',
    marginLeft: '4px',
    color: 'rgba(255,255,255,0.6)'
  }
};

var InfoPanel = function (_Component) {
  _inherits(InfoPanel, _Component);

  function InfoPanel() {
    _classCallCheck(this, InfoPanel);

    return _possibleConstructorReturn(this, (InfoPanel.__proto__ || Object.getPrototypeOf(InfoPanel)).apply(this, arguments));
  }

  _createClass(InfoPanel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          lineStyle = _props.lineStyle,
          data = _props.data,
          labelStyle = _props.labelStyle,
          valueStyle = _props.valueStyle,
          unitStyle = _props.unitStyle;

      var infoData = Object.assign([], data);
      if (infoData.length > 4) {
        infoData = infoData.slice(0, 4);
      }

      var lineDom = null;
      if (infoData.length > 1 && infoData.length <= 2) {
        lineDom = _react2.default.createElement('div', { style: _extends({}, styles.verticalLine, lineStyle) });
      }

      if (infoData.length > 2) {
        lineDom = [_react2.default.createElement('div', { key: 'border1', style: _extends({}, styles.verticalLine, lineStyle) }), _react2.default.createElement('div', { key: 'border2', style: _extends({}, styles.horizontalLine) })];
      }

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          'div',
          { style: styles.inner },
          data.map(function (item, index) {

            var padding = {};
            if (index < 2) {
              padding = {
                paddingTop: '10px',
                paddingBottom: '10px'
              };
            } else {
              padding = {
                paddingTop: '20px',
                paddingBottom: '6px'
              };
            }

            return _react2.default.createElement(
              'div',
              { style: _extends({}, styles.item, padding), key: index },
              _react2.default.createElement(
                'div',
                { style: _extends({}, styles.label, labelStyle) },
                item.label
              ),
              _react2.default.createElement(
                'div',
                { style: _extends({}, styles.value, valueStyle) },
                item.value,
                _react2.default.createElement(
                  'span',
                  { style: _extends({}, styles.unit, unitStyle) },
                  item.unit
                )
              )
            );
          }),
          lineDom
        )
      );
    }
  }]);

  return InfoPanel;
}(_react.Component);

InfoPanel.defaultProps = {
  data: [],
  lineStyle: {},
  labelStyle: {},
  valueStyle: {},
  unitStyle: {}
};

InfoPanel.propTypes = {
  data: _react.PropTypes.array,
  lineStyle: _react.PropTypes.object,
  labelStyle: _react.PropTypes.object,
  valueStyle: _react.PropTypes.object,
  unitStyle: _react.PropTypes.object
};
exports.default = InfoPanel;