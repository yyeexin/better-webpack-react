import dva from 'dva'
import createLoading from 'dva-loading'
import router from './router'
import models from './models'

// 引入编辑器相关样式
import 'braft-editor/dist/index.css' // 编辑器样式
import 'braft-editor/dist/output.css' // 编辑器内容输出样式
import 'braft-extensions/dist/table.css' // 编辑器表格功能扩展样式

// 全局样式
import './global.less'

// 1. Initialize
const app = dva()

// 2. Plugins
app.use(createLoading())

// 3. Model
models.forEach(model => app.model(model.default))

// 4. Router
app.router(router)

// 5. Start
app.start('#root')
