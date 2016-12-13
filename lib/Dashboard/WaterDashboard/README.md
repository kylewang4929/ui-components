## Water Dashboard
> 净水系列的表盘。

## 依赖
> 无

## 基础用法
```js
import React, {Component} from 'react';
import {BaseDashboard} from 'gizwits_components';

const styles = {
  container: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    marginTop: '-150px'
  },
  icon: {
    width: '12px',
    marginRight: '6px',
    position: 'absolute',
    top: '2px',
    left: '0px'
  }
};

const heating = require('./icon_refrigeration_cold.png');

class BaseDashboardExample extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    const tips = (<span>制冷中<img style={styles.icon} src={heating} /></span>);

    return (
      <div style={styles.container}>
        <BaseDashboard tips={tips} value={12} them='cold'/>
      </div>
    );
  }
}

export default BaseDashboardExample;

```

## 参数
| 名称 | 类型 | 默认 | 描述 |
|:-------------:|:---------------:|:-------------:|:-------------:|
|value|number|10|中心显示的数值|
|tips|string or element|`制冷中`|下方提示文字|
|title|string or element|`设置温度`|标题|
|titleStyle|object|`{}`|标题样式|
|tipsStyle|object|`{}`|tips样式|
|valueStyle|object|`{}`|value样式|
|them|string|`cold`|主题，可选`cold`和`warm`|

## 主题
> 提供两套主题，`warm`和`cold`，也可自行更改`scss`文件。