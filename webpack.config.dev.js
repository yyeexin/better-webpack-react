const MiniCssExtractPlugin = require('mini-css-extract-plugin') //抽离css样式为单独文件
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { smart } = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const os = require('os')
const Happypack = require('happypack')
const happyThreadPool = Happypack.ThreadPool({ size: os.cpus().length })
const base = require('./webpack.config.base.js')
const getLocalIp = require('./scripts/getLocalIp')
const IP = getLocalIp()
const port = 3456

module.exports = smart(base, {
	mode: 'development',
	devtool: 'cheap-eval-source-map', //增加映射文件 可以帮助我们调试源代码
	devServer: {
		clientLogLevel: 'none', //关闭webpack控制台输出
		quiet: true,
		hot: true, //启用热更新
		contentBase: './dist', //devServer如果不指定contentBase,默认会在根目录下起一个静态资源服务器,显示文件目录
		host: IP,
		port,
		progress: true,
		open: true,
		compress: true, // 是否压缩
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
				pathRewrite: { '/api': '' }
			}
		},
		before(app) {
			app.get('/user', (req, res) => {
				res.json({
					name: 'study-webpack'
				})
			})
		}
	},
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
				use: 'happypack/loader?id=css'
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: 'main.css' }),
		new FriendlyErrorsWebpackPlugin({
			compilationSuccessInfo: {
				messages: [`App is running at: http://${IP}:${port}/`]
			}
		}),
		new webpack.NamedModulesPlugin(), //打印更新的模块路径
		new webpack.HotModuleReplacementPlugin(), //热更新插件
		new Happypack({
			id: 'js',
			threadPool: happyThreadPool,
			loaders: [{ loader: 'babel-loader', options: { cacheDirectory: true } }]
		}),
		new Happypack({
			id: 'css',
			threadPool: happyThreadPool,
			loaders: [
				'style-loader',
				{ loader: 'css-loader', options: { modules: true } },
				'postcss-loader',
				{ loader: 'less-loader', options: { javascriptEnabled: true } }
			]
		})
	]
})
