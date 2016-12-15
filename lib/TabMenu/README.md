## 简介
>建议采用文本图标，引入了一个字体库[`mdi`](https://github.com/Templarian/MaterialDesign),文本图标的可控性很大，放大不会失真，可以更改颜色，设置更方便等。我们也可以设计一个自己的图标库，满足不同客户的需求。
关于制作文字图标可以使用诸如[`icomoon`](https://icomoon.io/)的工具，画完图标的时候导出`svg`，然后上传到网站生成即可。

## 依赖
> 无

## 基础用法
```js
import React, {Component} from 'react';

import TabMenu from './TabMenu.js';

class TabMenuExample extends Component {
  constructor(props) {
    super(props);
    this.menus = [
      {
        icon: 'mdi mdi-home',
        name: '首页'
      }, 
      {
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
```

## 参数
| 名称 | 类型 | 默认 | 描述 |
|:-------------:|:---------------:|:-------------:|:-------------:|
|menus|array|`[ ]`|菜单列表，类型为数组，支持`{icon: '', name: '', subMenu: ''}`格式，`subMenu`可不填|
|onChange|func|`null`|点击`item`时触发，返回被点击的菜单的数据`onChange(item){}`|

## 主题
> 暂时只提供了一种配色。