import React, {PropTypes, Component} from 'react';

const styles = {
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
    top: '0px',
  },
  innerItem: {
    width: '1px',
    height:  '5px',
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
    lineHeight: '100px',
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

class Knob extends Component {

  constructor(props) {
    super(props);
    //渐变颜色
    this.rgb = [255, 209, 144];
    this.endRgb = [255, 150, 0];
    //刻度的数量
    this.calibrationLength = 44;

    //圆心要从dom中计算得知
    this.state = {
      targetValue: props.targetValue,
      //用来触发由数据点上报的数据，value改变了的时候更新point
      updateValue: props.targetValue,
      currentValue: props.currentValue,
      cx: 0,
      cy: 0
    };

    this.onChange = this.onChange.bind(this);
    this.onChangeAfter = this.onChangeAfter.bind(this);


    //判断点击事件类型
    this.hasTouch = 'ontouchstart' in window,
    this.startEvent = this.hasTouch ? 'touchstart' : 'mousedown';
    this.moveEvent = this.hasTouch ? 'touchmove' : 'mousemove';
    this.endEvent = this.hasTouch ? 'touchend' : 'mouseup';

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      updateValue: nextProps.targetValue,
      targetValue: nextProps.targetValue,
      currentValue: nextProps.currentValue,
    });
  }

  //监听数值变化
  onChange(value) {
    this.props.onChange(value);
    this.setState({
      targetValue: value,
    });
  }

  onChangeAfter(value) {
    this.props.onChangeAfter(value);
    this.setState({
      targetValue: value,
      updateValue: value,
    });
  }

  //获取元素的绝对位置
  getElementLeft(element){
    let actualLeft = element.offsetLeft;
    let current = element.offsetParent;
    while (current !== null){
      actualLeft += current.offsetLeft;
      current = current.offsetParent;
    }
    return actualLeft;
  }
  //获取元素的绝对位置
  getElementTop(element){
    let actualTop = element.offsetTop;
    let current = element.offsetParent;
    while (current !== null){
      actualTop += current.offsetTop;
      current = current.offsetParent;
    }
    return actualTop;
  }

  componentDidMount() {
    const x = this.getElementLeft(this.centerPoint);
    const y = this.getElementTop(this.centerPoint);
    this.setState({
      cx: x,
      cy: y
    });
  }

  render() {

    const {isShow, title, tips, min, max} = this.props;
    let {targetValue, updateValue} = this.state;

    //超出最大值的判断
    if(targetValue < min) {
      targetValue = min;
    }
    if(targetValue > max) {
      targetValue = max;
    }

    if(updateValue < min) {
      updateValue = min;
    }
    if(updateValue > max) {
      updateValue = max;
    }

    const percentage = (targetValue - min) / (max - min);
    const activeItemIndex = this.calibrationLength * percentage;

    const remainder = targetValue % this.props.step;

    if(remainder > 2){
      targetValue = this.props.step - remainder + targetValue;
    }else{
      targetValue = targetValue - remainder;
    }
    
    return (
      <div style={styles.container}>

        <div style={styles.content}>
          <div className="title" style={styles.title}>{title}</div>
          <div className="value" style={styles.value}>
            <span style={styles.valueText}>{targetValue}<sup className="transparent-text" style={styles.unit}></sup>
            </span>
          </div>
          <div className="state" style={styles.state}>
            {tips}
          </div>
        </div>

        <div ref={c => {this.centerPoint = c;}} style={styles.centerPoint}></div>        

        <Point
          step={this.props.step}
          isShow={isShow}
          onChange={this.onChange}
          onChangeAfter={this.onChangeAfter}
          value={targetValue}
          min={min}
          max={max}
          cx={this.state.cx}
          cy={this.state.cy}
          updateValue={updateValue}
          startAng={-90}/>

        <div style={Object.assign({}, styles.calibration, isShow? {}: styles.hidden)}>
          {
            Array(this.calibrationLength).fill(0).map((item, index) => {

              let obj = {};

              obj.transform = 'rotate('+ 250 / this.calibrationLength * index +'deg)';
              obj.WebKitTransform = 'rotate('+ 250 / this.calibrationLength * index +'deg)';
              obj.transformOrigin = '0px 125px';
              obj.WebKitTransformOrigin = '0px 125px';

              let bgColor = {
              };
              if(index < activeItemIndex){
                let r = this.rgb[0] - index * 2;
                let g = this.rgb[1] - index * 2;
                let b = this.rgb[2] - index * 2;
                //设置一个渐变的最高值
                if(r < this.endRgb[0]) r = this.endRgb[0];
                if(g < this.endRgb[1]) g = this.endRgb[1];
                if(b < this.endRgb[2]) b = this.endRgb[2];
                bgColor = {
                  backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')'
                };
              }else{
                bgColor = {
                  backgroundColor: '#ebeaea'
                };
              }

              return(
                <div key={'clockItem' + index} style={Object.assign({}, styles.calibrationItem, obj, bgColor)}>
                  <div style={styles.innerItem}></div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

Knob.defaultProps = {
  isShow: true,
  min: 0,
  max: 100,
  step: 1,
  targetValue: 50,
  title: '设置温度',
  tips: '当前 28 ℃',
  onChangeAfter: () => {},
  onChange: () => {},
};


const pointStyles = {
  container: {
    position: 'absolute',
    width: '32px',
    height: '32px',
    background: '-webkit-linear-gradient(bottom, #ffbe62, #ff9600)',
    border: '3px ',
    borderRadius: '50%',
    boxShadow: '0px 0px 8px 0px rgba(255,216,43,0.8)',
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
    zIndex: '99',    
  }
};

class Point extends Component {
  constructor(props){
    super(props);
    this.minAng = -122;
    this.maxAng = 122;

    //判断点击事件类型
    this.hasTouch = 'ontouchstart' in window,
    this.startEvent = this.hasTouch ? 'touchstart' : 'mousedown';
    this.moveEvent = this.hasTouch ? 'touchmove' : 'mousemove';
    this.endEvent = this.hasTouch ? 'touchend' : 'mouseup';

    this.onmousedown = this.onmousedown.bind(this);
    this.onmousemove = this.onmousemove.bind(this);
    this.onmouseup = this.onmouseup.bind(this);
    this.eventPar = {
      flag: false,
    };

    //设置初始的值
    this.state = {
      deg: this.getDeg(props.value, props.min, props.max, this.minAng, this.maxAng)
    };

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.updateValue != this.props.updateValue || nextProps.min != this.props.min|| nextProps.max != this.props.max){
      this.setState({
        deg: this.getDeg(nextProps.updateValue, nextProps.min, nextProps.max, this.minAng, this.maxAng)
      });
    }
  }

  getDeg(value, min, max, minAng, maxAng) {
    const percentage = (value - min) / (max - min);
    const defaultDeg = percentage * (maxAng - minAng) + -122;
    return defaultDeg;
  }

  onmousedown(event) {
    const e = this.hasTouch ? event.touches[0] : event;
    this.eventPar.flag = true;
    //获取初始坐标    
    this.eventPar.startX = e.clientX;
    this.eventPar.startY = e.clientY;
  }
  onmousemove(event) {
    if(this.eventPar.flag) {
      const e = this.hasTouch ? event.touches[0] : event;
      const ox = e.clientX - this.props.cx;
      const oy = e.clientY - this.props.cy;

      const to = Math.abs(ox / oy);
      let angle = Math.atan(to) / (2 * Math.PI) * 360;
      if (ox <= 0 && oy <= 0)//相对在左上角，第四象限，js中坐标系是从左上角开始的，这里的象限是正常坐标系
      {
          angle = - angle;
      } else if (ox <= 0 && oy > 0)//左下角,3象限
      {
          angle = - (180 - angle);
      } else if (ox > 0 && oy <= 0)//右上角，1象限
      {
      } else if (ox > 0 && oy > 0)//右下角，2象限
      {
          angle = 180 - angle;
      }

      if(angle < this.minAng) angle = this.minAng;
      if(angle > this.maxAng) angle = this.maxAng;

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
  onmouseup() {
    if(this.eventPar.flag) {

      const remainder = this.value % this.props.step;
      if(remainder > 2){
        this.value = this.props.step - remainder + this.value;
      }else{
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

  componentDidMount() {
    //判断事件类型 添加监听
    this.eventDom.addEventListener(this.startEvent, this.onmousedown);
    document.addEventListener(this.moveEvent, this.onmousemove);
    document.addEventListener(this.endEvent, this.onmouseup);

  }

  componentWillUnmount() {
    //销毁
    document.removeEventListener(this.moveEvent, this.onmousemove);
    document.removeEventListener(this.endEvent, this.onmouseup);
  }
  
  render() {
    const style = {
      transform: 'rotate('+this.state.deg+'deg) translateY(-11px)',
      WebKitTransform: 'rotate('+this.state.deg+'deg) translateY(-11px)',
    };

    const {isShow} = this.props;

    return (
      <div ref={c => {this.eventDom = c;}} style={Object.assign({}, pointStyles.containerBox, style, isShow?{}: pointStyles.hidden)}>
        <div style={Object.assign({}, pointStyles.container)}>
          <div style={pointStyles.inner}></div>
        </div>
      </div>
    );
  }
}

Point.defaultProps = {
  onChange: () => {},
  onChangeAfter: () => {},
};


export default Knob;
