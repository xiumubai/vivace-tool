/*
 * @Author: 朽木白
 * @Date: 2022-09-03 01:09:44
 * @LastEditors: Songnian Chen
 * @LastEditTime: 2023-01-10 16:07:07
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
          text: 'Util',
          collapsible: true,
          items: [
            { text: "getParameters", link: '/utils/getParameters' },
            { text: "randomHexColor", link: '/utils/randomHexColor' },
            { text: "isTabActive", link: '/utils/isTabActive' },
            { text: "elementIsInFocus", link: '/utils/elementIsInFocus' },
            { text: "judgeDeviceType", link: '/utils/judgeDeviceType' },
            { text: "copyText", link: '/utils/copyText' },
            { text: "getSelectedText", link: '/utils/getSelectedText' },
            { text: "rgbToHex", link: '/utils/rgbToHex' },
            { text: "toCamel", link: '/utils/toCamel' },
          ]
        },
        {
          text: 'Type',
          collapsible: true,
          items: [
            { text: "getTypeOf", link: '/utils/getTypeOf' },
            { text: "isEmpty", link: '/utils/isEmpty' },
            { text: "isNumber", link: '/utils/isNumber' },
            { text: "isString", link: '/utils/isString' },
            { text: "isObject", link: '/utils/isObject' },
            { text: "isNull", link: '/utils/isNull' },
            { text: "isArray", link: '/utils/isArray' },
            { text: "isUndefined", link: '/utils/isUndefined' },
            { text: "isTrue", link: '/utils/isTrue' },
            { text: "isElement", link: '/utils/isElement' },
          ]
        },
        {
          text: 'String',
          items: [
            { text: "reverse", link: '/utils/reverse' },
          ]
        },
        {
          text: 'Number',
          items: [
            { text: "sum", link: '/utils/sum' },

            { text: "fahrenheitToCelsius", link: '/utils/fahrenheitToCelsius' },
            { text: "celsiusToFahrenheit", link: '/utils/celsiusToFahrenheit' },
            { text: "average", link: '/utils/average' },
          ]
        },
        {
          text: 'Array',
          items: [
            { text: "uniqueArr", link: '/utils/uniqueArr' },
            { text: "shuffle", link: '/utils/shuffle' },
          ]
        },
        {
          text: 'Date',
          items: [
            { text: "isWeekday", link: '/utils/isWeekday' },
            { text: "dayDiff", link: '/utils/dayDiff' },
          ]
        },

      ]
    },
  },
};
