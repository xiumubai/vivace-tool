/*
 * @Description: 洗牌，随机打乱数组
 * @Author: Songnian Chen
 * @Date: 2023-01-10 15:34:58
 * @LastEditTime: 2023-01-10 15:36:14
 * @LastEditors: Songnian Chen
 */

export function shuffle(source) {
  const arr = source.slice()
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = getRandomIndex(i)
    swap(arr, i, j)
  }
  return arr
}

const getRandomIndex = (i) => {
  return Math.floor(Math.random() * (i + 1))
}

const swap = (arr, i, j) => {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
