import comp from "/home/user/vuepress-docs/docs/.vuepress/.temp/pages/faq.html.vue"
const data = JSON.parse("{\"path\":\"/faq.html\",\"title\":\"常见问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"常见问题\",\"prev\":\"/pro.md\"},\"git\":{\"updatedTime\":1744815006000,\"contributors\":[{\"name\":\"maoyujie2\",\"username\":\"maoyujie2\",\"email\":\"maoyujie2@gmail.com\",\"commits\":3,\"url\":\"https://github.com/maoyujie2\"}],\"changelog\":[{\"hash\":\"dda58ef568569d2f4524f91a401a99ff43cefc79\",\"time\":1744815006000,\"email\":\"maoyujie2@gmail.com\",\"author\":\"maoyujie2\",\"message\":\"更新文档，加入底部导航\"},{\"hash\":\"46e6fad87c72614730a4456c6670af57a801024a\",\"time\":1744808731000,\"email\":\"maoyujie2@gmail.com\",\"author\":\"maoyujie2\",\"message\":\"更新文档\"},{\"hash\":\"6858a46eb847f323a480e989302c9519c137791c\",\"time\":1744713987000,\"email\":\"maoyujie2@gmail.com\",\"author\":\"maoyujie2\",\"message\":\"Frist\"}]},\"filePathRelative\":\"faq.md\",\"excerpt\":\"\\n<h2>登录与账号问题</h2>\\n<p><strong>Q: 点击登录无反应怎么办？</strong></p>\\n<p>A: 尝试以下操作</p>\\n<ul>\\n<li>切换登录线路（通过登录页面的下拉菜单）。</li>\\n<li>更换网络环境（例如，从 Wi-Fi 切换到移动数据，反之亦然）。</li>\\n<li>在手机设置中搜索并执行“还原所有设置”（注意：这仅还原设置，不删除数据）。</li>\\n<li>耐心等待，可能是服务器暂时出现问题或受到攻击。</li>\\n</ul>\\n<p><strong>Q: 登录提示“风控”怎么办？</strong></p>\\n<p>A: 请根据软件内的提示联系客服 QQ 处理。</p>\"}")
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
