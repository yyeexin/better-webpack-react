const path = require("path");
const { merge } = require("webpack-merge");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const base = require("./webpack.config.base.js");
const getLocalIp = require("./scripts/getLocalIp");
const IP = getLocalIp();
const port = 3456;

module.exports = merge(base, {
    mode: "development",
    devtool: "inline-source-map", //增加映射文件 可以帮助我们调试源代码
    // output: {
    // 	pathinfo: false
    // },
    devServer: {
        clientLogLevel: "none", //关闭webpack控制台输出
        quiet: true,
        hot: true, //启用热更新
        contentBase: "./dist", //devServer如果不指定contentBase,默认会在根目录下起一个静态资源服务器,显示文件目录
        host: IP,
        port,
        progress: true,
        open: true,
        compress: true, // 是否压缩
        proxy: {
            "/api": {
                target:
                    "http://book-guming-two.c545f041cdb444b3db0ad02aa373f7c45.cn-hangzhou.alicontainer.com/api",
                // target: 'http://dev-b.gumingnc.com/api', //测试服务器2
                changeOrigin: true,
                secure: false,
                pathRewrite: { "^/api": "/" },
            },
            "/contractApi": {
                target: "http://dev-b.gumingnc.com/contractApi", //测试服务器2
                changeOrigin: true,
                secure: false,
                pathRewrite: { "^/contractApi": "/" },
            },
            "/koaServer": {
                target: "https://api.yyeexin.com/",
                // target: `http://${IP}:3002/`,
                changeOrigin: true,
                secure: false,
                pathRewrite: { "^/koaServer": "/" },
            },
        },
        before(app) {
            app.get("/user", (req, res) => {
                res.json({
                    name: "study-webpack",
                });
            });
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, "./src"),
                use: [
                    {
                        loader: "babel-loader",
                        options: { cacheDirectory: true },
                    },
                ],
            },
            // {
            //     test: /\.css$/,
            //     include: /node_modules/,
            //     use: ["style-loader", "css-loader"],
            // },
            {
                test: /\.((c|le)ss)$/i,
                use: [
                    "style-loader",
                    { loader: "css-loader", options: { modules: true } },
                    "postcss-loader",
                    { loader: "less-loader" },
                ],
            },
        ],
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [`App is running at: http://${IP}:${port}/`],
            },
        }),
        // new webpack.NamedModulesPlugin(), //打印更新的模块路径
        // new webpack.HotModuleReplacementPlugin(), //热更新插件
    ],
});
