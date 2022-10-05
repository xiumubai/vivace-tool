# 判断是否为数字

### 源码参考

```js

import getTypeOf from './getTypeOf'

export const isNumber = (target) => {
  return typeof target === 'number' && getTypeOf(target) === 'number'
}
```

### 示例

```js
import { isNumber } from 'vivace-tool'
console.log(isNumber(1)) // true
console.log(isNumber({})) // false
```