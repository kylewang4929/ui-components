'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loading = exports.Alert = exports.ConfirmAlert = exports.ConfirmInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./style.css');

var styles = {
  overlay: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: '1000',
    display: 'block'
  },
  modalBox: {
    backgroundColor: '#fff',
    borderRadius: '6px',
    overflow: 'hidden',
    width: '260px',
    height: '160px',
    margin: '-50px auto 0px auto',
    position: 'relative',
    padding: '0px 30px 0px 30px'
  },
  alertBox: {
    backgroundColor: '#fff',
    borderRadius: '6px',
    overflow: 'hidden',
    width: '82%',
    maxWidth: '280px',
    margin: '-50px auto 0px auto',
    padding: '20px 30px 20px 30px',
    position: 'relative',
    fontSize: '14px',
    lineHeight: '1.4'
  },
  alertTitle: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#ffb716',
    padding: '0px 0px 4px 0px'
  },
  alertContent: {
    padding: '20px 0px',
    textAlign: 'center',
    fontSize: '12px'
  },
  modalContentBox: {
    display: 'table',
    overflow: 'hidden',
    height: '117px',
    width: '100%'
  },
  modalContent: {
    display: 'table-cell',
    verticalAlign: 'middle'
  },
  buttonBox: {
    position: 'absolute',
    width: '100%',
    bottom: '0px',
    borderTop: '1px solid #e6e6e6',
    left: '0px'
  },
  button: {
    float: 'left',
    width: '50%',
    textAlign: 'center',
    lineHeight: '42px',
    fontSize: '12px'
  },
  buttonBorderRight: {
    borderRight: '1px solid #e6e6e6'
  },
  boxTitle: {
    textAlign: 'center',
    fontSize: '13px',
    lineHeight: '1.4'
  },
  input: {
    outline: '0',
    border: '1px solid #e6e6e6',
    width: '80%',
    height: '30px',
    padding: '0px 8px',
    margin: '14px 0px 0px 10%',
    borderRadius: '2px'
  },
  loadingBox: {
    width: '240px',
    borderRadius: '6px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    margin: '-50px auto 0px auto',
    fontSize: '13px',
    color: '#fff',
    padding: '30px 20px'
  },
  loadingText: {
    textAlign: 'center',
    fontSize: '13px'
  },
  loadingIcon: {
    marginBottom: '18px'
  }
};

var CenterStyle = {
  container: {
    display: 'table',
    height: '100%',
    width: '100%'
  },
  cell: {
    verticalAlign: 'middle',
    height: '100%',
    width: '100%',
    display: 'table-cell'
  }
};

/**
 * loading
 */

var Loading = function (_Component) {
  _inherits(Loading, _Component);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
  }

  _createClass(Loading, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Overlay,
        { style: this.props.overlayStyle, onClose: this.props.onClose, isShow: this.props.isShow },
        _react2.default.createElement(LoadingContent, { isShowIcon: this.props.isShowIcon, content: this.props.content })
      );
    }
  }]);

  return Loading;
}(_react.Component);

Loading.propTypes = {
  content: _react.PropTypes.string,
  isShow: _react.PropTypes.bool,
  isShowIcon: _react.PropTypes.bool,
  onClose: _react.PropTypes.func,
  overlayStyle: _react.PropTypes.object
};
Loading.defaultProps = {
  content: '',
  isShow: true,
  isShowIcon: true,
  onClose: function onClose() {},
  overlayStyle: {}
};

/**
 * loading的主要元素
 */

var LoadingContent = function (_Component2) {
  _inherits(LoadingContent, _Component2);

  function LoadingContent() {
    _classCallCheck(this, LoadingContent);

    return _possibleConstructorReturn(this, (LoadingContent.__proto__ || Object.getPrototypeOf(LoadingContent)).apply(this, arguments));
  }

  _createClass(LoadingContent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: styles.loadingBox },
        _react2.default.createElement('div', { style: Object.assign({}, { display: this.props.isShowIcon ? 'block' : 'none' }, styles.loadingIcon), className: 'loader' }),
        _react2.default.createElement(
          'div',
          { style: styles.loadingText },
          this.props.content
        )
      );
    }
  }]);

  return LoadingContent;
}(_react.Component);

