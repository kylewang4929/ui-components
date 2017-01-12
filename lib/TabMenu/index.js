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

var TabMenu = function (_Component) {
  _inherits(TabMenu, _Component);

  function TabMenu() {
    _classCallCheck(this, TabMenu);

    return _possibleConstructorReturn(this, (TabMenu.__proto__ || Object.getPrototypeOf(TabMenu)).apply(this, arguments));
  }

  _createClass(TabMenu, [{
    key: 'handleClick',
    value: function handleClick(event, item, index, type) {
      event.stopPropagation();
      this.props.onChange(item);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          menus = _props.menus,
          shadow = _props.shadow,
          boxStyle = _props.boxStyle,
          textStyle = _props.textStyle,
          activeTextStyle = _props.activeTextStyle;

      var width = 100 / menus.length;

      return _react2.default.createElement(
        'div',
        { className: 'menu-shadow tab-bar-container', style: boxStyle },
        menus.map(function (item, index) {
          var isActive = item.isActive;
          isActive = isActive === 'true' || isActive === true;

          return _react2.default.createElement(
            'div',
            { onClick: function onClick(event) {
                _this2.handleClick(event, item, index, 'main');
              }, style: Object.assign({}, { width: width + '%' }, isActive ? activeTextStyle : textStyle), className: 'item', key: 'item-' + index },
            _react2.default.createElement('div', { className: 'over-layer' }),
            _react2.default.createElement('i', { className: 'icon ' + item.icon }),
            _react2.default.createElement(
              'span',
              { className: 'text' },
              item.name
            )
          );
        }),
        _react2.default.createElement('div', { style: { clear: 'both' } })
      );
    }
  }]);

  return TabMenu;
}(_react.Component);

TabMenu.defaultProps = {
  menus: [],
  onChange: function onChange() {},
  boxStyle: {},
  textStyle: {},
  activeTextStyle: {}
};

TabMenu.propTypes = {
  menus: _react.PropTypes.array,
  onChange: _react.PropTypes.func,
  boxStyle: _react.PropTypes.object,
  textStyle: _react.PropTypes.object,
  activeTextStyle: _react.PropTypes.object
};
exports.default = TabMenu;