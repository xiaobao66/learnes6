var path = require('path')
var webpack = require('webpack')

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
        filename: '[name].js'
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
    }
};
