# 判断是否为undefined

### 源码参考

```js

import getTypeOf from './getTypeOf'

export const isUndefined = (target) => {
  return target === undefined && typeof target === 'undefined'  && getTypeOf(target) === 'undefined'
}
```

### 示例

```js
import { isUndefined } from 'vivace-tool'
console.log(isUndefined()) // true
console.log(isUndefined({})) // false
```