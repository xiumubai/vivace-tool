/*
 * @Author: 朽木白
 * @Date: 2022-09-30 19:06:38
 * @LastEditors: 1547702880@@qq.com
 * @LastEditTime: 2022-10-05 14:56:33
 * @Description: 获取变量的实际类型(常用)
 */
export const getTypeOf = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}
