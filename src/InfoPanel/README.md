## 简介
>显示数据点相关信息

## 依赖
> 无

## 基础用法
```js
import React, {Component} from 'react';

import InfoPanel from 'gizwits_components';

class InfoPanelExample extends Component {
  constructor(props) {
    super(props);
    this.data = [
      {value: 29, unit: 'LDS', label: '自来水水质'},
      {value: 39, unit: '℃', label: '纯净水水温'},
      {value: 29, unit: 'L', label: '今天原水用量'},
      {value: 29, unit: 'L', label: '今天纯水用量'},
    ];
  }

  render() {
    return (
      <InfoPanel data={this.data}/>
    );
  }
}

export default InfoPanel;
```

## 参数
| 名称 | 类型 | 默认 | 描述 |
|:-------------:|:---------------:|:-------------:|:-------------:|
|data|array|`[ ]`|菜单列表，类型为数组，支持`{value: '', unit: '', label: ''}`格式|
|lineStyle|object|`{}`|border的样式|
|labelStyle|object|`{}`|label的样式|
|valueStyle|object|`{}`|value的样式|
|unitStyle|object|`{}`|unit的样式|

## 主题
> 暂时只提供了一种配色。