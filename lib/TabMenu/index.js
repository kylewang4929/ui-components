'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./style.css');

var TabMenu = function (_Component) {
  _inherits(TabMenu, _Component);

  function TabMenu(props) {
    _classCallCheck(this, TabMenu);

    var _this = _possibleConstructorReturn(this, (TabMenu.__proto__ || Object.getPrototypeOf(TabMenu)).call(this, props));

    _this.state = {
      activeItem: null
    };

    _this.bodyClick = _this.bodyClick.bind(_this);
    return _this;
  }

  _createClass(TabMenu, [{
    key: 'bodyClick',
    value: function bodyClick(event) {
      this.setState({
        activeItem: null
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this.bodyClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.bodyClick);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event, item, index, type) {
      var _this2 = this;

      event.stopPropagation();
      this.props.onChange(item);

      if (type == 'main') {
        (function () {
          var newActiveItem = index == _this2.state.activeItem ? null : index;
          setTimeout(function () {
            _this2.setState({
              activeItem: newActiveItem
            });
          });
        })();
      }

      if (type == 'sub') {
        this.setState({
          activeItem: null
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          menus = _props.menus,
          shadow = _props.shadow;

      var width = 100 / menus.length;

      var activeItem = this.state.activeItem;


      return _react2.default.createElement(
        'div',
        { className: 'menu-shadow tab-bar-container' },
        menus.map(function (item, index) {
          return _react2.default.createElement(
            'div',
            { onClick: function onClick(event) {
                _this3.handleClick(event, item, index, 'main');
              }, style: { width: width + '%' }, className: 'item', key: 'item-' + index },
            _react2.default.createElement('i', { className: 'icon ' + item.icon }),
            _react2.default.createElement(
              'span',
              { className: 'text' },
              item.name
            ),
            item.subMenu ? _react2.default.createElement(
              'div',
              { style: Object.assign({}, activeItem == index ? { display: 'block' } : {}), className: 'shadow sub-item-box' },
              item.subMenu.map(function (item, index) {
                return _react2.default.createElement(
                  'div',
                  { onClick: function onClick(event) {
                      _this3.handleClick(event, item, index, 'sub');
                    }, className: 'sub-item', key: 'subItem-' + index },
                  _react2.default.createElement('i', _defineProperty({ className: 'icon' }, 'className', item.icon)),
                  _react2.default.createElement(
                    'span',
                    { className: 'text' },
                    item.name
                  )
                );
              })
            ) : null
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
  onChange: null
};

TabMenu.propTypes = {
  menus: _react.PropTypes.array,
  onChange: _react.PropTypes.func
};
exports.default = TabMenu;