## 空净 Dashboard
> 包含粒子动画，更符合空净的设计。

## 依赖
> 无

## 基础用法
```js
import React, {Component} from 'react';
import AirDashboard from './AirDashboard';

const styles = {
  container: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    marginTop: '-150px'
  }
};

class AirDashboardExample extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container}>
        <AirDashboard value={12}/>
      </div>
    );
  }
}

export default AirDashboardExample;

```

## 参数
| 名称 | 类型 | 默认 | 描述 |
|:-------------:|:---------------:|:-------------:|:-------------:|
|radius|number|110|半径|
|ringStarColor|string|`rgba(255,255,255,1)`|圆环渐变的开始颜色|
|ringEndColor|string|`rgba(255,255,255,0.1)`|圆环渐变的结束颜色|
|ringBgColor|string|`rgba(255,255,255,0.3)`|圆环背景颜色|
|ringShadowColor|string|`rgba(255,255,255,0.3)`|圆环背景颜色|
|ringShadowColor|string|`#fff`|圆环阴影颜色|
|ringShadowBlur|number|10|圆环阴影扩散半径|
|value|string|12|表盘数值|
|valueStyle|object|`{}`|数值的样式|
|title|string or element|`<span>室内PM2.5<sub style={styles.sub}>ug/m<sup style={styles.sup}>2</sup></sub></span>`|标题|
|titleStyle|object|`{}`|标题的样式|
|tips|string or element|`PM2.5记录`|tips|
|tipsStyle|object|`{}`|tips的样式|
|particleNumber|number|27|粒子的数量|
|particleColor|string|`rgba(255,255,255,0.4)`|粒子的颜色|

## 主题
> 暂无主题提供，如需要深度定制，可以更改代码。