import React, { PropTypes, Component } from 'react';

require('./style.css');

const styles = {
  overlay: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: '1000',
    display: 'block'
  },
  modalBox: {
    backgroundColor: '#fff',
    borderRadius: '6px',
    overflow: 'hidden',
    width: '260px',
    height: '160px',
    margin: '-50px auto 0px auto',
    position: 'relative',
    padding: '0px 30px 0px 30px'
  },
  alertBox: {
    backgroundColor: '#fff',
    borderRadius: '6px',
    overflow: 'hidden',
    width: '82%',
    maxWidth: '280px',
    margin: '-50px auto 0px auto',
    padding: '20px 30px 20px 30px',
    position: 'relative',
    fontSize: '14px',
    lineHeight: '1.4'
  },
  alertTitle: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#ffb716',
    padding: '0px 0px 4px 0px'
  },
  alertContent: {
    padding: '20px 0px',
    textAlign: 'center',
    fontSize: '12px'
  },
  modalContentBox: {
    display: 'table',
    overflow: 'hidden',
    height: '117px',
    width: '100%'
  },
  modalContent: {
    display: 'table-cell',
    verticalAlign: 'middle'
  },
  buttonBox: {
    position: 'absolute',
    width: '100%',
    bottom: '0px',
    borderTop: '1px solid #e6e6e6',
    left: '0px'
  },
  button: {
    float: 'left',
    width: '50%',
    textAlign: 'center',
    lineHeight: '42px',
    fontSize: '12px'
  },
  buttonBorderRight: {
    borderRight: '1px solid #e6e6e6'
  },
  boxTitle: {
    textAlign: 'center',
    fontSize: '13px',
    lineHeight: '1.4'
  },
  input: {
    outline: '0',
    border: '1px solid #e6e6e6',
    width: '80%',
    height: '30px',
    padding: '0px 8px',
    margin: '14px 0px 0px 10%',
    borderRadius: '2px'
  },
  loadingBox: {
    width: '240px',
    borderRadius: '6px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    margin: '-50px auto 0px auto',
    fontSize: '13px',
    color: '#fff',
    padding: '30px 20px'
  },
  loadingText: {
    textAlign: 'center',
    fontSize: '13px'
  },
  loadingIcon: {
    marginBottom: '18px'
  }
};

const CenterStyle = {
  container: {
    display: 'table',
    height: '100%',
    width: '100%'
  },
  cell: {
    verticalAlign: 'middle',
    height: '100%',
    width: '100%',
    display: 'table-cell'
  }
};

/**
 * loading
 */
class Loading extends Component {
  render() {
    return React.createElement(
      Overlay,
      { style: this.props.overlayStyle, onClose: this.props.onClose, isShow: this.props.isShow },
      React.createElement(LoadingContent, { isShowIcon: this.props.isShowIcon, content: this.props.content })
    );
  }
}
Loading.propTypes = {
  content: PropTypes.string,
  isShow: PropTypes.bool,
  isShowIcon: PropTypes.bool,
  onClose: PropTypes.func,
  overlayStyle: PropTypes.object
};
Loading.defaultProps = {
  content: '',
  isShow: true,
  isShowIcon: true,
  onClose: () => {},
  overlayStyle: {}
};

/**
 * loading的主要元素
 */
class LoadingContent extends Component {
  render() {
    return React.createElement(
      'div',
      { style: styles.loadingBox },
      React.createElement('div', { style: Object.assign({}, { display: this.props.isShowIcon ? 'block' : 'none' }, styles.loadingIcon), className: 'loader' }),
      React.createElement(
        'div',
        { style: styles.loadingText },
        this.props.content
      )
    );
  }
}
LoadingContent.defaultProps = {
  isShowIcon: true,
  content: 'loading'
};
LoadingContent.propTypes = {
  content: PropTypes.string,
  isShowIcon: PropTypes.bool
};

/**
 * 提示框
 */