LoadingContent.defaultProps = {
  isShowIcon: true,
  content: 'loading'
};
LoadingContent.propTypes = {
  content: _react.PropTypes.string,
  isShowIcon: _react.PropTypes.bool
};

/**
 * 提示框
 */

var Alert = function (_Component3) {
  _inherits(Alert, _Component3);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));
  }

  _createClass(Alert, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Overlay,
        { style: this.props.overlayStyle, onClose: this.props.onClose, isShow: this.props.isShow },
        _react2.default.createElement(
          'div',
          { style: styles.alertBox },
          _react2.default.createElement(
            'div',
            { style: styles.alertTitle },
            this.props.title
          ),
          _react2.default.createElement(
            'div',
            { style: styles.alertContent },
            this.props.content
          )
        )
      );
    }
  }]);

  return Alert;
}(_react.Component);

Alert.propTypes = {
  isShow: _react.PropTypes.bool,
  title: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]),
  onClose: _react.PropTypes.func,
  content: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]),
  overlayStyle: _react.PropTypes.object
};
Alert.defaultProps = {
  isShow: true,
  title: '提示',
  onClose: function onClose() {},
  content: '这是一个提示框。',
  overlayStyle: {}
};

/**
 * 带输入框的确认弹窗
 */

var ConfirmInput = function (_Component4) {
  _inherits(ConfirmInput, _Component4);

  function ConfirmInput() {
    _classCallCheck(this, ConfirmInput);

    return _possibleConstructorReturn(this, (ConfirmInput.__proto__ || Object.getPrototypeOf(ConfirmInput)).apply(this, arguments));
  }

  _createClass(ConfirmInput, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Overlay,
        { style: this.props.overlayStyle, onClose: this.props.onClose, isShow: this.props.isShow },
        _react2.default.createElement(ConfirmInputBox, {
          onClose: this.props.onClose,
          onConfirm: this.props.onConfirm,
          closeText: this.props.closeText,
          confirmText: this.props.confirmText,
          inputValue: this.props.inputValue,
          content: this.props.content })
      );
    }
  }]);

  return ConfirmInput;
}(_react.Component);

ConfirmInput.propTypes = {
  onClose: _react.PropTypes.func,
  onConfirm: _react.PropTypes.func,
  isShow: _react.PropTypes.bool,
  closeText: _react.PropTypes.string,
  confirmText: _react.PropTypes.string,
  content: _react.PropTypes.string,
  overlayStyle: _react.PropTypes.object
};
ConfirmInput.defaultProps = {
  onClose: function onClose() {},
  onConfirm: function onConfirm() {},
  isShow: true,
  closeText: '取消',
  confirmText: '确定',
  content: '文字',
  overlayStyle: {}
};
/**
 * 普通确认框
 */

var ConfirmAlert = function (_Component5) {
  _inherits(ConfirmAlert, _Component5);

  function ConfirmAlert() {
    _classCallCheck(this, ConfirmAlert);

    return _possibleConstructorReturn(this, (ConfirmAlert.__proto__ || Object.getPrototypeOf(ConfirmAlert)).apply(this, arguments));
  }

  _createClass(ConfirmAlert, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Overlay,
        { style: this.props.overlayStyle, onClose: this.props.onClose, isShow: this.props.isShow },
        _react2.default.createElement(ConfirmAlertBox, {
          onClose: this.props.onClose,
          onConfirm: this.props.onConfirm,
          closeText: this.props.closeText,
          confirmText: this.props.confirmText,
          content: this.props.content })
      );
    }
  }]);

  return ConfirmAlert;
}(_react.Component);

ConfirmAlert.propTypes = {
  onClose: _react.PropTypes.func,
  onConfirm: _react.PropTypes.func,
  isShow: _react.PropTypes.bool,
  closeText: _react.PropTypes.string,
  confirmText: _react.PropTypes.string,
  content: _react.PropTypes.string,
  overlayStyle: _react.PropTypes.object
};
ConfirmAlert.defaultProps = {
  onClose: function onClose() {},
  onConfirm: function onConfirm() {},
  isShow: true,
  closeText: '取消',
  confirmText: '确定',
  content: 'text',
  overlayStyle: {}
};

