const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //抽离css样式为单独文件
const MiniCssExtractPlugin_less = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') //压缩css样式
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') //压缩打包后的代码

module.exports = {
	mode: 'production', //production
	entry: './src/index.js',
	output: {
		filename: 'bundle.[hash:8].js', //打包后的文件名
		path: path.resolve(__dirname, 'dist') //路径必须是一个决定路径
	},
	/**
	 * devServer如果不指定contentBase,默认会在根目录下起一个静态资源服务器,显示文件目录
	 */
	devServer: {
		contentBase: './dist',
		port: 3456,
		progress: true,
		open: true,
		compress: true // 是否压缩
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			hash: true,
			minify: {
				removeAttributeQuotes: true, //删除双引号
				collapseWhitespace: true //折叠成一行
			}
		}),
		new MiniCssExtractPlugin({
			filename: 'main.css'
		}),
		new MiniCssExtractPlugin_less({
			filename: 'less.css'
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin_less.loader,
					// {
					// 	loader: 'style-loader'
					// },
					'css-loader',
					'less-loader',
					'postcss-loader'
				]
			}
		]
	},
	optimization: {
		minimizer: [
			new OptimizeCSSAssetsPlugin(),
			new UglifyJsPlugin({
				cache: true, //缓存
				parallel: true, //并发
				sourceMap: true // 源码映射
			})
		]
	}
}
