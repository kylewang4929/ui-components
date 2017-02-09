## Modal
>弹窗

## 依赖
> 无

## 基础用法
```js
import React, {Component} from 'react';
import {Alert, Loading, ConfirmAlert, ConfirmInput} from 'gizwits_components';

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0px',
    top: '0px',
    padding: '10px'
  },
  overlay: {
    position: 'absolute'
  },
  button: {
    padding: '0px 16px',
    height: '32px',
    lineHeight: '32px',
    borderRadius: '4px',
    backgroundColor: 'rgb(22, 175, 203)',
    textAlign: 'center',
    cursor: 'pointer',
    color: '#fff',
    boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 10px 0px rgba(0, 0, 0, 0.08)',
    display: 'inline-block',
    margin: '0px 10px 10px 0px'
  }
};

class ModalExample extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      alert: {
        isShow: false,
        title: '提示',
        content: '这是一个提示。'
      },
      loading: {
        isShow: false,
        content: 'loading',
        isShowIcon: true
      },
      confirmAlert: {
        isShow: false,
        title: '提示',
        content: '这是一个提示。'
      },
      confirmInput: {
        isShow: false,
        title: '提示',
        content: '这是一个提示。',
        inputValue: ''
      }
    };

    //alert
    this.onAlertClose = this.onAlertClose.bind(this);
    this.showAlert = this.showAlert.bind(this);

    //loading
    this.onLoadingClose = this.onLoadingClose.bind(this);
    this.showLoading = this.showLoading.bind(this);

    //confirmAlert
    this.onConfirmAlertClose = this.onConfirmAlertClose.bind(this);
    this.onConfirmAlertConfirm = this.onConfirmAlertConfirm.bind(this);
    this.showConfirmAlert = this.showConfirmAlert.bind(this);

    //confirmInput
    this.onConfirmInputClose = this.onConfirmInputClose.bind(this);
    this.onConfirmInputConfirm = this.onConfirmInputConfirm.bind(this);
    this.showConfirmInput = this.showConfirmInput.bind(this);

  }

  //alert
  onAlertClose() {
    const state = this.state.alert;
    state.isShow = false;

    this.setState({
      alert: state
    });
  }
  showAlert() {
    const state = this.state.alert;
    state.isShow = true;

    this.setState({
      alert: state
    });
  }

  //loading
  onLoadingClose() {
    const state = this.state.loading;
    state.isShow = false;

    this.setState({
      loading: state
    });
  }
  showLoading() {
    const state = this.state.loading;
    state.isShow = true;

    this.setState({
      loading: state
    });
  }

  //confirmAlert
  onConfirmAlertClose() {
    const state = this.state.confirmAlert;
    state.isShow = false;

    this.setState({
      confirmAlert: state
    });
  }
  onConfirmAlertConfirm() {
    const state = this.state.confirmAlert;
    state.isShow = false;

    this.setState({
      confirmAlert: state
    });
  }
  showConfirmAlert() {
    const state = this.state.confirmAlert;
    state.isShow = true;

    this.setState({
      confirmAlert: state
    });
  }

  //confirmInput
  onConfirmInputClose() {
    const state = this.state.confirmInput;
    state.isShow = false;

    this.setState({
      confirmInput: state
    });
  }
  onConfirmInputConfirm() {
    const state = this.state.confirmInput;
    state.isShow = false;

    this.setState({
      confirmInput: state
    });
  }
  showConfirmInput() {
    const state = this.state.confirmInput;
    state.isShow = true;

    this.setState({
      confirmInput: state
    });
  }

  render() {
    return (
      <div style={styles.container}>

        <div style={styles.button} onClick={this.showAlert}>
          Alert
        </div>

        <div style={styles.button} onClick={this.showLoading}>
          Loading
        </div>

        <div style={styles.button} onClick={this.showConfirmAlert}>
          confirmAlert
        </div>

        <div style={styles.button} onClick={this.showConfirmInput}>
          confirmInput
        </div>

        <Alert onClose={this.onAlertClose} overlayStyle={styles.overlay} {...this.state.alert}/>
        <Loading onClose={this.onLoadingClose} overlayStyle={styles.overlay} {...this.state.loading}/>
        <ConfirmAlert onConfirm={this.onConfirmAlertConfirm} onClose={this.onConfirmAlertClose} overlayStyle={styles.overlay} {...this.state.confirmAlert}/>
        <ConfirmInput onConfirm={this.onConfirmInputConfirm} onClose={this.onConfirmInputClose} overlayStyle={styles.overlay} {...this.state.confirmInput}/>

      </div>
    );
  }
}

export default ModalExample;
```

## 参数

###Alert
| 名称 | 类型 | 默认 | 描述 |
|:-------------:|:---------------:|:-------------:|:-------------:|
|content|string or element|``|文字内容|
|isShow|bool|`false`|是否显示|
|onClose|func|`()=>{}`|点击关闭区域时触发|
|overlayStyle|object|`{}`|overlay的样式|

###Loading
| 名称 | 类型 | 默认 | 描述 |
|:-------------:|:---------------:|:-------------:|:-------------:|
|content|string or element|``|文字内容|
|isShow|bool|`false`|是否显示|
|isShowIcon|bool|`false`|是否Loading Icon|
|onClose|func|`()=>{}`|点击关闭区域时触发|
|overlayStyle|object|`{}`|overlay的样式|

###ConfirmAlert
| 名称 | 类型 | 默认 | 描述 |
|:-------------:|:---------------:|:-------------:|:-------------:|
|content|string or element|``|文字内容|
|closeText|string|``|取消按钮文字|
|confirmText|string|``|确定按钮文字|
|isShow|bool|`false`|是否显示|
|onClose|func|`()=>{}`|点击关闭区域时触发|
|onConfirm|func|`()=>{}`|点击确定时触发|
|overlayStyle|object|`{}`|overlay的样式|

###ConfirmInput
| 名称 | 类型 | 默认 | 描述 |
|:-------------:|:---------------:|:-------------:|:-------------:|
|content|string or element|``|文字内容|
|closeText|string|``|取消按钮文字|
|confirmText|string|``|确定按钮文字|
|isShow|bool|`false`|是否显示|
|onClose|func|`()=>{}`|点击关闭区域时触发|
|onConfirm|func|`(value)=>{}`|点击确定时触发，返回输入框输入的内容|
|overlayStyle|object|`{}`|overlay的样式|

## 主题
> 无