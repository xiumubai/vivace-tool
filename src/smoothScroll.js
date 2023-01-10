/*
 * @Description: 平滑滚动到目标元素的可视区域
 * @Author: Songnian Chen
 * @Date: 2023-01-09 10:15:58
 * @LastEditTime: 2023-01-09 10:21:36
 * @LastEditors: Songnian Chen
 */

export const smoothScroll = (anchor, block = 'start') => {
  document.querySelector(anchor)?.scrollIntoView({
    block,
    behavior: 'smooth',
  })
}
