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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var image = require('./home_btn_power.png');

var styles = {
  container: {
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100%',
    background: '#fff',
    overflow: 'hidden'

  },
  inner: _defineProperty({
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    background: '-webkit-radial-gradient(circle, rgb(66, 215, 243),rgb(22, 175, 203))',
    position: 'absolute',
    top: '50%',
    left: '50%',
    margin: '-140px 0px 0px -90px',
    boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 10px 0px rgba(0, 0, 0, 0.08)',
    textAlign: 'center'
  }, 'position', 'relative'),
  img: _defineProperty({
    width: '80%',
    height: '80%',
    display: 'block',
    margin: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%'
  }, 'margin', '-40% 0px 0px -40%'),
  text: {
    fontSize: '13px',
    top: '106%',
    position: 'absolute',
    width: '100%',
    color: '#717171',
    textAlign: 'center'
  }
};

var PowerPage = function (_Component) {
  _inherits(PowerPage, _Component);

  function PowerPage() {
    _classCallCheck(this, PowerPage);

    return _possibleConstructorReturn(this, (PowerPage.__proto__ || Object.getPrototypeOf(PowerPage)).apply(this, arguments));
  }

  _createClass(PowerPage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          pageStyle = _props.pageStyle,
          boxStyle = _props.boxStyle,
          imageStyle = _props.imageStyle,
          onClick = _props.onClick;

      return _react2.default.createElement(
        'div',
        { style: _extends({}, styles.container, pageStyle) },
        _react2.default.createElement(
          'div',
          { style: _extends({}, styles.inner, boxStyle), onClick: onClick },
          _react2.default.createElement('img', { style: _extends({}, styles.img, imageStyle), src: image }),
          _react2.default.createElement(
            'div',
            { style: styles.text },
            '\u70B9\u51FB\u542F\u52A8\u8BBE\u5907'
          )
        )
      );
    }
  }]);

  return PowerPage;
}(_react.Component);

PowerPage.defaultProps = {
  onClick: function onClick() {},
  boxStyle: {},
  imageStyle: {},
  pageStyle: {}
};
PowerPage.propTypes = {
  onClick: _react.PropTypes.func,
  boxStyle: _react.PropTypes.object,
  imageStyle: _react.PropTypes.object,
  pageStyle: _react.PropTypes.object
};
exports.default = PowerPage;