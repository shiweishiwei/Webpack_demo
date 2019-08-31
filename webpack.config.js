const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './js/bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react']
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            filename: './html/index.html',
            template: './public/index.html',
            chunk: ['bundle']
        }),
        new MiniCssExtractPlugin({
            filename:"./css/[name].css",
        })
    ],
    devServer: {
        port: 8000,
        open: true
    },
    resolve: {
        //配置别名
        alias: {
            coms: path.resolve(__dirname, 'src/components')
        }
    }
}