import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    lang: 'zh-CN',

    title: '使用手册',
    description: 'vivo温控引擎 & 系统优化Pro',

    theme: defaultTheme({
        logo: 'https://vuejs.press/images/hero.png',

        navbar: ['/', '/faq'], // <-- 添加 FAQ 导航

        // 启用最后更新时间
        lastUpdated: true,
        // 可选：自定义最后更新时间文本的前缀
        lastUpdatedText: '上次更新 ',
    }),
})