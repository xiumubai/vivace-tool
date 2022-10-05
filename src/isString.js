/*
 * @Author: 朽木白
 * @Date: 2022-10-05 15:18:04
 * @LastEditors: 1547702880@@qq.com
 * @LastEditTime: 2022-10-05 15:36:01
 * @Description: 判断是否为字符串类型
 */
import { getTypeOf } from './getTypeOf'

export const isString = (target) => {
  return typeof target === 'string' && getTypeOf(target) === 'string'
}
