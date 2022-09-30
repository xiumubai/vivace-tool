# 数组去重

从数组中删除所有重复值，实现方式非常多，我们这里就说最简单的方式，一行代码搞定：

```js
const uniqueArr = (arr) => [...new Set(arr)];

console.log(uniqueArr(["前端","js","html","js","css","html"]));
// ['前端', 'js', 'html', 'css']

```

uniqueArr方法将数据转为Set，然后再解构为数组返回。