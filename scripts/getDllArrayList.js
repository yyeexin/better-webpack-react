const path = require('path') //系统路径模块
const fs = require('fs') //文件模块
const filePath = path.resolve(__dirname, '../dll')

function getDllArrayList() {
	let dll_arr = []
	const fileDir = fs.readdirSync(filePath)
	if (!fileDir.length) return
	fileDir.forEach(function(filename) {
		if (!/\.json$/.test(filename)) return
		const filedir = path.join(filePath, filename)
		const content = fs.readFileSync(filedir, 'utf-8')
		const manifest = JSON.parse(content)
		manifest.name && dll_arr.push(`./dll/${manifest.name}.js`)
	})
	return dll_arr
}

module.exports = getDllArrayList
