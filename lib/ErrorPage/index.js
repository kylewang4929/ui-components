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
    height: '100%'
  },
  box: {
    textAlign: 'center',
    color: '#828282'
  },
  icon: {
    fontSize: '140px'
  },
  text: {
    display: 'block',
    fontSize: '13px'
  },
  ul: {
    width: '240px',
    margin: 'auto',
    padding: '20px 0px',
    fontSize: '12px'
  },
  li: {
    position: 'relative',
    padding: '4px 0px 4px 12px'
  },
  liPoint: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    marginTop: '-5px',
    left: "-14px",
    backgroundColor: 'rgb(22, 175, 203)'
  },
  liText: {
    position: 'relative'
  },
  button: {}
};

var ErrorPage = function (_Component) {
  _inherits(ErrorPage, _Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, (ErrorPage.__proto__ || Object.getPrototypeOf(ErrorPage)).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          pageStyle = _props.pageStyle,
          iconStyle = _props.iconStyle,
          textStyle = _props.textStyle,
          buttonStyle = _props.buttonStyle,
          onClick = _props.onClick,
          icon = _props.icon,
          text = _props.text,
          buttonText = _props.buttonText,
          textList = _props.textList;

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
          ),
          _react2.default.createElement(
            'div',
            { style: styles.ul },
            textList.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                { style: styles.li, key: 'error-list-key' + index },
                _react2.default.createElement(
                  'span',
                  { style: styles.liText },
                  _react2.default.createElement('div', { style: styles.liPoint }),
                  item
                )
              );
            })
          ),
          _react2.default.createElement(
            'div',
            { style: _extends({}, styles.button, buttonStyle), className: 'error-page-button', onClick: onClick },
            _react2.default.createElement('div', { className: 'over-layer' }),
            buttonText
          )
        )
      );
    }
  }]);

  return ErrorPage;
}(_react.Component);

ErrorPage.defaultProps = {
  onClick: function onClick() {},
  iconStyle: {},
  textStyle: {},
  pageStyle: {},
  buttonStyle: {},
  icon: 'mdi mdi-close-circle',
  text: '连接设备失败',
  buttonText: '重试',
  textList: ['设备是否正常运行', 'Wi-Fi网络是否连接顺畅', '请拔下设备电源，再重新接通电源，再重试']
};
ErrorPage.propTypes = {
  onClick: _react.PropTypes.func,
  iconStyle: _react.PropTypes.object,
  textStyle: _react.PropTypes.object,
  buttonStyle: _react.PropTypes.object,
  pageStyle: _react.PropTypes.object,
  icon: _react.PropTypes.string
};
exports.default = ErrorPage;