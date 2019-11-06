const os = require('os')
function getLocalIp() {
	let networkIp = ''
	try {
		let network = os.networkInterfaces()
		for (let dev in network) {
			let iface = network[dev]
			for (let i = 0; i < iface.length; i++) {
				let alias = iface[i]
				if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
					networkIp = alias.address
				}
			}
		}
	} catch (e) {
		networkIp = 'localhost'
	}
	return networkIp
}

module.exports = getLocalIp
