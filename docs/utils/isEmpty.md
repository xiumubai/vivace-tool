# 检查对象是否为空

检查对象是否为空，实际上并不那么简单，即使对象为空，每次检查对象是否等于 {} 也会返回 false。

幸运的是，下面的单行代码正是我们想要的。

```js
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
isEmpty({}) // true
isEmpty({a:"not empty"}) //false
```