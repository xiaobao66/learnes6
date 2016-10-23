var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        index: './scripts/src/index.js',
        let_and_const: './scripts/src/let_and_const.js'
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
}
