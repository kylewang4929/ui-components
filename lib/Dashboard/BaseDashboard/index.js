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

require('./style');

var styles = {
  container: {
    position: 'relative',
    width: '220px',
    height: '220px',
    margin: 'auto'
  },
  dashboardImage: {
    display: 'block',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: '0px',
    right: '0px'
  },
  content: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    top: '50%',
    marginTop: '-60px',
    color: '#fff'
  },
  title: {
    fontSize: '12px'
  },
  value: {
    position: 'relative',
    padding: '2px 0px 8px 0px',
    lineHeight: '1'
  },
  valueText: {
    fontSize: '80px',
    position: 'relative'
  },
  unit: {
    fontSize: '16px',
    position: 'absolute',
    right: '-14px',
    top: '16px'
  },
  state: {
    fontSize: '12px',
    display: 'inline-block',
    position: 'relative',
    padding: '0px 0px 0px 18px'
  }
};

var dashboardImage = require('./dashboard.png');

var BaseDashboard = function (_Component) {
  _inherits(BaseDashboard, _Component);

  function BaseDashboard() {
    _classCallCheck(this, BaseDashboard);

    return _possibleConstructorReturn(this, (BaseDashboard.__proto__ || Object.getPrototypeOf(BaseDashboard)).apply(this, arguments));
  }

  _createClass(BaseDashboard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          icon = _props.icon,
          them = _props.them;

      return _react2.default.createElement(
        'div',
        { className: 'base-dashboard ' + them, style: styles.container },
        _react2.default.createElement('img', { src: dashboardImage, style: styles.dashboardImage }),
        _react2.default.createElement(
          'div',
          { style: styles.content },
          _react2.default.createElement(
            'div',
            { className: 'title', style: Object.assign({}, styles.title, this.props.titleStyle) },
            this.props.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'value', style: styles.value },
            _react2.default.createElement(
              'span',
              { className: 'transparent-text', style: Object.assign({}, styles.valueText, this.props.valueStyle) },
              value
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'state', style: Object.assign({}, styles.state, this.props.tipsStyle) },
            this.props.tips
          )
        )
      );
    }
  }]);

  return BaseDashboard;
}(_react.Component);

BaseDashboard.defaultProps = {
  value: 10,
  tips: '制冷中',
  title: '设置温度',
  titleStyle: {},
  tipsStyle: {},
  valueStyle: {},
  them: 'cold'
};

BaseDashboard.propTypes = {
  value: _react.PropTypes.number,
  tips: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
  title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
  titleStyle: _react.PropTypes.object,
  tipsStyle: _react.PropTypes.object,
  valueStyle: _react.PropTypes.object,
  them: _react.PropTypes.string
};

exports.default = BaseDashboard;