import React, {Component} from 'react';
import TabMenu from '../src/TabMenu/index';

const styles = {
  container: {
  },
  boxStyle: {
    backgroundColor: '#fff'
  },
  textStyle: {
    color: '#6f6f6f'
  },
  activeTextStyle: {
    color: '#16afcb'
  }
};

class TestPage extends Component {

  constructor(props) {
    super(props);
    this.menus = [
      {
        icon: 'mdi mdi-home',
        name: '首页',
        isActive: false
      }, 
      {
        icon: 'mdi mdi-account-card-details',
        name: '列表',
        isActive: true
      }, 
      {
        icon: 'mdi mdi-buffer',
        name: '事件',
        isActive: false
      }, 
      {
        icon: 'mdi mdi-account',
        name: '账户',
        isActive: false
      }
    ];
  }

  render() {
    return (
      <div style={Object.assign({}, styles.container)}>
        <TabMenu boxStyle={styles.boxStyle} textStyle={styles.textStyle} activeTextStyle={styles.activeTextStyle} onChange={this.onChange} menus={this.menus}/>
      </div>
    );
  }
}

export default TestPage;