var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: ['babel-polyfill', './scripts/src/index.js'],
        let_and_const: './scripts/src/let_and_const.js',
        destructuring_assign: './scripts/src/destructuring_assign.js',
        string_extend: './scripts/src/string_extend.js',
        array_extend: ['babel-polyfill', './scripts/src/array_extend.js'],
        function_extend: './scripts/src/function_extend.js',
        object_extend: './scripts/src/object_extend.js',
        symbol: './scripts/src/symbol.js',
        set_and_map: './scripts/src/set_and_map.js',
        proxy_and_reflect: './scripts/src/proxy_and_reflect.js',
        generator: ['babel-polyfill', './scripts/src/generator.js'],
        promise: ['babel-polyfill', './scripts/src/promise.js'],
        async_operation: ['babel-polyfill', './scripts/src/async_operation.js'],
        es6_class: './scripts/src/es6_class.js'
    },
    output: {
        path: __dirname + '/scripts/dist/',
        filename: '[name]-[chunkhash:8].js'
    },
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
        }),
        new HtmlWebpackPlugin({
            title: "学习Symbol",
            filename: '../../demos/symbol.html',
            chunks: ['symbol']
        }),
        new HtmlWebpackPlugin({
            title: 'set_and_map',
            filename: '../../demos/set_and_map.html',
            chunks: ['set_and_map']
        }),
        new HtmlWebpackPlugin({
            title: 'proxy_and_reflect',
            filename: '../../demos/proxy_and_reflect.html',
            chunks: ['proxy_and_reflect']
        }),
        new HtmlWebpackPlugin({
            title: 'generator',
            filename: '../../demos/generator.html',
            chunks: ['generator']
        }),
        new HtmlWebpackPlugin({
            title: 'promise',
            filename: '../../demos/promise.html',
            chunks: ['promise']
        }),
        new HtmlWebpackPlugin({
            title: '异步操作',
            filename: '../../demos/async_operation.html',
            chunks: ['async_operation']
        }),
        new HtmlWebpackPlugin({
            title: 'ES6 Class',
            filename: '../../demos/es6_class.html',
            chunks: ['es6_class']
        }),
        new CleanWebpackPlugin(['scripts/dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ]
};
