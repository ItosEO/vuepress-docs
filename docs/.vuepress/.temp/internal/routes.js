export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/user/vuepress-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/faq.html", { loader: () => import(/* webpackChunkName: "faq.html" */"/home/user/vuepress-docs/docs/.vuepress/.temp/pages/faq.html.js"), meta: {"title":"常见问题"} }],
  ["/pro.html", { loader: () => import(/* webpackChunkName: "pro.html" */"/home/user/vuepress-docs/docs/.vuepress/.temp/pages/pro.html.js"), meta: {"title":"系统优化Pro 使用手册"} }],
  ["/thermal.html", { loader: () => import(/* webpackChunkName: "thermal.html" */"/home/user/vuepress-docs/docs/.vuepress/.temp/pages/thermal.html.js"), meta: {"title":"vivo温控引擎 使用手册"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/user/vuepress-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
