import comp from "/home/user/vuepress-docs/docs/.vuepress/.temp/pages/faq.html.vue"
const data = JSON.parse("{\"path\":\"/faq.html\",\"title\":\"常见问题 (FAQ)\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1744713987000,\"contributors\":[{\"name\":\"maoyujie2\",\"username\":\"maoyujie2\",\"email\":\"maoyujie2@gmail.com\",\"commits\":1,\"url\":\"https://github.com/maoyujie2\"}],\"changelog\":[{\"hash\":\"6858a46eb847f323a480e989302c9519c137791c\",\"time\":1744713987000,\"email\":\"maoyujie2@gmail.com\",\"author\":\"maoyujie2\",\"message\":\"Frist\"}]},\"filePathRelative\":\"faq.md\",\"excerpt\":\"\\n<p>本页面的问题与解答均整理自 vivo 温控引擎与 vivo 系统优化 Pro 的使用手册。</p>\\n<h2>温控引擎 FAQ</h2>\\n<h3>登录与账号问题</h3>\\n<p><strong>Q: 点击登录无反应怎么办？</strong></p>\\n<p>A:</p>\\n<ul>\\n<li>尝试切换登录线路（通过登录页面的下拉菜单）。</li>\\n<li>更换网络环境（例如，从 Wi-Fi 切换到移动数据，反之亦然）。</li>\\n<li>在手机设置中搜索并执行“还原所有设置”（注意：这仅还原设置，不删除数据）。</li>\\n<li>耐心等待，可能是服务器暂时出现问题或受到攻击。</li>\\n</ul>\"}")
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
