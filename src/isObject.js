/*
 * @Author: 朽木白
 * @Date: 2022-10-05 15:18:04
 * @LastEditors: 1547702880@@qq.com
 * @LastEditTime: 2022-10-05 15:35:42
 * @Description: 判断是否为Object
 */
import { getTypeOf } from './getTypeOf'

export const isObject = (target) => {
  return (
    typeof target === 'object' &&
    target !== null &&
    !Array.isArray(target) &&
    getTypeOf(target) === 'object'
  )
}
