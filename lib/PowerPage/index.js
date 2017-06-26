var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component, PropTypes } from 'react';

const image = require('./home_btn_power.png');

const styles = {
  container: {
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100%',
    background: '#fff',
    overflow: 'hidden'

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
    const { pageStyle, boxStyle, imageStyle, onClick } = this.props;
    return React.createElement(
      'div',
      { style: _extends({}, styles.container, pageStyle) },
      React.createElement(
        'div',
        { style: _extends({}, styles.inner, boxStyle), onClick: onClick },
        React.createElement('img', { style: _extends({}, styles.img, imageStyle), src: image }),
        React.createElement(
          'div',
          { style: styles.text },
          '\u70B9\u51FB\u542F\u52A8\u8BBE\u5907'
        )
      )
    );
  }
}

PowerPage.defaultProps = {
  onClick: () => {},
  boxStyle: {},
  imageStyle: {},
  pageStyle: {}
};
PowerPage.propTypes = {
  onClick: PropTypes.func,
  boxStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  pageStyle: PropTypes.object
};
export default PowerPage;