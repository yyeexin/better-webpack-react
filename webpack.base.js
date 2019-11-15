const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin') //给生成的html文件插入自定义标签
const getDLLs = require('./scripts/getDLLs')
const DLLs = getDLLs()

module.exports = {
	entry: ['react-hot-loader/patch', './src/index.js'],
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
		new webpack.IgnorePlugin(/\.\/locale/, /moment/), //忽略moment内容自动引入所有语言包的行为,减小打包体积
		new CopyWebpackPlugin([
			{
				from: './dll',
				to: path.resolve(__dirname, './dist/dll'),
				toType: 'dir',
				ignore: ['*.json']
			}
		]),
		new HtmlWebpackTagsPlugin({
			tags: ['https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js', ...DLLs.dlls_url],
			append: false
		})
	].concat([
		...DLLs.manifests.map(
			manifest =>
				new webpack.DllReferencePlugin({
					manifest: path.resolve(__dirname, 'dll', manifest) //引用动态链接库
				})
		)
	]),
	externals: {
		jquery: '$' //告诉webpack,此模块是外部引用的 并不需要打包 例如引入外部cdn资源
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