class Alert extends Component {
  render() {
    return React.createElement(
      Overlay,
      { style: this.props.overlayStyle, onClose: this.props.onClose, isShow: this.props.isShow },
      React.createElement(
        'div',
        { style: styles.alertBox },
        React.createElement(
          'div',
          { style: styles.alertTitle },
          this.props.title
        ),
        React.createElement(
          'div',
          { style: styles.alertContent },
          this.props.content
        )
      )
    );
  }
}
Alert.propTypes = {
  isShow: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onClose: PropTypes.func,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  overlayStyle: PropTypes.object
};
Alert.defaultProps = {
  isShow: true,
  title: '提示',
  onClose: () => {},
  content: '这是一个提示框。',
  overlayStyle: {}
};

/**
 * 带输入框的确认弹窗
 */
class ConfirmInput extends Component {
  render() {
    return React.createElement(
      Overlay,
      { style: this.props.overlayStyle, onClose: this.props.onClose, isShow: this.props.isShow },
      React.createElement(ConfirmInputBox, {
        onClose: this.props.onClose,
        onConfirm: this.props.onConfirm,
        closeText: this.props.closeText,
        confirmText: this.props.confirmText,
        inputValue: this.props.inputValue,
        content: this.props.content })
    );
  }
}
ConfirmInput.propTypes = {
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  isShow: PropTypes.bool,
  closeText: PropTypes.string,
  confirmText: PropTypes.string,
  content: PropTypes.string,
  overlayStyle: PropTypes.object
};
ConfirmInput.defaultProps = {
  onClose: () => {},
  onConfirm: () => {},
  isShow: true,
  closeText: '取消',
  confirmText: '确定',
  content: '文字',
  overlayStyle: {}
};
/**
 * 普通确认框
 */
class ConfirmAlert extends Component {
  render() {
    return React.createElement(
      Overlay,
      { style: this.props.overlayStyle, onClose: this.props.onClose, isShow: this.props.isShow },
      React.createElement(ConfirmAlertBox, {
        onClose: this.props.onClose,
        onConfirm: this.props.onConfirm,
        closeText: this.props.closeText,
        confirmText: this.props.confirmText,
        content: this.props.content })
    );
  }
}
ConfirmAlert.propTypes = {
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  isShow: PropTypes.bool,
  closeText: PropTypes.string,
  confirmText: PropTypes.string,
  content: PropTypes.string,
  overlayStyle: PropTypes.object
};
ConfirmAlert.defaultProps = {
  onClose: () => {},
  onConfirm: () => {},
  isShow: true,
  closeText: '取消',
  confirmText: '确定',
  content: 'text',
  overlayStyle: {}
};

class Overlay extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  //阻止事件冒泡
  componentDidMount() {
    this.overlayDom.addEventListener('mousedown', function (e) {
      e.stopPropagation();
    });
    this.overlayDom.addEventListener('touchstart', function (e) {
      e.stopPropagation();
    });
  }

  //阻止冒泡
  handleClick(e) {
    if (!this.props.onClose) {} else {
      this.props.onClose(e);
    }
    e.stopPropagation();
  }

  render() {
    const style = {
      display: this.props.isShow ? 'block' : 'none'
    };
    return React.createElement(
      'div',
      { className: 'modal', ref: c => {
          this.overlayDom = c;
        }, onClick: this.handleClick, style: Object.assign({}, styles.overlay, style, this.props.style) },
      React.createElement(
        'div',
        { style: CenterStyle.container },
        React.createElement(
          'div',
          { style: CenterStyle.cell },
          this.props.children
        )
      )
    );
  }
}

Overlay.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  isShow: PropTypes.bool,
  onClose: PropTypes.func,
  style: PropTypes.object
};
Overlay.defaultProps = {
  children: {},
  isShow: true,
  onClose: () => {},
  style: {}
};

class ConfirmInputBox extends Component {

