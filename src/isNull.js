/*
 * @Author: 朽木白
 * @Date: 2022-10-05 15:18:04
 * @LastEditors: 1547702880@@qq.com
 * @LastEditTime: 2022-10-05 15:35:36
 * @Description: 判断是否为Null
 */
import { getTypeOf } from './getTypeOf'

export const isNull = (target) => {
  return target === null && getTypeOf(target) === 'null'
}
