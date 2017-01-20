import React, {Component, PropTypes} from 'react';
const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0px',
    top: '0px',
    backgroundColor: '#fff'
  },
  verticalOuter: {
    display: 'table',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    paddingBottom: '100px'
  },
  verticalMiddle: {
    display:'table-cell',
    verticalAlign:'middle',
    width: '100%',
    height: '100%',
    textAlign: 'center'
  },
  text: {
    fontSize: '12px',
    color: '#828282'
  },
  icon: {
    color: '#828282',
    fontSize: '70px',
    position: 'absolute',
    left: '50%',
    marginLeft: '-35px',
    marginTop: '-100px'
  }
};

class InputTipsPage extends Component {

  render() {
    const {pageStyle, iconStyle, textStyle, icon, text} = this.props;
    return (
      <div style={{...styles.container, ...styles.verticalOuter, ...pageStyle}}>
        <div style={{...styles.box, ...styles.verticalMiddle}}>
          <i className={icon} style={{...styles.icon, ...iconStyle}}></i>
          <span style={{...styles.text, ...textStyle}}>{text}</span>
        </div>
      </div>
    );
  }
}

InputTipsPage.defaultProps = {
  onClick: () => {},
  iconStyle: {},
  textStyle: {},
  pageStyle: {},
  icon: 'mdi mdi-share',
  text: '请在此处输入需要连接的设备的Did'
};
InputTipsPage.propTypes = {
  onClick: PropTypes.func,
  iconStyle: PropTypes.object,
  textStyle: PropTypes.object,
  pageStyle: PropTypes.object,
};
export default InputTipsPage;