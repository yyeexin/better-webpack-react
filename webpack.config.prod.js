const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') //压缩css样式
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //抽离css样式为单独文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //清空dist目录
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') //压缩打包后的代码
const { smart } = require('webpack-merge')
const path = require('path')
const os = require('os')
const Happypack = require('happypack')
const happyThreadPool = Happypack.ThreadPool({ size: os.cpus().length })
const base = require('./webpack.config.base.js')

module.exports = smart(base, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/, // 加快编译速度，不包含node_modules文件夹内容
				include: path.resolve(__dirname, './src'),
				use: 'happypack/loader?id=js'
			},
			{
				test: /\.css$/,
				include: /node_modules/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.(less|css)$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: { modules: true } },
					'postcss-loader',
					{ loader: 'less-loader', options: { javascriptEnabled: true } }
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:6].css', // 注意这里使用的是contenthash，否则任意的js改动，打包时都会导致css的文件名也跟着变动。
			chunkFilename: 'css/[name].[contenthash:6].css'
		}),
		new CleanWebpackPlugin(),
		new BundleAnalyzerPlugin(),
		new Happypack({
			id: 'js',
			threadPool: happyThreadPool,
			loaders: [{ loader: 'babel-loader', options: { cacheDirectory: true } }]
		})
		// new Happypack({
		// 	id: 'less',
		// 	threadPool: happyThreadPool,
		// 	loaders: [
		// 		{ loader: 'css-loader', options: { modules: true } },
		// 		'postcss-loader',
		// 		{ loader: 'less-loader', options: { javascriptEnabled: true } }
		// 	]
		// })
	],
	optimization: {
		minimizer: [
			new OptimizeCSSAssetsPlugin(),
			new UglifyJsPlugin({
				cache: true, //缓存
				parallel: true, //并发
				sourceMap: false // 源码映射
			})
		]
	}
})
