import React, {Component} from 'react';

import TabMenu from './index';

class TabMenuExample extends Component {
  constructor(props) {
    super(props);
    this.menus = [
      {
        icon: 'mdi mdi-home',
        name: '首页'
      }, {
        icon: 'mdi mdi-account-card-details',
        name: '列表',
        subMenu: [
          {
            icon: 'mdi mdi-account-card-details',
            name: '列表1'
          },
          {
            icon: 'mdi mdi-account-card-details',
            name: '列表2'
          },
          {
            icon: 'mdi mdi-account-card-details',
            name: '列表3'
          }
        ]
      }, {
        icon: 'mdi mdi-buffer',
        name: '事件'
      }, {
        icon: 'mdi mdi-account',
        name: '账户'
      }
    ];
  }

  onChange(item) {
    console.log(item);
  }

  render() {
    return (
      <TabMenu onChange={this.onChange} menus={this.menus}/>
    );
  }
}

export default TabMenuExample;