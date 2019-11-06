const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') //压缩css样式
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') //压缩打包后的代码
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //清空dist目录
const { smart } = require('webpack-merge')
const base = require('./webpack.base.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = smart(base, {
	mode: 'production',
	optimization: {
		minimizer: [
			new OptimizeCSSAssetsPlugin(),
			new UglifyJsPlugin({
				cache: true, //缓存
				parallel: true, //并发
				sourceMap: false // 源码映射
			})
		]
	},
	plugins: [new CleanWebpackPlugin(), new BundleAnalyzerPlugin()]
})
