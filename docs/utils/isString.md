# 判断是否为字符串

### 源码参考

```js

import getTypeOf from './getTypeOf'

export const isString = (target) => {
  return typeof target === 'string' && getTypeOf(target) === 'string'
}
```

### 示例

```js
import { isString } from 'vivace-tool'
console.log(isString('a')) // true
console.log(isString({})) // false
```