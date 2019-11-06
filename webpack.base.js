const path = require('path')
const os = require('os')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //抽离css样式为单独文件
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Happypack = require('happypack')
const happyThreadPool = Happypack.ThreadPool({ size: os.cpus().length })
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin') //给生成的html文件插入自定义标签
const getDlls = require('./scripts/getDlls')
const DllsInfo = getDlls()

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].[hash:8].js', //打包后的文件名
		path: path.resolve(__dirname, 'dist') //路径必须是一个决定路径
	},
	resolve: {
		extensions: ['.js', '.css', '.json'], //省略文件后缀名
		alias: {
			image: path.resolve(__dirname, './src/image')
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
				use: [MiniCssExtractPlugin.loader, 'happypack/loader?id=css']
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'happypack/loader?id=scss']
			},
			{
				test: /\.less$/,
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
		],
		noParse: /jquery/ //不去解析这个包的内部依赖,加快解析速度
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
			hash: true,
			minify: {
				removeAttributeQuotes: true, //删除双引号
				collapseWhitespace: true //折叠成一行
			}
		}),
		new MiniCssExtractPlugin({ filename: 'css/main.css' }),
		new webpack.IgnorePlugin(/\.\/locale/, /moment/), //忽略moment内容自动引入所有语言包的行为,减小打包体积
		new CopyWebpackPlugin([
			{
				from: './dll',
				to: path.resolve(__dirname, './dist/dll'),
				toType: 'dir',
				ignore: ['*.json']
			}
		]),
		new Happypack({
			id: 'js',
			threadPool: happyThreadPool,
			loaders: ['babel-loader']
		}),
		new Happypack({
			id: 'css',
			threadPool: happyThreadPool,
			loaders: ['css-loader', 'postcss-loader']
		}),
		new Happypack({
			id: 'less',
			threadPool: happyThreadPool,
			loaders: ['css-loader', 'postcss-loader', { loader: 'less-loader', options: { javascriptEnabled: true } }]
		}),
		new Happypack({
			id: 'scss',
			threadPool: happyThreadPool,
			loaders: ['css-loader', 'postcss-loader', 'sass-loader']
		}),
		// new webpack.DllReferencePlugin({
		// 	manifest: path.resolve(__dirname, 'dll', 'manifest_icons.json') //引用动态链接库
		// }),
		// new webpack.DllReferencePlugin({
		// 	manifest: path.resolve(__dirname, 'dll', 'manifest_vendor.json') //引用动态链接库
		// }),
		new HtmlWebpackTagsPlugin({
			tags: ['https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js', ...DllsInfo.dlls_url],
			append: false
		})
	].concat([
		...DllsInfo.manifests.map(
			manifest =>
				new webpack.DllReferencePlugin({
					manifest: path.resolve(__dirname, 'dll', manifest) //引用动态链接库
				})
		)
	]),
	externals: {
		//告诉webpack,此模块是外部引用的 并不需要打包 例如引入外部cdn资源
		jquery: '$'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				common: {
					name: 'common',
					chunks: 'all',
					minSize: 0,
					minChunks: 2
				},
				vendor: {
					name: 'vendor',
					chunks: 'all',
					test: /[\\/]node_modules[\\/]/,
					minSize: 0,
					minChunks: 2,
					priority: 1
				}
			}
		}
	}
}
