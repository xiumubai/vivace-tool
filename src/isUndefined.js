/*
 * @Author: 朽木白
 * @Date: 2022-10-05 15:18:04
 * @LastEditors: 1547702880@@qq.com
 * @LastEditTime: 2022-10-05 15:35:53
 * @Description: 判断是否为undefined
 */
import { getTypeOf } from './getTypeOf'

export const isUndefined = (target) => {
  return (
    target === undefined &&
    typeof target === 'undefined' &&
    getTypeOf(target) === 'undefined'
  )
}