  constructor(props) {
    super(props);

    this.onConfirmHandle = this.onConfirmHandle.bind(this);
    this.onCloseHandle = this.onCloseHandle.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      length: this.props.inputValue.length
    };
  }

  handleClick(e) {
    e.stopPropagation();
  }

  onConfirmHandle() {
    if (this.state.length != 0) {
      const name = this.inputDom.value;
      this.props.onConfirm(name);
    }
  }

  //重置输入框的值
  onCloseHandle() {
    this.props.onClose();
    this.inputDom.value = this.props.inputValue;
    this.setState({
      length: this.props.inputValue.length
    });
  }

  onChange() {
    const length = this.inputDom.value.length;
    this.setState({
      length: length
    });
  }

  render() {
    return React.createElement(
      'div',
      { onClick: this.handleClick, style: styles.modalBox },
      React.createElement(
        'div',
        { style: styles.modalContentBox },
        React.createElement(
          'div',
          { style: styles.modalContent },
          React.createElement(
            'div',
            { style: styles.boxTitle },
            this.props.content
          ),
          React.createElement('input', { ref: c => {
              this.inputDom = c;
            }, maxLength: '15', onChange: this.onChange, style: styles.input, defaultValue: this.props.inputValue })
        ),
        React.createElement(Buttons, {
          onClose: this.onCloseHandle,
          onConfirm: this.onConfirmHandle,
          closeText: this.props.closeText,
          confirmText: this.props.confirmText,
          confirmButtonType: this.state.length == 0 ? '' : this.props.confirmButtonType,
          cancelButtonType: this.props.cancelButtonType })
      )
    );
  }
}
ConfirmInputBox.propTypes = {
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  closeText: PropTypes.string,
  confirmText: PropTypes.string,
  content: PropTypes.string
};
ConfirmInputBox.defaultProps = {
  onClose: () => {},
  onConfirm: () => {},
  closeText: '取消',
  confirmText: '确定',
  content: 'test'
};

class ConfirmAlertBox extends Component {
  handleClick(e) {
    e.stopPropagation();
  }

  render() {
    return React.createElement(
      'div',
      { onClick: this.handleClick, style: styles.modalBox },
      React.createElement(
        'div',
        { style: styles.modalContentBox },
        React.createElement(
          'div',
          { style: styles.modalContent },
          React.createElement(
            'div',
            { style: styles.boxTitle },
            this.props.content
          )
        ),
        React.createElement(Buttons, {
          onClose: this.props.onClose,
          onConfirm: this.props.onConfirm,
          closeText: this.props.closeText,
          confirmText: this.props.confirmText,
          confirmButtonType: this.props.confirmButtonType,
          cancelButtonType: this.props.cancelButtonType })
      )
    );
  }
}
ConfirmAlertBox.propTypes = {
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  closeText: PropTypes.string,
  confirmText: PropTypes.string,
  content: PropTypes.string
};
ConfirmAlertBox.defaultProps = {
  onClose: () => {},
  onConfirm: () => {},
  closeText: '取消',
  confirmText: '确定',
  content: 'test'
};

class Buttons extends Component {

  getButtonStyle(type) {
    let style = {};
    switch (type) {
      case "success":
        style = {
          color: '#6db312',
          backgroundColor: '#fff'
        };
        break;
      case "error":
        style = {
          color: '#fff',
          backgroundColor: '#ff7676'
        };
        break;
      default:
        style = {
          color: '#d6d6d6'
        };
        break;
    }
    return style;
  }

  render() {
    const cancelButtonStyle = {
      color: '#d6d6d6'
    };
    const confirmButtonStyle = {
      color: 'rgb(22, 175, 203)',
      backgroundColor: '#fff'
    };
    return React.createElement(
      'div',
      { style: styles.buttonBox },
      React.createElement(
        'div',
        { onClick: this.props.onClose, style: Object.assign({}, styles.button, styles.buttonBorderRight, cancelButtonStyle) },
        '\u53D6\u6D88'
      ),
      React.createElement(
        'div',
        { onClick: this.props.onConfirm, style: Object.assign({}, styles.button, confirmButtonStyle) },
        '\u786E\u5B9A'
      )
    );
  }
}
Buttons.propTypes = {
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  closeText: PropTypes.string,
  confirmText: PropTypes.string
};
Buttons.defaultProps = {
  onClose: () => {},
  onConfirm: () => {},
  closeText: '取消',
  confirmText: '确定'
};

export { ConfirmInput, ConfirmAlert, Alert, Loading };