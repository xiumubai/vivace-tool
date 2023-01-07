# 判断对象是否为DOM元素

我们在写`js`代码时有时需要判断某个对象是不是`DOM`对象，然后再进行后续的操作，这里我们给出`isElement`的方法去进行判断。如果该对象是`HTMLElement`的实例，则它肯定是一个`DOM`对象。在不支持`HTMLElement`的浏览器中我们可以使用特征检测法，即检测对象身上是否有`DOM`特有的一些属性。

### 示例

```js
// 注意需要有document对象
import { isElement } from 'vivace-tool'
const p = document.createElement("p")
console.log(isElement(p)) // ======> "true"
```

