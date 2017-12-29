const path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: {
        index: ['./src/ButterToast/index.js']
    },
    devtool: 'source-map',
    externals: {
        'react': 'react',
        'react-dom': 'react-dom'
    },
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'butter-toast.js',
        library: 'ButterToast',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
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
        })
    ]
};