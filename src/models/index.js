const models = []

const modelsContext = require.context('./', true, /\.js$/)
const modelsContextKeys = modelsContext.keys().filter(item => item !== './index.js')
Array.prototype.push.apply(
	models,
	modelsContextKeys.map(key => modelsContext(key))
)

const pageModelsContext = require.context('../pages/', true, /model\.js$/)
const pageModelsContextKeys = pageModelsContext.keys()
Array.prototype.push.apply(
	models,
	pageModelsContextKeys.map(key => pageModelsContext(key))
)

export default models
