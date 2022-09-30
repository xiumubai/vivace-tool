/*
 * @Author: 朽木白
 * @Date: 2022-09-03 01:09:44
 * @LastEditors: xxx@xxx.com
 * @LastEditTime: 2022-09-30 16:44:04
 * @Description:
 */


module.exports = {
  title: 'vivace-util',
  description: 'frontend docs',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  ],
  themeConfig: {
    siteTitle: 'Vivace Tool',
    logo: '/logo.png',
    laslltUpdatedText: '最后更新',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/xiumubai',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present xiumubai',
    },
    sidebar: {
      '/': [
        {
          text: '函数集合',
          items: [
            { text: "sum", link: '/utils/sum' },
            { text: "uniqueArr", link: '/utils/uniqueArr' },
            { text: "getParameters", link: '/utils/getParameters' },
            { text: "isEmpty", link: '/utils/isEmpty' },
            { text: "reverse", link: '/utils/reverse' },
            { text: "randomHexColor", link: '/utils/randomHexColor' },
            { text: "isTabActive", link: '/utils/isTabActive' },
            { text: "elementIsInFocus", link: '/utils/elementIsInFocus' },
            { text: "judgeDeviceType", link: '/utils/judgeDeviceType' },
            { text: "copyText", link: '/utils/copyText' },
            { text: "getSelectedText", link: '/utils/getSelectedText' },
            { text: "isWeekday", link: '/utils/isWeekday' },
            { text: "fahrenheitToCelsius", link: '/utils/fahrenheitToCelsius' },
            { text: "celsiusToFahrenheit", link: '/utils/celsiusToFahrenheit' },
            { text: "dayDiff", link: '/utils/dayDiff' },
            { text: "rgbToHex", link: '/utils/rgbToHex' },
            { text: "average", link: '/utils/average' },
          ]
        }
      ]
    },
  },
};
