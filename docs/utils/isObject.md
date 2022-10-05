# 判断是否为对象

### 源码参考

```js

import getTypeOf from './getTypeOf'

export const isObject = (target) => {
  return typeof target === 'object' && target !== null && !Array.isArray(target)  && getTypeOf(target) === 'object'
}
```

### 示例

```js
import { isObject } from 'vivace-tool'
console.log(isObject([1])) // true
console.log(isObject({})) // false
```