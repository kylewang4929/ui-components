## Knob
> Knob

## 依赖
> 无

## 基础用法
```js
import React, {Component} from 'react';
import {Knob} from 'gizwits_components';

const styles = {
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: '-webkit-radial-gradient(circle, #fff,#fff)'  
  },
  container: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    marginTop: '-150px'
  }
};

class KnobExample extends Component {
  render() {
    return (
      <div style={styles.bg}>
        <div style={styles.container}>
          <Knob/>
        </div>
      </div>
    );
  }
}

export default KnobExample;
```

## 参数
| 名称 | 类型 | 默认 | 描述 |
|:-------------:|:---------------:|:-------------:|:-------------:|
|onChange|func|`(value) => {}`|数值变化回调，返回颜数值|
|onChangeAfter|func|`(value) => {}`|数值变化结束回调，返回颜数值|
|tips|string or element|`当前 28 ℃`|提示文字|
|title|string or element|`设置温度`|标题文字|
|targetValue|number|`90`|knob的值|
|step|number|`1`|step|
|min|number|`0`|最小值|
|max|number|`100`|最大值|

## 主题
> 暂无主题提供，如需要深度定制，可以更改代码。