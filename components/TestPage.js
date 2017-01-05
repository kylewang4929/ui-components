import React, {Component} from 'react';
import TabMenu from '../src/TabMenu/index';

const styles = {
  container: {
  }
};

class TestPage extends Component {

  constructor(props) {
    super(props);
    this.menus = [
      {
        icon: 'mdi mdi-home',
        name: '首页'
      }, 
      {
        icon: 'mdi mdi-account-card-details',
        name: '列表'
      }, 
      {
        icon: 'mdi mdi-buffer',
        name: '事件'
      }, 
      {
        icon: 'mdi mdi-account',
        name: '账户'
      }
    ];
  }

  render() {
    return (
      <div style={Object.assign({}, styles.container)}>
        <TabMenu onChange={this.onChange} menus={this.menus}/>
      </div>
    );
  }
}

export default TestPage;