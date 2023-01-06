/*
 * @Description: 中划线转为驼峰值
 * @Author: Songnian Chen
 * @Date: 2023-01-05 15:55:19
 * @LastEditTime: 2023-01-05 16:23:28
 * @LastEditors: Songnian Chen
 */

export const toCamel = (str) =>
  str.replace(/[-_]+(.)?/g, (match, item) => (item ? item?.toUpperCase() : ''))
