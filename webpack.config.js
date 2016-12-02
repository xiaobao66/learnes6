var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: ['babel-polyfill', './scripts/src/index.js'],
        let_and_const: './scripts/src/let_and_const.js',
        destructuring_assign: './scripts/src/destructuring_assign.js',
        string_extend: './scripts/src/string_extend.js',
        array_extend: './scripts/src/array_extend.js',
        function_extend: './scripts/src/function_extend.js',
        object_extend: './scripts/src/object_extend.js'
    },
    output: {
        path: __dirname + '/scripts/dist/',
        filename: '[name]_[chunkhash:8].js'
    },
    watch: true,
    module: {
        loaders: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, './scripts/src')
            ],
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'learn es6',
            filename: '../../demos/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            title: 'let_and_const',
            filename: '../../demos/let_and_const.html',
            chunks: ['let_and_const']
        }),
        new HtmlWebpackPlugin({
            title: '解构赋值',
            filename: '../../demos/destructuring_assign.html',
            chunks: ['destructuring_assign']
        }),
        new HtmlWebpackPlugin({
            title: '字符串扩展',
            filename: '../../demos/string_extend.html',
            chunks: ['string_extend']
        }),
        new HtmlWebpackPlugin({
            title: '数组的扩展',
            filename: '../../demos/array_extend.html',
            chunks: ['array_extend']
        }),
        new HtmlWebpackPlugin({
            title: '函数的扩展',
            filename: '../../demos/function_extend.html',
            chunks: ['function_extend']
        }),
        new HtmlWebpackPlugin({
            title: '对象的扩展',
            filename: '../../demos/object_extend.html',
            chunks: ['object_extend']
        })
    ]
};
