const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //压缩css样式
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //抽离css样式为单独文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //清空dist目录
const { merge } = require("webpack-merge");
const path = require("path");
const base = require("./webpack.config.base.js");

module.exports = merge(base, {
    mode: "production",
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
            {
                test: /\.((c|le)ss)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader", options: { modules: true } },
                    "postcss-loader",
                    { loader: "less-loader" },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:6].css", // 注意这里使用的是contenthash，否则任意的js改动，打包时都会导致css的文件名也跟着变动。
            chunkFilename: "css/[name].[contenthash:6].css",
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin()],
    },
});
