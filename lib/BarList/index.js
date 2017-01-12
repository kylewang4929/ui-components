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
    fontSize: '12px',
    padding: '20px'
  },
  title: {
    color: '#fff',
    fontSize: '13px',
    padding: '0px 10px'
  }
};

var BarList = function (_Component) {
  _inherits(BarList, _Component);

  function BarList() {
    _classCallCheck(this, BarList);

    return _possibleConstructorReturn(this, (BarList.__proto__ || Object.getPrototypeOf(BarList)).apply(this, arguments));
  }

  _createClass(BarList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          datas = _props.datas,
          titleStyle = _props.titleStyle,
          labelStyle = _props.labelStyle,
          valueStyle = _props.valueStyle,
          indexStyle = _props.indexStyle;


      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          'div',
          { style: _extends({}, styles.title, titleStyle) },
          title
        ),
        datas.map(function (item, index) {
          return _react2.default.createElement(BarItem, _extends({
            key: 'barItem' + index,
            labelStyle: labelStyle,
            valueStyle: valueStyle,
            indexStyle: indexStyle,
            index: index
          }, item));
        })
      );
    }
  }]);

  return BarList;
}(_react.Component);

var itemStyles = {
  container: {
    position: 'relative',
    color: '#fff',
    margin: '14px 0px',
    borderRadius: '30px',
    border: '1px solid #fff',
    padding: '16px 40px'
  },
  label: {},
  value: {
    position: 'absolute',
    right: '15px'

  },
  index: {
    position: 'absolute',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    left: '15px',
    color: '#8e8e8e',
    top: '50%',
    fontSize: '12px',
    marginTop: '-8px',
    lineHeight: '18px',
    textAlign: 'center'
  },
  indexText: {
    transform: 'scale(0.8,0.8)',
    WebKitTransform: 'scale(0.8,0.8)',
    display: 'block'
  }
};

var BarItem = function (_Component2) {
  _inherits(BarItem, _Component2);

  function BarItem() {
    _classCallCheck(this, BarItem);

    return _possibleConstructorReturn(this, (BarItem.__proto__ || Object.getPrototypeOf(BarItem)).apply(this, arguments));
  }

  _createClass(BarItem, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          index = _props2.index,
          value = _props2.value,
          label = _props2.label,
          indexStyle = _props2.indexStyle,
          labelStyle = _props2.labelStyle,
          valueStyle = _props2.valueStyle;

      return _react2.default.createElement(
        'div',
        { style: itemStyles.container },
        _react2.default.createElement(
          'span',
          { style: _extends({}, itemStyles.index, indexStyle) },
          _react2.default.createElement(
            'span',
            { style: itemStyles.indexText },
            index + 1
          )
        ),
        _react2.default.createElement(
          'span',
          { style: _extends({}, itemStyles.label, labelStyle) },
          label
        ),
        _react2.default.createElement(
          'span',
          { style: _extends({}, itemStyles.value, valueStyle) },
          value
        )
      );
    }
  }]);

  return BarItem;
}(_react.Component);

BarList.defaultProps = {
  title: '',
  datas: [],
  titleStyle: {},
  indexStyle: {},
  labelStyle: {},
  valueStyle: {}
};

BarList.propTypes = {
  title: _react.PropTypes.string,
  datas: _react.PropTypes.array,
  titleStyle: _react.PropTypes.object,
  indexStyle: _react.PropTypes.object,
  labelStyle: _react.PropTypes.object,
  valueStyle: _react.PropTypes.object
};

exports.default = BarList;