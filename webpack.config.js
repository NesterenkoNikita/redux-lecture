const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        __dirname + '/index.js',
    ],
    resolve: {
        extensions: ['', '.js', '.styl']
    },
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel']
        }, {
            test: /\.styl$/,
            loaders: ['style', 'css', 'stylus']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
