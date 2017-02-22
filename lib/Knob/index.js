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
    display: 'block',
    margin: 'auto',
    width: '250px',
    height: '250px',
    position: 'relative'
  },
  calibration: {
    width: '100%',
    height: '100%',
    transform: 'rotate(-123deg)',
    WebKitTransform: 'rotate(-123deg)',
    transition: 'opacity 0.375s cubic-bezier(0.4, 1, 0.2, 1) 0s',
    WebkitTransition: 'opacity 0.375s cubic-bezier(0.4, 1, 0.2, 1) 0s'
  },
  calibrationItem: {
    height: '22px',
    width: '2px',
    backgroundColor: 'rgb(255,109,1)',
    position: 'absolute',
    left: '50%',
    marginLeft: '-1px',
    top: '0px'
  },
  innerItem: {
    width: '1px',
    height: '5px',
    position: 'absolute',
    bottom: '-14px',
    backgroundColor: '#ebeaea',
    left: '50%',
    marginLeft: '-1px'
  },
  content: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    top: '50%',
    marginTop: '-68px',
    color: '#000'
  },
  title: {
    fontSize: '12px',
    color: '#999999'
  },
  value: {
    position: 'relative',
    display: 'inline-block',
    height: '100px',
    lineHeight: '100px'
  },
  valueText: {
    fontSize: '80px',
    position: 'relative'
  },
  activeIcon: {
    color: '#ff6d01',
    fontSize: '14px'
  },
  tempIcon: {
    width: '12px',
    height: '12px',
    position: 'relative',
    top: '1px',
    left: '-2px'
  },
  unit: {
    fontSize: '16px',
    position: 'absolute',
    right: '-18px',
    top: '0px'
  },
  activeText: {
    color: '#ff6d01',
    fontSize: '14px',
    display: 'inline-block',
    padding: '0px 4px'
  },
  state: {
    fontSize: '12px',
    paddingRight: '6px',
    marginTop: '14px',
    color: '#999999'
  },
  icon: {
    width: '12px',
    marginRight: '6px',
    position: 'relative',
    top: '1px'
  },
  hidden: {
    opacity: '0',
    pointerEvents: 'none'
  },
  centerPoint: {
    width: '1px',
    height: '1px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    opacity: '0',
    pointerEvents: 'none'
  },
  modeIcon: {
    position: 'absolute',
    bottom: '22px',
    marginLeft: '-24px',
    left: '0px',
    width: '16px',
    height: '16px',
    zIndex: '999'
  }
};