var Overlay = function (_Component6) {
  _inherits(Overlay, _Component6);

  function Overlay(props) {
    _classCallCheck(this, Overlay);

    var _this6 = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this, props));

    _this6.handleClick = _this6.handleClick.bind(_this6);
    return _this6;
  }

  //阻止事件冒泡


  _createClass(Overlay, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.overlayDom.addEventListener('mousedown', function (e) {
        e.stopPropagation();
      });
      this.overlayDom.addEventListener('touchstart', function (e) {
        e.stopPropagation();
      });
    }

    //阻止冒泡

  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      if (!this.props.onClose) {} else {
        this.props.onClose(e);
      }
      e.stopPropagation();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var style = {
        display: this.props.isShow ? 'block' : 'none'
      };
      return _react2.default.createElement(
        'div',
        { className: 'modal', ref: function ref(c) {
            _this7.overlayDom = c;
          }, onClick: this.handleClick, style: Object.assign({}, styles.overlay, style, this.props.style) },
        _react2.default.createElement(
          'div',
          { style: CenterStyle.container },
          _react2.default.createElement(
            'div',
            { style: CenterStyle.cell },
            this.props.children
          )
        )
      );
    }
  }]);

  return Overlay;
}(_react.Component);

Overlay.propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]),
  isShow: _react.PropTypes.bool,
  onClose: _react.PropTypes.func,
  style: _react.PropTypes.object
};
Overlay.defaultProps = {
  children: {},
  isShow: true,
  onClose: function onClose() {},
  style: {}
};

var ConfirmInputBox = function (_Component7) {
  _inherits(ConfirmInputBox, _Component7);

  function ConfirmInputBox(props) {
    _classCallCheck(this, ConfirmInputBox);

    var _this8 = _possibleConstructorReturn(this, (ConfirmInputBox.__proto__ || Object.getPrototypeOf(ConfirmInputBox)).call(this, props));

    _this8.onConfirmHandle = _this8.onConfirmHandle.bind(_this8);
    _this8.onCloseHandle = _this8.onCloseHandle.bind(_this8);
    _this8.onChange = _this8.onChange.bind(_this8);

    _this8.state = {
      length: _this8.props.inputValue.length
    };
    return _this8;
  }

  _createClass(ConfirmInputBox, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.stopPropagation();
    }
  }, {
    key: 'onConfirmHandle',
    value: function onConfirmHandle() {
      if (this.state.length != 0) {
        var name = this.inputDom.value;
        this.props.onConfirm(name);
      }
    }

    //重置输入框的值

  }, {
    key: 'onCloseHandle',
    value: function onCloseHandle() {
      this.props.onClose();
      this.inputDom.value = this.props.inputValue;
      this.setState({
        length: this.props.inputValue.length
      });
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      var length = this.inputDom.value.length;
      this.setState({
        length: length
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this9 = this;

      return _react2.default.createElement(
        'div',
        { onClick: this.handleClick, style: styles.modalBox },
        _react2.default.createElement(
          'div',
          { style: styles.modalContentBox },
          _react2.default.createElement(
            'div',
            { style: styles.modalContent },
            _react2.default.createElement(
              'div',
              { style: styles.boxTitle },
              this.props.content
            ),
            _react2.default.createElement('input', { ref: function ref(c) {
                _this9.inputDom = c;
              }, maxLength: '15', onChange: this.onChange, style: styles.input, defaultValue: this.props.inputValue })
          ),
          _react2.default.createElement(Buttons, {
            onClose: this.onCloseHandle,
            onConfirm: this.onConfirmHandle,
            closeText: this.props.closeText,
            confirmText: this.props.confirmText,
            confirmButtonType: this.state.length == 0 ? '' : this.props.confirmButtonType,
            cancelButtonType: this.props.cancelButtonType })
        )
      );
    }
  }]);

  return ConfirmInputBox;
}(_react.Component);

