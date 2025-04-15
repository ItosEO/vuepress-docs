import comp from "/home/user/vuepress-docs/docs/.vuepress/.temp/pages/thermal.html.vue"
const data = JSON.parse("{\"path\":\"/thermal.html\",\"title\":\"vivo 温控引擎使用手册\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1744713987000,\"contributors\":[{\"name\":\"maoyujie2\",\"username\":\"maoyujie2\",\"email\":\"maoyujie2@gmail.com\",\"commits\":1,\"url\":\"https://github.com/maoyujie2\"}],\"changelog\":[{\"hash\":\"6858a46eb847f323a480e989302c9519c137791c\",\"time\":1744713987000,\"email\":\"maoyujie2@gmail.com\",\"author\":\"maoyujie2\",\"message\":\"Frist\"}]},\"filePathRelative\":\"thermal.md\",\"excerpt\":\"\\n<p><strong>手册版本:</strong> Gelato</p>\\n<p>通过本手册，您将全面了解 vivo 温控引擎应用的功能和使用方法。</p>\\n<h2>1. 简介</h2>\\n<p>vivo 温控引擎是一款强大的工具，旨在帮助用户优化设备温控策略，提升游戏性能和日常使用体验。本手册将详细介绍其各项功能，助您轻松上手。</p>\\n<h2>2. 登录</h2>\\n<h3>2.1 登录页面元素</h3>\\n<p>登录页面包含以下元素：</p>\\n<ul>\\n<li><strong>下拉菜单 (线路选择):</strong> 用于线路选择。通常无需修改，除非登录无响应时尝试切换。</li>\\n<li><strong>登录按钮:</strong> 点击使用卡密登录。</li>\\n<li><strong>解绑按钮:</strong> 跳转至解绑网页，用于解绑设备。</li>\\n<li><strong>卡密输入框:</strong> 输入购买的卡密。</li>\\n</ul>\"}")
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