var Knob = function (_Component) {
  _inherits(Knob, _Component);

  function Knob(props) {
    _classCallCheck(this, Knob);

    //渐变颜色
    var _this = _possibleConstructorReturn(this, (Knob.__proto__ || Object.getPrototypeOf(Knob)).call(this, props));

    _this.rgb = [255, 209, 144];
    _this.endRgb = [255, 150, 0];
    //刻度的数量
    _this.calibrationLength = 44;

    //圆心要从dom中计算得知
    _this.state = {
      targetvalue: props.targetValue,
      //用来触发由数据点上报的数据，value改变了的时候更新point
      updateValue: props.targetValue,
      currentValue: props.currentValue,
      cx: 0,
      cy: 0
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onChangeAfter = _this.onChangeAfter.bind(_this);

    //判断点击事件类型
    _this.hasTouch = 'ontouchstart' in window, _this.startEvent = _this.hasTouch ? 'touchstart' : 'mousedown';
    _this.moveEvent = _this.hasTouch ? 'touchmove' : 'mousemove';
    _this.endEvent = _this.hasTouch ? 'touchend' : 'mouseup';

    return _this;
  }

  _createClass(Knob, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        updateValue: nextProps.targetValue,
        targetvalue: nextProps.targetValue,
        currentValue: nextProps.currentValue
      });
    }

    //监听数值变化

  }, {
    key: 'onChange',
    value: function onChange(value) {
      this.props.onChange(value);
      this.setState({
        targetvalue: value
      });
    }
  }, {
    key: 'onChangeAfter',
    value: function onChangeAfter(value) {
      this.props.onChangeAfter(value);
      this.setState({
        targetvalue: value,
        updateValue: value
      });
    }

    //获取元素的绝对位置

  }, {
    key: 'getElementLeft',
    value: function getElementLeft(element) {
      var actualLeft = element.offsetLeft;
      var current = element.offsetParent;
      while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
      }
      return actualLeft;
    }
    //获取元素的绝对位置

  }, {
    key: 'getElementTop',
    value: function getElementTop(element) {
      var actualTop = element.offsetTop;
      var current = element.offsetParent;
      while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
      }
      return actualTop;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var x = this.getElementLeft(this.centerPoint);
      var y = this.getElementTop(this.centerPoint);
      this.setState({
        cx: x,
        cy: y
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isShow = _props.isShow,
          title = _props.title,
          tips = _props.tips;


      var percentage = (this.state.targetvalue - this.props.min) / (this.props.max - this.props.min);
      var activeItemIndex = this.calibrationLength * percentage;

      var targetValue = this.state.targetvalue;
      var remainder = targetValue % this.props.step;

      if (remainder > 2) {
        targetValue = this.props.step - remainder + targetValue;
      } else {
        targetValue = targetValue - remainder;
      }

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          'div',
          { style: styles.content },
          _react2.default.createElement(
            'div',
            { className: 'title', style: styles.title },
            title
          ),
          _react2.default.createElement(
            'div',
            { className: 'value', style: styles.value },
            _react2.default.createElement(
              'span',
              { style: styles.valueText },
              this.state.targetvalue,
              _react2.default.createElement('sup', { className: 'transparent-text', style: styles.unit })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'state', style: styles.state },
            tips
          )
        ),
        _react2.default.createElement('div', { ref: function ref(c) {
            _this2.centerPoint = c;
          }, style: styles.centerPoint }),
        _react2.default.createElement(Point, {
          step: this.props.step,
          isShow: isShow,
          onChange: this.onChange,
          onChangeAfter: this.onChangeAfter,
          value: this.state.targetvalue,
          min: this.props.min,
          max: this.props.max,
          cx: this.state.cx,
          cy: this.state.cy,
          updateValue: this.state.updateValue,
          startAng: -90 }),
        _react2.default.createElement(
          'div',
          { style: Object.assign({}, styles.calibration, isShow ? {} : styles.hidden) },
          Array(this.calibrationLength).fill(0).map(function (item, index) {

            var obj = {};

            obj.transform = 'rotate(' + 250 / _this2.calibrationLength * index + 'deg)';
            obj.WebKitTransform = 'rotate(' + 250 / _this2.calibrationLength * index + 'deg)';
            obj.transformOrigin = '0px 125px';
            obj.WebKitTransformOrigin = '0px 125px';

            var bgColor = {};
            if (index < activeItemIndex) {
              var r = _this2.rgb[0] - index * 2;
              var g = _this2.rgb[1] - index * 2;
              var b = _this2.rgb[2] - index * 2;
              //设置一个渐变的最高值
              if (r < _this2.endRgb[0]) r = _this2.endRgb[0];
              if (g < _this2.endRgb[1]) g = _this2.endRgb[1];
              if (b < _this2.endRgb[2]) b = _this2.endRgb[2];
              bgColor = {
                backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')'
              };
            } else {
              bgColor = {
                backgroundColor: '#ebeaea'
              };
            }

            return _react2.default.createElement(
              'div',
              { key: 'clockItem' + index, style: Object.assign({}, styles.calibrationItem, obj, bgColor) },
              _react2.default.createElement('div', { style: styles.innerItem })
            );
          })
        )
      );
    }
  }]);

  return Knob;
}(_react.Component);

Knob.defaultProps = {
  isShow: true,
  min: 0,
  max: 100,
  step: 1,
  targetValue: 50,
  title: '设置温度',
  tips: '当前 28 ℃',
  onChangeAfter: function onChangeAfter() {},
  onChange: function onChange() {}
};

var pointStyles = {
  container: {
    position: 'absolute',
    width: '32px',
    height: '32px',
    background: '-webkit-linear-gradient(bottom, #ffbe62, #ff9600)',
    border: '3px ',
    borderRadius: '50%',
    boxShadow: '0px 0px 8px 0px rgba(255,216,43,0.8)'
  },
  inner: {
    backgroundColor: '#fff',
    width: '26px',
    margin: '3px 0px 0px 3px',
    height: '26px',
    borderRadius: '50%'
  },
  hidden: {
    opacity: '0',
    pointerEvents: 'none'
  },
  containerBox: {
    width: '44px',
    height: '44px',
    padding: '6px',
    position: 'absolute',
    left: '50%',
    marginLeft: '-18px',
    transform: 'rotate(-122deg) translateY(-9px)',
    WebKitTransform: 'rotate(-122deg) translateY(-9px)',
    transformOrigin: '18px 125px',
    WebKitTransformOrigin: '18px 125px',
    zIndex: '99'
  }
};

