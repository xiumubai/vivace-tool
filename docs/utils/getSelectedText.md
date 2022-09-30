# 获取选定的文本
使用内置的 getSelection 获取用户选择的文本:

```js
const getSelectedText = () => window.getSelection().toString();

getSelectedText();
// 返回选中的内容
```
