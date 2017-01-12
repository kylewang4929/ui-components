import React, {Component, PropTypes} from 'react';

const image = require('./home_btn_power.png');

const styles = {
  container: {
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100%',
    background: '#fff',
    overflow: 'hidden',

  },
  inner: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    background: '-webkit-radial-gradient(circle, rgb(66, 215, 243),rgb(22, 175, 203))',
    position: 'absolute',
    top: '50%',
    left: '50%',
    margin: '-140px 0px 0px -90px',
    boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 10px 0px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
    position: 'relative'
  },
  img: {
    width: '80%',
    height: '80%',
    display: 'block',
    margin: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    margin: '-40% 0px 0px -40%'
  },
  text: {
    fontSize: '13px',
    top: '106%',
    position: 'absolute',
    width: '100%',
    color: '#717171',
    textAlign: 'center'
  }
};

class PowerPage extends Component {

  render() {
    const {pageStyle, boxStyle, imageStyle, onClick} = this.props;
    return (
      <div style={{...styles.container, ...pageStyle}}>
        <div style={{...styles.inner, ...boxStyle}} onClick={onClick}>
          <img style={{...styles.img, ...imageStyle}} src={image}/>
          <div style={styles.text}>
            点击启动设备
          </div>
        </div>
      </div>
    );
  }
}

PowerPage.defaultProps = {
  onClick: () => {},
  boxStyle: {},
  imageStyle: {},
  pageStyle: {},
};
PowerPage.propTypes = {
  onClick: PropTypes.func,
  boxStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  pageStyle: PropTypes.object,
};
export default PowerPage;