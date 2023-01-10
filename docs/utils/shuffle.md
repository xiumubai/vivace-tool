# 数组洗牌

此`shuffle`是基于` Fisher–Yates shuffle`的实现，它可以随机打乱数组并且每个元素都能得到公平待遇

### 示例

```js
import { shuffle } from 'vivace-tool'
const arr = [1,2,3,4,5]
shuffle(arr) // ======> "[3,4,5,2,1,]"
```

