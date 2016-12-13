import React, {PropTypes, Component} from 'react';

require('./style');

const styles = {
  container: {
    textAlign: 'center',
    width: '220px',
    height: '220px',
    position: 'relative',
    margin: 'auto'
  },
  canvas: {
  },
  content: {
    position: 'absolute',
    left: '0px',
    top: '50%',
    marginTop: '-57px',
    width: '100%',
    color: '#fff'
  },
  title: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.9)'
  },
  value: {
    fontSize: '60px',
    margin: '12px 0px 12px 0px',
    lineHeight: '1'
  },
  sub: {
    color: 'rgba(255,255,255,0.6)'
  },
  sup: {
    transform: 'scale(0.6,0.6)'
  },
  tips: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.9)'
  },
  pointBox: {
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100%'
  }
};

class AirDashboard extends Component {

  constructor(props) {
    super(props);
    /**
     * 创建粒子动画
     */
    this.state = {
      particleDom: this.createParticle(this.props.particleNumber, {color: this.props.particleColor})
    };
  }

  //根据数量创建粒子元素
  createParticle(num, props) {
    let particleDom = [];
    for(let i = 0; i< num; i++){
      particleDom.push(<Point {...props} key={i}/>);
    }
    return particleDom;
  }

  //canvas的绘制方法
  draw(value) {
    this.ctx.beginPath();
    this.ctx.lineCap = "round";
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = this.props.ringBgColor; //生成的颜色块赋值给样式
    this.ctx.arc(this.props.radius, this.props.radius, this.props.radius - 10, 0, 2 * Math.PI, false);
    this.ctx.stroke();

    //画渐变
    this.ctx.beginPath();
    this.ctx.shadowBlur = this.props.ringShadowBlur;
    this.ctx.shadowColor = this.props.ringShadowColor;
    let grd = this.ctx.createLinearGradient(0, this.props.radius, this.props.radius * 2, this.props.radius);
    grd.addColorStop(1, this.props.ringEndColor); //0表示起点..0.1 0.2 ...1表示终点，配置颜色
    grd.addColorStop(0, this.props.ringStarColor);
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = grd; //生成的颜色块赋值给样式
    this.ctx.arc(this.props.radius, this.props.radius, this.props.radius - 10, 0, value, false);
    this.ctx.stroke();

  }

  //绘制canvas
  componentDidMount() {
    this.ctx = this.canvasDom.getContext('2d');
    const radian = Math.PI / 180 * 180;
    this.draw(radian);
  }

  //如果粒子数量改变了，则重新绘制
  componentWillReceiveProps(nextProps) {
    if(this.props.particleNumber != nextProps.particleNumber){
      this.setState({
        particleDom: this.createParticle(nextProps.particleNumber, {color: this.props.particleColor})
      });
    }
  }

  render() {

    return (
      <div className='air-dashboard' style={Object.assign({}, styles.container, {width: this.props.radius * 2, height: this.props.radius * 2})}>
        <div style={styles.pointBox}>
          {this.state.particleDom}
        </div>
        <canvas
          className='rain-animation'
          style={styles.canvas}
          ref={c => {
          this.canvasDom = c;
        }}
          width={this.props.radius * 2}
          height={this.props.radius * 2}></canvas>
        <div style={styles.content}>
          <div style={Object.assign({}, styles.title, this.props.titleStyle)}>
            {this.props.title}
          </div>
          <div style={Object.assign({}, styles.value, this.props.valueStyle)}>
            {this.props.value}
          </div>
          <div style={Object.assign({}, styles.tips, this.props.tipsStyle)}>
            {this.props.tips}
          </div>
        </div>
      </div>
    );
  }
}

