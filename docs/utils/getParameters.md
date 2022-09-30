# 从url获取参数并转为对象

网页路径经常是：`www.baidu.com?search=js&xxx=kkk`这种形式的，我们是经常需要取参数的，可以使用第三方的qs包实现，如果你只是要实现去参数，这一句代码就可以实现，不用再引入qs了。

```js

const getParameters = URL => JSON.parse(`{"${decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`
  )

getParameters("https://www.google.com.hk/search?q=js+md&newwindow=1");
// {q: 'js+md', newwindow: '1'}

```