# 获取变量的实际类型(常用)

```js
const trueTypeOf = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

console.log(trueTypeOf(''));
// string
console.log(trueTypeOf(0));
// number
console.log(trueTypeOf());
// undefined
console.log(trueTypeOf(null));
// null
console.log(trueTypeOf({}));
// object
console.log(trueTypeOf([]));
// array
console.log(trueTypeOf(0));
// number
console.log(trueTypeOf(() => {}));
// function
```