## Water Dashboard
> 净水系列的表盘。

## 依赖
> 无

## 基础用法
```js
import React, {Component} from 'react';
import WaterDashboard from 'gizwits_components';

const styles = {
  container: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    marginTop: '-150px'
  }
};

class WaterDashboardExample extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container}>
        <WaterDashboard/>
      </div>
    );
  }
}

export default WaterDashboardExample;

```

## 参数
| 名称 | 类型 | 默认 | 描述 |
|:-------------:|:---------------:|:-------------:|:-------------:|
|value|number|10|中心显示的数值|
|unit|string or element|`TDS`|下方提示文字|
|valueStyle|object|`{}`|数值样式|
|unitStyle|object|`{}`|单位样式|
|waveColor|string|`#0cdaff`|水纹的颜色|

## 主题
> 无。