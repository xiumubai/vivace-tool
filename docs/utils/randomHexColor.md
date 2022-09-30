# 生成十六进制

生成随机数相信你能信手拈来，那随机生成十六进制，例如生成十六进制颜色值。


```js
const randomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
console.log(randomHexColor());
// #a2ce5b
```