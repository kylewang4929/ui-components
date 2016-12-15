import React, {PropTypes, Component} from 'react';

const styles = {
  container: {
    textAlign: 'center',
    position: 'relative',
    width: '180px',
    height: '180px',
    margin: 'auto',
    userSelect: 'none'
  },
  canvas: {
    position: 'absolute',
    left: '50%',
    marginLeft: '-90px',
  },
  panle: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: '-20px',
    marginTop: '-20px',
    boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 10px 0px rgba(0, 0, 0, 0.08)',
    textAlign: 'center'
  },
  icon: {
    display: 'block',
    width: '42px',
    height: '42px',
    left: '50%',
    top: '50%',
    position: 'absolute',
    marginLeft: '-21px',
    marginTop: '-21px'
  }
};

const colorImage = require('./color.png');
const lightImg = require('./ic_lamp.png');

class ColorPick extends Component {

  constructor(props) {
    super(props);
    this.onmousedown = this
      .onmousedown
      .bind(this);
    this.onmousemove = this
      .onmousemove
      .bind(this);
    this.onmouseup = this
      .onmouseup
      .bind(this);
    this.getColor = this
      .getColor
      .bind(this);

    this.state = {
      color: props.color
    };
    this.clickState = false;

    //判断事件类型
    this.hasTouch = 'ontouchstart' in window,
    this.startEvent = this.hasTouch ? 'touchstart' : 'mousedown';
    this.moveEvent = this.hasTouch ? 'touchmove' : 'mousemove';
    this.endEvent = this.hasTouch ? 'touchend' : 'mouseup';
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.color != this.props.color){
      this.setState({
        color: nextProps.color
      });
    }
  }

  getColor(c) {
    const red = c[0];
    const green = c[1];
    const blue = c[2];
    const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return color;
  }

  onmousedown(event) {

    //兼容事件
    const e = this.hasTouch ? event.touches[0] : event;

    this.clickState = true;
    const originalPosition = {
      x: e.pageX,
      y: e.pageY
    };
    let position = this.windowToCanvas(this.canvas, e.pageX, e.pageY);
    const isCrossing = this.crossingCorrect(position.x, position.y, this.props.radius, this.props.radius, this.props.radius);
    if(isCrossing){
      this.props.onMouseDownIsHit(false, originalPosition);
      return;
    }else{
      this.props.onMouseDownIsHit(true, originalPosition);
    }
    const c = this.ctx.getImageData(position.x, position.y, 1, 1).data;
    const color = this.getColor(c);
    this.props.onChange(color);
  }

  onmousemove(event) {
    if (this.clickState) {
      //兼容事件
      const e = this.hasTouch ? event.touches[0] : event;
      let position = this.windowToCanvas(this.canvas, e.pageX, e.pageY);
      const isCrossing = this.crossingCorrect(position.x, position.y, this.props.radius, this.props.radius, this.props.radius);
      if(isCrossing){
        return;
      }
      const c = this.ctx.getImageData(position.x, position.y, 1, 1).data;
      const color = this.getColor(c);
      this.props.onChange(color);
    }
  }

  crossingCorrect(x, y, x1, y1, radius) {
    //x是事件触发点  x1是圆心
    const sideX = x1 - x;
    const sideY = y1 - y;
    //求半径
    const pointRadius = Math.sqrt(Math.pow(sideX, 2) + Math.pow(sideY, 2));

    if(pointRadius > radius){
      return true;
    }else{
      return false;
    }

  }

  onmouseup(e) {
    if (this.clickState) {
      this.clickState = false;
      //触发回调
      this.props.onChangeEnd(this.state.color);
    }
  }

  windowToCanvas(canvas, x, y) {
    const bbox = canvas.getBoundingClientRect();
    const positionX = x - bbox.left * (canvas.width / bbox.width);
    const positionY = y - bbox.top * (canvas.height / bbox.height);
    return {x: positionX, y: positionY};
  }

  componentDidMount() {
    const image = new Image();
    image.src = colorImage;
    image.onload = () => {
      this.ctx = this.canvas.getContext('2d');
      this.ctx.drawImage(image, 0, 0, this.props.radius*2, this.props.radius*2);
    };

    //添加监听

    //判断事件类型

    this.canvas.addEventListener(this.startEvent, this.onmousedown);
    document.addEventListener(this.moveEvent, this.onmousemove);
    document.addEventListener(this.endEvent, this.onmouseup);

  }

  componentWillUnmount() {
    document.removeEventListener(this.moveEvent, this.onmousemove);
    document.removeEventListener(this.endEvent, this.onmouseup);
  }

  render() {
    return (
      <div style={Object.assign({}, styles.container, {width: this.props.radius*2, height: this.props.radius*2})}>
        <canvas
          style={Object.assign({}, styles.canvas, {marginLeft: -this.props.radius+'px'})}
          ref={c => {
          this.canvas = c;
        }}
          width={this.props.radius*2}
          height={this.props.radius*2}></canvas>

        <div
          style={Object.assign({}, styles.panle, {backgroundColor: this.state.color})}></div>
        <img style={styles.icon} src={lightImg}/>
      </div>
    );
  }
}

ColorPick.propTypes = {
  onMouseDownIsHit: PropTypes.func,
  onChange: PropTypes.func,
  onChangeEnd: PropTypes.func,
  radius: PropTypes.number,
  color: PropTypes.string
};

ColorPick.defaultProps = {
  onMouseDownIsHit: () => {},
  onChange: () => {},
  onChangeEnd: () => {},
  radius: 90,
  color: 'rgb(0, 227, 255)'
};

export default ColorPick;