var Point = function (_Component2) {
  _inherits(Point, _Component2);

  function Point(props) {
    _classCallCheck(this, Point);

    var _this3 = _possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).call(this, props));

    _this3.minAng = -122;
    _this3.maxAng = 122;

    //判断点击事件类型
    _this3.hasTouch = 'ontouchstart' in window, _this3.startEvent = _this3.hasTouch ? 'touchstart' : 'mousedown';
    _this3.moveEvent = _this3.hasTouch ? 'touchmove' : 'mousemove';
    _this3.endEvent = _this3.hasTouch ? 'touchend' : 'mouseup';

    _this3.onmousedown = _this3.onmousedown.bind(_this3);
    _this3.onmousemove = _this3.onmousemove.bind(_this3);
    _this3.onmouseup = _this3.onmouseup.bind(_this3);
    _this3.eventPar = {
      flag: false
    };

    //设置初始的值
    _this3.state = {
      deg: _this3.getDeg(props.value, props.min, props.max, _this3.minAng, _this3.maxAng)
    };

    return _this3;
  }

  _createClass(Point, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.updateValue != this.props.updateValue || nextProps.min != this.props.min || nextProps.max != this.props.max) {
        this.setState({
          deg: this.getDeg(nextProps.updateValue, nextProps.min, nextProps.max, this.minAng, this.maxAng)
        });
      }
    }
  }, {
    key: 'getDeg',
    value: function getDeg(value, min, max, minAng, maxAng) {
      var percentage = (value - min) / (max - min);
      var defaultDeg = percentage * (maxAng - minAng) + -122;
      return defaultDeg;
    }
  }, {
    key: 'onmousedown',
    value: function onmousedown(event) {
      var e = this.hasTouch ? event.touches[0] : event;
      this.eventPar.flag = true;
      //获取初始坐标    
      this.eventPar.startX = e.clientX;
      this.eventPar.startY = e.clientY;
    }
  }, {
    key: 'onmousemove',
    value: function onmousemove(event) {
      if (this.eventPar.flag) {
        var e = this.hasTouch ? event.touches[0] : event;
        var ox = e.clientX - this.props.cx;
        var oy = e.clientY - this.props.cy;

        var to = Math.abs(ox / oy);
        var angle = Math.atan(to) / (2 * Math.PI) * 360;
        if (ox <= 0 && oy <= 0) //相对在左上角，第四象限，js中坐标系是从左上角开始的，这里的象限是正常坐标系
          {
            angle = -angle;
          } else if (ox <= 0 && oy > 0) //左下角,3象限
          {
            angle = -(180 - angle);
          } else if (ox > 0 && oy <= 0) //右上角，1象限
          {} else if (ox > 0 && oy > 0) //右下角，2象限
          {
            angle = 180 - angle;
          }

        if (angle < this.minAng) angle = this.minAng;
        if (angle > this.maxAng) angle = this.maxAng;

        //尝试直接设置角度
        // this.eventDom.style.transform = 'rotate('+angle+'deg) translateY(-6px)';
        // this.eventDom.style.WebKitTransform = 'rotate('+angle+'deg) translateY(-6px)';
        this.setState({
          deg: angle
        });
        this.value = parseInt((angle - this.minAng) / (this.maxAng - this.minAng) * (this.props.max - this.props.min) + this.props.min);
        this.props.onChange(this.value);
      }
    }
  }, {
    key: 'onmouseup',
    value: function onmouseup() {
      if (this.eventPar.flag) {

        var remainder = this.value % this.props.step;
        if (remainder > 2) {
          this.value = this.props.step - remainder + this.value;
        } else {
          this.value = this.value - remainder;
        }

        this.eventPar.flag = false;
        this.props.onChangeAfter(this.value);

        //矫正位置，如果数值范围很小的时候就会出现拖动距离不足以变更数值的情况
        this.setState({
          deg: this.getDeg(this.value, this.props.min, this.props.max, this.minAng, this.maxAng)
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      //判断事件类型 添加监听
      this.eventDom.addEventListener(this.startEvent, this.onmousedown);
      document.addEventListener(this.moveEvent, this.onmousemove);
      document.addEventListener(this.endEvent, this.onmouseup);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //销毁
      document.removeEventListener(this.moveEvent, this.onmousemove);
      document.removeEventListener(this.endEvent, this.onmouseup);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var style = {
        transform: 'rotate(' + this.state.deg + 'deg) translateY(-11px)',
        WebKitTransform: 'rotate(' + this.state.deg + 'deg) translateY(-11px)'
      };

      var isShow = this.props.isShow;


      return _react2.default.createElement(
        'div',
        { ref: function ref(c) {
            _this4.eventDom = c;
          }, style: Object.assign({}, pointStyles.containerBox, style, isShow ? {} : pointStyles.hidden) },
        _react2.default.createElement(
          'div',
          { style: Object.assign({}, pointStyles.container) },
          _react2.default.createElement('div', { style: pointStyles.inner })
        )
      );
    }
  }]);

  return Point;
}(_react.Component);

Point.defaultProps = {
  onChange: function onChange() {},
  onChangeAfter: function onChangeAfter() {}
};

exports.default = Knob;