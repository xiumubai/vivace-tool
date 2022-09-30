# 文字复制到剪贴板
Clipboard API 它的所有操作都是异步的，返回 Promise 对象，不会造成页面卡顿。而且，它可以将任意内容（比如图片）放入剪贴板。

```js
const copyText = async (text) => await navigator.clipboard.writeText(text)
copyText('单行代码 前端世界')
```