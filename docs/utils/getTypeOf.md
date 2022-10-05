# 获取变量的实际类型(常用)

```js
const getTypeOf = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

console.log(getTypeOf(''));
// string
console.log(getTypeOf(0));
// number
console.log(getTypeOf());
// undefined
console.log(getTypeOf(null));
// null
console.log(getTypeOf({}));
// object
console.log(getTypeOf([]));
// array
console.log(getTypeOf(0));
// number
console.log(getTypeOf(() => {}));
// function
```