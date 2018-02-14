const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    externals: {
        'react': 'react',
        'react-dom': 'react-dom'
    },
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist/universal'),
        filename: 'index.js',
        library: 'ButterToast',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']}),
            include: path.resolve(__dirname, '../')
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true
        }),
        new ExtractTextPlugin('style.css')
    ]
};