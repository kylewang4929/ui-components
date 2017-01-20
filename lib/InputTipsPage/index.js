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

var styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0px',
    top: '0px',
    backgroundColor: '#fff'
  },
  verticalOuter: {
    display: 'table',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    paddingBottom: '100px'
  },
  verticalMiddle: {
    display: 'table-cell',
    verticalAlign: 'middle',
    width: '100%',
    height: '100%',
    textAlign: 'center'
  },
  text: {
    fontSize: '12px',
    color: '#828282'
  },
  icon: {
    color: '#828282',
    fontSize: '70px',
    position: 'absolute',
    left: '50%',
    marginLeft: '-35px',
    marginTop: '-100px'
  }
};

var InputTipsPage = function (_Component) {
  _inherits(InputTipsPage, _Component);

  function InputTipsPage() {
    _classCallCheck(this, InputTipsPage);

    return _possibleConstructorReturn(this, (InputTipsPage.__proto__ || Object.getPrototypeOf(InputTipsPage)).apply(this, arguments));
  }

  _createClass(InputTipsPage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          pageStyle = _props.pageStyle,
          iconStyle = _props.iconStyle,
          textStyle = _props.textStyle,
          icon = _props.icon,
          text = _props.text;

      return _react2.default.createElement(
        'div',
        { style: _extends({}, styles.container, styles.verticalOuter, pageStyle) },
        _react2.default.createElement(
          'div',
          { style: _extends({}, styles.box, styles.verticalMiddle) },
          _react2.default.createElement('i', { className: icon, style: _extends({}, styles.icon, iconStyle) }),
          _react2.default.createElement(
            'span',
            { style: _extends({}, styles.text, textStyle) },
            text
          )
        )
      );
    }
  }]);

  return InputTipsPage;
}(_react.Component);

InputTipsPage.defaultProps = {
  onClick: function onClick() {},
  iconStyle: {},
  textStyle: {},
  pageStyle: {},
  icon: 'mdi mdi-share',
  text: '请在此处输入需要连接的设备的Did'
};
InputTipsPage.propTypes = {
  onClick: _react.PropTypes.func,
  iconStyle: _react.PropTypes.object,
  textStyle: _react.PropTypes.object,
  pageStyle: _react.PropTypes.object
};
exports.default = InputTipsPage;