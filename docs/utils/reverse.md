# 反转字符串

反转字符串可以使用split结合reverse和join方法轻松实现。

```js
const reverse = str => str.split('').reverse().join('');
reverse('this is reverse');
// esrever si siht
```