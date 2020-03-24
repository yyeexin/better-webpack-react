const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin') //给生成的html文件插入自定义标签
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
module.exports = {
	entry: ['react-hot-loader/patch', './src/index.js'],
	output: {
		filename: '[name].[hash:6].js', //打包后的文件名
		path: path.resolve(__dirname, 'dist'), //路径必须是一个决定路径
		chunkFilename: 'chunk/[name].[chunkhash:6].js' //非主文件的命名规则
	},
	resolve: {
		extensions: ['.js', '.css', '.json'], //省略文件后缀名
		alias: {
			'react-dom': '@hot-loader/react-dom',
			'@': path.resolve(__dirname, './src'),
			assets: path.resolve(__dirname, './src/assets'),
			hooks: path.resolve(__dirname, './src/hooks'),
			pages: path.resolve(__dirname, './src/pages'),
			models: path.resolve(__dirname, './src/models'),
			utils: path.resolve(__dirname, './src/utils')
		}
	},
	module: {
		// noParse: /jquery/, //不去解析这个包的内部依赖,加快解析速度
		rules: [
			// 处理图片(file-loader来处理也可以，url-loader更适合图片)
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: 'image/[name].[hash:6].[ext]'
				},
				exclude: /node_modules/
			},
			// 处理多媒体文件
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'media/[name].[hash:6].[ext]'
				},
				exclude: /node_modules/
			},
			// 处理字体文件
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'fonts/[name].[hash:6].[ext]'
				},
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HardSourceWebpackPlugin(),
		new CopyWebpackPlugin(),
		new webpack.ProvidePlugin({
			// 大量需要使用到的模块，在此处一次性注入，避免到处import/require。
			React: 'react'
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			favicon: './src/favicon.ico',
			hash: true,
			minify: {
				removeAttributeQuotes: true, //删除双引号
				collapseWhitespace: true //折叠成一行
			}
		}),
		new webpack.IgnorePlugin(/\.\/locale/, /moment/), //忽略moment内容自动引入所有语言包的行为,减小打包体积
		new HtmlWebpackTagsPlugin({
			tags: ['https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js'],
			append: false
		})
	],
	externals: {
		jquery: '$' //告诉webpack,此模块是外部引用的 并不需要打包 例如引入外部cdn资源
	},
	performance: {
		hints: false
	},
	optimization: {
		splitChunks: {
			chunks: 'async',
			minSize: 30000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	}
}
