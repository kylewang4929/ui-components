## Color Pick
> 颜色选择器，可用于和灯相关的设备。

## 依赖
> 无

## 基础用法
```js
import React, {Component} from 'react';
import {ColorPick} from 'gizwits_components';

const styles = {
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000'  
  },
  container: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    marginTop: '-150px'
  }
};

class ColorPickExample extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.bg}>
        <div style={styles.container}>
          <ColorPick/>
        </div>
      </div>
    );
  }
}

export default ColorPickExample;
```

## 参数
| 名称 | 类型 | 默认 | 描述 |
|:-------------:|:---------------:|:-------------:|:-------------:|
|onChange|func|`(color) => {}`|颜色变化回调，返回颜色值|
|onChangeEnd|func|`(color) => {}`|颜色变化结束回调，返回颜色值|
|onMouseDownIsHit|func|`(isHit, position) => {}`|插件被点击的时候触发，返回是否命中色卡，以及触发事件的位置，很少会用到这个方法，处理一些遮挡问题的时候可能会用到|
|radius|number|90|插件的半径大小|
|color|string|`rgb(0, 227, 255)`|选中的颜色|

## 主题
> 暂无主题提供，如需要深度定制，可以更改代码。