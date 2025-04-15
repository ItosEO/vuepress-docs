import comp from "/home/user/vuepress-docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"https://yr.itostar.com.cn/round_icon.png\",\"actions\":[{\"text\":\"开始阅读\",\"link\":\"/thermal.html\",\"type\":\"primary\"},{\"text\":\"获取卡密\",\"link\":\"https://fk.qkrxr.cn/shop/itostar\",\"type\":\"secondary\"},{\"text\":\"网盘\",\"link\":\"https://down.itostar.com.cn/PremiumApp\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"源码开发\",\"details\":\"基于Java、Kotlin开发，支持Android 10-Android 16\"},{\"title\":\"效果显著\",\"details\":\"有效优化手机游戏性能、续航表现、日用体验\"},{\"title\":\"简单配置\",\"details\":\"无需繁琐的配置，开箱即用，支持自定义配置\"},{\"title\":\"智能调度\",\"details\":\"根据应用场景智能调整系统资源，平衡性能与功耗。\"},{\"title\":\"后台管理\",\"details\":\"精细化控制后台应用活动，减少不必要的资源占用。\"},{\"title\":\"网络优化\",\"details\":\"改善网络连接稳定性，降低游戏延迟，提升浏览速度。\"}],\"footer\":\"Copyright © 2022-2025 ItosEO 版权所有\"},\"git\":{\"updatedTime\":1744713987000,\"contributors\":[{\"name\":\"maoyujie2\",\"username\":\"maoyujie2\",\"email\":\"maoyujie2@gmail.com\",\"commits\":1,\"url\":\"https://github.com/maoyujie2\"}],\"changelog\":[{\"hash\":\"6858a46eb847f323a480e989302c9519c137791c\",\"time\":1744713987000,\"email\":\"maoyujie2@gmail.com\",\"author\":\"maoyujie2\",\"message\":\"Frist\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