ConfirmInputBox.propTypes = {
  onClose: _react.PropTypes.func,
  onConfirm: _react.PropTypes.func,
  closeText: _react.PropTypes.string,
  confirmText: _react.PropTypes.string,
  content: _react.PropTypes.string
};
ConfirmInputBox.defaultProps = {
  onClose: function onClose() {},
  onConfirm: function onConfirm() {},
  closeText: '取消',
  confirmText: '确定',
  content: 'test'
};

var ConfirmAlertBox = function (_Component8) {
  _inherits(ConfirmAlertBox, _Component8);

  function ConfirmAlertBox() {
    _classCallCheck(this, ConfirmAlertBox);

    return _possibleConstructorReturn(this, (ConfirmAlertBox.__proto__ || Object.getPrototypeOf(ConfirmAlertBox)).apply(this, arguments));
  }

  _createClass(ConfirmAlertBox, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.stopPropagation();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { onClick: this.handleClick, style: styles.modalBox },
        _react2.default.createElement(
          'div',
          { style: styles.modalContentBox },
          _react2.default.createElement(
            'div',
            { style: styles.modalContent },
            _react2.default.createElement(
              'div',
              { style: styles.boxTitle },
              this.props.content
            )
          ),
          _react2.default.createElement(Buttons, {
            onClose: this.props.onClose,
            onConfirm: this.props.onConfirm,
            closeText: this.props.closeText,
            confirmText: this.props.confirmText,
            confirmButtonType: this.props.confirmButtonType,
            cancelButtonType: this.props.cancelButtonType })
        )
      );
    }
  }]);

  return ConfirmAlertBox;
}(_react.Component);

ConfirmAlertBox.propTypes = {
  onClose: _react.PropTypes.func,
  onConfirm: _react.PropTypes.func,
  closeText: _react.PropTypes.string,
  confirmText: _react.PropTypes.string,
  content: _react.PropTypes.string
};
ConfirmAlertBox.defaultProps = {
  onClose: function onClose() {},
  onConfirm: function onConfirm() {},
  closeText: '取消',
  confirmText: '确定',
  content: 'test'
};

var Buttons = function (_Component9) {
  _inherits(Buttons, _Component9);

  function Buttons() {
    _classCallCheck(this, Buttons);

    return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));
  }

  _createClass(Buttons, [{
    key: 'getButtonStyle',
    value: function getButtonStyle(type) {
      var style = {};
      switch (type) {
        case "success":
          style = {
            color: '#6db312',
            backgroundColor: '#fff'
          };
          break;
        case "error":
          style = {
            color: '#fff',
            backgroundColor: '#ff7676'
          };
          break;
        default:
          style = {
            color: '#d6d6d6'
          };
          break;
      }
      return style;
    }
  }, {
    key: 'render',
    value: function render() {
      var cancelButtonStyle = {
        color: '#d6d6d6'
      };
      var confirmButtonStyle = {
        color: 'rgb(22, 175, 203)',
        backgroundColor: '#fff'
      };
      return _react2.default.createElement(
        'div',
        { style: styles.buttonBox },
        _react2.default.createElement(
          'div',
          { onClick: this.props.onClose, style: Object.assign({}, styles.button, styles.buttonBorderRight, cancelButtonStyle) },
          '\u53D6\u6D88'
        ),
        _react2.default.createElement(
          'div',
          { onClick: this.props.onConfirm, style: Object.assign({}, styles.button, confirmButtonStyle) },
          '\u786E\u5B9A'
        )
      );
    }
  }]);

  return Buttons;
}(_react.Component);

Buttons.propTypes = {
  onClose: _react.PropTypes.func,
  onConfirm: _react.PropTypes.func,
  closeText: _react.PropTypes.string,
  confirmText: _react.PropTypes.string
};
Buttons.defaultProps = {
  onClose: function onClose() {},
  onConfirm: function onConfirm() {},
  closeText: '取消',
  confirmText: '确定'
};

exports.ConfirmInput = ConfirmInput;
exports.ConfirmAlert = ConfirmAlert;
exports.Alert = Alert;
exports.Loading = Loading;