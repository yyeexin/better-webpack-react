import dva from 'dva'
import createLoading from 'dva-loading'
import router from './router'
import models from './models'
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
