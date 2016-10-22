var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        index: './scripts/src/index.js'
    },
    output: {
        path: __dirname + '/scripts/dist/',
        filename: '[name].js'
    },
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
