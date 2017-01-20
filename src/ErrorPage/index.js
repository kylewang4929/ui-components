import React, {Component, PropTypes} from 'react';
require('./style.css');
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
    height: '100%'
  },
  box: {
    textAlign: 'center',
    color: '#828282'
  },
  icon: {
    fontSize: '140px',
  },
  text: {
    display: 'block',
    fontSize: '13px'
  },
  ul: {
    width: '240px',
    margin: 'auto',
    padding: '20px 0px',
    fontSize: '12px'
  },
  li: {
    position: 'relative',
    padding: '4px 0px 4px 12px',
  },
  liPoint: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    marginTop: '-5px',
    left: "-14px",
    backgroundColor: 'rgb(22, 175, 203)'
  },
  liText: {
    position: 'relative'
  },
  button: {},
};

class ErrorPage extends Component {

  render() {
    const {pageStyle, iconStyle, textStyle, buttonStyle, onClick, icon, text, buttonText, textList} = this.props;
    return (
      <div style={{...styles.container, ...styles.verticalOuter, ...pageStyle}}>
        <div style={{...styles.box, ...styles.verticalMiddle}}>
          <i className={icon} style={{...styles.icon, ...iconStyle}}></i>
          <span style={{...styles.text, ...textStyle}}>{text}</span>

          <div style={styles.ul}>
            {textList.map((item, index) => {
              return(
                <div style={styles.li} key={'error-list-key'+index}>
                  <span style={styles.liText}><div style={styles.liPoint}></div>{item}</span>
                </div>
              );
            })}
          </div>

          <div style={{...styles.button, ...buttonStyle}} className="error-page-button" onClick={onClick}>
            <div className="over-layer"></div>
            {buttonText}
          </div>
        </div>
      </div>
    );
  }
}

ErrorPage.defaultProps = {
  onClick: () => {},
  iconStyle: {},
  textStyle: {},
  pageStyle: {},
  buttonStyle: {},
  icon: 'mdi mdi-close-circle',
  text: '连接设备失败',
  buttonText: '重试',
  textList: [
    '设备是否正常运行',
    'Wi-Fi网络是否连接顺畅',
    '请拔下设备电源，再重新接通电源，再重试',
  ]
};
ErrorPage.propTypes = {
  onClick: PropTypes.func,
  iconStyle: PropTypes.object,
  textStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  pageStyle: PropTypes.object,
  icon: PropTypes.string
};
export default ErrorPage;