AirDashboard.defaultProps = {
  radius: 110,
  ringStarColor: 'rgba(255,255,255,1)',
  ringEndColor: 'rgba(255,255,255,0.1)',
  value: 12,
  valueStyle: {},
  ringBgColor: 'rgba(255,255,255,0.3)',
  particleNumber: 27,
  particleColor: 'rgba(255,255,255,0.4)',
  title: (<span>室内PM2.5<sub style={styles.sub}>ug/m<sup style={styles.sup}>2</sup></sub></span>),
  titleStyle: {},
  tips: 'PM2.5记录',
  tipsStyle: {},
  ringShadowColor: '#fff',
  ringShadowBlur: 10,
};

AirDashboard.propTypes = {
  value: PropTypes.number,
  radius: PropTypes.number,
  ringColor: PropTypes.string,
  ringBgColor: PropTypes.string,
  particleNumber: PropTypes.number,
  particleColor: PropTypes.string,
  title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
  ]),
  tips: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
  ]),
  valueStyle: PropTypes.object,
  tipsStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  ringShadowColor: PropTypes.string,
  ringShadowBlur: PropTypes.number
};


const pointStyles = {
  point: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    left: '0px',
    top: '0px',
    position: 'absolute'
  }
};
class Point extends Component {

  constructor(props) {
    super(props);

    this.createAnimate = this.createAnimate.bind(this);
    this.createAnimate();
    this.state = {
      css: {
        left: this.left,
        top: this.top,
        transform: 'scale(1)',
        width: '0px',
        height: '0px',
      },
      class: ''
    };

    this.timeOutHandle = null;

    this.transitionEnd = this.transitionEnd.bind(this);
    this.transitionEvent = this.whichTransitionEvent();
  }

  whichTransitionEvent() {
    let t,
      el = document.createElement('surface'),
      transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
      };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }

  createAnimate() {
    this.animateClass = parseInt(Math.random() * 1000) % 2? 'point-animation-left': 'point-animation-right';
    this.left = 0;
    this.top = 0;

    if(parseInt(Math.random() * 1000) % 2){
      if(parseInt(Math.random() * 1000) % 2){
        this.left = Math.random() * 300;
        this.top = Math.random() * 300;
      }else{
        this.top = Math.random() * -30;
        this.left = Math.random() * -30;
      }
    }else{
      if(parseInt(Math.random() * 1000) % 2){
        this.left = Math.random() * -30;
        this.top = Math.random() * 300;
      }else{
        this.left = Math.random() * 300;
        this.top = Math.random() * -30;
      }
    }

    this.width = Math.random() * 8;
    this.timeOut = Math.random() * 10000;
  }

  transitionEnd() {
    this.dom.removeEventListener(this.transitionEvent, this.transitionEnd); //销毁事件
    //重置元素状态
    this.createAnimate();

    this.setState({
      class: ''
    });

    this.setState({
      css: {
        left: this.left,
        top: this.top,
        transform: 'scale(1)',
        width: '0px',
        height: '0px',
      },
      class: ''
    });

    this.transitionEvent && this.dom.addEventListener(this.transitionEvent, this.transitionEnd);

    setTimeout(() => {
      this.setState({
        class: this.animateClass,
        css: {
          left: '50%',
          width: this.width,
          height: this.width,
          top: '50%',
          transform: 'scale(0)'
        }
      });
    }, this.timeOut);
  }

  componentDidMount() {
    this.timeOutHandle = setTimeout(() => {
      this.setState({
        class: this.animateClass
      });
      this.setState({
        css: {
          left: '50%',
          width: this.width,
          height: this.width,
          top: '50%',
          transform: 'scale(0)'
        }
      });
    }, this.timeOut);
    this.transitionEvent && this.dom.addEventListener(this.transitionEvent, this.transitionEnd);    
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutHandle);
  }

  render() {
    return (
      <div ref={c => { this.dom = c; }}
        className={this.state.class}
        style={Object.assign({}, pointStyles.point, this.state.css, {backgroundColor: this.props.color})}></div>
    );
  }
}

Point.propTypes = {
  color: PropTypes.string
};

export default AirDashboard;