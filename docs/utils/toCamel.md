# 中划线命名转换为驼峰命名

在前端中我们会碰到类似于`-webkit-`的命名，如需要转换为驼峰命名就可以使用`toCamel`

### 示例

```js
import { toCamel } from 'vivace-tool'
console.log(camelize('-webkit-transform')) // ======> "WebkitTransform"
console.log(camelize('webkit-transform')) // ======> "webkitTransform"
```

