const { smart } = require('webpack-merge')
const base = require('./webpack.base.js')
module.exports = smart(base, {
	mode: 'development',
	/**
	 * 1) source-map : 源码映射 会单独生成一个源码映射文件 出错会表示出错的列和行
	 * 2) eval-source-map : 不会产生单独的文件 但是可以显示 行和 列
	 * 3) cheap-module-source-map : 不会产生列 但是是一个单独的文件
	 * 4）cheap-module-eval-source-map ：不会产生文件 集成在打包后的文件 也不会产生列
	 */
	devtool: 'source-map', //增加映射文件 可以帮助我们调试源代码
	devServer: {
		contentBase: './dist', //devServer如果不指定contentBase,默认会在根目录下起一个静态资源服务器,显示文件目录
		port: 3456,
		progress: true,
		open: true,
		compress: true, // 是否压缩
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
				pathRewrite: { '/api': '' }
			}
		},
		//mock接口
		before(app) {
			app.get('/user', (req, res) => {
				res.json({
					name: 'study-webpack'
				})
			})
		}
	}
	// watch: true, //实时打包
	// watchOptions: {
	// 	poll: 1000, //每秒监控多少次
	// 	aggreatement: 500, //输入防抖
	// 	ignored: /node_moudles/ //不需要监控哪个文件
	// },
})
