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

var styles = {
  container: {
    width: '46px',
    height: '28px',
    borderRadius: '30px',
    position: 'relative'
  },
  button: {
    width: '27px',
    height: '27px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    border: '2px solid #fff',
    position: 'absolute',
    left: 'auto',
    right: '0px',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 10px 0px rgba(0, 0, 0, 0.08)'
  }
};

var Switch = function (_Component) {
  _inherits(Switch, _Component);

  function Switch(props) {
    _classCallCheck(this, Switch);

    var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(Switch, [{
    key: 'onClick',
    value: function onClick(e) {
      e.nativeEvent.stopImmediatePropagation();
      this.props.onClick(!this.props.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var isActive = this.props.value;
      var activeColor = this.props.activeColor;

      return _react2.default.createElement(
        'div',
        { onClick: this.onClick, style: Object.assign({}, styles.container, isActive ? { backgroundColor: activeColor } : { backgroundColor: '#cbcbcb' }) },
        _react2.default.createElement('div', { style: Object.assign({}, styles.button, isActive ? { border: '2px solid ' + activeColor } : { border: '2px solid #cbcbcb', left: '0px', right: 'auto' }) })
      );
    }
  }]);

  return Switch;
}(_react.Component);

Switch.defaultProps = {
  value: true,
  onClick: function onClick() {},
  activeColor: 'rgb(22, 175, 203)'
};
Switch.propTypes = {
  value: _react.PropTypes.bool,
  onClick: _react.PropTypes.func
};

exports.default = Switch;