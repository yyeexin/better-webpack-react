const path = require('path') //系统路径模块
const fs = require('fs') //文件模块
const filePath = path.resolve(__dirname, '../dll')

function getDlls() {
	let manifests = []
	let dlls_url = []
	const fileDir = fs.readdirSync(filePath)
	if (!fileDir.length) return
	fileDir.forEach(function(filename) {
		if (!/\.json$/.test(filename)) return

		manifests.push(filename)

		const filedir = path.join(filePath, filename)
		const content = fs.readFileSync(filedir, 'utf-8')
		const manifest = JSON.parse(content)
		manifest.name && dlls_url.push(`./dll/${manifest.name}.js`)
	})
	return {
		manifests,
		dlls_url
	}
}

module.exports = getDlls
