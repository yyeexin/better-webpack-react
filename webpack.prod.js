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
const base = require('./webpack.base.js')

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
				test: /\.css$/,
				exclude: /node_modules/,
				use: [MiniCssExtractPlugin.loader, 'happypack/loader?id=css']
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [MiniCssExtractPlugin.loader, 'happypack/loader?id=scss']
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: [MiniCssExtractPlugin.loader, 'happypack/loader?id=less']
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192,
						outputPath: 'image'
					}
				}
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: 'main.css' }),
		new CleanWebpackPlugin(),
		new BundleAnalyzerPlugin(),
		new Happypack({
			id: 'js',
			threadPool: happyThreadPool,
			loaders: ['babel-loader']
		}),
		new Happypack({
			id: 'css',
			threadPool: happyThreadPool,
			loaders: [{ loader: 'css-loader', options: { modules: true } }, 'postcss-loader']
		}),
		new Happypack({
			id: 'less',
			threadPool: happyThreadPool,
			loaders: [
				{ loader: 'css-loader', options: { modules: true } },
				'postcss-loader',
				{ loader: 'less-loader', options: { javascriptEnabled: true } }
			]
		}),
		new Happypack({
			id: 'scss',
			threadPool: happyThreadPool,
			loaders: [{ loader: 'css-loader', options: { modules: true } }, 'postcss-loader', 'sass-loader']
		})
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
