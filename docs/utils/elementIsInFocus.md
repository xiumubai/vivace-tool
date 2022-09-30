# activeElement 属性返回文档中当前获得焦点的元素。

```js
const elementIsInFocus = (el) => (el === document.activeElement);

elementIsInFocus(anyElement)
// 元素处于焦点返回true，反之返回false
```