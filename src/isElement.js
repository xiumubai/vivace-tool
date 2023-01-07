/*
 * @Description: 判断对象是否为DOM元素
 * @Author: Songnian Chen
 * @Date: 2023-01-06 10:04:50
 * @LastEditTime: 2023-01-06 10:30:08
 * @LastEditors: Songnian Chen
 */

import { isString } from './isString'

const isObject = (val) => typeof val === 'object'

export const isElement = (val) =>
  isObject(HTMLElement)
    ? val instanceof HTMLElement
    : isObject(val) && isString(val.nodeName) && val.nodeType === 1
