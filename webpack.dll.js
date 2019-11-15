/**
 * 打包一些第三方库成一个单独文件,不用每次都重新打包,优化项目构建速度
 */
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: {
		venders: ['react', 'react-dom', 'jquery'],
		assets: ['@ant-design/icons/lib/dist.js']
	},
	output: {
		filename: 'dll_[name].js',
		path: path.resolve(__dirname, 'dll'),
		library: 'dll_[name]'
	},
	resolve: {
		alias: {
			'react-dom': '@hot-loader/react-dom'
		}
	},
	plugins: [
		new CleanWebpackPlugin(),
		new UglifyJsPlugin({
			cache: true, //缓存
			parallel: true, //并发
			sourceMap: false // 源码映射
		}),
		new webpack.DllPlugin({
			name: 'dll_[name]',
			path: path.resolve(__dirname, 'dll', 'manifest_[name].json')
		})
	]
}
