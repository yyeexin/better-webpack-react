const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //抽离css样式为单独文件
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') //压缩css样式
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') //压缩打包后的代码
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //清空dist目录

module.exports = {
	entry: './src/index.js',
	/**
	 * 1) source-map : 源码映射 会单独生成一个源码映射文件 出错会表示出错的列和行
	 * 2) eval-source-map : 不会产生单独的文件 但是可以显示 行和 列
	 * 3) cheap-module-source-map : 不会产生列 但是是一个单独的文件
	 * 4）cheap-module-eval-source-map ：不会产生文件 集成在打包后的文件 也不会产生列
	 */
	// devtool: 'source-map', //增加映射文件 可以帮助我们调试源代码
	output: {
		filename: '[name].[hash:8].js', //打包后的文件名
		path: path.resolve(__dirname, 'dist') //路径必须是一个决定路径
	},
	devServer: {
		contentBase: './dist', //devServer如果不指定contentBase,默认会在根目录下起一个静态资源服务器,显示文件目录
		port: 3456,
		progress: true,
		open: true,
		compress: true // 是否压缩
	},
	watch: true, //实时打包
	watchOptions: {
		poll: 1000, //每秒监控多少次
		aggreatement: 500, //输入防抖
		ignored: /node_moudles/ //不需要监控哪个文件
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
			filename: 'css/main.css'
		}),
		new CleanWebpackPlugin()
	],
	externals: {
		//告诉webpack,此模块是外部引用的 并不需要打包 例如引入外部cdn资源
		jquery: '$'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/, // 加快编译速度，不包含node_modules文件夹内容
				include: path.resolve(__dirname, './src'),
				use: 'babel-loader'
			},
			{
				test: /\.(css|less)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'less-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 1,
						outputPath: 'image'
					}
				}
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
