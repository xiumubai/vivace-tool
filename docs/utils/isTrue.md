# 判断某个值是否为true

### 源码参考

```js

export const isTrue = (target) => {
  return !!target
}
```

### 示例

```js
import { isTrue } from 'vivace-tool'
console.log(isTrue(undefined)) // false
console.log(isTrue(0)) // false
console.log(isTrue({})) // true
```