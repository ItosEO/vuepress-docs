import "/home/user/vuepress-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/home/user/vuepress-docs/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/home/user/vuepress-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/home/user/vuepress-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/home/user/vuepress-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/home/user/vuepress-docs/node_modules/@vuepress/highlighter-helper/lib/client/index.js"
import "/home/user/vuepress-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/code-block-title.css"

export default {
  setup() {
    setupCollapsedLines()
  }
}
