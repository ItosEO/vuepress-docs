import comp from "/home/user/vuepress-docs/docs/.vuepress/.temp/pages/thermal.html.vue"
const data = JSON.parse("{\"path\":\"/thermal.html\",\"title\":\"vivo 温控引擎使用手册\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1744713987000,\"contributors\":[{\"name\":\"maoyujie2\",\"username\":\"maoyujie2\",\"email\":\"maoyujie2@gmail.com\",\"commits\":1,\"url\":\"https://github.com/maoyujie2\"}],\"changelog\":[{\"hash\":\"6858a46eb847f323a480e989302c9519c137791c\",\"time\":1744713987000,\"email\":\"maoyujie2@gmail.com\",\"author\":\"maoyujie2\",\"message\":\"Frist\"}]},\"filePathRelative\":\"thermal.md\"}")
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
